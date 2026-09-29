import type { HowWeWork } from "../en/how-we-work";

/**
 * Cómo trabajamos: reduce la sensación de riesgo. Auditoría, alcance, fases a precio fijo, construcción a la
 * vista (enlace de pruebas, informe escrito cada semana), controles de calidad, lanzamiento y 90 días de
 * cuidado, y luego un plan.
 */
export const howWeWork: HowWeWork = {
  metaTitle: "Cómo trabajamos",
  metaDescription:
    "Auditoría, alcance, fases a precio fijo, construcción a la vista con un informe escrito semanal, controles de calidad y 90 días de cuidado después del lanzamiento. El código, las cuentas y los dominios son suyos.",
  eyebrow: "Cómo trabajamos",
  title: "Un proceso claro, sin sorpresas.",
  lead: "Todo proyecto sigue el mismo camino. En cada paso sabe qué sigue, cuánto cuesta y quién es responsable.",

  stepsTitle: "El camino de la primera llamada a la operación diaria",
  step: "Paso {number}",
  youGet: "Usted recibe",
  steps: [
    {
      title: "Auditoría",
      detail: "Revisamos cómo trabajan juntos su sitio web, su bandeja de entrada, sus herramientas y su equipo, y encontramos dónde se pierden tiempo y consultas.",
      youGet: "Un mapa de sistemas, hallazgos con pruebas y un plan con costos.",
    },
    {
      title: "Alcance",
      detail: "Convertimos el plan en un alcance escrito: qué entra, qué no y cómo sabremos que funcionó.",
      youGet: "Un alcance que usted aprueba antes de que se construya nada.",
    },
    {
      title: "Fases a precio fijo",
      detail: "Cada fase tiene sus propios entregables y su propio precio. Usted aprueba una a la vez.",
      youGet: "Un precio fijo para la siguiente fase, por escrito.",
    },
    {
      title: "Construir a la vista",
      detail: "Usted puede ver el trabajo mientras ocurre. No hay nada que esperar hasta el final.",
      youGet: "Un enlace de pruebas desde la primera semana y un informe escrito cada semana.",
    },
    {
      title: "Controles de calidad",
      detail: "Antes del lanzamiento, el trabajo pasa siempre las mismas revisiones.",
      youGet: "Una lista de verificación: accesibilidad, velocidad en el teléfono, seguridad y formularios probados de principio a fin en cada idioma.",
    },
    {
      title: "Lanzamiento y 90 días de cuidado",
      detail: "Publicamos y luego vigilamos. Durante 90 días monitoreamos y corregimos lo que surja.",
      youGet: "Un lanzamiento en el que puede confiar y una persona con nombre y apellido a quien llamar.",
    },
    {
      title: "Plan",
      detail: "Después usted elige lo que sigue: un plan de gestión, la siguiente fase o pasar el trabajo a su propio equipo.",
      youGet: "Una recomendación clara y la libertad de decir que no.",
    },
  ],

  ownershipTitle: "De quién es cada cosa",
  ownershipLead: "Suyo. Así lo hacemos realidad en la práctica, no solo en el contrato.",
  ownership: [
    {
      title: "El código",
      detail: "El código vive en un repositorio de su organización, no de la nuestra.",
    },
    {
      title: "Las cuentas",
      detail: "Las cuentas de alojamiento, gestión de contenido, analítica y correo se abren a nombre de su empresa, protegidas con autenticación multifactor.",
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

  reviewerTitle: "Para su responsable de TI o asesor",
  reviewerLead: "Las preguntas que hace un revisor cuidadoso, con respuestas claras.",
  reviewerFaqs: [
    {
      question: "¿Qué pasa si ustedes desaparecen?",
      answer:
        "No se rompe nada. El código, las cuentas y los dominios ya son suyos, y la documentación está en su repositorio. Cualquier desarrollador competente puede tomar el relevo.",
    },
    {
      question: "¿Es seguro?",
      answer:
        "Seguimos un estándar de seguridad publicado: HTTPS en todas partes, encabezados de seguridad, ningún secreto en el código, disponibilidad monitoreada, copias de seguridad y actualizaciones rápidas.",
    },
    {
      question: "¿Qué tecnología usan?",
      answer:
        "Herramientas comunes y bien documentadas, como TypeScript, React y Next.js, PostgreSQL y alojamiento administrado, elegidas para cada proyecto de modo que cualquier persona capacitada pueda mantenerlas.",
    },
    {
      question: "¿Quién tiene acceso a nuestros datos?",
      answer:
        "Solo quienes lo necesitan, mediante cuentas nominales y con autenticación multifactor. Usted puede revisar y retirar accesos cuando quiera.",
    },
  ],
  standardsLink: "Leer todos nuestros estándares",

  neededTitle: "Qué necesitamos de usted",
  needed: [
    "Una persona que pueda tomar decisiones.",
    "Acceso a los sistemas que revisamos, en los términos que usted controle.",
    "Una mirada breve cada semana al informe escrito.",
  ],
};
