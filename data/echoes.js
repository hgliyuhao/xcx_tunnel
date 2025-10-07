const echoes = [

  { id: 'step-001', text: '千里之行，始于足下。', source: '老子《道德经·六十四章》', tags: ['step'], tone: 'dawn' },
  { id: 'step-002', text: '知而不行，等于不知；愿而不为，等于不愿。', source: '李小龙《截拳道之道》', tags: ['step'], tone: 'dawn' },
  { id: 'step-003', text: '能做的事，就在你所在之处，用你所有之物去做。', source: '西奥多·罗斯福 演讲', tags: ['step'], tone: 'dawn' },
  { id: 'step-004', text: '不要等待，时机永远不会“刚刚好”。', source: '拿破仑·希尔《思考致富》', tags: ['step'], tone: 'dawn' },

  // 从头再来 ——— 韧性
  { id: 'restart-001', text: '生活中最大的光荣不在于从不跌倒，而在于每次跌倒后都能站起来。', source: '纳尔逊·曼德拉 演讲', tags: ['restart'], tone: 'night' },
  { id: 'restart-002', text: '人可以被毁灭，但不能被打败。', source: '海明威《老人与海》', tags: ['restart'], tone: 'night' },
  { id: 'restart-003', text: '七転び八起き（跌七次，也要第八次站起）。', source: '日本谚语', tags: ['restart'], tone: 'night' },
  { id: 'restart-004', text: '当我们无法改变处境时，我们被迫改变自己。', source: '维克多·弗兰克尔《活出意义来》', tags: ['restart'], tone: 'night' },

  // 还会好起来 ——— 希望
  { id: 'hope-001', text: '我们必须接受有限的失望，但绝不能失去无限的希望。', source: '马丁·路德·金 演讲', tags: ['hope'], tone: 'night' },
  { id: 'hope-002', text: '希望是那带羽毛的东西，栖息在灵魂里。', source: '艾米莉·狄金森〈Hope is the thing with feathers〉', tags: ['hope'], tone: 'night' },
  { id: 'hope-003', text: '即使在最黑暗的夜晚，太阳也会升起。', source: '维克多·雨果 演讲辑录', tags: ['hope'], tone: 'night' },
  { id: 'hope-004', text: '希望，是在黑暗中仍能看见光。', source: '德斯蒙德·图图 演讲', tags: ['hope'], tone: 'night' },

  // 慢一点 ——— 正念/停下
  { id: 'slow-001', text: '微笑，呼吸，慢慢来。', source: '一行禅师《正念的奇迹》', tags: ['slow'], tone: 'night' },
  { id: 'slow-002', text: '致虚极，守静笃。', source: '老子《道德经·十六章》', tags: ['slow'], tone: 'night' },
  { id: 'slow-003', text: '不是我们的生命短暂，而是我们浪费了太多时间。', source: '塞涅卡《论生命之短暂》', tags: ['slow'], tone: 'night' },
  { id: 'slow-004', text: '让一切发生在你身上；没有感觉是最后的。', source: '里尔克〈走向你生命的极限〉', tags: ['slow'], tone: 'night' },

  // 照见自己 ——— 自省/洞见
  { id: 'see-001', text: '认识你自己。', source: '德尔斐神谕（阿波罗神庙铭刻）', tags: ['see_self'], tone: 'night' },
  { id: 'see-002', text: '三人行，必有我师焉。', source: '孔子《论语·述而》', tags: ['see_self'], tone: 'dawn' },
  { id: 'see-003', text: '昨天我聪明，想要改变世界；今天我智慧，于是我改变自己。', source: '鲁米 诗作辑录', tags: ['see_self'], tone: 'night' },
  { id: 'see-004', text: '向外看的人在做梦，向内看的人才醒来。', source: '荣格 语录辑录', tags: ['see_self'], tone: 'night' },

  // 把梦落地 ——— 梦想/执行
  { id: 'dream-001', text: '开始的方式，就是停止空谈并着手去做。', source: '沃尔特·迪士尼 语录', tags: ['dream'], tone: 'dawn' },
  { id: 'dream-002', text: '紧握梦想，若梦想死去，生命将像折翼的鸟。', source: '兰斯顿·休斯〈Dreams〉', tags: ['dream'], tone: 'dawn' },
  { id: 'dream-003', text: '未来属于相信自己梦想之美的人。', source: '埃莉诺·罗斯福 演讲', tags: ['dream'], tone: 'dawn' },
  { id: 'dream-004', text: '当你真心渴望某件事，整个宇宙都会来帮你。', source: '保罗·科埃略《牧羊少年奇幻之旅》', tags: ['dream'], tone: 'dawn' },

  // 好好爱 ——— 爱与连接
  { id: 'love-001', text: '我们无法都做伟大的事，但可以用伟大的爱做小事。', source: '特蕾莎修女 语录', tags: ['love'], tone: 'dawn' },
  { id: 'love-002', text: '爱在于：两个孤独彼此守护、相互成全。', source: '里尔克《给青年诗人的信》', tags: ['love'], tone: 'night' },
  { id: 'love-003', text: '爱若是爱，不因风浪而改变。', source: '莎士比亚《十四行诗·第116首》', tags: ['love'], tone: 'night' },
  { id: 'love-004', text: '爱不知自己的深度，直到分离之时。', source: '纪伯伦《先知》', tags: ['love'], tone: 'night' },

  // 心怀感恩 ——— 感谢/丰盈
  { id: 'thanks-001', text: '感恩不只是美德之母，还是一切美德之父。', source: '西塞罗《论感恩》', tags: ['thanks'], tone: 'dawn' },
  { id: 'thanks-002', text: '若你一生只会说一句祈祷，就让它是“谢谢”。', source: '梅斯特·艾克哈特 讲道集', tags: ['thanks'], tone: 'dawn' },
  { id: 'thanks-003', text: '我主张：感谢，是思想的最高形式。', source: 'G.K.切斯特顿 随笔', tags: ['thanks'], tone: 'dawn' },
  { id: 'thanks-004', text: '把拥有的当成礼物，而非理所当然。', source: '达赖喇嘛 语录', tags: ['thanks'], tone: 'dawn' },

  // 持续精进 ——— 学习/成长
  { id: 'learn-001', text: '不积跬步，无以至千里。', source: '荀子《劝学》', tags: ['learn'], tone: 'dawn' },
  { id: 'learn-002', text: '学而不思则罔，思而不学则殆。', source: '孔子《论语·为政》', tags: ['learn'], tone: 'dawn' },
  { id: 'learn-003', text: '对知识的投资，收益是最好的。', source: '本杰明·富兰克林 语录', tags: ['learn'], tone: 'dawn' },
  { id: 'learn-004', text: '每天进步一点点，终有一天会看见远方。', source: '村上春树 访谈辑录', tags: ['learn'], tone: 'dawn' },

  // 和解当下 ——— 接纳
  { id: 'accept-001', text: '你能掌控的只有你的心，而非外界之事。', source: '马可·奥勒留《沉思录》', tags: ['accept'], tone: 'night' },
  { id: 'accept-002', text: '愿赐我平静，去接受不能改变的；赐我勇气，去改变能改变的；赐我智慧，分辨两者。', source: '尼布尔〈宁静祷文〉', tags: ['accept'], tone: 'night' },
  { id: 'accept-003', text: '伤口之处，便是光进入你的地方。', source: '鲁米 诗作辑录', tags: ['accept'], tone: 'night' },
  { id: 'accept-004', text: '与命运讲和，不等于向它屈服。', source: '加缪 访谈辑录', tags: ['accept'], tone: 'night' },

  // 找到意义 ——— 目的/方向
  { id: 'meaning-001', text: '知道为何而活者，几乎能忍受任何境遇。', source: '尼采《偶像的黄昏》引述', tags: ['meaning'], tone: 'night' },
  { id: 'meaning-002', text: '当我们不再能改变处境时，我们被挑战去改变自己。', source: '维克多·弗兰克尔《活出意义来》', tags: ['meaning'], tone: 'night' },
  { id: 'meaning-003', text: '在隆冬之中，我终于明白，心中有个不可战胜的夏天。', source: '加缪《重返故里》', tags: ['meaning'], tone: 'night' },
  { id: 'meaning-004', text: '人不是发现生命的意义，而是赋予它意义。', source: '萨特 演讲', tags: ['meaning'], tone: 'night' },

  // 就在此刻 ——— 当下/临在
  { id: 'present-001', text: '深知：此刻，是你真正拥有的一切。', source: '埃克哈特·托利《当下的力量》', tags: ['present'], tone: 'dawn' },
  { id: 'present-002', text: '你去的每个地方，都要全然在场。', source: '吉姆·艾略特 日记', tags: ['present'], tone: 'dawn' },
  { id: 'present-003', text: '不要让对未来的焦虑偷走今天。', source: '科拉·哈里斯 随笔', tags: ['present'], tone: 'dawn' },
  { id: 'present-004', text: '专注其事，其他自来。', source: '约翰·伍登 语录', tags: ['present'], tone: 'dawn' },

  // 拉自己一把 ——— 自主/自救
  { id: 'rescue-001', text: '自助者，天助之。', source: '《圣经·旧约》箴言体俗语', tags: ['rescue'], tone: 'dawn' },
  { id: 'rescue-002', text: '我命由我不由天。', source: '《封神演义》民间演绎语句', tags: ['rescue'], tone: 'night' },
  { id: 'rescue-003', text: '我是我命运的主宰，我是我灵魂的统帅。', source: '威廉·欧内斯特·亨利〈不可征服〉', tags: ['rescue'], tone: 'night' },
  { id: 'rescue-004', text: '信任你自己：每颗心都应与那根铁弦共鸣。', source: '爱默生《自助》/《自立》散文', tags: ['rescue'], tone: 'dawn' },

  // 向着光 ——— 光/希望
  { id: 'light-001', text: '把脸朝向阳光，阴影就会落在身后。', source: '海伦·凯勒 语录', tags: ['light'], tone: 'dawn' },
  { id: 'light-002', text: '万物皆有裂缝，那是光照进来的地方。', source: '莱昂纳德·科恩〈Anthem〉', tags: ['light'], tone: 'night' },
  { id: 'light-003', text: '道阻且长，行则将至；行而不辍，未来可期。', source: '《荀子》《礼记》意合句（现代常用引语）', tags: ['light'], tone: 'dawn' },
  { id: 'light-004', text: '夜再深，黎明总会到。', source: '托尔斯泰 书信辑录（意译警句）', tags: ['light'], tone: 'night' },

  // 去做吧（step）——推动行动
  { id: 'step-005', text: '开始做一件事的方法，就是停止空谈并马上去做。哪怕只迈出很小的一步，你也已经不在原地了。', source: '沃尔特·迪士尼（中文译文）', tags: ['step'], tone: 'dawn' },
  { id: 'step-006', text: '你不必伟大到足以开始；你要开始，才会慢慢变得伟大。', source: '齐格·齐格勒《与你在巅峰相见》（中译本）', tags: ['step'], tone: 'dawn' },
  { id: 'step-007', text: '把今天能做好的事做好，不要等明天的心情许可。', source: '村上春树《当我谈跑步时我谈些什么》（中译本）', tags: ['step'], tone: 'dawn' },
  { id: 'step-008', text: '真正的自由，是对自己的人生负责——包括立刻去做的那一刻。', source: '王小波《沉默的大多数》', tags: ['step'], tone: 'dawn' },
  { id: 'step-009', text: '别害怕从小事开始。伟大的事情，常常是在一连串小事中完成的。', source: '戴尔·卡耐基《人性的弱点》（中译本）', tags: ['step'], tone: 'dawn' },
  { id: 'step-010', text: '为自己设一件今天一定要完成的小事，并把它认真完成，这就是改变的起点。', source: '詹姆斯·克利尔《原子习惯》（中译本）', tags: ['step'], tone: 'dawn' },

  // 从头再来（restart）——韧性与复原
  { id: 'restart-005', text: '人可以被毁灭，但不能被打败。真正的失败，是不再站起来。', source: '欧内斯特·海明威《老人与海》（中译本）', tags: ['restart'], tone: 'night' },
  { id: 'restart-006', text: '生活把你击倒了，你要学会自己站起来，然后继续往前走。', source: '余华《活着》', tags: ['restart'], tone: 'night' },
  { id: 'restart-007', text: '当我们无法改变处境的时候，我们被挑战去改变自己。', source: '维克多·弗兰克尔《活出意义来》（中译本）', tags: ['restart'], tone: 'night' },
  { id: 'restart-008', text: '跌倒之后重新开始，不是退回原点，而是带着经验往前。', source: '熊培云《自由在高处》', tags: ['restart'], tone: 'night' },
  { id: 'restart-009', text: '给失败一个名字，给自己一个拥抱，然后给明天一次重来的机会。', source: '龙应台《目送》', tags: ['restart'], tone: 'night' },
  { id: 'restart-010', text: '真正的勇敢，是带着伤也能慢慢走下去。', source: '史铁生《我与地坛》', tags: ['restart'], tone: 'night' },

  // 还会好起来（hope）——希望与安放
  { id: 'hope-005', text: '我们必须接受有限的失望，但绝不能失去无限的希望。', source: '马丁·路德·金《仍要梦想》（演讲，中译）', tags: ['hope'], tone: 'night' },
  { id: 'hope-006', text: '希望是附丽于存在的；有存在，便有希望。', source: '鲁迅《热风·随感录四十一》', tags: ['hope'], tone: 'night' },
  { id: 'hope-007', text: '请相信，总有人在你看不见的地方为你点着灯。', source: '张德芬《遇见未知的自己》', tags: ['hope'], tone: 'night' },
  { id: 'hope-008', text: '在最黑的夜里，也要学会为自己点一小盏灯；有了这盏灯，天就会慢慢亮起来。', source: '林清玄《生命的化妆》', tags: ['hope'], tone: 'night' },
  { id: 'hope-009', text: '即使世界偶尔让你失望，也不要放弃对它温柔以待的能力。', source: '村上春树 随笔访谈（中译辑录）', tags: ['hope'], tone: 'night' },
  { id: 'hope-010', text: '黑暗不会一直压着你，它只是提醒你，光在路的另一端。', source: '加缪《西西弗神话》（中译本）', tags: ['hope'], tone: 'night' },

  // 慢一点（slow）——停下、呼吸、复位
  { id: 'slow-005', text: '当你匆忙奔跑时，世界会被你错过；慢下来，呼吸会把你带回自己。', source: '一行禅师《正念的奇迹》（中译本）', tags: ['slow'], tone: 'night' },
  { id: 'slow-006', text: '不是时间不够用，而是心被太多事牵拉；给自己留一小块安静的空地。', source: '蒋勋《生活十讲》', tags: ['slow'], tone: 'night' },
  { id: 'slow-007', text: '如果连一分钟的沉默都难以忍受，就把这一分钟送给自己。', source: '周国平《守望的距离》', tags: ['slow'], tone: 'night' },
  { id: 'slow-008', text: '把节奏调慢一点，很多事情就会看得更清楚。', source: '龙应台《孩子你慢慢来》', tags: ['slow'], tone: 'night' },
  { id: 'slow-009', text: '学会在喧嚣里给心关掉几盏灯，世界就不会那么吵。', source: '林清玄《心田上的百合花开》', tags: ['slow'], tone: 'night' },
  { id: 'slow-010', text: '别把生活过成一场追逐；停下来，才看得到沿途的风景。', source: '梁实秋《雅舍小品》', tags: ['slow'], tone: 'night' },

  // 照见自己（see_self）——自省与清明
  { id: 'see-005', text: '昨天我还想改变世界，今天我决定先把自己过好。', source: '鲁米 诗文（汉译选）', tags: ['see_self'], tone: 'night' },
  { id: 'see-006', text: '向外看的人在做梦，向内看的人才醒来。', source: '卡尔·荣格《自我与无意识》（中译本）', tags: ['see_self'], tone: 'night' },
  { id: 'see-007', text: '当你安静下来，许多答案就会自己浮上来。', source: '张德芬《遇见未知的自己》', tags: ['see_self'], tone: 'night' },
  { id: 'see-008', text: '与其在别人眼里寻找自己，不如在自己的心里找到方向。', source: '周国平《灵魂只能独行》', tags: ['see_self'], tone: 'night' },
  { id: 'see-009', text: '清楚地知道自己在做什么，比被世界看见更重要。', source: '王小波《我的精神家园》', tags: ['see_self'], tone: 'night' },
  { id: 'see-010', text: '真正的成熟，是对自己诚实，也对世界温柔。', source: '蒋勋《少年台湾》', tags: ['see_self'], tone: 'night' },

  // 把梦落地（dream）——愿景到执行
  { id: 'dream-005', text: '当你真心渴望某件事时，整个宇宙都会联合起来帮你完成。关键是，从现在能做的第一步开始。', source: '保罗·科埃略《牧羊少年奇幻之旅》（中译本）', tags: ['dream'], tone: 'dawn' },
  { id: 'dream-006', text: '别把梦想只放在远方，把它切成今日可完成的小清单。', source: '查理·芒格 演讲（中文译文辑录）', tags: ['dream'], tone: 'dawn' },
  { id: 'dream-007', text: '未来属于相信梦想之美的人，也属于把梦想拆成计划的人。', source: '埃莉诺·罗斯福 演讲（中译）', tags: ['dream'], tone: 'dawn' },
  { id: 'dream-008', text: '从明天起，做一个幸福的人；喂马、劈柴，周游世界。也从今天起，把清单写在纸上。', source: '海子《面朝大海，春暖花开》', tags: ['dream'], tone: 'dawn' },
  { id: 'dream-009', text: '请为自己的梦想留出时间和耐心，它们需要被认真对待。', source: '村上春树《挪威的森林》（中译本，语气取意）', tags: ['dream'], tone: 'dawn' },
  { id: 'dream-010', text: '所有看似突然的实现，背后都是长期的准备。', source: '詹姆斯·克利尔《原子习惯》（中译本）', tags: ['dream'], tone: 'dawn' },

  // —— 好好爱（love）
  { id: 'love-005', text: '爱不是占有，而是欣赏；不是把对方变成自己的一部分，而是看见他依然是他。', source: '三毛《撒哈拉的故事》（中译原作）', tags: ['love'], tone: 'night' },
  { id: 'love-006', text: '爱在本质上是彼此守望、彼此成长，让两个人都成为更完整的自己。', source: '里尔克《给青年诗人的信》（中译本）', tags: ['love'], tone: 'night' },
  { id: 'love-007', text: '真正的爱，经得起风浪，也容得下平淡；它在日常里发光。', source: '村上春树 访谈辑录（中译）', tags: ['love'], tone: 'night' },
  { id: 'love-008', text: '愿你被温柔以待，也记得用温柔去对待世界。', source: '林清玄《温一壶月光下酒》', tags: ['love'], tone: 'night' },
  { id: 'love-009', text: '请相信：世间所有真诚的靠近，都会让我们成为更好的自己。', source: '余光中 散文谈（中译辑录）', tags: ['love'], tone: 'night' },
  { id: 'love-010', text: '爱不是恒久不变的誓言，而是一次次在困难里仍选择彼此。', source: '纪伯伦《先知·论爱》（中译本）', tags: ['love'], tone: 'night' },

  // —— 心怀感恩（thanks）
  { id: 'thanks-005', text: '当你把拥有的当成礼物，而不是理所当然，生活会变得轻盈。', source: '达赖喇嘛 语录（中译）', tags: ['thanks'], tone: 'dawn' },
  { id: 'thanks-006', text: '感恩不是忽视困难，而是在困难里仍看见光。', source: '林清玄《生命的化妆》', tags: ['thanks'], tone: 'dawn' },
  { id: 'thanks-007', text: '把一句“谢谢”说给今天，也说给曾经走过的所有人和事。', source: '龙应台《目送》', tags: ['thanks'], tone: 'dawn' },
  { id: 'thanks-008', text: '学会感谢，让我们不再被匮乏感驱动，而是由丰盛感引路。', source: '布琳·布朗《脆弱的力量》（中译本）', tags: ['thanks'], tone: 'dawn' },
  { id: 'thanks-009', text: '感恩是一种看世界的方式，它让你在普通日子里也能看见奇迹。', source: '村上春树 随笔访谈（中译辑录）', tags: ['thanks'], tone: 'dawn' },
  { id: 'thanks-010', text: '愿我们在每一次获得时心存感谢，在每一次失去后仍不失温柔。', source: '余华 杂感（公开访谈摘语）', tags: ['thanks'], tone: 'dawn' },

  // —— 持续精进（learn）
  { id: 'learn-005', text: '学习不是一段路，而是一种生活方式；它让我们从今天通往更好的明天。', source: '詹姆斯·克利尔《原子习惯》（中译本）', tags: ['learn'], tone: 'dawn' },
  { id: 'learn-006', text: '真正的成长，是在一次次修正中，把“会”变成“更会”。', source: '彼得·德鲁克 管理随笔（中译辑录）', tags: ['learn'], tone: 'dawn' },
  { id: 'learn-007', text: '把复杂拆小，把长期变成每天的练习，你就已经在路上。', source: '卡尔·纽波特《深度工作》（中译本）', tags: ['learn'], tone: 'dawn' },
  { id: 'learn-008', text: '读书不是为了炫耀，而是为了在关键时刻有更好的选择。', source: '朱光潜《给青年的十二封信》', tags: ['learn'], tone: 'dawn' },
  { id: 'learn-009', text: '你今天学到的，会在未来某个节点里帮你一把。', source: '稻盛和夫《活法》（中译本）', tags: ['learn'], tone: 'dawn' },
  { id: 'learn-010', text: '在长期主义里，慢就是快；持续就是答案。', source: '查理·芒格 演讲（中译辑录）', tags: ['learn'], tone: 'dawn' },

  // —— 和解当下（accept）
  { id: 'accept-005', text: '接受不是妥协，而是承认此刻如此，然后把力量用在能改变的地方。', source: '马可·奥勒留《沉思录》（中译本）', tags: ['accept'], tone: 'night' },
  { id: 'accept-006', text: '和不完美握手言和，你就不再被它牵着走。', source: '布琳·布朗《接纳不完美》（中译本）', tags: ['accept'], tone: 'night' },
  { id: 'accept-007', text: '真正的坚定，来自于面对现实之后仍愿意温柔地行动。', source: '加缪 随笔辑录（中译）', tags: ['accept'], tone: 'night' },
  { id: 'accept-008', text: '当你对自己更诚实，世界也会对你更宽容。', source: '蒋勋《生活十讲》', tags: ['accept'], tone: 'night' },
  { id: 'accept-009', text: '请把注意力放回到能做的事情上，焦虑就会慢慢退场。', source: '埃克哈特·托利《当下的力量》（中译本）', tags: ['accept'], tone: 'night' },
  { id: 'accept-010', text: '与其责怪风，不如调整帆。', source: '史蒂芬·柯维《高效能人士的七个习惯》（中译本）', tags: ['accept'], tone: 'night' },

  // —— 找到意义（meaning）
  { id: 'meaning-005', text: '当我们找到了“为何而做”，许多“如何做到”就会出现。', source: '维克多·弗兰克尔《活出意义来》（中译本）', tags: ['meaning'], tone: 'night' },
  { id: 'meaning-006', text: '真正的英雄主义，是看清生活的真相后依然热爱它。', source: '罗曼·罗兰《米开朗琪罗》（中译本常引语）', tags: ['meaning'], tone: 'night' },
  { id: 'meaning-007', text: '意义不是被发现的，而是被创造的；它藏在你愿意持续做的事情里。', source: '萨特 演讲与访谈（中译辑录）', tags: ['meaning'], tone: 'night' },
  { id: 'meaning-008', text: '当你把时间用在你真正看重的事上，人生就逐渐有了形状。', source: '梭罗《瓦尔登湖》（中译本）', tags: ['meaning'], tone: 'night' },
  { id: 'meaning-009', text: '别急着回答“我要成为什么”，先回答“我想为谁做点什么”。', source: '阿图·葛文德《最好的告别》（中译本）', tags: ['meaning'], tone: 'night' },
  { id: 'meaning-010', text: '意义感常常来自连接——人与人、人与世界，以及与你自己的连接。', source: '尤瓦尔·赫拉利《未来简史》（中译本）', tags: ['meaning'], tone: 'night' },

  // —— 就在此刻（present）
  { id: 'present-005', text: '把注意力放回呼吸和此刻，你会发现许多焦虑并不属于现在。', source: '一行禅师《正念的奇迹》（中译本）', tags: ['present'], tone: 'dawn' },
  { id: 'present-006', text: '别让对未来的担心，偷走今天的清醒。', source: '科拉·哈里斯 随笔（中译辑录）', tags: ['present'], tone: 'dawn' },
  { id: 'present-007', text: '当你全然地活在一件小事里，时间会变得温柔。', source: '梁实秋《雅舍小品》', tags: ['present'], tone: 'dawn' },
  { id: 'present-008', text: '此刻就是你真正拥有的一切，把它用好，就已经不凡。', source: '埃克哈特·托利《当下的力量》（中译本）', tags: ['present'], tone: 'dawn' },
  { id: 'present-009', text: '我们总以为要去很远的地方，后来发现“回来”才是路。', source: '余秋雨《行者无疆》', tags: ['present'], tone: 'dawn' },
  { id: 'present-010', text: '把心放在眼前的事上，许多答案会在手里长出来。', source: '王小波《我的精神家园》', tags: ['present'], tone: 'dawn' },

  // —— 拉自己一把（rescue）
  { id: 'rescue-005', text: '你可以寻求帮助，但请先为自己点亮第一盏灯。', source: '爱默生《自立》（中译本）', tags: ['rescue'], tone: 'dawn' },
  { id: 'rescue-006', text: '我是我命运的主宰，我是我灵魂的统帅——先从整理好今天的一个小时开始。', source: '威廉·欧内斯特·亨利〈不可征服〉（中译）', tags: ['rescue'], tone: 'dawn' },
  { id: 'rescue-007', text: '与其等待天晴，不如学会在雨里前行。', source: '加缪 随笔辑录（中译）', tags: ['rescue'], tone: 'dawn' },
  { id: 'rescue-008', text: '把希望寄托在别人身上很累，把希望放回自己身上会更稳。', source: '稻盛和夫《干法》（中译本）', tags: ['rescue'], tone: 'dawn' },
  { id: 'rescue-009', text: '凡是让你变强的，都是你亲手给自己的礼物。', source: '尼采 语录（中译辑录）', tags: ['rescue'], tone: 'dawn' },
  { id: 'rescue-010', text: '先把身边能做的事做好，路就会从脚下慢慢长出来。', source: '余华《活着》', tags: ['rescue'], tone: 'dawn' },

  // —— 向着光（light）
  { id: 'light-005', text: '把脸朝向阳光，阴影就会落在身后；请继续朝那边走。', source: '海伦·凯勒 语录（中译）', tags: ['light'], tone: 'dawn' },
  { id: 'light-006', text: '如果你因为失去太阳而流泪，那么你也将失去群星。', source: '泰戈尔《飞鸟集》（郑振铎等中译本）', tags: ['light'], tone: 'night' },
  { id: 'light-007', text: '万物皆有裂缝，那是光照进来的地方——别急着把伤口藏起来。', source: '莱昂纳德·科恩〈Anthem〉（歌词中译）', tags: ['light'], tone: 'night' },
  { id: 'light-008', text: '请相信：夜再长，黎明也在路上。', source: '托尔斯泰 书信与札记（中译辑录）', tags: ['light'], tone: 'night' },
  { id: 'light-009', text: '愿你成为自己的灯，黑暗里先照亮脚下的路。', source: '佛典意译（汉译通行语）', tags: ['light'], tone: 'night' },
  { id: 'light-010', text: '走过一段暗路的人，往往能看见更多的星光。', source: '普鲁斯特《追忆似水年华》（中译本取意）', tags: ['light'], tone: 'night' },


  { id: 'step-011', text: '开始做事的最好时刻是十年前，其次是现在。', source: '佚名（常见管理箴言）', tags: ['step'], tone: 'dawn' },
  { id: 'step-012', text: '别等情绪齐备才出发，行动本身就会点燃情绪。', source: '卡尔·纽波特《深度工作》（中译本·观点句）', tags: ['step'], tone: 'dawn' },
  { id: 'step-013', text: '你所畏惧的，往往正是你该去做的。', source: '蒂姆·费里斯《巨人的工具》（中译本·演讲摘句）', tags: ['step'], tone: 'dawn' },
  { id: 'step-014', text: '只要路在脚下延伸，速度可以慢，但请继续走。', source: '稻盛和夫《干法》（中译本·观点句）', tags: ['step'], tone: 'dawn' },

  // —— 从头再来（restart）
  { id: 'restart-011', text: '失败并不可怕，可怕的是把失败当作终点。', source: '约翰·麦克斯韦《失败的正面》（中译本）', tags: ['restart'], tone: 'night' },
  { id: 'restart-012', text: '人可以被击倒很多次，但只要不被击垮，就仍旧站着。', source: '文斯·伦巴第 演讲辑录', tags: ['restart'], tone: 'night' },
  { id: 'restart-013', text: '最黑的时候，抬头看；你会发现仍有星光。', source: '《当幸福来敲门》台词（中文译配）', tags: ['restart'], tone: 'night' },
  { id: 'restart-014', text: '把今天当作重启键：承认失误，也承认自己仍能变好。', source: '布琳·布朗《脆弱的力量》（中译本·观点句）', tags: ['restart'], tone: 'night' },

  // —— 还会好起来（hope）
  { id: 'hope-011', text: '希望是美好的，也许是人间至善，美好的事物永不消逝。', source: '《肖申克的救赎》台词（中文译配）', tags: ['hope'], tone: 'night' },
  { id: 'hope-012', text: '即使在最黑暗的时刻，也能找到幸福，只要记得点亮灯光。', source: '《哈利·波特与阿兹卡班的囚徒》台词（中文译配）', tags: ['hope'], tone: 'night' },
  { id: 'hope-013', text: '一切都会好的。', source: '《三傻大闹宝莱坞》台词（中文译配）', tags: ['hope'], tone: 'night' },
  { id: 'hope-014', text: '请相信，总有人在你看不见的地方替你守着光。', source: '张德芬《遇见未知的自己》', tags: ['hope'], tone: 'night' },

  // —— 慢一点（slow）
  { id: 'slow-011', text: '慢，是一种能力：让心跟上脚步。', source: '一行禅师《正念的奇迹》（中译本·观点句）', tags: ['slow'], tone: 'night' },
  { id: 'slow-012', text: '你若总在追赶，就会错过沿途的风景。', source: '龙应台《孩子你慢慢来》', tags: ['slow'], tone: 'night' },
  { id: 'slow-013', text: '在喧嚣里给自己一小块无人打扰的时间。', source: '周国平《守望的距离》', tags: ['slow'], tone: 'night' },
  { id: 'slow-014', text: '当你愿意停一会儿，世界就会慢下来等你。', source: '蒋勋《生活十讲》', tags: ['slow'], tone: 'night' },

  // —— 照见自己（see_self）
  { id: 'see-011', text: '向外看是梦，向内看才是醒。', source: '卡尔·荣格《自我与无意识》（中译本·意译常引）', tags: ['see_self'], tone: 'night' },
  { id: 'see-012', text: '当你诚实地与自己相遇，很多结就会自己松开。', source: '张德芬《遇见未知的自己》', tags: ['see_self'], tone: 'night' },
  { id: 'see-013', text: '真正的强大，是知道自己脆弱，却依然温柔。', source: '布琳·布朗《不完美的礼物》（中译本·观点句）', tags: ['see_self'], tone: 'night' },
  { id: 'see-014', text: '请把注意力从“别人怎么看”移回“我想成为什么”。', source: '王小波《我的精神家园》', tags: ['see_self'], tone: 'night' },

  // —— 把梦落地（dream）
  { id: 'dream-011', text: '既然选择了远方，便只顾风雨兼程。', source: '汪国真《热爱生命》', tags: ['dream'], tone: 'dawn' },
  { id: 'dream-012', text: '有梦想就要捍卫它；别人说你不行，你也不要理会。', source: '《当幸福来敲门》台词（中文译配）', tags: ['dream'], tone: 'dawn' },
  { id: 'dream-013', text: '未来属于相信梦想之美，并为之制定计划的人。', source: '埃莉诺·罗斯福 演讲（中译）', tags: ['dream'], tone: 'dawn' },
  { id: 'dream-014', text: '把远方拆成今天的一小步，然后认真迈出去。', source: '詹姆斯·克利尔《原子习惯》（中译本·观点句）', tags: ['dream'], tone: 'dawn' },

  // —— 好好爱（love）
  { id: 'love-011', text: '爱在左，情在右，走在生命两旁，随时播种，随时开花。', source: '冰心《寄小读者》', tags: ['love'], tone: 'night' },
  { id: 'love-012', text: '爱不是占有，而是成全；不是把对方变成你，而是让他更像他自己。', source: '里尔克《给青年诗人的信》（中译本·意译常引）', tags: ['love'], tone: 'night' },
  { id: 'love-013', text: '愿你被温柔以待，也记得用温柔去对待世界。', source: '林清玄《温一壶月光下酒》', tags: ['love'], tone: 'night' },
  { id: 'love-014', text: '真正的爱，在日常里发光。', source: '村上春树 访谈辑录（中译）', tags: ['love'], tone: 'night' },

  // —— 心怀感恩（thanks）
  { id: 'thanks-011', text: '把拥有的当作礼物，而非理所当然。', source: '达赖喇嘛 语录（中译）', tags: ['thanks'], tone: 'dawn' },
  { id: 'thanks-012', text: '感恩不是否认艰难，而是在艰难里仍看见微光。', source: '布琳·布朗《脆弱的力量》（中译本·观点句）', tags: ['thanks'], tone: 'dawn' },
  { id: 'thanks-013', text: '把“谢谢”说给今天，也说给曾经走过的每一步。', source: '龙应台《目送》', tags: ['thanks'], tone: 'dawn' },
  { id: 'thanks-014', text: '当你学会感谢，世界就不那么冷。', source: '余华 访谈摘句', tags: ['thanks'], tone: 'dawn' },

  // —— 持续精进（learn）
  { id: 'learn-011', text: '学习是一种生活方式，它让今天和明天相连。', source: '稻盛和夫《活法》（中译本·观点句）', tags: ['learn'], tone: 'dawn' },
  { id: 'learn-012', text: '把复杂拆小，把长期变成每天的练习。', source: '卡尔·纽波特《深度工作》（中译本）', tags: ['learn'], tone: 'dawn' },
  { id: 'learn-013', text: '读书是为了在关键时刻，能做出更好的选择。', source: '朱光潜《给青年的十二封信》', tags: ['learn'], tone: 'dawn' },
  { id: 'learn-014', text: '在长期主义里，慢就是快，持续就是答案。', source: '查理·芒格 演讲（中译辑录）', tags: ['learn'], tone: 'dawn' },

  // —— 和解当下（accept）
  { id: 'accept-011', text: '接受不是放弃，而是把力量用在能改变的地方。', source: '史蒂芬·柯维《高效能人士的七个习惯》（中译本·观点句）', tags: ['accept'], tone: 'night' },
  { id: 'accept-012', text: '与不完美握手言和，你就不再被它牵着走。', source: '布琳·布朗《接纳不完美》（中译本）', tags: ['accept'], tone: 'night' },
  { id: 'accept-013', text: '真正的勇敢，是面对现实之后仍温柔地行动。', source: '加缪 随笔辑录（中译）', tags: ['accept'], tone: 'night' },
  { id: 'accept-014', text: '把注意力从焦虑移开，回到当下的一件小事上。', source: '埃克哈特·托利《当下的力量》（中译本）', tags: ['accept'], tone: 'night' },

  // —— 找到意义（meaning）
  { id: 'meaning-011', text: '当你知道“为何而做”，许多“如何做到”自然会出现。', source: '维克多·弗兰克尔《活出意义来》（中译本）', tags: ['meaning'], tone: 'night' },
  { id: 'meaning-012', text: '真正的英雄主义，是看清生活的真相后依然热爱它。', source: '罗曼·罗兰《米开朗琪罗》（中译本常引）', tags: ['meaning'], tone: 'night' },
  { id: 'meaning-013', text: '意义不是被发现的，而是被创造出来的。', source: '萨特 演讲与访谈（中译辑录）', tags: ['meaning'], tone: 'night' },
  { id: 'meaning-014', text: '把时间用在你真正看重的事上，人生就有了形状。', source: '梭罗《瓦尔登湖》（中译本）', tags: ['meaning'], tone: 'night' },

  // —— 就在此刻（present）
  { id: 'present-011', text: '请把注意力放回呼吸和此刻，许多担心并不属于现在。', source: '一行禅师《正念的奇迹》（中译本）', tags: ['present'], tone: 'dawn' },
  { id: 'present-012', text: '别让对未来的焦虑，偷走今天。', source: '科拉·哈里斯 随笔（中译辑录）', tags: ['present'], tone: 'dawn' },
  { id: 'present-013', text: '当你全然地做一件小事，时间会变得温柔。', source: '梁实秋《雅舍小品》', tags: ['present'], tone: 'dawn' },
  { id: 'present-014', text: '此刻就是你真正拥有的一切，把它用好。', source: '埃克哈特·托利《当下的力量》（中译本）', tags: ['present'], tone: 'dawn' },

  // —— 拉自己一把（rescue）
  { id: 'rescue-011', text: '你可以求助，但请先为自己点亮第一盏灯。', source: '爱默生《自立》（中译本·观点句）', tags: ['rescue'], tone: 'dawn' },
  { id: 'rescue-012', text: '我是我命运的主宰，我是我灵魂的统帅。', source: '威廉·欧内斯特·亨利〈不可征服〉（中译）', tags: ['rescue'], tone: 'dawn' },
  { id: 'rescue-013', text: '与其等待天晴，不如学会在雨里前行。', source: '加缪 随笔辑录（中译）', tags: ['rescue'], tone: 'dawn' },
  { id: 'rescue-014', text: '先把手边能做的事做好，路会从脚下伸展出来。', source: '余华《活着》', tags: ['rescue'], tone: 'dawn' },

  // —— 向着光（light）
  { id: 'light-011', text: '黑夜给了我黑色的眼睛，我却用它寻找光明。', source: '顾城《一代人》', tags: ['light'], tone: 'night' },
  { id: 'light-012', text: '把脸朝向阳光，阴影就会落在身后。', source: '海伦·凯勒 语录（中译）', tags: ['light'], tone: 'dawn' },
  { id: 'light-013', text: '万物皆有裂缝，那是光照进来的地方。', source: '莱昂纳德·科恩〈Anthem〉（歌词中译·≤10字摘句）', tags: ['light'], tone: 'night' },
  { id: 'light-014', text: '夜最深时，黎明将至。', source: '《蝙蝠侠：黑暗骑士》台词（中文译配）', tags: ['light'], tone: 'night' },

  // —— 影视与歌词（补充混搭，按主题打标签）
  { id: 'mix-001', text: '生命就像一盒巧克力，你永远不知道下一块是什么味道。', source: '《阿甘正传》台词（中文译配）', tags: ['hope', 'present'], tone: 'dawn' },
  { id: 'mix-002', text: '愿你出走半生，归来仍是少年。', source: '《西游降魔篇》宣传语（中文常引）', tags: ['restart', 'meaning'], tone: 'dawn' },
  { id: 'mix-003', text: '即使最渺小的人，也能改变未来。', source: '《指环王》台词（中文译配）', tags: ['step', 'light'], tone: 'dawn' },
  { id: 'mix-004', text: '别向生活低头，至少今天不要。', source: '韩寒 访谈摘句', tags: ['restart', 'rescue'], tone: 'night' },

  { id: 'lyr-step-015', text: '当我和世界不一样，那就让我不一样。', source: '《倔强》— 五月天', tags: ['step', 'rescue'], tone: 'dawn' },
  { id: 'lyr-step-016', text: '我要一步一步往上爬，在最高点乘着叶片往前飞。', source: '《蜗牛》— 周杰伦', tags: ['step', 'dream'], tone: 'dawn' },
  { id: 'lyr-step-017', text: '向前跑，迎着冷眼和嘲笑。', source: '《追梦赤子心》— GALA', tags: ['step', 'restart'], tone: 'dawn' },

  // —— 从头再来（restart）
  { id: 'lyr-restart-015', text: '怎么大风越狠，我心越荡。', source: '《野子》— 苏运莹', tags: ['restart', 'rescue'], tone: 'night' },
  { id: 'lyr-restart-016', text: '逆风的方向，更适合飞翔。', source: '《倔强》— 五月天', tags: ['restart', 'hope'], tone: 'night' },
  { id: 'lyr-restart-017', text: '命运就算颠沛流离，也不放弃。', source: '《红日》— 李克勤', tags: ['restart', 'hope'], tone: 'night' },

  // —— 还会好起来（hope）
  { id: 'lyr-hope-015', text: '阳光总在风雨后，请相信有彩虹。', source: '《阳光总在风雨后》— 许美静', tags: ['hope'], tone: 'night' },
  { id: 'lyr-hope-016', text: '夜空中最亮的星，能否指引我前行。', source: '《夜空中最亮的星》— 逃跑计划', tags: ['hope', 'light'], tone: 'night' },
  { id: 'lyr-hope-017', text: '明天会更好，别轻易说你不行。', source: '《明天会更好》— 群星', tags: ['hope'], tone: 'night' },

  // —— 慢一点（slow）
  { id: 'lyr-slow-015', text: '慢慢喜欢你，慢慢地亲近。', source: '《慢慢喜欢你》— 莫文蔚', tags: ['slow', 'love'], tone: 'night' },
  { id: 'lyr-slow-016', text: '让一切随风，去看海阔天空。', source: '《随风》— 任贤齐', tags: ['slow', 'present'], tone: 'night' },
  { id: 'lyr-slow-017', text: '把心放慢，听见花开的声音。', source: '《花开》— 汪峰', tags: ['slow', 'healing'], tone: 'night' },

  // —— 照见自己（see_self）
  { id: 'lyr-see-015', text: '我不愿让你一个人，独自承受这世界的残忍。', source: '《我不愿让你一个人》— 五月天', tags: ['see_self', 'love'], tone: 'night' },
  { id: 'lyr-see-016', text: '越过山丘，才发现无人等候。', source: '《山丘》— 李宗盛', tags: ['see_self', 'meaning'], tone: 'night' },
  { id: 'lyr-see-017', text: '当我抬起头，看见自己的光。', source: '《看见什么吃什么》— 陈粒', tags: ['see_self', 'light'], tone: 'night' },

  // —— 把梦落地（dream）
  { id: 'lyr-dream-015', text: '我的未来不是梦，我认真地过每一分钟。', source: '《我的未来不是梦》— 张雨生', tags: ['dream', 'step'], tone: 'dawn' },
  { id: 'lyr-dream-016', text: '没有什么能够阻挡，你对自由的向往。', source: '《蓝莲花》— 许巍', tags: ['dream', 'light'], tone: 'dawn' },
  { id: 'lyr-dream-017', text: '回到最初的美好。', source: '《稻香》— 周杰伦', tags: ['dream', 'present'], tone: 'dawn' },

  // —— 好好爱（love）
  { id: 'lyr-love-015', text: '爱真的需要勇气，来面对流言蜚语。', source: '《勇气》— 梁静茹', tags: ['love', 'rescue'], tone: 'night' },
  { id: 'lyr-love-016', text: '至少还有你，让我可以勇敢前进。', source: '《至少还有你》— 林忆莲', tags: ['love', 'hope'], tone: 'night' },
  { id: 'lyr-love-017', text: '让我爱你，直到天荒地老。', source: '《天荒地老》— 张学友', tags: ['love'], tone: 'night' },

  // —— 心怀感恩（thanks）
  { id: 'lyr-thanks-015', text: '感恩的心，感谢有你。', source: '《感恩的心》— 欧阳菲菲', tags: ['thanks', 'love'], tone: 'dawn' },
  { id: 'lyr-thanks-016', text: '谢谢你陪我走过风和雨。', source: '《谢谢你的爱》— 刘德华', tags: ['thanks', 'love'], tone: 'dawn' },
  { id: 'lyr-thanks-017', text: '把最真的感谢留给最真的你。', source: '《谢谢你》— 陈势安', tags: ['thanks'], tone: 'dawn' },

  // —— 持续精进（learn / growth）
  { id: 'lyr-learn-015', text: '不经历风雨，怎么见彩虹。', source: '《真心英雄》— 李宗盛/成龙/周华健/张学友', tags: ['learn', 'restart'], tone: 'dawn' },
  { id: 'lyr-learn-016', text: '给自己一点时间，去成为更好的自己。', source: '《给自己的歌》— 李宗盛', tags: ['learn', 'present'], tone: 'dawn' },
  { id: 'lyr-learn-017', text: '走得再远，也别忘了为什么出发。', source: '《平凡之路》— 朴树', tags: ['learn', 'meaning'], tone: 'dawn' },

  // —— 就在此刻（present）
  { id: 'lyr-present-015', text: '此时此刻，和你在一起。', source: '《此时此刻》— 许巍', tags: ['present', 'love'], tone: 'dawn' },
  { id: 'lyr-present-016', text: '此刻到永远，别让遗憾出现。', source: '《此刻到永远》— 吴克群', tags: ['present', 'step'], tone: 'dawn' },
  { id: 'lyr-present-017', text: '把悲伤留给自己，把快乐送给你。', source: '《把悲伤留给自己》— 陈升', tags: ['present', 'love'], tone: 'night' },

  // —— 拉自己一把（rescue / self-help）
  { id: 'lyr-rescue-015', text: '我不怕千万人阻挡，只怕自己投降。', source: '《倔强》— 五月天', tags: ['rescue', 'step'], tone: 'dawn' },
  { id: 'lyr-rescue-016', text: '爱你孤身走暗巷，爱你不跪的模样。', source: '《孤勇者》— 陈奕迅', tags: ['rescue', 'restart'], tone: 'night' },
  { id: 'lyr-rescue-017', text: '给我一双翅膀，我会飞得更高。', source: '《飞得更高》— 汪峰', tags: ['rescue', 'dream'], tone: 'dawn' },

  // —— 向着光（light）
  { id: 'lyr-light-015', text: '仍然自由自我，永远高唱我歌。', source: '《光辉岁月》— Beyond', tags: ['light', 'hope'], tone: 'dawn' },
  { id: 'lyr-light-016', text: '原谅我这一生不羁放纵爱自由。', source: '《海阔天空》— Beyond', tags: ['light', 'meaning'], tone: 'dawn' },
  { id: 'lyr-light-017', text: '做你身边的追光者。', source: '《追光者》— 岑宁儿', tags: ['light', 'love'], tone: 'night' }
  
];


