import { PENDING } from "./site";

export const contact = {
  whatsapp: "59899214670", // formato internacional sin "+" ni espacios
  phone: "+598 99214670", // formato internacional con "+" y espacios
  email: "carlospescoso03@gmail.com",
  location: "Montevideo, Uruguay",
  serviceArea: "Cordon y alrededores",
  serviceModes: ["A domicilio", "Recogida del equipo"], // revisar el texto
  address: PENDING, // solo si atiendes en un local; si no, déjalo así
  mapsUrl: "https://maps.app.goo.gl/wTzxRMnEuf34wN9J8", // enlace de Google Maps / ficha de Google Business Profile
  hours: PENDING,
  social: {
    instagram: PENDING,
    facebook: PENDING,
    github: PENDING,
  },
} as const;