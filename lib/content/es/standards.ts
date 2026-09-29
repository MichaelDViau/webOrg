import type { StandardSlug, StandardText } from "@/lib/standards";
import type { StandardPage, StandardsPage } from "../en/standards";

/**
 * Estándares publicados: lo que hacemos por defecto, en lenguaje claro, para compradores y sus revisores de
 * TI. Son compromisos: confirme que cada uno coincide con el manual de operaciones antes del lanzamiento.
 */
export const standards: Record<StandardSlug, StandardText> = {
  security: {
    name: "Seguridad",
    card: "HTTPS en todas partes, sin secretos en el código, monitoreo, copias de seguridad y actualizaciones rápidas.",
    seoTitle: "Estándar de seguridad",
    metaDescription:
      "Cómo protegemos cada proyecto por defecto: HTTPS en todas partes, encabezados de seguridad, protección contra spam en formularios, ningún secreto en el código, disponibilidad monitoreada, copias de seguridad y actualizaciones rápidas.",
    headline: "Seguridad por defecto, en lenguaje claro.",
    lead: "Esto es lo que hacemos en cada proyecto sin que nos lo pidan, y cómo puede comprobarlo.",
    defaults: [
      {
        title: "HTTPS en todas partes",
        detail: "Cada página y cada formulario se sirven por una conexión cifrada, y se indica a los navegadores que la exijan.",
      },
      {
        title: "Encabezados de seguridad",
        detail: "Encabezados que limitan lo que una página puede cargar y hacer, para que un error en un punto no se propague.",
      },
      {
        title: "Protección contra spam en formularios",
        detail: "Los formularios se protegen sin acertijos para sus visitantes y con límites de frecuencia contra abusos.",
      },
      {
        title: "Ningún secreto en el código",
        detail: "Las contraseñas y claves viven en ajustes protegidos y en un gestor de contraseñas, nunca en el código.",
      },
      {
        title: "Disponibilidad monitoreada",
        detail: "Se nos avisa cuando su sitio o sistema deja de funcionar, y una persona con nombre y apellido responde.",
      },
      {
        title: "Copias de seguridad",
        detail: "Los datos y la configuración se respaldan, y la restauración desde una copia se prueba antes del lanzamiento.",
      },
      {
        title: "Actualizaciones aplicadas con rapidez",
        detail: "Las actualizaciones de software y plataformas, y los parches de seguridad, se aplican sin demora, no se dejan para después.",
      },
      {
        title: "Cuentas a su nombre, con MFA",
        detail: "Las cuentas de alojamiento, dominio, gestión de contenido y analítica pertenecen a su empresa y exigen autenticación multifactor.",
      },
    ],
    wontPromiseTitle: "Lo que no prometemos",
    wontPromise: [
      "Que nada saldrá mal jamás. Nadie puede prometerlo.",
      "Certificaciones que no tenemos. Si su sector necesita una, se lo diremos y le ayudaremos a prepararse.",
    ],
    verifyTitle: "Cómo puede comprobarlo",
    verify: [
      "Pida a su responsable de TI que inspeccione los encabezados de seguridad y la configuración de HTTPS con cualquier escáner público.",
      "Pida ver quién tiene acceso a cada cuenta. Es una lista que le pertenece.",
      "Para reportar una vulnerabilidad, escríbanos. Tomamos en serio cada reporte y respondemos con rapidez.",
    ],
  },

  performance: {
    name: "Rendimiento",
    card: "Buenos Core Web Vitals para visitantes reales, juzgados con datos de campo.",
    seoTitle: "Estándar de rendimiento",
    metaDescription:
      "Cómo construimos sitios rápidos: metas de Core Web Vitals (LCP 2,5 s, INP 200 ms, CLS 0,1) juzgadas con datos de usuarios reales, imágenes optimizadas, pocas fuentes y un mínimo de scripts de terceros.",
    headline: "Rápido para visitantes reales, en teléfonos reales.",
    lead: "Un sitio hermoso pero lento contradice todo lo que vendemos. Así mantenemos rápido el nuestro, y el suyo.",
    defaults: [
      {
        title: "Los datos reales juzgan. Las herramientas de laboratorio ayudan a depurar.",
        detail: "Juzgamos la velocidad por lo que viven los visitantes reales (datos de campo) y usamos herramientas de laboratorio para encontrar qué corregir.",
      },
      {
        title: "Imágenes optimizadas",
        detail: "Formatos modernos, los tamaños correctos para cada pantalla y carga solo cuando hace falta.",
      },
      {
        title: "Pocas fuentes tipográficas",
        detail: "Una tipografía clara, cargada de forma eficiente, para que el texto aparezca sin parpadeos ni saltos.",
      },
      {
        title: "Un mínimo de scripts de terceros",
        detail: "Cada script externo ralentiza a cada visitante, así que cada uno debe ganarse su lugar.",
      },
      {
        title: "Revisado en el móvil",
        detail: "Probamos primero en teléfonos, porque ahí está la mayoría de los visitantes.",
      },
    ],
    targets: {
      title: "Qué buscamos",
      intro:
        "Buscamos una calificación \"buena\" en Core Web Vitals en el percentil 75 de los datos de usuarios reales, con los umbrales publicados por Google.",
      rows: [
        { label: "Largest Contentful Paint (LCP)", value: "2,5 segundos o menos" },
        { label: "Interaction to Next Paint (INP)", value: "200 milisegundos o menos" },
        { label: "Cumulative Layout Shift (CLS)", value: "0,1 o menos" },
      ],
      note: "Fuente: web.dev, umbrales de Core Web Vitals.",
    },
    wontPromiseTitle: "Lo que no prometemos",
    wontPromise: [
      "Una puntuación garantizada en una prueba de velocidad. Las puntuaciones varían según la herramienta, el día y el dispositivo.",
      "Resultados antes de que existan datos de usuarios reales. Un sitio nuevo necesita visitantes antes de tener datos de campo.",
    ],
    verifyTitle: "Cómo puede comprobarlo",
    verify: [
      "Consulte los Core Web Vitals en Google Search Console, que reporta datos de usuarios reales de su sitio.",
      "Ejecute la prueba de velocidad instantánea en este sitio, o en el suyo, para ver una prueba de laboratorio en un teléfono simulado.",
    ],
  },

  accessibility: {
    name: "Accesibilidad",
    card: "WCAG 2.2 AA como base, comprobada con herramientas y a mano.",
    seoTitle: "Estándar de accesibilidad",
    metaDescription:
      "Nuestra base de accesibilidad es WCAG 2.2 AA: uso con teclado, foco visible, contraste, etiquetas, encabezados y texto alternativo, probados con un verificador automático y una revisión manual con teclado.",
    headline: "Utilizable por todas las personas, en cualquier dispositivo.",
    lead: "La accesibilidad no es un extra. Es parte de construir algo que funciona.",
    defaults: [
      {
        title: "Uso con teclado",
        detail: "Todo se puede alcanzar y usar sin ratón, en un orden lógico.",
      },
      {
        title: "Foco visible",
        detail: "Siempre se ve dónde está usted en la página.",
      },
      {
        title: "Contraste",
        detail: "El texto y los controles se leen con facilidad sobre su fondo, en los temas claro y oscuro.",
      },
      {
        title: "Etiquetas",
        detail: "Cada campo de formulario tiene una etiqueta clara y un mensaje de error útil.",
      },
      {
        title: "Encabezados y estructura",
        detail: "Las páginas tienen un esquema lógico, para que quienes usan lectores de pantalla se muevan por ellas con rapidez.",
      },
      {
        title: "Texto alternativo",
        detail: "Las imágenes con significado tienen una descripción en texto. Las decorativas se ocultan a las tecnologías de apoyo.",
      },
    ],
    wontPromiseTitle: "Lo que no prometemos",
    wontPromise: [
      "Que un sitio sea \"totalmente accesible\" para toda persona en toda situación. Apuntamos a WCAG 2.2 AA y corregimos lo que encontremos.",
      "Que un verificador automático baste. Solo detecta una parte de los problemas, por eso también probamos a mano.",
    ],
    verifyTitle: "Cómo probamos y cómo puede probar usted",
    verify: [
      "Un verificador automático en cada página, más una revisión manual con teclado antes del lanzamiento.",
      "Pruébelo usted mismo: pulse la tecla Tab en cualquier página de este sitio y siga el foco.",
      "Si algo no le funciona, díganoslo. Lo corregiremos.",
    ],
  },

  "ai-policy": {
    name: "Política de IA",
    card: "La IA redacta. Su equipo aprueba.",
    seoTitle: "Política de IA",
    metaDescription:
      "Cómo usamos la IA en el trabajo con clientes: la IA redacta y su equipo aprueba, probada con sus propios ejemplos, con sus datos guardados en sus cuentas y sin usarse para entrenamiento sin consentimiento por escrito.",
    headline: "La IA redacta. Su equipo aprueba.",
    lead: "La IA es una herramienta para tareas concretas, usada con una persona al mando. Esta es la política que seguimos en cada proyecto que la emplea.",
    defaults: [
      {
        title: "Una persona revisa lo que llega a un cliente",
        detail: "La IA redacta, clasifica y resume. Una persona aprueba antes de que algo salga, salvo que usted decida otra cosa por escrito para una tarea concreta y de bajo riesgo.",
      },
      {
        title: "Una tarea clara a la vez",
        detail: "Aplicamos la IA a una tarea concreta y medible. Si una regla sencilla funciona mejor, usamos la regla.",
      },
      {
        title: "Probada con sus propios ejemplos",
        detail: "Medimos la precisión con ejemplos reales verificados por su equipo, antes de que nadie dependa del resultado.",
      },
      {
        title: "Sus datos siguen siendo suyos",
        detail: "Los datos permanecen en cuentas que le pertenecen. No los enviamos a un proveedor que los use para entrenar modelos sin su consentimiento por escrito.",
      },
      {
        title: "Le decimos qué se usa",
        detail: "Usted sabe qué proveedor de IA se encarga de qué y dónde se procesan los datos.",
      },
      {
        title: "Las respuestas muestran sus fuentes",
        detail: "Cuando una respuesta sale de documentos, remite a ellos, para que una persona pueda comprobarla.",
      },
      {
        title: "Monitoreada después del lanzamiento",
        detail: "Seguimos midiendo la precisión y le avisamos si baja.",
      },
    ],
    wontPromiseTitle: "Lo que no prometemos",
    wontPromise: [
      "Que la IA siempre acierte. No es así, y por eso una persona revisa.",
      "Sistemas totalmente autónomos. No los construimos para tareas con consecuencias reales.",
    ],
    verifyTitle: "Cómo puede comprobarlo",
    verify: [
      "Pregunte qué proveedor de IA se usa para cada tarea y dónde se procesan los datos.",
      "Pida ver los resultados de las pruebas con sus propios ejemplos.",
      "Puede desactivar las funciones de IA en cualquier momento.",
    ],
  },

  privacy: {
    name: "Privacidad",
    card: "Recopilar solo lo necesario, guardarlo en sus cuentas y cumplir las normas locales.",
    seoTitle: "Estándar de privacidad",
    metaDescription:
      "Cómo manejamos los datos personales en el trabajo con clientes: recopilar solo lo necesario, guardarlo en sus cuentas y cumplir las normas locales, incluida la Ley 25 de Quebec y la ley federal de privacidad de México.",
    headline: "Solo los datos que necesita, guardados donde usted los controla.",
    lead: "Este es el estándar de privacidad para el trabajo con clientes. Cómo trata este sitio web sus datos está en la política de privacidad.",
    defaults: [
      {
        title: "Recopilar solo lo necesario",
        detail: "Si un sistema no necesita un dato personal, no lo recopilamos.",
      },
      {
        title: "Los datos viven en sus cuentas",
        detail: "Los datos de los clientes se almacenan en cuentas que le pertenecen, para que usted conserve el control.",
      },
      {
        title: "Consentimiento según el país",
        detail: "Los avisos de consentimiento siguen las normas de donde están sus visitantes, incluida la Ley 25 de Quebec y la ley federal de privacidad de México.",
      },
      {
        title: "Acceso y eliminación",
        detail: "Incorporamos la capacidad de encontrar, corregir, exportar y eliminar los datos de una persona cuando lo solicita.",
      },
      {
        title: "Proveedores identificados",
        detail: "Le decimos qué proveedores de servicios manejan datos personales, y por qué.",
      },
      {
        title: "Conservados solo el tiempo necesario",
        detail: "Los plazos de conservación se acuerdan de antemano y los datos antiguos se eliminan.",
      },
    ],
    wontPromiseTitle: "Lo que no prometemos",
    wontPromise: [
      "Asesoría legal. Nosotros construimos las herramientas. Su abogado decide qué necesita su negocio.",
      "Que una ley se aplique o no. Planteamos las preguntas y su abogado las responde.",
    ],
    verifyTitle: "Cómo puede comprobarlo",
    verify: [
      "Pida la lista de proveedores de servicios que manejan datos personales en su proyecto.",
      "Lea la política de privacidad, el aviso de cookies y el aviso de privacidad para México de este sitio.",
    ],
  },
};

