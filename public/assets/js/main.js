/* ============================================================
   SOUTHQUEST FARM 鈥?main.js  v2
   Languages: EN / JP / ZH / KR
   WhatsApp: 8618685816496
   ============================================================ */

/* 鈹€鈹€鈹€ TRANSLATION DICTIONARY 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€ */
const I18N = {
  en: {
    'nav.succulents':'Succulents','nav.farm':'Our Farm','nav.export':'Export',
    'nav.countries':'Countries','nav.quote':'Get a Quote','nav.cta':'Request Quote',
    'hero.badge':'Yunnan, China 路 2,000m Elevation',
    'hero.title1':"Where the World's",'hero.title2':'Finest Succulents','hero.title3':'Begin Their Journey',
    'hero.subtitle':"Rooted in Yunnan's cloud-forest highlands, SouthQuest Farm supplies premium succulents to collectors, retailers, and nurseries across 40+ countries 鈥?with impeccable phytosanitary compliance and white-glove logistics.",
    'hero.cta1':'Find Your Program','hero.cta2':'Chat on WhatsApp',
    'hero.stat1v':'11+','hero.stat1l':'Years Growing',
    'hero.stat2v':'200+','hero.stat2l':'Varieties',
    'hero.stat3v':'40+','hero.stat3l':'Countries',
    'trust.1v':'11 Yrs','trust.1l':'Farm Heritage',
    'trust.2v':'200+','trust.2l':'Live Varieties',
    'trust.3v':'40+','trust.3l':'Export Markets',
    'trust.4v':'100%','trust.4l':'Phyto Compliant',
    'sc.over':'Find Your Program','sc.h2':'Which describes your business best?',
    'sc.body':"Every partner is different. Choose your profile below 鈥?we'll match you with the right variety mix, shipment structure, and compliance documentation for your market.",
    'c1.badge':'Retail & E-comm','c1.title':'Retail & E-commerce Partners','c1.body':'Etsy sellers, boutique plant shops, and online merchants looking for curated, fast-turnaround bundles that delight end-customers.','c1.cta':'Start a conversation',
    'c2.badge':'Collectors','c2.title':'Collectors & Specialty Brands','c2.body':'Hand-selected museum-quality specimens for rare plant curators who can\'t source from a catalogue.','c2.cta':'Inquire about rare picks',
    'c3.badge':'Wholesale','c3.title':'Nurseries & Landscape Buyers','c3.body':'Reliable high-volume capacity with tight size consistency and full phytosanitary compliance for commercial growers.','c3.cta':'Request bulk catalogue',
    'sp.over':'Our Signature Genera','sp.h2':'Two genera.\nInfinite character.','sp.cta':'Browse Full Catalogue',
    'pr.over':'How It Works','pr.h2':'From greenhouse to doorstep',
    'faq.over':'Common Questions','faq.h2':'Everything you need to know before your first order',
    'faq.ask':'Ask Us Anything',
    'rfq.h2':'Ready to source extraordinary plants?',
    'rfq.body':"Tell us about your business and what you're looking for. We'll respond within 24 hours with a personalised proposal 鈥?no automated replies, no sales scripts.",
    'rfq.submit':'Send Enquiry via WhatsApp',
    'f.name':'Your Name *','f.email':'Email Address *','f.country':'Your Country *',
    'f.type':'Buyer Type *','f.vars':'Varieties of Interest','f.msg':'Tell Us About Your Project *',
    'footer.copy':'漏 2025 SouthQuest Farm 路 succulentsfarm.com 路 All rights reserved',
  },

  ja: {
    'nav.succulents':'澶氳倝妞嶇墿','nav.farm':'杈插牬銇仱銇勩仸','nav.export':'杓稿嚭鎯呭牨',
    'nav.countries':'瀵捐薄鍥?,'nav.quote':'銇婅绌嶃倞','nav.cta':'瑕嬬渚濋牸',
    'hero.badge':'涓浗銉婚洸鍗楃渷 路 妯欓珮2,000m',
    'hero.title1':'涓栫晫鏈€楂樺搧璩伄','hero.title2':'澶氳倝妞嶇墿銇?,'hero.title3':'鏃呯珛銇ゅ牬鎵€',
    'hero.subtitle':'闆插崡鐪併伄闆查湩鏋楅珮鍦般倰鎷犵偣銇ㄣ仚銈婼outhQuest Farm銇€併偝銉偗銈裤兗銆佸皬澹叉キ鑰呫€併儕銉笺偦銉兗銇悜銇戙仸40銈浗浠ヤ笂銇搞儣銉儫銈儬澶氳倝妞嶇墿銈掍緵绲︺仐銇︺亜銇俱仚銆傚畬鐠с仾妞嶇墿妞滅柅銈炽兂銉椼儵銈ゃ偄銉炽偣銇ㄧ櫧鎵嬭銇儹銈搞偣銉嗐偅銈偣銇с€?,
    'hero.cta1':'銉椼儹銈般儵銉犮倰鎺仚','hero.cta2':'WhatsApp銇х浉璜?,
    'hero.stat1v':'11骞?','hero.stat1l':'鏍藉煿瀹熺妇',
    'hero.stat2v':'200绋?','hero.stat2l':'鍝佺ó鏁?,
    'hero.stat3v':'40銈浗+','hero.stat3l':'杓稿嚭鍏?,
    'trust.1v':'11骞?,'trust.1l':'杈插牬銇鍙?,
    'trust.2v':'200+','trust.2l':'鏍藉煿鍝佺ó',
    'trust.3v':'40+','trust.3l':'杓稿嚭甯傚牬',
    'trust.4v':'100%','trust.4l':'妞嶇墿妞滅柅閬╁悎',
    'sc.over':'銉椼儹銈般儵銉犮倰鎺仚','sc.h2':'銇傘仾銇熴伄銉撱偢銉嶃偣銇渶閬┿仾銉椼儵銉炽伅锛?,
    'sc.body':'銉戙兗銉堛儕銉笺伀銈堛仯銇︺儖銉笺偤銇銆呫仹銇欍€備笅瑷樸亱銈夈儣銉儠銈ｃ兗銉倰銇婇伕銇炽亸銇犮仌銇勩€傛渶閬┿仾鍝佺ó妲嬫垚銆佸嚭鑽蜂綋鍒躲€併偝銉炽儣銉┿偆銈兂銈规浉椤炪倰銇旀彁妗堛仐銇俱仚銆?,
    'c1.badge':'灏忓２銉籈C','c1.title':'灏忓２銉籈C銉戙兗銉堛儕銉?,'c1.body':'Etsy璨╁２鑰呫€佹鐗╁皞闁€搴椼€併偑銉炽儵銈ゃ兂銈枫儳銉冦儣鍚戙亼銇€佸幊閬搞仌銈屻仧銉愩兂銉夈儷銈掕繀閫熴伀銇婂眾銇戙仐銇俱仚銆?,'c1.cta':'銇婂晱銇勫悎銈忋仜',
    'c2.badge':'銈炽儸銈偪銉?,'c2.title':'銈炽儸銈偪銉笺兓灏傞杸銉栥儵銉炽儔','c2.body':'銈偪銉偘銇с伅鍏ユ墜銇с亶銇亜銆佸幊閬搞仌銈屻仧甯屽皯妯欐湰銈掋偝銉偗銈裤兗銈勫皞闁€銉栥儵銉炽儔銇搞亰灞娿亼銇椼伨銇欍€?,'c2.cta':'甯屽皯鍝佺ó銈掑晱銇勫悎銈忋仜銈?,
    'c3.badge':'鍗稿２','c3.title':'銉娿兗銈汇儶銉笺兓銉┿兂銉夈偣銈便兗銉?,'c3.body':'銈点偆銈恒伄涓€璨€с仺妞嶇墿妞滅柅銈炽兂銉椼儵銈ゃ偄銉炽偣銈掔⒑淇濄仐銇熴€侀珮鍝佽唱銇ぇ閲忎緵绲︺伀瀵惧繙銇椼伨銇欍€?,'c3.cta':'鍗稿２銈偪銉偘銈掕珛姹?,
    'sp.over':'涓昏銇睘','sp.h2':'浜屻仱銇睘銆俓n鐒￠檺銇€嬫€с€?,'sp.cta':'鍏ㄣ偒銈裤儹銈般倰瑕嬨倠',
    'pr.over':'銇斿埄鐢ㄣ伄娴併倢','pr.h2':'杈插牬銇嬨倝銉夈偄銇俱仹',
    'faq.over':'銈堛亸銇傘倠璩晱','faq.h2':'銇仒銈併仸銇敞鏂囧墠銇煡銇ｃ仸銇娿亸銇广亶銇撱仺',
    'faq.ask':'銇婂晱銇勫悎銈忋仜',
    'rfq.h2':'鐗瑰垾銇鑲夋鐗┿倰浠曞叆銈屻倠婧栧倷銇仹銇嶃仸銇勩伨銇欍亱锛?,
    'rfq.body':'銉撱偢銉嶃偣銇ㄦ帰銇椼仸銇勩倠鍝佺ó銇仱銇勩仸銇婅仦銇嬨仜銇忋仩銇曘亜銆傝嚜鍕曡繑淇°仾銇椼€?4鏅傞枔浠ュ唴銇€嬪垾鎻愭銈掋亰閫併倞銇椼伨銇欍€?,
    'rfq.submit':'WhatsApp銇у晱銇勫悎銈忋仜銈?,
    'f.name':'銇婂悕鍓?*','f.email':'銉°兗銉偄銉夈儸銈?*','f.country':'鍥?*',
    'f.type':'璩煎叆鑰呫偪銈ゃ儣 *','f.vars':'甯屾湜鍝佺ó','f.msg':'銉椼儹銈搞偋銈儓姒傝 *',
    'footer.copy':'漏 2025 SouthQuest Farm 路 succulentsfarm.com 路 All rights reserved',
  },

  zh: {
    'nav.succulents':'澶氳倝妞嶇墿','nav.farm':'鍏充簬鍐滃満','nav.export':'鍑哄彛鍚堣',
    'nav.countries':'鐩爣鍥藉','nav.quote':'璇环','nav.cta':'鐢宠鎶ヤ环',
    'hero.badge':'涓浗浜戝崡鐪?路 娴锋嫈2,000m',
    'hero.title1':'涓栫晫椤剁骇','hero.title2':'澶氳倝妞嶇墿','hero.title3':'浠庤繖閲屽惎绋?,
    'hero.subtitle':'SouthQuest Farm 鎵庢牴浜庝簯鍗椾簯闆惧北鏋楅珮鍦帮紝鍚戝叏鐞?0澶氫釜鍥藉鐨勬敹钘忓銆侀浂鍞晢鍜岃嫍鍦冧緵搴斾紭璐ㄥ鑲夋鐗┾€斺€旀彁渚涙棤鍙寫鍓旂殑妞嶇墿妫€鐤悎瑙勬湇鍔″拰绮惧績鍛垫姢鐨勭墿娴佹柟妗堛€?,
    'hero.cta1':'閫夋嫨鍚堜綔鏂规','hero.cta2':'WhatsApp 鍜ㄨ',
    'hero.stat1v':'11骞?','hero.stat1l':'绉嶆缁忛獙',
    'hero.stat2v':'200+','hero.stat2l':'鍝佺鏁伴噺',
    'hero.stat3v':'40+','hero.stat3l':'鍑哄彛鍥藉',
    'trust.1v':'11骞?,'trust.1l':'鍐滃満鍘嗗彶',
    'trust.2v':'200+','trust.2l':'鍦ㄥ敭鍝佺',
    'trust.3v':'40+','trust.3l':'鍑哄彛甯傚満',
    'trust.4v':'100%','trust.4l':'妞嶆鍚堣',
    'sc.over':'閫夋嫨鍚堜綔鏂规','sc.h2':'鍝鎻忚堪鏈€绗﹀悎鎮ㄧ殑涓氬姟锛?,
    'sc.body':'姣忎綅鍚堜綔浼欎即鐨勯渶姹傚悇涓嶇浉鍚屻€傝閫夋嫨鎮ㄧ殑绫诲瀷锛屾垜浠皢涓烘偍鍖归厤鏈€閫傚悎鐨勫搧绉嶇粍鍚堛€佸彂璐х粨鏋勫拰鍚堣鏂囦欢銆?,
    'c1.badge':'闆跺敭 / 鐢靛晢','c1.title':'闆跺敭涓庣數鍟嗗悎浣滀紮浼?,'c1.body':'闈㈠悜Etsy鍗栧銆佺簿鍝佹鐗╁簵鍙婄綉缁滃晢鎴凤紝鎻愪緵绮鹃€夈€佸揩閫熷懆杞殑澶氳倝妞嶇墿濂楄銆?,'c1.cta':'寮€濮嬪挩璇?,
    'c2.badge':'鏀惰棌瀹?,'c2.title':'鏀惰棌瀹朵笌涓撲笟妞嶇墿鍝佺墝','c2.body':'涓虹█鏈夋鐗╂敹钘忓鎻愪緵鏃犳硶浠庣洰褰曚腑璐緱鐨勫崥鐗╅绾х簿鍝佹爣鏈€?,'c2.cta':'鍜ㄨ绋€鏈夊搧绉?,
    'c3.badge':'鎵瑰彂','c3.title':'鑻楀渻涓庢櫙瑙傞噰璐晢','c3.body':'涓哄晢涓氱妞嶅晢鎻愪緵瑙勬牸缁熶竴銆佹鐗╂鐤悎瑙勭殑澶ф壒閲忕ǔ瀹氳揣婧愩€?,'c3.cta':'绱㈠彇鎵瑰彂鐩綍',
    'sp.over':'涓诲姏灞炵','sp.h2':'涓ゅぇ灞炵銆俓n鏃犻檺榄呭姏銆?,'sp.cta':'娴忚瀹屾暣鐩綍',
    'pr.over':'鍚堜綔娴佺▼','pr.h2':'浠庢俯瀹ゅ埌鎮ㄧ殑闂ㄥ彛',
    'faq.over':'甯歌闂','faq.h2':'涓嬪崟鍓嶆偍闇€瑕佷簡瑙ｇ殑涓€鍒?,
    'faq.ask':'绔嬪嵆鍜ㄨ',
    'rfq.h2':'鍑嗗濂介噰璐紭璐ㄥ鑲夋鐗╀簡鍚楋紵',
    'rfq.body':'鍛婅瘔鎴戜滑鎮ㄧ殑涓氬姟鎯呭喌鍜岄渶姹傦紝鎴戜滑灏嗗湪24灏忔椂鍐呯粰鍑轰釜鎬у寲鏂规鈥斺€旀病鏈夎嚜鍔ㄥ洖澶嶏紝娌℃湁閿€鍞瘽鏈€?,
    'rfq.submit':'閫氳繃 WhatsApp 鍙戦€佽鐩?,
    'f.name':'鎮ㄧ殑濮撳悕 *','f.email':'鐢靛瓙閭欢 *','f.country':'鎵€鍦ㄥ浗瀹?*',
    'f.type':'閲囪喘绫诲瀷 *','f.vars':'鎰熷叴瓒ｇ殑鍝佺','f.msg':'椤圭洰鎻忚堪 *',
    'footer.copy':'漏 2025 SouthQuest Farm 路 succulentsfarm.com 路 鐗堟潈鎵€鏈?,
  },

  kr: {
    'nav.succulents':'雼れ湣鞁濍','nav.farm':'雴嶌灔 靻岅皽','nav.export':'靾橃稖 鞝曤炒',
    'nav.countries':'靾橃稖 甑皜','nav.quote':'瓴爜 氍胳潣','nav.cta':'瓴爜 鞖旍箔',
    'hero.badge':'欷戧淡 鞙堧倻靹?路 頃措皽 2,000m',
    'hero.title1':'靹戈硠 斓滉碃鞚?,'hero.title2':'雼れ湣鞁濍鞚?,'hero.title3':'鞁滌瀾霅橂姅 瓿?,
    'hero.subtitle':'鞙堧倻靹膘潣 鞖措毽?瓿犾鞐?鞛愲Μ頃?SouthQuest Farm鞚€ 40臧滉淡 鞚挫儊鞚?靾橃臧€, 靻岆Г鞐呾泊, 鞙‰瑯鞛レ棎 頂勲Μ氙胳梽 雼れ湣鞁濍鞚?瓿店笁頃╇媹雼? 鞕勲步頃?鞁濍 瓴€鞐?欷€靾橃檧 鞝勲 氍茧 靹滊箘鞀るゼ 鞝滉车頃╇媹雼?',
    'hero.cta1':'頂勲攴鸽灗 彀娟赴','hero.cta2':'WhatsApp 靸侂嫶',
    'hero.stat1v':'11雲?','hero.stat1l':'鞛鞍 瓴诫牓',
    'hero.stat2v':'200+','hero.stat2l':'頀堨 靾?,
    'hero.stat3v':'40+','hero.stat3l':'靾橃稖 甑皜',
    'trust.1v':'11雲?,'trust.1l':'雴嶌灔 鞐偓',
    'trust.2v':'200+','trust.2l':'鞛鞍 頀堨',
    'trust.3v':'40+','trust.3l':'靾橃稖 鞁滌灔',
    'trust.4v':'100%','trust.4l':'瓴€鞐?鞝來暕',
    'sc.over':'頂勲攴鸽灗 彀娟赴','sc.h2':'攴€頃橃潣 牍勳雼堨姢毳?臧€鞛?鞛?靹る獏頃橂姅 瓴冹潃?',
    'sc.body':'韺岉姼雱堧雼?鞖旉惮靷暛鞚?雼る雼堧嫟. 鞎勲灅鞐愳劀 頂勲頃勳潉 靹犿儩頃橃嫓氅?斓滌爜鞚?頀堨 甑劚, 於滍晿 甑“, 攴滌爼 欷€靾?靹滊毳?毵れ弓頃?霌滊雼堧嫟.',
    'c1.badge':'靻岆Г / 鞚挫护毹胳姢','c1.title':'靻岆Г 氚?鞚挫护毹胳姢 韺岉姼雱?,'c1.body':'Etsy 韺愲Г鞛? 鞁濍 鞝勲鞝? 鞓澕鞚?靽柬晳氇办潉 鞙勴暅 韥愲爤鞚挫厴霅?雼れ湣鞁濍 氩堧摛鞚?鞁犾啀頃橁矊 鞝滉车頃╇媹雼?','c1.cta':'靸侂嫶 鞁滌瀾',
    'c2.badge':'靾橃臧€','c2.title':'靾橃臧€ 氚?鞝勲 鞁濍 敫岆灉霌?,'c2.body':'旃错儓搿滉犯鞐愳劀 甑暊 靾?鞐嗠姅 頋穩 鞁濍 靾橃臧€毳?鞙勴暅 鞐勳劆霅?氚曤甏€旮?響滊掣鞚?鞝滉车頃╇媹雼?','c2.cta':'頋穩 頀堨 氍胳潣',
    'c3.badge':'霃勲Г','c3.title':'鞙‰瑯鞛?氚?臁瓣步 甑Г鞛?,'c3.body':'攴犾澕頃?靷澊歃堨檧 鞁濍瓴€鞐?欷€靾橂ゼ 氤挫灔頃橂姅 靸侅梾鞖?雽€霟?瓿店笁鞐?雽€鞚戫暕雼堧嫟.','c3.cta':'霃勲Г 旃错儓搿滉犯 鞖旍箔',
    'sp.over':'欤检殧 靻?,'sp.h2':'霊?臧€歆€ 靻?\n氍错暅頃?臧滌劚.','sp.cta':'鞝勳泊 旃错儓搿滉犯 氤搓赴',
    'pr.over':'鞚挫毄 氚╇矔','pr.h2':'鞓嫟鞐愳劀 順勱磤旯岇',
    'faq.over':'鞛愳＜ 氍浑姅 歆堧','faq.h2':'觳?欤茧 鞝?鞎岇晞鞎?頃?氇摖 瓴?,
    'faq.ask':'氍胳潣頃橁赴',
    'rfq.h2':'韸闺硠頃?雼れ湣鞁濍鞚?靻岇嫳頃?欷€牍勱皜 霅橃叏雮橃殧?',
    'rfq.body':'牍勳雼堨姢鞕€ 鞗愴晿鞁滊姅 頀堨鞐?雽€頃?鞎岆牑欤检劯鞖? 鞛愲彊 鞚戨嫷 鞐嗢澊 24鞁滉皠 鞚措偞鞐?毵烄钉 鞝滌晥鞚?霌滊雼堧嫟.',
    'rfq.submit':'WhatsApp鞙茧 氍胳潣 氤措偞旮?,
    'f.name':'鞚措 *','f.email':'鞚措鞚?*','f.country':'甑皜 *',
    'f.type':'甑Г鞛?鞙犿槙 *','f.vars':'甏€鞁?頀堨','f.msg':'頂勲鞝濏姼 靹る獏 *',
    'footer.copy':'漏 2025 SouthQuest Farm 路 succulentsfarm.com 路 All rights reserved',
  },
};

/* 鈹€鈹€鈹€ Apply Translations 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€ */
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

/* 鈹€鈹€鈹€ Sticky Header 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€ */
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

/* 鈹€鈹€鈹€ Mobile Nav 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€ */
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

/* 鈹€鈹€鈹€ Language Switcher 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€ */
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

/* 鈹€鈹€鈹€ FAQ Accordion 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€ */
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

/* 鈹€鈹€鈹€ Compliance Accordion 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€ */
(function () {
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', item.classList.contains('is-open'));
    });
  });
})();

/* 鈹€鈹€鈹€ Scroll Reveal 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€ */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
})();

/* 鈹€鈹€鈹€ RFQ Form 鈫?WhatsApp 鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€ */
(function () {
  const form = document.getElementById('rfq-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const text = encodeURIComponent(
      `Hi SouthQuest Farm,\n\nName: ${data.get('name')||''}\nCountry: ${data.get('country')||''}\nBuyer Type: ${data.get('buyer_type')||''}\n\n${data.get('message')||''}`
    );
    window.open(`https://wa.me/8618685816496?text=${text}`, '_blank');
  });
})();

