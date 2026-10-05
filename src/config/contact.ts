import { PENDING } from "./site";

export const contact = {
  whatsapp: PENDING, // formato internacional sin "+" ni espacios
  phone: PENDING,
  email: PENDING,
  location: "Montevideo, Uruguay",
  serviceArea: PENDING,
  hours: PENDING,
  social: {
    instagram: PENDING,
    facebook: PENDING,
    github: PENDING,
  },
} as const;