export const standardsPage: StandardsPage = {
  metaTitle: "Estándares: seguridad, rendimiento, accesibilidad, IA y privacidad",
  metaDescription:
    "Los estándares detrás de cada proyecto, en lenguaje claro: seguridad, rendimiento, accesibilidad, política de IA y privacidad. Publicados para que su revisor de TI pueda comprobarnos.",
  eyebrow: "Estándares",
  title: "Lo que hacemos por defecto, por escrito.",
  lead: "Los compradores serios y sus revisores de TI deberían poder comprobarnos antes de firmar. Estos cinco estándares se aplican a cada proyecto.",
  readStandard: "Leer el estándar",
  ownershipTitle: "De quién es cada cosa",
  ownershipBody:
    "El código, las cuentas y los dominios son suyos, desde el primer día. Trabajamos con accesos nominales que usted puede retirar en cualquier momento.",
  technologyTitle: "Tecnología",
  technologyBody:
    "Construimos con herramientas comunes y bien documentadas, como TypeScript, React y Next.js, PostgreSQL y alojamiento administrado. Elegimos según el proyecto, y elegimos herramientas que cualquier desarrollador capacitado pueda mantener.",
  processLink: "Ver cómo trabajamos",
  ctaTitle: "¿Necesita que revisemos algo antes de decidir?",
  ctaLead: "Envíenos a su responsable de TI. Con gusto responderemos a sus preguntas.",
};

export const standardPage: StandardPage = {
  defaults: "Lo que hacemos por defecto",
  otherStandards: "Otros estándares",
  lastReviewed: "Estándares revisados el {date}.",
};
