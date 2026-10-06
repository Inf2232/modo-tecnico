export const PENDING = "[POR DEFINIR]";
import { projects } from "../data/projects";
export const features = { blog: true };
export const site = {
  name: "Modo Técnico",
  description:
    "Servicio técnico, mantenimiento y soporte informático en Montevideo, Uruguay.",
  url: "https://modo-tecnico.carlospescoso03.workers.dev/", // se completa cuando tengamos dominio o URL de Cloudflare Pages
  city: "Montevideo",
  country: "Uruguay",
  language: "es",
} as const;

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  ...(projects.length > 0 ? [{ label: "Trabajos", href: "/trabajos" }] : []),
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Blog", href: "/blog" },
  { label: "Preguntas", href: "/faq" },
  { label: "Contacto", href: "/contacto" },
];

export const isDefined = (value: string) => value !== PENDING;


export const owner = {
  name: "Carlos Alejandro Pescoso Reyes",
  title: "Ingeniero Informático",
  supportExperience: "2 años de experiencia en soporte técnico",
} as const;