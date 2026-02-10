export type Location = {
  id: string;
  name: string;
  lat: number;
  lon: number;
  type: "warehouse" | "office" | "distribution";
};

export type Connection = {
  from: string;
  to: string;
};

export type GlobeConfig = {
  globeRadius: number;
  globeY: number;
  autoRotateSpeed: number;
  indonesiaRotationX: number;
  indonesiaRotationY: number;
};

export type GlobeStat = {
  value: string;
  label: string;
};
