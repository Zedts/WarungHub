import * as THREE from "three";

export function latLonToVector3(
  lat: number,
  lon: number,
  radius: number
): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}

export function createHolographicMaterial(
  texture: THREE.Texture
): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      globeTexture: { value: texture },
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D globeTexture;
      varying vec2 vUv;
      varying vec3 vNormal;
      
      void main() {
        vec3 color = texture2D(globeTexture, vUv).xyz;
        
        float intensity = 1.2 - dot(vNormal, vec3(0.0, 0.0, 1.0));
        vec3 atmosphere = vec3(0.29, 0.44, 0.51) * pow(intensity, 1.8);
        
        gl_FragColor = vec4(color + atmosphere * 0.3, 1.0);
      }
    `,
    side: THREE.DoubleSide,
  });
}
