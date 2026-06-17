const elements = [
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
   verse:'趁著白日，我們必須做那差我來者的工。\n—約翰福音 9:4',person:'巴拿巴',personNote:'扶持保羅的使徒，以鼓勵人聞名'},
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
   verse:'我也專心修造這城牆，並沒有置買田地。\n—尼希米記 5:16',person:'尼希米',personNote:'帶領重建耶路撒冷城牆的領袖'},
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
   verse:'要用愛心說誠實話。\n—以弗所書 4:15',person:'百基拉',personNote:'與丈夫亞居拉同工的女傳道人'},
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
   verse:'我晝夜不住地為你禱告。\n—提摩太後書 1:3',person:'哈拿',personNote:'禱告等候的母親，撒母耳之母'},
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

const compounds = [
  {f:'NaCl',pun:'氯接鈉 ＝ 接納',desc:'最衝動的鈉（Na）＋最剛直的氯（Cl），鍵結後成為食鹽——生命必需、溫和穩定。教會裡最難合作的兩種人，彼此接納之後，反而成為世上的鹽。',verse:'你們是世上的鹽。—馬太福音 5:13'},
  {f:'H₂O',pun:'氫＋氧 ＝ 活水',desc:'最輕最簡單的氫（H）＋助燃的氧（O），合而為一不是爆炸，而是活水。謙卑單純的人與熱情激勵者同心，湧現生命泉源。',verse:'我所賜的水，在他裡頭成為泉源，直湧到永生。—約翰福音 4:14'},
  {f:'CO₂',pun:'碳＋氧 ＝ 呼出的禱告',desc:'看似廢棄的碳與氧組合，卻是植物光合作用的養分，使萬物生長。你覺得軟弱的禱告，在神手中成為滋養他人的力量。',verse:'聖靈親自用說不出來的嘆息替我們禱告。—羅馬書 8:26'},
  {f:'CaC₂',pun:'電石 ＝ 等候發光',desc:'鈣（Ca）與碳（C）平時沉默，看似無用，遇到活水卻立刻燃燒發光。許多幕後同工就像電石——他們在等候聖靈澆灌的時刻。',verse:'耶穌又對眾人說：我是世界的光。跟從我的，就不在黑暗裡走，必要得著生命的光。—約翰福音 8:12'},
  {f:'AgCl',pun:'感光底片 ＝ 屬靈攝影師',desc:'聖潔的銀（Ag）＋守望的氯（Cl）→ 氯化銀是傳統底片感光材料，對光極度敏感。他們記錄神在群體中的作為，是教會的見證者。',verse:'所以你要把所看見的，和現在的事，並將來必成的事，都寫出來。—啟示錄 1:19'},
  {f:'AuCu',pun:'玫瑰合金 ＝ 成熟的接納',desc:'亮金的尊貴與銅的溫暖交織成玫瑰金——成熟與親切一起，讓服事既高貴又貼近人心。',verse:'愛是恆久忍耐，又有恩慈。—哥林多前書 13:4'},
  {f:'SiO₂',pun:'矽氧共舞 ＝ 智慧透明',desc:'矽（Si）是堅固基礎，氧（O）是生命氣息；合而為一成為透明的玻璃。清晰而穩固的團隊，來自理性與熱情的共同築造。',verse:'智慧比珍珠更寶貴。—箴言 3:15'},
  {f:'SiC',pun:'碳化矽 ＝ 磨礪相長',desc:'理性穩重的矽（Si）＋靈活適應的碳（C），合成碳化矽——硬度僅次於鑽石，是最鋒利的磨具。教會裡最互補的搭檔，不是讓彼此舒服，而是讓彼此更銳利。',verse:'鐵磨鐵，磨出刃來；朋友相感，也是如此。—箴言 27:17'},
  {f:'TiO₂',pun:'鈦陽 ＝ 在光中潔淨',desc:'最強韌的鈦（Ti）＋助燃的氧（O），合成二氧化鈦——光觸媒，在陽光照射下能分解一切污垢。改革者與激勵者結合，在光裡帶來更新與潔淨。',verse:'你們是世上的光。—馬太福音 5:14'},
  {f:'KCl',pun:'守護心跳的鹽',desc:'感知心律的鉀（K）＋殺菌守望的氯（Cl），合成氯化鉀——補充心律失調缺乏的電解質。敏銳的禱告者與剛直的守望者結合，是教會靈命的護心鹽。',verse:'我立你作以色列家守望的人。—以西結書 3:17'}
];

const typeLabel = {action:'🔥 行動型',structural:'🏛️ 支撐型',relational:'🌿 連結型',stabilizing:'🕊️ 穩定型'};

function buildCards() {
  const g = document.getElementById('grid');
  if (!g) return;
  g.innerHTML = '';
  elements.forEach(el => {
    const div = document.createElement('div');
    div.className = `card t-${el.type}`;
    div.dataset.type = el.type;
    div.innerHTML = `
      <div class="inner">
        <div class="face front">
          <div class="color-band">
            <span class="atomic-no">${el.no}</span>
            <span class="zh-name">${el.zh}</span>
            <div class="sym">${el.sym}</div>
            <div class="eng-name">${el.eng}</div>
          </div>
          <div class="card-lower">
            <div class="type-pill">${typeLabel[el.type]}</div>
            <div class="divider"></div>
            <div class="card-title">${el.title}</div>
          </div>
        </div>
        <div class="face back">
          <div class="back-header">
            <div class="back-sym-badge">${el.sym}</div>
            <div class="back-title-block">
              <div>
                <div class="btitle">${el.title}</div>
                <div class="bsub">${el.zh} · ${el.eng} · ${el.no}</div>
              </div>
              ${el.person ? `<div class="bperson-tag">📖 ${el.person}${el.personNote ? `<span class="bperson-note"> · ${el.personNote}</span>` : ''}</div>` : ''}
            </div>
          </div>
          <div class="back-divider"></div>
          <div class="back-body">
            <div class="blabel">👥 適合對象</div>
            <div class="btext">${el.target}</div>
            <div class="blabel">⚗ 科學特性</div>
            <div class="btext">${el.sci}</div>
            <div class="blabel">✝ 屬靈特質</div>
            <div class="btext">${el.sp}</div>
            <div class="blabel">⚠ 留意</div>
            <div class="bweak">${el.weak}</div>
            <div class="bverse">${el.verse.replace(/\n/g,' ')}</div>
          </div>
        </div>
      </div>`;
    div.addEventListener('click', () => div.classList.toggle('flipped'));
    g.appendChild(div);
  });
}

function buildCompounds() {
  const g = document.getElementById('cgrid');
  if (!g) return;
  g.innerHTML = '';
  compounds.forEach(c => {
    const div = document.createElement('div');
    div.className = 'ccard';
    div.innerHTML = `
      <div class="cformula">${c.f}</div>
      <div class="cpun">${c.pun}</div>
      <div class="cdesc">${c.desc}</div>
      <div class="cverse">${c.verse}</div>`;
    g.appendChild(div);
  });
}


function filter(type, btn, onClass) {
  document.querySelectorAll('.fbtn').forEach(b => b.className='fbtn');
  btn.classList.add(onClass);
  document.querySelectorAll('.card').forEach(c => {
    c.classList.toggle('gone', type!=='all' && c.dataset.type!==type);
  });
}


buildCards();
buildCompounds();
