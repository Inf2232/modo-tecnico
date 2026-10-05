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
  includes?: string[]; // qué incluye el servicio
  idealFor?: string[]; // cuándo conviene contratarlo
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
    includes: [
      "Revisión del estado general del equipo",
      "Identificación de la causa probable del problema",
      "Recomendación de la solución más adecuada",
    ],
    idealFor: [
      "Tu equipo falla y no sabes por qué",
      "Quieres saber qué necesita antes de decidir",
      "Necesitas una segunda opinión sobre un problema",
    ],
  },

  {
    name: "Limpieza y mantenimiento de PC",
    slug: "mantenimiento-pc",
    description: "Limpieza interna y revisión general de tu PC de escritorio.",
    priceFrom: 1600,
    duration: null,
    category: "mantenimiento",
    featured: true,
    includes: [
      "Limpieza interna de polvo",
      "Revisión de los ventiladores",
      "Revisión de las temperaturas",
      "Revisión general del estado del equipo",
    ],
    idealFor: [
      "El equipo hace más ruido de lo normal",
      "Se calienta más de lo habitual",
      "Hace mucho tiempo que no recibe mantenimiento",
    ],
  },

  {
    name: "Limpieza y mantenimiento de notebook",
    slug: "mantenimiento-notebook",
    description:
      "Limpieza interna, mantenimiento del sistema de refrigeración y revisión general de tu notebook.",
    priceFrom: 1700,
    duration: "1 a 2 horas",
    category: "mantenimiento",
    featured: true,
    includes: [
      "Limpieza interna del equipo",
      "Mantenimiento del sistema de refrigeración",
      "Revisión general del estado de la notebook",
    ],
    idealFor: [
      "La notebook se calienta más de lo habitual",
      "El ventilador hace ruido o suena forzado",
      "Hace mucho tiempo que no recibe mantenimiento",
    ],
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
    includes: [
      "Retiro de la pasta térmica anterior",
      "Aplicación de pasta térmica nueva",
      "Comprobación de las temperaturas después del cambio",
    ],
    idealFor: [
      "Las temperaturas del procesador son altas",
      "La pasta térmica lleva muchos años sin renovarse",
    ],
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
    includes: [
      "Revisión de lo que se ejecuta al iniciar el sistema",
      "Ajustes de configuración para mejorar el rendimiento",
      "Revisión general del funcionamiento del equipo",
    ],
    idealFor: [
      "El equipo tarda mucho en iniciar",
      "El sistema se siente lento al usarlo",
      "Quieres mejorar el rendimiento antes de pensar en cambiar de equipo",
    ],
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
    includes: [
      "Comprobación de que el SSD es compatible con tu equipo",
      "Instalación física de la unidad",
      "Configuración de la unidad",
    ],
    idealFor: [
      "Tu equipo todavía usa un disco duro mecánico (HDD)",
      "El equipo tarda en iniciar y en abrir programas",
      "Quieres más almacenamiento o una unidad más rápida",
    ],
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
    includes: [
      "Copia del sistema y de los archivos a la nueva unidad",
      "Comprobación de que el equipo inicia desde la nueva unidad",
    ],
    idealFor: [
      "Vas a cambiar tu disco por un SSD y quieres conservar tu sistema",
      "Quieres pasar a una unidad más grande sin reinstalar todo",
    ],
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
    includes: [
      "Comprobación de compatibilidad de la memoria con tu equipo",
      "Instalación de la memoria RAM",
      "Comprobación de que el equipo la reconoce y funciona",
    ],
    idealFor: [
      "El equipo se pone lento al abrir varios programas",
      "Quieres ampliar la memoria de tu equipo",
    ],
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
    includes: [
      "Instalación de Windows",
      "Instalación de los controladores (drivers)",
      "Configuración inicial del equipo",
      "La licencia de Windows no está incluida",
    ],
    idealFor: [
      "El sistema falla o está muy lento",
      "Tienes un equipo nuevo o un disco nuevo sin sistema",
      "Quieres empezar de cero con el equipo limpio",
    ],
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
    includes: [
      "Elección de una distribución adecuada para tu equipo y tus necesidades",
      "Instalación de Linux",
      "Instalación de los controladores y configuración inicial",
    ],
    idealFor: [
      "Quieres probar o pasarte a Linux",
      "Quieres darle otro uso a un equipo que ya no rinde con su sistema actual",
    ],
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
    includes: [
      "Identificación de los controladores que faltan o están desactualizados",
      "Instalación y actualización de los controladores",
      "Comprobación del funcionamiento de los dispositivos",
    ],
    idealFor: [
      "Falta el sonido, la red, el vídeo u otro dispositivo después de instalar el sistema",
      "Windows muestra dispositivos sin reconocer",
    ],
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
    includes: [
      "Instalación de los programas que necesitas",
      "Configuración inicial según tu uso",
      "Las licencias no están incluidas",
    ],
    idealFor: [
      "Tienes un equipo nuevo o recién reinstalado",
      "Necesitas programas de trabajo o estudio ya configurados",
      "No sabes cómo instalar o configurar un programa",
    ],
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
    includes: [
      "Análisis del equipo en busca de malware y programas no deseados",
      "Eliminación de lo que se detecte",
      "Revisión de configuraciones que afecten el funcionamiento",
    ],
    idealFor: [
      "Aparece publicidad o ventanas emergentes inesperadas",
      "El navegador cambió su página de inicio o su buscador",
      "El equipo se volvió lento sin una causa clara",
    ],
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
    includes: [
      "Instalación de la impresora, el escáner o el periférico",
      "Instalación de los controladores",
      "Configuración y prueba de funcionamiento",
    ],
    idealFor: [
      "Compraste una impresora o un periférico nuevo",
      "Tu equipo no reconoce la impresora",
      "Cambiaste de equipo y la impresora dejó de funcionar",
    ],
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
    includes: [
      "Copia de documentos, fotografías y otros archivos",
      "Transferencia entre equipos o unidades de almacenamiento",
      "Comprobación de que los archivos quedaron copiados",
    ],
    idealFor: [
      "Cambias de equipo y quieres llevar tus archivos",
      "Quieres hacer una copia de seguridad de tus archivos",
      "Vas a reinstalar el sistema y no quieres perder tus archivos",
    ],
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
    includes: [
      "Asistencia a distancia sobre tu equipo",
      "Resolución de problemas de software y de configuración",
    ],
    idealFor: [
      "El problema es de software o de configuración",
      "No puedes o no quieres trasladar el equipo",
      "Tienes una duda puntual de uso",
    ],
  },
];