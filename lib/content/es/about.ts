import type { About, Partners } from "../en/about";

/**
 * Nosotros: credibilidad humana. Por qué existe la empresa, quién la fundó, cómo trabaja el equipo entre
 * países y un bloque «lea cómo trabajamos». No invente nunca una biografía, un cliente, una
 * cifra ni un premio. Nada de fotos de archivo con personas.
 */
export const about: About = {
  metaTitle: "Nosotros",
  metaDescription:
    "{name} desarrolla software a medida y soluciones tecnológicas. Diseñamos, construimos, integramos y modernizamos la tecnología de la que dependen las empresas.",
  eyebrow: "Nosotros",
  title: "Un equipo de ingeniería de software para sus desafíos tecnológicos.",
  lead: "{name} diseña, construye, integra y moderniza el software, los datos, la nube y los sistemas de IA de los que dependen las empresas. Resolvemos los problemas técnicos con ingeniería.",

  whyTitle: "Por qué existimos",
  why: [
    "Las empresas dependen de la tecnología, y los problemas tecnológicos rara vez caben en una sola especialidad. Un solo proyecto puede requerir software a medida, un rediseño de base de datos, una migración a la nube y una integración. Las empresas no deberían tener que coordinar a cuatro proveedores para lograrlo.",
    "Existimos para ser el socio de ingeniería de todo eso: entender el problema, diseñar la solución correcta, construirla y mantenerla funcionando a medida que el negocio cambia.",
  ],

  founderTitle: "Con quién trabajará",
  founder: [
    "Desde la primera llamada sabrá quién es responsable de su proyecto. Cada cliente tiene una persona con nombre y apellido a cargo del trabajo y del cuidado posterior al lanzamiento.",
    "Esa persona trabaja en español, inglés o francés, en su idioma y, en lo posible, en su zona horaria.",
  ],
  founderPhotoAlt: "El fundador de {name}",

  teamTitle: "Cómo trabaja el equipo entre países",
  team: [
    "Trabajamos con empresas de Estados Unidos, Canadá y México, y nos coordinamos entre zonas horarias. Las llamadas se agendan en la suya.",
    "Para que nada dependa de quién estuvo en qué llamada, las decisiones y los avances quedan por escrito: un informe escrito cada semana y un enlace de pruebas que puede abrir cuando quiera.",
  ],

  proofTitle: "Lea cómo trabajamos antes de contratarnos",
  proofBody:
    "Publicamos, en lenguaje claro, los estándares que seguimos y el proceso de cada proyecto. La auditoría le muestra pruebas antes de que pague por una construcción.",
  proofLinks: { standards: "Leer los estándares", process: "Ver cómo trabajamos" },

  beliefsTitle: "En qué creemos",
  beliefs: [
    {
      title: "Pruebas antes que propuestas.",
      detail: "Preferimos mostrarle adónde se va el tiempo que pedirle que confíe en una promesa.",
    },
    {
      title: "La herramienta más sencilla que funcione.",
      detail: "Si una hoja de cálculo o un producto existente lo resuelve, se lo diremos, aunque eso signifique un proyecto más pequeño para nosotros.",
    },
    {
      title: "Escrito, no recordado.",
      detail: "El alcance, los precios, las decisiones y los informes quedan por escrito, para que todos trabajen con los mismos datos.",
    },
    {
      title: "La velocidad es parte del producto.",
      detail: "Los sistemas rápidos son más fáciles de usar, más fáciles de encontrar y más baratos de operar.",
    },
  ],
};

export const partners: Partners = {
  metaTitle: "Aliados",
  metaDescription:
    "Para firmas de TI, contadores y directores técnicos fraccionados: cómo funciona recomendarnos a un cliente, qué hacemos primero y los estándares que puede comprobar.",
  eyebrow: "Aliados",
  title: "¿Puede recomendarnos a sus clientes con tranquilidad?",
  lead: "Para firmas de TI, contadores y directores técnicos fraccionados cuyos clientes necesitan sistemas construidos y cuidados. Así manejaríamos una recomendación, y esto es lo que puede comprobar antes.",

  checkTitle: "Qué puede comprobar antes de recomendar",
  check: [
    {
      title: "Nuestros estándares",
      detail: "Seguridad, rendimiento, accesibilidad, IA y privacidad, escritos en lenguaje claro.",
      href: "/standards",
      link: "Leer los estándares",
    },
    {
      title: "Cómo trabajamos",
      detail: "Un proceso flexible con alcance acordado por escrito, informes escritos semanales y controles de calidad antes del lanzamiento.",
      href: "/how-we-work",
      link: "Ver cómo trabajamos",
    },
    {
      title: "Las demos",
      detail: "Demos conceptuales funcionales para los sectores que atendemos, con datos de ejemplo.",
      href: "/work",
      link: "Ver las demos",
    },
  ],

  howTitle: "Cómo funciona una recomendación",
  how: [
    { title: "Usted nos presenta", detail: "Basta un correo breve. Respondemos personalmente en una hora hábil." },
    { title: "Empezamos con una evaluación", detail: "Le muestra a su cliente qué vale la pena corregir, con pruebas, antes de que nadie se comprometa con una construcción." },
    { title: "Usted sigue al tanto", detail: "Si su cliente está de acuerdo, compartimos con usted los hallazgos y el plan." },
    { title: "Su cliente es dueño de todo", detail: "El código, las cuentas y los dominios pertenecen a su cliente, para que usted pueda seguir asesorándolo." },
  ],

  termsTitle: "Condiciones de alianza",
  termsBody: "Acordamos por escrito las condiciones de alianza antes de la primera recomendación. Pregúntenos y se las explicamos.",
  cta: "Hablemos de una alianza",
};
