// Guía práctica "Cómo aprovecharla" para cada oferta.
// Las fichas curadas tienen consejos propios; el resto recibe una guía según su método de verificación.
// Nada aquí sustituye las condiciones oficiales: la ficha siempre remite a la fuente.

const BY_VERIFICATION = [
  {
    match: /github/i,
    time: '10–30 min + revisión de GitHub (días)',
    effort: 'Media',
    tips: [
      'Configura tu perfil de GitHub con tu nombre real y añade tu correo institucional antes de solicitar.',
      'Haz la solicitud desde el campus o con la red de tu universidad si GitHub te pide ubicación.',
      'Ten a mano una foto nítida de tu carné o certificado de matrícula con fecha vigente.',
    ],
  },
  {
    match: /sheer\s*id/i,
    time: '5–15 min',
    effort: 'Baja',
    tips: [
      'SheerID suele validar al instante con el correo institucional; si falla, sube un documento con fecha del periodo actual.',
      'Escribe el nombre de tu institución tal como aparece en su web oficial.',
      'Revisa si la oferta pide método de pago y apunta la fecha de renovación para no pagar sin querer.',
    ],
  },
  {
    match: /unidays/i,
    time: '5–10 min',
    effort: 'Baja',
    tips: [
      'Crea tu cuenta de UNiDAYS una sola vez y reutilízala para otras marcas.',
      'Usa el correo institucional para que la verificación sea inmediata.',
    ],
  },
  {
    match: /institutional|institucional/i,
    time: 'Depende de tu institución',
    effort: 'Media',
    tips: [
      'Pregunta en soporte TI o biblioteca si tu centro ya tiene licencia; muchas veces está incluida y nadie lo anuncia.',
      'Si no la tiene, la ficha oficial suele explicar cómo puede solicitarla un docente.',
    ],
  },
  {
    match: /email|correo/i,
    time: '5 min',
    effort: 'Baja',
    tips: [
      'Activa tu correo institucional si aún no lo usas: es la llave de la mayoría de beneficios.',
      'Guarda en un documento qué cuentas creaste con ese correo; al graduarte puedes perder el acceso.',
    ],
  },
  {
    match: /self|none|ninguna/i,
    time: '5 min',
    effort: 'Baja',
    tips: ['No necesita verificación estudiantil: regístrate directamente en la fuente oficial.'],
  },
];

const DEFAULT = {
  time: 'Variable',
  effort: 'Media',
  tips: ['Lee los requisitos completos en la fuente oficial antes de registrarte.'],
};

