/* ============================================================
   SOUTHQUEST FARM — main.js  v2
   Languages: EN / JP / ZH / KR
   Replace YOUR_WHATSAPP_NUM with your E.164 number
   ============================================================ */

/* ─── TRANSLATION DICTIONARY ────────────────────────────── */
const I18N = {
  en: {
    'nav.succulents':'Succulents','nav.farm':'Our Farm','nav.export':'Export',
    'nav.countries':'Countries','nav.quote':'Get a Quote','nav.cta':'Request Quote',
    'hero.badge':'Yunnan, China · 2,000m Elevation',
    'hero.title1':"Where the World's",'hero.title2':'Finest Succulents','hero.title3':'Begin Their Journey',
    'hero.subtitle':"Rooted in Yunnan's cloud-forest highlands, SouthQuest Farm supplies premium succulents to collectors, retailers, and nurseries across 40+ countries — with impeccable phytosanitary compliance and white-glove logistics.",
    'hero.cta1':'Find Your Program','hero.cta2':'Chat on WhatsApp',
    'hero.stat1v':'11+','hero.stat1l':'Years Growing',
    'hero.stat2v':'200+','hero.stat2l':'Varieties',
    'hero.stat3v':'40+','hero.stat3l':'Countries',
    'trust.1v':'11 Yrs','trust.1l':'Farm Heritage',
    'trust.2v':'200+','trust.2l':'Live Varieties',
    'trust.3v':'40+','trust.3l':'Export Markets',
    'trust.4v':'100%','trust.4l':'Phyto Compliant',
    'sc.over':'Find Your Program','sc.h2':'Which describes your business best?',
    'sc.body':"Every partner is different. Choose your profile below — we'll match you with the right variety mix, shipment structure, and compliance documentation for your market.",
    'c1.badge':'Retail & E-comm','c1.title':'Retail & E-commerce Partners','c1.body':'Etsy sellers, boutique plant shops, and online merchants looking for curated, fast-turnaround bundles that delight end-customers.','c1.cta':'Start a conversation',
    'c2.badge':'Collectors','c2.title':'Collectors & Specialty Brands','c2.body':'Hand-selected museum-quality specimens for rare plant curators who can\'t source from a catalogue.','c2.cta':'Inquire about rare picks',
    'c3.badge':'Wholesale','c3.title':'Nurseries & Landscape Buyers','c3.body':'Reliable high-volume capacity with tight size consistency and full phytosanitary compliance for commercial growers.','c3.cta':'Request bulk catalogue',
    'sp.over':'Our Signature Genera','sp.h2':'Two genera.\nInfinite character.','sp.cta':'Browse Full Catalogue',
    'pr.over':'How It Works','pr.h2':'From greenhouse to doorstep',
    'faq.over':'Common Questions','faq.h2':'Everything you need to know before your first order',
    'faq.ask':'Ask Us Anything',
    'rfq.h2':'Ready to source extraordinary plants?',
    'rfq.body':"Tell us about your business and what you're looking for. We'll respond within 24 hours with a personalised proposal — no automated replies, no sales scripts.",
    'rfq.submit':'Send Enquiry via WhatsApp',
    'f.name':'Your Name *','f.email':'Email Address *','f.country':'Your Country *',
    'f.type':'Buyer Type *','f.vars':'Varieties of Interest','f.msg':'Tell Us About Your Project *',
    'footer.copy':'© 2025 SouthQuest Farm · succulentsfarm.com · All rights reserved',
  },

  ja: {
    'nav.succulents':'多肉植物','nav.farm':'農場について','nav.export':'輸出情報',
    'nav.countries':'対象国','nav.quote':'お見積り','nav.cta':'見積依頼',
    'hero.badge':'中国・雲南省 · 標高2,000m',
    'hero.title1':'世界最高品質の','hero.title2':'多肉植物が','hero.title3':'旅立つ場所',
    'hero.subtitle':'雲南省の雲霧林高地を拠点とするSouthQuest Farmは、コレクター、小売業者、ナーセリーに向けて40カ国以上へプレミアム多肉植物を供給しています。完璧な植物検疫コンプライアンスと白手袋のロジスティクスで。',
    'hero.cta1':'プログラムを探す','hero.cta2':'WhatsAppで相談',
    'hero.stat1v':'11年+','hero.stat1l':'栽培実績',
    'hero.stat2v':'200種+','hero.stat2l':'品種数',
    'hero.stat3v':'40カ国+','hero.stat3l':'輸出先',
    'trust.1v':'11年','trust.1l':'農場の歴史',
    'trust.2v':'200+','trust.2l':'栽培品種',
    'trust.3v':'40+','trust.3l':'輸出市場',
    'trust.4v':'100%','trust.4l':'植物検疫適合',
    'sc.over':'プログラムを探す','sc.h2':'あなたのビジネスに最適なプランは？',
    'sc.body':'パートナーによってニーズは様々です。下記からプロフィールをお選びください。最適な品種構成、出荷体制、コンプライアンス書類をご提案します。',
    'c1.badge':'小売・EC','c1.title':'小売・ECパートナー','c1.body':'Etsy販売者、植物専門店、オンラインショップ向けに、厳選されたバンドルを迅速にお届けします。','c1.cta':'お問い合わせ',
    'c2.badge':'コレクター','c2.title':'コレクター・専門ブランド','c2.body':'カタログでは入手できない、厳選された希少標本をコレクターや専門ブランドへお届けします。','c2.cta':'希少品種を問い合わせる',
    'c3.badge':'卸売','c3.title':'ナーセリー・ランドスケープ','c3.body':'サイズの一貫性と植物検疫コンプライアンスを確保した、高品質の大量供給に対応します。','c3.cta':'卸売カタログを請求',
    'sp.over':'主要な属','sp.h2':'二つの属。\n無限の個性。','sp.cta':'全カタログを見る',
    'pr.over':'ご利用の流れ','pr.h2':'農場からドアまで',
    'faq.over':'よくある質問','faq.h2':'はじめての注文前に知っておくべきこと',
    'faq.ask':'お問い合わせ',
    'rfq.h2':'特別な多肉植物を仕入れる準備はできていますか？',
    'rfq.body':'ビジネスと探している品種についてお聞かせください。自動返信なし、24時間以内に個別提案をお送りします。',
    'rfq.submit':'WhatsAppで問い合わせる',
    'f.name':'お名前 *','f.email':'メールアドレス *','f.country':'国 *',
    'f.type':'購入者タイプ *','f.vars':'希望品種','f.msg':'プロジェクト概要 *',
    'footer.copy':'© 2025 SouthQuest Farm · succulentsfarm.com · All rights reserved',
  },

  zh: {
    'nav.succulents':'多肉植物','nav.farm':'关于农场','nav.export':'出口合规',
    'nav.countries':'目标国家','nav.quote':'询价','nav.cta':'申请报价',
    'hero.badge':'中国云南省 · 海拔2,000m',
    'hero.title1':'世界顶级','hero.title2':'多肉植物','hero.title3':'从这里启程',
    'hero.subtitle':'SouthQuest Farm 扎根于云南云雾山林高地，向全球40多个国家的收藏家、零售商和苗圃供应优质多肉植物——提供无可挑剔的植物检疫合规服务和精心呵护的物流方案。',
    'hero.cta1':'选择合作方案','hero.cta2':'WhatsApp 咨询',
    'hero.stat1v':'11年+','hero.stat1l':'种植经验',
    'hero.stat2v':'200+','hero.stat2l':'品种数量',
    'hero.stat3v':'40+','hero.stat3l':'出口国家',
    'trust.1v':'11年','trust.1l':'农场历史',
    'trust.2v':'200+','trust.2l':'在售品种',
    'trust.3v':'40+','trust.3l':'出口市场',
    'trust.4v':'100%','trust.4l':'植检合规',
    'sc.over':'选择合作方案','sc.h2':'哪种描述最符合您的业务？',
    'sc.body':'每位合作伙伴的需求各不相同。请选择您的类型，我们将为您匹配最适合的品种组合、发货结构和合规文件。',
    'c1.badge':'零售 / 电商','c1.title':'零售与电商合作伙伴','c1.body':'面向Etsy卖家、精品植物店及网络商户，提供精选、快速周转的多肉植物套装。','c1.cta':'开始咨询',
    'c2.badge':'收藏家','c2.title':'收藏家与专业植物品牌','c2.body':'为稀有植物收藏家提供无法从目录中购得的博物馆级精品标本。','c2.cta':'咨询稀有品种',
    'c3.badge':'批发','c3.title':'苗圃与景观采购商','c3.body':'为商业种植商提供规格统一、植物检疫合规的大批量稳定货源。','c3.cta':'索取批发目录',
    'sp.over':'主力属种','sp.h2':'两大属种。\n无限魅力。','sp.cta':'浏览完整目录',
    'pr.over':'合作流程','pr.h2':'从温室到您的门口',
    'faq.over':'常见问题','faq.h2':'下单前您需要了解的一切',
    'faq.ask':'立即咨询',
    'rfq.h2':'准备好采购优质多肉植物了吗？',
    'rfq.body':'告诉我们您的业务情况和需求，我们将在24小时内给出个性化方案——没有自动回复，没有销售话术。',
    'rfq.submit':'通过 WhatsApp 发送询盘',
    'f.name':'您的姓名 *','f.email':'电子邮件 *','f.country':'所在国家 *',
    'f.type':'采购类型 *','f.vars':'感兴趣的品种','f.msg':'项目描述 *',
    'footer.copy':'© 2025 SouthQuest Farm · succulentsfarm.com · 版权所有',
  },

  kr: {
    'nav.succulents':'다육식물','nav.farm':'농장 소개','nav.export':'수출 정보',
    'nav.countries':'수출 국가','nav.quote':'견적 문의','nav.cta':'견적 요청',
    'hero.badge':'중국 윈난성 · 해발 2,000m',
    'hero.title1':'세계 최고의','hero.title2':'다육식물이','hero.title3':'시작되는 곳',
    'hero.subtitle':'윈난성의 운무림 고지에 자리한 SouthQuest Farm은 40개국 이상의 수집가, 소매업체, 육묘장에 프리미엄 다육식물을 공급합니다. 완벽한 식물 검역 준수와 전문 물류 서비스를 제공합니다.',
    'hero.cta1':'프로그램 찾기','hero.cta2':'WhatsApp 상담',
    'hero.stat1v':'11년+','hero.stat1l':'재배 경력',
    'hero.stat2v':'200+','hero.stat2l':'품종 수',
    'hero.stat3v':'40+','hero.stat3l':'수출 국가',
    'trust.1v':'11년','trust.1l':'농장 역사',
    'trust.2v':'200+','trust.2l':'재배 품종',
    'trust.3v':'40+','trust.3l':'수출 시장',
    'trust.4v':'100%','trust.4l':'검역 적합',
    'sc.over':'프로그램 찾기','sc.h2':'귀하의 비즈니스를 가장 잘 설명하는 것은?',
    'sc.body':'파트너마다 요구사항이 다릅니다. 아래에서 프로필을 선택하시면 최적의 품종 구성, 출하 구조, 규정 준수 서류를 매칭해 드립니다.',
    'c1.badge':'소매 / 이커머스','c1.title':'소매 및 이커머스 파트너','c1.body':'Etsy 판매자, 식물 전문점, 온라인 쇼핑몰을 위한 큐레이션된 다육식물 번들을 신속하게 제공합니다.','c1.cta':'상담 시작',
    'c2.badge':'수집가','c2.title':'수집가 및 전문 식물 브랜드','c2.body':'카탈로그에서 구할 수 없는 희귀 식물 수집가를 위한 엄선된 박물관급 표본을 제공합니다.','c2.cta':'희귀 품종 문의',
    'c3.badge':'도매','c3.title':'육묘장 및 조경 구매자','c3.body':'균일한 사이즈와 식물검역 준수를 보장하는 상업용 대량 공급에 대응합니다.','c3.cta':'도매 카탈로그 요청',
    'sp.over':'주요 속','sp.h2':'두 가지 속.\n무한한 개성.','sp.cta':'전체 카탈로그 보기',
    'pr.over':'이용 방법','pr.h2':'온실에서 현관까지',
    'faq.over':'자주 묻는 질문','faq.h2':'첫 주문 전 알아야 할 모든 것',
    'faq.ask':'문의하기',
    'rfq.h2':'특별한 다육식물을 소싱할 준비가 되셨나요?',
    'rfq.body':'비즈니스와 원하시는 품종에 대해 알려주세요. 자동 응답 없이 24시간 이내에 맞춤 제안을 드립니다.',
    'rfq.submit':'WhatsApp으로 문의 보내기',
    'f.name':'이름 *','f.email':'이메일 *','f.country':'국가 *',
    'f.type':'구매자 유형 *','f.vars':'관심 품종','f.msg':'프로젝트 설명 *',
    'footer.copy':'© 2025 SouthQuest Farm · succulentsfarm.com · All rights reserved',
  },
};

