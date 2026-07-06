/* SouthQuest Farm — products renderer
   Hosts: filter UI, grid, click-to-modal, search.
   Reads window.SQ_PRODUCTS (loaded from products-data.js).
   Activates on any page with <div id="sq-products" data-genus="aeonium|echeveria|all">. */

(function () {
  var mount = document.getElementById('sq-products');
  if (!mount || !window.SQ_PRODUCTS) return;

  var BASE_GENUS = mount.dataset.genus || 'all';  // aeonium / echeveria / all

  // ─── Derive color/form/sizeCategory from existing fields ───
  function deriveAttrs(p) {
    // Size category from crown width (parse first number)
    var m = (p.s || '').match(/(\d+)/);
    var cm = m ? parseInt(m[1], 10) : 0;
    var size = cm <= 12 ? 'small' : (cm <= 25 ? 'medium' : 'large');

    // Growth form: Aeonium specimen/cluster = tree, rest = rosette
    var form = (p.g === 'aeonium' && (p.t === 'specimen' || p.t === 'cluster'))
      ? 'tree' : 'rosette';

    // Color heuristic from English name
    var name = (p.e || '').toLowerCase();
    var color = 'green';
    if (/black|voodoo|purple|crystal|shadow|phantom/.test(name)) color = 'purple';
    else if (/red|crimson|rouge|pink|cherry|lychee|peach|flame|hephaestus|lantern/.test(name)) color = 'red';
    // "Variegated" beats other color tags
    if (/锦/.test(p.n || '') || /variegated|opalina|snowball|tricolor/.test(name)) color = 'variegated';

    return { color: color, form: form, size: size };
  }

  // Pre-compute derived attributes once and store back on each product
  var PRODUCTS = window.SQ_PRODUCTS.map(function (p) {
    var d = deriveAttrs(p);
    return Object.assign({}, p, d);
  });

  // Filter to the page's base genus
  var BASE = (BASE_GENUS === 'all')
    ? PRODUCTS
    : PRODUCTS.filter(function (p) { return p.g === BASE_GENUS; });

  // ─── State ───
  var state = {
    color: 'any',   // any / green / red / purple / variegated
    form:  'any',   // any / rosette / tree
    size:  'any',   // any / small / medium / large
    query: ''
  };

  // ─── Build UI ───
  mount.innerHTML = [
    '<div class="sq-filters" role="group" aria-label="Filter varieties">',
      '<div class="sq-filter-row">',
        '<span class="sq-filter-label">Color</span>',
        '<div class="sq-chip-group" data-facet="color">',
          chip('any','All'), chip('green','Green'), chip('red','Red'),
          chip('purple','Purple'), chip('variegated','Variegated'),
        '</div>',
      '</div>',
      '<div class="sq-filter-row">',
        '<span class="sq-filter-label">Growth Form</span>',
        '<div class="sq-chip-group" data-facet="form">',
          chip('any','All'), chip('rosette','Rosette'), chip('tree','Tree Form'),
        '</div>',
      '</div>',
      '<div class="sq-filter-row">',
        '<span class="sq-filter-label">Size</span>',
        '<div class="sq-chip-group" data-facet="size">',
          chip('any','All'), chip('small','Small'), chip('medium','Medium'), chip('large','Large'),
        '</div>',
      '</div>',
      '<div class="sq-filter-row">',
        '<span class="sq-filter-label">Search</span>',
        '<input type="search" class="sq-search" id="sq-search" placeholder="Variety name…" aria-label="Search varieties" />',
        '<span class="sq-count" id="sq-count"></span>',
      '</div>',
    '</div>',
    '<div class="product-grid" id="sq-grid"></div>',
    '<div class="sq-empty" id="sq-empty" hidden>',
      '<p>No varieties match your filters.</p>',
      '<button class="btn btn--outline btn--sm" type="button" id="sq-reset">Reset filters</button>',
    '</div>',

    // Modal
    '<div class="sq-modal" id="sq-modal" role="dialog" aria-modal="true" aria-labelledby="sq-modal-title" hidden>',
      '<div class="sq-modal__backdrop" data-modal-close></div>',
      '<div class="sq-modal__panel" role="document">',
        '<button class="sq-modal__close" type="button" aria-label="Close" data-modal-close>×</button>',
        '<div class="sq-modal__img-wrap"><img id="sq-modal-img" alt="" /></div>',
        '<div class="sq-modal__body">',
          '<h3 class="sq-modal__title" id="sq-modal-title"></h3>',
          '<div class="sq-modal__cn" id="sq-modal-cn"></div>',
          '<dl class="sq-modal__specs" id="sq-modal-specs"></dl>',
          '<a class="btn btn--whatsapp btn--lg sq-modal__cta" id="sq-modal-cta" target="_blank" rel="noopener">',
            '<svg class="icon-wa" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
            'Inquire on WhatsApp',
          '</a>',
        '</div>',
      '</div>',
    '</div>',
  ].join('');

  function chip(val, label) {
    var active = val === 'any' ? ' is-active' : '';
    return '<button class="sq-chip' + active + '" type="button" data-val="' + val + '">' + label + '</button>';
  }

  // ─── Renderers ───
  var grid = document.getElementById('sq-grid');
  var empty = document.getElementById('sq-empty');
  var count = document.getElementById('sq-count');

  function PLACEHOLDER() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none"><g opacity=".55" fill="#0F7654"><ellipse cx="40" cy="40" rx="7" ry="18"/><ellipse cx="40" cy="40" rx="7" ry="18" transform="rotate(45 40 40)"/><ellipse cx="40" cy="40" rx="7" ry="18" transform="rotate(90 40 40)"/><ellipse cx="40" cy="40" rx="7" ry="18" transform="rotate(135 40 40)"/></g><circle cx="40" cy="40" r="7" fill="#0F7654" opacity=".7"/></svg>';
  }

  function genusLabel(g) { return g === 'aeonium' ? 'Aeonium' : 'Echeveria'; }

  function render() {
    var matched = BASE.filter(function (p) {
      if (state.color !== 'any' && p.color !== state.color) return false;
      if (state.form !== 'any' && p.form !== state.form) return false;
      if (state.size !== 'any' && p.size !== state.size) return false;
      if (state.query) {
        var q = state.query.toLowerCase();
        if (!(p.e || '').toLowerCase().includes(q) && !(p.n || '').includes(state.query)) return false;
      }
      return true;
    });

    if (!matched.length) {
      grid.innerHTML = '';
      empty.hidden = false;
      count.textContent = '0 varieties';
      return;
    }
    empty.hidden = true;
    count.textContent = matched.length + ' ' + (matched.length === 1 ? 'variety' : 'varieties');

    var html = '';
    matched.forEach(function (p, idx) {
      var origIdx = PRODUCTS.indexOf(p);
      html += '<button class="product-card" type="button" data-pidx="' + origIdx + '" aria-label="View ' + p.e + ' details">' +
        '<div class="product-card__img">' +
          (p.i
            ? '<img src="' + p.i + '" alt="' + genusLabel(p.g) + ' ' + p.e + ' succulent — wholesale export from Yunnan, China" loading="lazy">'
            : '<div class="product-card__placeholder">' + PLACEHOLDER() + '</div>') +
        '</div>' +
        '<div class="product-card__body">' +
          '<h3 class="product-card__name">' + p.e + '</h3>' +
          '<div class="product-card__cn">' + p.n + '</div>' +
          '<div class="product-card__tag-row">' +
            '<span class="product-card__genus genus--' + p.g + '">' + genusLabel(p.g) + '</span>' +
            '<span class="product-card__size">' + p.s + '</span>' +
          '</div>' +
        '</div>' +
      '</button>';
    });
    grid.innerHTML = html;
  }

  // ─── Filter chips ───
  mount.querySelectorAll('.sq-chip-group').forEach(function (group) {
    var facet = group.dataset.facet;
    group.addEventListener('click', function (e) {
      var btn = e.target.closest('.sq-chip');
      if (!btn) return;
      var val = btn.dataset.val;
      state[facet] = val;
      group.querySelectorAll('.sq-chip').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
      render();
    });
  });

  // ─── Search ───
  var searchEl = document.getElementById('sq-search');
  var searchTimer = null;
  searchEl.addEventListener('input', function () {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () {
      state.query = searchEl.value.trim();
      render();
    }, 150);
  });

  // ─── Reset (empty state) ───
  document.getElementById('sq-reset').addEventListener('click', function () {
    state.color = 'any'; state.form = 'any'; state.size = 'any'; state.query = '';
    searchEl.value = '';
    mount.querySelectorAll('.sq-chip-group').forEach(function (g) {
      g.querySelectorAll('.sq-chip').forEach(function (b) { b.classList.toggle('is-active', b.dataset.val === 'any'); });
    });
    render();
  });

  // ─── Modal ───
  var modal = document.getElementById('sq-modal');
  var modalImg = document.getElementById('sq-modal-img');
  var modalTitle = document.getElementById('sq-modal-title');
  var modalCn = document.getElementById('sq-modal-cn');
  var modalSpecs = document.getElementById('sq-modal-specs');
  var modalCta = document.getElementById('sq-modal-cta');
  var lastFocus = null;

  function typeLabel(t) {
    return ({ specimen:'Old-Stalk Specimen', crested:'Crested (cristate)', cluster:'Multi-Head Cluster',
              plug:'Plug Tray', potted:'Potted Starter', standard:'Standard' })[t] || t;
  }

  function openModal(p) {
    lastFocus = document.activeElement;
    modalImg.src = p.i || '';
    modalImg.alt = genusLabel(p.g) + ' ' + p.e;
    modalTitle.textContent = p.e;
    modalCn.textContent = p.n;
    modalSpecs.innerHTML =
      '<dt>Genus</dt><dd>' + genusLabel(p.g) + '</dd>' +
      '<dt>Form</dt><dd>' + typeLabel(p.t) + '</dd>' +
      '<dt>Crown Size</dt><dd>' + p.s + '</dd>';
    var text = 'Hi SouthQuest, I’m interested in ' + genusLabel(p.g) + ' "' + p.e + '" (' + p.n + ', ' + p.s + '). Please share availability and photos.';
    modalCta.href = 'https://wa.me/8618685816496?text=' + encodeURIComponent(text);
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    setTimeout(function () { modalCta.focus(); }, 30);
  }
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  grid.addEventListener('click', function (e) {
    var card = e.target.closest('.product-card');
    if (!card) return;
    var p = PRODUCTS[parseInt(card.dataset.pidx, 10)];
    if (p) openModal(p);
  });
  modal.addEventListener('click', function (e) {
    if (e.target.dataset.modalClose !== undefined) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  // Initial render
  render();
})();
