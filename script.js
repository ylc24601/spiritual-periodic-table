'use strict';

/* ═══════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════ */

const ELEMENTS = [
  {sym:'Na',no:11,zh:'鈉',eng:'Sodium',type:'action',
   title:'直率衝動的<br>開拓者',target:'急性子、開拓型同工',
   sci:'活潑、遇水劇烈反應、高能量',
   sp:'說做就做的行動派；直來直往沒有惡意；遇見呼召就跳出船去，是開拓者的本色。',
   weak:'熱情是你的燃料；學習在行動前多聽一句，是你的成長功課。',
   verse:'你來吧。彼得就從船上下去，在水面上走，要到耶穌那裡去。\n—馬太福音 14:29',person:'彼得'},
  {sym:'O',no:8,zh:'氧',eng:'Oxygen',type:'action',
   title:'熱情溫暖的<br>激勵者',target:'活潑熱心的服事者',
   sci:'助燃、維持生命必需、活性大',
   sp:'氣氛製造機；喜歡鼓勵別人、搧風點火讓服事更火熱；教會不可或缺。',
   weak:'熱情是你的恩賜；學習讓火焰穩燃而非瞬間爆發，才能長久助燃他人。',
   verse:'趁著白日，我們必須做那差我來者的工。\n—約翰福音 9:4',person:'巴拿巴'},
  {sym:'P',no:15,zh:'磷',eng:'Phosphorus',type:'action',
   title:'燃燒自己的<br>奉獻者',target:'有使命感、容易過度付出的同工',
   sci:'火柴關鍵成分、自燃傾向、傳遞能量（ATP）',
   sp:'甘心燃燒自己成就他人；充滿使命感；把自己交給神，祂會在你快燒盡前差天使來。',
   weak:'燃燒是你的方式；學習在休止符裡聽見神的聲音，才能讓使命走得更遠。',
   verse:'起來吃吧，你當走的路甚遠。\n—列王記上 19:7',person:'以利亞'},
  {sym:'Ti',no:22,zh:'鈦',eng:'Titanium',type:'action',
   title:'跨界先鋒的<br>改革者',target:'跨界服事的職場基督徒',
   sci:'輕盈卻強韌、抗腐蝕、應用於航太與醫療',
   sp:'在不同領域見證信仰；勇於進入陌生環境；兼具柔軟與剛強。',
   weak:'跨界是你的恩賜；學習在群體中謙遜同行，讓果實比一個人更豐盛。',
   verse:'我靠著那加給我力量的，凡事都能做。\n—腓立比書 4:13',person:'但以理'},
  {sym:'Au',no:79,zh:'金',eng:'Gold',type:'structural',
   title:'歷久彌新的<br>智慧者',target:'經歷過風浪與試練的同工',
   sci:'抗腐蝕、延展性佳、不怕火煉',
   sp:'經歷風浪信心依然堅定；話語寶貴能給人指引；心胸寬大具包容性。',
   weak:'穩健是你的智慧；學習在適當時機說出經驗與想法，是你給他人的禮物。',
   verse:'祂試煉我之後，我必如精金。\n—約伯記 23:10',person:'約伯'},
  {sym:'Fe',no:26,zh:'鐵',eng:'Iron',type:'structural',
   title:'堅定剛強的<br>建造者',target:'核心同工、負責人',
   sci:'建材骨架、具磁性、若不保養會生鏽',
   sp:'承擔重任的支柱；堅定剛強有條理；需要聖靈油膏抹與同伴消磁放鬆。',
   weak:'剛強是你的呼召；學習開口讓人關顧你，承擔才能更長久有力。',
   verse:'我也專心修造這城牆，並沒有置買田地。\n—尼希米記 5:16',person:'尼希米'},
  {sym:'Ca',no:20,zh:'鈣',eng:'Calcium',type:'structural',
   title:'默默支撐的<br>守護者',target:'喜歡幕後支持、成全他人的人',
   sci:'骨骼基礎、隱藏但支撐全體',
   sp:'不愛舞台燈光，喜歡幕後支持；成全別人；教會結構的關鍵。',
   weak:'幕後是你的位置；學習偶爾讓人看見你的付出，接受感謝也是一種服事。',
   verse:'身上肢體人以為軟弱的，更是不可少的。\n—哥林多前書 12:22',person:'馬大'},
  {sym:'Si',no:14,zh:'矽',eng:'Silicon',type:'structural',
   title:'理性穩重的<br>思考者',target:'喜好邏輯思考與研讀聖經的人',
   sci:'沙子主成分、晶片基石、耐高溫堅硬',
   sp:'信仰根基堅定的磐石；邏輯清晰能處理複雜問題；幕後承載重任運作事工。',
   weak:'邏輯是你的磐石；學習讓感動帶你說話，才能打動不只是頭腦的人。',
   verse:'把房子蓋在磐石上。\n—馬太福音 7:24',person:'路加'},
  {sym:'C',no:6,zh:'碳',eng:'Carbon',type:'relational',
   title:'適應力強的<br>連結者',target:'公關型、適應力強的人物',
   sci:'多變（石墨或鑽石）、有機生命基礎、易鍵結',
   sp:'跨世代的橋樑；多才多藝能適應不同服事崗位；為了福音向什麼人就作什麼樣的人。',
   weak:'靈活是你的橋樑；定期停下來問我是誰，讓每一次連結都更有根基。',
   verse:'向什麼樣的人，我就作什麼樣的人。\n—哥林多前書 9:22',person:'保羅'},
  {sym:'Cu',no:29,zh:'銅',eng:'Copper',type:'relational',
   title:'溫暖傳遞的<br>協調者',target:'熱心助人或閱歷豐富者',
   sci:'導電導熱佳、會生成銅綠保護層',
   sp:'熱心傳遞愛的溫暖；善於溝通協調；歲月痕跡是智慧的保護層。',
   weak:'協調是你的溫度；學習讓對方自己走出那一步，是愛的成熟。',
   verse:'要用愛心說誠實話。\n—以弗所書 4:15',person:'百基拉'},
  {sym:'H',no:1,zh:'氫',eng:'Hydrogen',type:'relational',
   title:'單純謙卑的<br>補位者',target:'默默付出的基礎同工',
   sci:'宇宙最輕最多、水（H₂O）的基礎',
   sp:'單純正直；默默補位的基礎；渴慕與人連結、不愛落單。',
   weak:'謙卑是你的美德；學習讓人看見你的需要，真正的團契是彼此承載。',
   verse:'凡自卑的，必升為高。\n—路加福音 14:11',person:'路得'},
  {sym:'K',no:19,zh:'鉀',eng:'Potassium',type:'relational',
   title:'敏銳感受的<br>禱告者',target:'禱告組、對屬靈感應敏銳的人',
   sci:'維持細胞電位、心臟節律的關鍵',
   sp:'靈裡敏銳、感受群體的心跳；禱告事奉的核心；若缺席教會就節律失調。',
   weak:'敏銳是你的恩賜；學習為自己的心設立界限，禱告才能更可持續。',
   verse:'我晝夜不住地為你禱告。\n—提摩太後書 1:3',person:'哈拿'},
  {sym:'He',no:2,zh:'氦',eng:'Helium',type:'stabilizing',
   title:'和平喜樂的<br>觀察者',target:'內向、以和為貴、因知足而平靜的人',
   sci:'惰性氣體、電子層完全自足、輕盈不與外界鍵結',
   sp:'情緒穩定不愛爭吵；自足而安靜，是群體裡不可少的定海針；單純喜樂因知足而選擇安靜。',
   weak:'平靜是你的禮物；學習在適當時刻開口，你的一句話往往比你想像的更有分量。',
   verse:'敬虔加上知足的心便是大利了。\n—提摩太前書 6:6',person:'馬利亞'},
  {sym:'N',no:7,zh:'氮',eng:'Nitrogen',type:'stabilizing',
   title:'沉穩內斂的<br>平衡者',target:'淡定、默默陪伴、結構性存在的人',
   sci:'佔空氣78%、無色無味、稀釋氧氣防暴衝',
   sp:'情緒調節者，讓氣氛冷靜；低調陪伴是結構性的存在；話語是別人成長的養分。',
   weak:'沉穩是你的結構；學習主動表達在場，讓人感受到你的陪伴是真實的溫度。',
   verse:'至於我，斷不停止為你們禱告；我必以善道正路指教你們。\n—撒母耳記上 12:23',person:'撒母耳'},
  {sym:'Ag',no:47,zh:'銀',eng:'Silver',type:'stabilizing',
   title:'反映基督的<br>自省者',target:'在意言行、經常自省的人',
   sci:'反光能力最強、遇髒空氣易變黑需擦拭',
   sp:'生命反映基督樣式；對罪敏感、經常自我省察悔改；溫柔貴重。',
   weak:'敏銳的自省是你的特質；學習在恩典中站立，省察是成長的起點而非定罪的終點。',
   verse:'我們眾人既然敞著臉，得以看見主的榮光，好像從鏡子裡返照。\n—哥林多後書 3:18',person:'大衛'},
  {sym:'Cl',no:17,zh:'氯',eng:'Chlorine',type:'stabilizing',
   title:'真理的聖潔<br>守望者',target:'講話直率、黑白分明的人',
   sci:'氣味刺鼻、專門殺菌消毒',
   sp:'黑白分明、對真理有高標準；直言不諱的保護者；需要恩典的鈉來中和成鹽。',
   weak:'守護真理是你的呼召；學習讓真話帶著溫度，讓人感受到你說的是愛而非審判。',
   verse:'你們的話要常常帶著和氣，好像用鹽調和。\n—歌羅西書 4:6',person:'施洗約翰'}
];

