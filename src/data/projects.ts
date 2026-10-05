import type { ImageMetadata } from "astro";

export interface Project {
  title: string;
  slug: string;
  equipmentType: string;
  problem: string;
  diagnosis: string;
  work: string;
  result: string;
  date: string; // formato AAAA-MM-DD
  images?: { src: ImageMetadata; alt: string }[];
}

// Solo trabajos REALES. Sin nombres ni datos personales del cliente.
export const projects: Project[] = [
  // Plantilla: descomenta y completa con un trabajo que hayas hecho de verdad.
  // {
  //   title: "",
  //   slug: "",
  //   equipmentType: "",
  //   problem: "",
  //   diagnosis: "",
  //   work: "",
  //   result: "",
  //   date: "2026-10-01",
  // },
];