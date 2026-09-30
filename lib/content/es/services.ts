import type { ServiceSlug, ServiceText } from "@/lib/services";
import type { ServicesPage } from "../en/services";

/**
 * Las nueve categorías de capacidades, en español latinoamericano. Cada capacidad de la oferta está en una
 * de ellas y ninguna debe desaparecer. Tono: profesional, claro, específico, sin lemas y sin afirmaciones
 * sobre clientes, años, premios o resultados.
 */
export const services: Record<ServiceSlug, ServiceText> = {
  "custom-software": {
    name: "Desarrollo de software a medida",
    card: "Software construido alrededor de cómo trabaja realmente su empresa: sistemas de negocio a medida, aplicaciones full-stack y automatización de procesos.",
    seoTitle: "Empresa de desarrollo de software a medida",
    metaDescription:
      "Software de negocio a medida, desarrollo full-stack y automatización de procesos. Construimos aplicaciones escalables adaptadas a la forma en que opera su empresa.",
    headline: "Software a medida, construido alrededor de cómo trabaja su empresa.",
    lead: "Cuando las herramientas listas para usar lo obligan a trabajar alrededor de ellas, construimos el software que sí encaja: adaptado a su proceso, diseñado para escalar y de su propiedad.",
    overview:
      "Cubrimos todo el stack, desde la interfaz que usan las personas hasta los servicios y los datos que la respaldan. El resultado es software que elimina trabajo manual, se ajusta a su proceso y puede crecer con la empresa.",
    capabilities: [
      "Software de negocio a medida",
      "Soluciones de software personalizadas",
      "Desarrollo full-stack",
      "Ingeniería frontend y backend",
      "Automatización de procesos de negocio",
      "Desarrollo de sistemas a medida",
      "Aplicaciones de software escalables",
    ],
    challenges: [
      "El software listo para usar no encaja con nuestra forma de trabajar.",
      "Nuestro equipo trabaja alrededor de las herramientas que tenemos.",
      "Procesos importantes viven en hojas de cálculo y correos.",
      "Necesitamos algo que pueda crecer con la empresa.",
    ],
    approach: [
      {
        title: "Partir del proceso",
        detail:
          "Mapeamos cómo ocurre realmente el trabajo antes de decidir qué construir, para que el software se ajuste al negocio y no al revés.",
      },
      {
        title: "Construir en incrementos que funcionan",
        detail: "Usted ve software funcionando pronto y con frecuencia, y lo orienta a medida que avanzamos.",
      },
      {
        title: "Planear el crecimiento",
        detail:
          "Una estructura limpia, documentación y pruebas hacen que el sistema sea fácil de ampliar y que cualquier desarrollador competente pueda mantenerlo.",
      },
    ],
    faqs: [
      {
        question: "¿Pueden construir sobre las herramientas que ya usamos?",
        answer:
          "Sí. Conectamos el software nuevo con sus sistemas actuales mediante sus API, exportaciones o bases de datos, y reemplazamos solo lo que hay que reemplazar.",
      },
      {
        question: "¿De quién es el código?",
        answer: "Suyo. El código vive en un repositorio de su organización desde el primer día.",
      },
    ],
  },

  "web-applications": {
    name: "Desarrollo web y de aplicaciones",
    card: "Sitios web, aplicaciones web, portales para clientes y plataformas internas, desde aplicaciones web progresivas hasta aplicaciones empresariales.",
    seoTitle: "Servicios de desarrollo de aplicaciones web",
    metaDescription:
      "Sitios web profesionales, aplicaciones web a medida, portales para clientes, paneles y plataformas empresariales, diseñados para velocidad, seguridad y crecimiento.",
    headline: "Sitios y aplicaciones web diseñados para el uso real.",
    lead: "Desde un sitio web profesional de empresa hasta una plataforma empresarial en la que sus equipos y clientes confían todos los días, diseñamos, construimos y mantenemos aplicaciones que funcionan en todos los dispositivos.",
    overview:
      "La web es la forma en que la mayoría de las empresas llegan a sus clientes y gestionan sus operaciones. Construimos ambos lados: el sitio público que genera consultas y las aplicaciones detrás del inicio de sesión.",
    capabilities: [
      "Desarrollo de sitios web profesionales",
      "Aplicaciones web a medida",
      "Aplicaciones empresariales",
      "Aplicaciones web progresivas",
      "Plataformas internas de negocio",
      "Portales para clientes",
      "Paneles de administración",
      "Plataformas digitales interactivas",
    ],
    challenges: [
      "Los clientes llaman para pedir información que deberían poder encontrar solos.",
      "Nuestro sitio se ve bien, pero no trae consultas calificadas.",
      "Nuestro equipo necesita una sola plataforma interna en lugar de cinco herramientas separadas.",
      "Necesitamos una aplicación que también funcione bien en teléfonos y tabletas.",
    ],
    approach: [
      {
        title: "Diseñar para quienes la usan",
        detail:
          "Partimos de quién usa la aplicación y de lo que necesita lograr, y diseñamos el flujo y la interfaz alrededor de eso.",
      },
      {
        title: "Construir para la velocidad y la seguridad",
        detail:
          "Rápida en teléfonos y conexiones comunes, accesible y protegida con buenas prácticas como HTTPS, control de acceso y disponibilidad monitoreada.",
      },
      {
        title: "Lanzar y luego cuidarla",
        detail: "Desplegamos, monitoreamos y seguimos mejorando la aplicación después del lanzamiento.",
      },
    ],
    faqs: [
      {
        question: "¿Puede nuestro equipo editar el contenido?",
        answer: "Sí. Configuramos la edición de contenido para que su equipo actualice las páginas sin un desarrollador.",
      },
      {
        question: "¿Desarrollan aplicaciones móviles?",
        answer:
          "Construimos aplicaciones web progresivas que se instalan y funcionan como apps en los teléfonos, y aplicaciones móviles nativas cuando un proyecto lo requiere.",
      },
    ],
  },

  "ai-solutions": {
    name: "Soluciones de IA y automatización",
    card: "IA integrada en sus sistemas y flujos de trabajo: asistentes, automatización inteligente y procesos basados en datos, con las personas al mando.",
    seoTitle: "Soluciones de IA y automatización de negocios",
    metaDescription:
      "Aplicaciones con IA, integración de IA en sistemas existentes, agentes y asistentes de IA, y automatización inteligente para flujos de trabajo reales.",
    headline: "IA y automatización que se integran a su forma de trabajar.",
    lead: "Construimos e integramos IA donde elimina trabajo real: redactar, clasificar, encaminar y responder, dentro de sus sistemas actuales y con personas que revisan lo importante.",
    overview:
      "La IA es una capacidad entre muchas. La usamos cuando resuelve un problema concreto mejor que el software convencional, y la diseñamos con límites claros, revisión humana y resultados medibles.",
    capabilities: [
      "Aplicaciones con IA",
      "Integración de IA en sistemas existentes",
      "Automatización inteligente de procesos de negocio",
      "Agentes y asistentes de IA",
      "Automatización basada en datos",
      "Soluciones de IA a medida para empresas",
      "Flujos de trabajo potenciados con IA",
    ],
    challenges: [
      "Mi equipo pasa horas clasificando, copiando y respondiendo lo mismo.",
      "Queremos usar IA, pero no sabemos dónde ayudaría de verdad.",
      "Probamos una herramienta de IA y no se conecta con nuestros sistemas.",
      "Queremos que la IA ayude, pero una persona debe aprobar el resultado.",
    ],
    approach: [
      {
        title: "Partir del flujo de trabajo, no del modelo",
        detail:
          "Encontramos el paso donde la IA elimina esfuerzo real y luego elegimos la herramienta más simple que hace el trabajo.",
      },
      {
        title: "Mantener a las personas al mando",
        detail:
          "La IA redacta y sugiere. Su equipo revisa y aprueba todo lo importante, y el sistema deja un registro.",
      },
      {
        title: "Medir lo que cambia",
        detail:
          "Acordamos cómo se medirá el éxito, por ejemplo el tiempo ahorrado o los errores evitados, y lo verificamos después del lanzamiento.",
      },
    ],
    faqs: [
      {
        question: "¿Se usarán nuestros datos para entrenar modelos de IA?",
        answer:
          "No por nosotros. Elegimos proveedores y configuraciones que mantienen sus datos fuera del entrenamiento de modelos cuando esa opción existe, y documentamos a dónde van los datos.",
      },
      {
        question: "¿Puede la IA funcionar con nuestro software actual?",
        answer:
          "Por lo general, sí. Integramos la IA a través de las API y las bases de datos de sus sistemas, para que la gente siga trabajando en las herramientas que conoce.",
      },
    ],
  },

  "database-solutions": {
    name: "Soluciones de bases de datos",
    card: "Diseño, desarrollo, optimización y migración de bases de datos, para que sus datos estén organizados, sean rápidos y confiables.",
    seoTitle: "Desarrollo y optimización de bases de datos",
    metaDescription:
      "Arquitectura, desarrollo, gestión, optimización y migración de bases de datos. Estructuramos e integramos sus datos para que sean precisos, rápidos y utilizables.",
    headline: "Bases de datos diseñadas para que sus datos estén organizados, sean rápidos y confiables.",
    lead: "Todo sistema depende de sus datos. Diseñamos, construimos, gestionamos y optimizamos las bases de datos detrás de sus aplicaciones, y movemos los datos con seguridad de los sistemas antiguos a los nuevos.",
    overview:
      "Una buena estructura de datos facilita todo lo demás: aplicaciones más rápidas, reportes precisos e integraciones que se sostienen. Tratamos la base de datos como parte del producto, no como algo secundario.",
    capabilities: [
      "Arquitectura y diseño de bases de datos",
      "Desarrollo de bases de datos",
      "Gestión de bases de datos",
      "Optimización de bases de datos",
      "Migración de datos",
      "Integración de bases de datos",
      "Estructuración y organización de datos",
    ],
    challenges: [
      "La misma información vive en varios lugares y no coincide.",
      "Los reportes son lentos, o alguien los rehace a mano cada mes.",
      "Nuestra aplicación se vuelve lenta a medida que crecen los datos.",
      "Necesitamos mover datos de un sistema antiguo sin perder nada.",
    ],
    approach: [
      {
        title: "Modelar primero el negocio",
        detail:
          "Diseñamos la estructura de datos alrededor de cómo funciona su empresa, para que siga siendo clara a medida que crece.",
      },
      {
        title: "Migrar con verificaciones",
        detail:
          "Movemos los datos en pasos ensayados, comparamos los resultados y mantenemos un camino de regreso hasta que todo esté verificado.",
      },
      {
        title: "Ajustar para cargas reales",
        detail: "Medimos las consultas que importan y optimizamos esas, en lugar de adivinar.",
      },
    ],
    faqs: [
      {
        question: "¿Con qué bases de datos trabajan?",
        answer:
          "Trabajamos con las bases de datos relacionales y documentales más comunes, y elegimos según sus requisitos, las habilidades de su equipo y el mantenimiento a largo plazo.",
      },
      {
        question: "¿Pueden depurar nuestros datos actuales?",
        answer:
          "Sí. Estructurar, eliminar duplicados y organizar los datos existentes suele ser el primer paso antes de una migración o una integración.",
      },
    ],
  },

  "cloud-solutions": {
    name: "Soluciones en la nube e infraestructura",
    card: "Arquitectura en la nube, migración e infraestructura: despliegues escalables en las plataformas que su empresa elija.",
    seoTitle: "Servicios de migración a la nube e infraestructura",
    metaDescription:
      "Arquitectura en la nube, migración, desarrollo de infraestructura, gestión de servidores y optimización. Despliegues escalables y seguros en las principales plataformas.",
    headline: "Infraestructura en la nube diseñada para funcionar con fiabilidad y escalar.",
    lead: "Diseñamos la arquitectura en la nube, migramos los sistemas existentes y construimos la infraestructura y los flujos de despliegue que mantienen sus aplicaciones disponibles, seguras y con costos bajo control.",
    overview:
      "Pasar a la nube es un medio, no la meta. Planificamos en torno a la disponibilidad, la seguridad, el costo y la forma en que su equipo operará el resultado, en plataformas como Microsoft Azure y Amazon Web Services.",
    capabilities: [
      "Arquitectura en la nube",
      "Migración a la nube",
      "Desarrollo de infraestructura en la nube",
      "Configuración y gestión de servidores",
      "Aplicaciones escalables en la nube",
      "Optimización en la nube",
      "Soluciones de despliegue e infraestructura",
    ],
    challenges: [
      "Nuestros servidores están envejeciendo y nadie quiere tocarlos.",
      "Queremos pasar a la nube sin interrumpir el negocio.",
      "Nuestra factura de la nube no deja de crecer y no sabemos por qué.",
      "Los despliegues son manuales, lentos o riesgosos.",
    ],
    approach: [
      {
        title: "Evaluar antes de mover",
        detail:
          "Hacemos un inventario de qué corre dónde, qué depende de qué y qué debería cambiar antes de que algo se mueva.",
      },
      {
        title: "Migrar por etapas",
        detail: "Cada paso se ensaya y es reversible, para que el negocio siga funcionando durante todo el proceso.",
      },
      {
        title: "Automatizar el despliegue",
        detail:
          "Flujos repetibles e infraestructura definida como código hacen que las publicaciones sean rutinarias y no riesgosas.",
      },
    ],
    faqs: [
      {
        question: "¿Con qué plataformas en la nube trabajan?",
        answer:
          "Trabajamos con las principales plataformas, como Microsoft Azure y Amazon Web Services, y recomendamos según lo que usted ya opera y lo que el proyecto requiere.",
      },
      {
        question: "¿Quedaremos atados a un solo proveedor?",
        answer:
          "Diseñamos para mantener abiertas sus opciones cuando tiene sentido, y documentamos la arquitectura para que pueda operarse o trasladarse más adelante.",
      },
    ],
  },

  "software-architecture": {
    name: "Arquitectura de software",
    card: "Arquitectura y planificación de sistemas escalables: diseño backend, API, integraciones e infraestructura técnica.",
    seoTitle: "Arquitectura de software y diseño de sistemas",
    metaDescription:
      "Arquitectura de software y de aplicaciones, diseño de sistemas escalables, arquitectura backend y de API, integración de sistemas y planificación de infraestructura técnica.",
    headline: "Arquitectura de software que permite que los sistemas crezcan sin romperse.",
    lead: "Una buena arquitectura determina con cuánta facilidad puede cambiar un sistema. Diseñamos la estructura, las interfaces y las integraciones que mantienen su tecnología confiable a medida que el negocio evoluciona.",
    overview:
      "Planificamos antes de construir: cómo encajan los componentes, cómo fluyen los datos, cómo se comunican los sistemas y dónde tendrá que escalar el sistema. Esa planificación evita reprocesos costosos más adelante.",
    capabilities: [
      "Arquitectura y planificación de software",
      "Diseño de sistemas escalables",
      "Arquitectura backend",
      "Arquitectura de API",
      "Integración de sistemas",
      "Planificación de infraestructura técnica",
      "Arquitectura de aplicaciones",
    ],
    challenges: [
      "Cada cambio rompe otra cosa.",
      "Nuestros sistemas no se comunican entre sí.",
      "Estamos a punto de construir algo grande y queremos los cimientos correctos.",
      "Heredamos un sistema que nadie entiende del todo.",
    ],
    approach: [
      {
        title: "Decidir viendo las compensaciones",
        detail:
          "Dejamos por escrito las opciones, lo que cuesta cada una y por qué recomendamos una, en un lenguaje que los tomadores de decisiones puedan seguir.",
      },
      {
        title: "Definir los límites",
        detail:
          "Interfaces claras entre las partes permiten que los equipos trabajen de forma independiente y que los sistemas se reemplacen una pieza a la vez.",
      },
      {
        title: "Documentar lo que diseñamos",
        detail:
          "Los diagramas y las decisiones quedan registrados para que su equipo, o cualquier desarrollador competente, pueda continuar el trabajo.",
      },
    ],
    faqs: [
      {
        question: "¿Solo diseñan, o también construyen?",
        answer:
          "Ambas cosas. Algunos clientes nos contratan para la arquitectura y construyen con su propio equipo. Otros nos piden diseñar y construir.",
      },
      {
        question: "¿Pueden revisar una arquitectura que ya tenemos?",
        answer:
          "Sí. Revisamos sistemas existentes y le informamos qué es sólido, qué es riesgoso y qué cambiar primero.",
      },
    ],
  },

  "application-modernization": {
    name: "Modernización de aplicaciones",
    card: "Actualización, reestructuración y migración de aplicaciones heredadas, para que los sistemas antiguos dejen de frenar al negocio.",
    seoTitle: "Servicios de modernización de aplicaciones heredadas",
    metaDescription:
      "Modernización de sistemas heredados, actualización de aplicaciones, optimización del rendimiento, reestructuración de sistemas y migración tecnológica para sistemas de negocio obsoletos.",
    headline: "Modernice los sistemas de los que su empresa ya depende.",
    lead: "El software obsoleto es riesgoso, lento y difícil de cambiar. Actualizamos, reestructuramos y migramos aplicaciones existentes por etapas, sin detener el trabajo que depende de ellas.",
    overview:
      "La mayoría de las empresas no pueden apagar un sistema crítico y empezar de cero. Modernizamos en torno a lo que funciona: conservar lo que es sólido, reemplazar lo que no y pasar a tecnología actual un paso a la vez.",
    capabilities: [
      "Modernización de sistemas heredados",
      "Actualización de aplicaciones existentes",
      "Optimización del rendimiento",
      "Reestructuración de sistemas",
      "Migración tecnológica",
      "Mejora del código fuente",
      "Modernización de sistemas de negocio obsoletos",
    ],
    challenges: [
      "Nuestro software funciona sobre una tecnología que ya nadie soporta.",
      "Es lento y cada cambio toma meses.",
      "Solo una persona entiende cómo funciona.",
      "Queremos nuevas funciones, pero el sistema antiguo no puede soportarlas.",
    ],
    approach: [
      {
        title: "Entender antes de cambiar",
        detail:
          "Leemos el código, mapeamos las dependencias y descubrimos qué hace realmente el sistema, incluso lo que nadie documentó.",
      },
      {
        title: "Modernizar por etapas",
        detail:
          "Reemplazamos o actualizamos una parte a la vez, para que el negocio siga funcionando y cada paso pueda verificarse.",
      },
      {
        title: "Dejarlo más fácil de mantener",
        detail:
          "Código más limpio, pruebas y documentación hacen que el siguiente cambio cueste menos que el anterior.",
      },
    ],
    faqs: [
      {
        question: "¿Tenemos que reconstruir todo?",
        answer:
          "Rara vez. Normalmente recomendamos actualizar o reemplazar las partes que lo frenan y conservar lo que funciona.",
      },
      {
        question: "¿Puede el sistema seguir en uso durante la modernización?",
        answer:
          "Sí. La migración por etapas y la operación en paralelo permiten que el negocio siga trabajando mientras el sistema cambia por debajo.",
      },
    ],
  },

  "digital-transformation": {
    name: "Transformación digital",
    card: "Flujos de trabajo digitales, optimización de procesos y sistemas integrados, para que la tecnología respalde cómo opera el negocio.",
    seoTitle: "Consultoría y desarrollo de transformación digital",
    metaDescription:
      "Transformación tecnológica del negocio: desarrollo de flujos de trabajo digitales, optimización de procesos, integración tecnológica y modernización de sistemas de negocio.",
    headline: "Una transformación digital basada en cómo opera su empresa.",
    lead: "Convertimos procesos manuales y desconectados en flujos de trabajo digitales integrados, y modernizamos los sistemas de negocio que los rodean, un paso práctico a la vez.",
    overview:
      "Transformarse significa cambiar la forma en que se hace el trabajo, no solo comprar software. Partimos del proceso, decidimos qué debe hacer la tecnología, y la construimos y conectamos para que el cambio perdure.",
    capabilities: [
      "Transformación tecnológica del negocio",
      "Desarrollo de flujos de trabajo digitales",
      "Optimización de procesos",
      "Integración tecnológica",
      "Modernización de sistemas de negocio",
      "Desarrollo de infraestructura digital",
    ],
    challenges: [
      "Demasiado de nuestro trabajo todavía se hace en papel, por correo o a mano.",
      "Nuestras herramientas no comparten información, así que la gente la vuelve a capturar.",
      "Sabemos que hay que modernizar, pero no por dónde empezar.",
      "Necesitamos un plan que toda la empresa pueda seguir.",
    ],
    approach: [
      {
        title: "Mapear el trabajo tal como es",
        detail:
          "Documentamos cómo funcionan hoy los procesos, incluidos los parches, antes de proponer cualquier cambio.",
      },
      {
        title: "Priorizar por impacto",
        detail:
          "Ordenamos los cambios según el valor que aportan y el esfuerzo que requieren, para que empiece por lo que más importa.",
      },
      {
        title: "Entregar por pasos",
        detail:
          "Cada paso entrega algo utilizable, para que el negocio se beneficie en el camino en lugar de esperar un gran lanzamiento.",
      },
    ],
    faqs: [
      {
        question: "¿Por dónde empezamos?",
        answer:
          "Normalmente con una evaluación técnica de sus procesos y sistemas actuales. Muestra qué cambiar primero y qué implicaría.",
      },
      {
        question: "¿Necesitamos cambiar todo a la vez?",
        answer: "No. Planificamos los cambios por pasos, y cada paso aporta algo útil por sí mismo.",
      },
    ],
  },

  "technology-consulting": {
    name: "Consultoría y resolución de problemas técnicos",
    card: "Consultoría tecnológica, evaluaciones técnicas y resolución de fallas, desde la planificación hasta la implementación.",
    seoTitle: "Consultoría tecnológica y evaluaciones técnicas",
    metaDescription:
      "Consultoría tecnológica, evaluaciones técnicas, resolución de fallas de software, diagnóstico de sistemas y estrategia tecnológica a medida, de la planificación a la implementación.",
    headline: "Experiencia técnica para sus problemas más difíciles y sus decisiones más grandes.",
    lead: "Cuando algo falla, no está claro o está por cambiar, le ayudamos a entenderlo, a decidir qué hacer y luego a implementarlo, o a entregar un plan claro a su propio equipo.",
    overview:
      "A veces el entregable más valioso es una respuesta clara: qué está mal, qué hacer al respecto y cuánto costará. Primero diagnosticamos el problema y solo recomendamos lo que la evidencia respalda.",
    capabilities: [
      "Consultoría tecnológica",
      "Evaluaciones técnicas",
      "Resolución de fallas de software",
      "Resolución de problemas técnicos complejos",
      "Estrategias tecnológicas a medida",
      "Mejoras de infraestructura",
      "Diagnóstico de sistemas",
      "Planificación e implementación técnicas",
    ],
    challenges: [
      "Algo en nuestro sistema está fallando y no encontramos la causa.",
      "Necesitamos una opinión independiente antes de una gran decisión tecnológica.",
      "Nuestro equipo está sobrecargado y necesita ayuda técnica senior.",
      "Necesitamos un plan y alguien que ayude a llevarlo a cabo.",
    ],
    approach: [
      {
        title: "Diagnosticar con evidencia",
        detail: "Reproducimos el problema, lo medimos y lo rastreamos hasta su causa antes de recomendar una solución.",
      },
      {
        title: "Dar una recomendación clara",
        detail:
          "Recibe una evaluación escrita con prioridades, opciones y costos, sin importar si nos contrata o no para implementarla.",
      },
      {
        title: "Acompañar hasta la implementación",
        detail: "Si lo desea, llevamos a cabo el plan o trabajamos junto a su equipo hasta terminarlo.",
      },
    ],
    faqs: [
      {
        question: "¿Qué es una evaluación técnica?",
        answer:
          "Una revisión de alcance fijo de sus sistemas, procesos o código que termina con hallazgos, prioridades y un plan con costos. Nuestra auditoría de sistemas digitales es una forma de ella.",
      },
      {
        question: "¿Pueden ayudar con un problema que ya está en producción?",
        answer:
          "Sí. Resolver fallas en sistemas en operación es parte del trabajo. Primero estabilizamos y luego encontramos y corregimos la causa.",
      },
    ],
  },
};

