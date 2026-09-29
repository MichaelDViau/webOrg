import type { ServiceSlug, ServiceText } from "@/lib/services";
import type { ServicesPage } from "../en/services";

/** Todas las páginas de servicios siguen la misma estructura, para que los compradores puedan compararlas. */
export const services: Record<ServiceSlug, ServiceText> = {
  "revenue-websites": {
    name: "Sitios web que generan ingresos",
    card: "Sitios pensados para convertir visitas en consultas calificadas, atendidas con rapidez.",
    seoTitle: "Sitios web que generan ingresos para empresas de servicios",
    metaDescription:
      "Sitios web de empresa construidos para una sola tarea: que las personas adecuadas pidan ayuda y que alguien responda rápido. Rápidos, accesibles, en español, inglés y francés.",
    headline: "Un sitio web que atrae consultas, no solo visitas.",
    lead: "Diseñamos y construimos sitios web de empresa para una sola tarea: que las personas adecuadas pidan ayuda y que alguien responda con rapidez.",
    forWhom: "Para empresas de servicios y operaciones cuyo sitio web es su primer vendedor.",
    problemQuotes: [
      "La gente visita el sitio, pero pocos nos escriben.",
      "Nuestro sitio se ve bien, pero no sé cuánto nos aporta.",
      "Las consultas llegan a una bandeja de entrada y esperan.",
    ],
    problemDetail:
      "La mayoría de los sitios explican qué es una empresa. Un sitio que genera ingresos explica qué cambiará para el visitante, muestra cuánto cuesta empezar y conecta cada formulario con una respuesta rápida.",
    changes: [
      "En diez segundos, los visitantes ven qué hace usted, para quién y qué hacer a continuación.",
      "Cada consulta recibe una confirmación inmediata y llega a la persona correcta.",
      "Usted ve las consultas por página y por idioma, y sabe qué funciona.",
      "Las páginas cargan rápido en el teléfono y cumplen los estándares de accesibilidad.",
    ],
    included: [
      {
        title: "Contenido y estructura",
        detail: "Páginas organizadas en torno a las preguntas de su comprador, no en torno a su organigrama.",
      },
      {
        title: "Diseño y construcción",
        detail: "Un sitio sobrio, rápido y accesible que su equipo puede editar en cada idioma que necesite.",
      },
      {
        title: "Flujo de consultas",
        detail: "Formularios conectados a su CRM, una confirmación inmediata y el envío a la persona correcta.",
      },
      {
        title: "Medición",
        detail: "Analítica y Search Console configuradas, con una vista mensual de consultas y tiempos de respuesta.",
      },
      {
        title: "Revisiones antes del lanzamiento",
        detail: "Redirecciones, pruebas en el teléfono, revisiones de teclado y contraste, y formularios probados en cada idioma.",
      },
    ],
    phases: [
      {
        title: "Planificar",
        detail: "Mapa del sitio, mensajes y flujo de consultas, acordados por escrito.",
      },
      {
        title: "Diseñar",
        detail: "Maquetas y un sistema visual que usted aprueba con contenido real.",
      },
      {
        title: "Construir a la vista",
        detail: "Un enlace de pruebas desde la primera semana y un informe escrito cada semana.",
      },
      {
        title: "Lanzamiento y 90 días de cuidado",
        detail: "Publicamos y, durante 90 días, vigilamos y corregimos lo que surja.",
      },
    ],
    faqs: [
      {
        question: "¿Puede nuestro equipo editar el sitio?",
        answer:
          "Sí. Configuramos la edición de contenido para que su equipo cambie las páginas en cada idioma sin llamar a un desarrollador.",
      },
      {
        question: "¿Reconstruyen o mejoran lo que ya tenemos?",
        answer: "Cualquiera de las dos. La auditoría le dice cuál cuesta menos para lo que necesita.",
      },
      {
        question: "¿El sitio aparecerá bien posicionado en Google?",
        answer:
          "Construimos la base técnica: estructura, velocidad, metadatos y datos estructurados. No prometemos posiciones ni vendemos enlaces.",
      },
    ],
  },

  "client-portals": {
    name: "Portales para clientes y propietarios",
    card: "Un lugar seguro para consultar estado, documentos y facturas, y así sus clientes dejan de llamar.",
    seoTitle: "Portales para clientes y propietarios",
    metaDescription:
      "Portales seguros donde clientes y propietarios consultan su estado, documentos y facturas sin llamar a su oficina. Conectados con el software que ya usa.",
    headline: "Sus clientes consultan su propio estado. Su equipo deja de contestar las mismas llamadas.",
    lead: "Construimos portales seguros donde clientes, inquilinos o propietarios encuentran por sí mismos su estado, sus documentos y sus facturas.",
    forWhom: "Para negocios cuyos clientes llaman o escriben todo el tiempo para saber en qué van las cosas.",
    problemQuotes: [
      "Los clientes llaman para saber en qué van las cosas.",
      "Enviamos los mismos documentos por correo una y otra vez.",
      "Los propietarios piden reportes y los armamos a mano.",
    ],
    problemDetail:
      "Cada llamada para preguntar el estado indica que la información existe en algún lugar donde su cliente no puede verla. Un portal pone la información correcta frente a la persona correcta, y frente a nadie más.",
    changes: [
      "Los clientes encuentran por sí mismos estado, documentos y facturas.",
      "Su equipo atiende menos llamadas y correos para preguntar el estado.",
      "Cada solicitud tiene historial: quién preguntó, quién respondió y cuándo.",
      "Cada persona ve solo su propia información.",
    ],
    included: [
      {
        title: "Acceso seguro y permisos",
        detail: "Cada cliente, propietario o inquilino ve solo sus propios registros.",
      },
      {
        title: "Estado y documentos",
        detail: "Paneles, archivos y estados de cuenta, actualizados desde su software actual.",
      },
      {
        title: "Solicitudes y mensajes",
        detail: "Un solo lugar para preguntar, con un registro claro de quién respondió y cuándo.",
      },
      {
        title: "Conexión con su software",
        detail: "Facturación, administración o contabilidad, mediante su API, sus exportaciones o su base de datos.",
      },
      {
        title: "Vista de administración para su equipo",
        detail: "Todo en una sola cola, con estado e historial.",
      },
    ],
    phases: [
      {
        title: "Identificar qué preguntan los clientes",
        detail: "Listamos las preguntas que llenan su bandeja de entrada y su teléfono, y elegimos por cuáles empezar.",
      },
      {
        title: "Primera versión",
        detail: "Las pocas pantallas que responden la mayoría de las preguntas, probadas con usuarios reales.",
      },
      {
        title: "Crecer con el uso real",
        detail: "Añadimos lo que la gente pide, en fases a precio fijo.",
      },
      {
        title: "Lanzamiento y 90 días de cuidado",
        detail: "Publicamos y, durante 90 días, vigilamos y corregimos lo que surja.",
      },
    ],
    faqs: [
      {
        question: "¿Cómo protegen los datos de los clientes?",
        answer:
          "Cada usuario ve solo sus propios registros, el acceso usa autenticación multifactor cuando corresponde, y todo sigue nuestro estándar de seguridad publicado.",
      },
      {
        question: "¿Puede conectarse con el software que ya usamos?",
        answer:
          "Con frecuencia sí, mediante su API, sus exportaciones o acceso a su base de datos. Revisamos qué es posible durante la auditoría, antes de que se comprometa a nada.",
      },
      {
        question: "¿Los clientes tienen que instalar algo?",
        answer: "No. Funciona en el navegador, en un teléfono o en una computadora.",
      },
    ],
  },

  "operations-apps": {
    name: "Aplicaciones de operaciones y paneles",
    card: "Su proceso en una sola herramienta en lugar de cinco hojas de cálculo.",
    seoTitle: "Aplicaciones de operaciones y paneles",
    metaDescription:
      "Herramientas internas y paneles que reemplazan hojas de cálculo y cadenas de correos con software hecho a la medida de su proceso, para que su equipo vea qué se atrasa y qué sigue.",
    headline: "Su proceso en una sola herramienta, no en cinco hojas de cálculo.",
    lead: "Construimos aplicaciones internas y paneles a la medida de cómo trabaja de verdad su equipo, para que todos vean el mismo estado.",
    forWhom: "Para equipos que llevan sus operaciones en hojas de cálculo, bandejas compartidas y de memoria.",
    problemQuotes: [
      "El proceso real vive en una hoja de cálculo que solo una persona entiende.",
      "No sabemos qué está atrasado hasta que alguien nos avisa.",
      "Los reportes tardan un día en armarse.",
    ],
    problemDetail:
      "Las hojas de cálculo son un buen comienzo. Dejan de funcionar cuando varias personas dependen de ellas y cuando saber qué se atrasó exige una reunión.",
    changes: [
      "Un solo lugar para ver el trabajo en curso y lo que está atrasado.",
      "La misma información se captura una sola vez.",
      "Los gerentes reciben reportes sin tener que armarlos.",
      "El personal nuevo aprende una herramienta, no una cadena de archivos.",
    ],
    included: [
      {
        title: "Mapeo del flujo de trabajo",
        detail: "Seguimos el trabajo tal como ocurre de verdad y luego acordamos cómo debería ocurrir.",
      },
      {
        title: "La aplicación interna",
        detail: "Pantallas y roles hechos para las tareas diarias de su equipo.",
      },
      {
        title: "Paneles",
        detail: "Qué está en curso, qué está atrasado y qué sigue, sin reuniones.",
      },
      {
        title: "Importación de datos",
        detail: "Sus hojas de cálculo actuales importadas, depuradas y verificadas.",
      },
      {
        title: "Capacitación y entrega",
        detail: "Guías breves y una sesión de trabajo para su equipo.",
      },
    ],
    phases: [
      {
        title: "Mapear el flujo de trabajo",
        detail: "Quién hace qué, en qué orden y dónde se atora.",
      },
      {
        title: "Construir la versión útil más pequeña",
        detail: "La primera versión quita trabajo real. Nada más.",
      },
      {
        title: "Mejorar con el uso",
        detail: "Ajustamos con los comentarios de su equipo, en fases a precio fijo.",
      },
      {
        title: "Lanzamiento y 90 días de cuidado",
        detail: "Publicamos y, durante 90 días, vigilamos y corregimos lo que surja.",
      },
    ],
    faqs: [
      {
        question: "¿No es más barato el software de catálogo?",
        answer:
          "A veces. Si un producto estándar se ajusta a su proceso, se lo diremos en la auditoría y no construiremos nada.",
      },
      {
        question: "¿De quién son los datos y el código?",
        answer: "Suyos. Ambos viven en cuentas a nombre de su empresa.",
      },
      {
        question: "¿Podemos empezar en pequeño?",
        answer: "Sí. La primera fase es la versión más pequeña que quita trabajo real.",
      },
    ],
  },

  automation: {
    name: "Automatización",
    card: "El trabajo rutinario se hace solo, con un registro que se puede leer.",
    seoTitle: "Automatización de procesos de negocio",
    metaDescription:
      "Automatizaciones que mueven datos entre sus herramientas, envían recordatorios y encaminan aprobaciones, con un registro de cada paso para rastrear los errores con facilidad.",
    headline: "El trabajo rutinario se hace solo, y queda constancia de lo que se hizo.",
    lead: "Automatizamos los pasos predecibles entre sus herramientas, para que su gente dedique su tiempo al trabajo que requiere criterio.",
    forWhom: "Para equipos que vuelven a capturar datos, persiguen aprobaciones o envían los mismos recordatorios a mano.",
    problemQuotes: [
      "Volvemos a capturar los mismos datos en tres sistemas.",
      "Los recordatorios dependen de que alguien se acuerde.",
      "Las aprobaciones se quedan atoradas en las bandejas de entrada.",
    ],
    problemDetail:
      "Si un paso es predecible, debería hacerlo una máquina. Si requiere criterio, debería hacerlo una persona. Una buena automatización mantiene clara esa línea y deja constancia.",
    changes: [
      "Los datos pasan entre sus herramientas sin volver a capturarse.",
      "Los recordatorios y las aprobaciones ocurren a tiempo.",
      "Cada paso automatizado queda registrado, así que los errores son fáciles de rastrear.",
      "Su equipo conserva las decisiones que requieren criterio.",
    ],
    included: [
      {
        title: "Revisión del proceso",
        detail: "Elegimos los pasos que valen la pena automatizar y dejamos el resto como está.",
      },
      {
        title: "Flujos de trabajo",
        detail: "Recepción, recordatorios, aprobaciones y reportes que se ejecutan sin que nadie los inicie.",
      },
      {
        title: "Manejo de errores y alertas",
        detail: "Cuando algo falla, se avisa a una persona con nombre y apellido, y nada se pierde en silencio.",
      },
      {
        title: "Registros que se pueden leer",
        detail: "Un registro sencillo de qué se ejecutó, cuándo y con qué resultado.",
      },
      {
        title: "Documentación",
        detail: "Qué hace cada automatización y cómo modificarla.",
      },
    ],
    phases: [
      {
        title: "Elegir el primer flujo",
        detail: "El que más tiempo consume con el menor riesgo.",
      },
      {
        title: "Construir y probar",
        detail: "Lo ejecutamos junto al proceso manual antes de hacer el cambio.",
      },
      {
        title: "Hacer el cambio",
        detail: "La automatización toma el relevo, con las alertas activadas.",
      },
      {
        title: "Lanzamiento y 90 días de cuidado",
        detail: "Vigilamos y corregimos lo que surja durante 90 días.",
      },
    ],
    faqs: [
      {
        question: "¿Qué pasa si una automatización comete un error?",
        answer:
          "Cada ejecución queda registrada y los fallos avisan a una persona con nombre y apellido. Los pasos con consecuencias reales piden primero la aprobación de una persona.",
      },
      {
        question: "¿Qué herramientas pueden conectar?",
        answer:
          "La mayoría del software de negocio que ofrece una API, una exportación o entrada y salida por correo. Revisamos qué es posible durante la auditoría.",
      },
    ],
  },

  "ai-with-judgment": {
    name: "IA con criterio",
    card: "La IA redacta. Su equipo aprueba.",
    seoTitle: "IA con revisión humana para operaciones",
    metaDescription:
      "IA que redacta, clasifica y resume mientras su equipo revisa antes de que algo llegue a un cliente. Probada con sus propios ejemplos, con sus datos guardados en sus cuentas.",
    headline: "La IA redacta. Su equipo aprueba.",
    lead: "Aplicamos la IA a tareas concretas y medibles: leer documentos, redactar respuestas, clasificar solicitudes. Una persona revisa el resultado antes de que llegue a un cliente.",
    forWhom: "Para equipos que pasan horas leyendo, clasificando o redactando, y que quieren mantener el control.",
    problemQuotes: [
      "El personal pasa horas leyendo documentos para encontrar una sola respuesta.",
      "Contestar los correos rutinarios lleva demasiado tiempo.",
      "La IA nos interesa, pero nos preocupan los errores.",
    ],
    problemDetail:
      "La IA es útil cuando la tarea es clara, el resultado se puede comprobar y una persona toma la decisión final. No es la herramienta adecuada cuando basta una regla sencilla, y se lo diremos.",
    changes: [
      "Borradores y resúmenes en minutos, cada uno revisado por una persona.",
      "Las respuestas señalan los documentos de donde salieron.",
      "Usted sabe qué tan precisa es, porque la probamos con sus propios ejemplos.",
      "Sus datos permanecen en cuentas que son suyas.",
    ],
    included: [
      {
        title: "Elección del caso de uso",
        detail: "Comprobamos que la IA sea de verdad la herramienta adecuada y elegimos una tarea para empezar.",
      },
      {
        title: "Un conjunto de pruebas con sus ejemplos",
        detail: "Preguntas y documentos reales, con respuestas verificadas por su equipo.",
      },
      {
        title: "Un prototipo con revisión humana",
        detail: "Cada resultado espera la aprobación de una persona antes de ir a ninguna parte.",
      },
      {
        title: "Controles de acceso y privacidad",
        detail: "Quién puede ver qué y dónde se procesan sus datos, conforme a nuestra política de IA.",
      },
      {
        title: "Monitoreo",
        detail: "Seguimos midiendo la precisión después del lanzamiento y le avisamos si se desvía.",
      },
    ],
    phases: [
      {
        title: "Elegir una tarea",
        detail: "Concreta, medible y de bajo riesgo.",
      },
      {
        title: "Probar con sus ejemplos",
        detail: "Medimos la precisión antes de que nadie dependa de ella.",
      },
      {
        title: "Piloto con revisión humana",
        detail: "Un grupo pequeño la usa y revisa cada resultado.",
      },
      {
        title: "Lanzamiento y 90 días de cuidado",
        detail: "Publicamos, medimos la precisión y corregimos problemas durante 90 días.",
      },
    ],
    faqs: [
      {
        question: "¿La IA enviará algo a los clientes sin revisión?",
        answer:
          "No por defecto. Nuestra política de IA exige que una persona revise todo lo que llegue a un cliente, salvo que usted decida otra cosa por escrito para una tarea concreta y de bajo riesgo.",
      },
      {
        question: "¿Qué modelos de IA usan?",
        answer:
          "Elegimos según la tarea, por precisión, costo y privacidad, y le decimos qué proveedor se encarga de qué.",
      },
      {
        question: "¿Se usan nuestros datos para entrenar modelos de IA?",
        answer:
          "Nuestra política es no enviar sus datos a un proveedor que los use para entrenar modelos sin su consentimiento por escrito. La página de la política de IA da los detalles.",
      },
    ],
  },

  "integrations-and-data": {
    name: "Integraciones y datos",
    card: "Sus herramientas comparten los mismos datos.",
    seoTitle: "Integraciones de software y depuración de datos",
    metaDescription:
      "Conecte su CRM, contabilidad y software de administración y operaciones para que compartan los mismos datos. Planificamos, probamos y monitoreamos cada integración y cada migración.",
    headline: "Sus herramientas comparten los mismos datos.",
    lead: "Conectamos el software que ya usa, para que cada dato viva en un solo lugar y cada sistema se mantenga al día.",
    forWhom: "Para negocios cuyas cifras cambian según el sistema que se consulte.",
    problemQuotes: [
      "La cifra del CRM no coincide con la de contabilidad.",
      "Nadie confía en el reporte.",
      "Cambiar de sistema nos da miedo.",
    ],
    problemDetail:
      "Cuando la misma información vive en varios lugares, alguien la vuelve a capturar y alguien se olvida. Las integraciones definen qué sistema es la fuente de cada dato y mantienen sincronizados a los demás.",
    changes: [
      "Una sola fuente de verdad para cada tipo de información.",
      "Los sistemas se actualizan entre sí automáticamente.",
      "Los reportes coinciden, porque leen los mismos datos.",
      "Las migraciones se planifican, se prueban y se pueden revertir.",
    ],
    included: [
      {
        title: "Inventario de sistemas y datos",
        detail: "Qué usa, dónde vive cada dato y qué depende de qué. Empieza en la auditoría.",
      },
      {
        title: "Integraciones",
        detail: "Conexiones mediante API, webhooks o sincronización programada, con monitoreo.",
      },
      {
        title: "Depuración y migración de datos",
        detail: "Duplicados encontrados, registros corregidos y mudanzas ensayadas antes de la real.",
      },
      {
        title: "Capa de reportes",
        detail: "Un solo conjunto de cifras en el que su equipo puede confiar.",
      },
      {
        title: "Monitoreo y alertas",
        detail: "Si una conexión falla, una persona con nombre y apellido lo sabe ese mismo día.",
      },
    ],
    phases: [
      {
        title: "Inventario",
        detail: "Un mapa de sus sistemas y de los datos que pasan entre ellos.",
      },
      {
        title: "Conectar el par más doloroso",
        detail: "Los dos sistemas donde volver a capturar cuesta más.",
      },
      {
        title: "Ampliar",
        detail: "Añadir conexiones una a la vez, en fases a precio fijo.",
      },
      {
        title: "Lanzamiento y 90 días de cuidado",
        detail: "Monitoreamos cada conexión y corregimos problemas durante 90 días.",
      },
    ],
    faqs: [
      {
        question: "¿Y si nuestro software no tiene API?",
        answer:
          "Suele haber otras vías: exportaciones, lectura de correos o acceso a la base de datos. Revisamos las opciones en la auditoría y le decimos con franqueza qué no vale la pena.",
      },
      {
        question: "¿Pueden migrarnos a un software nuevo?",
        answer:
          "Sí. Planificamos el cambio, lo ensayamos en una copia, revisamos los resultados con su equipo y mantenemos una vía de regreso hasta que usted esté seguro.",
      },
    ],
  },

  "managed-plans": {
    name: "Planes de gestión",
    card: "Una persona con nombre y apellido responsable de sus sistemas, cada mes.",
    seoTitle: "Planes de cuidado para sitios web y sistemas",
    metaDescription:
      "Cuidado mensual de su sitio web y sus sistemas: monitoreo, actualizaciones, copias de seguridad y pequeñas mejoras, con una persona responsable y un informe mensual.",
    headline: "Una persona con nombre y apellido es responsable de sus sistemas, cada mes.",
    lead: "Monitoreamos, actualizamos y mejoramos lo que construimos, o lo que usted ya tiene, con un informe mensual de lo ocurrido.",
    forWhom: "Para negocios cuyos sistemas funcionan hoy y necesitan a alguien que los mantenga así.",
    problemQuotes: [
      "Nuestro sitio se hizo hace años y nadie lo cuida.",
      "Cuando algo se rompe, no sabemos a quién llamar.",
      "Se saltan las actualizaciones, y eso me preocupa.",
    ],
    problemDetail:
      "Los sistemas no se quedan quietos. El software necesita actualizaciones, los certificados caducan y los problemas pequeños crecen. Un plan de gestión significa que alguien vigila y responde por ello.",
    changes: [
      "Se monitorean la disponibilidad y los errores.",
      "Las actualizaciones y los parches de seguridad se aplican con rapidez.",
      "Las copias de seguridad se verifican.",
      "Una persona con nombre y apellido responde cuando algo se rompe.",
      "Recibe un informe mensual y algunas mejoras cada mes.",
    ],
    included: [
      {
        title: "Monitoreo",
        detail: "Disponibilidad y errores vigilados, con alertas a una persona.",
      },
      {
        title: "Actualizaciones y correcciones",
        detail: "Actualizaciones de software y parches de seguridad aplicados con rapidez.",
      },
      {
        title: "Copias de seguridad",
        detail: "Datos y configuración respaldados, y verificados.",
      },
      {
        title: "Informe mensual",
        detail: "Consultas, velocidad, problemas y lo que mejoramos, en lenguaje claro.",
      },
      {
        title: "Pequeñas mejoras",
        detail: "Cambios acordados cada mes, a partir del informe.",
      },
    ],
    phases: [
      {
        title: "Incorporación",
        detail: "Accesos, un inventario y cuentas a nombre de su empresa.",
      },
      {
        title: "Estabilizar",
        detail: "Corregir primero lo obsoleto o frágil.",
      },
      {
        title: "Cuidado mensual",
        detail: "Monitoreo, actualizaciones y un informe escrito cada mes.",
      },
      {
        title: "Revisión",
        detail: "Reuniones periódicas para decidir qué mejorar a continuación.",
      },
    ],
    faqs: [
      {
        question: "¿Pueden cuidar un sistema que ustedes no construyeron?",
        answer:
          "Con frecuencia sí. Empezamos con una revisión para ver qué asumiríamos, y le decimos con honestidad si algo debe corregirse primero.",
      },
      {
        question: "¿A quién llamo cuando algo se rompe?",
        answer: "A una persona con nombre y apellido, cuyos datos usted recibe al comenzar.",
      },
    ],
  },
};

export const servicesPage: ServicesPage = {
  metaTitle: "Servicios: sitios web, portales, aplicaciones, automatización e IA",
  metaDescription:
    "Sitios web que generan ingresos, portales para clientes y propietarios, aplicaciones de operaciones, automatización, IA con revisión humana, integraciones y planes de gestión. Fases a precio fijo, a partir de una auditoría de sistemas digitales.",
  eyebrow: "Servicios",
  title: "Siete servicios, organizados en torno a su problema.",
  lead: "Todo proyecto empieza con la auditoría. Muestra cuáles de estos servicios necesita primero y cuánto cuestan.",
  from: "Precio",
  ctaTitle: "¿No sabe cuál necesita?",
  ctaLead: "Para eso sirve la auditoría. Termina con un plan priorizado y con costos.",
  problemOf: "¿Le suena familiar?",
  detailLabel: "Ver el servicio",
};
