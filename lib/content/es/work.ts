import type { DemoSlug, DemoText } from "@/lib/demos";
import type { DemoPage, WorkPage } from "../en/work";

/**
 * Demos conceptuales, no proyectos de clientes. Cada pantalla usa datos claramente ficticios y lo dice.
 * No añada nunca el nombre real de un cliente, un logotipo, un testimonio ni un resultado.
 */
export const demos: Record<DemoSlug, DemoText> = {
  "property-portal": {
    name: "Portal para propietarios e inquilinos",
    card: "Propietarios e inquilinos consultan estado, estados de cuenta y solicitudes sin llamar a la oficina.",
    seoTitle: "Demo conceptual: portal para propietarios e inquilinos",
    metaDescription:
      "Una demo conceptual de un portal donde propietarios e inquilinos consultan estados de cuenta, documentos y estado de las solicitudes de mantenimiento sin llamar a la oficina.",
    headline: "Un portal donde propietarios e inquilinos ven el estado de todo sin llamar.",
    lead: "Una demo conceptual para administradores de propiedades y operadores inmobiliarios: un solo lugar para estados de cuenta, documentos y solicitudes de mantenimiento.",
    problem:
      "Una oficina de administración responde las mismas preguntas todo el día. ¿En qué va mi solicitud de mantenimiento? ¿Ya está listo mi estado de cuenta? ¿Dónde está mi contrato? Cada respuesta existe en algún lugar. Quien pregunta no puede verla.",
    does: [
      {
        title: "Vista del propietario",
        detail: "El último estado de cuenta, las solicitudes abiertas y los documentos, sin nada de otros propietarios.",
      },
      {
        title: "Vista del inquilino",
        detail: "Enviar una solicitud con fotos, ver quién la atiende y cuándo estará lista.",
      },
      {
        title: "Vista de la oficina",
        detail: "Todas las solicitudes en una sola cola, con estado, proveedor e historial.",
      },
      {
        title: "Conectado con su software",
        detail: "Lee de su sistema de administración de propiedades mediante su API o sus exportaciones, cuando existen.",
      },
    ],
    screens: [
      {
        kind: "list",
        title: "Panel del propietario",
        caption: "Lo que ve un propietario al iniciar sesión: su estado de cuenta, sus solicitudes abiertas y sus documentos.",
        app: "Portal del propietario",
        tabs: ["Resumen", "Estados de cuenta", "Solicitudes", "Documentos"],
        kpis: [
          { label: "Solicitudes abiertas", value: "2" },
          { label: "Nuevo estado de cuenta", value: "Listo" },
          { label: "Documentos por revisar", value: "1" },
        ],
        listTitle: "Solicitudes en sus propiedades",
        rows: [
          { primary: "Unidad 4B · Fuga en el grifo de la cocina", secondary: "Proveedor asignado · Visita programada", badge: "En curso", tone: "info" },
          { primary: "Unidad 12 · Luz del pasillo apagada", secondary: "Reportada por el inquilino", badge: "Nueva", tone: "warn" },
          { primary: "Unidad 7 · Batería del detector de humo", secondary: "Terminada, foto adjunta", badge: "Lista", tone: "good" },
        ],
      },
      {
        kind: "flow",
        title: "Una solicitud, del reporte al cierre",
        caption: "El historial de una sola solicitud de mantenimiento. Todos ven el mismo estado.",
        app: "Historial de la solicitud",
        steps: [
          { when: "Día 1", title: "El inquilino reporta el problema", detail: "Fotos y una breve descripción, enviadas una sola vez.", state: "done" },
          { when: "Día 1", title: "La oficina confirma y asigna un proveedor", detail: "Se avisa al inquilino y al propietario.", state: "done" },
          { when: "Día 2", title: "Visita del proveedor programada", detail: "El inquilino elige un horario.", state: "active" },
          { when: "Día 3", title: "Trabajo terminado y solicitud cerrada", detail: "Foto y factura adjuntas a la solicitud.", state: "todo" },
        ],
      },
    ],
    measure: [
      "Llamadas y correos para preguntar el estado por semana, antes y después.",
      "Tiempo entre una solicitud nueva y la asignación de un proveedor.",
      "Proporción de propietarios que abren su estado de cuenta en el portal.",
      "Horas que la oficina dedica a armar los estados de cuenta de fin de mes.",
    ],
    honestNote:
      "Esta es una demo conceptual, hecha para mostrar lo que construiríamos para un negocio inmobiliario. Usa datos de ejemplo y no está conectada a ninguna propiedad, propietario o inquilino reales.",
  },

  "firm-intake-hub": {
    name: "Centro de recepción de documentos de clientes",
    card: "Los documentos llegan completos y a tiempo, con recordatorios que se envían solos.",
    seoTitle: "Demo conceptual: centro de recepción de documentos de clientes",
    metaDescription:
      "Una demo conceptual de un centro de recepción de documentos para despachos contables y firmas profesionales: listas de verificación, carga segura, recordatorios automáticos y una IA que redacta mientras su equipo aprueba.",
    headline: "Un centro donde los documentos de los clientes llegan completos, sin perseguirlos.",
    lead: "Una demo conceptual para despachos contables y firmas profesionales: una lista de verificación por cliente, carga segura de archivos y recordatorios que se envían solos.",
    problem:
      "En cada temporada alta, el personal persigue a los clientes por los mismos documentos faltantes, por correo y por mensaje. Los archivos llegan a lugares distintos con nombres distintos. Nadie ve de un vistazo quién está listo.",
    does: [
      {
        title: "Una lista de verificación por cliente",
        detail: "Los clientes ven exactamente qué se necesita y qué ya se recibió.",
      },
      {
        title: "Carga segura de archivos",
        detail: "Los documentos van directo al expediente del cliente correcto, no a una bandeja de entrada.",
      },
      {
        title: "Recordatorios automáticos",
        detail: "Los clientes reciben recordatorios de lo que falta, y el personal no vuelve a escribir el mismo correo.",
      },
      {
        title: "La IA redacta, su equipo aprueba",
        detail: "La IA sugiere de qué documento se trata. Una persona lo confirma antes de archivarlo.",
      },
    ],
    screens: [
      {
        kind: "list",
        title: "Panel de la oficina",
        caption: "Qué clientes están listos, en espera o atrasados, de un vistazo.",
        app: "Centro de recepción",
        tabs: ["Clientes", "Recordatorios", "Ajustes"],
        kpis: [
          { label: "Listos", value: "12" },
          { label: "Esperando al cliente", value: "8" },
          { label: "Atrasados", value: "3" },
        ],
        listTitle: "Clientes de esta semana",
        rows: [
          { primary: "Cliente A · Declaración de persona física", secondary: "8 de 8 documentos recibidos", badge: "Listo", tone: "good" },
          { primary: "Cliente B · Pequeña empresa", secondary: "5 de 9 recibidos · Recordatorio enviado", badge: "En espera", tone: "warn" },
          { primary: "Cliente C · Declaración de persona física", secondary: "2 de 8 recibidos · Vence en 3 días", badge: "Atrasado", tone: "neutral" },
        ],
      },
      {
        kind: "list",
        title: "La IA redacta, su equipo aprueba",
        caption: "La IA sugiere una etiqueta para cada archivo cargado. Nada se archiva hasta que una persona lo apruebe.",
        app: "Cola de revisión",
        tabs: ["Por revisar", "Aprobados"],
        kpis: [
          { label: "Por revisar", value: "4" },
          { label: "Aprobados hoy", value: "9" },
        ],
        listTitle: "Etiquetas sugeridas",
        rows: [
          { primary: "scan_0412.pdf", secondary: "Sugerencia: estado de cuenta bancario, marzo", badge: "Pendiente de aprobación", tone: "info" },
          { primary: "IMG_2231.jpg", secondary: "Sugerencia: recibo, artículos de oficina", badge: "Pendiente de aprobación", tone: "info" },
          { primary: "notes.docx", secondary: "No está claro, una persona debe etiquetarlo", badge: "Requiere a una persona", tone: "warn" },
        ],
      },
    ],
    measure: [
      "Días entre la primera solicitud y un expediente completo.",
      "Recordatorios que el personal envía a mano por cliente.",
      "Proporción de clientes con el expediente completo antes de la fecha límite.",
      "Con qué frecuencia una persona corrige la etiqueta sugerida por la IA.",
    ],
    honestNote:
      "Esta es una demo conceptual. Usa datos de ejemplo, ningún documento real de un cliente, y muestra cómo podría funcionar un centro de recepción. Las sugerencias de IA que aparecen son ilustraciones, no resultados medidos.",
  },

  "revenue-website": {
    name: "Sitio web que genera ingresos, con flujo de consultas",
    card: "Cada consulta recibe una confirmación inmediata y una respuesta personal en una hora hábil.",
    seoTitle: "Demo conceptual: sitio web que genera ingresos con flujo de consultas",
    metaDescription:
      "Una demo conceptual de un sitio web cuyos formularios confirman al instante, encaminan la consulta a la persona correcta en el CRM y llevan a una respuesta personal en una hora hábil.",
    headline: "Un sitio web cuyas consultas nunca esperan.",
    lead: "Una demo conceptual del flujo de consultas detrás de un sitio que genera ingresos: un formulario breve, una confirmación inmediata, el envío a la persona correcta y una respuesta personal.",
    problem:
      "Las consultas llegan y esperan. Nadie sabe con certeza quién se encarga, las respuestas tardan días y el sitio no puede mostrar qué páginas traen consultas de verdad.",
    does: [
      {
        title: "Un formulario breve",
        detail: "Cinco campos como máximo, en el idioma del visitante, con consentimiento donde la ley lo exija.",
      },
      {
        title: "Una confirmación inmediata",
        detail: "El visitante recibe un correo al instante, en su idioma, para saber que su solicitud llegó.",
      },
      {
        title: "Encaminamiento en el CRM",
        detail: "La consulta llega al CRM y va a la persona correcta.",
      },
      {
        title: "Una respuesta personal y una llamada reservada",
        detail: "Una persona responde en una hora hábil y agenda la llamada de descubrimiento.",
      },
    ],
    screens: [
      {
        kind: "form",
        title: "El formulario de consulta",
        caption: "Cinco grupos breves de campos, una línea de consentimiento y ningún acertijo.",
        app: "Formulario de contacto",
        heading: "Cuéntenos qué quiere mejorar",
        fields: [
          { label: "Nombre y cargo", value: "Persona de Ejemplo, Gerente de operaciones" },
          { label: "Empresa y sitio web", value: "Empresa de Ejemplo · example.com" },
          { label: "Correo electrónico", value: "ejemplo@example.com" },
          { label: "¿Qué quiere mejorar?", value: "Las consultas tardan demasiado en recibir respuesta.", tall: true },
          { label: "Idioma preferido", value: "Español" },
        ],
        submit: "Enviar solicitud",
        note: "Al enviar, acepta que podamos responderle. Consulte la política de privacidad.",
      },
      {
        kind: "flow",
        title: "Qué pasa después de enviar",
        caption: "El flujo que activa el formulario. Este sitio funciona con el mismo.",
        app: "Flujo de consultas",
        steps: [
          { when: "De inmediato", title: "Confirmación en el idioma del visitante", detail: "Un correo automático avisa que la solicitud llegó.", state: "done" },
          { when: "De inmediato", title: "Registro en el CRM, encaminado a la persona correcta", detail: "Se registran la página de origen y el idioma.", state: "done" },
          { when: "En una hora hábil", title: "Respuesta personal", detail: "Una persona responde, en el idioma del visitante.", state: "active" },
          { when: "A continuación", title: "Llamada de descubrimiento reservada", detail: "El visitante elige un horario.", state: "todo" },
        ],
      },
    ],
    measure: [
      "Tiempo hasta la primera respuesta personal.",
      "Visitas frente a consultas, por página y por idioma.",
      "Consultas por origen.",
      "Proporción de consultas que terminan en una llamada reservada.",
    ],
    honestNote:
      "Esta es una demo conceptual con datos de ejemplo. El mismo flujo funciona en este sitio web, así que puede probarlo usted mismo: envíe una solicitud y vea qué llega a su bandeja de entrada.",
  },
};

export const workPage: WorkPage = {
  metaTitle: "Trabajos: demos conceptuales de los sistemas que construimos",
  metaDescription:
    "Demos conceptuales funcionales de un portal inmobiliario, un centro de recepción de documentos y un sitio web que genera ingresos con flujo de consultas. Usan datos de ejemplo y no son proyectos de clientes.",
  eyebrow: "Trabajos",
  title: "Demos funcionales de los sistemas que construimos.",
  lead: "Tres demos conceptuales de sistemas para los sectores que atendemos. Cada una usa datos de ejemplo, para que siempre sepa qué está viendo.",
  honestTitle: "Qué está viendo",
  honestBody:
    "Las demos conceptuales usan datos de ejemplo y no son proyectos de clientes.",
  seeDemo: "Ver la demo",
};

export const demoPage: DemoPage = {
  problem: "El problema",
  whatItDoes: "Qué hace",
  screens: "Las pantallas",
  technology: "Tecnología",
  measure: "Qué mediríamos para un cliente",
  built: "Hecha para",
  services: "Servicios detrás de la demo",
  otherDemos: "Otras demos",
  aboutThisDemo: "Acerca de esta demo",
};
