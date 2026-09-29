import type { Audit, Snapshot } from "../en/audit";

/**
 * La página de la auditoría de sistemas digitales y la de la revisión gratuita: las dos acciones hacia las
 * que lleva todo el sitio. Los precios vienen de lib/pricing.ts y se insertan con `{price}` y `{days}`.
 */
export const audit: Audit = {
  metaTitle: "Auditoría de sistemas digitales",
  metaDescription:
    "Una revisión de alcance fijo de cómo trabajan juntos su sitio web, su bandeja de entrada, sus herramientas y su equipo. Recibe un mapa de sistemas, hallazgos con pruebas y un plan con costos. Tarifa acreditada por completo a un proyecto firmado dentro de 60 días.",
  eyebrow: "Auditoría de sistemas digitales",
  title: "Descubra dónde sus sistemas le cuestan tiempo, consultas y dinero.",
  lead: "Una revisión de alcance fijo de cómo trabajan juntos su sitio web, su bandeja de entrada, sus herramientas y su equipo. Recibe un mapa de sistemas, hallazgos respaldados con pruebas y un plan con costos, contrate o no nuestros servicios después.",

  priceTitle: "Precio",
  priceLabel: "{price}",
  priceDetail:
    "Dónde queda dentro del rango depende de cuántos sistemas y canales revisemos. Confirmamos el precio antes de empezar.",
  creditTitle: "Acreditada por completo",
  creditBody:
    "Si firma un proyecto con nosotros dentro de {days} días después de la auditoría, la tarifa de la auditoría se acredita por completo a ese proyecto.",

  reviewTitle: "Qué revisamos",
  review: [
    {
      title: "Su sitio web y cómo llegan las consultas",
      detail: "Formularios, teléfono, correo y cualquier otro canal por el que un cliente puede contactarle.",
    },
    {
      title: "Qué pasa con una consulta",
      detail: "Quién la ve, quién responde y cuánto tarda.",
    },
    {
      title: "Las herramientas que usa su equipo",
      detail: "Qué guarda cada una y dónde se vuelven a capturar los mismos datos.",
    },
    {
      title: "Lo que preguntan los clientes y un portal podría responder",
      detail: "Las llamadas y los correos que se repiten, y la información que hay detrás.",
    },
    {
      title: "Lo básico de lo que es público",
      detail: "Velocidad, accesibilidad y seguridad de su sitio, revisadas desde fuera.",
    },
  ],

  receiveTitle: "Qué recibe",
  receive: [
    {
      title: "Un mapa de sistemas",
      detail: "Un diagrama de cómo se conectan hoy sus herramientas y de dónde se vuelve a capturar, se retrasa o se pierde la información.",
    },
    {
      title: "Hallazgos con pruebas",
      detail: "Cada hallazgo muestra qué vimos, dónde y cuánto le cuesta en tiempo o en consultas perdidas. Ningún hallazgo sin pruebas.",
    },
    {
      title: "Un plan con costos",
      detail: "Correcciones priorizadas, cada una con una fase a precio fijo. Usted decide qué hacer primero y quién lo hace.",
    },
  ],
  mapCaption: "Un mapa de sistemas muestra dónde se conectan sus herramientas y dónde no.",

  timingTitle: "Plazos",
  timingBody:
    "Programamos la auditoría cuando usted reserva. Confirmamos las fechas exactas, y el precio dentro del rango, antes de empezar, para que no haya sorpresas.",

  stepsTitle: "Cómo funciona",
  steps: [
    { title: "Usted envía el formulario de abajo", detail: "Cinco campos breves. Recibe de inmediato un correo de confirmación." },
    { title: "Una persona le responde en una hora hábil", detail: "Confirmamos qué quiere mejorar y respondemos sus primeras preguntas." },
    { title: "Llamada de descubrimiento", detail: "Una llamada breve para acordar el alcance y el precio." },
    { title: "Cuestionario", detail: "Después de reservar, enviamos las preguntas detalladas. Nada largo en el sitio web." },
    { title: "Revisión", detail: "Revisamos sus sistemas, con accesos que usted controla." },
    { title: "Presentación", detail: "Le explicamos el mapa de sistemas, los hallazgos y el plan con costos." },
  ],

  formTitle: "Reserve su auditoría",
  formLead: "Cuéntenos qué quiere mejorar. Una persona le responde en una hora hábil.",
  bookLabel: "O elija un horario ahora",

  smallerTitle: "¿Prefiere empezar con algo más pequeño?",
  smallerBody: "La revisión gratuita le da tres observaciones concretas sobre su sitio web, sin costo.",

  faqTitle: "Preguntas sobre la auditoría",
  faqs: [
    {
      question: "¿Cuánto cuesta la auditoría?",
      answer:
        "{price}. La tarifa depende de cuántos sistemas y canales revisemos. La confirmamos antes de empezar y la acreditamos por completo a un proyecto que firme dentro de {days} días.",
    },
    {
      question: "¿Tengo que contratarlos después?",
      answer: "No. El plan es suyo. Puede ponerlo en práctica con nosotros, con otra persona o por su cuenta.",
    },
    {
      question: "¿Qué accesos necesitan?",
      answer:
        "Solo los que la revisión requiere, y solo hasta donde usted lo permita. Pedimos acceso de solo lectura siempre que sea posible y dejamos constancia de lo que nos dieron.",
    },
    {
      question: "¿Qué pasa con lo que ustedes ven?",
      answer:
        "Es confidencial y se usa solo para su auditoría. Nuestros estándares de privacidad y seguridad describen cómo lo manejamos.",
    },
  ],
};

export const snapshot: Snapshot = {
  metaTitle: "Revisión gratuita de su sitio web",
  metaDescription:
    "Reciba sin costo tres observaciones concretas sobre su sitio web, escritas por una persona. La forma de menor compromiso para ver cómo pensamos.",
  eyebrow: "Revisión gratuita",
  title: "Tres observaciones concretas sobre su sitio web. Gratis.",
  lead: "Envíenos su dirección. Una persona revisa su sitio y le dice tres cosas concretas que vale la pena corregir, y por qué.",

  whatTitle: "Qué recibe",
  what: [
    "Tres observaciones concretas sobre su sitio, no un informe genérico.",
    "Cuánto le cuesta cada una y qué hacer al respecto.",
    "Sin compromiso. Si una revisión es todo lo que necesita, está bien.",
  ],
  howTitle: "Cómo funciona",
  how: [
    "Envía su nombre, su correo electrónico y la dirección de su sitio web.",
    "Recibe de inmediato un correo de confirmación.",
    "Una persona le responde en una hora hábil.",
    "Su revisión llega después: tres observaciones, cada una con lo que conviene hacer.",
  ],
  formTitle: "Pida su revisión gratuita",
  formLead: "Cuatro campos breves. Solo los usamos para enviarle su revisión.",
  instantTitle: "¿Quiere cifras ahora mismo?",
  instantBody: "La prueba de velocidad instantánea ejecuta un análisis automatizado en menos de un minuto. La revisión es la mirada de una persona.",
  instantLink: "Ejecutar la prueba de velocidad instantánea",
  auditTitle: "¿Listo para ver el panorama completo?",
  auditBody: "La auditoría de sistemas digitales revisa juntos su sitio web, su bandeja de entrada, sus herramientas y su equipo.",
};
