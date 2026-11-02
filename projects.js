/* 黄鈺茜 · 项目（文字整理自项目书 PDF） */
window.PROJECTS = [
{
  id: 'D-2026-03', key: 'sheshan', year: 2026, date: '2026.07', color: '#5E7F4E',
  title: ['畲山养物', 'Sheshan Yangwu'],
  sub: ['枫树岭村农产品品牌升级', 'Brand upgrade for the farm products of Fengshuling Village'],
  kind: ['乡村品牌 · 包装设计', 'Rural branding · Packaging'],
  place: ['杭州临安 · 太阳镇枫树岭村', 'Fengshuling Village, Taiyang, Lin’an, Hangzhou'],
  role: ['项目负责人 · 设计', 'Project lead · Design'],
  context: ['乡村产业共富类（“土特产”）', 'Rural industry and common prosperity (local specialties)'],
  cover: 'sheshan-plum', heroSet: ['sheshan-plum', 'sheshan-dihuang'],
  lead: ['让畲山好物，走出枫树岭。以「贴纸替代换瓶」的低成本路径，让真材实料的好物在货架与直播间被一眼看见。', 'Let the good things of the She mountains leave Fengshuling. By replacing labels instead of containers, honest products become visible at a glance, on the shelf and in the livestream.'],
  /* 这个项目用品牌案例版式（index.html 里的 vBrand），不走通用的 sections */
  layout: 'brand',
  brand: {
    slogan: ['让畲山好物，<br>走出枫树岭。', 'Let the good things of the She mountains<br>leave Fengshuling.'],
    leadSub: ['以「贴纸替代换瓶」的低成本路径，让真材实料的好物在货架与直播间被一眼看见。', 'By replacing labels instead of containers, honest products become visible at a glance, on the shelf and in the livestream.'],
    facts: [
      ['1 / 5', ['临安区五个民族村之一', 'One of five ethnic-minority villages in Lin’an']],
      ['26%', ['畲族人口', 'She population']],
      ['80%+', ['森林覆盖率', 'Forest cover']],
      ['500万+', ['「畲和」五年助农销售（元）', 'Yuan of produce sold by “Shehe” in five years']],
      ['3', ['款主打产品', 'Core products']]
    ],
    village: { img: 'sheshan-village', h: ['村庄', 'The village'], cap: ['枫树岭村村委会', 'Fengshuling village office'],
      p: ['枫树岭村是临安区 5 个民族村之一，畲族人口占 26%，森林覆盖率超 80%。村集体培育的“畲和”品牌五年累积助农销售超 500 万元，主打十六味酸梅汤、九制黄精、黄精黑芝麻丸，真材实料、古法炮制。', 'Fengshuling is one of five ethnic-minority villages in Lin’an; 26% of its people are She, and forests cover over 80% of its land. The collective brand “Shehe” has sold more than 5 million yuan of produce in five years: sixteen-herb plum drink, nine-times-steamed rehmannia and polygonatum black-sesame balls, made with real ingredients and old methods.'] },
    problem: { img: 'sheshan-before', h: ['问题', 'The problem'], cap: ['现有包装', 'Existing packaging'],
      p: ['好东西，却没有被看见。', 'Good products that nobody noticed.'],
      list: [['包装廉价', 'The packaging looked cheap'], ['缺乏辨识度', 'It had no identity'], ['在直播屏幕里没有视觉焦点', 'It disappeared on a phone screen']] },
    strategy: { h: ['策略 · 产品即画布', 'Strategy · the product is the canvas'],
      quote: ['只换贴纸，不换容器。', 'Change the label, not the container.'],
      p: ['村里无力承担整包重新印刷，方案因此只换贴纸、不换容器：用透明 / 半透明贴纸让酸梅汤的琥珀色、芝麻丸的金色透出来，成为视觉的一部分。', 'The village could not afford new containers, so the design changes only the labels. Clear and translucent stickers let the amber of the plum drink and the gold of the sesame balls show through and become part of the design.'] },
    dna: { h: ['共享一套视觉基因', 'One shared visual DNA'],
      colors: [['#2F3B30', ['松墨', 'Pine-ink']], ['#EDE4D0', ['米白', 'Rice-white']], ['#B08A4F', ['黄铜金', 'Brass-gold']], ['#A8412B', ['凤凰朱', 'Phoenix-red']]],
      marks: [['sheshan-mark', ['三笔凤凰标志', 'Three-stroke phoenix mark']], ['sheshan-seal', ['凤凰封口贴', 'Phoenix seal']], ['sheshan-ribbon', ['畲族彩带纹样', 'She ribbon pattern'], 'rib']] },
    products: [
      { name: ['十六味酸梅汤', 'Sixteen-herb plum drink'], dir: ['本草留白', 'Herbal white space'],
        p: ['把酸梅汤从“夏日饮料”重新定位为具东方养生文化属性的植物饮品。以大量留白、纸张肌理、植物线描与低饱和色彩，营造温润、克制、安静的气质。新包装只换贴纸：透明袋上一张半透明宣纸贴，挖一扇月窗，露出汤本来的琥珀色；礼盒用通用牛皮纸盒，加一条封签、一方朱印。', 'The drink is repositioned from summer beverage to a plant tonic in the Eastern tradition of food as medicine. Generous white space, paper texture, botanical line drawing and soft colour give it a warm, restrained, quiet character. The new packaging changes only the labels: a translucent rice-paper label on the clear pouch, cut with a round moon window so the amber of the drink shows through; and a plain kraft box with a paper seal strip and a red seal.'],
        keep: [['留白', 'White space'], ['纸张肌理', 'Paper texture'], ['植物线描', 'Botanical line'], ['低饱和色彩', 'Soft colour']],
        drop: [['水果插画', 'Fruit illustration'], ['飞溅液体', 'Splashes'], ['冰块', 'Ice']],
        herbs: { list: [['#B9897F', ['乌梅', 'Smoked plum']], ['#A0705A', ['山楂', 'Hawthorn']], ['#B8483A', ['陈皮', 'Aged tangerine peel']], ['#D99A3E', ['桂花', 'Osmanthus']]], more: ['…… 等十六味本草', '… sixteen herbs in all'] },
        imgs: ['sheshan-plum-board'], wide: true, cap: ['「月窗」袋贴与「封签」盒贴 · 设计说明', '“Moon window” pouch label and “Seal strip” box label · design notes'] },
      { name: ['九制地黄', 'Nine-times-steamed rehmannia'], dir: ['畲山 · 黄土', 'She Mountain · Yellow Earth'],
        p: ['米白手工纸底色传递有温度的农产品；左侧一条畲族彩带纹样如古籍“书口”，暗示有来处的配方。', 'A handmade rice-paper ground for a warm farm product, with a strip of She ribbon pattern on the left like the fore-edge of an old book: a recipe with an origin.'],
        keep: [['米白手工纸', 'Rice paper'], ['畲族彩带', 'She ribbon'], ['古籍书口', 'Book fore-edge']],
        before: 'sheshan-before', imgs: ['sheshan-dihuang'], cap: ['原包装 → 「畲山 · 黄土」整包贴', 'Before → “She Mountain · Yellow Earth” label'] },
      { name: ['黄精黑芝麻丸', 'Polygonatum black-sesame balls'], dir: ['金田', 'Golden Field'],
        p: ['罐身中下部一条 5cm 环绕腰封，不遮住罐内金色丸子——透过透明罐看进去像金色的田野。腰封告诉消费者：这些金色，是枫树岭的。', 'A 5 cm band around the lower jar leaves the gold balls visible, so looking into the jar is like looking at a golden field. The band simply says that this gold comes from Fengshuling.'],
        keep: [['透明罐', 'Clear jar'], ['5cm 腰封', '5 cm band'], ['朱红封口贴', 'Red seal']],
        imgs: ['sheshan-jar'], wide: true, cap: ['「金田」腰封与展开图', '“Golden Field” band and its layout'] }
    ]
  },
  sections: []
},
{
  id: 'D-2026-04', key: 'solitude', year: 2026, date: '2026', color: '#8A4B2A',
  title: ['进入被隐藏的历史', 'Entering the Hidden History'],
  sub: ['斯图加特 Seilerwasen 绘画装置提案', 'A painting installation for Seilerwasen, Stuttgart'],
  kind: ['绘画装置 · 公共艺术 · 驻留提案', 'Painting installation · Public art · Residency proposal'],
  place: ['德国斯图加特 · 内卡河畔 Seilerwasen', 'Seilerwasen, on the Neckar, Stuttgart, Germany'],
  role: ['艺术家', 'Artist'],
  context: ['Akademie Schloss Solitude 驻留申请 · 2026', 'Application to Akademie Schloss Solitude, 2026'],
  cover: 'solitude-elevation.svg',
  lead: ['历史常被制度化为抽象的语言系统，与切身的感知相分离；记忆变成一份份信息档案，它的感官、身体与政治维度，逐渐从公共讨论和集体意识中退去。', 'History is often institutionalised into abstract systems of language, separated from lived perception. Memory becomes a set of information files, while its sensory, bodily and political dimensions slowly recede from public discourse and collective awareness.'],
  sections: [
    { h: ['艺术理念', 'Artistic concept'], p: [
      ['我的创作与自身的文化和社会背景紧密相关。我经历了社会形态迅速而剧烈的变化，而经由制度的继承与代际的传递，一些旧有的社会结构与意识形态仍在发挥影响，织进日常生活，嵌入每一处空间和每一次人际交往。与此同时，全球化与互联网、社交媒体的迅速发展带来信息爆炸与回音室，塑造出感知和世界观彼此不同的群体。身处其中，我直面快速的现代化、集体创伤、尚未弥合的历史断裂与沟通的失效。', 'My work is closely tied to my cultural and social background. I have lived through rapid and drastic social change, yet through inherited institutions and transmission between generations, older social structures and ideologies keep their influence, woven into daily life and embedded in every space and every encounter. At the same time, globalisation and the rapid growth of the internet and social media have produced information overload and echo chambers, shaping groups with very different perceptions of the world. Within this, I have faced rapid modernisation, collective trauma, unresolved historical rupture and the breakdown of communication.'],
      ['这让我关注：历史记忆如何塑造社会结构、公共领域中的伦理张力，以及具身感知。我希望搭建一座桥、一个平台，让人们在特定的场域里，通过视觉与空间的经验彼此相连，也通过一件作品与历史相遇。', 'This has shaped my interest in how historical memory forms social structures, in the ethical tensions of the public sphere, and in embodied perception. I want to build a bridge, a platform, where people can connect through visual and spatial experience in a particular place, and meet history through a work of art.'],
      ['第二次世界大战已经过去几代人，它的影响仍在塑造今天的世界。时间的距离没有抹去它的遗产，而是悄悄渗入社会结构、意识形态乃至日常行为，在新冠之后尤其明显：人们越来越沉浸于数字世界、回音室和极端的身份认同，面对二战议题时，往往要么漠然，要么失去理性。因此，这个项目不传递个人观点或固定叙事，而是把重心放在人的参与上：寻找一个与这段历史对话的入口，并把历史记忆与参与者的痕迹一同保存在作品里。', 'Although the Second World War is several generations behind us, its effects continue to shape the world today. Time has not erased its legacy; it quietly permeates social structures, ideologies and even everyday behaviour, especially since COVID-19, as people sink further into digital worlds, echo chambers and extreme identities. Faced with this history, people tend to become either indifferent or irrational. So rather than transmitting a personal view or a fixed narrative, this project focuses on participation: finding a way into dialogue with this history, and preserving both historical memory and the traces of participants within the work.']
    ], img: 'solitude-render.jpg', cap: ['概念效果图 · 生长与时间', 'Concept rendering · growth and time'] },
    { h: ['场地', 'Site'], p: [
      ['提案选址 Seilerwasen（来自“可选场地清单”）。它位于内卡河畔，紧邻梅赛德斯-奔驰 Untertürkheim 工厂。二战期间，这座工厂是德国军用发动机、军用车辆和航空发动机零件最重要的生产基地之一。', 'The proposal is sited at Seilerwasen, chosen from the list of possible sites. It lies beside the river Neckar, next to the Mercedes-Benz Untertürkheim factory, which during the Second World War was one of Germany’s most important production sites for military engines, military vehicles and aircraft engine parts.'],
      ['吊诡的是，这里如今是一座公园。过去强迫劳动的沉重历史，与今天休闲、适合散步放松的日常功能并置在一起——这片场地因此有它独特的场域。', 'Paradoxically, the area is now a public park. The heavy history of forced labour here sits side by side with its present use for leisure and relaxed walks, and this gives the site a field of its own.']
    ] },
    { h: ['装置结构', 'Structure'], p: [
      ['装置名为《进入被隐藏的历史》（Eintauchen in die versteckte Geschichte），以“具身感知”作为重新激活历史记忆的关键策略，由三个系统组成：耐候钢框架、双面半透明感知系统与活体植物系统。', 'The installation, Entering the Hidden History (Eintauchen in die versteckte Geschichte), uses embodied perception as the key strategy for reactivating historical memory. It consists of three systems: a weathering steel frame, a double-sided translucent perceptual system, and a living plant system.']
    ], list: [
      ['双面半透明感知系统 —— 一道弧形曲面，由两层涤纶画布组成，中间相隔 25 cm；高 2.4 m、深 1 m、宽 2.8 m', 'Double-sided translucent perceptual system: a curved surface of two polyester canvases with a 25 cm gap; 2.4 m high, 1 m deep, 2.8 m wide'],
      ['耐候钢框架 —— 两侧支撑画布的空心立柱，各宽 20 cm，底部为 U 形支撑', 'Weathering steel frame: hollow columns 20 cm wide on either side support the canvases, on a U-shaped base'],
      ['活体植物系统 —— 攀援植物沿框架生长，并与当地植物融为一体', 'Living plant system: climbing plants grow around the frame and merge with the local vegetation']
    ], img: 'solitude-plan.svg', cap: ['平面（按提案尺寸重绘；正立面见页首）', 'Plan, redrawn to the proposal’s dimensions (front elevation at top)'] },
    { h: ['双面半透明感知系统', 'The translucent perceptual system'], p: [
      ['画面的凸面带来压迫感，向人所在的空间推进；凹面则给人被包围的感觉。', 'The convex side of the painting creates a sense of pressure, pushing into the space where people stand; the concave side offers a sense of being surrounded.'],
      ['当强烈的阳光穿透两层画布，半透明的画布让光带着笔迹的记忆穿过表面，图像像幽灵一样层层叠映——后面的，在前面的之中隐约闪现。绘画成为一次次时间性决定的累积：被覆盖的，从未被完全抹去。自然光随天气、日出日落而变化，此刻的环境也与之交织在一起。', 'When strong sunlight passes through both canvases, the translucent surfaces let light carry the memory of painted traces through them, and the images appear as ghostly overlays: what lies behind shimmers faintly within what lies before. Painting becomes an accumulation of decisions in time, and what is covered is never fully erased. Natural light changes with the weather, sunrise and sunset, and the present environment becomes entangled with the work.']
    ], img: 'solitude-section.svg', cap: ['剖面 · 光线', 'Section · light'] },
    { h: ['耐候钢与活体植物', 'Steel and living plants'], p: [
      ['耐候钢赋予作品纪念碑式的庄重。它致密、锈蚀的表面承载着时间的重量，也像一枚锚，与画面的轻盈相互作用。', 'Weathering steel gives the work a monumental gravity. Its dense, rusted surface carries the weight of time, and it acts as an anchor against the lightness of the painting.'],
      ['攀援植物沿框架生长，随时间与当地植物融为一体。这个系统不仅连接作品与周围环境，也在时间维度上连接过去、现在与未来。', 'Climbing plants grow around the frame and, over time, merge with the local plants. This system connects the work with its surroundings, and also links past, present and future in time.']
    ], img: 'solitude-growth.svg', cap: ['生长与时间：第 1 个月 · 第 1 年 · 第 3 年', 'Growth and time: month 1 · year 1 · year 3'] },
    { h: ['公共活动', 'Public events'], list: [
      ['活动一 · 空间共存实验室：一次参与式感知实验 —— 在装置建成之前，邀请参与者在场地中自由行走，每人会收到与这里曾发生的强迫劳动有关的历史叙述片段。重点不在传递知识，而在观察历史信息如何影响人的身体在场、空间方向感与伦理敏感度。', 'Event 1 · Spatial Co-existence Laboratory, a participatory perceptual experiment: before the installation is built, participants move freely through the site, each receiving fragments of historical narratives about the forced labour that took place here. The focus is not on passing on knowledge, but on observing how historical information shapes bodily presence, spatial orientation and ethical sensitivity.'],
      ['活动二 · 回到作品之中 —— 在活动一与在地调研之后，汇集所有元素进行视觉转译；装置落成后，再次邀请参与者进入这个空间，让作品成为反思的触发点，重新定位自己在历史中的位置。装置由此成为一份关于公众行动、伦理感知与空间记忆的活档案。', 'Event 2 · Returning to the work: after Event 1 and local research, all the gathered elements are translated visually. Once the installation is in place, participants are invited back into the space, where the work acts as a prompt for reflection and a way to relocate their role in history. The installation becomes a living archive of public movement, ethical perception and spatial memory.']
    ], pAfter: [
      ['两次活动在感知、反思与艺术转化之间形成一个循环，让历史记忆成为一种具身的、关系性的过程，而不是一段固定的叙事。', 'Together, the two events form a cycle of perception, reflection and artistic transformation, letting historical memory emerge as an embodied, relational process rather than a fixed narrative.']
    ] },
    { h: ['参与者与共同作者', 'Participants and co-authorship'], p: [
      ['主要对象是当地居民，也包括学生、文化工作者与教育者。他们的上一代或许曾在这里生活，他们的下一代也将在这里长大。', 'The main audience is local residents, along with students, cultural workers and educators. Their parents’ generation may have lived here, and their children will grow up here.'],
      ['让人们以身体与这件关于历史的作品发生关联，在当下尤其重要。我不想把自己的观念塞进别人的脑子里，所以更关注人们如何参与进来。在某种意义上，这件作品既是与他们一起完成的，也是为他们而作的。作为一位来自不同文化背景的创作者，这件作品同时也是一场跨文化的人文对话，一次“去作者化”的实验。', 'Bodily engagement with a work about history matters especially now. I do not want to push my ideas into other people’s heads, so I focus on how people become involved. In a sense the work is made both with them and for them. And as its maker, coming from a different cultural background, it is also a cross-cultural, humanist dialogue and an experiment in de-authorship.']
    ] }
  ]
}
];
window.PROJDIMS={"solitude-elevation.svg":[760,640],"solitude-render.jpg":[874,518],"sheshan-box":[655,995],"sheshan-poster":[673,897],"sheshan-dihuang":[545,682],"sheshan-jar":[939,626],"sheshan-before":[465,488],"sheshan-village":[576,422],"sheshan-ribbon":[43,656],"sheshan-seal":[88,88],"sheshan-mark":[140,80],"sheshan-plum":[1400,1380],"sheshan-plum-board":[1800,1150]};
