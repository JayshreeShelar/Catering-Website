/* ==========================================================================
   MAIN.JS - shared components + behaviour for every page.
   Reads all content from window.SITE (assets/js/config.js).
   Sections: 1 helpers | 2 icons | 3 layout (header/footer/floating) |
             4 reusable blocks | 5 content renderers | 6 gallery | 7 forms | 8 init
   ========================================================================== */
(function () {
  'use strict';
  const S = window.SITE, B = S.business, C = S.contact;
  const body = document.body;
  const PAGE = body.dataset.page || 'home';

  /* ------------------------------ 1. HELPERS ------------------------------ */
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const get = (path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), S);
  const years = new Date().getFullYear() - Number(B.established || new Date().getFullYear());
  const waLink = (text) => `https://wa.me/${String(C.whatsapp).replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;
  const mount = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; return el; };

  /* ------------------------------ 2. ICONS -------------------------------- */
  const ICONS = {
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    whatsapp: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.4-2-1-.8.7a3.6 3.6 0 0 1-1.7-1.7l.7-.8-1-2z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    youtube: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
    star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
    close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    cake: '<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20M7 8v3M12 8v3M17 8v3M7 4h.01M12 4h.01M17 4h.01"/>',
    gem: '<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    chef: '<path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><path d="M6 17h12"/>',
    sparkle: '<path d="M12 3l1.9 5.8L20 10.7l-5.4 3.9L16.2 21 12 17.3 7.8 21l1.6-6.4L4 10.7l6.1-1.9z"/>',
    zoom: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/>',
    chevL: '<path d="m15 18-6-6 6-6"/>',
    chevR: '<path d="m9 18 6-6-6-6"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>'
  };
  const icon = (name, cls = 'w-5 h-5') =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;

  /* --------------------------- 3. LAYOUT PIECES --------------------------- */
  const logo = (cls = '') => `
    <a href="index.html" class="flex items-center gap-3 ${cls}" aria-label="${B.name} - Home">
      <img src="${B.logo}" alt="${B.name} logo" class="w-9 h-9 object-contain shrink-0">
      <span class="leading-none">
        <span class="block font-display text-[1.25rem] font-semibold tracking-wide">${B.name}</span>
        <span class="block mt-0.5 text-[.55rem] uppercase tracking-[.3em] text-gold-light">${B.descriptor}</span>
      </span>
    </a>`;

  const navLinks = (extra = '') => S.nav.map(n => {
    const active = n.page === PAGE;
    return `<a href="${n.href}" ${active ? 'aria-current="page"' : ''}
      class="relative py-1 text-[.95rem] transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-gold after:transition-all after:duration-300 ${active ? 'text-gold-light after:w-full' : 'text-white/85 hover:text-gold-light after:w-0 hover:after:w-full'} ${extra}">${n.label}</a>`;
  }).join('');

  function renderHeader() {
    mount('site-header', `
    <header id="hdr" class="fixed inset-x-0 top-0 z-50 py-2 sm:py-3 animate-headerIn">
      <div class="mx-auto max-w-7xl px-3 sm:px-6">
        <div id="hdr-bar" class="glass-dark !rounded-full flex items-center justify-between gap-4 pl-4 pr-2 py-1.5 transition-all duration-500">
          ${logo('text-white')}
          <nav class="hidden lg:flex items-center gap-8" aria-label="Main navigation">${navLinks()}</nav>
          <div class="flex items-center gap-2">
            <a href="tel:${C.phoneRaw}" class="hidden xl:inline-flex btn btn-glass !py-2" data-link="call-label">${icon('phone', 'w-4 h-4')}<span>Call Now</span></a>
            <a href="contact.html#enquiry" class="hidden sm:inline-flex btn btn-gold !py-2">Get a Quote</a>
            <button id="menu-btn" class="lg:hidden w-11 h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
              <span data-open>${icon('menu', 'w-6 h-6')}</span><span data-close class="hidden">${icon('close', 'w-6 h-6')}</span>
            </button>
          </div>
        </div>
        <div id="mobile-menu" class="lg:hidden hidden mt-2">
          <div class="glass-dark !bg-forest-deep/95 p-5 animate-fadeUp">
            <nav class="flex flex-col" aria-label="Mobile navigation">
              ${S.nav.map(n => `<a href="${n.href}" class="flex items-center justify-between py-3.5 border-b border-white/10 text-lg font-display ${n.page === PAGE ? 'text-gold-light' : 'text-white/90'}">${n.label}${icon('arrow', 'w-4 h-4 opacity-60')}</a>`).join('')}
            </nav>
            <div class="grid grid-cols-2 gap-3 mt-5">
              <a href="tel:${C.phoneRaw}" class="btn btn-glass">${icon('phone', 'w-4 h-4')} Call Now</a>
              <a href="${waLink(S.whatsappMessages.general)}" target="_blank" rel="noopener" class="btn btn-glass">${icon('whatsapp', 'w-4 h-4')} WhatsApp</a>
              <a href="contact.html#enquiry" class="btn btn-gold col-span-2">Get a Quote</a>
            </div>
          </div>
        </div>
      </div>
    </header>`);

    const btn = $('#menu-btn'), menu = $('#mobile-menu'), bar = $('#hdr-bar');
    const setMenu = (open) => {
      menu.classList.toggle('hidden', !open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      $('[data-open]', btn).classList.toggle('hidden', open);
      $('[data-close]', btn).classList.toggle('hidden', !open);
    };
    btn.addEventListener('click', () => setMenu(menu.classList.contains('hidden')));
    $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', () => { if (window.innerWidth >= 1024) setMenu(false); });
    const onScroll = () => bar.classList.toggle('!bg-forest-deep/80', window.scrollY > 30);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  }

  function renderFooter() {
    mount('site-footer', `
    <footer class="relative mt-10 bg-forest-deep text-white/75 overflow-hidden">
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      <div class="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-sage/30 blur-3xl"></div>
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 pt-8 pb-4">
        <div class="grid grid-cols-2 gap-x-5 gap-y-6 sm:gap-x-6 lg:grid-cols-[1.4fr_.7fr_1.3fr_1fr]">
          <div class="col-span-2 sm:col-span-1">
            ${logo('text-white')}
            <p class="mt-3 text-sm leading-relaxed max-w-xs">${B.intro}</p>
            <div class="mt-3 flex gap-2.5">${socialIcons('w-9 h-9')}</div>
          </div>
          <div>
            <h4 class="font-display text-xl text-white">Quick Links</h4>
            <ul class="mt-3 space-y-1.5 text-sm">${S.nav.map(n => `<li><a class="hover:text-gold-light hover:pl-2 transition-all" href="${n.href}">${n.label}</a></li>`).join('')}</ul>
          </div>
          <div class="col-span-2 order-4 sm:col-span-1 sm:order-3">
            <h4 class="font-display text-xl text-white">Contact</h4>
            <ul class="mt-3 space-y-2 text-sm">
              <li class="flex gap-3">${icon('phone', 'w-4 h-4 mt-0.5 text-gold shrink-0')}<a class="hover:text-gold-light" href="tel:${C.phoneRaw}">${C.phone}</a></li>
              <li class="flex gap-3">${icon('mail', 'w-4 h-4 mt-0.5 text-gold shrink-0')}<a class="hover:text-gold-light break-all" href="mailto:${C.email}">${C.email}</a></li>
              <li class="flex gap-3">${icon('pin', 'w-4 h-4 mt-0.5 text-gold shrink-0')}<span>${C.address}</span></li>
            </ul>
          </div>
          <div class="order-3 sm:order-4">
            <h4 class="font-display text-xl text-white">Working Hours</h4>
            <ul class="mt-3 space-y-2 text-sm">${C.hours.map(h => `<li><span class="block text-white/90">${h.day}</span><span class="text-gold-light">${h.time}</span></li>`).join('')}</ul>
          </div>
        </div>
        <div class="mt-6 pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-white/55">
          <p>&copy; ${new Date().getFullYear()} ${B.fullName}. All rights reserved.</p>
          <p class="font-script text-xl text-gold-light/90 leading-none">${B.script}</p>
        </div>
      </div>
    </footer>`);
  }

  function socialIcons(size = 'w-10 h-10') {
    return S.social.map(s => `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}" title="${s.name}"
      class="${size} rounded-full flex items-center justify-center border border-white/25 bg-white/10 text-white hover:bg-gold hover:border-gold hover:text-forest-deep hover:-translate-y-1 transition-all duration-300">${icon(s.icon, 'w-[1.05rem] h-[1.05rem]')}</a>`).join('');
  }

  function renderFloating() {
    const el = document.createElement('div');
    el.className = 'fixed right-3 bottom-3 sm:right-5 sm:bottom-5 z-40 flex flex-col items-end gap-3';
    const mk = (href, ic, label, cls, extra = '') => `
      <a href="${href}" ${extra} aria-label="${label}" class="group flex items-center rounded-full shadow-glass-lg ${cls} transition-all duration-300 hover:-translate-y-1">
        <span class="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 group-hover:max-w-[8rem] group-hover:opacity-100 group-hover:pl-4 transition-all duration-300">${label}</span>
        <span class="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">${icon(ic, 'w-6 h-6')}</span>
      </a>`;
    el.innerHTML =
      mk('tel:' + C.phoneRaw, 'phone', 'Call Now', 'bg-gold text-forest-deep') +
      mk(waLink(S.whatsappMessages.general), 'whatsapp', 'WhatsApp', 'bg-sage text-white animate-pulseRing', 'target="_blank" rel="noopener"');
    body.appendChild(el);
    // keep the buttons fixed while scrolling, but stop them above the footer
    const foot = $('#site-footer footer');
    const place = () => {
      if (!foot) return;
      const over = window.innerHeight - foot.getBoundingClientRect().top;
      el.style.transform = over > 0 ? `translateY(${-over}px)` : '';
    };
    place(); window.addEventListener('scroll', place, { passive: true }); window.addEventListener('resize', place);
  }

  function renderBackground() {
    const el = document.createElement('div');
    el.setAttribute('aria-hidden', 'true');
    el.className = 'fixed inset-0 -z-10 overflow-hidden pointer-events-none';
    el.innerHTML = `
      <div class="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-sage/25 blur-3xl animate-drift"></div>
      <div class="absolute top-1/3 -right-48 w-[32rem] h-[32rem] rounded-full bg-gold/20 blur-3xl animate-drift" style="animation-delay:-6s"></div>
      <div class="absolute -bottom-48 left-1/4 w-[34rem] h-[34rem] rounded-full bg-taupe/30 blur-3xl animate-drift" style="animation-delay:-12s"></div>`;
    body.prepend(el);
  }

  /* --------------------------- 4. REUSABLE BLOCKS ------------------------- */
  // <section data-page-hero data-title="" data-sub="" data-image="">
  function renderPageHeroes() {
    $$('[data-page-hero]').forEach(el => {
      const t = el.dataset.title, sub = el.dataset.sub, img = el.dataset.image;
      el.className = 'relative min-h-[100svh] flex items-center overflow-hidden text-white';
      el.innerHTML = `
        <img src="${img}" alt="" class="absolute inset-0 w-full h-full object-cover animate-kenburns motion-reduce:animate-none">
        <div class="absolute inset-0 bg-gradient-to-b from-forest-deep/80 via-forest-deep/45 to-forest-deep/75"></div>
        <div class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-cream to-transparent"></div>
        <div class="relative mx-auto w-full max-w-7xl px-4 sm:px-6 pt-20 pb-16">
          <p class="eyebrow !text-gold-light animate-fadeUp">${B.name}</p>
          <h1 class="mt-3 text-5xl sm:text-6xl lg:text-8xl font-medium animate-fadeUp" style="animation-delay:.1s">${t}</h1>
          <p class="mt-2 font-script text-3xl sm:text-5xl text-gold-light animate-fadeUp" style="animation-delay:.2s">${sub}</p>
          <nav class="mt-5 flex items-center gap-2 text-sm text-white/75 animate-fadeUp" style="animation-delay:.3s" aria-label="Breadcrumb">
            <a href="index.html" class="hover:text-gold-light">Home</a><span class="text-gold">&rsaquo;</span><span>${t}</span>
          </nav>
        </div>
        <a href="#after-hero" data-scroll-cue class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-xs uppercase tracking-[.25em] text-white/80 hover:text-gold-light animate-float" aria-label="Scroll down">Scroll${icon('chevR', 'w-5 h-5 rotate-90')}</a>`;
      const nxt = el.nextElementSibling; if (nxt && !nxt.id) nxt.id = 'after-hero';
      const cue = $('[data-scroll-cue]', el); if (cue) cue.addEventListener('click', e => { e.preventDefault(); (nxt || document.body).scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    });
  }

  // <section data-cta data-title="" data-text="">
  function renderCTAs() {
    $$('[data-cta]').forEach(el => {
      const title = el.dataset.title || 'Planning a Catering Order? Let’s Talk';
      const text = el.dataset.text || 'Tell us what you need and we will prepare a menu and quote tailored to you.';
      el.className = 'mx-auto max-w-7xl px-4 sm:px-6 mt-10';
      el.innerHTML = `
        <div class="relative overflow-hidden shape-leaf shadow-glass-lg" data-reveal="zoom">
          <img src="assets/images/cta-bg.jpg" alt="" class="absolute inset-0 w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-br from-forest-deep/90 via-forest/75 to-forest-deep/85"></div>
          <div class="relative px-6 py-7 md:px-12 md:py-8 text-center text-white">
            <p class="font-script text-2xl text-gold-light">${B.script}</p>
            <h2 class="mt-1 text-3xl sm:text-4xl font-medium">${title}</h2>
            <p class="mt-2 mx-auto max-w-xl text-sm text-white/80">${text}</p>
            <div class="mt-5 flex flex-wrap justify-center gap-3">
              <a href="contact.html#enquiry" class="btn btn-gold">Get a Quote ${icon('arrow', 'w-4 h-4')}</a>
              <a href="${waLink(S.whatsappMessages.general)}" target="_blank" rel="noopener" class="btn btn-glass">${icon('whatsapp', 'w-4 h-4')} WhatsApp Us</a>
              <a href="tel:${C.phoneRaw}" class="btn btn-glass">${icon('phone', 'w-4 h-4')} Call Now</a>
            </div>
          </div>
        </div>`;
    });
  }

  const stars = (n) => `<div class="flex gap-0.5 text-gold" aria-label="${n} out of 5 stars">${Array.from({ length: 5 }, (_, i) =>
    `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="${i < n ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5">${ICONS.star}</svg>`).join('')}</div>`;

  /* --------------------------- 5. CONTENT RENDERERS ----------------------- */
  const FI = (name, extra = '') => `<span class="ic float-ic ${extra}">${icon(name, 'w-5 h-5')}</span>`;
  const delay = (i) => `style="animation-delay:${Math.min(i, 8) * 90}ms"`;

  function bindData() {
    $$('[data-text]').forEach(el => {
      const v = get(el.dataset.text);
      el.textContent = Array.isArray(v) ? v.join(', ') : (v === 'YEARS' ? years : v);
    });
    $$('[data-link]').forEach(a => {
      const t = a.dataset.link.replace('-label', '');
      if (t === 'whatsapp') { a.href = waLink(a.dataset.waText || S.whatsappMessages.general); a.target = '_blank'; a.rel = 'noopener'; }
      if (t === 'call')     a.href = 'tel:' + C.phoneRaw;
      if (t === 'email')    a.href = 'mailto:' + C.email;
      if (t === 'map')      { a.href = C.mapLink; a.target = '_blank'; a.rel = 'noopener'; }
    });
    $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
    $$('[data-years]').forEach(el => el.textContent = years);
    if (body.dataset.title) document.title = `${body.dataset.title} | ${B.fullName}`;
  }

  function renderHome() {
    mount('home-highlights', S.home.highlights.map(h => `
      <div class="pt flex items-center gap-3">
        <span class="pt-dot w-10 h-10 rounded-full bg-sage/15 text-sage-700 flex items-center justify-center shrink-0">${icon(h.icon, 'w-5 h-5')}</span>
        <div><p class="text-sm font-medium text-forest-deep leading-tight">${h.title}</p><p class="text-xs text-charcoal/60 mt-0.5">${h.text}</p></div>
      </div>`).join(''));

    mount('home-badge', S.home.badge.map(b => `<span>${b}</span>`).join('<span class="text-gold">&bull;</span>'));

    mount('home-stats', (S.home.stats || []).map((s, i) => {
      const val = s.value === 'YEARS' ? years : s.value;
      return `<div class="pt text-center px-3 py-1" data-reveal="zoom" ${delay(i)}>
        <p class="font-display text-3xl sm:text-4xl font-semibold text-forest-deep"><span data-count="${val}">0</span>${s.suffix || ''}</p>
        <p class="text-[.68rem] sm:text-xs uppercase tracking-[.16em] text-charcoal/60">${s.label}</p></div>`;
    }).join(''));

    mount('home-services', S.services.map((s, i) => `
      <a href="services.html#${s.id}" class="glass glass-hover group flex flex-col" data-reveal ${delay(i)}>
        <div class="relative h-28 sm:h-32 overflow-hidden rounded-t-[inherit]">
          <img src="${s.image}" alt="${s.title}" loading="lazy" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
          <div class="absolute inset-0 bg-gradient-to-t from-forest-deep/50 to-transparent"></div>
        </div>
        ${FI(s.icon, '!relative !top-auto !left-auto !ml-auto !mr-auto -mt-6')}
        <div class="p-4 pt-2 flex flex-col grow text-center items-center">
          <h3 class="text-xl font-semibold text-forest-deep transition-colors">${s.title}</h3>
          <p class="mt-1.5 text-[.82rem] leading-snug text-charcoal/70 grow">${s.short}</p>
          <span class="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gold-dark group-hover:gap-3.5 transition-all">Learn more ${icon('arrow', 'w-4 h-4')}</span>
        </div>
      </a>`).join(''));

    const picks = S.gallery.filter(g => ['Buffet Setup', 'Meal Boxes'].includes(g.cat)).slice(0, 4);
    mount('home-showcase', picks.map((g, i) => `
      <a href="gallery.html" class="group relative block overflow-hidden shadow-glass hover:shadow-glass-lg transition-all duration-500 ${i % 2 ? 'shape-leaf-alt' : 'shape-leaf'}" data-reveal="zoom" ${delay(i)}>
        <img src="${g.src}" alt="${g.alt}" loading="lazy" class="w-full aspect-[16/10] object-cover transition duration-700 group-hover:scale-110">
        <div class="rise-fx"></div>
        <div class="rise-cap"><p class="text-[.62rem] uppercase tracking-[.25em] text-gold-light">${g.cat}</p><p class="font-display text-lg leading-tight">${g.alt}</p></div>
      </a>`).join(''));
  }

  function renderAbout() {
    mount('about-story', S.about.story.map(p => `<p>${p}</p>`).join(''));
    mount('about-features', S.about.features.map(f => `
      <div class="pt flex items-start gap-3">
        <span class="pt-dot w-10 h-10 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center shrink-0">${icon(f.icon, 'w-5 h-5')}</span>
        <div><p class="font-medium text-forest-deep">${f.title}</p><p class="text-sm text-charcoal/65 mt-0.5">${f.text}</p></div>
      </div>`).join(''));
    mount('about-journey', S.about.journey.map((j, i) => `
      <div class="relative glass-dark dark-hover p-4 pt-7 text-center" data-reveal ${delay(i)}>
        <p class="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-5 py-0.5 rounded-full font-display text-xl bg-gradient-to-br from-gold-light to-gold text-forest-deep border-[3px] border-forest-deep">${j.year}</p>
        <h3 class="text-lg text-white">${j.title}</h3>
        <p class="mt-1 text-[.82rem] text-white/70 leading-snug">${j.text}</p>
      </div>`).join(''));
    mount('about-why', S.about.why.map((w, i) => `
      <div class="glass glass-hover p-4 pt-8 text-center" data-reveal ${delay(i)}>
        ${FI(w.icon)}
        <h3 class="text-xl font-semibold text-forest-deep">${w.title}</h3>
        <p class="mt-0.5 text-[.82rem] leading-snug text-charcoal/70">${w.text}</p>
      </div>`).join(''));
    const team = S.about.team || [];
    const sec = $('#about-team-section'); if (sec) sec.classList.toggle('hidden', !team.length);
    mount('about-team', team.map((m, i) => `
      <div class="group glass glass-hover overflow-hidden text-center" data-reveal="zoom" ${delay(i)}>
        <div class="overflow-hidden aspect-[4/3]"><img src="${m.photo}" alt="${m.name}" loading="lazy" class="w-full h-full object-cover object-top transition duration-700 group-hover:scale-110"></div>
        <div class="px-3 py-2.5"><p class="font-display text-lg font-semibold text-forest-deep leading-tight transition-colors">${m.name}</p><p class="text-xs text-gold-dark">${m.role}</p></div>
      </div>`).join(''));
  }

  function renderServices() {
    mount('services-detail', S.services.map((s, i) => `
      <article id="${s.id}" class="scroll-mt-24 grid ${i % 2 ? 'lg:grid-cols-[1.2fr_.8fr]' : 'lg:grid-cols-[.8fr_1.2fr]'} gap-5 lg:gap-10 items-center">
        <div class="relative ${i % 2 ? 'lg:order-2' : ''}" data-reveal="${i % 2 ? 'right' : 'left'}">
          <div class="absolute -inset-2 shape-leaf-alt border border-gold/50 translate-x-2 translate-y-2 -z-10"></div>
          <div class="glass !p-1.5 group"><div class="relative overflow-hidden shape-leaf-sm"><img src="${s.image}" alt="${s.title}" loading="lazy" class="w-full h-44 lg:h-52 object-cover group-hover:scale-[1.06] transition duration-700"><div class="rise-fx"></div><div class="rise-cap"><p class="text-[.62rem] uppercase tracking-[.25em] text-gold-light">Service ${String(i + 1).padStart(2, '0')}</p><p class="font-display text-lg leading-tight">${s.title}</p></div></div></div>
        </div>
        <div data-reveal="${i % 2 ? 'left' : 'right'}" ${delay(1)}>
          <span class="eyebrow">Service ${String(i + 1).padStart(2, '0')}</span>
          <h2 class="mt-1 section-title">${s.title}</h2>
          <p class="mt-2 text-sm text-charcoal/70 leading-relaxed">${s.text}</p>
          <ul class="mt-3 grid sm:grid-cols-2 gap-x-5 gap-y-1">
            ${s.points.map(p => `<li class="pt flex gap-2.5 text-sm text-charcoal/80"><span class="pt-dot mt-0.5 w-5 h-5 rounded-full bg-gold/20 text-gold-dark flex items-center justify-center shrink-0">${icon('check', 'w-3 h-3')}</span>${p}</li>`).join('')}
          </ul>
          <div class="mt-4 flex flex-wrap gap-3">
            <a href="contact.html?service=${s.id}#enquiry" class="btn btn-sage !py-2">Request a Quote ${icon('arrow', 'w-4 h-4')}</a>
            <a href="${waLink('Hello! I am interested in your ' + s.title + ' service.')}" target="_blank" rel="noopener" class="btn btn-outline !py-2">${icon('whatsapp', 'w-4 h-4')} WhatsApp</a>
          </div>
        </div>
      </article>`).join(''));

    // Menu tabs
    const tabs = S.menu.map((m, i) => `<button type="button" role="tab" data-tab="${m.id}" aria-selected="${i === 0}"
      class="menu-tab inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 hover:-translate-y-0.5 ${i === 0 ? 'bg-forest text-white border-forest shadow-glass' : 'bg-white/50 text-forest-deep border-sage/30 hover:bg-white hover:border-gold'}">
      <span class="w-2.5 h-2.5 rounded-full ${m.dot}"></span>${m.label}</button>`).join('');
    const secIcons = ['utensils', 'chef', 'leaf', 'cake'];
    const panels = S.menu.map((m, i) => `
      <div role="tabpanel" data-panel="${m.id}" class="${i ? 'hidden' : ''} grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-9 pt-4">
        ${m.sections.map((sec, k) => `
          <div class="glass glass-hover p-4 pt-8">
            ${FI(secIcons[k % 4])}
            <h3 class="text-xl font-semibold text-forest-deep pb-1.5 border-b border-gold/40 text-center">${sec.name}</h3>
            <ul class="mt-2 space-y-0.5">${sec.items.map(it => `<li class="pt flex items-start gap-2.5 text-[.82rem] text-charcoal/80"><span class="pt-dot mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${m.dot}"></span>${it}</li>`).join('')}</ul>
          </div>`).join('')}
      </div>`).join('');
    mount('menu-block', `<div class="flex flex-wrap justify-center gap-2 mb-4" role="tablist">${tabs}</div><div>${panels}</div>`);
    $$('.menu-tab').forEach(btn => btn.addEventListener('click', () => {
      $$('.menu-tab').forEach(b => {
        const on = b === btn; b.setAttribute('aria-selected', on);
        b.className = b.className.replace(/bg-forest text-white border-forest shadow-glass|bg-white\/50 text-forest-deep border-sage\/30 hover:bg-white hover:border-gold/g, '').trim() +
          (on ? ' bg-forest text-white border-forest shadow-glass' : ' bg-white/50 text-forest-deep border-sage/30 hover:bg-white hover:border-gold');
      });
      $$('[data-panel]').forEach(p => {
        const on = p.dataset.panel === btn.dataset.tab;
        p.classList.toggle('hidden', !on);
        if (on) { p.classList.remove('animate-fadeUp'); void p.offsetWidth; p.classList.add('animate-fadeUp'); }
      });
    }));

    // Packages
    mount('packages-grid', S.packages.map((p, i) => `
      <div class="relative glass glass-hover p-5 flex flex-col ${p.featured ? '!bg-white/80 frame-strong' : ''}" data-reveal ${delay(i)}>
        ${p.featured ? '<span class="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 btn-gold px-4 py-1 rounded-full text-[.62rem] font-semibold tracking-widest uppercase whitespace-nowrap shadow-glow">Most Popular</span>' : ''}
        <h3 class="text-2xl font-semibold text-forest-deep transition-colors">${p.name}</h3>
        <p class="mt-0.5 text-[.82rem] text-charcoal/65">${p.desc}</p>
        <div class="mt-3 pb-3 border-b border-gold/40">
          ${S.showPrices
            ? `<span class="font-display text-4xl font-semibold text-forest-deep">${p.price}</span><span class="ml-2 text-sm text-charcoal/60">${p.unit}</span>`
            : '<span class="font-display text-3xl text-forest-deep">Request a Quote</span>'}
        </div>
        <ul class="mt-3 space-y-0.5 grow">${p.features.map(f => `<li class="pt flex gap-2.5 text-[.82rem] text-charcoal/80"><span class="pt-dot mt-0.5 text-gold-dark shrink-0 rounded-full">${icon('check', 'w-4 h-4')}</span>${f}</li>`).join('')}</ul>
        <a href="contact.html?package=${encodeURIComponent(p.name)}#enquiry" class="mt-4 !py-2 btn ${p.featured ? 'btn-gold' : 'btn-outline'}">Choose ${p.name}</a>
      </div>`).join(''));
    mount('packages-note', S.showPrices ? S.pricingNote : '');
    mount('custom-package', `
      <div class="glass-dark dark-hover p-5 md:px-8 flex flex-col md:flex-row md:items-center gap-3 justify-between" data-reveal="zoom">
        <div class="max-w-2xl"><h3 class="text-2xl text-white">${S.customPackage.title}</h3><p class="mt-1 text-sm text-white/75">${S.customPackage.text}</p></div>
        <a href="contact.html?package=Custom%20Package#enquiry" class="btn btn-gold shrink-0">Build a Custom Package ${icon('arrow', 'w-4 h-4')}</a>
      </div>`);
    mount('extras-list', S.extras.map(x => `<span class="chip glass !rounded-full px-4 py-1.5 text-sm text-forest-deep inline-flex items-center gap-2">${icon('sparkle', 'w-4 h-4 text-gold-dark')}${x}</span>`).join(''));
  }

  function renderTestimonials() {
    const list = S.testimonials || [];
    const sec = $('#testimonials-section'); if (sec) sec.classList.toggle('hidden', !list.length);
    mount('testimonials-grid', list.map((t, i) => `
      <figure class="relative glass glass-hover p-5 pt-8 flex flex-col" data-reveal ${delay(i)}>
        <span class="ic float-ic font-display text-4xl leading-none pt-3 select-none" aria-hidden="true">&ldquo;</span>
        <div class="flex justify-center">${stars(t.rating || 5)}</div>
        <blockquote class="mt-2 text-sm text-charcoal/80 leading-snug grow text-center">${t.text}</blockquote>
        <figcaption class="mt-3 pt-3 border-t border-gold/30 flex items-center gap-3">
          <span class="ic w-9 h-9 rounded-full bg-gradient-to-br from-sage to-forest text-white flex items-center justify-center font-display text-lg shrink-0">${t.name.trim().charAt(0)}</span>
          <span><span class="block font-medium text-forest-deep">${t.name}</span><span class="block text-xs text-charcoal/55">${t.role}${t.sample ? ' &middot; <em class="not-italic text-gold-dark">Sample</em>' : ''}</span></span>
        </figcaption>
      </figure>`).join(''));
    mount('testimonials-note', list.some(t => t.sample) ? S.sampleNotice : '');
  }

  /* ------------------------------ 6. GALLERY ------------------------------ */
  function renderGallery() {
    const grid = $('#gallery-grid'); if (!grid) return;
    const cats = ['All', ...S.galleryCategories];
    mount('gallery-filters', cats.map((c, i) => `<button type="button" data-filter="${c}" aria-pressed="${i === 0}"
      class="filter-btn px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 hover:-translate-y-0.5 ${i === 0 ? 'bg-forest text-white border-forest shadow-glass' : 'bg-white/55 text-forest-deep border-sage/30 hover:bg-white hover:border-gold'}">${c}</button>`).join(''));

    grid.innerHTML = S.gallery.map((g, i) => `
      <button type="button" data-cat="${g.cat}" data-i="${i}" class="gallery-item group relative block w-full overflow-hidden shadow-glass hover:shadow-glass-lg text-left transition-all duration-500 ${i % 2 ? 'shape-leaf-alt' : 'shape-leaf'}" aria-label="Open photo: ${g.alt}">
        <img src="${g.src}" alt="${g.alt}" loading="lazy" class="w-full aspect-[4/3] object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1">
        <div class="rise-fx"></div>
        <div class="rise-cap flex items-end justify-between gap-3">
          <div><p class="text-[.62rem] uppercase tracking-[.25em] text-gold-light">${g.cat}</p><p class="font-display text-lg leading-tight">${g.alt}</p></div>
          <span class="w-8 h-8 glass-dark !rounded-full flex items-center justify-center shrink-0">${icon('zoom', 'w-4 h-4')}</span>
        </div>
      </button>`).join('');

    const visible = () => $$('.gallery-item', grid).filter(el => !el.classList.contains('hidden'));
    $$('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      $$('.filter-btn').forEach(b => {
        const on = b === btn; b.setAttribute('aria-pressed', on);
        b.classList.toggle('bg-forest', on); b.classList.toggle('text-white', on); b.classList.toggle('border-forest', on); b.classList.toggle('shadow-glass', on);
        b.classList.toggle('bg-white/55', !on); b.classList.toggle('text-forest-deep', !on); b.classList.toggle('border-sage/30', !on);
      });
      $$('.gallery-item', grid).forEach(el => {
        const show = f === 'All' || el.dataset.cat === f;
        el.classList.toggle('hidden', !show);
        el.classList.remove('animate-fadeUp'); if (show) { void el.offsetWidth; el.classList.add('animate-fadeUp'); }
      });
      const c = $('#gallery-count'); if (c) c.textContent = visible().length;
    }));
    const c = $('#gallery-count'); if (c) c.textContent = S.gallery.length;

    // Lightbox
    const lb = document.createElement('div');
    lb.className = 'fixed inset-0 z-[60] hidden items-center justify-center bg-charcoal/90 backdrop-blur-md p-4';
    lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Photo viewer');
    lb.innerHTML = `
      <button data-lb="close" class="absolute top-4 right-4 w-12 h-12 rounded-full glass-dark !rounded-full flex items-center justify-center" aria-label="Close">${icon('close', 'w-6 h-6')}</button>
      <button data-lb="prev" class="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-dark !rounded-full flex items-center justify-center" aria-label="Previous photo">${icon('chevL', 'w-6 h-6')}</button>
      <button data-lb="next" class="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-dark !rounded-full flex items-center justify-center" aria-label="Next photo">${icon('chevR', 'w-6 h-6')}</button>
      <figure class="max-w-5xl w-full text-center"><img data-lb="img" alt="" class="mx-auto max-h-[78vh] w-auto max-w-full rounded-2xl shadow-glass-lg object-contain"><figcaption data-lb="cap" class="mt-4 text-white/85 font-display text-2xl"></figcaption></figure>`;
    body.appendChild(lb);
    let list = [], idx = 0;
    const show = () => { const g = S.gallery[list[idx]]; const li = $('[data-lb=img]', lb); li.onerror = () => { li.onerror = null; li.src = g.src; }; li.src = IMG[g.src] || g.src; $('[data-lb=img]', lb).alt = g.alt; $('[data-lb=cap]', lb).textContent = `${g.alt} · ${g.cat}`; };
    const open = (i) => { list = visible().map(el => Number(el.dataset.i)); idx = Math.max(0, list.indexOf(i)); show(); lb.classList.remove('hidden'); lb.classList.add('flex'); body.classList.add('overflow-hidden'); };
    const close = () => { lb.classList.add('hidden'); lb.classList.remove('flex'); body.classList.remove('overflow-hidden'); };
    const step = (d) => { idx = (idx + d + list.length) % list.length; show(); };
    grid.addEventListener('click', e => { const it = e.target.closest('.gallery-item'); if (it) open(Number(it.dataset.i)); });
    lb.addEventListener('click', e => {
      const a = e.target.closest('[data-lb]'); const k = a && a.dataset.lb;
      if (k === 'close' || e.target === lb) close(); else if (k === 'prev') step(-1); else if (k === 'next') step(1);
    });
    document.addEventListener('keydown', e => {
      if (lb.classList.contains('hidden')) return;
      if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') step(-1); if (e.key === 'ArrowRight') step(1);
    });
  }

  /* ------------------------------ 7. CONTACT ------------------------------ */
  function renderContact() {
    const card = (ic, title, inner) => `
      <div class="glass glass-hover p-3 pt-7 pl-5" data-reveal="zoom">
        ${FI(ic, '!left-5 !ml-0')}
        <div class="min-w-0"><p class="text-[.65rem] uppercase tracking-[.2em] text-gold-dark">${title}</p>${inner}</div>
      </div>`;
    mount('contact-cards', [
      card('phone', 'Call Us', `<a href="tel:${C.phoneRaw}" class="block font-display text-xl text-forest-deep hover:text-gold-dark">${C.phone}</a>`),
      card('whatsapp', 'WhatsApp', `<a href="${waLink(S.whatsappMessages.general)}" target="_blank" rel="noopener" class="block font-display text-xl text-forest-deep hover:text-gold-dark">${C.phone}</a>`),
      card('mail', 'Email', `<a href="mailto:${C.email}" class="block font-display text-[.95rem] text-forest-deep hover:text-gold-dark break-all leading-tight">${C.email}</a>`),
      card('pin', 'Address', `<p class="text-[.82rem] text-forest-deep leading-snug">${C.address}</p>`)
    ].join(''));
    mount('contact-social', socialIcons('w-9 h-9').replace(/border-white\/25 bg-white\/10 text-white/g, 'border-sage/30 bg-white/60 text-forest-deep'));
    mount('hours-list', C.hours.map(h => `<li class="pt flex items-center justify-between gap-4 py-1.5 border-b border-gold/30 last:border-0"><span class="text-forest-deep">${h.day}</span><span class="font-medium text-gold-dark">${h.time}</span></li>`).join(''));
    mount('areas-list', B.areasServed.map(a => `<span class="chip glass !rounded-full px-3 py-0.5 text-xs text-forest-deep inline-flex items-center gap-1.5">${icon('pin', 'w-3.5 h-3.5 text-gold-dark')}${a}</span>`).join(''));
    const map = $('#map-embed');
    if (map) map.innerHTML = `<iframe title="${B.fullName} location on Google Maps" src="https://www.google.com/maps?q=${encodeURIComponent(C.mapQuery)}&output=embed" class="w-full h-full border-0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  }

  function initEnquiryForm() {
    const form = $('#enquiry-form'); if (!form) return;
    const opt = (list, first) => (first ? `<option value="">${first}</option>` : '') + list.map(v => `<option value="${v}">${v}</option>`).join('');
    $('[name=eventType]', form).innerHTML = opt(S.eventTypes, 'Select order type *');
    $('[name=package]', form).innerHTML = opt([...S.packages.map(p => p.name), 'Custom Package', 'Not sure yet'], 'Select a package (optional)');
    mount('food-pills', S.foodPreferences.map((f, i) => `
      <label class="cursor-pointer"><input type="radio" name="food" value="${f}" class="peer sr-only" ${i === 0 ? 'required' : ''}>
        <span class="block px-3 py-1 rounded-full text-xs sm:text-sm border border-sage/30 bg-white/60 text-forest-deep transition peer-checked:bg-sage peer-checked:border-sage peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-gold hover:border-gold hover:-translate-y-0.5 hover:bg-gold/20">${f}</span></label>`).join(''));

    const d = $('[name=date]', form), today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    d.min = today.toISOString().slice(0, 10);

    // Prefill from links such as contact.html?service=buffet or ?package=Signature
    const q = new URLSearchParams(location.search);
    const svcMap = { wedding: 'Weddings & Engagements', 'griha-pravesh': 'Griha Pravesh & Apartment Pooja', 'baby-shower': 'Baby Shower & Naming Ceremony', corporate: 'Corporate Events', 'in-house': 'Small In-House Function' };
    if (svcMap[q.get('service')]) $('[name=eventType]', form).value = svcMap[q.get('service')];
    if (q.get('package')) $('[name=package]', form).value = q.get('package');

    const fmtDate = (v) => { const [y, m, dd] = v.split('-').map(Number); return new Date(y, m - 1, dd).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }); };

    function buildMessage(f) {
      const row = (label, val) => val ? `*${label}:* ${val}` : null;
      return [
        `*${S.whatsappMessages.enquiryTitle} – ${B.fullName}*`, '',
        row('Name', f.name), row('Phone', f.phone), row('Email', f.email), '',
        row('Order Type', f.eventType), row('Date Required', f.date ? fmtDate(f.date) : ''), row('People / Quantity', f.guests),
        row('Delivery Location', f.venue), row('Food Preference', f.food), row('Package', f.package),
        f.message ? '' : null, row('Message', f.message), '',
        '_Sent from the website enquiry form_'
      ].filter(x => x !== null).join('\n');
    }
    window.__buildEnquiryMessage = buildMessage; // handy for testing

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const fd = Object.fromEntries(new FormData(form).entries());
      Object.keys(fd).forEach(k => fd[k] = String(fd[k]).trim());
      const url = waLink(buildMessage(fd));
      const win = window.open(url, '_blank', 'noopener');
      const ok = $('#form-success');
      $('[data-wa-fallback]', ok).href = url;
      ok.classList.remove('hidden'); ok.classList.add('animate-fadeUp');
      ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (!win) location.href = url; // popup blocked: continue in same tab
    });
  }

  /* ------------------------- HERO GLASS CAROUSEL -------------------------- */
  function initHeroCarousel() {
    const root = $('#hero-carousel'); if (!root || !(S.heroCards || []).length) return;
    const cards = S.heroCards, n = cards.length, half = Math.floor(n / 2);
    let a = 0, timer = null;
    root.innerHTML = cards.map((c, i) => `
      <article data-i="${i}" class="hc absolute left-1/2 top-2 w-44 sm:w-56 h-[19rem] sm:h-[24rem] overflow-hidden cursor-pointer select-none glass-dark !p-0 !border-white/30"
        style="transition:transform .8s cubic-bezier(.2,.7,.2,1),opacity .8s,filter .8s,box-shadow .8s" role="group" aria-label="${c.title}">
        <img src="${c.image}" alt="${c.title}" class="absolute inset-0 w-full h-full object-cover" draggable="false">
        <div class="absolute inset-0 bg-gradient-to-b from-forest-deep/60 via-transparent to-forest-deep/70"></div>
        <div class="relative p-4 flex items-start justify-between gap-2">
          <div class="flex gap-2 items-start">${icon('pin', 'w-5 h-5 mt-0.5 text-gold-light shrink-0')}
            <div><p class="font-display text-xl leading-tight">${c.title}</p><p class="text-xs text-white/75">${c.sub}</p></div></div>
          <span class="w-8 h-8 rounded-full bg-white/15 backdrop-blur flex items-center justify-center shrink-0">${icon('heart', 'w-4 h-4')}</span>
        </div>
        <a href="${c.href}" class="hc-cta absolute bottom-3 left-3 right-3 glass-dark !rounded-full !bg-white/15 text-center text-sm py-2 flex items-center justify-center gap-2 hover:!bg-gold hover:text-forest-deep transition">Explore ${icon('arrow', 'w-4 h-4')}</a>
      </article>`).join('');
    mount('hc-dots', cards.map((_, i) => `<button type="button" data-d="${i}" aria-label="Show ${cards[i].title}" class="h-2 rounded-full bg-white/50 transition-all duration-500"></button>`).join(''));
    const els = $$('.hc', root), dots = $$('#hc-dots button');
    const layout = () => {
      els.forEach((el, i) => {
        const o = ((i - a + n + half) % n) - half, ab = Math.abs(o);
        el.style.transform = `translateX(calc(-50% + ${o * 66}%)) translateZ(${-ab * 90}px) scale(${1 - ab * .13}) rotateY(${-o * 9}deg)`;
        el.style.zIndex = 10 - ab; el.style.opacity = ab > 2 ? 0 : 1 - ab * .22;
        el.style.filter = ab ? 'saturate(.85) brightness(.85)' : 'none';
        el.style.boxShadow = ab ? '' : '0 30px 60px -18px rgba(0,0,0,.6)';
        el.style.pointerEvents = ab > 2 ? 'none' : 'auto';
        $('.hc-cta', el).style.visibility = ab ? 'hidden' : 'visible';
        el.classList.toggle('!border-gold', !ab);
      });
      dots.forEach((d, i) => { d.classList.toggle('w-8', i === a); d.classList.toggle('!bg-gold', i === a); d.classList.toggle('w-2', i !== a); });
    };
    const go = (i) => { a = (i + n) % n; layout(); };
    const auto = () => { clearInterval(timer); timer = setInterval(() => go(a + 1), 4500); };
    $('#hc-prev').addEventListener('click', () => { go(a - 1); auto(); });
    $('#hc-next').addEventListener('click', () => { go(a + 1); auto(); });
    dots.forEach(d => d.addEventListener('click', () => { go(Number(d.dataset.d)); auto(); }));
    els.forEach((el, i) => el.addEventListener('click', e => { if (i !== a) { e.preventDefault(); go(i); auto(); } }));
    root.addEventListener('mouseenter', () => clearInterval(timer)); root.addEventListener('mouseleave', auto);
    let sx = null; root.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
    root.addEventListener('touchend', e => { if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) { go(a + (dx < 0 ? 1 : -1)); auto(); } sx = null; });
    layout(); auto();
  }

  /* ---------------- REAL PHOTOS (falls back to local placeholder) ---------- */
  const IMG = S.imageMap || {};
  function upgradeImages() {
    $$('img').forEach(img => {
      const local = img.getAttribute('src');
      if (!local || img.dataset.local || !IMG[local]) return;
      img.dataset.local = local;
      img.addEventListener('error', () => { if (img.dataset.failed) return; img.dataset.failed = '1'; img.src = img.dataset.local; });
      img.src = IMG[local];
    });
  }

  /* ------------------------------ 8. ANIMATION & INIT --------------------- */
  function initReveal() {
    const els = $$('[data-reveal]:not([data-reveal-ready])');
    const io = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const el = en.target; io.unobserve(el);
        el.classList.remove('rv'); el.classList.add('rv-in');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }) : null;
    els.forEach(el => {
      el.dataset.revealReady = '1';
      if (!io) return;
      el.classList.add('rv');
      io.observe(el);
    });

    // scroll progress bar
    const bar = document.createElement('div'); bar.id = 'scroll-bar'; body.appendChild(bar);
    const upd = () => { const h = document.documentElement; const m = h.scrollHeight - h.clientHeight; bar.style.transform = `scaleX(${m > 0 ? h.scrollTop / m : 0})`; };
    upd(); window.addEventListener('scroll', upd, { passive: true });

    const cio = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const el = en.target; cio.unobserve(el);
        const end = Number(el.dataset.count), t0 = performance.now(), dur = 1600;
        const tick = (t) => { const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3); el.textContent = Math.round(end * e).toLocaleString('en-IN'); if (p < 1) requestAnimationFrame(tick); };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 }) : null;
    $$('[data-count]').forEach(el => { if (cio) cio.observe(el); else el.textContent = Number(el.dataset.count).toLocaleString('en-IN'); });
  }

  function init() {
    renderBackground();
    renderHeader();
    renderFooter();
    renderFloating();
    renderPageHeroes();
    renderCTAs();
    renderHome();
    renderAbout();
    renderServices();
    renderTestimonials();
    renderGallery();
    renderContact();
    initEnquiryForm();
    bindData();
    initHeroCarousel();
    upgradeImages();
    initReveal();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
