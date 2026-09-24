import type { ServiceSlug, ServiceText } from "@/lib/services";

export const services: Record<ServiceSlug, ServiceText> = {
  "website-development": {
    name: "Desarrollo de sitios web",
    summary: "Sitios web rápidos y accesibles, pensados en cómo deciden sus clientes.",
    seoTitle: "Servicios profesionales de desarrollo web",
    metaDescription:
      "Diseño y desarrollo de sitios web a medida para startups, pequeñas empresas y grandes organizaciones. Sitios rápidos y accesibles, con un CMS que su equipo puede gestionar.",
    headline: "Un buen sitio web facilita la decisión de quien lo lee.",
    intro:
      "Diseñamos y desarrollamos sitios corporativos y de marketing que explican lo que usted hace, generan confianza y convierten visitas en conversaciones. Cada sitio se construye desde cero en torno a su contenido y sus objetivos, y se entrega con un sistema de gestión de contenidos que su equipo puede usar sin llamarnos.",
    plain:
      "Un sitio web rápido y atractivo que funciona en cualquier teléfono y computadora, aparece en Google y que usted mismo puede actualizar sin llamar a un desarrollador.",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Astro",
      "Tailwind CSS",
      "WordPress",
      "Sanity",
      "Vercel",
      "Cloudflare",
    ],
    included: [
      {
        title: "Contenido y estructura",
        detail: "Mapa del sitio, jerarquía de páginas y mensajes, definidos antes de empezar el diseño visual.",
      },
      {
        title: "Diseño de interfaz",
        detail: "Un sistema visual creado para su marca y diseñado para cualquier tamaño de pantalla.",
      },
      {
        title: "Desarrollo",
        detail: "Front ends en Next.js o Astro, con componentes limpios y documentados, sin depender de un maquetador.",
      },
      {
        title: "Gestión de contenidos",
        detail: "Sanity, Contentful o WordPress headless, configurados con los campos que necesitan sus editores.",
      },
      {
        title: "Accesibilidad",
        detail:
          "WCAG 2.2 AA como punto de partida, con pruebas de teclado y lectores de pantalla además de herramientas automáticas.",
      },
      {
        title: "Lanzamiento y entrega",
        detail: "Redirecciones, analítica, monitoreo y capacitación, para que nada se pierda al publicar.",
      },
    ],
    approach: [
      "La mayoría de los sitios rinden poco porque el contenido no es claro, no porque el diseño esté mal. Empezamos por definir qué necesitan saber sus clientes y en qué orden, y luego diseñamos las páginas en torno a eso.",
      "Trabajamos con frameworks modernos que priorizan las páginas estáticas, así que cargan rápido y se mantienen seguras con muy poco mantenimiento. El código, la cuenta de hosting y el CMS son suyos.",
    ],
    engagement: [
      { label: "Plazo habitual", value: "8 a 14 semanas" },
      { label: "Equipo", value: "Estratega, diseñador y dos ingenieros" },
      { label: "Después del lanzamiento", value: "Soporte mensual opcional" },
    ],
    faqs: [
      {
        question: "¿Pueden trabajar con nuestro manual de marca actual?",
        answer:
          "Sí. La mayoría de nuestros proyectos web amplían una marca existente. Si su manual no cubre el uso digital, completamos lo que falta y documentamos las decisiones.",
      },
      {
        question: "¿Podremos actualizar el sitio nosotros mismos?",
        answer:
          "Sí. El contenido vive en un CMS configurado para su equipo, y la entrega incluye una sesión de capacitación y una guía escrita.",
      },
      {
        question: "¿Migran el contenido de nuestro sitio actual?",
        answer:
          "Sí. Revisamos sus páginas actuales, decidimos qué conservar, reescribir o retirar, y configuramos redirecciones para que no pierda su posicionamiento en buscadores.",
      },
    ],
  },
  "web-applications": {
    name: "Aplicaciones web",
    summary: "Paneles, portales y herramientas internas a medida, diseñados según cómo funciona su negocio.",
    seoTitle: "Desarrollo de aplicaciones web a medida",
    metaDescription:
      "Desarrollo de aplicaciones web y software a medida: portales de clientes, paneles, herramientas internas y productos SaaS, diseñados y construidos por un solo equipo con experiencia.",
    headline: "Software que se adapta a su operación, y no al revés.",
    intro:
      "Cuando el software comercial obliga a su equipo a improvisar con hojas de cálculo, una aplicación a medida suele ser la mejor inversión a largo plazo. Desarrollamos portales de clientes, herramientas internas, paneles y productos SaaS tanto para startups como para empresas consolidadas, desde el modelo de datos hasta la interfaz, y les damos soporte después del lanzamiento.",
    plain:
      "Software a medida que funciona en el navegador, como un portal de clientes, un sistema de reservas o un panel interno, construido según la forma en que ya trabaja su negocio.",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "GraphQL",
      "Docker",
      "AWS",
      "GitHub Actions",
    ],
    included: [
      {
        title: "Descubrimiento y alcance",
        detail:
          "Mapeo de procesos con las personas que usarán el software y una primera versión con un alcance bien definido.",
      },
      {
        title: "Diseño de producto",
        detail: "Prototipos interactivos probados con usuarios reales antes de empezar el desarrollo.",
      },
      {
        title: "Ingeniería full-stack",
        detail: "TypeScript, React, Node.js y PostgreSQL, con pruebas automatizadas desde el primer sprint.",
      },
      {
        title: "Integraciones",
        detail: "Conexiones con su CRM, ERP, proveedor de pagos o API internas.",
      },
      {
        title: "Autenticación y roles",
        detail: "Inicio de sesión único, permisos detallados y registros de auditoría cuando su negocio los requiera.",
      },
      {
        title: "Infraestructura",
        detail:
          "Desplegada en su propia cuenta en la nube, con despliegues automatizados, copias de seguridad, monitoreo y alertas.",
      },
    ],
    approach: [
      "Lanzamos pronto una primera versión enfocada, normalmente en ocho a doce semanas, y la ampliamos según cómo la usan realmente las personas. Es la forma más fiable que conocemos de no construir funciones que nadie necesita.",
      "Cada dos semanas usted ve software que funciona, no informes de estado. El código es suyo y está escrito para que su propio equipo, u otro proveedor, pueda mantenerlo.",
    ],
    engagement: [
      { label: "Primera versión", value: "8 a 12 semanas" },
      { label: "Equipo", value: "Responsable de producto, diseñador y 2 a 4 ingenieros" },
      {
        label: "Después del lanzamiento",
        value: "Desarrollo continuo o soporte gestionado",
      },
    ],
    faqs: [
      {
        question: "¿Se hacen cargo de aplicaciones existentes?",
        answer:
          "Con frecuencia. Empezamos con una revisión del código y la infraestructura, corregimos lo urgente y después acordamos un plan para el resto.",
      },
      {
        question: "¿De quién es el código?",
        answer:
          "Suyo, desde el primer commit. Los repositorios y las cuentas en la nube se crean a nombre de su organización.",
      },
      {
        question: "¿Cómo manejan los cambios de alcance?",
        answer:
          "Planificamos en ciclos de dos semanas, así que las prioridades pueden cambiar a medida que aprende. Los cambios mayores se estiman y se acuerdan antes de empezar.",
      },
    ],
  },
  "ai-solutions": {
    name: "Soluciones de IA",
    summary: "Asistentes y herramientas de IA que ahorran tiempo a su equipo, basados en sus propios datos.",
    seoTitle: "Servicios de desarrollo e integración de IA",
    metaDescription:
      "Desarrollo e integración de IA para empresas: asistentes de conocimiento, procesamiento de documentos y funciones de IA en productos, con precisión medida y controles de privacidad.",
    headline: "La IA es más útil cuando se enfoca en un problema concreto y medible.",
    intro:
      "Ayudamos a las empresas a aprovechar los modelos de lenguaje donde marcan una diferencia medible: responder preguntas a partir de documentos internos, redactar respuestas rutinarias, extraer datos y añadir funciones de IA a productos existentes. Y somos igual de directos cuando la IA no es la herramienta adecuada.",
    plain:
      "Herramientas que leen, escriben y responden preguntas por usted, como un asistente que conoce los documentos de su empresa o un software que extrae automáticamente los datos de las facturas.",
    stack: [
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "Llama",
      "Python",
      "LangChain",
      "pgvector",
      "Azure AI",
      "Node.js",
      "Flujos de evaluación",
    ],
    included: [
      {
        title: "Evaluación de oportunidades",
        detail: "Una revisión breve de dónde la IA ahorraría tiempo o reduciría errores, ordenada por valor y riesgo.",
      },
      {
        title: "Asistentes de conocimiento",
        detail: "Búsqueda y respuestas sobre sus documentos, con las fuentes citadas en cada respuesta.",
      },
      {
        title: "Procesamiento de documentos",
        detail: "Datos estructurados extraídos de facturas, contratos, formularios y correos a gran escala.",
      },
      {
        title: "Funciones de producto",
        detail: "Resúmenes, recomendaciones y herramientas de redacción integradas en su aplicación actual.",
      },
      {
        title: "Evaluación",
        detail:
          "Conjuntos de prueba creados a partir de sus casos reales, para medir la precisión en lugar de suponerla.",
      },
      {
        title: "Privacidad y controles",
        detail:
          "Manejo de datos, controles de acceso y elección de modelos acordes con sus requisitos de cumplimiento.",
      },
    ],
    approach: [
      "Todo proyecto de IA empieza con preguntas que podemos medir. ¿Cuánto tarda hoy la tarea? ¿Con qué frecuencia se cometen errores? ¿Qué resultado sería suficientemente bueno? Las respuestas nos dan una referencia contra la cual probar antes de que algo llegue a producción.",
      "Trabajamos con los principales proveedores de modelos y también con modelos de pesos abiertos, y elegimos según la precisión, el costo y dónde pueden estar sus datos, no según lo más reciente.",
    ],
    engagement: [
      { label: "Evaluación", value: "2 a 3 semanas" },
      { label: "Piloto", value: "4 a 8 semanas" },
      { label: "Después del lanzamiento", value: "Monitoreo, evaluación y ajustes" },
    ],
    faqs: [
      {
        question: "¿Se usan nuestros datos para entrenar modelos de IA?",
        answer:
          "No. Usamos acuerdos empresariales de API que excluyen sus datos del entrenamiento, o modelos alojados por usted cuando sus requisitos lo exigen.",
      },
      {
        question: "¿Qué pasa si la IA se equivoca?",
        answer:
          "Lo tenemos previsto. Las respuestas citan sus fuentes, los resultados de baja confianza pasan a una persona y la precisión se sigue de forma continua después del lanzamiento.",
      },
      {
        question: "¿Necesitamos muchos datos para empezar?",
        answer:
          "Normalmente no. La mayoría de las aplicaciones útiles funcionan con los documentos y registros que ya tiene.",
      },
    ],
  },
  automation: {
    name: "Automatización",
    summary: "Sus sistemas comparten información automáticamente, y su equipo deja de hacer trabajo repetitivo.",
    seoTitle: "Automatización e integración de procesos de negocio",
    metaDescription:
      "Automatización de procesos e integración de sistemas que eliminan la captura manual de datos, agilizan las aprobaciones y conectan su CRM, contabilidad y herramientas de operación.",
    headline: "Su equipo no debería ser el puente entre sus sistemas.",
    intro:
      "Copiar datos entre herramientas, perseguir aprobaciones y armar el mismo informe cada lunes suma horas cada semana. Mapeamos esos procesos, automatizamos las partes predecibles y hacemos visibles las excepciones para las personas que deben resolverlas.",
    plain:
      "Sus sistemas se pasan la información entre sí automáticamente, y su equipo deja de copiar datos, perseguir aprobaciones y preparar los mismos informes a mano.",
    stack: [
      "n8n",
      "Make",
      "Zapier",
      "Node.js",
      "Python",
      "API REST",
      "Webhooks",
      "Salesforce",
      "HubSpot",
      "NetSuite",
      "QuickBooks",
      "Microsoft 365",
    ],
    included: [
      {
        title: "Mapeo de procesos",
        detail: "Cómo avanza el trabajo hoy, dónde se atasca y cuánto cuesta.",
      },
      {
        title: "Integración de sistemas",
        detail: "Conexiones fiables entre su CRM, contabilidad, operaciones y herramientas de comunicación.",
      },
      {
        title: "Automatización de flujos",
        detail: "Aprobaciones, notificaciones, traspasos y tareas programadas que funcionan sin supervisión.",
      },
      {
        title: "Informes",
        detail: "Informes programados y paneles en vivo construidos a partir de sus sistemas de registro.",
      },
      {
        title: "Manejo de errores",
        detail:
          "Reintentos, alertas y registros claros, para detectar los problemas antes de que lleguen a sus clientes.",
      },
      {
        title: "Documentación",
        detail: "Guías en lenguaje sencillo que su equipo de operaciones puede seguir por su cuenta.",
      },
    ],
    approach: [
      "Primero automatizamos las partes estables y bien entendidas de un proceso, y dejamos las decisiones de criterio a las personas. Así los primeros proyectos son pequeños, el riesgo es menor y los resultados se ven en semanas.",
      "Cuando una plataforma sin código es la opción adecuada, la usamos. Cuando el volumen, la fiabilidad o la seguridad exigen más, desarrollamos servicios a medida y los monitoreamos como cualquier otro sistema en producción.",
    ],
    engagement: [
      { label: "Proyecto habitual", value: "3 a 8 semanas" },
      { label: "Equipo", value: "Responsable de soluciones y 1 a 2 ingenieros" },
      { label: "Después del lanzamiento", value: "Monitoreo y solicitudes de cambio" },
    ],
    faqs: [
      {
        question: "¿Con qué herramientas se integran?",
        answer:
          "Con la mayoría del software empresarial que tenga API, incluidos Salesforce, HubSpot, NetSuite, QuickBooks, Shopify, Slack, Microsoft 365 y Google Workspace.",
      },
      {
        question: "¿Qué pasa cuando falla una automatización?",
        answer:
          "Los fallos se reintentan automáticamente cuando es seguro hacerlo. Todo lo que necesite a una persona genera una alerta con el contexto suficiente para resolverlo.",
      },
    ],
  },
  "web-optimization": {
    name: "Optimización web",
    summary: "Sitios más rápidos que retienen a los visitantes y se posicionan mejor en Google.",
    seoTitle: "Optimización de velocidad y rendimiento web",
    metaDescription:
      "Optimización del rendimiento web basada en datos de visitantes reales: tiempos de carga más rápidos, mejores Core Web Vitals y puntuaciones de Lighthouse, y monitoreo para mantenerlos.",
    headline: "La velocidad es lo primero que notan sus clientes.",
    intro:
      "Las páginas lentas le cuestan conversiones y visibilidad en buscadores. Usamos datos de visitantes reales para encontrar exactamente qué hace lento su sitio, corregimos las causas en su código y configuramos un monitoreo para que el rendimiento no vuelva a empeorar sin que nadie lo note.",
    plain:
      "Hacemos que su sitio cargue más rápido, sobre todo en teléfonos. Las páginas rápidas evitan que los visitantes se vayan y le ayudan a posicionarse mejor en Google.",
    stack: [
      "Lighthouse",
      "Core Web Vitals",
      "Chrome DevTools",
      "WebPageTest",
      "Next.js",
      "Optimización de imágenes (AVIF, WebP)",
      "Cloudflare",
      "Caché en CDN",
      "Sentry",
    ],
    included: [
      {
        title: "Auditoría de rendimiento",
        detail:
          "Análisis de campo y de laboratorio de los Core Web Vitals en sus plantillas de página y dispositivos clave.",
      },
      {
        title: "Rendimiento de carga",
        detail: "Recursos que bloquean el renderizado, tiempos de respuesta del servidor y otras mejoras para el LCP.",
      },
      {
        title: "Capacidad de respuesta",
        detail: "Menos JavaScript y menos tareas largas, para una mejor Interaction to Next Paint.",
      },
      {
        title: "Imágenes y multimedia",
        detail: "Formatos modernos, tamaños adaptables y carga diferida, bien configurados.",
      },
      {
        title: "Caché y distribución",
        detail: "Configuración de CDN, encabezados de caché y renderizado en el edge cuando ayudan.",
      },
      {
        title: "Monitoreo",
        detail: "Monitoreo de usuarios reales y presupuestos de rendimiento que se verifican antes de cada despliegue.",
      },
    ],
    approach: [
      "Primero medimos. Las puntuaciones de Lighthouse son útiles, pero los Core Web Vitals que influyen en el posicionamiento provienen de sus visitantes reales, así que priorizamos esos datos.",
      "Las correcciones se entregan como cambios normales de código en su repositorio, se revisan con su equipo y se verifican con datos de producción una vez publicadas.",
    ],
    engagement: [
      { label: "Auditoría", value: "1 a 2 semanas" },
      { label: "Implementación", value: "2 a 6 semanas" },
      { label: "Después del lanzamiento", value: "Revisiones trimestrales de rendimiento" },
    ],
    faqs: [
      {
        question: "¿Pueden optimizar un sitio que no desarrollaron ustedes?",
        answer:
          "Sí. La mayor parte de nuestro trabajo de optimización es en sitios existentes hechos con Next.js, WordPress, Shopify, Magento o tecnologías a medida.",
      },
      {
        question: "¿Garantizan una puntuación de Lighthouse?",
        answer:
          "No garantizamos puntuaciones. Después de la auditoría acordamos objetivos concretos e informamos de nuestro avance frente a ellos.",
      },
    ],
  },
  seo: {
    name: "SEO",
    summary: "Ayudamos a Google a encontrar, entender y posicionar su sitio, para que sus clientes lo encuentren.",
    seoTitle: "Servicios de SEO técnico",
    metaDescription:
      "SEO técnico para sitios de empresa: estructura del sitio, indexación, metadatos, datos estructurados y velocidad, implementados por ingenieros en lugar de quedarse en un informe.",
    headline: "Un buen SEO empieza con un sitio fácil de rastrear y fácil de entender.",
    intro:
      "Nos enfocamos en la base técnica de la búsqueda: cómo está estructurado su sitio, qué tan rápido carga, cómo se indexan sus páginas y con qué claridad se describe su contenido a los buscadores. Es la parte del SEO más ligada a cómo se construye un sitio, y la que más se descuida.",
    plain:
      "Corregimos los problemas técnicos que impiden que Google encuentre y entienda su sitio, para que los clientes adecuados puedan encontrarlo.",
    stack: [
      "Google Search Console",
      "Google Analytics 4",
      "Schema.org",
      "Sitemaps XML",
      "Screaming Frog",
      "Core Web Vitals",
      "Next.js",
      "WordPress",
    ],
    included: [
      {
        title: "Auditoría técnica",
        detail: "Rastreabilidad, indexación, URL canónicas, redirecciones y contenido duplicado.",
      },
      {
        title: "Arquitectura del sitio",
        detail: "Estructura de URL, enlaces internos y navegación que reflejan cómo busca la gente.",
      },
      {
        title: "Metadatos y datos estructurados",
        detail: "Títulos, descripciones y marcado schema generados de forma coherente a partir de su contenido.",
      },
      {
        title: "Rendimiento",
        detail:
          "Mejoras en los Core Web Vitals que benefician tanto al posicionamiento como a la experiencia del usuario.",
      },
      {
        title: "Migraciones",
        detail:
          "Planificación y monitoreo de redirecciones que protegen su posicionamiento en rediseños y cambios de plataforma.",
      },
      {
        title: "Informes",
        detail: "Informes de Search Console y analítica enfocados en tráfico cualificado.",
      },
    ],
    approach: [
      "No vendemos paquetes de enlaces ni prometemos la primera página. Corregimos lo que impide que los buscadores encuentren, entiendan y confíen en su sitio, y ayudamos a su equipo a publicar contenido que responde preguntas reales.",
      "Como somos ingenieros, nuestras recomendaciones vienen con la implementación, no con una hoja de cálculo de problemas para que otro los resuelva.",
    ],
    engagement: [
      { label: "Auditoría", value: "2 semanas" },
      { label: "Implementación", value: "3 a 6 semanas" },
      { label: "Después del lanzamiento", value: "Informes y asesoría mensuales" },
    ],
    faqs: [
      {
        question: "¿Cuánto tardaremos en ver resultados?",
        answer:
          "Las correcciones técnicas suelen notarse pocas semanas después de que Google rastrea el sitio. Las mejoras de posicionamiento más amplias suelen tardar de tres a seis meses.",
      },
      {
        question: "¿Redactan contenido?",
        answer:
          "Aportamos la estrategia de contenidos y las pautas, y trabajamos junto a sus redactores o socios de contenido en la producción.",
      },
    ],
  },
};
