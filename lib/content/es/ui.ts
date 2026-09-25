import type { Ui } from "../en/ui";

/** Interface text in Spanish. Formal "usted" throughout, as suits a professional services firm. */
export const ui: Ui = {
  site: {
    description:
      "{name} diseña y desarrolla sitios web, aplicaciones web, soluciones de IA y automatización de procesos para startups, empresas en crecimiento y organizaciones consolidadas.",
    hours: "Lunes a viernes, de 9:00 a 18:00 (hora del Centro)",
    shareImageAlt: "{name}: sitios web, aplicaciones web, soluciones de IA, automatización y optimización",
    audienceType: "Startups, pequeñas y medianas empresas, grandes empresas y organizaciones",
    country: "Estados Unidos",
  },

  skipToContent: "Saltar al contenido",
  contactUs: "Contáctenos",
  breadcrumbHome: "Inicio",
  logoLabel: "{name}, página de inicio",

  header: {
    mainNav: "Principal",
    mobileNav: "Móvil",
    home: "Inicio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    darkTheme: "Tema oscuro",
    language: "Idioma",
  },

  nav: {
    services: "Servicios",
    technology: "Tecnología",
    work: "Proyectos",
    about: "Nosotros",
    contact: "Contacto",
  },

  footer: {
    tagline: "Sitios web, aplicaciones web, IA y automatización para empresas de todos los tamaños.",
    services: "Servicios",
    company: "Empresa",
    contact: "Contacto",
    websiteCheck: "Análisis web gratuito",
    rights: "Todos los derechos reservados.",
    privacy: "Política de privacidad",
  },

  closingCta: {
    title: "Cuéntenos en qué está trabajando.",
    lead: "Compártanos algunos detalles y le responderemos en un día hábil para organizar una consulta gratuita. Sin compromiso, y si no somos la opción adecuada, se lo diremos y le recomendaremos a alguien mejor.",
    orEmail: "O escríbanos a",
  },

  showcase: {
    websites: "Sitios web",
    webApps: "Aplicaciones web",
    ai: "Soluciones de IA",
    automation: "Automatización",
    optimization: "Optimización",
    automationAlt:
      "Flujo de Harbor Line de la entrega a la factura, construido con pasos conectados, con historial de ejecuciones y tasas de automatización",
    automationType: "Automatización",
    automationLink: "Siga el flujo de trabajo",
  },

  projectFeature: {
    services: "Servicios: ",
    technologies: "Tecnologías: ",
  },

  home: {
    metaTitle: "{name} | Desarrollo web, aplicaciones e inteligencia artificial",
    metaDescription:
      "Desarrollo de sitios web, aplicaciones web a medida, integración de IA y automatización de procesos para startups, pequeñas empresas y organizaciones consolidadas.",
    hero: {
      lead: "Creamos",
      block1: "el software",
      block2: "que impulsa",
      tail: "su\u00a0negocio.",
      intro:
        "{name} diseña y desarrolla sitios web, aplicaciones web, soluciones de IA y automatización de procesos para startups, empresas en crecimiento y organizaciones consolidadas.",
      explore: "Conozca nuestros servicios",
      commitments: "Nuestros compromisos",
      whatWeBuild: "Lo que construimos",
    },
    whoWeHelp: {
      eyebrow: "Con quién trabajamos",
      title: "De negocios locales a grandes organizaciones.",
      lead: "Ya sea que necesite su primer sitio web profesional o un sistema de IA para miles de usuarios, cuenta con el mismo equipo experimentado y los mismos estándares.",
    },
    whatWeDo: {
      eyebrow: "Lo que hacemos",
      title: "Un solo equipo para su sitio web, su software y su IA.",
      lead: "La mayoría de los clientes llegan por una cosa y se quedan por varias. El diseño, la ingeniería, la IA y el rendimiento están en manos del mismo equipo, así que nada se pierde entre proveedores.",
    },
    webDevelopment: {
      eyebrow: "Desarrollo web",
      title: "Sitios web que explican con claridad, generan confianza y cargan rápido.",
      lead: "Planificamos el contenido antes que el diseño, diseñamos a conciencia para cada tamaño de pantalla y desarrollamos con frameworks modernos que su equipo puede mantener. El resultado es un sitio que genera confianza enseguida y es fácil de mantener al día.",
      points: [
        "Estrategia de contenido y estructura del sitio",
        "Diseño a medida, creado desde cero",
        "Un CMS configurado para sus editores",
        "Accesibilidad y SEO desde el principio",
      ],
      link: "Servicios de desarrollo web",
    },
    webApplications: {
      eyebrow: "Aplicaciones web",
      title: "Software a medida para el trabajo que no encaja en herramientas comerciales.",
      lead: "Diseñamos y desarrollamos aplicaciones desde el modelo de datos, lanzamos una primera versión enfocada en pocas semanas y seguimos mejorándola junto a su equipo.",
      link: "Desarrollo de aplicaciones web",
      types: [
        {
          title: "Portales de clientes",
          detail: "Cuentas de autoservicio, pedidos, documentos y facturación para sus clientes.",
        },
        {
          title: "Herramientas internas",
          detail: "Sustitutos de las hojas de cálculo y cadenas de correos de las que depende su operación.",
        },
        {
          title: "Paneles e informes",
          detail: "Una vista fiable de datos que hoy están repartidos en varios sistemas.",
        },
        {
          title: "Plataformas y productos SaaS",
          detail: "Productos multiusuario con facturación, roles y la infraestructura necesaria para escalar.",
        },
      ],
    },
    aiAutomation: {
      eyebrow: "IA y automatización",
      title: "Automatización e IA que ahorran tiempo real a su equipo.",
      lead: "Empezamos por la tarea, no por la tecnología. Si un proceso es predecible, lo automatizamos. Si requiere criterio sobre grandes volúmenes de texto, la IA puede ayudar. A menudo la respuesta es una combinación de ambas.",
      inPractice: "En la práctica",
      ai: {
        title: "Soluciones de IA",
        linkLabel: "Servicios de desarrollo de IA",
        description:
          "Modelos de lenguaje aplicados a problemas concretos y medibles, con respuestas que puede verificar y datos que siguen bajo su control.",
        examples: [
          "Un asistente que responde preguntas del personal a partir de documentos internos, citando cada fuente",
          "Extraer las partidas de las facturas de proveedores e ingresarlas en su sistema contable",
          "Redactar primeras respuestas a solicitudes de soporte rutinarias para su revisión",
        ],
      },
      automation: {
        title: "Automatización",
        linkLabel: "Servicios de automatización de procesos",
        description:
          "Integraciones y flujos de trabajo que mueven los datos entre sus sistemas, para que nadie tenga que copiarlos a mano.",
        examples: [
          "Nuevas oportunidades en el CRM que crean proyectos, carpetas y facturas automáticamente",
          "Informes semanales de operaciones que se generan y envían sin que nadie toque una hoja de cálculo",
          "Solicitudes de aprobación que se enrutan, se recuerdan y se registran entre equipos",
        ],
      },
    },
    optimization: {
      eyebrow: "Optimización web y rendimiento",
      title: "Páginas más rápidas, medidas con datos de visitantes reales.",
      lead: "Encontramos lo que realmente hace lento su sitio, lo corregimos en su código y configuramos un monitoreo para que siga siendo rápido mucho después de terminar el proyecto.",
      testCta: "Analice su sitio gratis",
      serviceLink: "Optimización del rendimiento web",
      metricHeader: "Métrica (móvil, percentil 75)",
      before: "Antes",
      after: "Después",
      metrics: [
        { name: "Largest Contentful Paint", before: "3,8 s", after: "1,6 s" },
        { name: "Interaction to Next Paint", before: "410 ms", after: "140 ms" },
        { name: "Cumulative Layout Shift", before: "0,21", after: "0,02" },
        { name: "JavaScript transferido", before: "1,2 MB", after: "480 KB" },
      ],
      caption:
        "Páginas de producto de Fieldstone Outdoor, antes y después de un programa de rendimiento de ocho semanas.",
      captionLink: "Lea el análisis completo",
    },
    seo: {
      eyebrow: "SEO y crecimiento digital",
      title: "La visibilidad en buscadores empieza por cómo está construido su sitio.",
      body: "Nos encargamos de la base técnica de la búsqueda, incluidas la estructura del sitio, la indexación, los metadatos y la velocidad, y damos a su equipo pautas claras sobre el contenido que atrae visitantes cualificados. Sin esquemas de enlaces ni garantías de posicionamiento.",
      points: [
        "Auditorías de SEO técnico",
        "Arquitectura del sitio y enlaces internos",
        "Datos estructurados y metadatos",
        "Indexación y presupuesto de rastreo",
        "Planificación de migraciones y redirecciones",
        "Informes de Search Console",
      ],
      link: "Servicios de SEO técnico",
    },
    techStack: {
      eyebrow: "Tecnología",
      title: "La tecnología que usamos, explicada con palabras sencillas.",
      lead: "No necesita saber qué significa ninguno de estos nombres. Elegimos herramientas consolidadas y con buen soporte para que su proyecto sea rápido, seguro y fácil de mantener, y para que cualquier buen desarrollador pueda trabajar en él más adelante. Para equipos técnicos, esto es lo que más usamos.",
      cta: "Tecnología completa",
    },
    approach: {
      eyebrow: "Nuestro método",
      title: "Un proceso claro, dirigido por quienes hacen el trabajo.",
      lead: "Usted trabaja directamente con los diseñadores e ingenieros de su proyecto. No hay ejecutivos de cuenta que transmitan mensajes ni traspasos a personal junior después de la presentación.",
      step: "Paso {number}",
    },
    selectedWork: {
      eyebrow: "Proyectos destacados",
      title: "Proyectos recientes y lo que cambiaron.",
      lead: "Algunos ejemplos de los sitios, aplicaciones y sistemas que hemos creado, y los resultados que midieron nuestros clientes después.",
      allWork: "Todos los proyectos",
    },
    whyUs: {
      eyebrow: "Por qué trabajar con nosotros",
      title: "No creamos tecnología solo porque podemos. La creamos porque resuelve un problema.",
    },
    waysToWork: {
      eyebrow: "Cómo trabajar con nosotros",
      title: "La mayoría de los clientes empiezan con una conversación gratuita.",
      lead: "Sin presiones ni contratos largos que firmar antes de conocernos. Elija el nivel de participación que mejor se adapte a su proyecto.",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Preguntas frecuentes",
      lead: "Las preguntas que más nos hacen los dueños de negocios. Para cualquier otra cosa, pregúntenos en una llamada.",
    },
  },

  about: {
    metaTitle: "Nosotros",
    metaDescription:
      "{name} es una empresa de diseño e ingeniería de software en {location}. Conozca cómo abordamos la tecnología, el diseño, el desarrollo y el rendimiento.",
    eyebrow: "Nosotros",
    title: "No creamos tecnología solo porque podemos. La creamos porque resuelve un problema.",
    lead: "{name} es una empresa de diseño e ingeniería de software con sede en {location}. Trabajamos con startups, empresas en crecimiento y organizaciones consolidadas en los sitios web, aplicaciones y sistemas de los que dependen cada día.",
    howWeWork: "Cómo trabajamos con nuestros clientes",
  },

  servicesPage: {
    metaTitle: "Servicios de desarrollo web, software e IA",
    metaDescription:
      "Desarrollo de sitios web, aplicaciones web a medida, soluciones de IA, automatización de procesos, optimización del rendimiento y SEO técnico para empresas de todos los tamaños.",
    eyebrow: "Servicios",
    title: "Sitios web, software e IA, diseñados y desarrollados por un solo equipo.",
    lead: "Trabajamos durante toda la vida de un producto digital, desde la primera conversación sobre qué construir hasta mantenerlo rápido, seguro y útil años después.",
    ctaTitle: "¿No sabe qué servicio necesita?",
    ctaLead:
      "La mayoría de los proyectos combinan más de uno. Descríbanos el problema y le recomendaremos por dónde empezar.",
  },

  servicePage: {
    websiteCheck: "Análisis web gratuito",
    seeWork: "Vea nuestros proyectos",
    inPlainTerms: "En pocas palabras",
    technologyWeUse: "Tecnología que usamos",
    technologiesLabel: "Tecnologías de {service}",
    included: "Qué incluye",
    approach: "Cómo lo abordamos",
    engagement: "Colaboración habitual",
    relatedWork: "Proyecto relacionado",
    questions: "Preguntas frecuentes",
    otherServices: "Otros servicios",
  },

  technologyPage: {
    metaTitle: "Nuestra tecnología: desarrollo web e IA",
    metaDescription:
      "La tecnología web y de IA con la que trabajamos, desde HTML, CSS, JavaScript, React y Node.js hasta OpenAI, Claude, Gemini, agentes de IA y búsqueda vectorial.",
    eyebrow: "Tecnología",
    title: "Las herramientas detrás de todo lo que construimos.",
    lead: "Cada nombre de esta página es una tecnología probada y ampliamente utilizada. No necesita entenderlas para trabajar con nosotros. Cada grupo empieza con una explicación de una línea en palabras sencillas, seguida de las herramientas exactas para los equipos técnicos.",
    web: {
      eyebrow: "Web y software",
      title: "Desde HTML y CSS hasta la infraestructura en la nube.",
      lead: "Sitios web, aplicaciones web y aplicaciones móviles construidos con estándares modernos y con las mismas herramientas que usan los principales equipos de software del mundo.",
    },
    ai: {
      eyebrow: "Inteligencia artificial",
      title: "La generación actual de IA, aplicada al trabajo real.",
      lead: "Trabajamos con los principales modelos de IA y las herramientas que los rodean: agentes que realizan acciones, asistentes que responden a partir de sus documentos y las pruebas que demuestran que son precisos. Elegimos los modelos por su precisión, costo y privacidad, no por moda.",
    },
    unsureTitle: "¿No sabe cuáles de estas necesita?",
    unsureBody:
      "Ese es nuestro trabajo. Cuéntenos qué quiere lograr y le recomendaremos la configuración más sencilla que lo haga bien. A menudo eso significa menos herramientas, no más.",
  },

  workPage: {
    metaTitle: "Casos de éxito: sitios web, aplicaciones y proyectos de IA",
    metaDescription:
      "Casos de éxito de desarrollo web, aplicaciones web a medida, soluciones de IA y optimización del rendimiento, con los resultados que midió cada cliente.",
    eyebrow: "Proyectos",
    title: "Proyectos medidos por lo que cambiaron.",
    lead: "Cada caso describe el problema que nos pidieron resolver, cómo lo abordamos y los resultados que el cliente midió después.",
  },

  caseStudy: {
    metaTitle: "Caso de éxito de {client}: {type}",
    breadcrumb: "Ruta de navegación",
    client: "Cliente",
    industry: "Sector",
    services: "Servicios",
    year: "Año",
    visitLive: "Visite el proyecto en línea",
    challenge: "El reto",
    whatWeDid: "Lo que hicimos",
    outcome: "El resultado",
    technology: "Tecnología",
    nextProject: "Siguiente proyecto",
  },

  book: {
    metaTitle: "Reserve una consulta gratuita",
    metaDescription:
      "Elija un horario para una llamada gratuita de 30 minutos sobre su proyecto web, de aplicación, de IA o de automatización. Sin costo ni compromiso.",
    eyebrow: "Reserve una llamada",
    title: "Elija el horario que mejor le convenga.",
    lead: "Una videollamada gratuita de 30 minutos para hablar de sus objetivos. Se llevará un consejo honesto y próximos pasos claros, nos contrate o no.",
    frameTitle: "Programe una consulta gratuita",
    trouble: "¿Tiene problemas con el calendario?",
    openInTab: "Ábralo en una pestaña nueva",
    or: "o",
    sendMessage: "envíenos un mensaje",
  },

  contactPage: {
    metaTitle: "Contáctenos",
    metaDescription:
      "Cuéntenos sobre su proyecto web, de aplicación, de IA o de automatización. Respondemos a cada solicitud en un día hábil.",
    eyebrow: "Contacto",
    title: "Contáctenos",
    lead: "Cuéntenos qué problema quiere resolver. Basta con una idea general; le ayudaremos a definir los detalles. La primera consulta es gratuita y sin compromiso.",
    nextTitle: "Qué pasa después",
    nextSteps: [
      "Leemos cada solicitud y respondemos en un día hábil.",
      "Programamos una llamada gratuita de 30 minutos para entender sus objetivos, limitaciones y plazos.",
      "Recibe una propuesta por escrito con el alcance, el calendario y un presupuesto cerrado para la primera fase.",
    ],
    pickTime: "¿Prefiere elegir un horario?",
    bookCall: "Reserve una llamada gratuita de 30 minutos",
    reachDirectly: "¿Prefiere contactarnos directamente?",
  },

  contactForm: {
    successTitle: "Gracias. Hemos recibido su solicitud.",
    successBody:
      "Alguien de nuestro equipo la leerá y le responderá en un día hábil, normalmente antes. Si es algo urgente, escríbanos a",
    name: "Nombre",
    company: "Empresa",
    email: "Correo electrónico",
    phone: "Teléfono",
    projectType: "Tipo de proyecto",
    projectTypePlaceholder: "Seleccione un tipo de proyecto",
    budget: "Presupuesto",
    budgetPlaceholder: "Seleccione un rango de presupuesto",
    message: "Descripción del proyecto",
    messageHint: "Al menos {min} caracteres. Ayuda mencionar los objetivos, el plazo y los sistemas que ya usa.",
    optional: "Opcional",
    honeypot: "Sitio web",
    privacyNote: "Solo usaremos estos datos para responder a su consulta.",
    privacyLink: "Política de privacidad",
    submit: "Enviar solicitud",
    submitting: "Enviando…",
    sendingStatus: "Enviando su solicitud.",
  },

  contactErrors: {
    nameRequired: "Escriba su nombre.",
    nameTooLong: "Su nombre debe tener menos de {max} caracteres.",
    companyTooLong: "El nombre de la empresa debe tener menos de {max} caracteres.",
    emailRequired: "Escriba su correo electrónico.",
    emailInvalid: "Escriba un correo electrónico válido, como nombre@empresa.com.",
    phoneInvalid: "Escriba un número de teléfono válido o deje este campo en blanco.",
    projectTypeRequired: "Elija un tipo de proyecto.",
    budgetRequired: "Elija un rango de presupuesto.",
    messageTooShort: "Cuéntenos un poco más sobre su proyecto (al menos {min} caracteres).",
    messageTooLong: "La descripción debe tener menos de {max} caracteres.",
    rateLimited: "Ha enviado varias solicitudes en poco tiempo. Espere unos minutos o escríbanos a {email}.",
    fixFields: "Corrija los campos marcados.",
    sendFailed: "No pudimos enviar su mensaje en este momento. Inténtelo de nuevo o escríbanos directamente a {email}.",
  },

  projectTypes: {
    Website: "Sitio web",
    "Web application": "Aplicación web",
    "AI solution": "Solución de IA",
    Automation: "Automatización",
    "Performance optimization": "Optimización del rendimiento",
    SEO: "SEO",
    "Something else": "Otro",
  },
  budgetRanges: {
    "Under $25,000": "Menos de 25.000 USD",
    "$25,000 – $50,000": "25.000 – 50.000 USD",
    "$50,000 – $100,000": "50.000 – 100.000 USD",
    "$100,000 – $250,000": "100.000 – 250.000 USD",
    "Over $250,000": "Más de 250.000 USD",
    "Not sure yet": "Todavía no lo sé",
  },

  privacy: {
    metaTitle: "Política de privacidad",
    metaDescription: "Cómo {name} recopila, usa y protege la información enviada a través de este sitio web.",
    eyebrow: "Legal",
    title: "Política de privacidad",
    updated: "Última actualización: septiembre de 2026.",
    sections: [
      {
        title: "Información que recopilamos",
        body: "Cuando envía el formulario de contacto, recopilamos los datos que nos proporciona: su nombre, empresa, correo electrónico, teléfono, tipo de proyecto, rango de presupuesto y descripción del proyecto. No usamos rastreadores publicitarios ni vendemos información personal.",
      },
      {
        title: "Cómo la usamos",
        body: "Usamos esta información únicamente para responder a su consulta y, si trabajamos juntos, para gestionar nuestra relación comercial. Conservamos las consultas hasta dos años, salvo que nos pida eliminarlas antes.",
      },
      {
        title: "Análisis web y asistente de IA",
        body: "Cuando usa el análisis web gratuito, la dirección que introduce se envía a Google PageSpeed Insights para analizarla. Si también introduce su correo electrónico, lo recibimos junto con sus resultados para poder hacer un seguimiento. Los mensajes que envía al asistente de IA los procesa Anthropic para generar respuestas y no se usan para identificarle. No comparta información personal sensible en el asistente.",
      },
      {
        title: "Proveedores de servicios",
        body: "Los formularios se entregan por correo electrónico a través de un proveedor de correo transaccional y se alojan con nuestro proveedor de infraestructura web. Las reservas de consultas las gestiona nuestro proveedor de agenda. Ambos tratan los datos en nuestro nombre y no pueden usarlos para sus propios fines.",
      },
    ],
    choicesTitle: "Sus opciones",
    choicesBody:
      "Puede pedirnos en cualquier momento que accedamos a la información que nos ha enviado, la corrijamos o la eliminemos escribiendo a",
  },

  websiteCheckPage: {
    metaTitle: "Análisis gratuito de velocidad y SEO de su sitio web",
    metaDescription:
      "Analice su sitio web gratis. Obtenga sus puntuaciones de velocidad, SEO, accesibilidad y buenas prácticas, los Core Web Vitals y las mejoras prioritarias en menos de un minuto.",
    eyebrow: "Análisis web gratuito",
    title: "¿Qué tan rápido y fácil de encontrar es su sitio web?",
    lead: "Introduzca su dirección para ver cómo puntúa su sitio en velocidad, SEO, accesibilidad y buenas prácticas en un teléfono móvil, y qué corregir primero. Es gratis y tarda menos de un minuto.",
    whyTitle: "Por qué importan estas puntuaciones",
    whyBody:
      "Google tiene en cuenta la velocidad y la calidad técnica al posicionar los sitios web, y la mayoría de los visitantes abandona una página que tarda más de unos segundos en cargar en su teléfono.",
    points: [
      "Rendimiento: qué tan rápido cargan y responden sus páginas en un teléfono típico",
      "Accesibilidad: si las personas que usan lectores de pantalla o teclado pueden usar su sitio",
      "Buenas prácticas: seguridad y estándares web modernos",
      "SEO: si los buscadores pueden encontrar, leer y entender sus páginas",
    ],
  },

  websiteCheck: {
    address: "Dirección del sitio web",
    placeholder: "suempresa.com",
    email: "Correo electrónico",
    optional: "Opcional",
    submit: "Analizar gratis",
    submitting: "Analizando…",
    emailHint: "Añada su correo si desea que le hagamos una revisión personalizada. Solo lo usaremos para eso.",
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
      "No encontramos problemas importantes en esta prueba rápida. Una revisión completa aún puede revelar mejoras de contenido, conversión y posicionamiento.",
    emailSent: "Gracias. Revisaremos sus resultados y le responderemos en un día hábil.",
    followUp: "¿Quiere corregirlos? Le explicaremos los resultados en una consulta gratuita.",
    talk: "Hablemos de ello",
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
        "Ha realizado varios análisis en la última hora. Inténtelo más tarde o contáctenos para una revisión completa.",
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
      "¡Hola! Pregúnteme lo que quiera sobre nuestros sitios web, aplicaciones, IA y automatización. También puedo ayudarle a decidir por dónde empezar.",
    open: "Haga una pregunta",
    close: "Cerrar",
    title: "Pregúntenos lo que quiera",
    disclaimer: "Asistente de IA. Las respuestas pueden contener errores, así que no comparta información sensible.",
    suggested: "Preguntas sugeridas",
    suggestions: [
      "¿Cuánto cuesta un sitio web?",
      "¿Puede la IA ayudar a mi pequeña empresa?",
      "¿Cuánto se tarda en crear una aplicación web?",
    ],
    you: "Usted: ",
    assistant: "Asistente: ",
    thinking: "Pensando…",
    limit: "Para cualquier otra cosa, el equipo le ayudará con gusto.",
    book: "Reserve una consulta gratuita",
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
      "Lo siento, no puedo ayudarle con eso. Para cualquier otra cosa, escriba a {email} o reserve una consulta gratuita en {contact}.",
    serverError: "Lo siento, algo salió mal de nuestro lado. Inténtelo de nuevo o escriba a {email}.",
    replyLanguage: 'Spanish, using the formal "usted", in a plain and friendly tone',
  },
};
