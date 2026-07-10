/* ============================================================
   SOUTHQUEST FARM — inquiry-list.js
   localStorage-based inquiry list ("Add to Inquiry List" buttons
   on product pages) + floating drawer + WhatsApp message builder.
   WhatsApp: 8618685816496
   ============================================================ */
(function () {
  var STORAGE_KEY = 'sq_inquiry_list';
  var WA_NUMBER = '8618685816496';

  function getList() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }

  function saveList(list) {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); } catch (e) {}
  }

  function addItem(item) {
    var list = getList();
    if (list.some(function (i) { return i.slug === item.slug; })) return false;
    list.push(item);
    saveList(list);
    return true;
  }

  function removeItem(slug) {
    var list = getList().filter(function (i) { return i.slug !== slug; });
    saveList(list);
  }

  function clearList() {
    saveList([]);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var drawer, panel, badge, launcher, itemsEl, emptyEl, sendBtn, countEl;

  function buildWidget() {
    var wrap = document.createElement('div');
    wrap.className = 'inquiry-widget';
    wrap.innerHTML =
      '<button type="button" class="inquiry-launcher" aria-label="Open inquiry list" aria-expanded="false" aria-controls="inquiry-drawer">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>' +
        '<span class="inquiry-launcher__badge" aria-hidden="true">0</span>' +
      '</button>' +
      '<div class="inquiry-drawer" id="inquiry-drawer" role="dialog" aria-label="Inquiry list" aria-modal="true">' +
        '<div class="inquiry-drawer__backdrop"></div>' +
        '<div class="inquiry-drawer__panel">' +
          '<div class="inquiry-drawer__header">' +
            '<h2 class="inquiry-drawer__title">Inquiry List <span class="inquiry-drawer__count">(0)</span></h2>' +
            '<button type="button" class="inquiry-drawer__close" aria-label="Close">&times;</button>' +
          '</div>' +
          '<div class="inquiry-drawer__empty">No varieties added yet. Browse the catalogue and tap "Add to Inquiry List" on any plant you\'re interested in.</div>' +
          '<ul class="inquiry-drawer__items"></ul>' +
          '<div class="inquiry-drawer__footer">' +
            '<a href="#" class="btn btn--whatsapp inquiry-drawer__send" target="_blank" rel="noopener">' +
              '<svg class="icon-wa" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
              'Send Inquiry via WhatsApp' +
            '</a>' +
            '<button type="button" class="inquiry-drawer__clear">Clear all</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(wrap);

    launcher = wrap.querySelector('.inquiry-launcher');
    badge = wrap.querySelector('.inquiry-launcher__badge');
    drawer = wrap.querySelector('.inquiry-drawer');
    panel = wrap.querySelector('.inquiry-drawer__panel');
    itemsEl = wrap.querySelector('.inquiry-drawer__items');
    emptyEl = wrap.querySelector('.inquiry-drawer__empty');
    sendBtn = wrap.querySelector('.inquiry-drawer__send');
    countEl = wrap.querySelector('.inquiry-drawer__count');

    launcher.addEventListener('click', openDrawer);
    wrap.querySelector('.inquiry-drawer__backdrop').addEventListener('click', closeDrawer);
    wrap.querySelector('.inquiry-drawer__close').addEventListener('click', closeDrawer);
    wrap.querySelector('.inquiry-drawer__clear').addEventListener('click', function () {
      clearList();
      render();
    });
    itemsEl.addEventListener('click', function (e) {
      var btn = e.target.closest('.inquiry-item__remove');
      if (!btn) return;
      removeItem(btn.getAttribute('data-slug'));
      render();
    });
  }

  function openDrawer() {
    drawer.classList.add('is-open');
    launcher.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('is-open');
    launcher.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function buildWhatsAppUrl(list) {
    var lines = ['Hi SouthQuest, I\'m interested in the following varieties:'];
    list.forEach(function (item, i) {
      lines.push((i + 1) + '. ' + item.name_en + (item.name_cn ? ' (' + item.name_cn + ')' : ''));
    });
    lines.push('Please share current availability and next steps.');
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
  }

  function render() {
    var list = getList();
    var n = list.length;

    if (badge) {
      badge.textContent = String(n);
      badge.style.display = n ? 'flex' : 'none';
    }
    if (countEl) countEl.textContent = '(' + n + ')';
    if (emptyEl) emptyEl.style.display = n ? 'none' : 'block';
    if (itemsEl) itemsEl.style.display = n ? 'block' : 'none';

    if (itemsEl) {
      itemsEl.innerHTML = list.map(function (item) {
        return '<li class="inquiry-item">' +
          '<img class="inquiry-item__img" src="' + escapeHtml(item.image || '') + '" alt="" loading="lazy" width="56" height="56" />' +
          '<div class="inquiry-item__info">' +
            '<div class="inquiry-item__name">' + escapeHtml(item.name_en) + '</div>' +
            '<div class="inquiry-item__meta">' + escapeHtml(item.name_cn || '') + '</div>' +
          '</div>' +
          '<button type="button" class="inquiry-item__remove" data-slug="' + escapeHtml(item.slug) + '" aria-label="Remove ' + escapeHtml(item.name_en) + '">&times;</button>' +
        '</li>';
      }).join('');
    }

    if (sendBtn) {
      if (n) {
        sendBtn.href = buildWhatsAppUrl(list);
        sendBtn.classList.remove('is-disabled');
      } else {
        sendBtn.href = '#';
        sendBtn.classList.add('is-disabled');
      }
    }
  }

  function wireAddButtons() {
    document.querySelectorAll('.js-add-inquiry').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var raw = btn.getAttribute('data-inquiry-item');
        if (!raw) return;
        var item;
        try { item = JSON.parse(raw); } catch (e) { return; }
        var added = addItem(item);
        render();
        var label = btn.querySelector('.js-add-inquiry__label') || btn;
        var original = label.textContent;
        label.textContent = added ? 'Added ✓' : 'Already added';
        btn.classList.add('is-added');
        setTimeout(function () {
          label.textContent = original;
          btn.classList.remove('is-added');
        }, 1600);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    buildWidget();
    wireAddButtons();
    render();
  });
})();
