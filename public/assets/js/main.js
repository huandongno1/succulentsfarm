/* ============================================================
   SOUTHQUEST FARM — main.js  v3
   Multilingual via separate URLs (/ , /ja/ , /zh/ , /ko/)
   Language switcher uses real links — no client-side text swap.
   WhatsApp: 8618685816496
   ============================================================ */

/* ─── Mobile Nav ───────────────────────────────────────────── */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const backdrop = document.querySelector('.mobile-nav__backdrop');
  if (!toggle || !mobileNav) return;
  const openNav = () => { mobileNav.classList.add('is-open'); document.body.style.overflow = 'hidden'; toggle.setAttribute('aria-expanded','true'); };
  const closeNav = () => { mobileNav.classList.remove('is-open'); document.body.style.overflow = ''; toggle.setAttribute('aria-expanded','false'); };
  toggle.addEventListener('click', () => mobileNav.classList.contains('is-open') ? closeNav() : openNav());
  backdrop && backdrop.addEventListener('click', closeNav);
  document.querySelectorAll('.mobile-nav__link').forEach(l => l.addEventListener('click', closeNav));
})();

/* ─── FAQ Accordion ────────────────────────────────────────── */
(function () {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(o => { o.classList.remove('is-open'); o.querySelector('.faq-question').setAttribute('aria-expanded','false'); });
      if (!isOpen) { item.classList.add('is-open'); btn.setAttribute('aria-expanded','true'); }
    });
  });
})();

/* ─── Compliance Accordion ─────────────────────────────────── */
(function () {
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', item.classList.contains('is-open'));
    });
  });
})();

/* ─── Scroll Reveal ────────────────────────────────────────── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
})();

/* ─── RFQ Form → WhatsApp + email fallback ─────────────────── */
(function () {
  const form = document.getElementById('rfq-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);

    data.append('access_key', '218780bd-22f3-45a0-8e7e-7d5954e59617');
    data.append('subject', 'New RFQ from succulentsfarm.com');
    fetch('https://api.web3forms.com/submit', { method: 'POST', body: data }).catch(function () {});

    const text = encodeURIComponent(
      `Hi SouthQuest Farm,\n\nName: ${data.get('name')||''}\nCountry: ${data.get('country')||''}\nBuyer Type: ${data.get('buyer_type')||''}\n\n${data.get('message')||''}`
    );
    window.open(`https://wa.me/8618685816496?text=${text}`, '_blank');
  });
})();
