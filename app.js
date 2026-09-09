/* ═══════════════════════════════════════════════════════════════
   150 Mapas Visuales de Skincare Profesional — LP (ES-LATAM)

   ►►► CHECKOUT ÚNICO DE HOTMART ◄◄◄
   ═══════════════════════════════════════════════════════════════ */
const CHECKOUT = { completo: 'https://pay.hotmart.com/Y107524126E?off=dp1kjcai&checkoutMode=10' };

/* Versión de las imágenes. SÚBELA cada vez que reemplaces un archivo de
   assets/img/ conservando el mismo nombre; si no, el navegador sigue
   mostrando la imagen vieja que tiene en cache. */
const IMG_V = '12';

/* Contador de la barra de urgencia */
const CONTADOR = {
  minutos: 15,      // duración de la cuenta regresiva
  persistir: true,  // mantiene el tiempo entre recargas (no se reinicia al refrescar)
  reiniciar: true   // al llegar a 00:00 vuelve a empezar. false = se queda en 00:00
};

/* ─── Íconos (lucide) ─────────────────────────────────────────── */
const I = {
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  contrast: '<circle cx="12" cy="12" r="10"/><path d="M12 18a6 6 0 0 0 0-12v12z"/>',
  droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  circleDot: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2.5"/>',
  palette: '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
  hourglass: '<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',
  flask: '<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
  tube: '<path d="M14.5 2v17.5a2.5 2.5 0 0 1-5 0V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/>',
  sparkles: '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  activity: '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
  syringe: '<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>',
  clipboard: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  listChecks: '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
  cap: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 20.99a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.774a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>'
};
const svg = (p, cls, sw = 2, fill = 'none') =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${fill}" stroke="${fill === 'none' ? 'currentColor' : 'none'}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" class="${cls}" aria-hidden="true">${p}</svg>`;

/* ─── Datos ───────────────────────────────────────────────────── */
const MODULOS = [
  ['Fundamentos de la Piel', 'Estructura de la piel, epidermis, dermis, hipodermis, barrera cutánea, pH, renovación celular, microbioma y estructuras anexas.', I.layers],
  ['Tipos y Condiciones de Piel', 'Piel normal, seca, grasa, mixta, sensible, sensibilizada y valoración de las características de la piel.', I.contrast],
  ['Hidratación y Barrera Cutánea', 'Deshidratación, pérdida de agua, ceramidas, lípidos, humectantes, emolientes y recuperación de la barrera.', I.droplet],
  ['Acné y Oleosidad', 'Formación del acné, tipos de lesión, comedones, inflamación, exceso de sebo, acné adulto y cuidados relacionados.', I.circleDot],
  ['Manchas y Pigmentación', 'Melanina, melasma, hiperpigmentación posinflamatoria, manchas solares y fotoprotección.', I.palette],
  ['Envejecimiento Cutáneo', 'Colágeno, elastina, arrugas, flacidez, fotoenvejecimiento, glicación y factores externos.', I.hourglass],
  ['Activos Cosméticos I', 'Vitamina C, ácido hialurónico, niacinamida, retinol, salicílico, glicólico y otros activos esenciales.', I.flask],
  ['Activos Cosméticos II', 'Péptidos, pantenol, ceramidas, centella, antioxidantes, ácido tranexámico y combinaciones de activos.', I.tube],
  ['Limpieza, Exfoliación y Rutina', 'Limpieza facial, doble limpieza, exfoliación, sérums, cremas y orden de aplicación.', I.sparkles],
  ['Fotoprotección', 'FPS, UVA, UVB, luz visible, tipos de filtro, cantidad y reaplicación.', I.sun],
  ['Alteraciones Comunes de la Piel', 'Rosácea, enrojecimiento, dermatitis, sensibilidad, poros, milios, ojeras y opacidad.', I.activity],
  ['Procedimientos Estéticos Faciales', 'Limpieza facial profunda, peelings, microagujas, LED, radiofrecuencia y otros procedimientos.', I.syringe],
  ['Evaluación y Anamnesis', 'Observación de la piel, hábitos, contraindicaciones, objetivos y razonamiento inicial de la atención.', I.clipboard],
  ['Protocolos y Cuidados Profesionales', 'Estructuras visuales de protocolos para acné, hidratación, manchas, rejuvenecimiento y piel sensible.', I.listChecks],
  ['Educación y Autoridad Profesional', 'Mapas pensados para explicar skincare, activos, acné, manchas y home care de manera simple para la clienta.', I.cap]
];

