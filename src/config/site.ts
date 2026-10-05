export const PENDING = "[POR DEFINIR]";

export const site = {
  name: "Modo Técnico",
  description:
    "Servicio técnico, mantenimiento y soporte informático en Montevideo, Uruguay.",
  url: PENDING, // se completa cuando tengamos dominio o URL de Cloudflare Pages
  city: "Montevideo",
  country: "Uruguay",
  language: "es",
} as const;

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Trabajos", href: "/trabajos" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Contacto", href: "/contacto" },
] as const;
export const isDefined = (value: string) => value !== PENDING;