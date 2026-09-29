import type { IndustrySlug, IndustryText } from "@/lib/industries";
import type { IndustriesPage } from "../en/industries";

/**
 * Las páginas de sectores demuestran que entendemos su mundo: sus problemas diarios con su vocabulario,
 * los sistemas que construimos para ellos, el software que usan y la demo pertinente. Los nombres de
 * productos son ejemplos de software al que podemos conectarnos, nunca una afirmación de alianza ni de
 * clientes anteriores.
 */
export const industries: Record<IndustrySlug, IndustryText> = {
  property: {
    name: "Administradores de propiedades y operadores inmobiliarios",
    short: "Propiedades e inmuebles",
    seoTitle: "Software para administradores de propiedades y operadores inmobiliarios",
    metaDescription:
      "Portales para propietarios e inquilinos, flujos de solicitudes de mantenimiento y reportes para administradores de propiedades y operadores inmobiliarios. Conectados con su software de administración.",
    headline: "Propietarios e inquilinos obtienen respuestas sin llamar a su oficina.",
    lead: "Para administradores de propiedades, arrendadores y operadores inmobiliarios que manejan a la vez muchas unidades, propietarios y proveedores.",
    homeProblems: [
      "Los propietarios piden sus estados de cuenta y los enviamos en PDF a mano.",
      "Las solicitudes de mantenimiento llegan por mensaje, correo y teléfono.",
      "Los contratos están en un sistema y las órdenes de trabajo en otro.",
    ],
    problems: [
      {
        quote: "Los inquilinos escriben, mandan correo y llaman por la misma solicitud de mantenimiento.",
        detail: "Las solicitudes se registran tres veces o ninguna, y nadie sabe quién se encarga.",
      },
      {
        quote: "Los propietarios piden su estado de cuenta y les mandamos un PDF a mano.",
        detail: "El cierre de mes se convierte en una semana de exportaciones, adjuntos y correos de seguimiento.",
      },
      {
        quote: "Las órdenes de trabajo están en un sistema y los contratos en otro.",
        detail: "El personal salta de una herramienta a otra para responder una pregunta sencilla.",
      },
      {
        quote: "Los papeles de entrada y renovación circulan por correo.",
        detail: "Las firmas y los documentos que faltan aparecen días después de su fecha límite.",
      },
    ],
    systems: [
      {
        title: "Portal para propietarios e inquilinos",
        detail: "Estados de cuenta, documentos, solicitudes y estado en un solo lugar, y cada persona ve solo lo suyo.",
      },
      {
        title: "Flujo de solicitudes de mantenimiento",
        detail: "Una solicitud se registra una sola vez, se asigna a un proveedor y se sigue hasta cerrarla.",
      },
      {
        title: "Recepción de arrendamientos y renovaciones",
        detail: "Solicitudes y papeles de renovación recopilados, revisados para detectar lo que falta y encaminados.",
      },
      {
        title: "Reportes para propietarios",
        detail: "Las cifras del mes armadas a partir de sus sistemas, listas para revisar.",
      },
    ],
    softwareIntro:
      "Nos conectamos al software que ya usa, mediante su API, sus exportaciones o acceso a su base de datos cuando existen. Por ejemplo:",
    software: ["AppFolio", "Buildium", "Yardi", "Rent Manager", "QuickBooks", "Google Workspace", "Microsoft 365"],
    faqs: [
      {
        question: "¿Tenemos que reemplazar nuestro software de administración de propiedades?",
        answer:
          "No. El portal lee de él y, cuando es posible, escribe de vuelta. La auditoría confirma qué permite su software.",
      },
      {
        question: "¿Pueden usarlo propietarios e inquilinos desde el teléfono?",
        answer: "Sí. Funciona en el navegador, en un teléfono o una computadora, sin instalar nada.",
      },
    ],
  },

  accounting: {
    name: "Despachos contables y firmas de servicios profesionales",
    short: "Despachos contables y servicios profesionales",
    seoTitle: "Software para despachos contables y firmas de servicios profesionales",
    metaDescription:
      "Recepción de documentos de clientes, seguimiento de encargos y paneles internos para despachos contables y firmas profesionales. Deje de perseguir documentos por correo.",
    headline: "Los documentos de los clientes llegan completos y a tiempo, sin perseguirlos.",
    lead: "Para despachos contables, contadores y prácticas profesionales que pasan la temporada alta persiguiendo a sus clientes por los mismos documentos faltantes.",
    homeProblems: [
      "Cada temporada perseguimos a los clientes por los mismos documentos faltantes.",
      "Los archivos llegan por correo, por mensaje y en carpetas compartidas.",
      "Nadie ve de un vistazo qué clientes están listos.",
    ],
    problems: [
      {
        quote: "Cada temporada perseguimos a los clientes por los mismos documentos faltantes.",
        detail: "El personal escribe a mano los mismos correos de recordatorio, cliente tras cliente.",
      },
      {
        quote: "Los archivos llegan por correo, por mensaje y en tres carpetas compartidas.",
        detail: "Alguien tiene que renombrar y reubicar cada uno antes de que empiece el trabajo real.",
      },
      {
        quote: "No puedo ver qué clientes están listos y cuáles están esperando.",
        detail: "El estado vive en la cabeza de las personas y en una hoja de cálculo en la que nadie confía.",
      },
      {
        quote: "Los clientes preguntan una y otra vez en qué va su declaración o su expediente.",
        detail: "Cada pregunta interrumpe a alguien que está haciendo trabajo facturable.",
      },
    ],
    systems: [
      {
        title: "Centro de recepción de documentos de clientes",
        detail: "Una lista de verificación por cliente, carga segura de archivos y recordatorios automáticos de lo que aún falta.",
      },
      {
        title: "Portal de estado del encargo",
        detail: "Los clientes ven en qué va su expediente sin necesidad de llamar.",
      },
      {
        title: "Recepción de nuevos clientes",
        detail: "Datos del cliente y papeles del encargo recopilados una sola vez, en un solo lugar.",
      },
      {
        title: "Panel interno de disponibilidad",
        detail: "Quién está listo, quién espera y quién está atrasado, de un vistazo.",
      },
    ],
    softwareIntro:
      "Nos conectamos a las herramientas que su despacho ya usa, mediante sus API, exportaciones o correo. Por ejemplo:",
    software: ["QuickBooks", "Xero", "Karbon", "TaxDome", "Canopy", "Microsoft 365", "Google Workspace"],
    faqs: [
      {
        question: "¿Cómo protegen los documentos de los clientes?",
        answer:
          "Los documentos se almacenan cifrados, cada cliente ve solo los suyos y los accesos quedan registrados. Todo sigue nuestros estándares de seguridad y privacidad publicados.",
      },
      {
        question: "¿La IA lee los documentos de nuestros clientes?",
        answer:
          "Solo si usted quiere. Cuando lo hace, la IA redacta una etiqueta o un resumen y una persona de su equipo lo aprueba. Consulte nuestra política de IA para ver los detalles.",
      },
    ],
  },

  distribution: {
    name: "Distribución y comercio B2B",
    short: "Distribución y comercio B2B",
    seoTitle: "Software para distribuidores y empresas de comercio B2B",
    metaDescription:
      "Portales para clientes, recepción de cotizaciones e integraciones de pedidos e inventario para distribuidores y empresas de comercio B2B. Deje de volver a capturar pedidos.",
    headline: "Pedidos, cotizaciones y preguntas de clientes resueltos sin volver a capturar.",
    lead: "Para distribuidores, mayoristas y empresas de comercio cuyos pedidos y solicitudes de cotización llegan por correo y por teléfono.",
    homeProblems: [
      "Los clientes mandan sus pedidos por correo y nosotros los volvemos a capturar.",
      "Las solicitudes de cotización esperan a la única persona que conoce los precios.",
      "Los clientes llaman para preguntar dónde está su pedido.",
    ],
    problems: [
      {
        quote: "Los clientes mandan sus pedidos por correo y nosotros los volvemos a capturar en el sistema.",
        detail: "Cada línea recapturada es una oportunidad de error en una cantidad o de olvidar un artículo.",
      },
      {
        quote: "Las solicitudes de cotización esperan a la única persona que conoce los precios.",
        detail: "Cuando esa persona no está, las ventas se frenan o se van a la competencia.",
      },
      {
        quote: "Los clientes llaman para preguntar dónde está su pedido.",
        detail: "La respuesta existe en el ERP, donde el cliente no puede verla.",
      },
      {
        quote: "El inventario y los pedidos abiertos no coinciden entre sistemas.",
        detail: "Ventas promete lo que el almacén no tiene.",
      },
    ],
    systems: [
      {
        title: "Portal de clientes para pedidos y estado de cuenta",
        detail: "Los clientes hacen pedidos, ven su historial y consultan el estado sin llamar.",
      },
      {
        title: "Recepción de solicitudes de cotización",
        detail: "Una solicitud estructurada que llega a la persona correcta con todo lo que necesita.",
      },
      {
        title: "Sincronización de pedidos e inventario",
        detail: "Su ERP, su comercio electrónico y su contabilidad, sincronizados entre sí.",
      },
      {
        title: "Paneles de ventas y operaciones",
        detail: "Cotizaciones abiertas, pedidos atrasados e inventario en una sola vista.",
      },
    ],
    softwareIntro:
      "Nos conectamos a su ERP, contabilidad y herramientas de ventas, mediante sus API, exportaciones o acceso a su base de datos cuando existen. Por ejemplo:",
    software: ["NetSuite", "Sage", "Acumatica", "QuickBooks", "Odoo", "Shopify", "WooCommerce"],
    faqs: [
      {
        question: "¿Pueden los clientes ver sus propios precios?",
        answer:
          "Sí, si su sistema guarda precios por cliente y nos permite leerlos. El portal muestra a cada cliente solo sus precios y sus pedidos.",
      },
      {
        question: "¿Tenemos que cambiar de ERP?",
        answer: "No. Construimos alrededor de él y lo mantenemos como fuente de pedidos, inventario y precios.",
      },
    ],
  },
};

export const industriesPage: IndustriesPage = {
  metaTitle: "Sectores: propiedades, contabilidad y distribución",
  metaDescription:
    "Sistemas hechos para administradores de propiedades y operadores inmobiliarios, despachos contables y firmas de servicios profesionales, y empresas de distribución y comercio B2B.",
  eyebrow: "Sectores",
  title: "Conocemos sus problemas diarios y el software que usan.",
  lead: "Tres sectores, elegidos porque sus problemas se repiten y porque conocemos el software que usan.",
  problemsLabel: "Problemas típicos",
  linkLabel: "Ver la página del sector",
  ctaTitle: "¿Su negocio no está en esta lista?",
  ctaLead: "La auditoría sirve para cualquier empresa de servicios u operaciones ya establecida. Cuéntenos qué quiere mejorar.",
};