const COMPOUNDS = [
  {f:'NaCl',pun:'氯接鈉 ＝ 接納',desc:'最衝動的鈉（Na）＋最剛直的氯（Cl），鍵結後成為食鹽——生命必需、溫和穩定。教會裡最難合作的兩種人，彼此接納之後，反而成為世上的鹽。',verse:'你們是世上的鹽。—馬太福音 5:13'},
  {f:'H₂O',pun:'氫＋氧 ＝ 活水',desc:'最輕最簡單的氫（H）＋助燃的氧（O），合而為一不是爆炸，而是活水。謙卑單純的人與熱情激勵者同心，湧現生命泉源。',verse:'我所賜的水，在他裡頭成為泉源，直湧到永生。—約翰福音 4:14'},
  {f:'CO₂',pun:'碳＋氧 ＝ 呼出的禱告',desc:'看似廢棄的碳與氧組合，卻是植物光合作用的養分，使萬物生長。你覺得軟弱的禱告，在神手中成為滋養他人的力量。',verse:'聖靈親自用說不出來的嘆息替我們禱告。—羅馬書 8:26'},
  {f:'CaC₂',pun:'電石 ＝ 等候發光',desc:'鈣（Ca）與碳（C）平時沉默，看似無用，遇到活水卻立刻燃燒發光。許多幕後同工就像電石——他們在等候聖靈澆灌的時刻。',verse:'我是世界的光。跟從我的，必要得著生命的光。—約翰福音 8:12'},
  {f:'AgCl',pun:'感光底片 ＝ 屬靈攝影師',desc:'聖潔的銀（Ag）＋守望的氯（Cl）→ 氯化銀是傳統底片感光材料，對光極度敏感。他們記錄神在群體中的作為，是教會的見證者。',verse:'你要把所看見的，現在的事，並將來必成的事，都寫出來。—啟示錄 1:19'},
  {f:'AuCu',pun:'玫瑰合金 ＝ 成熟的接納',desc:'亮金的尊貴與銅的溫暖交織成玫瑰金——成熟與親切一起，讓服事既高貴又貼近人心。',verse:'愛是恆久忍耐，又有恩慈。—哥林多前書 13:4'},
  {f:'SiO₂',pun:'矽氧共舞 ＝ 智慧透明',desc:'矽（Si）是堅固基礎，氧（O）是生命氣息；合而為一成為透明的玻璃。清晰而穩固的團隊，來自理性與熱情的共同築造。',verse:'智慧比珍珠更寶貴。—箴言 3:15'},
  {f:'TiO₂',pun:'鈦陽 ＝ 在光中潔淨',desc:'最強韌的鈦（Ti）＋助燃的氧（O），合成二氧化鈦——光觸媒，在陽光照射下能分解一切污垢。改革者與激勵者結合，在光裡帶來更新與潔淨。',verse:'你們是世上的光。—馬太福音 5:14'},
  {f:'KCl',pun:'守護心跳的鹽',desc:'感知心律的鉀（K）＋殺菌守望的氯（Cl），合成氯化鉀——補充心律失調缺乏的電解質。敏銳的禱告者與剛直的守望者結合，是教會靈命的護心鹽。',verse:'我立你作以色列家守望的人。—以西結書 3:17'},
  {f:'Fe·O₂',pun:'血紅素 ＝ 背負生命的鐵',desc:'沉默剛強的鐵（Fe）緊緊抓住氧（O），成為血紅素——在血液裡把生命輸送到全身每個角落。最不起眼、默默負重的人，正是運送生命的關鍵。',verse:'因為活物的生命是在血中。—利未記 17:11'},
  {f:'Ca₃(PO₄)₂',pun:'骨骼 ＝ 看不見的支撐',desc:'鈣（Ca）與磷（P）結合成磷酸鈣，是骨骼與牙齒的主成分——看不見、不被稱讚，卻撐起整個身體的重量。',verse:'身上肢體，人以為軟弱的，更是不可少的。—哥林多前書 12:22'}
];

const MIXTURES = [
  {f:'空氣',pun:'各守本位的同在',desc:'氮（N）、氧（O）與惰性的氦（He）彼此不鍵結、各自保持本性，只是混合在一起，就成了維繫萬物呼吸的空氣。有些肢體不需要與人「融合」才有價值——他們安靜的同在，本身就是群體呼吸的氣息。',verse:'耶和華神將生氣吹在他鼻孔裡，他就成了有靈的活人。—創世記 2:7'}
];

// Full periodic table: [atomicNo, symbol, group(1-18), period(1-7)]
const MAIN = [
  [1,'H',1,1],[2,'He',18,1],
  [3,'Li',1,2],[4,'Be',2,2],[5,'B',13,2],[6,'C',14,2],[7,'N',15,2],[8,'O',16,2],[9,'F',17,2],[10,'Ne',18,2],
  [11,'Na',1,3],[12,'Mg',2,3],[13,'Al',13,3],[14,'Si',14,3],[15,'P',15,3],[16,'S',16,3],[17,'Cl',17,3],[18,'Ar',18,3],
  [19,'K',1,4],[20,'Ca',2,4],[21,'Sc',3,4],[22,'Ti',4,4],[23,'V',5,4],[24,'Cr',6,4],[25,'Mn',7,4],[26,'Fe',8,4],
  [27,'Co',9,4],[28,'Ni',10,4],[29,'Cu',11,4],[30,'Zn',12,4],[31,'Ga',13,4],[32,'Ge',14,4],[33,'As',15,4],[34,'Se',16,4],[35,'Br',17,4],[36,'Kr',18,4],
  [37,'Rb',1,5],[38,'Sr',2,5],[39,'Y',3,5],[40,'Zr',4,5],[41,'Nb',5,5],[42,'Mo',6,5],[43,'Tc',7,5],[44,'Ru',8,5],
  [45,'Rh',9,5],[46,'Pd',10,5],[47,'Ag',11,5],[48,'Cd',12,5],[49,'In',13,5],[50,'Sn',14,5],[51,'Sb',15,5],[52,'Te',16,5],[53,'I',17,5],[54,'Xe',18,5],
  [55,'Cs',1,6],[56,'Ba',2,6],
  [72,'Hf',4,6],[73,'Ta',5,6],[74,'W',6,6],[75,'Re',7,6],[76,'Os',8,6],[77,'Ir',9,6],[78,'Pt',10,6],[79,'Au',11,6],
  [80,'Hg',12,6],[81,'Tl',13,6],[82,'Pb',14,6],[83,'Bi',15,6],[84,'Po',16,6],[85,'At',17,6],[86,'Rn',18,6],
  [87,'Fr',1,7],[88,'Ra',2,7],
  [104,'Rf',4,7],[105,'Db',5,7],[106,'Sg',6,7],[107,'Bh',7,7],[108,'Hs',8,7],[109,'Mt',9,7],[110,'Ds',10,7],[111,'Rg',11,7],
  [112,'Cn',12,7],[113,'Nh',13,7],[114,'Fl',14,7],[115,'Mc',15,7],[116,'Lv',16,7],[117,'Ts',17,7],[118,'Og',18,7]
];

const LANTH = [
  [57,'La'],[58,'Ce'],[59,'Pr'],[60,'Nd'],[61,'Pm'],[62,'Sm'],[63,'Eu'],
  [64,'Gd'],[65,'Tb'],[66,'Dy'],[67,'Ho'],[68,'Er'],[69,'Tm'],[70,'Yb'],[71,'Lu']
];
const ACTIN = [
  [89,'Ac'],[90,'Th'],[91,'Pa'],[92,'U'],[93,'Np'],[94,'Pu'],[95,'Am'],
  [96,'Cm'],[97,'Bk'],[98,'Cf'],[99,'Es'],[100,'Fm'],[101,'Md'],[102,'No'],[103,'Lr']
];

const PAL = {
  action:     ['#FF7F6B','#E05A44','#FFF0ED'],
  structural: ['#F0A840','#C07820','#FFF8EC'],
  relational: ['#4EC8B0','#2A9880','#EDFAF7'],
  stabilizing:['#8AAEE0','#4A78C0','#EEF3FC']
};

const META = {
  action:     {name:'行動型',emoji:'🔥'},
  structural: {name:'支撐型',emoji:'🏛️'},
  relational: {name:'連結型',emoji:'🌿'},
  stabilizing:{name:'穩定型',emoji:'🕊️'}
};

const TYPE_ORDER = ['action','structural','relational','stabilizing'];

const COMP_THEME = {
  lively: {
    bg:'#1c2340', rule:'rgba(255,255,255,.14)', head:'rgba(240,237,228,.55)',
    card:'rgba(255,255,255,.05)', border:'rgba(255,255,255,.09)',
    formula:'#F0EDE4', pun:'#F0A840', desc:'rgba(240,237,228,.62)',
    verseTx:'rgba(240,237,228,.55)', verseBg:'rgba(255,255,255,.06)'
  },
  fresh: {
    bg:'#F2EFE9', rule:'#DCD6CA', head:'#8C8377',
    card:'#fff', border:'#ECE7DD',
    formula:'#2A2622', pun:'#E05A44', desc:'#8C8377',
    verseTx:'#7A8C84', verseBg:'#FFF6F2'
  }
};

/* ═══════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════ */

let appStyle = 'lively';
let appLayout = 'table';
let cardFlipped = {};
let modalSym = null;
let modalFlipped = false;

const elemBySym = {};
ELEMENTS.forEach(e => elemBySym[e.sym] = e);

/* ═══════════════════════════════════════════════════════
   STATE SETTERS
═══════════════════════════════════════════════════════ */

function setStyle(s) {
  appStyle = s;
  modalSym = null; modalFlipped = false;
  render();
}

function setLayout(l) {
  appLayout = l;
  modalSym = null; modalFlipped = false;
  render();
}

