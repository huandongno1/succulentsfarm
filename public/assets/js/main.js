/* ============================================================
   SOUTHQUEST FARM — main.js
   Replace YOUR_WHATSAPP_NUM with your E.164 number, e.g. 8613012345678
   ============================================================ */

/* ─── Sticky Header ─────────────────────────────────────── */
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const THRESHOLD = 60;

  function updateHeader() {
    if (window.scrollY > THRESHOLD) {
      header.classList.remove('is-transparent');
      header.classList.add('is-solid');
    } else {
      header.classList.add('is-transparent');
      header.classList.remove('is-solid');
    }
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
})();

/* ─── Mobile Nav ────────────────────────────────────────── */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const backdrop = document.querySelector('.mobile-nav__backdrop');
  if (!toggle || !mobileNav) return;

  function openNav() {
    mobileNav.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    mobileNav.classList.remove('is-open');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    mobileNav.classList.contains('is-open') ? closeNav() : openNav();
  });

  backdrop && backdrop.addEventListener('click', closeNav);

  document.querySelectorAll('.mobile-nav__link').forEach(l =>
    l.addEventListener('click', closeNav)
  );
})();

/* ─── Language Switcher ─────────────────────────────────── */
(function () {
  const btns = document.querySelectorAll('.lang-btn');
  if (!btns.length) return;

  const translations = {
    en: {
      'hero-title-1': 'Where the World\'s',
      'hero-title-2': 'Finest Succulents',
      'hero-title-3': 'Begin Their Journey',
      'hero-subtitle': 'Rooted in Yunnan\'s cloud-forest highlands, SouthQuest Farm supplies premium succulents to collectors, retailers, and nurseries across 40+ countries — with impeccable phytosanitary compliance and white-glove logistics.',
    },
    ja: {
      'hero-title-1': '世界最高品質の',
      'hero-title-2': '多肉植物が',
      'hero-title-3': '旅立つ場所',
      'hero-subtitle': '雲南省の雲霧林高地を拠点とするSouthQuest Farmは、コレクター、小売業者、ナーセリーに向けて40カ国以上へプレミアム多肉植物を供給しています。',
    },
  };

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      btns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      document.documentElement.lang = lang;

      const dict = translations[lang] || translations.en;
      Object.entries(dict).forEach(([key, val]) => {
        const el = document.getElementById(key);
        if (el) el.textContent = val;
      });
    });
  });
})();

/* ─── FAQ Accordion ─────────────────────────────────────── */
(function () {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('is-open');

      document.querySelectorAll('.faq-item.is-open').forEach(open => {
        open.classList.remove('is-open');
        open.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();

/* ─── Compliance Accordion ──────────────────────────────── */
(function () {
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', item.classList.contains('is-open'));
    });
  });
})();

/* ─── Scroll Reveal ─────────────────────────────────────── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach(el => observer.observe(el));
})();

/* ─── RFQ Form ──────────────────────────────────────────── */
(function () {
  const form = document.getElementById('rfq-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const type = data.get('buyer_type') || 'General';
    const country = data.get('country') || '';
    const message = data.get('message') || '';

    const text = encodeURIComponent(
      `Hi SouthQuest Farm,\n\nName: ${name}\nCountry: ${country}\nBuyer Type: ${type}\n\n${message}`
    );

    window.open(`https://wa.me/YOUR_WHATSAPP_NUM?text=${text}`, '_blank');
  });
})();