const PUBLICO = [
  'Esteticistas', 'Facialistas', 'Cosmetólogas', 'Profesionales de skincare',
  'Propietarias de clínicas de estética',
  'Estudiantes y profesionales que quieren reforzar conocimientos visuales',
  'Profesionales que necesitan explicar tratamientos y cuidados a sus clientas',
  'Creadoras de contenido del nicho de skincare y estética'
];


const BONOS = [
  ['Checklist Visual de Evaluación de la Piel', 'Un material práctico para organizar los principales puntos que deben observarse durante una valoración estética.', 'Ten una guía de consulta rápida para no olvidar puntos importantes.', 12],
  ['Diccionario de Activos Cosméticos', 'Una guía de consulta con los activos más comunes en el skincare y sus principales características.', 'Deja de perderte entre nombres, ácidos e ingredientes.', 15],
  ['Guía Visual de Cuidados en Casa', 'Estructuras visuales para explicar limpieza, hidratación, tratamientos y fotoprotección a tus clientas.', 'Facilita la orientación de cuidados en casa.', 12],
  ['50 Ideas de Contenido para Esteticistas', 'Sugerencias de temas educativos para transformar conocimiento profesional en contenido para redes sociales.', 'Ten ideas listas para producir contenido y fortalecer tu autoridad.', 15],
  ['Guía de Comunicación con la Clienta', 'Modelos de explicación simples para abordar acné, manchas, hidratación, sensibilidad, envejecimiento y rutina de skincare.', 'Explica mejor sin convertir la atención en una clase complicada.', 12]
];




const PLAN_COMPLETO = [
  '<strong>150 Mapas Visuales</strong> de Skincare Profesional',
  '15 módulos completos',
  'Bono 1 — Checklist Visual de Evaluación',
  'Bono 2 — Diccionario de Activos',
  'Bono 3 — Guía Visual de Cuidados en Casa',
  'Bono 4 — 50 Ideas de Contenido',
  'Bono 5 — Guía de Comunicación con la Clienta',
  'Acceso inmediato',
  'Acceso de por vida'
];

const FAQ = [
  ['¿El producto es físico?', 'No. El producto es 100% digital y no se enviará ningún material físico.'],
  ['¿Cómo lo voy a recibir?', 'Después de la confirmación del pago, recibirás las instrucciones para acceder al material digital.'],
  ['¿Cuántos mapas están incluidos?', 'El producto principal tiene 150 Mapas Visuales de Skincare Profesional, organizados en 15 módulos.'],
  ['¿Puedo acceder desde el celular?', 'Sí. El contenido se puede consultar en celular, tablet o computadora, y también se puede imprimir.'],
  ['¿Necesito ser esteticista?', 'El material fue desarrollado principalmente para profesionales y estudiantes de estética, skincare, cosmetología y áreas relacionadas.'],
  ['¿Puedo usar los mapas para explicarles temas a mis clientas?', 'El material puede utilizarse como apoyo educativo durante la atención, respetando los términos de uso de la licencia adquirida.'],
  ['¿Puedo publicar o revender los archivos?', 'No. Los archivos están protegidos por derechos de autor y no pueden revenderse, redistribuirse ni ponerse a disposición de terceros sin autorización.'],
  ['¿Los mapas sustituyen la formación profesional?', 'No. El material es complementario y educativo.'],
  ['¿Sirve para diagnóstico?', 'No. Los mapas no sustituyen la valoración profesional individualizada, el diagnóstico médico ni el seguimiento dermatológico.']
];

/* ─── Render ──────────────────────────────────────────────────── */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const mapaCard = n => {
  const id = String(n).padStart(2, '0');
  return `<figure class="w-[260px] sm:w-[300px] shrink-0 card-cream p-2"><div class="aspect-[1/1.414]"><div class="relative h-full w-full overflow-hidden rounded-xl bg-[#fdfaf5]"><picture class="contents"><source type="image/avif" srcset="assets/img/mapa-${id}.avif?v=${IMG_V}"><img src="assets/img/mapa-${id}.webp?v=${IMG_V}" alt="Mapa Visual ${id}" loading="lazy" decoding="async" class="absolute inset-0 h-full w-full object-contain object-center"></picture></div></div></figure>`;
};

