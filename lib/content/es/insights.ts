import type { ArticleSlug, ArticleText } from "@/lib/insights";
import type { ArticlePage, InsightsPage } from "../en/insights";

/**
 * Artículos prácticos por sector. Sin estadísticas, clientes ni resultados, salvo que sean reales y estén
 * aprobados: son artículos prácticos, no casos de estudio.
 */
export const articles: Record<ArticleSlug, ArticleText> = {
  "client-portal-for-property-managers": {
    title: "Qué debe incluir la primera versión de un portal de clientes para administradores de propiedades",
    description:
      "Un portal de clientes para administradores de propiedades debe responder primero las preguntas que llenan su bandeja de entrada. Esto es lo que conviene incluir en la primera versión y lo que conviene dejar fuera.",
    topic: "Propiedades",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "Las oficinas de administración de propiedades responden las mismas preguntas todo el día. ¿En qué va mi solicitud de mantenimiento? ¿Ya está listo mi estado de cuenta? ¿Dónde está mi contrato? Un portal puede responder la mayoría. El error es tratar de responderlas todas a la vez.",
      },
      { type: "h2", text: "Partir de las preguntas, no de las funciones" },
      {
        type: "p",
        text: "Antes de que alguien diseñe una pantalla, anote los últimos treinta correos y llamadas que recibió su oficina. Agrúpelos. Los grupos que se repiten son su primera versión. Lo demás puede esperar.",
      },
      { type: "h2", text: "Qué incluir en la primera versión" },
      {
        type: "ul",
        items: [
          "Solicitudes de mantenimiento: un lugar para reportar un problema con fotos y otro para ver quién lo atiende.",
          "Estados de cuenta de propietarios: el último estado de cuenta y un breve historial, sin PDF enviados por correo.",
          "Documentos: contratos, avisos y recibos que cada persona tiene derecho a ver.",
          "Estado: una etiqueta clara en cada solicitud, como nueva, asignada, programada o terminada.",
          "Un acceso que muestre a cada persona solo sus propios registros.",
        ],
      },
      { type: "h2", text: "Qué dejar fuera por ahora" },
      {
        type: "ul",
        items: [
          "Pagos en línea, hasta que lo básico funcione y su software de contabilidad esté conectado.",
          "Chat y mensajería, si una solicitud con un historial claro cumple su función.",
          "Reportes personalizados que nadie ha pedido todavía.",
        ],
      },
      { type: "h2", text: "Conéctelo con lo que ya usa" },
      {
        type: "p",
        text: "Un portal que necesita una segunda copia de sus datos siempre estará desactualizado. Revise primero qué permite su software de administración de propiedades: una API, exportaciones o nada. Esa respuesta da forma a todo el proyecto, y por eso la revisamos durante la auditoría.",
      },
      { type: "h2", text: "Decida cómo sabrá que funcionó" },
      {
        type: "p",
        text: "Elija unas pocas cifras antes de construir. Por ejemplo: llamadas y correos para preguntar el estado por semana, el tiempo desde una solicitud nueva hasta la asignación de un proveedor y las horas dedicadas a los estados de cuenta de fin de mes. Mídalas antes del portal y otra vez después.",
      },
    ],
  },

  "document-intake-for-accounting-firms": {
    title: "Recepción de documentos para despachos contables: deje de perseguir PDF por correo",
    description:
      "Cómo pueden los despachos contables y las firmas profesionales recopilar los documentos de sus clientes sin perseguirlos: una lista de verificación por cliente, un solo lugar para cargarlos y recordatorios que se envían solos.",
    topic: "Contabilidad",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "Cada temporada alta se ve igual. El personal manda recordatorios, los clientes mandan fotos y los documentos llegan por correo, por mensaje y en carpetas compartidas. Luego alguien tiene que renombrar y reubicar todo antes de que pueda empezar el trabajo real.",
      },
      { type: "h2", text: "El problema no son sus clientes" },
      {
        type: "p",
        text: "Los clientes no son descuidados. Nadie les dijo exactamente qué se necesita, adónde enviarlo y qué falta todavía. La recepción es un problema de diseño, y tiene solución.",
      },
      { type: "h2", text: "Cuatro partes de un buen proceso de recepción" },
      {
        type: "ul",
        items: [
          "Una lista de verificación para cada cliente que muestre qué se necesita y qué se ha recibido.",
          "Un solo lugar para cargar, de modo que los documentos caigan en el expediente correcto y no en una bandeja de entrada.",
          "Recordatorios automáticos de lo que aún falta, en el idioma del cliente.",
          "Un panel para el despacho que muestre quién está listo, quién espera y quién está atrasado.",
        ],
      },
      { type: "h2", text: "Dónde puede ayudar la IA y dónde no debe decidir" },
      {
        type: "p",
        text: "La IA puede sugerir qué es un archivo escaneado, como un estado de cuenta bancario o un recibo. Eso ahorra captura. No debería archivar el documento por su cuenta. Una persona confirma cada sugerencia, y el despacho puede medir con qué frecuencia se equivocó. La IA redacta. Su equipo aprueba.",
      },
      { type: "h2", text: "Proteja los documentos de los clientes" },
      {
        type: "p",
        text: "Los documentos de los clientes son sensibles. Guárdelos cifrados, deje que cada cliente vea solo su propio expediente y conserve un registro de quién accedió a qué. Decida de antemano cuánto tiempo los conserva.",
      },
      { type: "h2", text: "Mida antes y después" },
      {
        type: "p",
        text: "Registre los días entre la primera solicitud y un expediente completo, los recordatorios que su personal envía a mano y la proporción de clientes con el expediente completo antes de la fecha límite. Esas tres cifras le dicen si el nuevo proceso funciona.",
      },
    ],
  },

  "measure-your-inquiry-response-time": {
    title: "Cómo medir qué tan rápido responde su equipo a las consultas nuevas",
    description:
      "Si un visitante espera un día por una respuesta, su sitio web ha fallado. Esta es una manera sencilla de medir su tiempo de respuesta antes de tratar de mejorarlo.",
    topic: "Flujo de consultas",
    readMinutes: 4,
    body: [
      {
        type: "p",
        text: "El flujo de sus consultas es la prueba de lo que usted vende. Si un visitante espera un día por una respuesta, el sitio ha fallado, por muy bien que se vea. Antes de cambiar nada, mida dónde está.",
      },
      { type: "h2", text: "Encuentre todos los lugares por donde llegan consultas" },
      {
        type: "p",
        text: "Haga la lista: el formulario de contacto, el correo general, el teléfono, los mensajes directos, las recomendaciones y cualquier chat. La mayoría de los negocios descubre que tiene más canales de los que creía, y que algunos no los revisa nadie a diario.",
      },
      { type: "h2", text: "Registre dos horas por cada consulta" },
      {
        type: "ul",
        items: [
          "La hora en que llegó.",
          "La hora en que una persona respondió personalmente por primera vez. Una confirmación automática no cuenta.",
        ],
      },
      {
        type: "p",
        text: "Una hoja de cálculo compartida basta durante dos semanas. La diferencia entre las dos horas es su tiempo hasta la primera respuesta.",
      },
      { type: "h2", text: "Mire las más lentas, no solo el promedio" },
      {
        type: "p",
        text: "Un promedio esconde las consultas que esperaron días. Ordene por las diferencias más largas y pregunte qué pasó con cada una. Casi siempre es una de tres cosas: nadie se hizo cargo, llegó por un canal que nadie revisa o hacía falta información que nadie tenía.",
      },
      { type: "h2", text: "Fije una promesa que pueda cumplir" },
      {
        type: "p",
        text: "Elija un plazo de respuesta que realmente pueda cumplir, como una hora hábil, dígalo en su sitio web y mídase contra él. Una confirmación automática inmediata le dice al visitante que su solicitud llegó. Una respuesta personal dentro del plazo prometido muestra que a alguien le importa.",
      },
      { type: "h2", text: "Luego mejore y vuelva a medir" },
      {
        type: "p",
        text: "Dirija todos los canales a un solo lugar, designe quién se encarga de las consultas nuevas y quite los pasos entre la llegada y la respuesta. Vuelva a medir tras unas semanas. Esto es justo lo que hacemos en la auditoría: medimos su tiempo de respuesta antes y después.",
      },
    ],
  },
};

export const insightsPage: InsightsPage = {
  metaTitle: "Artículos: notas prácticas sobre los sistemas de las empresas de operaciones",
  metaDescription:
    "Artículos prácticos para empresas de propiedades, contabilidad y distribución sobre portales de clientes, recepción de documentos, flujo de consultas y los sistemas que hacen funcionar su empresa.",
  eyebrow: "Artículos",
  title: "Notas prácticas sobre los sistemas que hacen funcionar su empresa.",
  lead: "Artículos breves para dueños y responsables de operaciones, por sector. Sin exageraciones y sin cifras que no podamos respaldar.",
  readArticle: "Leer el artículo",
  minutes: "{minutes} min de lectura",
  publishedOn: "Publicado el {date}",
  topics: "Tema",
};

export const articlePage: ArticlePage = {
  back: "Todos los artículos",
  related: "Relacionado",
  relatedService: "Servicio relacionado",
  relatedIndustry: "Sector relacionado",
  ctaTitle: "¿Quiere que revisemos esto en su negocio?",
  ctaLead: "La auditoría muestra dónde sus sistemas le cuestan tiempo, consultas y dinero.",
};
