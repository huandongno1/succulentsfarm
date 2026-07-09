/* SouthQuest Farm — products renderer
   Hosts: filter UI, grid, search. Cards link directly to their individual
   product detail page (/aeonium/<slug>/ or /echeveria/<slug>/).
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

  // Filter to the page's base genus ("rare" = curated crested/variegated/specimen pool)
  var BASE = (BASE_GENUS === 'all')
    ? PRODUCTS
    : (BASE_GENUS === 'rare')
      ? PRODUCTS.filter(function (p) { return p.t === 'crested' || p.t === 'specimen' || p.color === 'variegated'; })
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

  function deriveUrl(p) {
    if (!p.i) return '/' + p.g + '/';
    var base = p.i.split('/').pop().replace(/\.[a-z]+$/i, '');
    var prefix = p.g + '-';
    var slug = base.indexOf(prefix) === 0 ? base.slice(prefix.length) : base;
    return '/' + p.g + '/' + slug + '/';
  }

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
      html += '<a class="product-card" href="' + deriveUrl(p) + '" aria-label="View ' + p.e + ' details">' +
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
      '</a>';
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

  // Initial render
  render();
})();