// Marquees: dos mitades idénticas, cada una con su gap final, para que
// el desplazamiento de -50% cierre el loop sin saltos.
const fillMarquee = (el, nums) => {
  el.classList.remove('gap-5');
  const mitad = `<div class="flex gap-5 pr-5 shrink-0">${nums.map(mapaCard).join('')}</div>`;
  el.innerHTML = mitad + mitad;
};

/* Todos los carruseles a la MISMA velocidad (px/s), tengan la cantidad de
   tarjetas que tengan. Con una duración fija, una fila de 6 se ve más lenta
   que una de 7; acá la duración sale del ancho real del riel.            */
const VELOCIDAD = 100;   // px por segundo. Subir = más rápido.
function igualarVelocidad() {
  $$('[data-marquee], [data-testimonios]').forEach(el => {
    const mitad = el.children[0];
    if (!mitad) return;
    const ancho = mitad.getBoundingClientRect().width;
    if (ancho > 0) el.style.animationDuration = (ancho / VELOCIDAD).toFixed(2) + 's';
  });
}

const ord = n => String(n).padStart(2, '0');

function render() {
  // Marquees
  const mq = $$('[data-marquee]');
  // Solo los mapas que ya están en español. Cuando agregues más, sube el
  // número: los archivos son assets/img/mapa-NN.avif + .webp
  fillMarquee(mq[0], [8, 9, 10, 11, 12, 13, 14]);        // Vista previa
  fillMarquee(mq[1], [15, 16, 17, 18, 19, 20]);         // Galería fila 1: acné, grasa, pigmentación
  fillMarquee(mq[2], [21, 22, 23, 24, 25, 26]);         // Galería fila 2: envejecimiento, fotoprotección, activos

  // Módulos
  $('[data-modulos]').innerHTML = MODULOS.map(([t, d, ic], i) => `
    <div class="card-cream p-6 flex flex-col h-full">
      <picture class="contents"><source type="image/avif" srcset="assets/img/mod-${ord(i + 1)}.avif?v=${IMG_V}"><img src="assets/img/mod-${ord(i + 1)}.webp?v=${IMG_V}" alt="${t}" loading="lazy" decoding="async" class="mb-4 w-full h-auto rounded-xl object-contain"></picture>
      <div class="flex items-center gap-3">
        <span class="text-xs font-mono font-bold text-accent tracking-widest">${ord(i + 1)}</span>
        <span class="h-px flex-1 bg-accent/20"></span>
        <span class="grid h-10 w-10 place-items-center rounded-full bg-accent/10 text-accent">${svg(ic, 'h-5 w-5')}</span>
      </div>
      <h3 class="mt-4 text-xl leading-tight">${t}</h3>
      <p class="mt-2 text-sm text-primary/70">${d}</p>
    </div>`).join('');

  // Para quién es
  $('[data-publico]').innerHTML = PUBLICO.map(t => `
    <li class="card-cream p-5 flex items-start gap-4">
      <span class="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-check text-white">${svg(I.check, 'h-3.5 w-3.5', 3)}</span>
      <span class="text-[15px]">${t}</span>
    </li>`).join('');

  // Bonos
  $('[data-bonos]').innerHTML = BONOS.map(([t, d, k, v], i) => `
    <div class="card-cream overflow-hidden flex flex-col">
      <div class="overflow-hidden bg-background aspect-[4/5]"><picture class="contents"><source type="image/avif" srcset="assets/img/bono-${ord(i + 1)}.avif?v=${IMG_V}"><img src="assets/img/bono-${ord(i + 1)}.webp?v=${IMG_V}" alt="${t}" loading="lazy" decoding="async" class="h-full w-full object-contain"></picture></div>
      <div class="p-6 flex-1 flex flex-col">
        <h3 class="text-xl leading-tight">${t}</h3>
        <p class="mt-2 text-sm text-primary/70 flex-1">${d}</p>
        <p class="mt-4 text-xs uppercase tracking-widest font-bold" style="color:#b98c80">${k}</p>
        <p class="mt-4 flex items-baseline gap-2 text-[15px]">
          <span class="text-primary/60">antes <span class="text-highlight font-semibold line-through">$${v}</span></span>
          <span aria-hidden="true" class="text-primary/40">&rarr;</span>
          <span class="text-[17px] font-bold text-offerbar" style="font-family:var(--font-display)">GRATIS</span>
        </p>
      </div>
    </div>`).join('');


  // Total de los bonos, debajo de todos
  const totalBonos = BONOS.reduce((a, b) => a + b[3], 0);
  const cajaTotal = $('[data-bonos-total]');
  if (cajaTotal) cajaTotal.innerHTML =
    `Total en bonos: <span class="text-highlight font-semibold line-through">$${totalBonos}</span> — hoy entran <strong class="text-offerbar font-bold">GRATIS</strong>.`;

  // Testimonios: capturas de pantalla. Las 5 tienen exactamente el mismo
  // formato (600x1066), así que quedan a la misma altura sin recortar.
  const card = n => `
    <figure class="w-[300px] shrink-0 overflow-hidden rounded-2xl border border-slate-blue/20 bg-background shadow-[0_20px_46px_-32px_rgba(7,27,51,.35)]">
      <picture class="contents">
        <source type="image/avif" srcset="assets/img/depo-${n}.avif?v=${IMG_V}">
        <img src="assets/img/depo-${n}.webp?v=${IMG_V}" alt="Testimonio de una profesional" loading="lazy" decoding="async" class="block w-full h-auto">
      </picture>
    </figure>`;
  const elT = $('[data-testimonios]');
  elT.classList.remove('gap-5');
  const mitadT = `<div class="flex gap-5 pr-5 shrink-0 items-stretch">${['01','02','03','04','05'].map(card).join('')}</div>`;
  elT.innerHTML = mitadT + mitadT;

  // Plan Completo
  $('[data-plan-completo]').innerHTML = PLAN_COMPLETO.map(t =>
    `<li class="flex items-start gap-3 text-[14px] leading-relaxed text-primary/90"><span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-white">${svg(I.check, 'h-3 w-3', 3)}</span><span>${t}</span></li>`
  ).join('');

  // FAQ
  $('[data-faq]').innerHTML = FAQ.map(([q, a], i) => `
    <div class="card-cream overflow-hidden">
      <button type="button" class="flex w-full items-center justify-between gap-4 p-5 text-left cursor-pointer" aria-expanded="false" aria-controls="faq-p-${i}">
        <span class="font-bold text-primary">${q}</span>
        <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/10 text-accent transition-transform">${svg(I.chevron, 'h-4 w-4')}</span>
      </button>
      <div id="faq-p-${i}" class="grid transition-all duration-300 grid-rows-[0fr] opacity-0">
        <div class="overflow-hidden"><p class="px-5 pb-5 text-sm text-primary/75 leading-relaxed">${a}</p></div>
      </div>
    </div>`).join('');

  // Links de checkout
  $$('[data-checkout]').forEach(a => { a.href = CHECKOUT[a.dataset.checkout] || '#'; });
}