export const servicesPage: ServicesPage = {
  metaTitle: "Software a medida, web, IA, nube y servicios tecnológicos",
  metaDescription:
    "Desarrollo de software a medida, desarrollo web y de aplicaciones, soluciones de IA, bases de datos, nube, arquitectura de software, modernización de aplicaciones, transformación digital y consultoría tecnológica.",
  eyebrow: "Servicios",
  title: "Nueve capacidades. Un solo equipo de ingeniería.",
  lead: "Software a medida, aplicaciones web, IA, bases de datos, nube, arquitectura, modernización, transformación y consultoría técnica. Use una para un problema concreto, o varias para una solución completa.",
  capabilitiesTitle: "Lo que hacemos",
  challengesTitle: "¿Le suena familiar?",
  approachTitle: "Cómo lo abordamos",
  relatedTitle: "Capacidades relacionadas",
  faqTitle: "Preguntas frecuentes",
  exploreLabel: "Explorar",
  capabilityCount: "{count} capacidades",
  allServices: "Todos los servicios",
  assessmentTitle: "Empiece con una evaluación técnica",
  assessmentBody:
    "Si desea una visión escrita y basada en evidencia de sus sistemas antes de comprometerse con un proyecto, nuestra auditoría de sistemas digitales es una evaluación de alcance fijo que termina con un plan priorizado y con costos.",
  assessmentLink: "Acerca de la auditoría de sistemas digitales",
  ctaTitle: "¿No está seguro de qué capacidad necesita?",
  ctaLead: "Describa el desafío. Le diremos qué haríamos y qué capacidades involucra.",
};
