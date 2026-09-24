import type { Audience, Belief, CompanyContent, ContentItem, EngagementModel, Faq } from "@/lib/company";
import { bookingHref, site } from "@/lib/site";

/** The four stages shown under "Our approach" on the homepage. */
const approachSteps: ContentItem[] = [
  {
    title: "Entender",
    detail:
      "Hablamos con las personas involucradas, revisamos lo que ya existe y acordamos cuál es el problema y cómo mediremos el éxito.",
  },
  {
    title: "Planificar",
    detail:
      "Recibe por escrito el alcance, el calendario y un presupuesto cerrado para la primera fase, sin sorpresas después.",
  },
  {
    title: "Construir",
    detail:
      "El diseño y la ingeniería avanzan en ciclos de dos semanas, con software funcionando para revisar al final de cada uno.",
  },
  {
    title: "Acompañar",
    detail:
      "Lanzamos, monitoreamos y seguimos mejorando lo que construimos, o se lo entregamos en orden a su propio equipo.",
  },
];

/** How we work with clients. Shown on the homepage and the About page. */
const principles: ContentItem[] = [
  {
    title: "Profesionales con experiencia en cada proyecto",
    detail: "Las personas que conoce en la primera conversación son las que diseñan y desarrollan su proyecto.",
  },
  {
    title: "Alcance honesto",
    detail:
      "Le diremos cuando algo no vale la pena construirlo, cuando basta con una herramienta más sencilla o cuando no somos la opción adecuada.",
  },
  {
    title: "Todo es suyo",
    detail:
      "El código, los diseños, las cuentas y los datos le pertenecen desde el primer día. Sin plataformas propietarias ni ataduras.",
  },
  {
    title: "Hecho para durar",
    detail:
      "Software probado, documentado y monitoreado que su propio equipo o cualquier desarrollador competente puede mantener.",
  },
];

/** Our position on each part of the work. Shown on the About page. */
const beliefs: Belief[] = [
  {
    topic: "Tecnología",
    title: "La herramienta adecuada suele ser la más sencilla que funciona.",
    detail:
      "Preferimos tecnología consolidada y con buen soporte antes que lo más novedoso. Si una hoja de cálculo, un producto existente o una pequeña integración resuelven el problema, se lo recomendaremos, aunque eso signifique un proyecto más pequeño para nosotros.",
  },
  {
    topic: "Desarrollo",
    title: "El código es un activo a largo plazo, y lo escribimos como tal.",
    detail:
      "Las pruebas automatizadas, la revisión de código, la documentación y los despliegues repetibles forman parte de cada proyecto, no son extras. El objetivo es un software que su equipo pueda modificar con confianza mucho después del lanzamiento.",
  },
  {
    topic: "Rendimiento",
    title: "La velocidad es parte del producto.",
    detail:
      "Cada página y cada pantalla tienen un presupuesto de rendimiento desde el principio. El software rápido es más fácil de usar, se posiciona mejor en los buscadores y cuesta menos de operar.",
  },
  {
    topic: "Diseño",
    title: "Un buen diseño hace evidente el siguiente paso.",
    detail:
      "Diseñamos ante todo para la claridad: contenido claro, interacciones predecibles e interfaces accesibles que funcionan para todos, en cualquier dispositivo.",
  },
  {
    topic: "Negocio",
    title: "El éxito se mide con sus números, no con los nuestros.",
    detail:
      "Antes de empezar, acordamos qué debe cambiar, como menos solicitudes de soporte, más contactos cualificados u horas ahorradas cada semana. Después informamos en función de eso.",
  },
];

/** Short commitments shown under the homepage call to action. */
const promises: string[] = [
  "Consulta inicial gratuita",
  "Respuesta en un día hábil",
  "Precio cerrado por fase",
  "El 100 % del código es suyo",
];

/** The kinds of organizations we work with. Shown on the homepage. */
const audiences: Audience[] = [
  {
    title: "Pequeñas empresas",
    detail:
      "Un sitio web profesional que atrae clientes y automatizaciones sencillas que le devuelven horas cada semana. Precios claros, sin tecnicismos.",
    examples: "Sitios web, reservas en línea, visibilidad en Google",
  },
  {
    title: "Startups",
    detail:
      "Lleve su producto a los clientes rápidamente con una primera versión enfocada, construida con tecnología que resiste el crecimiento.",
    examples: "MVP, productos SaaS, funciones de IA",
  },
  {
    title: "Empresas en crecimiento",
    detail:
      "Reemplace hojas de cálculo y herramientas desconectadas con software a medida e integraciones que se adaptan a cómo trabaja su equipo.",
    examples: "Portales, paneles, automatización",
  },
  {
    title: "Grandes empresas y organizaciones",
    detail:
      "Ingeniería de alto nivel con la seguridad, la documentación y los procesos de revisión que esperan sus equipos de TI y de cumplimiento.",
    examples: "Plataformas, programas de IA, rendimiento",
  },
];