/* ═══════════════════════════════════════════════════════
   CARD FLIP (in-place DOM update, no full re-render)
═══════════════════════════════════════════════════════ */

function toggleFlip(sym) {
  cardFlipped[sym] = !cardFlipped[sym];
  const inner = document.querySelector('.card-inner[data-sym="' + sym + '"]');
  if (inner) {
    var tx = cardFlipped[sym] ? 'rotateY(180deg)' : 'rotateY(0deg)';
    inner.style.transform = tx;
    inner.style.webkitTransform = tx;
  }
}

/* ═══════════════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════════════ */

function openModal(sym) {
  modalSym = sym; modalFlipped = false;
  renderModal();
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  modalSym = null;
  document.getElementById('modal').style.display = 'none';
}

function toggleModalFlip() {
  modalFlipped = !modalFlipped;
  const f = document.getElementById('modal-flipper');
  if (f) {
    var tx = modalFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
    f.style.transform = tx;
    f.style.webkitTransform = tx;
  }
}

/* ═══════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════ */

function splitVerse(v) {
  const i = v.indexOf('\n—');
  return i >= 0 ? [v.slice(0, i), v.slice(i + 1)] : [v, ''];
}

/* ═══════════════════════════════════════════════════════
   CARD BACK HTML (shared by grid + modal, both styles)
═══════════════════════════════════════════════════════ */

function cardBackHTML(el, style) {
  const [c, cDeep, cPale] = PAL[el.type];
  const [vt, vr] = splitVerse(el.verse);
  const titleStr = el.title.replace('<br>', '');
  const isL = style === 'lively';

  const headerBg     = isL ? cPale : '#fff';
  const hBorderStyle = isL ? '' : 'border-bottom:1px solid #EFEAE0;';
  const badgeBg      = isL ? c : '#fff';
  const badgeBorder  = isL ? '' : 'border:1.5px solid ' + c + ';';
  const badgeColor   = isL ? '#fff' : cDeep;
  const badgeFont    = isL ? '900 23px' : '500 19px';
  const badgeR       = isL ? '11px' : '3px';
  const verseBox     = isL
    ? 'background:' + cPale + '; border-radius:9px; padding:10px 12px;'
    : 'border-left:2px solid ' + c + '; padding:0 0 0 10px;';

  return (
    '<div style="padding:' + (isL ? '14px 16px' : '13px 14px 11px') + '; display:flex; align-items:center; gap:' + (isL ? '11' : '9') + 'px; background:' + headerBg + '; ' + hBorderStyle + '">' +
      '<div style="width:' + (isL ? '46' : '38') + 'px; height:' + (isL ? '46' : '38') + 'px; flex-shrink:0; background:' + badgeBg + '; ' + badgeBorder + ' border-radius:' + badgeR + '; display:flex; align-items:center; justify-content:center; font:' + badgeFont + ' \'Varela Round\',\'Nunito\'; color:' + badgeColor + ';">' + el.sym + '</div>' +
      '<div style="flex:1; min-width:0;">' +
        '<div style="font:700 ' + (isL ? '17' : '14') + 'px/1.3 \'Noto Serif TC\'; color:#2A2420;">' + titleStr + '</div>' +
        '<div style="font:400 ' + (isL ? '12' : '10') + 'px \'' + (isL ? 'Varela Round' : 'Nunito') + '\'; color:#A89F92;">' + el.zh + ' · ' + el.eng + (isL ? ' · ' + el.no : '') + '</div>' +
      '</div>' +
      (el.person ? '<div style="font:' + (isL ? '600 13px' : '700 11px') + ' \'Noto Serif TC\'; color:' + cDeep + '; flex-shrink:0;">' + (isL ? '📖 ' : '') + el.person + '</div>' : '') +
    '</div>' +
    '<div class="bk-scroll" style="flex:1; overflow-y:auto; padding:' + (isL ? '14px 16px 16px' : '11px 14px 13px') + ';">' +
      '<div style="font:700 ' + (isL ? '10' : '9') + 'px \'Noto Sans TC\'; letter-spacing:.18em; color:#B3A99C; margin-bottom:2px;">適合對象</div>' +
      '<div style="font:400 ' + (isL ? '13' : '12') + 'px/1.65 \'Noto Sans TC\'; color:#6B6358; margin-bottom:' + (isL ? '10' : '9') + 'px;">' + el.target + '</div>' +
      '<div style="font:700 ' + (isL ? '10' : '9') + 'px \'Noto Sans TC\'; letter-spacing:.18em; color:#B3A99C; margin-bottom:2px;">科學特性</div>' +
      '<div style="font:400 ' + (isL ? '13' : '12') + 'px/1.65 \'Noto Sans TC\'; color:#6B6358; margin-bottom:' + (isL ? '10' : '9') + 'px;">' + el.sci + '</div>' +
      '<div style="font:700 ' + (isL ? '10' : '9') + 'px \'Noto Sans TC\'; letter-spacing:.18em; color:#B3A99C; margin-bottom:2px;">屬靈特質</div>' +
      '<div style="font:400 ' + (isL ? '13' : '12') + 'px/1.65 \'Noto Sans TC\'; color:#4A443C; margin-bottom:' + (isL ? '10' : '9') + 'px;">' + el.sp + '</div>' +
      '<div style="font:700 ' + (isL ? '10' : '9') + 'px \'Noto Sans TC\'; letter-spacing:.18em; color:#B3A99C; margin-bottom:2px;">留意</div>' +
      '<div style="font:italic 400 ' + (isL ? '13' : '12') + 'px/1.65 \'Noto Sans TC\'; color:#8C8377; margin-bottom:' + (isL ? '12' : '11') + 'px;">' + el.weak + '</div>' +
      '<div style="' + verseBox + ' font:400 ' + (isL ? '13' : '12') + 'px/1.7 \'Noto Serif TC\'; color:' + cDeep + ';">' + vt +
        '<div style="font-size:' + (isL ? '11' : '10') + 'px; color:#A89F92; margin-top:' + (isL ? '4' : '3') + 'px;">' + vr + '</div>' +
      '</div>' +
    '</div>'
  );
}

/* ═══════════════════════════════════════════════════════
   CARD FRONT — LIVELY
═══════════════════════════════════════════════════════ */

function cardFrontLively(el) {
  const [c, cDeep, cPale] = PAL[el.type];
  const m = META[el.type];
  const parts = el.title.split('<br>');
  return (
    '<div style="height:54%; position:relative; background:linear-gradient(155deg,' + c + ',' + cDeep + '); display:flex; flex-direction:column; align-items:center; justify-content:center;">' +
      '<span style="position:absolute; top:10px; left:12px; font:300 18px \'Varela Round\',\'Nunito\'; color:rgba(255,255,255,.7);">' + el.no + '</span>' +
      '<span style="position:absolute; top:10px; right:12px; font:300 18px \'Noto Sans TC\'; color:rgba(255,255,255,.85);">' + el.zh + '</span>' +
      '<div style="font:900 60px/1 \'Varela Round\',\'Nunito\'; color:#fff; text-shadow:0 3px 12px rgba(0,0,0,.2);">' + el.sym + '</div>' +
      '<div style="font:400 14px \'Varela Round\',\'Nunito\'; color:rgba(255,255,255,.72); letter-spacing:.1em; margin-top:3px;">' + el.eng + '</div>' +
    '</div>' +
    '<div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:10px;">' +
      '<div style="font:500 12px \'Noto Sans TC\'; padding:4px 12px; border-radius:11px; background:' + cPale + '; color:' + cDeep + '; margin-bottom:8px;">' + m.emoji + ' ' + m.name + '</div>' +
      '<div style="width:28px; height:2px; border-radius:2px; background:' + c + '; margin-bottom:8px;"></div>' +
      '<div style="font:700 18px/1.5 \'Noto Serif TC\'; color:#2A2420; text-align:center;">' + parts[0] + (parts[1] ? '<br>' + parts[1] : '') + '</div>' +
    '</div>'
  );
}

/* ═══════════════════════════════════════════════════════
   CARD FRONT — FRESH
═══════════════════════════════════════════════════════ */

function cardFrontFresh(el) {
  const [c, cDeep] = PAL[el.type];
  const m = META[el.type];
  const parts = el.title.split('<br>');
  return (
    '<div style="display:flex; justify-content:space-between; align-items:flex-start;">' +
      '<span style="font:300 15px \'Nunito\'; color:#ADA396;">' + el.no + '</span>' +
      '<span style="font:300 14px \'Noto Sans TC\'; color:#ADA396; letter-spacing:.1em;">' + el.zh + '</span>' +
    '</div>' +
    '<div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:5px;">' +
      '<div style="font:400 64px/1 \'Nunito\'; color:#2A2622; letter-spacing:-1px;">' + el.sym + '</div>' +
      '<div style="font:500 11px \'Nunito\'; letter-spacing:.18em; text-transform:uppercase; color:#A89F92;">' + el.eng + '</div>' +
    '</div>' +
    '<div style="display:flex; align-items:center; gap:7px; margin-bottom:9px;">' +
      '<span style="width:7px; height:7px; border-radius:50%; background:' + c + ';"></span>' +
      '<span style="font:600 11px \'Noto Sans TC\'; letter-spacing:.12em; color:' + cDeep + ';">' + m.name + '</span>' +
    '</div>' +
    '<div style="height:1px; background:#EFEAE0; margin-bottom:9px;"></div>' +
    '<div style="font:700 17px/1.45 \'Noto Serif TC\'; color:#2A2622;">' +
      '<div>' + parts[0] + '</div>' +
      (parts[1] ? '<div>' + parts[1] + '</div>' : '') +
    '</div>'
  );
}

/* ═══════════════════════════════════════════════════════
   RENDER — GRID VIEW
═══════════════════════════════════════════════════════ */

