// Ofertas de IA para estudiantes revisadas en sus páginas oficiales el 29-10-2026.
// AI_PATCHES actualiza fichas existentes (por slug); AI_NEW son fichas nuevas que se insertan una vez.
const TODAY = '2026-10-29T23:30:00.000Z';
const REV = '2026-10-29.ai1';

export const AI_PATCHES = {
  'google-ai-pro-estudiantes': {
    title: 'Google AI Pro — 1 año gratis para estudiantes en EE. UU.',
    benefit: '12 meses de Google AI Pro gratis para estudiantes de 18 años o más en EE. UU.; se canjea hasta el 31 de diciembre de 2026 y luego cuesta USD 19,99 al mes salvo que canceles.',
    summary: 'Se verifica con SheerID y pide un método de pago al registrarte.',
    countries: ['US'], verification: 'SheerID', source_url: 'https://gemini.google/us/students/',
    expires_at: '2027-01-01T00:00:00.000Z', requires_card: true,
  },
  'chatgpt-plus-student': {expires_at: '2026-11-01T00:00:00.000Z'},
  'cursor-estudiantes': {
    title: 'Cursor — Plan gratuito para estudiantes',
    benefit: 'Cursor se puede usar gratis; el año gratis de Pro para estudiantes ya no aparece en su página oficial.',
    summary: 'Revisa en la página de estudiantes si vuelve a abrirse un programa académico.',
    source_url: 'https://cursor.com/students', offer_type: 'free',
  },
  'v0-estudiantes': {
    title: 'v0 — 1 año de acceso gratis en universidades participantes',
    benefit: '1 año de acceso complementario a v0 al verificar tu correo de estudiante en una universidad participante.',
    summary: 'Solo para universidades de la lista oficial (Stanford, MIT, Berkeley, Waterloo y otras).',
  },
  'lovable-estudiantes': {
    title: 'Lovable — 50 % de descuento en Pro hasta 12 meses',
    benefit: '50 % de descuento en Lovable Pro hasta por 12 meses al verificar tu correo de estudiante.',
  },
};

const base = {official: true, commercial_use: 'check-source', catalog_revision: REV, verified_at: TODAY, tags: ['ai', 'trending']};

export const AI_NEW = [
  {...base,
    slug: 'gemini-plan-estudiantes-latam', brand: 'Google', title: 'Gemini — Plan para estudiantes gratis por 1 año',
    summary: 'Comprobado desde Colombia; la disponibilidad depende de tu país.',
    benefit: '1 año gratis del plan para estudiantes de Gemini: límites de uso más altos, 400 GB de almacenamiento y generación de video.',
    category: 'AI', offer_type: 'free', countries: ['CO'], requires_card: null,
    requirements: ['Ser estudiante de educación superior', 'Usar una cuenta personal de Google'],
    steps: ['Abre la página de estudiantes de Gemini', 'Pulsa "Solicita tu plan de estudiante gratis"', 'Verifica tu condición de estudiante y activa el plan'],
    verification: 'Education verification', source_url: 'https://gemini.google/students/', confidence: 88},
  {...base,
    slug: 'perplexity-education-pro', brand: 'Perplexity', title: 'Perplexity Education Pro — Pro con descuento para estudiantes',
    summary: 'Se verifica con SheerID desde el botón "Verify as student".',
    benefit: 'Todo Perplexity Pro (búsquedas Pro ilimitadas, modelos premium, Learn Mode) con precio de descuento para estudiantes y docentes verificados.',
    category: 'AI', offer_type: 'discount', countries: ['GLOBAL'], requires_card: true,
    requirements: ['Ser estudiante o docente verificado', 'Superar la verificación de SheerID'],
    steps: ['Crea o abre tu cuenta de Perplexity', 'En "Upgrade", elige el plan Education', 'Pulsa "Verify as student" y completa SheerID'],
    verification: 'SheerID', source_url: 'https://www.perplexity.ai/help-center/en/articles/12590157-what-is-education-pro', confidence: 88},
  {...base,
    slug: 'microsoft-365-personal-estudiantes', brand: 'Microsoft', title: 'Microsoft 365 Personal — 50 % de descuento para universitarios',
    summary: 'Incluye Copilot en las apps de Office; oferta de la tienda de EE. UU.',
    benefit: '50 % de descuento en Microsoft 365 Personal con Copilot, 1 TB en OneDrive y apps de Office al verificar que estás en la universidad.',
    category: 'AI', offer_type: 'discount', countries: ['US'], requires_card: true,
    requirements: ['Ser estudiante universitario', 'Usar una cuenta Microsoft personal (no la EDU) y verificar con tu correo EDU'],
    steps: ['Inicia sesión con tu cuenta Microsoft personal', 'Añade tu método de pago', 'Verifica con tu correo EDU u otra prueba de estudios'],
    verification: 'Educational email', source_url: 'https://www.microsoft.com/en-us/microsoft-365/college-student-pricing', confidence: 88},
];

// Aplica los cambios a la lista curada (en memoria) para que applyCatalogCorrections los lleve a la base.
export function applyAiPatches(offers) {
  for (const [slug, patch] of Object.entries(AI_PATCHES)) {
    const o = offers.find((x) => x.slug === slug);
    if (o) Object.assign(o, patch, {catalog_revision: REV, verified_at: TODAY});
  }
}
