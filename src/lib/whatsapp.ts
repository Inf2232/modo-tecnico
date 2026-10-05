import { contact } from "../config/contact";
import { isDefined } from "../config/site";

export function whatsappLink(message?: string): string {
  // Mientras no haya número, los botones llevan a la página de contacto.
  if (!isDefined(contact.whatsapp)) return "/contacto";

  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${contact.whatsapp}${text}`;
}
export const messages = {
  consulta: "Hola, quiero hacer una consulta.",
  presupuesto: "Hola, quiero pedir un presupuesto.",
} as const;