function renderGrid() {
  const wrap = document.getElementById('type-groups');
  const isL = appStyle === 'lively';
  let html = '';

  TYPE_ORDER.forEach(function(type) {
    const els = ELEMENTS.filter(function(e) { return e.type === type; });
    const [c] = PAL[type];
    const m = META[type];

    html += '<div style="margin-bottom:30px;">';
    html += '<div style="display:flex; align-items:center; gap:11px; margin-bottom:14px;">' +
      '<span style="width:11px; height:11px; border-radius:50%; background:' + c + '; flex-shrink:0;"></span>' +
      '<span style="font:700 16px \'Noto Serif TC\'; color:#2A2420; letter-spacing:.04em;">' + m.emoji + ' ' + m.name + '</span>' +
      '<span style="font:500 12px \'Nunito\'; color:#B3AA9C;">' + els.length + ' 元素</span>' +
      '<div style="flex:1; height:1px; background:rgba(160,150,135,.22);"></div>' +
    '</div>';
    html += '<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(218px,1fr)); gap:16px;">';

    els.forEach(function(el) {
      const isF = !!cardFlipped[el.sym];
      const tx = isF ? 'rotateY(180deg)' : 'rotateY(0deg)';

      if (isL) {
        html +=
          '<div style="cursor:pointer; perspective:1100px; -webkit-perspective:1100px;" onclick="toggleFlip(\'' + el.sym + '\')">' +
            '<div class="card-inner" data-sym="' + el.sym + '" style="position:relative; width:100%; aspect-ratio:3/4.15; transform-style:preserve-3d; -webkit-transform-style:preserve-3d; transition:transform .6s cubic-bezier(.65,.05,.36,1); transform:' + tx + '; -webkit-transform:' + tx + ';">' +
              '<div style="position:absolute; top:0; right:0; bottom:0; left:0; backface-visibility:hidden; -webkit-backface-visibility:hidden; background:#fff; border-radius:14px; overflow:hidden; box-shadow:0 4px 16px rgba(0,0,0,.1); display:flex; flex-direction:column;">' +
                cardFrontLively(el) +
              '</div>' +
              '<div style="position:absolute; top:0; right:0; bottom:0; left:0; backface-visibility:hidden; -webkit-backface-visibility:hidden; transform:rotateY(180deg); -webkit-transform:rotateY(180deg); background:#fff; border-radius:14px; overflow:hidden; box-shadow:0 4px 16px rgba(0,0,0,.1); display:flex; flex-direction:column;">' +
                cardBackHTML(el, 'lively') +
              '</div>' +
            '</div>' +
          '</div>';
      } else {
        html +=
          '<div style="cursor:pointer; perspective:1100px; -webkit-perspective:1100px;" onclick="toggleFlip(\'' + el.sym + '\')">' +
            '<div class="card-inner" data-sym="' + el.sym + '" style="position:relative; width:100%; aspect-ratio:3/4.15; transform-style:preserve-3d; -webkit-transform-style:preserve-3d; transition:transform .6s cubic-bezier(.65,.05,.36,1); transform:' + tx + '; -webkit-transform:' + tx + ';">' +
              '<div style="position:absolute; top:0; right:0; bottom:0; left:0; backface-visibility:hidden; -webkit-backface-visibility:hidden; background:#fff; border:1px solid #ECE7DD; border-radius:3px; box-shadow:0 1px 3px rgba(0,0,0,.04); padding:16px 14px 14px; display:flex; flex-direction:column;">' +
                cardFrontFresh(el) +
              '</div>' +
              '<div style="position:absolute; top:0; right:0; bottom:0; left:0; backface-visibility:hidden; -webkit-backface-visibility:hidden; transform:rotateY(180deg); -webkit-transform:rotateY(180deg); background:#fff; border:1px solid #ECE7DD; border-radius:3px; box-shadow:0 1px 3px rgba(0,0,0,.04); display:flex; flex-direction:column; overflow:hidden;">' +
                cardBackHTML(el, 'fresh') +
              '</div>' +
            '</div>' +
          '</div>';
      }
    });

    html += '</div></div>';
  });

  wrap.innerHTML = html;
}

/* ═══════════════════════════════════════════════════════
   RENDER — TABLE VIEW
═══════════════════════════════════════════════════════ */

function renderTable() {
  const ptable = document.getElementById('ptable');
  const isL = appStyle === 'lively';
  let html = '';

  // Corner
  html += '<div style="grid-column:1; grid-row:1;"></div>';

  // Group numbers: row 1, cols 2-19
  for (let g = 1; g <= 18; g++) {
    html += '<div style="grid-column:' + (g+1) + '; grid-row:1; text-align:center; font:600 10px \'Nunito\'; color:#BBB2A4; padding-bottom:2px;">' + g + '</div>';
  }

  // Period numbers: col 1, rows 2-8
  for (let p = 1; p <= 7; p++) {
    html += '<div style="grid-column:1; grid-row:' + (p+1) + '; display:flex; align-items:center; justify-content:center; font:600 10px \'Nunito\'; color:#BBB2A4;">' + p + '</div>';
  }

  // Spacer between main table and lanthanide rows
  html += '<div style="grid-column:1/-1; grid-row:9; height:9px;"></div>';

  // Series labels
  html += '<div style="grid-column:1; grid-row:10; display:flex; align-items:center; justify-content:center; font:600 8px \'Noto Sans TC\'; color:#BBB2A4; text-align:center; line-height:1.3;">鑭<br>La</div>';
  html += '<div style="grid-column:1; grid-row:11; display:flex; align-items:center; justify-content:center; font:600 8px \'Noto Sans TC\'; color:#BBB2A4; text-align:center; line-height:1.3;">錒<br>Ac</div>';

  // Lanthanide / Actinide markers
  html += '<div style="grid-column:4; grid-row:7; aspect-ratio:1/1.08; display:flex; align-items:center; justify-content:center; font:600 7px \'Nunito\'; color:#C4BBAD; border:1px dashed rgba(160,150,135,.34); border-radius:4px;">57–71</div>';
  html += '<div style="grid-column:4; grid-row:8; aspect-ratio:1/1.08; display:flex; align-items:center; justify-content:center; font:600 7px \'Nunito\'; color:#C4BBAD; border:1px dashed rgba(160,150,135,.34); border-radius:4px;">89–103</div>';

  // Main table elements
  MAIN.forEach(function(item) {
    var no = item[0], sym = item[1], group = item[2], period = item[3];
    var col = group + 1, row = period + 1;
    var el = elemBySym[sym];
    if (el) {
      var c = PAL[el.type][0], cDeep = PAL[el.type][1];
      if (isL) {
        html += '<div onclick="openModal(\'' + sym + '\')" style="grid-column:' + col + '; grid-row:' + row + '; aspect-ratio:1/1.08; cursor:pointer; border-radius:5px; background:linear-gradient(155deg,' + c + ',' + cDeep + '); box-shadow:0 3px 9px rgba(0,0,0,.16); padding:3px 5px; display:flex; flex-direction:column;" onmouseover="this.style.transform=\'translateY(-2px)\';this.style.boxShadow=\'0 8px 17px rgba(0,0,0,.26)\'" onmouseout="this.style.transform=\'\';this.style.boxShadow=\'0 3px 9px rgba(0,0,0,.16)\'">' +
          '<div style="display:flex; justify-content:space-between; line-height:1;">' +
            '<span style="font:400 8px \'Nunito\'; color:rgba(255,255,255,.72);">' + no + '</span>' +
            '<span style="font:400 8px \'Noto Sans TC\'; color:rgba(255,255,255,.9);">' + el.zh + '</span>' +
          '</div>' +
          '<span style="flex:1; display:flex; align-items:center; justify-content:center; font:800 21px \'Varela Round\',\'Nunito\'; color:#fff; text-shadow:0 2px 5px rgba(0,0,0,.2);">' + sym + '</span>' +
        '</div>';
      } else {
        html += '<div onclick="openModal(\'' + sym + '\')" style="grid-column:' + col + '; grid-row:' + row + '; aspect-ratio:1/1.08; cursor:pointer; border-radius:5px; background:#fff; border:1.5px solid ' + c + '; box-shadow:0 2px 7px rgba(0,0,0,.08); padding:3px 5px; display:flex; flex-direction:column;" onmouseover="this.style.transform=\'translateY(-2px)\';this.style.boxShadow=\'0 6px 14px rgba(0,0,0,.15)\'" onmouseout="this.style.transform=\'\';this.style.boxShadow=\'0 2px 7px rgba(0,0,0,.08)\'">' +
          '<div style="display:flex; justify-content:space-between; align-items:center; line-height:1;">' +
            '<span style="font:400 8px \'Nunito\'; color:#A89F92;">' + no + '</span>' +
            '<span style="width:6px; height:6px; border-radius:50%; background:' + c + ';"></span>' +
          '</div>' +
          '<span style="flex:1; display:flex; align-items:center; justify-content:center; font:500 20px \'Nunito\'; color:#2A2622;">' + sym + '</span>' +
        '</div>';
      }
    } else {
      html += '<div style="grid-column:' + col + '; grid-row:' + row + '; aspect-ratio:1/1.08; border-radius:4px; background:rgba(255,255,255,.4); border:1px solid rgba(160,150,135,.16); display:flex; flex-direction:column; padding:3px 4px;">' +
        '<span style="font:400 7px \'Nunito\'; color:#BCB3A6; line-height:1;">' + no + '</span>' +
        '<span style="flex:1; display:flex; align-items:center; justify-content:center; font:600 14px \'Nunito\'; color:#B3AA9C;">' + sym + '</span>' +
      '</div>';
    }
  });

  // Lanthanides — row 10
  LANTH.forEach(function(item, i) {
    var no = item[0], sym = item[1];
    html += '<div style="grid-column:' + (4+i) + '; grid-row:10; aspect-ratio:1/1.08; border-radius:4px; background:rgba(255,255,255,.4); border:1px solid rgba(160,150,135,.16); display:flex; flex-direction:column; padding:3px 4px;">' +
      '<span style="font:400 7px \'Nunito\'; color:#BCB3A6; line-height:1;">' + no + '</span>' +
      '<span style="flex:1; display:flex; align-items:center; justify-content:center; font:600 14px \'Nunito\'; color:#B3AA9C;">' + sym + '</span>' +
    '</div>';
  });

  // Actinides — row 11
  ACTIN.forEach(function(item, i) {
    var no = item[0], sym = item[1];
    html += '<div style="grid-column:' + (4+i) + '; grid-row:11; aspect-ratio:1/1.08; border-radius:4px; background:rgba(255,255,255,.4); border:1px solid rgba(160,150,135,.16); display:flex; flex-direction:column; padding:3px 4px;">' +
      '<span style="font:400 7px \'Nunito\'; color:#BCB3A6; line-height:1;">' + no + '</span>' +
      '<span style="flex:1; display:flex; align-items:center; justify-content:center; font:600 14px \'Nunito\'; color:#B3AA9C;">' + sym + '</span>' +
    '</div>';
  });

  ptable.innerHTML = html;
}

