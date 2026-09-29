import type { Ui } from "../en/ui";

/**
 * Texto de interfaz compartido, en español. Debe tener la misma forma que la versión en inglés
 * (véase `Ui`). Se trata de "usted", con frases cortas y el vocabulario del cliente.
 */
export const ui: Ui = {
  site: {
    description:
      "{name} diseña, construye y opera sitios web, portales de clientes, software interno y automatizaciones para empresas de servicios y operaciones ya establecidas.",
    hours: "De lunes a viernes, de 9:00 a 18:00, hora del centro",
    shareImageAlt: "{name}: los sistemas que hacen funcionar su empresa",
    audienceType: "Empresas de servicios y operaciones establecidas",
    countriesLabel: "Países donde trabajamos",
    countries: ["Estados Unidos", "Canadá", "México"],
    languagesLabel: "Idiomas",
    languages: "español, inglés y francés",
  },

  skipToContent: "Saltar al contenido",
  breadcrumbHome: "Inicio",
  breadcrumb: "Ruta de navegación",
  logoLabel: "Inicio de {name}",
  readMore: "Leer más",

  cta: {
    audit: "Reservar una auditoría",
    auditLong: "Reservar una auditoría de sistemas digitales",
    snapshot: "Pedir una revisión gratuita",
    snapshotLong: "Pedir una revisión gratuita de su sitio",
    snapshotAlt: "O empiece con una revisión gratuita",
    replyPromise: "Una persona le responde en una hora hábil.",
    orEmail: "O escriba a",
  },

  closingCta: {
    title: "Descubra dónde le están costando dinero sus sistemas.",
    lead: "La auditoría termina con un plan priorizado y con costos. La tarifa se acredita por completo si inicia un proyecto dentro de {days} días.",
  },

  header: {
    mainNav: "Principal",
    mobileNav: "Móvil",
    home: "Inicio",
    openMenu: "Abrir el menú",
    closeMenu: "Cerrar el menú",
    darkTheme: "Tema oscuro",
    language: "Idioma",
  },

  nav: {
    services: "Servicios",
    industries: "Sectores",
    audit: "Auditoría",
    work: "Trabajos",
    howWeWork: "Cómo trabajamos",
    about: "Nosotros",
    standards: "Estándares",
    insights: "Artículos",
    contact: "Contacto",
    partners: "Aliados",
    snapshot: "Revisión gratuita",
    websiteCheck: "Prueba de velocidad instantánea",
  },

  footer: {
    tagline: "Los sistemas que hacen funcionar su empresa.",
    services: "Servicios",
    industries: "Sectores",
    company: "Empresa",
    legal: "Información legal",
    contact: "Contacto",
    rights: "Todos los derechos reservados.",
    privacy: "Política de privacidad",
    terms: "Términos de uso",
    cookies: "Aviso de cookies",
    mexicoNotice: "Aviso de privacidad (México)",
    newCompany: "Una empresa nueva, fundada en {year}.",
  },

  price: {
    auditRange: "US${from} a US${to}",
    from: "desde US${amount}",
    fromPerMonth: "desde US${amount} al mes",
    creditNote: "Se acredita por completo a un proyecto firmado dentro de {days} días.",
    fixedPhases: "Cada fase tiene un precio fijo, acordado por escrito antes de empezar.",
    label: "Precio",
    unset: "Rango de precios por confirmar",
  },

  trust: {
    title: "Por qué puede confiar en el trabajo",
    items: [
      { title: "Todo es suyo", detail: "El código, las cuentas y los dominios le pertenecen desde el primer día." },
      { title: "Fases a precio fijo", detail: "Un alcance y un precio por escrito antes de que empiece cada fase." },
      { title: "Trabajo a la vista", detail: "Un enlace de pruebas y un informe escrito cada semana." },
      { title: "Estándares publicados", detail: "Seguridad, rendimiento, accesibilidad, IA y privacidad, en lenguaje claro." },
    ],
    standardsLink: "Leer nuestros estándares",
    processLink: "Ver cómo trabajamos",
  },

  demo: {
    sampleData: "Datos de ejemplo a modo de ilustración",
  },

  sections: {
    problem: "El problema",
    changes: "Qué cambia",
    included: "Qué incluye",
    phases: "Cómo funciona, por fases",
    phase: "Fase {number}",
    price: "Precio",
    relatedDemo: "Demo relacionada",
    forWhom: "Para quién es",
    questions: "Preguntas frecuentes",
    otherServices: "Otros servicios",
    otherIndustries: "Otros sectores",
    relatedServices: "Servicios relacionados",
    inTheirWords: "En sus palabras",
    systemsWeBuild: "Los sistemas que construimos",
    softwareWeConnect: "Software al que nos conectamos",
    theDemo: "La demo para este sector",
    whatNext: "Qué sigue",
  },

  leadForm: {
    name: "Nombre",
    role: "Cargo",
    company: "Empresa",
    website: "Sitio web",
    websitePlaceholder: "suempresa.com",
    email: "Correo electrónico",
    phone: "Teléfono",
    need: "¿Qué quiere mejorar?",
    needHint:
      "Basta con una o dos frases. Por ejemplo: las consultas tardan demasiado en contestarse, o el personal vuelve a capturar los mismos datos.",
    language: "Idioma preferido",
    optional: "Opcional",
    consent: "Acepto que {name} use estos datos para responderme.",
    privacyLink: "Política de privacidad",
    honeypot: "Deje este campo vacío",
    submit: {
      audit: "Reservar mi auditoría",
      contact: "Enviar mensaje",
      snapshot: "Pedir mi revisión gratuita",
    },
    submitting: "Enviando…",
    sendingStatus: "Enviando su solicitud.",
    successTitle: {
      audit: "Gracias. Recibimos su solicitud de auditoría.",
      contact: "Gracias. Recibimos su mensaje.",
      snapshot: "Gracias. Recibimos su solicitud de revisión.",
    },
    successBody:
      "Una confirmación va en camino a su bandeja de entrada. Una persona le responderá personalmente en una hora hábil ({hours}). Si es urgente, escriba a",
    bookTitle: "¿Prefiere elegir usted el horario?",
    bookCall: "Elegir el horario de la llamada de descubrimiento",
    languageNames: { en: "English", fr: "Français", es: "Español" },
  },

  leadErrors: {
    nameRequired: "Introduzca su nombre.",
    nameTooLong: "Use un nombre de menos de {max} caracteres.",
    roleTooLong: "Use un cargo de menos de {max} caracteres.",
    companyTooLong: "Use un nombre de empresa de menos de {max} caracteres.",
    websiteInvalid: "Introduzca la dirección de un sitio web, como suempresa.com.",
    websiteRequired: "Introduzca la dirección de su sitio web.",
    emailRequired: "Introduzca su correo electrónico.",
    emailInvalid: "Introduzca un correo electrónico válido, como nombre@empresa.com.",
    phoneInvalid: "Introduzca un número de teléfono válido o deje este campo en blanco.",
    needTooShort: "Cuéntenos un poco más (al menos {min} caracteres).",
    needTooLong: "Use un texto de menos de {max} caracteres.",
    languageInvalid: "Elija un idioma.",
    consentRequired: "Marque la casilla para que podamos responderle.",
    rateLimited:
      "Ha enviado varias solicitudes en poco tiempo. Espere unos minutos o escríbanos a {email}.",
    fixFields: "Corrija los campos resaltados.",
    sendFailed: "No pudimos enviar su solicitud en este momento. Inténtelo de nuevo o escríbanos directamente a {email}.",
  },

  confirmation: {
    subject: "Recibimos su solicitud",
    greeting: "Hola, {name}:",
    kinds: {
      audit: "Gracias por su interés en una auditoría de sistemas digitales.",
      contact: "Gracias por su mensaje.",
      snapshot: "Gracias por pedir una revisión gratuita de su sitio.",
    },
    automatic: "Esta es una confirmación automática, para que sepa que su solicitud nos llegó.",
    promise: "Una persona de nuestro equipo le responderá personalmente en una hora hábil ({hours}).",
    nextAudit: "Cuando reserve, le enviaremos un cuestionario breve para que la llamada se centre en su negocio.",
    nextSnapshot: "Le enviaremos tres observaciones concretas sobre su sitio, con lo que conviene hacer en cada caso.",
    signoff: "El equipo de {name}",
    ignore: "Si usted no hizo esta solicitud, puede ignorar este mensaje.",
  },

  newsletter: {
    title: "Notas prácticas sobre los sistemas de las empresas de operaciones",
    lead: "Un correo breve cada vez que publiquemos un artículo nuevo. Sin spam, y puede darse de baja con un clic.",
    email: "Correo electrónico",
    language: "Idioma de los correos",
    consent: "Acepto recibir correos de {name}. Puedo darme de baja en cualquier momento.",
    submit: "Suscribirme",
    submitting: "Suscribiendo…",
    successTitle: "Ya está suscrito.",
    successBody: "Gracias. Le escribiremos cuando haya algo nuevo que leer.",
    errors: {
      emailRequired: "Introduzca su correo electrónico.",
      emailInvalid: "Introduzca un correo electrónico válido, como nombre@empresa.com.",
      consentRequired: "Marque la casilla para suscribirse.",
      rateLimited: "Demasiados intentos. Inténtelo de nuevo en unos minutos.",
      failed: "No pudimos suscribirle en este momento. Inténtelo de nuevo en un momento.",
    },
  },

  contactPage: {
    metaTitle: "Contacto",
    metaDescription:
      "Cuéntenos qué quiere mejorar. Una persona le responde en una hora hábil. Trabajamos con empresas de Estados Unidos, Canadá y México, en español, inglés y francés.",
    eyebrow: "Contacto",
    title: "Cuéntenos qué quiere mejorar.",
    lead: "Cinco campos breves. Recibe una confirmación de inmediato y una respuesta personal en una hora hábil.",
    nextTitle: "Qué sigue",
    nextSteps: [
      "Recibe de inmediato un correo de confirmación, en su idioma.",
      "Una persona le responde personalmente en una hora hábil.",
      "Agendamos una llamada de descubrimiento y le enviamos un cuestionario breve cuando quede reservada.",
    ],
    pickTime: "¿Prefiere elegir un horario?",
    bookCall: "Reservar una llamada de descubrimiento",
    reachDirectly: "¿Prefiere escribirnos directamente?",
    servingTitle: "Países e idiomas",
    servingBody: "Trabajamos con empresas de estos países: {countries}. Idiomas de atención: {languages}.",
  },

  bookPage: {
    metaTitle: "Reservar una llamada de descubrimiento",
    metaDescription:
      "Elija un horario para una llamada de descubrimiento sobre su auditoría de sistemas digitales. Una persona confirma en una hora hábil.",
    eyebrow: "Reservar una llamada",
    title: "Elija el horario que mejor le convenga.",
    lead: "Una llamada de descubrimiento para hablar de lo que quiere mejorar. Aquí empieza la auditoría, y la llamada no tiene costo.",
    frameTitle: "Agendar una llamada de descubrimiento",
    trouble: "¿Tiene problemas con el calendario?",
    openInTab: "Ábralo en una pestaña nueva",
    or: "o",
    sendMessage: "envíenos un mensaje",
  },

  websiteCheckPage: {
    metaTitle: "Prueba de velocidad instantánea de su sitio web",
    metaDescription:
      "Ejecute una prueba automatizada de Google Lighthouse en su sitio. Vea las puntuaciones de velocidad, accesibilidad, buenas prácticas y SEO en un teléfono, y qué corregir primero.",
    eyebrow: "Prueba de velocidad instantánea",
    title: "Vea ahora mismo cómo funciona su sitio en un teléfono.",
    lead: "Una prueba automatizada que tarda menos de un minuto. Puntúa velocidad, accesibilidad, buenas prácticas y los fundamentos del SEO. Para la mirada de una persona sobre su sitio, pida la revisión gratuita.",
    whyTitle: "Qué significan las puntuaciones",
    whyBody:
      "La prueba simula un teléfono de gama media con conexión móvil. Es una prueba de laboratorio: una buena forma de encontrar problemas, no una promesa sobre lo que viven sus visitantes reales. Los datos de usuarios reales (Core Web Vitals) son un juez más justo.",
    points: [
      "Rendimiento: qué tan rápido cargan y responden sus páginas en un teléfono típico",
      "Accesibilidad: si las personas que usan lectores de pantalla o teclado pueden usar su sitio",
      "Buenas prácticas: seguridad y estándares web modernos",
      "SEO: si los buscadores pueden encontrar, leer y entender sus páginas",
    ],
    snapshotTitle: "¿Quiere que lo revise una persona?",
    snapshotBody: "La revisión gratuita le da tres observaciones concretas sobre su sitio, escritas por una persona.",
  },

  websiteCheck: {
    address: "Dirección del sitio web",
    placeholder: "suempresa.com",
    email: "Correo electrónico",
    optional: "Opcional",
    submit: "Ejecutar la prueba",
    submitting: "Analizando…",
    emailHint: "Añada su correo si desea que una persona le dé seguimiento a los resultados. Solo lo usaremos para eso.",
    running: "Estamos probando su sitio en un teléfono móvil simulado. Suele tardar entre 20 y 40 segundos.",
    resultsFor: "Resultados de {url}",
    resultsNote: "Prueba en móvil, puntuada sobre 100 por Google Lighthouse.",
    performance: "Rendimiento",
    accessibility: "Accesibilidad",
    bestPractices: "Buenas prácticas",
    seo: "SEO",
    loadingSpeed: "Velocidad de carga",
    fixFirst: "Qué corregir primero",
    noIssues:
      "No encontramos problemas importantes en esta prueba rápida. La revisión de una persona aún puede encontrar mejoras de contenido, conversión y gestión de consultas.",
    emailSent: "Gracias. Una persona le responderá en una hora hábil.",
    followUp: "¿Quiere ayuda con esto? Pida una revisión gratuita o reserve una auditoría de sistemas digitales.",
    talk: "Pedir una revisión gratuita",
    savings: "Podría ahorrar unos {seconds} s",
    metrics: {
      "largest-contentful-paint": "Largest Contentful Paint",
      "first-contentful-paint": "First Contentful Paint",
      "total-blocking-time": "Tiempo total de bloqueo",
      "cumulative-layout-shift": "Cumulative Layout Shift",
      "speed-index": "Índice de velocidad",
    },
    errors: {
      invalidUrl: "Introduzca una dirección web pública válida, como ejemplo.com.",
      invalidEmail: "Introduzca un correo electrónico válido o deje el campo en blanco.",
      rateLimited:
        "Ha realizado varias pruebas en la última hora. Inténtelo más tarde o pida una revisión gratuita.",
      failed: "No pudimos analizar ese sitio en este momento. Revise la dirección e inténtelo de nuevo en un minuto.",
    },
  },

  notFound: {
    metaTitle: "Página no encontrada",
    title: "Esta página no existe.",
    lead: "Es posible que el enlace esté desactualizado o que la página se haya movido.",
    home: "Volver al inicio",
    contact: "Contáctenos",
  },

  assistant: {
    greeting:
      "¡Hola! Pregúnteme sobre nuestra auditoría, nuestros servicios o cómo trabajamos. También puedo ayudarle a decidir por dónde empezar.",
    open: "Haga una pregunta",
    close: "Cerrar",
    title: "Pregúntenos lo que quiera",
    disclaimer: "Asistente de IA. Las respuestas pueden contener errores, así que no comparta información sensible.",
    suggested: "Preguntas sugeridas",
    suggestions: [
      "¿Qué incluye la auditoría?",
      "¿Cuánto cuesta empezar?",
      "¿Trabajan en español?",
    ],
    you: "Usted: ",
    assistant: "Asistente: ",
    thinking: "Pensando…",
    limit: "Para cualquier otra cosa, una persona le ayudará con gusto.",
    book: "Reservar una auditoría",
    inputLabel: "Su pregunta",
    placeholder: "Escriba su pregunta",
    send: "Enviar",
    failed: "Lo siento, no pude responder en este momento. Inténtelo de nuevo.",
    interrupted: "Lo siento, se interrumpió la conexión. Inténtelo de nuevo.",
    unavailable: "El asistente no está disponible en este momento.",
    wrongOrigin: "Las solicitudes deben provenir de este sitio web.",
    rateLimited: "Ha enviado muchos mensajes en poco tiempo. Inténtelo de nuevo en unos minutos.",
    invalid: "No se pudo enviar ese mensaje. Pruebe con una pregunta más corta.",
    declined:
      "Lo siento, no puedo ayudarle con eso. Para cualquier otra cosa, escriba a {email} o contáctenos en {contact}.",
    serverError: "Lo siento, algo salió mal de nuestro lado. Inténtelo de nuevo o escriba a {email}.",
    replyLanguage: 'Spanish, using the formal "usted", in a plain and friendly tone',
  },
};