/* ─── Meta Pixel: intención de compra ─────────────────────────────
   Sin este evento el pixel solo registra visitas y Meta puede optimizar
   por clic, no por conversión. Se dispara al pulsar cualquier botón que
   lleve al checkout, con el valor de la oferta para que el algoritmo
   pueda optimizar también por retorno.                              */
const OFERTAS = { completo: { valor: 10.00, nombre: 'Plan Completo' } };
function pixelIntencion() {
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-checkout]');
    if (!a || typeof fbq !== 'function') return;
    const o = OFERTAS[a.dataset.checkout];
    if (!o) return;
    fbq('track', 'InitiateCheckout', {
      value: o.valor,
      currency: 'USD',
      content_name: o.nombre,
      content_type: 'product',
      content_ids: [a.dataset.checkout]
    });
  });
}

/* ─── Scroll suave propio ─────────────────────────────────────────
   El nativo (scroll-behavior:smooth) tarda decenas de segundos —o no
   arranca— cuando el destino está a miles de px, como pasa al ir del
   hero a la oferta. Este va siempre en ~750 ms, sea cual sea la
   distancia.                                                        */
function scrollSuave() {
  const DUR = 750;
  const suave = t => t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;  // easeInOutCubic
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const destino = document.getElementById(id);
    if (!destino) return;

    e.preventDefault();
    const fin = destino.getBoundingClientRect().top + window.scrollY;
    const tope = document.documentElement.scrollHeight - window.innerHeight;
    const meta = Math.max(0, Math.min(fin, tope));

    if (reduce) { window.scrollTo(0, meta); history.replaceState(null, '', '#' + id); return; }

    const ini = window.scrollY, delta = meta - ini, t0 = performance.now();
    const paso = ahora => {
      const t = Math.min(1, (ahora - t0) / DUR);
      window.scrollTo(0, ini + delta * suave(t));
      if (t < 1) requestAnimationFrame(paso);
      else history.replaceState(null, '', '#' + id);
    };
    requestAnimationFrame(paso);
  });
}

