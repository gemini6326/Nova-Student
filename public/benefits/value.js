// Valor en dinero de las ofertas y "Joyas ocultas".
// Solo se usan cifras que la propia ficha (y su fuente oficial) declara; nada se estima a ojo.
// usd = valor total del beneficio tal como lo describe la oferta, o precio oficial de lista × duración (con src).

export const VALUES = {
  // Precio oficial de lista × duración de la oferta (páginas de precios leídas el 29-10-2026).
  'sentry-estudiantes': {usd: 312, label: '≈ USD 312 al año', src: 'https://sentry.io/pricing/'},
  'frontend-masters-estudiantes': {usd: 195, label: '≈ USD 195 (6 meses)', src: 'https://frontendmasters.com/join/'},
  'figma-education': {usd: 192, label: '≈ USD 192 al año', src: 'https://www.figma.com/pricing/'},
  'miro-estudiantes': {usd: 192, label: '≈ USD 192 (2 años)', src: 'https://miro.com/pricing/'},
  'asana-estudiantes': {usd: 132, label: '≈ USD 132 al año', src: 'https://asana.com/pricing'},
  'github-copilot-free': {usd: 120, label: '≈ USD 120 al año', src: 'https://github.com/features/copilot/plans'},
  'notion-student-free': {usd: 120, label: '≈ USD 120 al año', src: 'https://www.notion.com/pricing'},
  'zed-estudiantes': {usd: 120, label: '≈ USD 120 al año', src: 'https://zed.dev/pricing'},
  'lucid-software-estudiantes': {usd: 108, label: '≈ USD 108 al año', src: 'https://lucid.co/pricing'},
  'cloudflare-estudiantes': {usd: 60, label: '≈ USD 60 al año', src: 'https://developers.cloudflare.com/workers/platform/pricing/'},
  'new-relic-estudiantes': {usd: 3600, label: '≈ USD 300 al mes'},
  'altium-designer-estudiantes': {usd: 1990, label: 'hasta USD 1990'},
  'aws-builder-center-estudiantes': {usd: 579, label: 'hasta USD 579'},
  'heroku-student': {usd: 312, label: 'USD 13 al mes × 24'},
  'appwrite-estudiantes': {usd: 300, label: 'USD 300 al año'},
  'requestly-estudiantes': {usd: 270, label: 'USD 270'},
  'dbeaver-estudiantes': {usd: 255, label: 'USD 255 al año'},
  'termius-estudiantes': {usd: 240, label: 'USD 240 al año'},
  'clerk-estudiantes': {usd: 240, label: 'USD 240 al año'},
  'v0-estudiantes': {usd: 240, label: 'USD 20 al mes × 12'},
  'ibm-cloud-estudiantes': {usd: 200, label: 'USD 200 en créditos'},
  'linear-estudiantes': {usd: 192, label: 'hasta USD 192'},
  'boot-dev-estudiantes': {usd: 177, label: 'USD 177'},
  'beautiful-ai-estudiantes': {usd: 174, label: 'USD 174'},
  'granola-estudiantes': {usd: 168, label: 'USD 168'},
  'cargo-estudiantes': {usd: 168, label: 'USD 14 al mes × 12'},
  'tella-estudiantes': {usd: 156, label: 'USD 156'},
  'sketch-estudiantes': {usd: 144, label: 'USD 144'},
  'framer-estudiantes': {usd: 120, label: 'USD 120 al año'},
  'azure-for-students': {usd: 100, label: 'USD 100 en créditos'},
  'elevenreader-estudiantes': {usd: 99, label: 'USD 99'},
  'the-economist-estudiantes': {usd: 99, label: 'USD 99'},
  'craft-estudiantes': {usd: 96, label: 'USD 96 al año'},
  'dashlane-estudiantes': {usd: 65, label: 'USD 65'},
  'ilovepdf-estudiantes': {usd: 60, label: 'USD 60'},
  'mongodb-students': {usd: 50, label: 'USD 50 en créditos'},
  '1password-student': {usd: 36, label: 'USD 36'},
  'exa-ai-estudiantes': {usd: 20, label: 'USD 20 de crédito'},
  'thunder-compute-estudiantes': {usd: 20, label: 'USD 20 en créditos'},
};

// Ofertas poco conocidas con mucho valor real. "why" explica en una línea por qué son oro.
export const GEMS = [
  {slug: 'new-relic-estudiantes', why: 'Observabilidad que las empresas pagan cada mes, gratis mientras estudies.'},
  {slug: 'altium-designer-estudiantes', why: 'Diseño de circuitos de nivel industrial, gratis un año.'},
  {slug: 'google-ai-pro-estudiantes', why: 'Un año del plan de IA de Google sin pagar.'},
  {slug: 'cloudflare-estudiantes', why: 'Despliega apps en la red de Cloudflare con el plan de pago, gratis.'},
  {slug: 'sentry-estudiantes', why: 'El monitor de errores que usan los equipos profesionales, renovable.'},
  {slug: 'frontend-masters-estudiantes', why: 'Seis meses de los cursos de frontend más respetados.'},
  {slug: 'think-cell-estudiantes', why: 'La herramienta de gráficos de las consultoras, gratis 12 meses.'},
  {slug: 'aws-builder-center-estudiantes', why: 'Formación, créditos y voucher de examen de AWS.'},
  {slug: 'dbeaver-estudiantes', why: 'Licencia PRO del cliente de bases de datos favorito de los devs.'},
  {slug: 'clerk-estudiantes', why: 'Autenticación de nivel producción para tus proyectos, sin costo.'},
  {slug: 'appwrite-estudiantes', why: 'Backend completo en plan Pro hasta que te gradúes.'},
  {slug: 'granola-estudiantes', why: 'Notas de reuniones con IA en plan Business por un año.'},
  {slug: 'ansys-estudiantes', why: 'Simulación de ingeniería profesional, gratis para estudiantes.'},
  {slug: 'v0-estudiantes', why: 'Créditos mensuales para crear interfaces con IA durante un año.'},
];

export const valueOf = (offer) => VALUES[offer?.slug] || null;
export const usd = (n) => 'USD ' + Math.round(n).toLocaleString('es-CO');
export function totalValue(offers) {
  return (offers || []).reduce((sum, o) => sum + (VALUES[o.slug]?.usd || 0), 0);
}
export function gemsIn(offers) {
  const bySlug = new Map((offers || []).map((o) => [o.slug, o]));
  return GEMS.map((g) => (bySlug.has(g.slug) ? {...g, offer: bySlug.get(g.slug)} : null)).filter(Boolean);
}