/* ─── Apply Translations ────────────────────────────────── */
function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang === 'kr' ? 'ko' : lang === 'zh' ? 'zh-CN' : lang;

  // data-i18n attribute elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // ID-mapped elements (hero uses existing IDs)
  const idMap = {
    'hero-title-1':'hero.title1','hero-title-2':'hero.title2','hero-title-3':'hero.title3',
    'hero-subtitle':'hero.subtitle',
  };
  Object.entries(idMap).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && dict[key]) el.textContent = dict[key];
  });

  // Store preference
  try { localStorage.setItem('sq-lang', lang); } catch(e) {}
}

/* ─── Sticky Header ─────────────────────────────────────── */
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  function updateHeader() {
    header.classList.toggle('is-transparent', window.scrollY <= 60);
    header.classList.toggle('is-solid', window.scrollY > 60);
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
  const openNav = () => { mobileNav.classList.add('is-open'); document.body.style.overflow = 'hidden'; toggle.setAttribute('aria-expanded','true'); };
  const closeNav = () => { mobileNav.classList.remove('is-open'); document.body.style.overflow = ''; toggle.setAttribute('aria-expanded','false'); };
  toggle.addEventListener('click', () => mobileNav.classList.contains('is-open') ? closeNav() : openNav());
  backdrop && backdrop.addEventListener('click', closeNav);
  document.querySelectorAll('.mobile-nav__link').forEach(l => l.addEventListener('click', closeNav));
})();

/* ─── Language Switcher ─────────────────────────────────── */
(function () {
  const btns = document.querySelectorAll('.lang-btn');
  if (!btns.length) return;

  // Restore saved preference
  let saved = 'en';
  try { saved = localStorage.getItem('sq-lang') || 'en'; } catch(e) {}
  if (I18N[saved] && saved !== 'en') {
    btns.forEach(b => b.classList.toggle('is-active', b.dataset.lang === saved));
    applyLang(saved);
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      btns.forEach(b => { b.classList.remove('is-active'); b.setAttribute('aria-pressed','false'); });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed','true');
      applyLang(lang);
    });
  });
})();

/* ─── FAQ Accordion ─────────────────────────────────────── */
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
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
})();

/* ─── RFQ Form → WhatsApp ───────────────────────────────── */
(function () {
  const form = document.getElementById('rfq-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const text = encodeURIComponent(
      `Hi SouthQuest Farm,\n\nName: ${data.get('name')||''}\nCountry: ${data.get('country')||''}\nBuyer Type: ${data.get('buyer_type')||''}\n\n${data.get('message')||''}`
    );
    window.open(`https://wa.me/YOUR_WHATSAPP_NUM?text=${text}`, '_blank');
  });
})();
