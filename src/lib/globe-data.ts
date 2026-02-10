import type { Location, Connection, GlobeConfig, GlobeStat } from "../types/globe";

export const GLOBE_CONFIG: GlobeConfig = {
  globeRadius: 20,
  globeY: -10,
  autoRotateSpeed: 0.0003,
  indonesiaRotationX: 1.6,
  indonesiaRotationY: 4.8,
};

export const GLOBE_LOCATIONS: Location[] = [
  {
    id: "jakarta",
    name: "Jakarta HQ",
    lat: -6.2088,
    lon: 106.8456,
    type: "office",
  },
  {
    id: "bandung",
    name: "Bandung Hub",
    lat: -6.9175,
    lon: 107.6191,
    type: "distribution",
  },
  {
    id: "semarang",
    name: "Semarang Center",
    lat: -6.9667,
    lon: 110.4167,
    type: "distribution",
  },
  {
    id: "surabaya",
    name: "Surabaya Hub",
    lat: -7.2575,
    lon: 112.7521,
    type: "warehouse",
  },
  {
    id: "bali",
    name: "Bali Branch",
    lat: -8.4095,
    lon: 115.1889,
    type: "distribution",
  },
  {
    id: "makassar",
    name: "Makassar Hub",
    lat: -5.1477,
    lon: 119.4327,
    type: "warehouse",
  },
  {
    id: "medan",
    name: "Medan Center",
    lat: 3.5952,
    lon: 98.6722,
    type: "distribution",
  },
];

export const GLOBE_CONNECTIONS: Connection[] = [
  { from: "jakarta", to: "bandung" },
  { from: "jakarta", to: "semarang" },
  { from: "jakarta", to: "surabaya" },
  { from: "jakarta", to: "medan" },
  { from: "bandung", to: "semarang" },
  { from: "semarang", to: "surabaya" },
  { from: "surabaya", to: "bali" },
  { from: "surabaya", to: "makassar" },
  { from: "bali", to: "makassar" },
];

export const GLOBE_STATS: GlobeStat[] = [
  { value: "1,250+", label: "Active Sellers" },
  { value: "10K+", label: "Total Products" },
  { value: "100K+", label: "Successful Transactions" },
  { value: "4.8", label: "Average Rating" },
];
