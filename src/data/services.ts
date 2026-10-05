export type ServiceCategory =
  | "diagnostico"
  | "mantenimiento"
  | "hardware"
  | "software"
  | "remoto";

export interface Service {
  name: string;
  slug: string;
  description: string;
  priceFrom: number | null;
  duration: string | null;
  category: ServiceCategory;
  featured: boolean;
}

export const currencyLabel = "$U";

export function formatPrice(service: Service): string {
  if (service.priceFrom === null) {
    return "Consultar";
  }

  if (service.priceFrom === 0) {
    return "GRATIS";
  }

  return `Desde ${currencyLabel} ${service.priceFrom}`;
}

export const services: Service[] = [
  {
    name: "Diagnóstico informático",
    slug: "diagnostico",
    description:
      "Evaluación inicial del equipo para identificar la causa probable del problema y recomendar una solución.",
    priceFrom: 0,
    duration: "A coordinar",
    category: "diagnostico",
    featured: true,
  },

  {
    name: "Limpieza y mantenimiento de PC",
    slug: "mantenimiento-pc",
    description:
      "Limpieza interna, eliminación de polvo, revisión de ventilación y mantenimiento preventivo de tu PC.",
    priceFrom: 1400,
    duration: "1 a 2 horas",
    category: "mantenimiento",
    featured: true,
  },

  {
    name: "Limpieza y mantenimiento de notebook",
    slug: "mantenimiento-notebook",
    description:
      "Limpieza interna, mantenimiento del sistema de refrigeración y revisión general de tu notebook.",
    priceFrom: 1600,
    duration: "1 a 2 horas",
    category: "mantenimiento",
    featured: true,
  },

  {
    name: "Cambio de pasta térmica",
    slug: "pasta-termica",
    description:
      "Renovación de la pasta térmica para mejorar la transferencia de calor entre el procesador y el sistema de refrigeración.",
    priceFrom: 1000,
    duration: "30 a 90 min",
    category: "mantenimiento",
    featured: false,
  },

  {
    name: "Optimización de PC o notebook",
    slug: "optimizacion",
    description:
      "Ajustes de software para mejorar el rendimiento, el inicio del sistema y el funcionamiento general del equipo.",
    priceFrom: 1200,
    duration: "1 a 2 horas",
    category: "software",
    featured: true,
  },

  {
    name: "Instalación de SSD",
    slug: "instalacion-ssd",
    description:
      "Instalación y configuración de una unidad SSD compatible con tu equipo.",
    priceFrom: 1200,
    duration: "1 a 2 horas",
    category: "hardware",
    featured: true,
  },

  {
    name: "Clonación de disco",
    slug: "clonacion-disco",
    description:
      "Migración del sistema y archivos desde un HDD o SSD hacia otra unidad.",
    priceFrom: 1500,
    duration: "2 a 4 horas",
    category: "hardware",
    featured: false,
  },

  {
    name: "Instalación o ampliación de RAM",
    slug: "ampliacion-ram",
    description:
      "Instalación de memoria RAM y comprobación de compatibilidad y funcionamiento.",
    priceFrom: 700,
    duration: "30 a 60 min",
    category: "hardware",
    featured: false,
  },

  {
    name: "Instalación de Windows + drivers",
    slug: "instalacion-windows",
    description:
      "Instalación de Windows, controladores y configuración inicial del equipo. Licencia no incluida.",
    priceFrom: 1800,
    duration: "2 a 4 horas",
    category: "software",
    featured: true,
  },

  {
    name: "Instalación de Linux + drivers",
    slug: "instalacion-linux",
    description:
      "Instalación y configuración de una distribución Linux adecuada para tu equipo y necesidades.",
    priceFrom: 1500,
    duration: "2 a 3 horas",
    category: "software",
    featured: false,
  },

  {
    name: "Instalación de drivers",
    slug: "drivers",
    description:
      "Instalación y actualización de controladores necesarios para el correcto funcionamiento del equipo.",
    priceFrom: 600,
    duration: "30 a 60 min",
    category: "software",
    featured: false,
  },

  {
    name: "Instalación y configuración de software",
    slug: "software",
    description:
      "Instalación y configuración de programas según las necesidades del usuario. Licencias no incluidas.",
    priceFrom: 700,
    duration: "30 a 90 min",
    category: "software",
    featured: false,
  },

  {
    name: "Eliminación de malware",
    slug: "eliminacion-malware",
    description:
      "Análisis y eliminación de malware, programas no deseados y configuraciones que afecten el funcionamiento del equipo.",
    priceFrom: 1200,
    duration: "1 a 2 horas",
    category: "software",
    featured: false,
  },

  {
    name: "Configuración de impresoras y periféricos",
    slug: "impresoras-perifericos",
    description:
      "Instalación y configuración de impresoras, escáneres y periféricos compatibles.",
    priceFrom: 700,
    duration: "30 a 60 min",
    category: "software",
    featured: false,
  },

  {
    name: "Transferencia y copia de datos",
    slug: "copias-datos",
    description:
      "Transferencia de documentos, fotografías y otros archivos entre equipos o unidades de almacenamiento.",
    priceFrom: 1000,
    duration: "1 a 3 horas",
    category: "software",
    featured: false,
  },

  {
    name: "Soporte remoto",
    slug: "soporte-remoto",
    description:
      "Asistencia remota para resolver problemas de software, configuración y soporte informático.",
    priceFrom: 800,
    duration: "Por hora",
    category: "remoto",
    featured: true,
  },
];