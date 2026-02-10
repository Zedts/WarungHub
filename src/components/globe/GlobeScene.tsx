"use client";

import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { latLonToVector3, createHolographicMaterial } from "../../lib/globe-utils";
import { GLOBE_LOCATIONS, GLOBE_CONNECTIONS, GLOBE_CONFIG } from "../../lib/globe-data";

export default function GlobeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  const addMarkersAndConnections = useCallback((container: THREE.Group) => {
    const posMap: Record<string, THREE.Vector3> = {};

    GLOBE_LOCATIONS.forEach((loc) => {
      const position = latLonToVector3(
        loc.lat,
        loc.lon,
        GLOBE_CONFIG.globeRadius
      );
      posMap[loc.id] = position;

      const markerGeometry = new THREE.SphereGeometry(0.3, 16, 16);
      const markerMaterial = new THREE.MeshBasicMaterial({
        color: loc.type === "office" ? 0x4a7043 : 0x5a7b9a,
      });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.copy(position);
      container.add(marker);

      const beamGeometry = new THREE.CylinderGeometry(0.05, 0.05, 2, 8);
      const beamMaterial = new THREE.MeshBasicMaterial({
        color: 0x4a7043,
        opacity: 0.6,
        transparent: true,
      });
      const beam = new THREE.Mesh(beamGeometry, beamMaterial);
      beam.position.copy(position);
      beam.lookAt(0, 0, 0);
      beam.rotateX(Math.PI / 2);
      container.add(beam);
    });

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4a7043,
      opacity: 0.75,
      transparent: true,
      linewidth: 2,
    });

    GLOBE_CONNECTIONS.forEach((conn) => {
      const start = posMap[conn.from];
      const end = posMap[conn.to];

      if (!start || !end) return;

      const points = [];
      const steps = 30;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const mid = new THREE.Vector3().lerpVectors(start, end, t);
        const arcHeight = start.distanceTo(end) * 0.3;
        mid.normalize().multiplyScalar(GLOBE_CONFIG.globeRadius + arcHeight * Math.sin(t * Math.PI));
        points.push(mid);
      }

      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      container.add(line);
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      35,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 60);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    globeGroup.position.y = GLOBE_CONFIG.globeY;
    scene.add(globeGroup);

    const earthDataContainer = new THREE.Group();
    globeGroup.add(earthDataContainer);

    const globeGeometry = new THREE.SphereGeometry(
      GLOBE_CONFIG.globeRadius,
      128,
      128
    );

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg",
      (texture) => {
        const globeMaterial = createHolographicMaterial(texture);
        const globe = new THREE.Mesh(globeGeometry, globeMaterial);
        earthDataContainer.add(globe);

        const wireframeGeometry = new THREE.EdgesGeometry(globeGeometry);
        const wireframeMaterial = new THREE.LineBasicMaterial({
          color: 0x5a7b9a,
          opacity: 0.15,
          transparent: true,
        });
        const wireframe = new THREE.LineSegments(
          wireframeGeometry,
          wireframeMaterial
        );
        earthDataContainer.add(wireframe);

        addMarkersAndConnections(earthDataContainer);
      }
    );

    earthDataContainer.rotation.x = GLOBE_CONFIG.indonesiaRotationX;
    earthDataContainer.rotation.y = GLOBE_CONFIG.indonesiaRotationY;

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !globeGroup) return;

      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      globeGroup.rotation.y += deltaX * 0.005;
      globeGroup.rotation.x += deltaY * 0.005;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    container.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      if (globeGroup && !isDragging) {
        globeGroup.rotation.y += GLOBE_CONFIG.autoRotateSpeed;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer) return;

      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (renderer) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, [addMarkersAndConnections]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ cursor: "grab" }}
    />
  );
}