/* ═══════════════════════════════════════════════════════
   RENDER — MODAL
═══════════════════════════════════════════════════════ */

function renderModal() {
  if (!modalSym) return;
  const el = elemBySym[modalSym];
  if (!el) return;
  const isL = appStyle === 'lively';
  const [c, cDeep, cPale] = PAL[el.type];
  const m = META[el.type];
  const parts = el.title.split('<br>');

  // Front
  let frontHTML = '';
  if (isL) {
    frontHTML =
      '<div style="height:56%; position:relative; background:linear-gradient(155deg,' + c + ',' + cDeep + '); display:flex; flex-direction:column; align-items:center; justify-content:center;">' +
        '<span style="position:absolute; top:12px; left:14px; font:300 22px \'Varela Round\',\'Nunito\'; color:rgba(255,255,255,.7);">' + el.no + '</span>' +
        '<span style="position:absolute; top:12px; right:14px; font:300 22px \'Noto Sans TC\'; color:rgba(255,255,255,.85);">' + el.zh + '</span>' +
        '<div style="font:900 82px/1 \'Varela Round\',\'Nunito\'; color:#fff; text-shadow:0 3px 14px rgba(0,0,0,.2);">' + el.sym + '</div>' +
        '<div style="font:400 19px \'Varela Round\',\'Nunito\'; color:rgba(255,255,255,.72); letter-spacing:.1em; margin-top:4px;">' + el.eng + '</div>' +
      '</div>' +
      '<div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:14px;">' +
        '<div style="font:500 15px \'Noto Sans TC\'; padding:5px 15px; border-radius:12px; background:' + cPale + '; color:' + cDeep + '; margin-bottom:11px;">' + m.emoji + ' ' + m.name + '</div>' +
        '<div style="width:34px; height:2px; border-radius:2px; background:' + c + '; margin-bottom:10px;"></div>' +
        '<div style="font:700 24px/1.5 \'Noto Serif TC\'; color:#2A2420; text-align:center;">' + parts[0] + (parts[1] ? '<br>' + parts[1] : '') + '</div>' +
      '</div>';
  } else {
    frontHTML =
      '<div style="flex:1; display:flex; flex-direction:column; padding:22px 20px;">' +
        '<div style="display:flex; justify-content:space-between; align-items:flex-start;">' +
          '<span style="font:300 20px \'Nunito\'; color:#ADA396;">' + el.no + '</span>' +
          '<span style="font:300 19px \'Noto Sans TC\'; color:#ADA396; letter-spacing:.1em;">' + el.zh + '</span>' +
        '</div>' +
        '<div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:7px;">' +
          '<div style="font:400 86px/1 \'Nunito\'; color:#2A2622; letter-spacing:-1.5px;">' + el.sym + '</div>' +
          '<div style="font:500 13px \'Nunito\'; letter-spacing:.2em; text-transform:uppercase; color:#A89F92;">' + el.eng + '</div>' +
        '</div>' +
        '<div style="display:flex; align-items:center; justify-content:center; gap:8px; margin-bottom:12px;">' +
          '<span style="width:8px; height:8px; border-radius:50%; background:' + c + ';"></span>' +
          '<span style="font:600 13px \'Noto Sans TC\'; letter-spacing:.12em; color:' + cDeep + ';">' + m.name + '</span>' +
        '</div>' +
        '<div style="height:1px; background:#EFEAE0; margin-bottom:12px;"></div>' +
        '<div style="font:700 23px/1.5 \'Noto Serif TC\'; color:#2A2622; text-align:center;">' + parts[0] + (parts[1] ? '<br>' + parts[1] : '') + '</div>' +
      '</div>';
  }

  const frontFace = document.getElementById('modal-front');
  frontFace.style.cssText = 'position:absolute; top:0; right:0; bottom:0; left:0; backface-visibility:hidden; -webkit-backface-visibility:hidden; background:#fff; border-radius:' + (isL ? '16' : '4') + 'px; overflow:hidden; box-shadow:0 24px 60px rgba(0,0,0,.4); display:flex; flex-direction:column;' + (isL ? '' : ' border:1px solid #ECE7DD;');
  frontFace.innerHTML = frontHTML;

  const backFace = document.getElementById('modal-back');
  backFace.style.cssText = 'position:absolute; top:0; right:0; bottom:0; left:0; backface-visibility:hidden; -webkit-backface-visibility:hidden; transform:rotateY(180deg); -webkit-transform:rotateY(180deg); background:#fff; border-radius:' + (isL ? '16' : '4') + 'px; overflow:hidden; box-shadow:0 24px 60px rgba(0,0,0,.4); display:flex; flex-direction:column;' + (isL ? '' : ' border:1px solid #ECE7DD;');
  backFace.innerHTML = cardBackHTML(el, appStyle);

  var flipper = document.getElementById('modal-flipper');
  flipper.style.transform = 'rotateY(0deg)';
  flipper.style.webkitTransform = 'rotateY(0deg)';
}

/* ═══════════════════════════════════════════════════════
   RENDER — COMPOUND SECTION
═══════════════════════════════════════════════════════ */

// Unified list of compounds + mixtures; index aligns with the rendered grid
// so openCompoundModal(idx) can look the item up.
const CITEMS = [];

function buildCItems() {
  CITEMS.length = 0;
  COMPOUNDS.forEach(function(cp) {
    CITEMS.push({ kind:'compound', f:cp.f, pun:cp.pun, desc:cp.desc, verse:cp.verse });
  });
  MIXTURES.forEach(function(mx) {
    CITEMS.push({ kind:'mixture', f:mx.f, pun:mx.pun, desc:mx.desc, verse:mx.verse });
  });
}

function renderCompounds() {
  const t = COMP_THEME[appStyle];
  const section = document.getElementById('compound-section');
  section.style.background = t.bg;

  // Section title (uses real divs, not ::before/::after)
  const titleEl = document.getElementById('section-title-inner');
  titleEl.innerHTML =
    '<div style="flex:1; height:1px; background:' + t.rule + ';"></div>' +
    '<span style="font:600 14px \'Noto Serif TC\'; letter-spacing:.1em; color:' + t.head + '; white-space:nowrap;">⚗ 化合物與混合物團契 · Compound &amp; Mixture Fellowship</span>' +
    '<div style="flex:1; height:1px; background:' + t.rule + ';"></div>';

  buildCItems();

  var dash = appStyle === 'lively' ? 'rgba(138,174,224,.5)' : '#C9D4E8';
  const cgrid = document.getElementById('cgrid');
  let html = '';

  CITEMS.forEach(function(cp, idx) {
    var isMix = cp.kind === 'mixture';
    var a = PAL[TYPE_ORDER[idx % 4]][0];
    var b = PAL[TYPE_ORDER[(idx + 2) % 4]][0];
    var brd = isMix ? '1px dashed ' + dash : '1px solid ' + t.border;
    html +=
      '<div onclick="openCompoundModal(' + idx + ')" style="cursor:pointer; position:relative; overflow:hidden; background:' + t.card + '; border:' + brd + '; border-radius:10px; padding:18px 17px 15px; transition:transform .18s ease, box-shadow .18s ease;" onmouseover="this.style.transform=\'translateY(-3px)\';this.style.boxShadow=\'0 10px 24px rgba(0,0,0,.22)\'" onmouseout="this.style.transform=\'\';this.style.boxShadow=\'\'">' +
        (isMix
          ? '<div style="position:absolute; top:11px; right:12px; font:600 10px \'Noto Sans TC\'; letter-spacing:.06em; color:' + t.head + '; background:' + t.verseBg + '; border:1px dashed ' + dash + '; border-radius:20px; padding:2px 9px;">🌬 混合物</div>'
          : '<div style="position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg,' + a + ',' + b + ');"></div>') +
        '<div style="font:900 28px \'Varela Round\',\'Nunito\'; color:' + t.formula + '; margin:4px 0 1px;">' + cp.f + '</div>' +
        '<div style="font:700 14px \'Noto Serif TC\'; color:' + t.pun + '; margin-bottom:10px;">' + cp.pun + '</div>' +
        '<div style="font:400 12px/1.7 \'Noto Sans TC\'; color:' + t.desc + '; margin-bottom:11px;">' + cp.desc + '</div>' +
        '<div style="font:400 11px/1.6 \'Noto Serif TC\'; color:' + t.verseTx + '; background:' + t.verseBg + '; border-radius:7px; padding:8px 11px;">' + cp.verse + '</div>' +
      '</div>';
  });

  cgrid.innerHTML = html;
}

