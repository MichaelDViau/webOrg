import type { Home } from "../en/home";

/** La página de inicio, en español: escrita para quien la lee, no traducida palabra por palabra. */
export const home: Home = {
  metaTitle: "{name}: los sistemas que hacen funcionar su empresa",
  metaDescription:
    "Diseñamos, construimos y operamos sitios web, portales de clientes, software interno y automatizaciones para empresas de servicios y operaciones. Empiece con una auditoría de sistemas digitales.",

  hero: {
    lead: "Construimos",
    block1: "los sistemas",
    block2: "que hacen funcionar",
    tail: "su empresa.",
    intro:
      "Diseñamos, construimos y operamos sitios web, portales de clientes, software interno y automatizaciones para empresas de servicios y operaciones ya establecidas. Un solo equipo responsable, del diagnóstico a la operación diaria, en español, inglés y francés.",
    facts: [
      "Empiece con una auditoría: {price}, acreditada por completo a un proyecto firmado dentro de {days} días",
      "Una persona le responde en una hora hábil",
      "El código, las cuentas y los dominios son suyos",
    ],
    factsLabel: "De un vistazo",
    map: {
      title: "Un mapa de sistemas: cómo se conectan sus herramientas",
      caption:
        "Este es el tipo de mapa que le entrega la auditoría: por dónde llegan las consultas, con qué se conectan y quién puede verlas.",
      sources: { title: "Llegan las consultas", items: ["Formulario del sitio", "Correo electrónico", "Teléfono"] },
      core: {
        title: "Un sistema conectado",
        items: ["CRM", "Portal de clientes", "Aplicación de operaciones"],
        foot: "Una sola fuente de verdad para cada dato",
      },
      results: { title: "Todos ven los mismos datos", items: ["Su equipo", "Sus clientes", "Su contabilidad"] },
    },
  },

  problem: {
    eyebrow: "El problema",
    title: "La mayoría de las empresas no necesitan otro sitio web. Necesitan que sus sistemas trabajen juntos.",
    items: [
      "Las consultas llegan por cinco canales, y algunas se contestan días después.",
      "El personal captura la misma información en tres sistemas.",
      "Los clientes llaman para pedir novedades.",
    ],
  },

  whatWeDo: {
    eyebrow: "Qué hacemos",
    title: "Diagnosticar. Construir. Operar.",
    steps: [
      {
        title: "Diagnosticar",
        detail: "Dónde se pierden tiempo, consultas y dinero, con pruebas.",
      },
      {
        title: "Construir",
        detail: "Sistemas conectados, seguros y rápidos.",
      },
      {
        title: "Operar",
        detail: "Vigilados, actualizados y mejorados cada mes, con una persona responsable con nombre y apellido.",
      },
    ],
  },

  whatWeBuild: {
    eyebrow: "Qué construimos",
    title: "Cinco tipos de sistemas, cada uno con una tarea clara.",
    lead: "Todos parten de un problema que usted puede nombrar y terminan en algo que puede medir.",
    linkLabel: "Ver cómo funciona",
    also: "También ofrecemos:",
    cards: [
      {
        title: "Sitios web que generan ingresos",
        detail: "Sitios que convierten visitas en consultas calificadas, atendidas con rapidez.",
      },
      {
        title: "Portales para clientes y propietarios",
        detail: "Un lugar seguro para consultar estado, documentos y facturas, y así sus clientes dejan de llamar.",
      },
      {
        title: "Aplicaciones de operaciones y paneles",
        detail: "Su proceso en una sola herramienta en lugar de cinco hojas de cálculo.",
      },
      {
        title: "Automatización e integraciones",
        detail: "El trabajo rutinario se hace solo, y sus herramientas comparten los mismos datos.",
      },
      {
        title: "IA con revisión humana",
        detail: "La IA redacta. Su equipo aprueba.",
      },
    ],
  },

  whoWeHelp: {
    eyebrow: "A quién ayudamos",
    title: "Hecho para tres tipos de negocio.",
    lead: "Conocemos sus problemas diarios y el software que usan.",
    linkLabel: "Ver la página del sector",
  },

  whyUs: {
    eyebrow: "Por qué trabajar con nosotros",
    title: "Pruebas antes que promesas.",
    items: [
      {
        title: "Pruebas antes que propuestas",
        detail: "La auditoría muestra dónde se pierden tiempo y consultas. Usted ve las pruebas antes de pagar por una construcción.",
      },
      {
        title: "Fases a precio fijo",
        detail: "Cada fase tiene un alcance por escrito y un precio. Sin horas abiertas.",
      },
      {
        title: "Todo es suyo",
        detail: "El código, las cuentas y los dominios son suyos desde el primer día.",
      },
      {
        title: "Estándares publicados",
        detail: "Seguridad, rendimiento, accesibilidad, IA y privacidad. Lo que hacemos por defecto está escrito.",
      },
      {
        title: "Tres idiomas, escritos para quien los lee",
        detail: "Español, inglés y francés, cada uno escrito pensando en las personas que lo leen.",
      },
    ],
    standardsLink: "Leer los estándares",
  },

  honest: {
    eyebrow: "Compruébelo usted mismo",
    body: "Estas son demos funcionales de sistemas hechos para los sectores que atendemos, y los estándares que sigue cada proyecto. Véalas antes de hablar con nosotros.",
    cta: "Ver las demos",
  },

  finalCta: {
    title: "Descubra dónde le están costando dinero sus sistemas.",
    lead: "La auditoría termina con un plan priorizado y con costos. La tarifa se acredita por completo si inicia un proyecto dentro de {days} días.",
  },
};
