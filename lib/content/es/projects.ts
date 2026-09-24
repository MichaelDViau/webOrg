import type { ProjectSlug, ProjectText } from "@/lib/projects";

export const projects: Record<ProjectSlug, ProjectText> = {
  "harbor-line-customer-portal": {
    linkLabel: "Recorra el portal de clientes",
    client: "Harbor Line Logistics",
    title: "Un portal de envíos que sustituyó 400 correos de soporte a la semana",
    type: "Aplicación web",
    industry: "Logística",
    summary:
      "Un portal de clientes para una transportista regional de carga, con seguimiento en vivo, documentos y facturación en un solo lugar.",
    results: [
      { value: "−71 %", label: "Correos preguntando por el estado" },
      { value: "2.300", label: "Cuentas de clientes activas" },
      { value: "11 sem.", label: "Hasta la primera versión" },
    ],
    imageAlt:
      "Portal de envíos de Harbor Line en modo oscuro, con un mapa de envíos en vivo, tarjetas de estado de entrega y métricas de puntualidad",
    challenge:
      "El equipo de atención al cliente de Harbor Line pasaba la mayor parte del día respondiendo la misma pregunta: ¿dónde está mi envío? Los datos de seguimiento estaban repartidos en tres sistemas internos, pero los clientes no podían verlos, y las facturas todavía se enviaban como PDF adjuntos.",
    approach: [
      "Entrevistamos a los remitentes y al equipo de atención al cliente para identificar las seis preguntas que concentraban la mayoría de las consultas, y diseñamos la primera versión para responderlas sin necesidad de llamar.",
      "El portal lee del sistema de despacho de la transportista y de NetSuite a través de una pequeña capa de integración que normaliza las actualizaciones de estado y envía los cambios a los clientes en tiempo real.",
      "Las facturas, los comprobantes de entrega y las confirmaciones de tarifa se generan automáticamente y se pueden descargar en cuanto existen.",
    ],
    outcome:
      "A los tres meses del lanzamiento, los correos preguntando por el estado de los envíos bajaron un 71 %, y el equipo de atención al cliente se reorganizó para hacer crecer las cuentas en lugar de clasificar la bandeja de entrada.",
  },
  "meridian-health-website": {
    linkLabel: "Recorra el nuevo sitio",
    client: "Meridian Family Health",
    title: "Un sitio de clínicas en el que los pacientes sí encuentran lo que buscan",
    type: "Sitio web",
    industry: "Salud",
    summary:
      "Un sitio web renovado para una red de doce clínicas de atención primaria, organizado en torno a ubicaciones, servicios y citas en línea.",
    results: [
      { value: "+46 %", label: "Solicitudes de cita en línea" },
      { value: "0,9 s", label: "Largest Contentful Paint (p75)" },
      { value: "AA", label: "Conformidad con WCAG 2.2" },
    ],
    imageAlt:
      "Página de inicio de Meridian Family Health con las próximas citas disponibles, un buscador de clínicas y un resumen de servicios",
    challenge:
      "El sitio anterior de Meridian había crecido hasta más de 300 páginas tras años de añadidos. A los pacientes les costaba encontrar el horario de su clínica más cercana, y en el móvil el enlace para pedir cita estaba escondido a tres niveles de profundidad.",
    approach: [
      "Redujimos el sitio a una estructura clara basada en las tres cosas que buscan los pacientes: una ubicación, un servicio o un profesional. Cada página de clínica muestra ahora su horario, sus servicios y un enlace directo para pedir cita.",
      "El contenido pasó a Sanity con campos estructurados para clínicas y profesionales, de modo que los cambios de horario o de personal aparecen en todas partes a la vez.",
      "Implementamos datos estructurados LocalBusiness y MedicalClinic para cada ubicación y gestionamos el mapa de redirecciones desde el sitio anterior.",
    ],
    outcome:
      "Las solicitudes de cita en línea aumentaron un 46 % en el primer trimestre tras el lanzamiento, y el tráfico orgánico a las páginas de clínicas recuperó su nivel anterior en cinco semanas.",
  },
  "cobalt-legal-document-assistant": {
    linkLabel: "Cómo funciona el asistente",
    client: "Cobalt & Reyes LLP",
    title: "Un asistente documental que cita sus fuentes",
    type: "Solución de IA",
    industry: "Legal",
    summary:
      "Un asistente interno que responde preguntas sobre 18.000 precedentes y documentos de políticas del despacho, con cada respuesta enlazada a su fuente.",
    results: [
      { value: "6 h", label: "Ahorradas por asociado cada semana" },
      { value: "94 %", label: "Precisión en el conjunto de prueba del despacho" },
      { value: "0", label: "Documentos que salen del entorno del despacho" },
    ],
    imageAlt:
      "Asistente de investigación de Cobalt & Reyes respondiendo una consulta sobre un contrato, con los precedentes citados junto a la respuesta",
    challenge:
      "Los asociados pasaban horas buscando cláusulas de precedentes y pautas internas repartidas en unidades compartidas. El despacho quería usar IA, pero solo si las respuestas se podían verificar y ningún dato de clientes salía de su entorno de Microsoft.",
    approach: [
      "Creamos un conjunto de prueba de 250 preguntas reales con respuestas verificadas por asociados sénior, y evaluamos cada decisión de diseño con él antes del despliegue.",
      "Los documentos se indexan dentro del entorno de Azure del despacho, el acceso respeta los permisos existentes por asunto y cada respuesta enlaza directamente con los fragmentos de los que procede.",
      "Las preguntas que el sistema no puede responder con seguridad se rechazan en lugar de adivinarse, y se sugieren documentos para revisar.",
    ],
    outcome:
      "Hoy 60 abogados usan el asistente a diario. Las encuestas internas estiman seis horas ahorradas por asociado cada semana en investigación y redacción.",
  },
  "fieldstone-commerce-performance": {
    linkLabel: "De dónde salió la velocidad",
    client: "Fieldstone Outdoor",
    title: "Tiempos de carga reducidos a la mitad en una tienda con mucho tráfico",
    type: "Optimización web",
    industry: "Comercio minorista",
    summary:
      "Un programa de rendimiento para una tienda de equipo para actividades al aire libre, que mejoró los Core Web Vitals de 14.000 páginas de producto antes de la temporada alta.",
    results: [
      { value: "3,8 s → 1,6 s", label: "LCP en móvil (p75)" },
      { value: "+18 %", label: "Tasa de conversión en móvil" },
      { value: "92 %", label: "Páginas que aprueban los Core Web Vitals" },
    ],
    imageAlt:
      "Informe de velocidad de Fieldstone con las puntuaciones de Core Web Vitals, la evolución del tiempo de carga y los resultados antes y después por tipo de página",
    challenge:
      "Las páginas de producto de Fieldstone se habían vuelto cada vez más lentas a medida que se añadían scripts de marketing, imágenes más grandes y nuevas funciones. Los visitantes en móvil, que son el 70 % del tráfico, esperaban casi cuatro segundos para ver la imagen principal del producto.",
    approach: [
      "Los datos de campo mostraron que tres causas explicaban la mayor parte del retraso: un flujo de imágenes principales sin optimizar, scripts de terceros que bloqueaban el renderizado y llamadas a la API sin caché en cada visita.",
      "Reconstruimos el flujo de imágenes con AVIF y tamaños adaptables, aplazamos los scripts no esenciales hasta después de la interacción y llevamos los datos de producto a una caché en el edge con revalidación en segundo plano.",
      "Ahora los presupuestos de rendimiento se verifican en cada pull request, así que las regresiones se detectan antes de llegar a los clientes.",
    ],
    outcome:
      "El LCP en móvil pasó de 3,8 a 1,6 segundos, y la tasa de conversión en móvil subió un 18 % durante la siguiente temporada alta en comparación con el año anterior.",
  },
};