// Consejos verificables para las fichas curadas (slug → guía).
const CURATED = {
  'github-student-developer-pack': {
    time: '15 min + revisión (días)', effort: 'Media', impact: 'Muy alto',
    tips: [
      'Es la puerta a muchas otras ofertas del catálogo: solicítalo primero.',
      'Cuando te aprueben, recorre la lista de partners y activa solo lo que vayas a usar; algunos beneficios caducan al activarlos.',
      'Si te rechazan, vuelve a intentarlo con un documento que muestre fecha vigente y el nombre de tu institución.',
    ],
    combos: ['github-copilot-free', 'jetbrains-student-pack', 'namecheap-student', 'heroku-student', 'gitkraken-pro', '1password-student'],
  },
  'github-copilot-free': {
    time: '2 min tras la aprobación de GitHub Education', effort: 'Baja', impact: 'Alto',
    tips: ['Se activa desde la configuración de Copilot de tu cuenta una vez aprobada la verificación.', 'Revisa la cuota mensual para no quedarte sin créditos a mitad de un proyecto.'],
    combos: ['github-student-developer-pack', 'jetbrains-student-pack'],
  },
  'jetbrains-student-pack': {
    time: '10 min', effort: 'Baja', impact: 'Alto',
    tips: ['La forma más rápida es con correo institucional; también acepta la verificación de GitHub Education.', 'La licencia se renueva cada año: JetBrains te avisará para volver a verificar.'],
    combos: ['github-student-developer-pack', 'github-copilot-free'],
  },
  'azure-for-students': {
    time: '10 min', effort: 'Baja', impact: 'Alto',
    tips: ['No pide tarjeta de crédito: si te la piden, estás en la oferta equivocada.', 'Configura alertas de presupuesto en Azure para ver cuánto crédito te queda.'],
    combos: ['microsoft-365-education', 'github-student-developer-pack'],
  },
  'mongodb-students': {
    time: '15 min', effort: 'Media', impact: 'Medio',
    tips: ['Los créditos de Atlas se aplican mejor a un proyecto real de portafolio.', 'Aprovecha los cursos gratuitos de MongoDB University para la certificación.'],
    combos: ['github-student-developer-pack', 'heroku-student'],
  },
  'heroku-student': {
    time: '15 min', effort: 'Media', impact: 'Medio',
    tips: ['Requiere tener el GitHub Student Pack aprobado.', 'Revisa qué servicios quedan fuera del crédito mensual para evitar cargos.'],
    combos: ['github-student-developer-pack', 'namecheap-student', 'mongodb-students'],
  },
  'namecheap-student': {
    time: '10 min', effort: 'Baja', impact: 'Medio',
    tips: ['Úsalo para tu portafolio personal: un dominio propio da mejor imagen en entrevistas.', 'Anota la fecha de renovación: el segundo año ya no es gratis.'],
    combos: ['github-student-developer-pack', 'heroku-student'],
  },
  'gitkraken-pro': {
    time: '5 min', effort: 'Baja', impact: 'Medio',
    tips: ['Se activa con tu cuenta de GitHub verificada.', 'Al acabar los meses gratis, revisa el descuento antes de pagar.'],
    combos: ['github-student-developer-pack'],
  },
  'aws-educate': {
    time: '10 min', effort: 'Baja', impact: 'Medio',
    tips: ['No da créditos para alojar tu app: úsalo para aprender y obtener insignias digitales.', 'Las insignias se pueden añadir a LinkedIn.'],
    combos: ['google-cloud-students', 'azure-for-students'],
  },
  'google-cloud-students': {
    time: '15 min', effort: 'Media', impact: 'Medio',
    tips: ['El crédito de prueba es para clientes nuevos y suele pedir método de pago.', 'Crea alertas de presupuesto desde el primer día.'],
    combos: ['aws-educate', 'azure-for-students'],
  },
  'figma-education': {
    time: '10 min', effort: 'Baja', impact: 'Alto',
    tips: ['Solicítalo con tu correo institucional y una breve descripción de tu curso.', 'Se renueva cada año con una nueva verificación.'],
    combos: ['canva-education', 'notion-student-free'],
  },
  'autodesk-education': {
    time: '15 min', effort: 'Media', impact: 'Alto',
    tips: ['Ten listo un documento de matrícula: Autodesk lo revisa para aprobar la cuenta.', 'Uso solo educativo: no lo uses para trabajos pagados.'],
    combos: ['unity-student', 'unreal-engine-student'],
  },
  'notion-student-free': {
    time: '2 min', effort: 'Baja', impact: 'Medio',
    tips: ['Cambia el correo de tu cuenta al institucional desde la configuración para activar el plan.', 'Organiza apuntes y proyectos en un solo espacio.'],
    combos: ['figma-education', 'microsoft-365-education'],
  },
  'microsoft-365-education': {
    time: '5 min', effort: 'Baja', impact: 'Alto',
    tips: ['Entra con tu correo institucional en la página de Office Education para comprobar si tu centro está incluido.'],
    combos: ['azure-for-students', 'notion-student-free'],
  },
  'chatgpt-plus-student': {
    time: '10 min', effort: 'Baja', impact: 'Alto',
    tips: ['Pide método de pago: pon un recordatorio antes de que termine el periodo gratis.', 'Solo aplica en los países indicados en la fuente oficial.'],
    combos: ['github-copilot-free'],
  },
  'spotify-premium-student': {
    time: '5 min', effort: 'Baja', impact: 'Medio',
    tips: ['Se verifica cada 12 meses; ten tu correo institucional activo.', 'El precio depende de tu país: compáralo con el plan normal.'],
    combos: ['youtube-premium-student', 'apple-music-student'],
  },
  '1password-student': {
    time: '5 min', effort: 'Baja', impact: 'Medio',
    tips: ['Úsalo para proteger todas las cuentas que crees con tu correo institucional.'],
    combos: ['github-student-developer-pack', 'bitwarden-student'],
  },
  'isic-card': {
    time: '1–3 días', effort: 'Media', impact: 'Medio',
    tips: ['Compara su precio local con los descuentos que realmente usarías antes de comprarla.', 'Es útil sobre todo para viajes y museos fuera de tu país.'],
    combos: [],
  },
};

const IMPACT_BY_TYPE = { bundle: 'Muy alto', free: 'Alto', credits: 'Alto', license: 'Alto', discount: 'Medio', trial: 'Medio' };

export function playbookFor(offer) {
  const o = offer || {};
  const curated = CURATED[o.slug];
  const byVerification = BY_VERIFICATION.find((v) => v.match.test(String(o.verification || ''))) || DEFAULT;
  const base = curated || byVerification;
  const tips = [...(curated?.tips || []), ...(curated ? [] : byVerification.tips)];
  if (o.requires_card === true) tips.push('Pide tarjeta: anota la fecha de cobro y cancela antes si no lo vas a usar.');
  return {
    time: base.time,
    effort: base.effort,
    impact: curated?.impact || IMPACT_BY_TYPE[o.offer_type] || 'Medio',
    tips: [...new Set(tips)].slice(0, 4),
    combos: curated?.combos || [],
  };
}
