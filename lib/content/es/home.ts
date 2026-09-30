import type { Home } from "../en/home";

/**
 * La página de inicio, en español latinoamericano: escrita para quien la lee, no traducida palabra por
 * palabra. Ocho secciones: la portada, lo que hacemos, las capacidades, cómo resolvemos problemas, las
 * soluciones tecnológicas, por qué trabajar con nosotros, los sectores y la consulta de proyecto.
 */
export const home: Home = {
  metaTitle: "{name}: software a medida y soluciones tecnológicas",
  metaDescription:
    "Diseñamos, construimos y modernizamos la tecnología de las empresas: software a medida, aplicaciones web, IA, bases de datos, nube y sistemas empresariales.",

  hero: {
    lead: "Desarrollamos",
    block1: "tecnología.",
    block2: "Resolvemos desafíos",
    tail: "de negocio.",
    intro:
      "Desde software a medida y aplicaciones web hasta soluciones de IA, sistemas empresariales e infraestructura en la nube, diseñamos la tecnología que las empresas necesitan para operar, evolucionar y crecer.",
    factsLabel: "De un vistazo",
    facts: [
      "Una persona le responde en una hora hábil",
      "El código, las cuentas y los dominios son suyos",
      "Proyectos en español, inglés y francés",
    ],
    visualLabel:
      "Ilustración de una aplicación de negocio, las capas de arquitectura que la respaldan y el entorno en la nube donde se ejecuta",
  },

  whatWeDo: {
    eyebrow: "Lo que hacemos",
    title: "Soluciones tecnológicas para desafíos de negocio reales.",
    body: "Somos una empresa de ingeniería de software y soluciones tecnológicas. Desarrollamos software a medida, construimos aplicaciones web y móviles, diseñamos bases de datos e infraestructura en la nube, integramos IA, modernizamos sistemas que envejecen y resolvemos problemas técnicos complejos. Algunos clientes nos traen un solo desafío técnico. Otros necesitan un sistema completo.",
    engineerLabel: "Lo que diseñamos",
    outcomeLabel: "Lo que aporta al negocio",
    outcomes: [
      {
        tech: "Software y aplicaciones a medida",
        result: "Su proceso corre en un solo sistema hecho para él, en lugar de herramientas dispersas.",
      },
      {
        tech: "Bases de datos e integraciones",
        result: "Sus equipos trabajan con los mismos datos precisos.",
      },
      {
        tech: "Nube e infraestructura",
        result: "Sus sistemas se mantienen disponibles, seguros y listos para crecer.",
      },
      {
        tech: "IA y automatización",
        result: "El trabajo rutinario se hace solo, y las personas revisan lo que importa.",
      },
      {
        tech: "Modernización y arquitectura",
        result: "El software que envejece deja de frenar al negocio.",
      },
    ],
  },

  capabilities: {
    eyebrow: "Nuestras capacidades",
    title: "Todo lo que una empresa espera de un socio tecnológico.",
    lead: "Nueve capacidades en un solo equipo de ingeniería. Use una para un problema concreto, o combine varias para una solución completa.",
    explore: "Explorar",
    viewAll: "Ver todos los servicios",
    more: "+ {count} más",
  },

  approach: {
    eyebrow: "Cómo resolvemos problemas",
    title: "Del desafío a la solución.",
    lead: "Cada proyecto es distinto, así que el proceso se adapta. La mayoría del trabajo sigue estos cinco pasos, y una solución puntual puede necesitar solo algunos.",
    step: "Paso {number}",
    steps: [
      {
        title: "Entender",
        detail: "Entender el negocio, sus desafíos, sus objetivos y la tecnología que ya tiene.",
      },
      {
        title: "Planificar",
        detail: "Definir el enfoque técnico correcto, la arquitectura y la estrategia de implementación.",
      },
      {
        title: "Construir",
        detail: "Diseñar y desarrollar el software, las aplicaciones, la infraestructura o las integraciones adecuadas.",
      },
      {
        title: "Implementar",
        detail: "Desplegar, integrar y probar, y asegurarse de que la solución funcione en su entorno de negocio.",
      },
      {
        title: "Evolucionar",
        detail: "Mejorar, optimizar, mantener y adaptar la tecnología a medida que cambian sus necesidades.",
      },
    ],
    engageTitle: "Trabaje con nosotros de la manera que le convenga",
    engage: [
      {
        title: "Un desafío técnico específico",
        detail: "Una corrección, una evaluación o una segunda opinión. Enfocado, rápido y acotado por escrito.",
      },
      {
        title: "Un proyecto definido",
        detail: "Una aplicación, una migración o una integración, desde la planificación hasta el lanzamiento.",
      },
      {
        title: "Una implementación completa",
        detail: "Un programa de varios sistemas: arquitectura, desarrollo, migración y soporte continuo.",
      },
    ],
    link: "Ver cómo trabajamos",
  },

  solutions: {
    eyebrow: "Soluciones tecnológicas",
    title: "Sea cual sea el desafío técnico, construimos la solución.",
    lead: "Estos son los problemas que las empresas nos traen. Encuentre el suyo y vea cómo lo abordaríamos.",
    items: [
      { question: "¿Necesita una aplicación de negocio a medida?", answer: "Diseñamos y construimos software adaptado a su proceso." },
      { question: "¿Su software actual ya no cubre sus necesidades?", answer: "Lo actualizamos, lo reestructuramos o lo reemplazamos por etapas." },
      { question: "¿Quiere migrar a la nube?", answer: "Planificamos y realizamos el traslado sin interrumpir el negocio." },
      { question: "¿Necesita una base de datos diseñada u optimizada?", answer: "Estructuramos sus datos para que sean precisos y rápidos." },
      { question: "¿Quiere integrar IA en su empresa?", answer: "La añadimos donde elimina trabajo, con las personas al mando." },
      { question: "¿Necesita conectar varios sistemas?", answer: "Diseñamos las integraciones y las API que los hacen trabajar juntos." },
      { question: "¿Tiene problemas de rendimiento o de infraestructura?", answer: "Diagnosticamos la causa y la corregimos." },
      { question: "¿Quiere automatizar procesos manuales?", answer: "Convertimos los pasos manuales en flujos de trabajo digitales confiables." },
      { question: "¿Necesita desarrollar una plataforma digital completa?", answer: "La construimos desde cero, sobre una base que escala." },
    ],
    note: "La mayoría de los proyectos solo necesita algunas de estas capacidades. Recomendamos lo que encaja y dejamos fuera lo que no.",
  },

  whyUs: {
    eyebrow: "Por qué trabajar con nosotros",
    title: "Decisiones de ingeniería tomadas para su negocio.",
    items: [
      {
        title: "Soluciones diseñadas a medida",
        detail: "Construimos para su proceso y sus restricciones, no a partir de una plantilla.",
      },
      {
        title: "Decisiones técnicas orientadas al negocio",
        detail: "Cada recomendación se vincula con lo que significa para el costo, el riesgo y las operaciones.",
      },
      {
        title: "Capacidades técnicas amplias",
        detail: "Software, datos, nube, IA y arquitectura en un solo equipo, para que nada quede entre proveedores.",
      },
      {
        title: "Enfoques de proyecto flexibles",
        detail: "De una corrección puntual a un programa completo, adaptamos el proceso al trabajo.",
      },
      {
        title: "Arquitectura escalable",
        detail: "Sistemas diseñados para absorber el crecimiento en usuarios, datos y funciones.",
      },
      {
        title: "Resolución práctica de problemas",
        detail: "Elegimos el enfoque más simple que resuelve bien el problema.",
      },
      {
        title: "Integración con sus sistemas actuales",
        detail: "La nueva tecnología funciona con lo que ya opera, en lugar de reemplazarlo todo.",
      },
      {
        title: "Visión tecnológica a largo plazo",
        detail: "Documentación, responsabilidades claras y código mantenible, para que el sistema le sirva durante años.",
      },
    ],
    standardsLink: "Leer nuestros estándares de ingeniería",
  },

  industries: {
    eyebrow: "Sectores",
    title: "Tecnología pensada para cómo funciona su sector.",
    lead: "Los problemas cambian según el sector. La ingeniería se aplica en todos. Estos son los tipos de soluciones que las empresas de cada uno suelen necesitar.",
    link: "Ver todos los sectores",
  },

  contact: {
    eyebrow: "Contacto",
    title: "Cuéntenos qué necesita construir o corregir.",
    lead: "Puede ser una aplicación nueva, un sistema antiguo que necesita trabajo o un problema técnico que no ha podido resolver. Una descripción breve basta para empezar.",
    cta: "Iniciar una conversación",
    points: [
      "Recibe una confirmación de inmediato.",
      "Una persona le responde en una hora hábil.",
      "Sin compromiso. Empezamos por entender el problema.",
    ],
    emailLabel: "¿Prefiere el correo?",
  },
};
