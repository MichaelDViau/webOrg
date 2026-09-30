import type { IndustrySlug, IndustryText } from "@/lib/industries";
import type { IndustriesPage } from "../en/industries";

/**
 * Los sectores donde se aplican nuestras capacidades. Es la lista de los tipos de soluciones que sus
 * empresas suelen necesitar, nunca una afirmación sobre clientes pasados. No añada nombres de clientes,
 * resultados ni certificaciones de cumplimiento.
 */
export const industries: Record<IndustrySlug, IndustryText> = {
  "real-estate": {
    name: "Inmobiliario",
    short: "Inmobiliario",
    lead: "Administradores de propiedades, corredurías y desarrolladores coordinan personas, documentos y propiedades en muchos sistemas.",
    needs: [
      "Portales para propietarios e inquilinos",
      "Gestión de mantenimiento y órdenes de trabajo",
      "Integración de anuncios, prospectos y CRM",
      "Reportes de propiedades y carteras completas",
    ],
  },
  hospitality: {
    name: "Hotelería y restaurantes",
    short: "Hotelería",
    lead: "Hoteles, restaurantes y recintos funcionan con horarios, personal y experiencia del huésped.",
    needs: [
      "Sistemas de reservas",
      "Herramientas de turnos y operación del personal",
      "Comunicación con huéspedes y gestión de comentarios",
      "Integración de puntos de venta e inventario",
    ],
  },
  tourism: {
    name: "Turismo",
    short: "Turismo",
    lead: "Operadores turísticos, destinos y empresas de viajes venden experiencias a lo largo de las temporadas y los canales.",
    needs: [
      "Reservas en línea y gestión de disponibilidad",
      "Plataformas multilingües para clientes",
      "Integraciones con socios y proveedores",
      "Herramientas de planificación de itinerarios, capacidad y demanda",
    ],
  },
  retail: {
    name: "Comercio minorista",
    short: "Comercio minorista",
    lead: "Los minoristas conectan tiendas, comercio electrónico, inventario y datos de clientes.",
    needs: [
      "Plataformas de comercio electrónico y de tienda",
      "Gestión de inventario y pedidos",
      "Sistemas de datos de clientes y fidelización",
      "Paneles de ventas y demanda",
    ],
  },
  "professional-services": {
    name: "Servicios profesionales",
    short: "Servicios profesionales",
    lead: "Firmas contables, jurídicas, de consultoría y otras venden su experiencia y gestionan el trabajo de sus clientes.",
    needs: [
      "Portales para clientes e intercambio seguro de documentos",
      "Gestión de flujos de trabajo y expedientes",
      "Integraciones de tiempo, facturación y reportes",
      "Redacción y revisión de documentos asistidas por IA",
    ],
  },
  logistics: {
    name: "Logística",
    short: "Logística",
    lead: "Transportistas, distribuidores y almacenes dependen de información precisa y en tiempo real.",
    needs: [
      "Seguimiento de pedidos, envíos e inventario",
      "Aplicaciones de almacén y despacho",
      "Integraciones con transportistas, clientes y socios",
      "Paneles y analítica operativos",
    ],
  },
  "financial-services": {
    name: "Servicios financieros",
    short: "Servicios financieros",
    lead: "Las firmas financieras necesitan sistemas confiables que protejan los datos sensibles y respalden reportes precisos.",
    needs: [
      "Portales seguros para clientes y flujos de incorporación",
      "Modernización de plataformas heredadas",
      "Integración de datos y reportes",
      "Registros de auditoría y controles de acceso",
    ],
  },
  healthcare: {
    name: "Salud",
    short: "Salud",
    lead: "Las organizaciones de salud coordinan pacientes, profesionales y expedientes bajo estrictas expectativas de privacidad.",
    needs: [
      "Herramientas de citas y comunicación con pacientes",
      "Integración entre sistemas clínicos y administrativos",
      "Manejo seguro de datos y controles de acceso",
      "Reportes operativos y automatización de flujos de trabajo",
    ],
  },
  manufacturing: {
    name: "Manufactura",
    short: "Manufactura",
    lead: "Los fabricantes coordinan producción, inventario, calidad y proveedores.",
    needs: [
      "Sistemas de seguimiento de producción e inventario",
      "Conexión entre el software de planta y el de gestión",
      "Herramientas de calidad y mantenimiento",
      "Reportes y paneles operativos",
    ],
  },
  "technology-companies": {
    name: "Empresas de tecnología",
    short: "Empresas de tecnología",
    lead: "Las empresas de software y tecnología necesitan capacidad de ingeniería y una arquitectura sólida.",
    needs: [
      "Ingeniería de producto y desarrollo de funciones",
      "Infraestructura en la nube y flujos de despliegue",
      "Revisiones de arquitectura y planificación técnica",
      "Desarrollo de integraciones y API",
    ],
  },
};

export const industriesPage: IndustriesPage = {
  metaTitle: "Los sectores para los que construimos tecnología",
  metaDescription:
    "Software a medida, aplicaciones y soluciones tecnológicas para el sector inmobiliario, hotelería, turismo, comercio minorista, servicios profesionales, logística, servicios financieros, salud, manufactura y empresas de tecnología.",
  eyebrow: "Sectores",
  title: "Tecnología pensada para cómo funciona su sector.",
  lead: "Los detalles cambian según el sector. El enfoque de ingeniería se aplica en todos. Estos son los tipos de soluciones que las empresas de cada sector suelen necesitar.",
  note: "Esta lista muestra dónde se aplican nuestras capacidades. No es una lista de clientes pasados. En sectores regulados, como los servicios financieros y la salud, diseñamos teniendo en cuenta sus requisitos de privacidad y seguridad, y su propio equipo de cumplimiento tiene la última palabra.",
  needsLabel: "Soluciones que suelen necesitarse",
  relatedLabel: "Capacidades relacionadas",
  ctaTitle: "¿No ve su sector?",
  ctaLead: "El enfoque sirve para cualquier empresa con un desafío tecnológico. Cuéntenos el suyo.",
};
