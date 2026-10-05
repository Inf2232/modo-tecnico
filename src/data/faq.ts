export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "¿Dónde trabajan?",
    answer:
      "Trabajamos en Montevideo, a domicilio o con recogida del equipo.", // revisar "recogida"
  },
  {
    question: "¿Para quién es el servicio?",
    answer: "Para particulares y pequeños negocios.",
  },
  {
    question: "¿Qué servicios ofrecen?",
    answer:
      "Diagnóstico, limpieza y mantenimiento de PC y notebooks, instalación de SSD y RAM, instalación y configuración de Windows y Linux, optimización de equipos, soporte remoto y otros servicios informáticos. Puedes ver la lista completa en la sección de servicios.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Depende del servicio y del estado del equipo. Consúltanos y te orientamos sobre los próximos pasos.",
  },
  {
    question: "¿Hacen soporte remoto?",
    answer:
      "Sí, para problemas de software que se pueden resolver a distancia, sin trasladar el equipo.",
  },
  {
    question: "¿Reparan placas o hacen microsoldadura?",
    answer:
      "No. Nos enfocamos en diagnóstico, mantenimiento, instalación y soporte de hardware y software. No realizamos reparación electrónica avanzada ni recuperación profesional de datos.",
  },
];