/* ─── Interacciones ───────────────────────────────────────────── */
function wire() {
  // Acordeón FAQ
  $('[data-faq]').addEventListener('click', e => {
    const btn = e.target.closest('button[aria-controls]');
    if (!btn) return;
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    btn.querySelector('span:last-child').classList.toggle('rotate-90', !open);
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    panel.classList.toggle('grid-rows-[1fr]', !open);
    panel.classList.toggle('opacity-100', !open);
    panel.classList.toggle('grid-rows-[0fr]', open);
    panel.classList.toggle('opacity-0', open);
  });

  // Pausa los marquees mientras no son visibles (ahorra batería en móvil)
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(en => {
      en.target.style.animationPlayState = en.isIntersecting ? 'running' : 'paused';
    }), { rootMargin: '200px' });
    $$('.animate-marquee, .animate-marquee-reverse').forEach(el => io.observe(el));
  }
}

/* ─── Cuenta regresiva de la barra de urgencia ────────────────
   El tiempo se calcula contra una marca de fin (no descontando de
   a un segundo), así que sigue siendo exacto aunque el navegador
   frene el intervalo con la pestaña en segundo plano.           */
function contador() {
  // Todos los relojes de la página (barra + sección de la oferta) leen el
  // MISMO límite: mostrar horas distintas en cada uno destruye la urgencia.
  const minutos = $$('[data-cd-m], [data-cd-box-m]');
  const segundos = $$('[data-cd-s], [data-cd-box-s]');
  if (!minutos.length) return;
  const CLAVE = 'lp150_fin_oferta';
  const DUR = CONTADOR.minutos * 60000;
  const nuevoFin = () => Date.now() + DUR;

  let fin;
  if (CONTADOR.persistir) {
    try {
      const guardado = parseInt(localStorage.getItem(CLAVE), 10);
      fin = Number.isFinite(guardado) ? guardado : nuevoFin();
      localStorage.setItem(CLAVE, String(fin));
    } catch { fin = nuevoFin(); }        // modo privado / storage bloqueado
  } else {
    fin = nuevoFin();
  }

  const pintar = () => {
    let resta = fin - Date.now();
    if (resta <= 0) {
      if (CONTADOR.reiniciar) {
        fin = nuevoFin();
        try { localStorage.setItem(CLAVE, String(fin)); } catch {}
        resta = DUR;
      } else {
        resta = 0;
      }
    }
    const t = Math.floor(resta / 1000);
    const mm = String(Math.floor(t / 60)).padStart(2, '0');
    const ss = String(t % 60).padStart(2, '0');
    minutos.forEach(e => { e.textContent = mm; });
    segundos.forEach(e => { e.textContent = ss; });
  };

  pintar();
  setInterval(pintar, 1000);
  // al volver a la pestaña, repinta enseguida sin esperar el próximo tick
  document.addEventListener('visibilitychange', () => { if (!document.hidden) pintar(); });
}

render();
wire();
contador();
scrollSuave();
igualarVelocidad();
pixelIntencion();
addEventListener('resize', () => { clearTimeout(window.__mqT); window.__mqT = setTimeout(igualarVelocidad, 200); });