/** How clients can start working with us. Shown on the homepage. */
const engagementModels: EngagementModel[] = [
  {
    title: "Consulta gratuita",
    summary: "Una llamada de 30 minutos sobre sus objetivos. Se lleva un consejo honesto, nos contrate o no.",
    points: [
      "Sin costo ni compromiso",
      "Próximos pasos claros y un presupuesto aproximado",
      "Respuestas directas sobre lo que necesita",
    ],
    cta: "Reserve una llamada gratuita",
    href: bookingHref,
  },
  {
    title: "Proyecto de alcance cerrado",
    summary:
      "Un proyecto web, de aplicación, de IA o de automatización con alcance, calendario y precio acordados para cada fase.",
    points: [
      "Propuesta por escrito antes de empezar",
      "Avances visibles cada dos semanas",
      "Lanzamiento, capacitación y entrega incluidos",
    ],
    cta: "Contáctenos",
    href: "/contact",
  },
  {
    title: "Soporte y crecimiento continuos",
    summary:
      "Un plan mensual para que su sitio o software siga siendo rápido, seguro y cada vez mejor tras el lanzamiento.",
    points: [
      "Actualizaciones, correcciones y parches de seguridad",
      "Monitoreo e informes mensuales",
      "Nuevas funciones cuando las necesite",
    ],
    cta: "Consulte por el soporte",
    href: "/contact",
  },
];

/** Common questions answered on the homepage. */
const homeFaqs: Faq[] = [
  {
    question: "¿Cuánto cuesta un proyecto?",
    answer:
      "Depende de lo que necesite. Cada proyecto se cotiza de forma individual y, tras una consulta gratuita, recibe una propuesta de precio cerrado para la primera fase, así que conoce el costo antes de empezar.",
  },
  {
    question: "¿Cuánto tiempo lleva?",
    answer:
      "La mayoría de los sitios web se lanzan en 8 a 14 semanas. La primera versión de una aplicación web suele estar lista en 8 a 12 semanas, y los proyectos de automatización más pequeños pueden funcionar en 3 a 8 semanas.",
  },
  {
    question: "¿Trabajan con pequeñas empresas?",
    answer:
      "Sí. Trabajamos con pequeñas empresas, startups y grandes organizaciones. Dimensionamos el proyecto según sus objetivos y su presupuesto, y le diremos cuando una opción más sencilla y económica sea suficiente.",
  },
  {
    question: "¿El sitio web o el software serán nuestros?",
    answer:
      "Sí. El código, los diseños, las cuentas y los datos son suyos desde el primer día. No hay plataformas propietarias ni nada que lo ate.",
  },
  {
    question: "¿La IA es adecuada para mi negocio?",
    answer:
      "A veces. La IA funciona bien para responder preguntas a partir de documentos, gestionar correos rutinarios y extraer datos de papeleo. En una consulta gratuita le diremos con honestidad si le ahorraría tiempo o dinero.",
  },
  {
    question: "¿Qué pasa después del lanzamiento?",
    answer:
      "Capacitamos a su equipo y entregamos la documentación. Si quiere que sigamos participando, un plan de soporte mensual cubre actualizaciones, seguridad, monitoreo y mejoras.",
  },
  {
    question: "¿Pueden trabajar con nuestro sitio web o software actual?",
    answer:
      "Sí. Con frecuencia mejoramos, aceleramos, integramos y asumimos sitios y aplicaciones existentes, incluidos WordPress, Shopify y sistemas a medida.",
  },
  {
    question: `¿Solo trabajan con clientes en ${site.address.regionName}?`,
    answer: `No. Estamos en ${site.address.locality} y trabajamos con clientes de todo Estados Unidos por videollamada, correo electrónico y herramientas de proyecto compartidas.`,
  },
];

export const company: CompanyContent = {
  approachSteps,
  principles,
  beliefs,
  promises,
  audiences,
  engagementModels,
  homeFaqs,
};
