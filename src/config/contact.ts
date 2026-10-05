import { PENDING } from "./site";

export const contact = {
  whatsapp: "99214670", // formato internacional sin "+" ni espacios
  phone: "+598 99214670", // formato internacional con "+" y espacios
  email: "carlospescoso03@gmail.com",
  location: "Montevideo, Uruguay",
  serviceArea: "Cordon y alrededores",
  hours: PENDING,
  social: {
    instagram: PENDING,
    facebook: PENDING,
    github: PENDING,
  },
} as const;