/* ── COMPOUND / MIXTURE ENLARGE MODAL ── */

function openCompoundModal(idx) {
  const cp = CITEMS[idx];
  if (!cp) return;
  const t = COMP_THEME[appStyle];
  const isL = appStyle === 'lively';
  const isMix = cp.kind === 'mixture';
  var dash = isL ? 'rgba(138,174,224,.5)' : '#C9D4E8';
  var a = PAL[TYPE_ORDER[idx % 4]][0];
  var b = PAL[TYPE_ORDER[(idx + 2) % 4]][0];
  var modalBg = isL ? '#222a4d' : '#fff';
  var closeColor = isL ? 'rgba(240,237,228,.6)' : '#A89F92';

  const inner = document.getElementById('cmodal-inner');
  inner.style.cssText =
    'position:relative; overflow:hidden; max-height:88vh; overflow-y:auto; background:' + modalBg +
    '; border:' + (isMix ? '1.5px dashed ' + dash : '1px solid ' + t.border) +
    '; border-radius:18px; padding:42px 40px 36px; box-shadow:0 30px 70px rgba(0,0,0,.5);';
  inner.innerHTML =
    (isMix
      ? '<div style="position:absolute; top:18px; left:24px; font:600 12px \'Noto Sans TC\'; letter-spacing:.06em; color:' + t.head + '; background:' + t.verseBg + '; border:1px dashed ' + dash + '; border-radius:20px; padding:3px 12px;">🌬 混合物 · 不鍵結，卻一起維繫生命</div>'
      : '<div style="position:absolute; top:0; left:0; right:0; height:6px; background:linear-gradient(90deg,' + a + ',' + b + ');"></div>') +
    '<button onclick="closeCompoundModal()" aria-label="關閉" style="position:absolute; top:14px; right:16px; width:30px; height:30px; border:none; background:transparent; color:' + closeColor + '; font-size:20px; cursor:pointer; line-height:1;">✕</button>' +
    '<div style="font:900 56px/1.1 \'Varela Round\',\'Nunito\'; color:' + t.formula + '; margin:' + (isMix ? '30px' : '14px') + ' 0 6px;">' + cp.f + '</div>' +
    '<div style="font:700 24px \'Noto Serif TC\'; color:' + t.pun + '; margin-bottom:20px;">' + cp.pun + '</div>' +
    '<div style="font:400 17px/1.9 \'Noto Sans TC\'; color:' + t.desc + '; margin-bottom:20px;">' + cp.desc + '</div>' +
    '<div style="font:400 15px/1.8 \'Noto Serif TC\'; color:' + t.verseTx + '; background:' + t.verseBg + '; border-radius:10px; padding:14px 18px;">' + cp.verse + '</div>';

  document.getElementById('cmodal').style.display = 'flex';
}

function closeCompoundModal() {
  document.getElementById('cmodal').style.display = 'none';
}

/* ═══════════════════════════════════════════════════════
   MAIN RENDER
═══════════════════════════════════════════════════════ */

function render() {
  // Page background
  const page = document.getElementById('page');
  page.style.background = appStyle === 'lively'
    ? 'radial-gradient(circle,#dad3c6 1px,transparent 1px) 0 0/22px 22px,#F4F1EB'
    : '#FAF9F6';

  // Switcher button states
  const active   = {background:'#fff', color:'#1c1a18'};
  const inactive = {background:'transparent', color:'rgba(255,255,255,.65)'};
  ['lively','fresh'].forEach(function(s) {
    var btn = document.getElementById('sw-' + s);
    var st = s === appStyle ? active : inactive;
    btn.style.background = st.background;
    btn.style.color = st.color;
  });
  ['table','grid'].forEach(function(l) {
    var btn = document.getElementById('sw-' + l);
    var st = l === appLayout ? active : inactive;
    btn.style.background = st.background;
    btn.style.color = st.color;
  });

  // Hint
  document.getElementById('hint-bar').textContent = appLayout === 'table'
    ? '依真實原子序與週期排列，未收錄的元素以淡色呈現 · 點擊彩色元素查看完整卡片'
    : '依屬靈分類排列，每列最多四個元素 · 點擊卡片翻面查看完整說明';

  // Views
  document.getElementById('view-table').style.display = appLayout === 'table' ? '' : 'none';
  document.getElementById('view-grid').style.display  = appLayout === 'grid'  ? '' : 'none';

  if (appLayout === 'table') renderTable();
  else                        renderGrid();

  renderCompounds();
}

/* ═══════════════════════════════════════════════════════
   PRINT
═══════════════════════════════════════════════════════ */

function openPrint() {
  var file = appStyle === 'fresh' ? 'print-fresh.html' : 'print-lively.html';
  window.open('./' + file, '_blank');
}

/* ═══════════════════════════════════════════════════════
   CUSTOM CARD DESIGNER
═══════════════════════════════════════════════════════ */

let custom = {
  sym:'', no:'', zh:'', eng:'', type:'action',
  titleA:'', titleB:'', person:'',
  target:'', sci:'', sp:'', weak:'',
  verseText:'', verseRef:''
};
let customStyle = 'lively';
let customFlipped = false;

const CUSTOM_PH = {
  sym:'Xx', no:'?', zh:'元素', eng:'Element',
  titleA:'我的屬靈', titleB:'稱號',
  target:'（描述什麼樣的人適合這張卡）',
  sci:'（這個元素有什麼科學特性？）',
  sp:'（這個元素代表的屬靈特質是什麼？）',
  weak:'（提醒自己要留意、成長的功課）',
  verseText:'（寫下一句對你有意義的經文）',
  verseRef:'—出處'
};

// Build a full element object from the form (filling blanks with placeholders for preview)
function customEl(forPreview) {
  function pick(k) {
    var v = (custom[k] || '').trim();
    if (v) return v;
    return forPreview ? CUSTOM_PH[k] : '';
  }
  var titleA = pick('titleA');
  var titleB = (custom.titleB || '').trim() || (forPreview ? CUSTOM_PH.titleB : '');
  var title = titleB ? titleA + '<br>' + titleB : titleA;

  var vt = pick('verseText');
  var vr = (custom.verseRef || '').trim();
  if (forPreview && !vr) vr = CUSTOM_PH.verseRef;
  var verse = vr ? vt + '\n' + (vr.charAt(0) === '—' ? vr : '—' + vr) : vt;

  return {
    sym: pick('sym'), no: pick('no'), zh: pick('zh'), eng: pick('eng'),
    type: custom.type, title: title, person: pick('person'),
    target: pick('target'), sci: pick('sci'), sp: pick('sp'),
    weak: pick('weak'), verse: verse
  };
}

function openDesigner() {
  customFlipped = false;
  renderDesignerForm();
  renderCustomPreview();
  document.getElementById('designer').style.display = 'flex';
}

function closeDesigner() {
  document.getElementById('designer').style.display = 'none';
}

function updateCustom(field, value) {
  custom[field] = value;
  renderCustomPreview();
}

function setCustomType(t) {
  custom.type = t;
  document.querySelectorAll('.dz-type-btn').forEach(function(b) {
    var on = b.getAttribute('data-type') === t;
    b.classList.toggle('active', on);
    b.style.color = on ? PAL[b.getAttribute('data-type')][1] : '#6B6358';
  });
  renderCustomPreview();
}

function setCustomStyle(s) {
  customStyle = s;
  ['lively','fresh'].forEach(function(x) {
    document.getElementById('dz-style-' + x).classList.toggle('active', x === s);
  });
  renderCustomPreview();
}

function toggleCustomFlip() {
  customFlipped = !customFlipped;
  var inner = document.getElementById('dz-card-inner');
  if (inner) {
    var tx = customFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
    inner.style.transform = tx;
    inner.style.webkitTransform = tx;
  }
}

/* ── form ── */

function dzField(label, field, opt, placeholder, narrow) {
  return '<div class="dz-field' + (narrow ? ' dz-narrow' : '') + '">' +
    '<label class="dz-label">' + label + (opt ? ' <span class="dz-opt">(選填)</span>' : '') + '</label>' +
    '<input class="dz-input" value="' + esc(custom[field]) + '" ' +
      'placeholder="' + (placeholder || '') + '" ' +
      'oninput="updateCustom(\'' + field + '\', this.value)"></div>';
}

function dzArea(label, field, placeholder) {
  return '<div class="dz-field">' +
    '<label class="dz-label">' + label + '</label>' +
    '<textarea class="dz-textarea" placeholder="' + (placeholder || '') + '" ' +
      'oninput="updateCustom(\'' + field + '\', this.value)">' + esc(custom[field]) + '</textarea></div>';
}

