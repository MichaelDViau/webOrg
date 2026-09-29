import type { LegalContent } from "@/lib/legal";

/**
 * Páginas legales: política de privacidad, términos de uso, aviso de cookies y aviso de privacidad para
 * México. Son borradores redactados según cómo funciona este sitio. Pida a su abogado que los redacte o
 * los revise antes del lanzamiento (parte 18 del manual), en especial el aviso de privacidad conforme a la
 * LFPDPPP. `{name}`, `{email}`, `{hours}` y `{address}` se rellenan desde lib/site.ts.
 */
export const legal: LegalContent = {
  eyebrow: "Información legal",
  updatedLabel: "Última actualización: {date}.",
  reviewNote: "Borrador pendiente de revisión legal.",
  contactTitle: "Contacto",
  contactBody: "Para cualquier duda sobre esta página, o para ejercer sus derechos, escriba a",
  otherDocuments: "Otros documentos legales",

  privacy: {
    metaTitle: "Política de privacidad",
    metaDescription: "Cómo {name} recopila, usa y protege la información que usted comparte a través de este sitio web.",
    title: "Política de privacidad",
    updated: "septiembre de 2026",
    intro:
      "Esta política explica qué información recopila {name} a través de este sitio web, para qué, quién la recibe y qué opciones tiene usted. Se aplica a los visitantes de todos los países donde trabajamos, incluidos Quebec y México.",
    sections: [
      {
        title: "Quién es responsable",
        body: [
          "{name} es responsable de la información recopilada a través de este sitio web. Puede comunicarse con la persona responsable de la protección de datos personales en {email}.",
        ],
      },
      {
        title: "Qué recopilamos",
        body: ["Solo recopilamos lo que usted decide enviarnos, más una pequeña cantidad de datos técnicos."],
        list: [
          "Formularios de auditoría, revisión y contacto: su nombre, cargo, empresa, sitio web, correo electrónico, número de teléfono, idioma preferido y lo que quiere mejorar.",
          "Boletín: su correo electrónico y su idioma preferido.",
          "Prueba de velocidad instantánea: la dirección del sitio web que introduce y su correo si decide añadirlo.",
          "Asistente de IA: los mensajes que escribe. Le pedimos que no comparta información sensible.",
          "Datos técnicos: su dirección IP y datos básicos de la solicitud, usados para seguridad, protección contra spam y límites de frecuencia.",
        ],
      },
      {
        title: "Para qué la recopilamos",
        body: [
          "Para responderle, preparar la auditoría o la revisión que pidió, enviar el boletín al que se suscribió y mantener seguro el sitio web. No vendemos datos personales y no usamos rastreadores publicitarios.",
        ],
      },
      {
        title: "Consentimiento",
        body: [
          "Cuando la ley lo exige, pedimos su consentimiento con una casilla antes de que envíe un formulario. Puede retirarlo en cualquier momento escribiéndonos, y puede darse de baja del boletín con un solo clic.",
        ],
      },
      {
        title: "Quién la recibe",
        body: [
          "Proveedores de servicios que tratan la información por cuenta nuestra y no pueden usarla para sus propios fines. Según cómo use el sitio, incluyen:",
        ],
        list: [
          "Nuestro proveedor de alojamiento.",
          "Nuestro proveedor de envío de correos, que envía la confirmación y nuestras respuestas.",
          "Nuestro proveedor de gestión de relaciones con clientes (CRM), donde se registra y se encamina su solicitud.",
          "Nuestro proveedor de agenda, si reserva una llamada.",
          "Nuestro proveedor de analítica respetuosa con la privacidad, si está activado. No usa cookies ni crea perfiles de visitantes.",
          "Google PageSpeed Insights, que recibe la dirección que usted introduce en la prueba de velocidad.",
          "Anthropic, que procesa los mensajes que envía al asistente de IA.",
        ],
      },
      {
        title: "Dónde se procesa la información",
        body: [
          "Nuestros proveedores pueden procesar información en Estados Unidos y en otros países. Para los visitantes de Quebec, esto significa que la información puede comunicarse fuera de Quebec. Elegimos proveedores que la protejan de forma adecuada y limitamos lo que les enviamos.",
        ],
      },
      {
        title: "Cuánto tiempo la conservamos",
        body: [
          "Las consultas se conservan hasta dos años, salvo que usted pida eliminarlas antes o que empecemos a trabajar juntos, en cuyo caso se aplica el acuerdo del proyecto. Los datos del boletín se conservan hasta que se dé de baja.",
        ],
      },
      {
        title: "Sus derechos",
        body: [
          "Puede pedirnos que accedamos a la información que tenemos sobre usted, la corrijamos, la exportemos o la eliminemos, retirar su consentimiento y que dejemos de usarla para una finalidad. Respondemos en el plazo que exige la ley. Los visitantes de México pueden ejercer sus derechos ARCO como se describe en nuestro aviso de privacidad para México.",
        ],
      },
      {
        title: "Cookies",
        body: [
          "No instalamos cookies publicitarias ni de rastreo. Nuestro aviso de cookies explica los pocos elementos de almacenamiento del navegador que usa el sitio.",
        ],
      },
      {
        title: "Seguridad",
        body: [
          "Protegemos la información con cifrado en tránsito, acceso limitado a quienes lo necesitan y las prácticas de nuestro estándar de seguridad. Ningún sistema es perfectamente seguro, y le avisaremos con prontitud si algo le afecta.",
        ],
      },
      {
        title: "Menores",
        body: ["Este sitio web es para empresas. No está dirigido a menores y no recopilamos a sabiendas su información."],
      },
      {
        title: "Cambios",
        body: ["Actualizaremos esta página cuando cambien nuestras prácticas y mostraremos arriba la fecha de la última actualización."],
      },
    ],
  },

  terms: {
    metaTitle: "Términos de uso",
    metaDescription: "Los términos para usar el sitio web de {name}.",
    title: "Términos de uso",
    updated: "septiembre de 2026",
    intro: "Al usar este sitio web, usted acepta estos términos. Si no está de acuerdo, le pedimos que no lo use.",
    sections: [
      {
        title: "Qué es este sitio web",
        body: [
          "Este sitio web describe lo que hace {name} y le permite ponerse en contacto. No es una oferta de venta ni crea un contrato. Las auditorías y los proyectos se rigen por un acuerdo escrito aparte que firmamos con usted.",
        ],
      },
      {
        title: "Demos conceptuales",
        requiresWork: true,
        body: [
          "Las demos de este sitio son demos conceptuales. Usan datos de ejemplo e ilustran lo que podríamos construir. No son trabajos de clientes y no muestran resultados medidos.",
        ],
      },
      {
        title: "Información de este sitio",
        body: [
          "Procuramos que la información sea exacta, pero no prometemos que esté completa ni actualizada. Los precios mostrados son puntos de partida. El precio de su trabajo es el que acordemos por escrito.",
        ],
      },
      {
        title: "Asistente de IA y herramientas",
        body: [
          "El asistente de IA y la prueba de velocidad instantánea se ofrecen como comodidades. Sus respuestas y puntuaciones pueden contener errores y no constituyen asesoría profesional.",
        ],
      },
      {
        title: "Uso aceptable",
        body: ["Le pedimos que no haga un mal uso del sitio. Eso incluye intentar interrumpirlo, eludir sus protecciones o enviar solicitudes automatizadas o abusivas."],
      },
      {
        title: "Propiedad intelectual",
        body: ["El contenido, el diseño y el código de este sitio web pertenecen a {name} o a sus licenciantes. Puede compartir enlaces a él. Le pedimos que consulte antes de copiarlo."],
      },
      {
        title: "Enlaces a otros sitios",
        body: ["Enlazamos a sitios de terceros por comodidad. No somos responsables de su contenido ni de sus prácticas de privacidad."],
      },
      {
        title: "Límites de nuestra responsabilidad",
        body: [
          "En la medida en que la ley lo permita, {name} no es responsable de las pérdidas derivadas del uso de este sitio web. Nada aquí limita derechos que la ley no nos permite limitar.",
        ],
      },
      {
        title: "Ley aplicable",
        body: ["La ley que rige su trabajo con nosotros se establece en el acuerdo escrito de cada encargo."],
      },
      {
        title: "Cambios",
        body: ["Podemos actualizar estos términos. La fecha de la última actualización aparece en la parte superior de esta página."],
      },
    ],
  },

  cookies: {
    metaTitle: "Aviso de cookies",
    metaDescription: "Las cookies y el almacenamiento del navegador que usa el sitio web de {name}. No instalamos cookies publicitarias ni de rastreo.",
    title: "Aviso de cookies",
    updated: "septiembre de 2026",
    intro:
      "Lo mantenemos sencillo. Este sitio web no instala cookies publicitarias ni de rastreo, por lo que no muestra ningún banner de cookies. Esta página explica qué guarda el sitio y qué pasaría si eso cambiara.",
    sections: [
      {
        title: "Qué guarda el sitio",
        body: ["El sitio guarda un elemento en el almacenamiento de su navegador, y solo si usa la función:"],
        list: [
          "Tema: si cambia al tema oscuro, su elección se guarda en su navegador para recordarla la próxima vez. Nunca sale de su dispositivo.",
        ],
      },
      {
        title: "Analítica",
        body: [
          "Si la analítica está activada, usamos una herramienta respetuosa con la privacidad que no usa cookies y no le sigue de un sitio a otro. Cuenta visitas y solicitudes de formularios por página e idioma.",
        ],
      },
      {
        title: "Calendario de reservas",
        body: [
          "Si abre la página de reservas, el calendario de nuestro proveedor de agenda se carga dentro de ella. Ese proveedor puede instalar sus propias cookies. Solo se carga en esa página y se aplica la política del proveedor.",
        ],
      },
      {
        title: "Consentimiento por país",
        body: [
          "Como no instalamos cookies no esenciales, no necesitamos pedir consentimiento para ellas. Si eso cambia, se lo pediremos antes, conforme a las normas del lugar donde usted se encuentre, incluidos Quebec y México.",
        ],
      },
      {
        title: "Su control",
        body: ["Puede borrar o bloquear el almacenamiento del navegador y las cookies en los ajustes de su navegador. El sitio sigue funcionando."],
      },
    ],
  },

  mexico: {
    metaTitle: "Aviso de privacidad (México)",
    metaDescription: "Aviso de privacidad para visitantes en México, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
    title: "Aviso de privacidad para México",
    updated: "septiembre de 2026",
    intro:
      "Este aviso es para visitantes en México. Sigue la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP). Complementa nuestra política de privacidad.",
    sections: [
      {
        title: "Quién es el responsable",
        body: ["{name} es el responsable del tratamiento de los datos personales. Domicilio: {address}. Correo electrónico: {email}."],
      },
      {
        title: "Datos personales que recabamos",
        body: ["Los datos que usted escribe en nuestros formularios: nombre, cargo, empresa, sitio web, correo electrónico, número de teléfono, idioma preferido y una descripción de lo que quiere mejorar. No recabamos datos personales sensibles."],
      },
      {
        title: "Finalidades necesarias",
        body: ["Usamos sus datos para responder a su solicitud, preparar la auditoría o la revisión que pidió y mantener seguro el sitio web."],
      },
      {
        title: "Finalidades que puede rechazar",
        body: ["Si se suscribe al boletín, usamos su correo electrónico para enviarle artículos. Puede rechazar esta finalidad o darse de baja en cualquier momento."],
      },
      {
        title: "Transferencias",
        body: [
          "Compartimos datos con proveedores de servicios que los tratan por cuenta nuestra: alojamiento, envío de correos, CRM y agenda. Estas transferencias son necesarias para prestar el servicio que usted solicitó. No transferimos sus datos con otros fines sin su consentimiento.",
        ],
      },
      {
        title: "Sus derechos ARCO",
        body: [
          "Usted puede Acceder a sus datos, Rectificarlos o Cancelarlos, u Oponerse a su uso. Para ejercer estos derechos, escriba a {email} con su nombre, un medio para contactarle, lo que desea hacer y cualquier documento que nos ayude a localizar sus datos. Respondemos en el plazo que fija la ley.",
        ],
      },
      {
        title: "Revocación del consentimiento y limitación del uso",
        body: ["Puede revocar su consentimiento, o pedirnos que limitemos el uso de sus datos, escribiendo a {email}. Los boletines incluyen un enlace para darse de baja."],
      },
      {
        title: "Cookies",
        body: ["No usamos cookies ni tecnologías similares para recabar datos personales con fines publicitarios o de rastreo. Consulte nuestro aviso de cookies."],
      },
      {
        title: "Cambios a este aviso",
        body: ["Si este aviso cambia, publicaremos la nueva versión en esta página."],
      },
    ],
  },
};
