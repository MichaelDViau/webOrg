import type { HowWeWork } from "../en/how-we-work";

/**
 * Cómo trabajamos: cinco pasos flexibles (entender, planificar, construir, implementar, evolucionar), los
 * principios que los acompañan, de quién es qué y respuestas para un revisor técnico cuidadoso. El proceso
 * se adapta a cada proyecto: nunca es un único método rígido.
 */
export const howWeWork: HowWeWork = {
  metaTitle: "Cómo trabajamos: del desafío a la solución",
  metaDescription:
    "Nuestro enfoque para los proyectos tecnológicos: entender, planificar, construir, implementar y evolucionar. Un proceso flexible adaptado a cada proyecto, con una actualización escrita cada semana y plena propiedad del código.",
  eyebrow: "Cómo trabajamos",
  title: "Del desafío a la solución.",
  lead: "Cada proyecto tecnológico es distinto, así que nuestro proceso se adapta al trabajo. La mayoría de los proyectos sigue cinco pasos. Esto es lo que ocurre en cada uno y lo que usted recibe.",

  stepsTitle: "Cinco pasos, adaptados a cada proyecto",
  step: "Paso {number}",
  youGet: "Usted recibe",
  steps: [
    {
      title: "Entender",
      detail: "Conocemos el negocio, sus desafíos y objetivos, y la tecnología que ya está en funcionamiento.",
      points: [
        "Conversaciones con las personas que usan y operan los sistemas",
        "Una revisión del software, los datos y la infraestructura existentes",
        "Un planteamiento claro del problema y de lo que significa el éxito",
      ],
      youGet: "Un entendimiento compartido y por escrito del problema y de los objetivos.",
    },
    {
      title: "Planificar",
      detail: "Definimos el enfoque técnico correcto, la arquitectura y el plan para llevarlo a cabo.",
      points: [
        "Opciones comparadas, con las compensaciones explicadas en lenguaje sencillo",
        "Una recomendación de arquitectura y tecnología",
        "Un plan por fases con alcance, plazos y costos",
      ],
      youGet: "Una recomendación y un plan escritos que puede aprobar, o llevarse a otro lado.",
    },
    {
      title: "Construir",
      detail: "Diseñamos y desarrollamos el software, las aplicaciones, la infraestructura o las integraciones que el plan requiere.",
      points: [
        "Diseño y desarrollo en incrementos que funcionan",
        "Un entorno de pruebas que puede abrir en cualquier momento",
        "Una breve actualización escrita cada semana",
      ],
      youGet: "Software funcionando desde temprano, y visibilidad del avance de principio a fin.",
    },
    {
      title: "Implementar",
      detail: "Desplegamos, integramos y probamos la solución para que funcione en su entorno real.",
      points: [
        "Integración con sus sistemas y datos existentes",
        "Pruebas antes del lanzamiento, incluidas seguridad y rendimiento",
        "Un lanzamiento planificado, con una vía de retorno si algo sale mal",
      ],
      youGet: "Una solución en línea, probada y funcionando en su negocio.",
    },
    {
      title: "Evolucionar",
      detail: "Mejoramos, optimizamos, mantenemos y adaptamos la tecnología a medida que cambian sus necesidades.",
      points: [
        "Monitoreo y correcciones después del lanzamiento",
        "Actualizaciones y mejoras a medida que el negocio crece",
        "Documentación y una transición fluida, si quiere que su propio equipo tome el relevo",
      ],
      youGet: "Tecnología que acompaña al negocio, y la libertad de elegir quién la mantiene.",
    },
  ],

  flexibleTitle: "Un proceso flexible, no un método rígido",
  flexibleBody:
    "No hacemos pasar todos los proyectos por la misma secuencia. Un problema de rendimiento puede necesitar solo Entender y Construir. Una migración de plataforma requiere los cinco pasos. Acordamos los pasos que corresponden antes de empezar.",
  principlesTitle: "Cómo trabajamos con usted",
  principles: [
    {
      title: "Una persona designada es responsable",
      detail: "Usted sabe quién responde por su proyecto y cómo comunicarse con ella.",
    },
    {
      title: "Una actualización escrita cada semana",
      detail: "Una breve actualización por escrito, para que siempre sepa cómo van las cosas.",
    },
    {
      title: "Trabajo a la vista",
      detail: "Un entorno de pruebas que puede abrir en cualquier momento, desde el inicio del proyecto.",
    },
    {
      title: "Alcance acordado por escrito",
      detail: "El alcance y el precio se acuerdan por escrito antes de cada fase, y usted los aprueba primero.",
    },
  ],

  ownershipTitle: "De quién es qué",
  ownershipLead: "Suyo. Así hacemos que sea cierto en la práctica, y no solo en el contrato.",
  ownership: [
    {
      title: "El código",
      detail: "El código vive en un repositorio de su organización, no de la nuestra.",
    },
    {
      title: "Las cuentas",
      detail: "Las cuentas de alojamiento, analítica y correo se abren a nombre de su empresa y se protegen con autenticación multifactor.",
    },
    {
      title: "Los dominios",
      detail: "Su dominio está registrado a su nombre. Nunca lo conservamos por usted.",
    },
    {
      title: "Los accesos",
      detail: "Trabajamos con accesos nominales a sus cuentas. Usted puede retirarlos en cualquier momento.",
    },
  ],

  reviewerTitle: "Para su equipo técnico",
  reviewerLead: "Las preguntas que hace un revisor cuidadoso, respondidas con claridad.",
  reviewerFaqs: [
    {
      question: "¿Qué pasa si desaparecen?",
      answer:
        "Nada se detiene. El código, las cuentas y los dominios ya son suyos, y la documentación está en su repositorio. Cualquier desarrollador competente puede tomar el relevo.",
    },
    {
      question: "¿Es seguro?",
      answer:
        "Seguimos un estándar de seguridad publicado: HTTPS en todas partes, encabezados de seguridad, ningún secreto en el código, disponibilidad monitoreada, respaldos y actualizaciones rápidas.",
    },
    {
      question: "¿Qué tecnología usan?",
      answer:
        "Herramientas comunes y bien documentadas, elegidas proyecto por proyecto, como TypeScript, React, PostgreSQL y las principales plataformas en la nube, para que cualquier persona calificada pueda mantenerlas.",
    },
    {
      question: "¿Quién tiene acceso a nuestros datos?",
      answer:
        "Solo las personas que lo necesitan, mediante cuentas nominales y autenticación multifactor. Usted puede revisar y retirar los accesos cuando quiera.",
    },
  ],
  standardsLink: "Leer todos nuestros estándares de ingeniería",

  neededTitle: "Lo que necesitamos de usted",
  needed: [
    "Una persona que pueda tomar decisiones.",
    "Acceso a los sistemas que revisamos, en los términos que usted controle.",
    "Una breve mirada semanal a la actualización escrita.",
  ],
};