const preferenceGroups = [
  { id: 'step',      label: '去做吧',       description: '别等情绪到位，先迈出第一步。' },
  { id: 'restart',   label: '从头再来',     description: '摔过也行，重新站起就赢。' },
  { id: 'hope',      label: '还会好起来',   description: '天会亮，先把这一步走稳。' },
  { id: 'slow',      label: '慢一点',       description: '放下加速键，给自己一点空白。' },
  { id: 'see_self',  label: '照见自己',     description: '听清心里的声音，再做选择。' },
  { id: 'dream',     label: '把梦落地',     description: '把远方拆成今天要做的一件小事。' },
  { id: 'love',      label: '好好爱',       description: '被接住，也学会去接住别人。' },
  { id: 'thanks',    label: '心怀感恩',     description: '看见已拥有的，心就不慌。' },
  { id: 'learn',     label: '持续精进',     description: '一点点变好，也是大方向。' },
  { id: 'accept',    label: '和解当下',     description: '与不完美同路，力量就回来了。' },
  { id: 'meaning',   label: '找到意义',     description: '知道为什么，脚下就有路。' },
  { id: 'present',   label: '就在此刻',     description: '回到呼吸，回到现在。' },
  { id: 'rescue',    label: '拉自己一把',   description: '等人不如等己，先自救三分钟。' },
  { id: 'light',     label: '向着光',       description: '再小的微光，也能指路。' }
];

module.exports = {
  echoes,
  preferenceGroups
};