function esc(s) {
  return (s || '').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function renderDesignerForm() {
  var html = '';

  html += '<div class="dz-group-label">基本資料</div>';
  html += '<div class="dz-row">' +
    dzField('元素符號', 'sym', false, '如 Na、Fe', true) +
    dzField('原子序', 'no', true, '#', true) +
    dzField('中文名', 'zh', false, '如 鈉') +
  '</div>';
  html += dzField('英文名', 'eng', false, '如 Sodium');

  html += '<div class="dz-group-label">屬靈類型</div>';
  html += '<div class="dz-types">';
  TYPE_ORDER.forEach(function(t) {
    var on = custom.type === t;
    var col = PAL[t];
    var m = META[t];
    html += '<div class="dz-type-btn' + (on ? ' active' : '') + '" data-type="' + t + '" ' +
      'style="color:' + (on ? col[1] : '#6B6358') + '" onclick="setCustomType(\'' + t + '\')">' +
      '<span class="dz-type-dot" style="background:' + col[0] + '"></span>' + m.emoji + ' ' + m.name + '</div>';
  });
  html += '</div>';

  html += '<div class="dz-group-label">屬靈稱號</div>';
  html += '<div class="dz-row">' +
    dzField('稱號（第一行）', 'titleA', false, '如 直率衝動的') +
    dzField('稱號（第二行）', 'titleB', true, '如 開拓者') +
  '</div>';
  html += dzField('對應聖經人物', 'person', true, '如 彼得');

  html += '<div class="dz-group-label">卡片背面說明</div>';
  html += dzArea('適合對象', 'target', '什麼樣的人適合這張卡？');
  html += dzArea('科學特性', 'sci', '這個元素有什麼科學特性？');
  html += dzArea('屬靈特質', 'sp', '這個元素代表的屬靈特質是什麼？');
  html += dzArea('留意（成長功課）', 'weak', '提醒自己要留意、成長的地方');

  html += '<div class="dz-group-label">經文</div>';
  html += dzArea('經文內容', 'verseText', '寫下一句對你有意義的經文');
  html += dzField('經文出處', 'verseRef', false, '如 馬太福音 14:29');

  document.getElementById('designer-form').innerHTML = html;
}

/* ── live preview (reuses the deck's card builders) ── */

function renderCustomPreview() {
  var el = customEl(true);
  var isL = customStyle === 'lively';
  var tx = customFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';

  var frontFaceStyle, backFaceStyle, frontHTML;
  if (isL) {
    frontFaceStyle = 'position:absolute; inset:0; backface-visibility:hidden; -webkit-backface-visibility:hidden; background:#fff; border-radius:14px; overflow:hidden; box-shadow:0 4px 16px rgba(0,0,0,.12); display:flex; flex-direction:column;';
    backFaceStyle  = frontFaceStyle + ' transform:rotateY(180deg); -webkit-transform:rotateY(180deg);';
    frontHTML = cardFrontLively(el);
  } else {
    frontFaceStyle = 'position:absolute; inset:0; backface-visibility:hidden; -webkit-backface-visibility:hidden; background:#fff; border:1px solid #ECE7DD; border-radius:3px; box-shadow:0 1px 3px rgba(0,0,0,.06); padding:16px 14px 14px; display:flex; flex-direction:column;';
    backFaceStyle  = 'position:absolute; inset:0; backface-visibility:hidden; -webkit-backface-visibility:hidden; background:#fff; border:1px solid #ECE7DD; border-radius:3px; box-shadow:0 1px 3px rgba(0,0,0,.06); display:flex; flex-direction:column; overflow:hidden; transform:rotateY(180deg); -webkit-transform:rotateY(180deg);';
    frontHTML = cardFrontFresh(el);
  }

  var html =
    '<div class="dz-style-toggle">' +
      '<button id="dz-style-lively" class="dz-style-btn' + (isL ? ' active' : '') + '" onclick="setCustomStyle(\'lively\')">活潑明亮</button>' +
      '<button id="dz-style-fresh" class="dz-style-btn' + (!isL ? ' active' : '') + '" onclick="setCustomStyle(\'fresh\')">簡約活潑</button>' +
    '</div>' +
    '<div id="dz-card-wrap" onclick="toggleCustomFlip()">' +
      '<div id="dz-card-inner" style="position:relative; width:100%; aspect-ratio:3/4.15; transform-style:preserve-3d; -webkit-transform-style:preserve-3d; transition:transform .6s cubic-bezier(.65,.05,.36,1); transform:' + tx + '; -webkit-transform:' + tx + ';">' +
        '<div style="' + frontFaceStyle + '">' + frontHTML + '</div>' +
        '<div style="' + backFaceStyle + '">' + cardBackHTML(el, customStyle) + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="dz-preview-hint">點擊卡片可翻面預覽</div>' +
    '<div class="dz-actions">' +
      '<button class="dz-btn dz-btn-primary" onclick="printCustomCard()">🖨️ 列印我設計的卡（正反面）</button>' +
      '<button class="dz-btn dz-btn-ghost" onclick="printExampleTemplate()">📋 列印範例版（參考怎麼填）</button>' +
      '<button class="dz-btn dz-btn-ghost" onclick="printBlankTemplate()">📝 列印空白版（手寫）</button>' +
    '</div>';

  document.getElementById('designer-preview').innerHTML = html;
}

/* ═══════════════════════════════════════════════════════
   CUSTOM CARD PRINT (A4, matches the deck's print layout)
═══════════════════════════════════════════════════════ */

function printDocHead(title) {
  return '<!DOCTYPE html><html lang="zh-TW"><head><meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<title>' + title + '</title>' +
    '<link rel="preconnect" href="https://fonts.googleapis.com">' +
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
    '<link href="https://fonts.googleapis.com/css2?family=Varela+Round&family=Nunito:wght@300;400;500;700;900&family=Noto+Serif+TC:wght@400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;700&display=swap" rel="stylesheet">' +
    '<style>' +
      '*{margin:0;padding:0;box-sizing:border-box;}' +
      'body{font-family:\'Noto Sans TC\',sans-serif;-webkit-print-color-adjust:exact;print-color-adjust:exact;}' +
      '@page{size:A4 portrait;margin:0;}' +
      '@media screen{body{background:#6b6b6b;padding:26px 0 40px;}' +
        '.sheet{box-shadow:0 4px 24px rgba(0,0,0,.35);margin:0 auto 6px;}' +
        '.slabel{font:500 12px sans-serif;color:#d6d2cb;width:210mm;margin:18px auto 5px;padding-left:2mm;}' +
        '.slabel:first-child{margin-top:0;}' +
        '.tip{width:210mm;margin:0 auto 14px;color:#eee;font:400 13px sans-serif;text-align:center;}}' +
      '@media print{.slabel,.tip{display:none;}body{background:#fff;padding:0;}.sheet{box-shadow:none!important;margin:0!important;}}' +
    '</style></head><body>';
}

// An A4 sheet with an optional printed heading; each card row holds [front | back]
function printSheet(rowsHTML, heading) {
  var head = heading
    ? '<div style="text-align:center;margin-bottom:5mm;">' +
        '<div style="font:700 15pt \'Noto Serif TC\';color:#2A2420;">' + heading.t + '</div>' +
        (heading.s ? '<div style="font:400 10pt \'Noto Sans TC\';color:#A0968C;margin-top:1mm;">' + heading.s + '</div>' : '') +
      '</div>'
    : '';
  var grid = '<div style="display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:125mm;gap:5mm;align-content:start;">' + rowsHTML + '</div>';
  var style = 'width:210mm;height:297mm;display:flex;flex-direction:column;justify-content:center;' +
    'padding:12mm;background:#fff;page-break-after:always;break-after:page;';
  return '<div class="sheet" style="' + style + '">' + head + grid + '</div>';
}

function pFront(el) {
  var t = PAL[el.type], m = META[el.type];
  var parts = el.title.split('<br>');
  var grad = 'linear-gradient(155deg,' + t[0] + ',' + t[1] + ')';
  return '<div style="height:100%;background:#fff;border:1px solid #E0DACF;border-radius:10px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 1px 4px rgba(0,0,0,.08);">' +
    '<div style="flex:0 0 52%;position:relative;background:' + grad + ';display:flex;flex-direction:column;align-items:center;justify-content:center;padding:6mm;">' +
      '<span style="position:absolute;top:5mm;left:6mm;font:300 16pt \'Varela Round\',\'Nunito\';color:rgba(255,255,255,.68);">' + el.no + '</span>' +
      '<span style="position:absolute;top:5mm;right:6mm;font:300 16pt \'Noto Sans TC\';color:rgba(255,255,255,.85);letter-spacing:.06em;">' + el.zh + '</span>' +
      '<div style="font:900 56pt/1 \'Varela Round\',\'Nunito\';color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.18);">' + el.sym + '</div>' +
      '<div style="font:300 13pt \'Varela Round\',\'Nunito\';color:rgba(255,255,255,.74);letter-spacing:.1em;margin-top:2mm;">' + el.eng + '</div>' +
    '</div>' +
    '<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:5mm 6mm;background:#fff;">' +
      '<div style="font:500 11pt \'Noto Sans TC\';white-space:nowrap;padding:3px 14px;border-radius:10px;background:' + t[2] + ';color:' + t[1] + ';margin-bottom:4mm;">' + m.emoji + ' ' + m.name + '</div>' +
      '<div style="width:24px;height:2px;border-radius:2px;background:' + t[0] + ';margin-bottom:4mm;"></div>' +
      '<div style="font:700 19pt/1.5 \'Noto Serif TC\';color:#2A2420;text-align:center;">' + parts[0] + (parts[1] || '') + '</div>' +
    '</div></div>';
}

function pBack(el) {
  var t = PAL[el.type];
  var parts = el.title.split('<br>');
  var vt = el.verse, vr = '';
  var i = el.verse.indexOf('\n—');
  if (i !== -1) { vt = el.verse.slice(0, i); vr = el.verse.slice(i + 1); }
  return '<div style="height:100%;background:#fff;border:1px solid #E0DACF;border-radius:10px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 1px 4px rgba(0,0,0,.08);">' +
    '<div style="background:' + t[2] + ';padding:5mm 6mm 4mm;display:flex;align-items:center;gap:3mm;">' +
      '<div style="width:13mm;height:13mm;flex-shrink:0;background:' + t[0] + ';border-radius:8px;display:flex;align-items:center;justify-content:center;font:900 17pt \'Varela Round\',\'Nunito\';color:#fff;">' + el.sym + '</div>' +
      '<div style="flex:1;min-width:0;">' +
        '<div style="font:700 13pt/1.3 \'Noto Serif TC\';color:#2A2420;">' + parts[0] + (parts[1] || '') + '</div>' +
        '<div style="font:400 9pt \'Varela Round\';color:#A0968C;margin-top:1px;">' + el.zh + ' · ' + el.eng + ' · ' + el.no + '</div>' +
      '</div>' +
      (el.person ? '<div style="font:700 10pt \'Noto Serif TC\';color:' + t[1] + ';flex-shrink:0;">📖 ' + el.person + '</div>' : '') +
    '</div>' +
    '<div style="flex:1;padding:5mm 6mm 6mm;display:flex;flex-direction:column;">' +
      '<div style="font:700 9pt \'Noto Sans TC\';letter-spacing:.14em;color:#B3A99C;margin-bottom:1mm;">適合對象</div>' +
      '<div style="font:400 11.5pt/1.55 \'Noto Sans TC\';color:#6B6358;margin-bottom:3mm;">' + el.target + '</div>' +
      '<div style="font:700 9pt \'Noto Sans TC\';letter-spacing:.14em;color:#B3A99C;margin-bottom:1mm;">科學特性</div>' +
      '<div style="font:400 11.5pt/1.55 \'Noto Sans TC\';color:#6B6358;margin-bottom:3mm;">' + el.sci + '</div>' +
      '<div style="font:700 9pt \'Noto Sans TC\';letter-spacing:.14em;color:#B3A99C;margin-bottom:1mm;">屬靈特質</div>' +
      '<div style="font:400 11.5pt/1.55 \'Noto Sans TC\';color:#4A443C;margin-bottom:3mm;">' + el.sp + '</div>' +
      '<div style="font:700 9pt \'Noto Sans TC\';letter-spacing:.14em;color:#B3A99C;margin-bottom:1mm;">留意</div>' +
      '<div style="font:italic 400 11.5pt/1.55 \'Noto Sans TC\';color:#8C8377;margin-bottom:3mm;">' + el.weak + '</div>' +
      '<div style="margin-top:auto;background:' + t[2] + ';border-radius:7px;padding:3mm 4mm;font:400 11pt/1.6 \'Noto Serif TC\';color:' + t[1] + ';">' + vt +
        '<span style="display:block;font-size:9pt;color:#A0968C;margin-top:1mm;">' + vr + '</span>' +
      '</div>' +
    '</div></div>';
}

function openPrintWindow(html) {
  var w = window.open('', '_blank');
  if (!w) { alert('請允許彈出視窗以開啟列印頁面'); return; }
  w.document.open();
  w.document.write(html);
  w.document.close();
}

function printCustomCard() {
  var el = customEl(false);
  if (!el.sym || !el.zh) {
    alert('請至少填寫「元素符號」與「中文名」再列印。');
    return;
  }
  var body = printDocHead('我的元素卡 · 列印') +
    '<div class="tip">左為正面、右為背面 · 沿外框裁切後對折即為雙面卡（Ctrl/⌘+P 列印或存成 PDF）</div>' +
    printSheet(pFront(el) + pFront(el) + pBack(el) + pBack(el),
      {t:'我設計的元素卡', s:'左為正面、右為背面 · 沿外框裁切後對折'}) +
    '</body></html>';
  openPrintWindow(body);
}

/* ── 範例版：a fully filled sample card showing how to complete each field ── */

const SAMPLE_CUSTOM = {
  sym:'Mg', no:12, zh:'鎂', eng:'Magnesium', type:'action',
  title:'點燃盼望的<br>帶光者', person:'司提反',
  target:'願意在低谷中先點燃氣氛、帶來盼望的人',
  sci:'燃燒時發出耀眼白光、是葉綠素的核心、輕盈卻能量驚人',
  sp:'願意在黑暗中先燃燒自己發出光，照亮整個群體；也像葉綠素的核心，默默把陽光轉成養分供應大家。',
  weak:'發光是你的恩賜；學習也讓自己被光照、接受別人的供應，火才能燒得更久。',
  verse:'你們是世上的光。城造在山上，是不能隱藏的。\n—馬太福音 5:14'
};

function printExampleTemplate() {
  var el = SAMPLE_CUSTOM;
  var body = printDocHead('元素卡 · 範例版') +
    '<div class="tip">這是填寫示範（非正式卡）· 給找不到適合元素的人參考怎麼填</div>' +
    printSheet(pFront(el) + pBack(el),
      {t:'範例版 · 參考怎麼填', s:'這是示範用的「鎂 Mg」，看看每一欄可以怎麼寫'}) +
    '</body></html>';
  openPrintWindow(body);
}

/* ── 空白版：blank handwriting template ── */

// small grey caption (sits beside/above the writing area, never on it)
function bCap(text) {
  return '<span style="font:400 8.5pt \'Noto Sans TC\';color:#B3A99C;white-space:nowrap;">' + text + '</span>';
}
// label + empty underline on one row (label left, blank line fills the rest)
function bLineField(label) {
  return '<div style="display:flex;align-items:flex-end;gap:2mm;width:100%;">' +
    bCap(label) +
    '<span style="flex:1;border-bottom:1px dashed #C9C1B3;height:5.5mm;"></span></div>';
}
// a standalone empty writing line
function bLine() {
  return '<div style="border-bottom:1px dashed #C9C1B3;height:5.5mm;"></div>';
}

function blankFront() {
  return '<div style="height:100%;background:#fff;border:1px solid #C9C1B3;border-radius:10px;overflow:hidden;display:flex;flex-direction:column;">' +
    '<div style="flex:0 0 52%;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8mm 6mm 6mm;border-bottom:1px dashed #DBD4C7;">' +
      // top corners: 原子序 / 中文 — caption + short blank line, away from center
      '<div style="position:absolute;top:5mm;left:6mm;right:6mm;display:flex;justify-content:space-between;gap:5mm;">' +
        '<span style="display:flex;align-items:flex-end;gap:1.5mm;">' + bCap('原子序') + '<span style="display:inline-block;width:13mm;border-bottom:1px dashed #C9C1B3;height:4.5mm;"></span></span>' +
        '<span style="display:flex;align-items:flex-end;gap:1.5mm;">' + bCap('中文名') + '<span style="display:inline-block;width:16mm;border-bottom:1px dashed #C9C1B3;height:4.5mm;"></span></span>' +
      '</div>' +
      // symbol: caption above, empty box below
      '<div style="text-align:center;">' +
        '<div style="margin-bottom:2mm;">' + bCap('符號') + '</div>' +
        '<div style="width:30mm;height:30mm;border:2px dashed #C9C1B3;border-radius:10px;margin:0 auto;"></div>' +
      '</div>' +
      // english name: caption + blank line
      '<div style="width:78%;margin:5mm auto 0;">' + bLineField('英文名') + '</div>' +
    '</div>' +
    '<div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:5mm 7mm;gap:4mm;">' +
      '<div style="text-align:center;font:500 10pt \'Noto Sans TC\';color:#8C8377;">□ 🔥行動　□ 🏛️支撐　□ 🌿連結　□ 🕊️穩定</div>' +
      '<div>' +
        '<div style="margin-bottom:1.5mm;">' + bCap('屬靈稱號') + '</div>' +
        bLine() + '<div style="height:2mm;"></div>' + bLine() +
      '</div>' +
    '</div></div>';
}

function blankBack() {
  function sec(label, rows) {
    var h = '<div style="font:700 9pt \'Noto Sans TC\';letter-spacing:.14em;color:#B3A99C;margin-bottom:1.5mm;">' + label + '</div>';
    for (var i = 0; i < rows; i++) h += '<div style="border-bottom:1px dashed #D2CABC;height:5.5mm;"></div>';
    return '<div style="margin-bottom:3mm;">' + h + '</div>';
  }
  return '<div style="height:100%;background:#fff;border:1px solid #C9C1B3;border-radius:10px;overflow:hidden;display:flex;flex-direction:column;">' +
    '<div style="padding:5mm 6mm 4mm;display:flex;align-items:flex-end;gap:3mm;border-bottom:1px dashed #DBD4C7;">' +
      '<div style="width:13mm;height:13mm;flex-shrink:0;border:2px dashed #C9C1B3;border-radius:8px;"></div>' +
      '<div style="flex:1;">' +
        '<div style="font:400 8pt \'Noto Sans TC\';color:#B3A99C;margin-bottom:1mm;">屬靈稱號／中文・英文・對應人物</div>' +
        '<div style="border-bottom:1px dashed #C9C1B3;height:5mm;"></div></div>' +
    '</div>' +
    '<div style="flex:1;padding:4mm 6mm 5mm;display:flex;flex-direction:column;">' +
      sec('適合對象', 1) + sec('科學特性', 1) + sec('屬靈特質', 2) + sec('留意', 1) +
      '<div style="margin-top:auto;border:1px dashed #D2CABC;border-radius:7px;padding:3mm 4mm;">' +
        '<div style="font:700 9pt \'Noto Sans TC\';letter-spacing:.14em;color:#B3A99C;margin-bottom:1.5mm;">經文</div>' +
        '<div style="border-bottom:1px dashed #D2CABC;height:5mm;"></div>' +
        '<div style="border-bottom:1px dashed #D2CABC;height:5mm;margin-top:2mm;"></div>' +
      '</div>' +
    '</div></div>';
}

function printBlankTemplate() {
  var rows = blankFront() + blankBack() + blankFront() + blankBack();
  var body = printDocHead('空白元素卡 · 手寫版') +
    '<div class="tip">每行為一張卡（左正面、右背面）· 列印後沿外框裁切，手寫填入即可</div>' +
    printSheet(rows, {t:'空白版 · 手寫', s:'每行為一張卡（左正面、右背面）· 裁切後手寫填入'}) +
    '</body></html>';
  openPrintWindow(body);
}

/* ═══════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════ */

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closeModal(); closeDesigner(); }
});

render();
