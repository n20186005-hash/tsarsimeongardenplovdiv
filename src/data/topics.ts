// ============================================================
// 专题页内容注册表（40 个主题）
// 站点：tsarsimeongardenplovdiv.com
// 每个 slug 是 locale 之后的路径（如 'singing-fountains'、'food/restaurants-nearby'）。
// 只有包含对应语种内容的主题才会被 generateStaticParams 产出页面；
// 其余主题为占位（无内容），访问时返回 404，待后续批次补充。
// ============================================================

export type TopicSection = { heading: string; body: string };
export type TopicFaq = { question: string; answer: string };

export type TopicContent = {
  title: string;
  description: string;
  intro: string;
  sections: TopicSection[];
  faq: TopicFaq[];
  updated?: string;
};

export type TopicGroup = 'park' | 'food' | 'nearby' | 'routes' | 'history';

export type TopicDef = {
  slug: string;
  group: TopicGroup;
  priority: 1 | 2 | 3;
  bg?: TopicContent;
  en?: TopicContent;
  zh?: TopicContent;
};

const UPDATED = '2026-10-23';

export const TOPICS: TopicDef[] = [
  // ---------- 第一组：公园实用页 ----------
  {
    slug: 'singing-fountains',
    group: 'park',
    priority: 1,
    bg: {
      title: 'Пеещите фонтани в Пловдив: програма и работно време',
      description:
        'Пеещите фонтани в Цар Симеонова градина: къде са, кога работят, колко струват и откъде се гледат най-добре. Актуална информация и връзка към официалната програма.',
      intro:
        '„Пеещите фонтани“ са едно от най-емблематичните лятни преживявания в Пловдив – музикално-светлинно водно шоу в централния водоем на Цар Симеонова градина. Тази страница събира всичко, което трябва да знаете, преди да отидете.',
      sections: [
        {
          heading: 'Къде се намират',
          body: 'Фонтаните са в централния (долен) водоем на Цар Симеонова градина, на няколко минути пеша от Централния площад. Най-добрата гледка е от широката алея и брега на водоема, както и от съседните пейки.',
        },
        {
          heading: 'Кога работят (програма)',
          body: 'Представленията са сезонни и обикновено се провеждат през лятото (често от юни до края на септември). Точните дни и часове на шоуто се определят всяка година от Община Пловдив. Към момента на писане не успяхме да потвърдим програмата за текущата година – проверете официалния сайт на Община Пловдив / Посетете Пловдив.',
        },
        {
          heading: 'Цена и достъп',
          body: 'Според публикуваната досега информация шоуто е безплатно за посетителите. Самата градина е отворена 24/7 и без вход. Препоръчваме да пристигнете малко преди залез слънце в горещите летни вечери, когато шоуто е най-атрактивно.',
        },
      ],
      faq: [
        {
          question: 'Пеещите фонтани безплатни ли са?',
          answer:
            'Да, според наличната информация шоуто е безплатно. Градината като цяло е обществено пространство с безплатен достъп.',
        },
        {
          question: 'Къде мога да проверя актуалната програма?',
          answer:
            'Търсете официалните обяви на Община Пловдив и на туристическия портал Посетете Пlovдив. Тази страница се актуализира, когато бъде публикувана потвърдена програма.',
        },
        {
          question: 'Кога е най-добре да ги гледам?',
          answer:
            'След залез слънце в летните вечери, когато светлините и водните струи се виждат най-добре. Пристигнете по-рано, за да намерите място край водоема.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Singing Fountains Plovdiv: Schedule & Visiting Guide',
      description:
        'The Singing Fountains in Tsar Simeon Garden Plovdiv: where they are, when they run, whether they are free, and the best place to watch. With a link to the official programme.',
      intro:
        'The "Singing Fountains" are one of Plovdiv\'s most iconic summer experiences – a musical light-and-water show on the central pond of Tsar Simeon Garden. This page gathers everything you should know before you go.',
      sections: [
        {
          heading: 'Where they are',
          body: 'The fountains are in the central (lower) pond of Tsar Simeon Garden, a few minutes\' walk from the Central Square. The best view is from the broad central alley and the pond edge, as well as from the nearby benches.',
        },
        {
          heading: 'When they run (schedule)',
          body: 'The shows are seasonal and usually take place in summer (commonly June to the end of September). The exact performance days and start times are set each year by Plovdiv Municipality. At the time of writing we could not confirm the current-year schedule – please check the official Plovdiv Municipality / Visit Plovdiv website before you go.',
        },
        {
          heading: 'Price & access',
          body: 'Based on information published so far, the show is free of charge. The park itself is open 24/7 with no entrance fee. We recommend arriving a little before sunset on warm summer evenings, when the show is at its most impressive.',
        },
      ],
      faq: [
        {
          question: 'Are the Singing Fountains free?',
          answer:
            'Yes, according to available information the show is free. The garden as a whole is a public space with free access.',
        },
        {
          question: 'Where can I check the current schedule?',
          answer:
            'Look for the official announcements of Plovdiv Municipality and the Visit Plovdiv tourism portal. This page is updated as soon as a verified schedule is published.',
        },
        {
          question: 'When is the best time to watch?',
          answer:
            'After sunset on summer evenings, when the lights and water jets are most visible. Arrive early to find a spot by the pond.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '普罗夫迪夫歌唱喷泉：演出时间与游览指南',
      description:
        '沙皇西美昂花园的歌唱喷泉：位置、开放时间、是否免费，以及最佳观赏地点，并附官方节目单链接。',
      intro:
        '“歌唱喷泉”是普罗夫迪夫最具代表性的夏日体验之一——沙皇西美昂花园中央水池上的音乐灯光水秀。本页汇总出发前你需要了解的一切。',
      sections: [
        {
          heading: '位置',
          body: '喷泉位于沙皇西美昂花园中央（下方）水池，距中央广场步行仅几分钟。最佳观赏点是从宽阔的中央大道和水池边，以及附近的坐椅。',
        },
        {
          heading: '演出时间（节目表）',
          body: '演出为季节性，通常在夏季举办（一般为六月到九月底）。具体的演出日期和开始时间每年由普罗夫迪夫市政府确定。截至本文撰写时，我们未能确认本年度的节目安排——出发前请查询普罗夫迪夫市政府及 Visit Plovdiv 官方网站的公告。',
        },
        {
          heading: '票价与进入',
          body: '根据迄今公布的资料，演出为免费。花园本身全年 24 小时开放、免门票。我们建议在炎热夏日的日落前稍早到达，那时水秀最为精彩。',
        },
      ],
      faq: [
        {
          question: '歌唱喷泉免费吗？',
          answer:
            '是的，根据现有资料演出免费。花园整体为公共空间，可免费进入。',
        },
        {
          question: '在哪里查看最新节目表？',
          answer:
            '请关注普罗夫迪夫市政府及 Visit Plovdiv 旅游门户的官方公告。一旦有经过核实的节目安排公布，本页会及时更新。',
        },
        {
          question: '什么时候观看最佳？',
          answer:
            '夏日傍晚日落后，灯光与水流最为清晰可见。请提前到达，以便在水池边找到位置。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'park-map',
    group: 'park',
    priority: 1,
    bg: {
      title: 'Карта и входове на Цар Симеонова градина',
      description:
        'Карта на Цар Симеонова градина в Пловдив: основни входове, ключови забележителности вътре и връзка към Google Maps за навигация.',
      intro:
        'Цар Симеонова градина е правоъгълен градски парк в сърцето на Пловдив. Тази страница помага да се ориентирате – къде влизате, какво има вътре и как да стигнете до ключовите точки.',
      sections: [
        {
          heading: 'Основни входове',
          body: 'Паркът е заобиколен от бул. „6-ти септември“, ул. „Княз Александър I“, ул. „Велико Търново“ и района около Регионалния етнографски музей / хотел Тримонциум. Най-използвани са входовете откъм Централния площад (на север), от ул. „Велико Търново“ (на изток) и откъм пешеходната улица.',
        },
        {
          heading: 'Какво има вътре',
          body: 'Вътрешните акценти включват централния водоем с Пеещите фонтани, фонтана „Деметра“, цветните алеи, детската площадка и откритото пространство за концерти. Алеите са широки и удобни за разходка.',
        },
        {
          heading: 'Координати и навигация',
          body: 'Приблизителни координати: 42.1416, 24.7468 (Plus Code 4PRW+JP). За точна навигация използвайте връзката към Google Maps по-долу или търсете „Цар Симеонова градина, Пловдив“.',
        },
      ],
      faq: [
        {
          question: 'Откъде е най-лесно да вляза?',
          answer:
            'Откъм Централния площад и пешеходната улица – и двата входа са равни, без стъпала, и са най-близо до градския център.',
        },
        {
          question: 'Има ли входна такса?',
          answer: 'Не, паркът е обществен и безплатен, отворен 24 часа.',
        },
        {
          question: 'Къде са Пеещите фонтани вътре в парка?',
          answer: 'В централния (долен) водоем, на няколко минути пеша от входа при Централния площад.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Tsar Simeon Garden Map & Entrances',
      description:
        'A map of Tsar Simeon Garden in Plovdiv: main entrances, key sights inside, and a Google Maps link for navigation.',
      intro:
        'Tsar Simeon Garden is a rectangular city park in the heart of Plovdiv. This page helps you orient yourself – where to enter, what is inside, and how to reach the key spots.',
      sections: [
        {
          heading: 'Main entrances',
          body: 'The park is bordered by blvd. "6-ti septemvri", ul. "Knyaz Alexander I", ul. "Veliko Tarnovo" and the area around the Regional Ethnographic Museum / Trimontium Hotel. The most used entrances are from the Central Square (north), from ul. "Veliko Tarnovo" (east) and from the pedestrian street.',
        },
        {
          heading: 'What is inside',
          body: 'Highlights inside include the central pond with the Singing Fountains, the Demeter fountain, the flower alleys, the children\'s playground and the open-air event space. The alleys are wide and pleasant for walking.',
        },
        {
          heading: 'Coordinates & navigation',
          body: 'Approximate coordinates: 42.1416, 24.7468 (Plus Code 4PRW+JP). For precise navigation use the Google Maps link below, or search "Tsar Simeon Garden, Plovdiv".',
        },
      ],
      faq: [
        {
          question: 'Where is the easiest place to enter?',
          answer:
            'From the Central Square and the pedestrian street – both entrances are flat, step-free, and closest to the city centre.',
        },
        {
          question: 'Is there an entrance fee?',
          answer: 'No, the park is public and free, open 24 hours.',
        },
        {
          question: 'Where are the Singing Fountains inside the park?',
          answer: 'At the central (lower) pond, a few minutes\' walk from the Central Square entrance.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '沙皇西美昂花园地图与入口',
      description:
        '普罗夫迪夫沙皇西美昂花园地图：主要入口、园内主要景点，以及用于导航的 Google 地图链接。',
      intro:
        '沙皇西美昂花园是普罗夫迪夫市中心一座长方形的城市公园。本页帮你辨别方位——从哪里进入、园内有什么、如何到达关键地点。',
      sections: [
        {
          heading: '主要入口',
          body: '公园由“9月6日”大道、“亚历山大一世亲王”街、“大特尔诺沃”街以及周边（地区民族志博物馆 / Trimontium 酒店一带）环绕。最常用的入口在中央广场一侧（北）、大特尔诺沃街一侧（东），以及步行街一侧。',
        },
        {
          heading: '园内有什么',
          body: '园内亮点包括带歌唱喷泉的中央水池、得墨忒耳喷泉、花径、儿童游乐场以及露天活动空间。大道宽阔，适合散步。',
        },
        {
          heading: '坐标与导航',
          body: '大致坐标：42.1416, 24.7468（Plus Code 4PRW+JP）。精确导航请使用下方 Google 地图链接，或搜索“沙皇西美昂花园，普罗夫迪夫”。',
        },
      ],
      faq: [
        {
          question: '从哪里进入最方便？',
          answer: '从中央广场和步行街——这两个入口都平坦、无台阶，且离市中心最近。',
        },
        {
          question: '需要门票吗？',
          answer: '不需要，公园为公共空间，免费开放，24 小时可达。',
        },
        {
          question: '歌唱喷泉在园内什么位置？',
          answer: '在中央（下方）水池，从中央广场入口步行几分钟即到。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'getting-here',
    group: 'park',
    priority: 1,
    bg: {
      title: 'Как да стигнете до Цар Симеонова градина',
      description:
        'Как да стигнете до Цар Симеонова градина в Пловдив: пеша от центъра, с автобус от ЖП гарата и автогарата, от летището и с градски транспорт.',
      intro:
        'Паркът е в центъра на Пловдив, което го прави лесно достъпен пеша от повечето централни дестинации. Ето най-честите начини да стигнете.',
      sections: [
        {
          heading: 'Пеша от центъра',
          body: 'От Централния площад и пешеходната улица „Княз Александър I“ до парка се стига за 5–10 минути пеша. От Римския стадион и Стария град – за около 10–15 минути.',
        },
        {
          heading: 'От ЖП гарата и автогарата',
          body: 'Централна жп гара Пловдив и Автогара Юг са на 15–20 минути пеша или кратко пътуване с автобус (напр. линии 7, 20, 26) до центъра.',
        },
        {
          heading: 'От летището и София',
          body: 'Летище Пловдив е на около 15 км; такси е най-удобният вариант. От София до Пловдив се стига за около 2 часа с автобус или влак, след което се продължава пеша или с градски транспорт.',
        },
      ],
      faq: [
        {
          question: 'Има ли метро или трамвай?',
          answer:
            'Пловдив няма метро или трамвай. Градският транспорт е автобусен; спирки има близо до Централна поща и хотел Тримонциум.',
        },
        {
          question: 'Паркът далеч ли е от Стария град?',
          answer:
            'Не – пеша от Стария град до парка се стига за около 10–15 минути по равен терен.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'How to Get to Tsar Simeon Garden',
      description:
        'How to reach Tsar Simeon Garden in Plovdiv: on foot from the centre, by bus from the train and bus stations, from the airport, and by public transport.',
      intro:
        'The park is in the centre of Plovdiv, which makes it easy to reach on foot from most central destinations. Here are the most common ways to get there.',
      sections: [
        {
          heading: 'Walking from the centre',
          body: 'From the Central Square and the Knyaz Alexander I pedestrian street, the park is a 5–10 minute walk. From the Roman Stadium and the Old Town it is about 10–15 minutes.',
        },
        {
          heading: 'From the train & bus stations',
          body: 'Plovdiv Central Railway Station and Bus Station South are a 15–20 minute walk or a short bus ride (e.g. lines 7, 20, 26) to the centre.',
        },
        {
          heading: 'From the airport & Sofia',
          body: 'Plovdiv Airport is about 15 km away; taxi is the most convenient option. From Sofia to Plovdiv takes about 2 hours by bus or train, then continue on foot or by city transport.',
        },
      ],
      faq: [
        {
          question: 'Is there a metro or tram?',
          answer:
            'Plovdiv has no metro or tram. Public transport is by bus; stops are near the Central Post Office and the Trimontium Hotel.',
        },
        {
          question: 'Is the park far from the Old Town?',
          answer:
            'No – from the Old Town to the park is about a 10–15 minute walk on flat terrain.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '如何到达沙皇西美昂花园',
      description:
        '如何抵达普罗夫迪夫沙皇西美昂花园：从市中心步行、从火车站与汽车站乘公交、从机场，以及公共交通。',
      intro:
        '公园位于普罗夫迪夫市中心，从大多数中心目的地步行即可轻松到达。以下是最常见的到达方式。',
      sections: [
        {
          heading: '从市中心步行',
          body: '从中央广场和“亚历山大一世亲王”步行街到公园步行约 5–10 分钟。从罗马体育场和老城约 10–15 分钟。',
        },
        {
          heading: '从火车站与汽车站',
          body: '普罗夫迪夫中央火车站和南汽车站步行约 15–20 分钟，或乘短途公交（如 7、20、26 路）到市中心。',
        },
        {
          heading: '从机场与索菲亚',
          body: '普罗夫迪夫机场约 15 公里，打车最方便。从索菲亚到普罗夫迪夫乘大巴或火车约 2 小时，之后步行或换乘城市交通。',
        },
      ],
      faq: [
        {
          question: '有地铁或电车吗？',
          answer:
            '普罗夫迪夫没有地铁或电车。公共交通为公交车；中央邮局和 Trimontium 酒店附近有站点。',
        },
        {
          question: '公园离老城远吗？',
          answer: '不远——从老城到公园在平地上步行约 10–15 分钟。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'parking',
    group: 'park',
    priority: 1,
    bg: {
      title: 'Паркиране около Цар Симеонова градина',
      description:
        'Къде да паркирате близо до Цар Симеонова градина: платената синя зона в центъра, обществени паркинги и съвети за придвижване.',
      intro:
        'Центърът на Пловдив е предимно платена зона за паркиране. Тази страница обобщава опциите и важните условия, за да планирате пристигането си с кола.',
      sections: [
        {
          heading: 'Синя зона (платено паркиране)',
          body: 'Голяма част от централната зона е „синя зона“ с платено паркиране (обикновено делнични дни, дневни часове). Конкретните часове и цени се променят – проверете табелите на място или официалната информация на Община Пловдив.',
        },
        {
          heading: 'Обществени паркинги',
          body: 'Обществени и подземни паркинги има близо до Централния площад и хотел Тримонциум. Точните места и цени не сме проверили самостоятелно – ориентирайте се по табелите или картите на място.',
        },
        {
          heading: 'Съвети',
          body: 'Ако е възможно, използвайте градски транспорт или пристигнете пеша от центъра – така избягвате търсенето на място и таксите. Този сайт не управлява нито препоръчва конкретен паркинг.',
        },
      ],
      faq: [
        {
          question: 'Безплатно ли е паркирането в центъра?',
          answer:
            'Повечето централни улици са платена синя зона. Безплатно паркиране в непосредствена близост е ограничено – проверете табелите.',
        },
        {
          question: 'Къде е най-близкият паркинг до парка?',
          answer:
            'Най-близо са обществените паркинги около Централния площад и хотел Тримонциум; точното разположение проверете в картите.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Parking near Tsar Simeon Garden',
      description:
        'Where to park near Tsar Simeon Garden: the paid Blue Zone in the centre, public car parks, and tips for getting around.',
      intro:
        'The centre of Plovdiv is mostly a paid parking zone. This page summarises the options and the key conditions so you can plan your arrival by car.',
      sections: [
        {
          heading: 'Blue Zone (paid parking)',
          body: 'Much of the central zone is a paid "Blue Zone" (usually on weekdays, daytime hours). The exact hours and prices change – check the signs on site or the official information from Plovdiv Municipality.',
        },
        {
          heading: 'Public car parks',
          body: 'Public and underground car parks are near the Central Square and the Trimontium Hotel. We have not independently verified the exact locations and prices – follow the signs or maps on site.',
        },
        {
          heading: 'Tips',
          body: 'If possible, use public transport or walk in from the centre – this avoids hunting for a spot and paying fees. This site does not operate or recommend any specific car park.',
        },
      ],
      faq: [
        {
          question: 'Is parking in the centre free?',
          answer:
            'Most central streets are paid Blue Zone. Free parking right next to the park is limited – check the signs.',
        },
        {
          question: 'Where is the closest car park to the park?',
          answer:
            'The nearest are the public car parks around the Central Square and the Trimontium Hotel; check maps for the exact layout.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '沙皇西美昂花园周边停车',
      description:
        '花园附近在哪里停车：市中心的付费“蓝区”、公共停车场，以及出行建议。',
      intro:
        '普罗夫迪夫市中心大多是付费停车区。本页汇总选项与关键条件，方便你规划自驾到达。',
      sections: [
        {
          heading: '蓝区（付费停车）',
          body: '市中心大部分地区为付费“蓝区”（通常为工作日白天时段）。具体时段和价格会变动——请查看现场标牌或普罗夫迪夫市政府的官方信息。',
        },
        {
          heading: '公共停车场',
          body: '中央广场和 Trimontium 酒店附近有公共及地下停车场。我们未独立核实具体位置与价格——请按现场标牌或地图指引。',
        },
        {
          heading: '建议',
          body: '如有可能，尽量使用公共交通或从市中心步行到达——这样可避免找车位及缴费。本站不运营也不推荐任何特定停车场。',
        },
      ],
      faq: [
        {
          question: '市中心停车免费吗？',
          answer: '大多数中心街道属于付费蓝区。公园紧邻的免费停车位有限——请查看标牌。',
        },
        {
          question: '离公园最近的停车场在哪里？',
          answer: '最近的是中央广场和 Trimontium 酒店周边的公共停车场；具体布局请查看地图。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'playgrounds',
    group: 'park',
    priority: 1,
    bg: {
      title: 'Детска площадка и семейни разходки в парка',
      description:
        'Детската площадка в Цар Симеонова градина, равните алеи за колички и съвети за семейна разходка с деца.',
      intro:
        'Цар Симеонова градина е едно от най-подходящите места в центъра на Пловдив за разходка със семейството. Ето как да планирате посещението с деца.',
      sections: [
        {
          heading: 'Детска площадка',
          body: 'В парка има детска площадка с люлки и пързалки. Конкретното оборудване и състоянието му не сме проверили самостоятелно – преценете на място дали е подходящо за възрастта на детето.',
        },
        {
          heading: 'Удобство за колички',
          body: 'Централните алеи са асфалтирани и равни, което ги прави удобни за детски колички и за ниско темпо с малки деца. Има достатъчно пейки за почивка.',
        },
        {
          heading: 'Съвети за семейства',
          body: 'Носете вода и лека закуска, планирайте разходката кратка и игрива и използвайте сянката през топлите часове. Близостта до центъра улеснява завръщането при нужда.',
        },
      ],
      faq: [
        {
          question: 'Подходящ ли е паркът за бебета в количка?',
          answer:
            'Да, централните алеи са равни и асфалтирани. Някои странични пътеки имат бордюри, затова предпочитайте главните алеи.',
        },
        {
          question: 'Има ли тоалетни?',
          answer:
            'В парка има обществени тоалетни, но не сме проверили самостоятелно работното им време и достъпност – имайте предвид резервен вариант в центъра.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Playground & Family Walks in the Park',
      description:
        'The children\'s playground in Tsar Simeon Garden, stroller-friendly alleys, and tips for a family visit with kids.',
      intro:
        'Tsar Simeon Garden is one of the most suitable places in central Plovdiv for a family walk. Here is how to plan a visit with children.',
      sections: [
        {
          heading: 'Children\'s playground',
          body: 'The park has a children\'s playground with swings and slides. We have not independently verified the exact equipment and its condition – judge on site whether it suits your child\'s age.',
        },
        {
          heading: 'Stroller-friendly',
          body: 'The central alleys are paved and flat, convenient for strollers and for a low pace with small children. There are plenty of benches for resting.',
        },
        {
          heading: 'Tips for families',
          body: 'Bring water and a light snack, keep the walk short and playful, and use the shade during the hot hours. The park\'s proximity to the centre makes it easy to head back if needed.',
        },
      ],
      faq: [
        {
          question: 'Is the park suitable for a baby in a stroller?',
          answer:
            'Yes, the central alleys are flat and paved. Some side paths have curbs, so prefer the main alleys.',
        },
        {
          question: 'Are there toilets?',
          answer:
            'There are public toilets in the park, but we have not independently verified their opening hours and accessibility – keep a backup option in the centre in mind.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '公园儿童游乐场与家庭散步',
      description:
        '沙皇西美昂花园的儿童游乐场、适合婴儿车的平坦大道，以及带孩子出游的建议。',
      intro:
        '沙皇西美昂花园是普罗夫迪夫市中心最适合家庭散步的地点之一。以下说明如何规划带孩子的行程。',
      sections: [
        {
          heading: '儿童游乐场',
          body: '园内有带秋千和滑梯的儿童游乐场。我们未独立核实具体设施及其状况——请现场判断是否适合孩子的年龄。',
        },
        {
          heading: '婴儿车友好',
          body: '中央大道为沥青铺设、平坦，方便婴儿车以及带小孩慢行。园内坐椅充足，便于休息。',
        },
        {
          heading: '家庭建议',
          body: '请带好饮水与轻便零食，把散步安排得短暂而有趣，并在炎热时段利用树荫。公园临近市中心，需要时方便返回。',
        },
      ],
      faq: [
        {
          question: '公园适合婴儿车中的婴儿吗？',
          answer: '适合，中央大道平坦且为沥青铺设。部分支路有路缘石，因此建议走主大道。',
        },
        {
          question: '有卫生间吗？',
          answer: '园内有公共卫生间，但我们未独立核实其开放时间与无障碍情况——建议在市中心备一个备选方案。',
        },
      ],
      updated: UPDATED,
    },
  },
  // ---------- 第二组：餐饮 ----------
  {
    slug: 'food/restaurants-nearby',
    group: 'food',
    priority: 1,
    bg: {
      title: 'Ресторанти близо до Цар Симеонова градина',
      description:
        'Къде да хапнете около Цар Симеонова градина: как да изберете по сценарий, райони с заведения и примерни заведения.',
      intro:
        'Около парка, по пешеходната улица „Княз Александър I“ и в квартал Капана има много кафенета, бирарии, ресторанти и заведения за бързо хранене. Тази страница помага да изберете според случая – без да препоръчваме конкретен търговец.',
      sections: [
        {
          heading: 'По сценарий',
          body: 'За бърза закуска или кафе изберете заведенията по пешеходната улица; за пълноценна вечеря – ресторантите в Капана или около парка; за традиционна българска кухня – потърсете „механа“ (таverna).',
        },
        {
          heading: 'Къде са клъстерите',
          body: 'Пешеходната улица „Княз Александър I“ и творческият квартал Капана са на 5–10 минути пеша от парка и предлагат най-голям избор. По-долу има отделни страници с конкретни заведения (напр. Hemingway, Smokini, Central Park).',
        },
        {
          heading: 'Важно за цени и часове',
          body: 'Цените, менютата и работното време се променят. Този сайт не е свързан с нито едно заведение – проверете актуалната информация на място или в официалните профили на заведенията преди посещение.',
        },
      ],
      faq: [
        {
          question: 'Къде има най-много заведения близо до парка?',
          answer:
            'Пешеходната улица „Княз Александър I“ и квартал Капана – и двата са на няколко минути пеша и предлагат голям избор.',
        },
        {
          question: 'Има ли традиционна българска кухня наблизо?',
          answer:
            'Да, в центъра има „механи“ (таверни) с традиционни ястия; потърсете ги по пешеходната улица или в Капана.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Restaurants near Tsar Simeon Garden',
      description:
        'Where to eat around Tsar Simeon Garden: how to choose by scenario, dining districts, and example venues.',
      intro:
        'Around the park, along the Knyaz Alexander I pedestrian street and in the Kapana creative district there are many cafés, pubs, restaurants and fast-food places. This page helps you choose by situation – without recommending any specific business.',
      sections: [
        {
          heading: 'By scenario',
          body: 'For a quick breakfast or coffee, choose venues on the pedestrian street; for a full dinner, the restaurants in Kapana or around the park; for traditional Bulgarian food, look for a "mehana" (tavern).',
        },
        {
          heading: 'Where the clusters are',
          body: 'The Knyaz Alexander I pedestrian street and the Kapana creative district are 5–10 minutes\' walk from the park and offer the widest choice. Separate pages cover specific venues (e.g. Hemingway, Smokini, Central Park).',
        },
        {
          heading: 'Important on prices & hours',
          body: 'Prices, menus and opening hours change. This site is not affiliated with any venue – verify the current information on site or on the venues\' official profiles before visiting.',
        },
      ],
      faq: [
        {
          question: 'Where are the most restaurants near the park?',
          answer:
            'The Knyaz Alexander I pedestrian street and the Kapana district – both a few minutes\' walk away with a large selection.',
        },
        {
          question: 'Is there traditional Bulgarian food nearby?',
          answer:
            'Yes, the centre has "mehana" (taverns) with traditional dishes; look along the pedestrian street or in Kapana.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '沙皇西美昂花园附近餐厅',
      description: '花园周边用餐去处：按场景选择、餐饮聚集区，以及示例店铺。',
      intro:
        '公园周边、“亚历山大一世亲王”步行街以及卡帕纳（Kapana）创意街区有许多咖啡馆、啤酒坊、餐厅和快餐店。本页按不同场景帮你选择——不推荐任何特定商家。',
      sections: [
        {
          heading: '按场景选择',
          body: '快速早餐或咖啡，选步行街上的店铺；正餐可选卡帕纳或公园周边的餐厅；传统保加利亚菜可寻找“mehana”（小酒馆）。',
        },
        {
          heading: '餐饮聚集区在哪里',
          body: '“亚历山大一世亲王”步行街和卡帕纳创意街区距公园步行 5–10 分钟，选择最多。下方有专门介绍具体店铺的页面（如 Hemingway、Smokini、Central Park）。',
        },
        {
          heading: '价格与时段须知',
          body: '价格、菜单和营业时间会变动。本站与任何店铺均无关联——到访前请现场或经由店铺官方账号核实最新信息。',
        },
      ],
      faq: [
        {
          question: '公园附近餐厅最集中的地方在哪里？',
          answer: '“亚历山大一世亲王”步行街和卡帕纳街区——两者都步行几分钟，选择丰富。',
        },
        {
          question: '附近有传统保加利亚菜吗？',
          answer: '有，市中心有提供传统菜肴的“mehana”（小酒馆）；可在步行街或卡帕纳寻找。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'food/breakfast-brunch',
    group: 'food',
    priority: 1,
    bg: {
      title: 'Закуски и брънч около Цар Симеонова градина',
      description:
        'Къде да закусите сутринта близо до парка: кафенета по пешеходната улица, типични български закуски и часове на работа.',
      intro:
        'Ако планирате разходка в парка сутринта, наблизо има кафенета и сладкарници, които отварят рано. Ето как да изберете.',
      sections: [
        {
          heading: 'Къде да закусите',
          body: 'Кафенетата и сладкарниците по пешеходната улица „Княз Александър I“ и в Капана обикновено отварят от около 08:00. Търсете места с тераса, ако искате да седнете навън преди разходката.',
        },
        {
          heading: 'Типични закуски',
          body: 'Популярна местна закуска е баница (тестено с извара или спанак), сервирана с кисело мляко или айрян, както и сандвичи и сладки. Кафето е еспресо-базирано, често с варианти на цена за вкъщи или на място.',
        },
        {
          heading: 'Часове и резервации',
          body: 'Сутрешните часове обикновено не изискват резервация. Проверете текущото работно време на място, тъй като то се променя.',
        },
      ],
      faq: [
        {
          question: 'Откога отварят кафенетата?',
          answer:
            'Повечето по пешеходната улица и в Капана отварят от около 08:00, но часовете се променят – проверете на място.',
        },
        {
          question: 'Какво е баница?',
          answer:
            'Баница е традиционно българско тестено изделие с плънка (често извара или спанак). Често се сервира с кисело мляко или айрян.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Breakfast & Brunch near Tsar Simeon Garden',
      description:
        'Where to have breakfast in the morning near the park: cafés on the pedestrian street, typical Bulgarian breakfast items, and opening hours.',
      intro:
        'If you plan a morning walk in the park, there are cafés and pastry shops nearby that open early. Here is how to choose.',
      sections: [
        {
          heading: 'Where to have breakfast',
          body: 'Cafés and pastry shops along the Knyaz Alexander I pedestrian street and in Kapana usually open from around 08:00. Look for a terrace if you want to sit outside before your walk.',
        },
        {
          heading: 'Typical breakfast items',
          body: 'A popular local item is banitsa (pastry with white cheese or spinach), often served with yogurt or ayran, as well as sandwiches and pastries. Coffee is espresso-based, usually available to stay or take away.',
        },
        {
          heading: 'Hours & reservations',
          body: 'Morning hours usually do not require a reservation. Check the current opening hours on site, as they change.',
        },
      ],
      faq: [
        {
          question: 'What time do cafés open?',
          answer:
            'Most along the pedestrian street and in Kapana open from around 08:00, but hours vary – check on site.',
        },
        {
          question: 'What is banitsa?',
          answer:
            'Banitsa is a traditional Bulgarian pastry with a filling (often white cheese or spinach). It is often served with yogurt or ayran.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '沙皇西美昂花园附近早餐与早午餐',
      description:
        '花园附近早晨用餐去处：步行街上的咖啡馆、保加利亚特色早餐，以及营业时间。',
      intro:
        '如果你计划早晨逛公园，附近有清晨开门的咖啡馆和糕点店。以下说明如何选择。',
      sections: [
        {
          heading: '在哪里吃早餐',
          body: '“亚历山大一世亲王”步行街和卡帕纳的咖啡馆与糕点店通常约 08:00 开门。若想在散步前坐到室外，可选择带露台的店。',
        },
        {
          heading: '特色早餐',
          body: '当地流行的有 banitsa（奶酪或菠菜馅的酥皮点心），常配酸奶或 ayran（咸味酸奶饮），也有三明治和甜点。咖啡以意式浓缩为主，通常可堂食或外带。',
        },
        {
          heading: '时间与预订',
          body: '早晨时段通常无需预订。由于营业时间会变动，请现场核实最新信息。',
        },
      ],
      faq: [
        {
          question: '咖啡馆几点开门？',
          answer: '步行街和卡帕纳的大多数店铺约 08:00 开门，但时间会有变动——请现场确认。',
        },
        {
          question: '什么是 banitsa？',
          answer: 'Banitsa 是一种保加利亚传统酥皮点心，内馅常为白奶酪或菠菜，常配酸奶或 ayran 食用。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'food/coffee-shops',
    group: 'food',
    priority: 1,
    bg: {
      title: 'Кафенета и специално кафе около парка',
      description:
        'Къде да пийнете кафе близо до Цар Симеонова градина: пешеходната улица, Капана и кафенета по маршрута на разходката.',
      intro:
        'Пловдив има развита култура на специалното кафе. Ако търсите качествено еспресо или филтър кафе преди или след разходката, ето къде.',
      sections: [
        {
          heading: 'Капана и пешеходната улица',
          body: 'Творческият квартал Капана и пешеходната улица „Княз Александър I“ са най-гъсто застроените с кафенета зони на няколко минути пеша от парка. Там ще намерите както вериги, така и независими специализирани кафенета.',
        },
        {
          heading: 'По маршрута на разходката',
          body: 'Някои кафенета се намират по улиците, свързващи парка с центъра (напр. ул. „Райко Даскалов“), което ги прави удобна спирка по пътя, без да са точно пред входа на парка.',
        },
        {
          heading: 'Как да изберете',
          body: 'Търсете заведения с ясно посочен произход на зърното и възможност за филтър или еспресо. Цените и наличностите се променят – проверете на място.',
        },
      ],
      faq: [
        {
          question: 'Има ли добро кафе близо до парка?',
          answer:
            'Да – Капана и пешеходната улица предлагат много кафенета на няколко минути пеша.',
        },
        {
          question: 'Къде е The Family Coffee Roasters?',
          answer:
            'Това е кафене с начални корени по ул. „Райко Даскалов“; проверете текущия му адрес на място, тъй като не сме потвърдили локацията.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Coffee Shops near Tsar Simeon Garden',
      description:
        'Where to drink coffee near Tsar Simeon Garden: the pedestrian street, Kapana, and cafés along the walking route.',
      intro:
        'Plovdiv has a developed speciality-coffee culture. If you want quality espresso or filter coffee before or after your walk, here is where to look.',
      sections: [
        {
          heading: 'Kapana & the pedestrian street',
          body: 'The Kapana creative district and the Knyaz Alexander I pedestrian street are the most café-dense zones, a few minutes\' walk from the park. There you will find both chains and independent speciality cafés.',
        },
        {
          heading: 'Along the walking route',
          body: 'Some cafés sit on the streets connecting the park to the centre (e.g. Rayko Daskalov St), making them a convenient stop on the way – though not right at the park gate.',
        },
        {
          heading: 'How to choose',
          body: 'Look for places that clearly state the bean origin and offer filter or espresso. Prices and availability change – check on site.',
        },
      ],
      faq: [
        {
          question: 'Is there good coffee near the park?',
          answer:
            'Yes – Kapana and the pedestrian street offer many cafés a few minutes\' walk away.',
        },
        {
          question: 'Where is The Family Coffee Roasters?',
          answer:
            'It is a café with origins on Rayko Daskalov St; check its current address on site, as we have not confirmed the location.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '沙皇西美昂花园附近咖啡馆',
      description:
        '花园附近喝咖啡的去处：步行街、卡帕纳，以及散步路线上的咖啡馆。',
      intro:
        '普罗夫迪夫有发达的特色咖啡文化。如果你想在散步前后喝一杯优质意式浓缩或手冲，以下告诉你去哪里找。',
      sections: [
        {
          heading: '卡帕纳与步行街',
          body: '卡帕纳创意街区和“亚历山大一世亲王”步行街是咖啡馆最密集的区域，距公园步行几分钟。那里既有连锁也有独立的精品咖啡馆。',
        },
        {
          heading: '散步路线上',
          body: '一些咖啡馆位于连接公园与市中心的街道上（如 Rayko Daskalov 街），是途中方便的歇脚点——不过并不在公园门口。',
        },
        {
          heading: '如何选择',
          body: '寻找明确标注咖啡豆产地、提供手冲或意式浓缩的店铺。价格与供应会变动——请现场确认。',
        },
      ],
      faq: [
        {
          question: '公园附近有好咖啡吗？',
          answer: '有——卡帕纳和步行街步行几分钟就有许多咖啡馆。',
        },
        {
          question: 'The Family Coffee Roasters 在哪里？',
          answer: '这是一家最早根植于 Rayko Daskalov 街的咖啡馆；由于我们没有核实其位置，请在现场查询其当前地址。',
        },
      ],
      updated: UPDATED,
    },
  },
  // ---------- 第三组：周边景点 ----------
  {
    slug: 'nearby/roman-forum',
    group: 'nearby',
    priority: 1,
    bg: {
      title: 'Римски форум (Пловдив) близо до парка',
      description:
        'Римският форум на Филипопол: къде е, какво представлява, безплатен ли е и как да го разгледате след парка.',
      intro:
        'Римският форум е част от античния град Филипопол и се намира на няколко минути пеша от Цар Симеонова градина. Тази страница обяснява защо си струва да го включите в разходката.',
      sections: [
        {
          heading: 'Къде е и какво е',
          body: 'Форумът е големият обществен площад на античния град, разкрит частично около пешеходната улица и булевардите в центъра. Това е отделен обект от Римския стадион и от Античния театър.',
        },
        {
          heading: 'Достъп и цена',
          body: 'Голяма част от форума е открит археологически обект, който може да се разглежда безплатно отвън. За вътрешните експозиции проверете текущите условия и билети на място.',
        },
        {
          heading: 'Маршрут от парка',
          body: 'От парка тръгнете към Централния площад и пешеходната улица – форумът е на 5–10 минути пеша. Комбинирайте го с Римския стадион и Капана за полудневна обиколка.',
        },
      ],
      faq: [
        {
          question: 'Форумът безплатен ли е?',
          answer:
            'Откритите части обикновено се разглеждат безплатно; за закритите експозиции проверете билетите на място.',
        },
        {
          question: 'Форумът и стадионът едно и също ли са?',
          answer:
            'Не – това са два различни антични обекта. Римският стадион е наблизо, но е отделен паметник.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Roman Forum (Plovdiv) near the Park',
      description:
        'The Roman Forum of Philippopolis: where it is, what it is, whether it is free, and how to visit it after the park.',
      intro:
        'The Roman Forum is part of the ancient city of Philippopolis and lies a few minutes\' walk from Tsar Simeon Garden. This page explains why it is worth including in your walk.',
      sections: [
        {
          heading: 'Where & what it is',
          body: 'The forum was the large public square of the ancient city, partially excavated around the pedestrian street and the central boulevards. It is a separate monument from the Roman Stadium and the Ancient Theatre.',
        },
        {
          heading: 'Access & price',
          body: 'Much of the forum is an open-air archaeological site that can be viewed for free from outside. For indoor exhibitions, check current conditions and tickets on site.',
        },
        {
          heading: 'Route from the park',
          body: 'From the park head to the Central Square and the pedestrian street – the forum is a 5–10 minute walk. Combine it with the Roman Stadium and Kapana for a half-day tour.',
        },
      ],
      faq: [
        {
          question: 'Is the forum free?',
          answer:
            'The open-air parts are usually free to view; for indoor exhibitions check tickets on site.',
        },
        {
          question: 'Is the forum the same as the stadium?',
          answer:
            'No – they are two different ancient monuments. The Roman Stadium is nearby but separate.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '花园附近的罗马广场（普罗夫迪夫）',
      description:
        '菲利波波利斯的罗马广场：位置、简介、是否免费，以及游完公园后如何参观。',
      intro:
        '罗马广场是古城菲利波波利斯的一部分，距沙皇西美昂花园步行几分钟。本页说明为何值得将其纳入你的散步路线。',
      sections: [
        {
          heading: '位置与简介',
          body: '广场是古城的大型公共集会广场，在步行街和中心大道周边部分发掘。它与罗马体育场和古剧场是彼此独立的遗迹。',
        },
        {
          heading: '进入与票价',
          body: '广场大部分为露天考古遗址，可从外部免费观看。室内展览请现场核实当前条件与门票。',
        },
        {
          heading: '从公园前往的路线',
          body: '从公园走向中央广场和步行街——广场步行约 5–10 分钟。可与罗马体育场和卡帕纳组合成半日游。',
        },
      ],
      faq: [
        {
          question: '广场免费吗？',
          answer: '露天部分通常可免费观看；室内展览请在现场核实门票。',
        },
        {
          question: '广场和体育场是同一处吗？',
          answer: '不是——这是两处不同的古代遗迹。罗马体育场就在附近，但是独立的纪念物。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'nearby/main-pedestrian-street',
    group: 'nearby',
    priority: 1,
    bg: {
      title: 'Главната пешеходна улица (Княз Александър I)',
      description:
        'Пешеходната улица „Княз Александър I“ в Пловдив: какво да видите, къде да починете и как да стигнете от парка.',
      intro:
        'Главната пешеходна улица (официално „Княз Александър I“) е централната пешеходна ос на Пловдив и свързва Централния площад с Капана. Тя е на няколко минути пеша от парка.',
      sections: [
        {
          heading: 'Какво да видите',
          body: 'По улицата има магазини, кафенета, фонтани и скулптури, както и изходи към Римския форум. В южния край започва квартал Капана с творческите му магазинчета и заведения.',
        },
        {
          heading: 'Почивка и удобства',
          body: 'Има много пейки, сенчести места и заведения за кафе или закуска. Това е удобна междинна спирка между парка и останалите забележителности.',
        },
        {
          heading: 'От парка дотам',
          body: 'Тръгнете от входа при Централния площад и вървете на юг по пешеходната улица – около 5–10 минути пеша по равен терен.',
        },
      ],
      faq: [
        {
          question: 'Пешеходната улица далеч ли е от парка?',
          answer: 'Не, пеша от парка се стига за 5–10 минути по равен терен.',
        },
        {
          question: 'Къде свършва пешеходната улица?',
          answer:
            'В южния край преминава в квартал Капана, а на север започва от Централния площад.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Main Pedestrian Street (Knyaz Alexander I)',
      description:
        'The Knyaz Alexander I pedestrian street in Plovdiv: what to see, where to rest, and how to get there from the park.',
      intro:
        'The Main Pedestrian Street (officially "Knyaz Alexander I") is the central pedestrian axis of Plovdiv and connects the Central Square with Kapana. It is a few minutes\' walk from the park.',
      sections: [
        {
          heading: 'What to see',
          body: 'Along the street are shops, cafés, fountains and sculptures, as well as access to the Roman Forum. At the southern end begins the Kapana district with its creative shops and venues.',
        },
        {
          heading: 'Rest & amenities',
          body: 'There are many benches, shaded spots and places for coffee or a snack. It is a convenient intermediate stop between the park and the other sights.',
        },
        {
          heading: 'From the park',
          body: 'Start from the Central Square entrance and walk south along the pedestrian street – about 5–10 minutes on flat terrain.',
        },
      ],
      faq: [
        {
          question: 'Is the pedestrian street far from the park?',
          answer: 'No, it is a 5–10 minute walk from the park on flat terrain.',
        },
        {
          question: 'Where does the pedestrian street end?',
          answer:
            'At its southern end it becomes the Kapana district, and in the north it starts at the Central Square.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '主步行街（亚历山大一世亲王街）',
      description:
        '普罗夫迪夫“亚历山大一世亲王”步行街：看点、休息处，以及从公园如何到达。',
      intro:
        '主步行街（官方名称“亚历山大一世亲王”街）是普罗夫迪夫的中央步行主轴，连接中央广场与卡帕纳，距公园步行仅几分钟。',
      sections: [
        {
          heading: '看点',
          body: '街上商店、咖啡馆、喷泉与雕塑林立，并有通往罗马广场的入口。南端进入卡帕纳街区，那里有创意小店与店铺。',
        },
        {
          heading: '休息与设施',
          body: '有许多坐椅、遮荫处以及喝咖啡或吃早餐的地方。它是公园与其他景点之间方便的折中点。',
        },
        {
          heading: '从公园前往',
          body: '从中央广场入口出发，沿步行街向南走——在平地上步行约 5–10 分钟。',
        },
      ],
      faq: [
        {
          question: '步行街离公园远吗？',
          answer: '不远，从公园在平地上步行 5–10 分钟即到。',
        },
        {
          question: '步行街在哪里结束？',
          answer: '南端接入卡帕纳街区，北端始于中央广场。',
        },
      ],
      updated: UPDATED,
    },
  },
  // ---------- 第四组：行程 ----------
  {
    slug: 'routes/plovdiv-half-day',
    group: 'routes',
    priority: 1,
    bg: {
      title: 'Полудневна обиколка на центъра от парка',
      description:
        'Полудневен маршрут в Пловдив: парк, Римски форум, пешеходна улица, Капана, кафе и връщане за фонтаните.',
      intro:
        'Ако имате около 3–4 часа, този маршрут свързва парка с най-важните централни забележителности без пренатоварване.',
      sections: [
        {
          heading: 'Маршрут стъпка по стъпка',
          body: 'Започнете от Цар Симеонова градина (около 1 час). Продължете към Централния площад и Римския форум (30 мин.). Минете по пешеходната улица към Капана за кафе или обяд (1 час). Върнете се към парка привечер, ако е сезонът на Пеещите фонтани.',
        },
        {
          heading: 'Време и темпо',
          body: 'Общо 3–4 часа при спокойно темпо с една почивка за храна. Маршрутът е предимно равен и подходящ за повечето посетители.',
        },
        {
          heading: 'Кога да тръгнете',
          body: 'Сутринта е най-удобна – разглеждате на дневна светлина и оставяте фонтаните (ако са в сезон) за вечерта. Проверете програмата на фонтаните предварително.',
        },
      ],
      faq: [
        {
          question: 'Колко време отнема маршрутът?',
          answer: 'Около 3–4 часа при спокойно темпо с една почивка за храна.',
        },
        {
          question: 'Подходящ ли е за деца и възрастни?',
          answer:
            'Да, маршрутът е предимно равен и кратък; разделете го на части с почивки при нужда.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Plovdiv Half-Day Itinerary from the Park',
      description:
        'A half-day Plovdiv route: park, Roman Forum, pedestrian street, Kapana, coffee, and back for the fountains.',
      intro:
        'If you have about 3–4 hours, this route connects the park with the key central sights without overloading your day.',
      sections: [
        {
          heading: 'Step-by-step route',
          body: 'Start at Tsar Simeon Garden (about 1 hour). Continue to the Central Square and the Roman Forum (30 min). Walk the pedestrian street to Kapana for coffee or lunch (1 hour). Return to the park in the evening if it is the Singing Fountains season.',
        },
        {
          heading: 'Time & pace',
          body: 'About 3–4 hours at a relaxed pace with one food break. The route is mostly flat and suitable for most visitors.',
        },
        {
          heading: 'When to start',
          body: 'Morning is most convenient – you sightsee in daylight and leave the fountains (if in season) for the evening. Check the fountain schedule in advance.',
        },
      ],
      faq: [
        {
          question: 'How long does the route take?',
          answer: 'About 3–4 hours at a relaxed pace with one food break.',
        },
        {
          question: 'Is it suitable for children and older visitors?',
          answer:
            'Yes, the route is mostly flat and short; split it into parts with rests as needed.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '从公园出发的普罗夫迪夫半日行程',
      description:
        '普罗夫迪夫半日路线：公园、罗马广场、步行街、卡帕纳、咖啡，再回来看喷泉。',
      intro:
        '如果你有约 3–4 小时，这条路线把公园与市中心主要景点串联起来，而不会让一天过于紧凑。',
      sections: [
        {
          heading: '逐步路线',
          body: '从沙皇西美昂花园出发（约 1 小时）。继续前往中央广场和罗马广场（30 分钟）。沿步行街走到卡帕纳喝咖啡或吃午餐（1 小时）。若正值歌唱喷泉季，傍晚返回公园。',
        },
        {
          heading: '时间与节奏',
          body: '以轻松节奏、含一次用餐休息，共约 3–4 小时。路线基本平坦，适合大多数游客。',
        },
        {
          heading: '何时出发',
          body: '上午最方便——白天参观景点，把喷泉（若逢季节）留到晚上。请提前查询喷泉节目表。',
        },
      ],
      faq: [
        {
          question: '这条路线需要多长时间？',
          answer: '以轻松节奏、含一次用餐休息，约 3–4 小时。',
        },
        {
          question: '适合老人和儿童吗？',
          answer: '适合，路线基本平坦且较短；需要时可分为几段并休息。',
        },
      ],
      updated: UPDATED,
    },
  },
  // ---------- 第五组：历史文化 ----------
  {
    slug: 'history/viennese-pavilion',
    group: 'history',
    priority: 1,
    bg: {
      title: 'Виенският павилион в Цар Симеонова градина',
      description:
        'Виенският павилион: история, връзка с изложението от 1892 г. и къде се намира днес.',
      intro:
        'Виенският павилион е един от историческите обекти на Цар Симеонова градина, свързан с Първото българско земеделско-промишлено изложение от 1892 г.',
      sections: [
        {
          heading: 'История',
          body: 'Павилионът е построен за Първото българско земеделско-промишлено изложение през 1892 г., чиято територия по-късно се превръща в днешната градина. Подобни орнаментални павилиони са били част от представянето на модерна градска среда.',
        },
        {
          heading: 'Днес',
          body: 'Оригиналният павилион е претърпял промени и реконструкции през годините. Не сме потвърдили самостоятелно точното му текущо местоположение и състояние – проверете на място или в официалната информация на Община Пловдив / Посетете Пловдив.',
        },
        {
          heading: 'Защо да го видите',
          body: 'Той е материална следа от събитието, създало градината, и добавя исторически контекст към разходката ви. Търсете го сред историческите постройки и статуи в парка.',
        },
      ],
      faq: [
        {
          question: 'Откога е Виенският павилион?',
          answer:
            'Свързан е с изложението от 1892 г., когато е създадена и градината.',
        },
        {
          question: 'Къде точно се намира сега?',
          answer:
            'Не сме потвърдили текущото му местоположение – проверете на място или в официалните източници.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'The Viennese Pavilion in Tsar Simeon Garden',
      description:
        'The Viennese Pavilion: its history, link to the 1892 exhibition, and where it is today.',
      intro:
        'The Viennese Pavilion is one of the historical structures in Tsar Simeon Garden, connected to the First Bulgarian Agricultural-Industrial Exhibition of 1892.',
      sections: [
        {
          heading: 'History',
          body: 'The pavilion was built for the First Bulgarian Agricultural-Industrial Exhibition of 1892, whose grounds later became today\'s garden. Such ornamental pavilions were part of presenting a modern urban environment.',
        },
        {
          heading: 'Today',
          body: 'The original pavilion has undergone changes and reconstructions over the years. We have not independently confirmed its exact current location and condition – check on site or in the official information from Plovdiv Municipality / Visit Plovdiv.',
        },
        {
          heading: 'Why see it',
          body: 'It is a physical trace of the event that created the garden and adds historical context to your walk. Look for it among the park\'s historical buildings and statues.',
        },
      ],
      faq: [
        {
          question: 'How old is the Viennese Pavilion?',
          answer:
            'It is tied to the 1892 exhibition, when the garden was also created.',
        },
        {
          question: 'Where exactly is it now?',
          answer:
            'We have not confirmed its current location – check on site or in official sources.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '沙皇西美昂花园的维也纳亭',
      description: '维也纳亭：历史、与 1892 年博览会的关联，以及如今所在位置。',
      intro:
        '维也纳亭是沙皇西美昂花园的历史建筑之一，与 1892 年第一次保加利亚农业工业博览会相关。',
      sections: [
        {
          heading: '历史',
          body: '该亭为 1892 年第一次保加利亚农业工业博览会而建，其场地后来成为今天的花园。这类装饰性亭阁是当时展示现代城市环境的一部分。',
        },
        {
          heading: '今日',
          body: '原亭多年来历经改动与重建。我们未独立核实其确切的当前位置与状况——请现场或经由普罗夫迪夫市政府 / Visit Plovdiv 的官方信息核实。',
        },
        {
          heading: '为何值得一看',
          body: '它是造就这座花园的那一历史事件的实物痕迹，为你的散步增添历史背景。可在园内的历史建筑与雕像之间寻找它。',
        },
      ],
      faq: [
        {
          question: '维也纳亭始于何时？',
          answer: '它与 1892 年的博览会相关，花园也正是那时创建的。',
        },
        {
          question: '它现在确切在哪里？',
          answer: '我们未核实其当前位置——请现场或经由官方来源查询。',
        },
      ],
      updated: UPDATED,
    },
  },

  // ---------- 第二批（priority 2）----------
  {
    slug: 'accessibility',
    group: 'park',
    priority: 2,
    bg: {
      title: 'Достъпност в Цар Симеонова градина',
      description:
        'Колички, инвалидни колички и удобни маршрути в парка: кои входове и алеи са равни, къде има стъпала и какво да проверите на място.',
      intro:
        'Цар Симеонова градина е подходяща за посетители с различна мобилност, но не всеки участък е еднакъв. Тази страница обобщава проверените досега условия, за да планирате по-лесно.',
      sections: [
        {
          heading: 'Равни маршрути',
          body: 'Централната алея и главните пътеки са асфалтирани и без стъпала. Някои свързващи странични пътеки имат ниски бордюри, затова предпочитайте централните алеи.',
        },
        {
          heading: 'Входове без стъпала',
          body: 'Входът откъм Централния площад е най-равен и удобен. Другите входове може да имат стъпала или неравности – проверете на място.',
        },
        {
          heading: 'Тоалетни и почивка',
          body: 'В парка има обществени тоалетни, но не сме проверили самостоятелно тяхната достъпност и работно време; имайте предвид резервен вариант в центъра. Пейките по главните алеи са удобни за почивка.',
        },
      ],
      faq: [
        {
          question: 'Подходящ ли е паркът за инвалидни колички?',
          answer:
            'Да, централната алея и главните пътеки са равни и асфалтирани. Пристигайте през входа при Централния площад и избягвайте страничните пътеки с бордюри.',
        },
        {
          question: 'Подходящ ли е за детски колички?',
          answer: 'Да, главните алеи са равни и удобни за колички.',
        },
        {
          question: 'Има ли тоалетни?',
          answer:
            'Има обществени тоалетни в парка, но не сме ги проверили самостоятелно; носете резервен план в центъра.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Accessibility in Tsar Simeon Garden',
      description:
        'Wheelchairs, strollers and step-free routes in the park: which entrances and alleys are flat, where there are steps, and what to check on site.',
      intro:
        'Tsar Simeon Garden is suitable for visitors with different mobility needs, but not every area is the same. This page summarises the conditions verified so far so you can plan more easily.',
      sections: [
        {
          heading: 'Step-free routes',
          body: 'The central promenade and main alleys are paved and step-free. Some connecting side paths have low curbs, so prefer the central alleys.',
        },
        {
          heading: 'Step-free entrances',
          body: 'The entrance by the Central Square is the flattest and most convenient. Other entrances may have steps or uneven spots – check on site.',
        },
        {
          heading: 'Toilets & rest',
          body: 'There are public toilets in the park, but we have not independently verified their accessibility and opening hours; keep a backup option in the centre. Benches along the main alleys are good for resting.',
        },
      ],
      faq: [
        {
          question: 'Is the park suitable for wheelchairs?',
          answer:
            'Yes, the central promenade and main alleys are flat and paved. Arrive via the Central Square entrance and avoid the side paths with curbs.',
        },
        {
          question: 'Is it suitable for strollers?',
          answer: 'Yes, the main alleys are flat and stroller-friendly.',
        },
        {
          question: 'Are there toilets?',
          answer:
            'There are public toilets in the park, but we have not verified them ourselves; keep a backup plan in the centre.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '沙皇西美昂花园无障碍与可达性',
      description:
        '花园的无障碍信息：中央大道路面、坡道、长椅，以及我们未能独立核实之处。',
      intro:
        '沙皇西美昂花园是普罗夫迪夫市中心一处平坦、线性的公园。以下是我们能确认的无障碍信息，以及需要你到现场复核之处。',
      sections: [
        {
          heading: '路面与地形',
          body: '中央大道为沥青铺设、平坦，是园内最易于通行的主要路线。部分支路有路缘石与起伏。',
        },
        {
          heading: '坡道与设施',
          body: '公园为公共空间，多数入口无台阶。具体坡道与无障碍卫生间位置我们未能独立核实，请在现场确认。',
        },
        {
          heading: '建议',
          body: '如需平缓路线，请走中央大道，并利用沿路长椅休息。需要轮椅或推车辅助时，建议走主路。',
        },
      ],
      faq: [
        {
          question: '公园平坦吗？',
          answer: '整体平坦，但支路有路缘石；中央大道最平整。',
        },
        {
          question: '有无障碍卫生间吗？',
          answer: '园内有公共卫生间，但无障碍规格我们未独立核实，请在现场确认。',
        },
        {
          question: '可以推婴儿车或轮椅吗？',
          answer: '可以——中央大道平坦、铺设完善，适合婴儿车与轮椅。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'photography',
    group: 'park',
    priority: 2,
    bg: {
      title: 'Фотография в Цар Симеонова градина',
      description:
        'Къде и кога да снимате в парка: дневна светлина, залез, вечерните фонтани и пролетни/есенни цветове.',
      intro:
        'Паркът е едно от най-сниманите места в Пловдив. Ето практически съвети за най-добри кадри през различните часове и сезони.',
      sections: [
        {
          heading: 'Най-добри часове',
          body: 'Златният час преди залез е идеален край фонтаните и историческите статуи. Синият час (след залез) е най-добър за осветените вечерни фонтани.',
        },
        {
          heading: 'Къде да застанете',
          body: 'Брегът на централния водоем, цветните алеи, историческите статуи и откритото пространство за концерти предлагат добри кадри.',
        },
        {
          heading: 'Сезони',
          body: 'Пролетта носи цъфтеж (април–май), есента – багри (октомври–ноември), а лятото е сезонът на вечерните фонтани. Зимата е тиха и светла.',
        },
      ],
      faq: [
        {
          question: 'Кога са най-добрите кадри на фонтаните?',
          answer: 'След залез през лятото, когато осветените водни струи се виждат най-добре.',
        },
        {
          question: 'Мога ли да нося статив?',
          answer: 'Лек статив е удобен, но внимавайте с тълпите през вечерните шоута.',
        },
        {
          question: 'Разрешени ли са дронове?',
          answer:
            'Не знаем правилата за дронове в парка – проверете ги предварително с общината или охраната.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Photography in Tsar Simeon Garden',
      description:
        'Where and when to photograph in the park: daylight, sunset, the evening fountains, and spring/autumn colours.',
      intro:
        'The park is one of the most photographed spots in Plovdiv. Here are practical tips for the best shots at different hours and seasons.',
      sections: [
        {
          heading: 'Best hours',
          body: 'The golden hour before sunset is ideal by the fountains and historic statues. The blue hour (after sunset) is best for the lit evening fountains.',
        },
        {
          heading: 'Where to stand',
          body: 'The edge of the central pond, the flower alleys, the historic statues and the open-air event space all make good frames.',
        },
        {
          heading: 'Seasons',
          body: 'Spring brings blossoms (April–May), autumn brings colour (October–November), and summer is the season of evening fountains. Winter is quiet and bright.',
        },
      ],
      faq: [
        {
          question: 'When are the best fountain shots?',
          answer: 'After sunset in summer, when the lit water jets are most visible.',
        },
        {
          question: 'Can I bring a tripod?',
          answer: 'A light tripod is handy, but watch the crowds during the evening shows.',
        },
        {
          question: 'Are drones allowed?',
          answer:
            'We do not know the drone rules in the park – check them in advance with the municipality or the park staff.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '沙皇西美昂花园拍照指南',
      description:
        '在花园与喷泉拍照的最佳位置、最佳光线，以及无人机与三脚架须知。',
      intro:
        '沙皇西美昂花园是普罗夫迪夫最受欢迎的拍照地之一。本页汇总拍摄建议，不含任何商业推荐。',
      sections: [
        {
          heading: '最佳位置',
          body: '中央（下方）水池、得墨忒耳喷泉、花径与林荫大道都是经典取景点。',
        },
        {
          heading: '最佳光线',
          body: '清晨与日落前后光线最柔和，人也较少；喷泉灯光秀在日落后最为出彩。',
        },
        {
          heading: '设备须知',
          body: '三脚架在公共空间通常可以使用，但请不妨碍通行。无人机规定我们未核实，请遵守当地法规。',
        },
      ],
      faq: [
        {
          question: '什么时候拍照最好？',
          answer: '清晨或日落前后，光线柔和、游客较少。',
        },
        {
          question: '可以带三脚架吗？',
          answer: '通常可以，但请勿阻挡步道。',
        },
        {
          question: '有无人机规定吗？',
          answer: '相关法规我们未核实，请在飞行前遵守当地规定。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'best-time-to-visit',
    group: 'park',
    priority: 2,
    bg: {
      title: 'Кога да посетите парка (сезони и часове)',
      description:
        'Най-доброто време за Цар Симеонова градина: сянка през лятото, цъфтеж напролет, есенни багри и сезон на фонтаните.',
      intro:
        'Паркът е отворен целогодишно и безплатен, но преживяването зависи от сезона и часа. Тази страница помага да изберете времето си.',
      sections: [
        {
          heading: 'Сезони',
          body: 'Пролетта е приятна, лятото е горещо по обяд (ходете сутрин или вечер), есента е най-комфортна, а зимата е тиха.',
        },
        {
          heading: 'Часове през деня',
          body: 'Сутринта и късният следобед/вечер са по-хладни. В летните обедни часове търсете сянката на дърветата.',
        },
        {
          heading: 'Фонтаните',
          body: 'Пеещите фонтани обикновено се провеждат лятото. Точната програма проверете в Община Пловдив / Visit Plovdiv.',
        },
      ],
      faq: [
        {
          question: 'Кой е най-добрият месец?',
          answer: 'Май–юни или септември–октомври са най-комфортните месеци.',
        },
        {
          question: 'Мога ли лятото?',
          answer: 'Да, но предпочитайте сутрин или вечер и гледайте фонтаните след залез.',
        },
        {
          question: 'Работи ли зимата?',
          answer: 'Паркът е отворен и зимата, но фонтаните обикновено не работят извън сезона.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Best Time to Visit Tsar Simeon Garden',
      description:
        'The best time for Tsar Simeon Garden: summer shade, spring blossoms, autumn colour and the fountain season.',
      intro:
        'The park is open all year and free, but the experience depends on the season and hour. This page helps you pick your timing.',
      sections: [
        {
          heading: 'Seasons',
          body: 'Spring is pleasant, summer is hot at midday (go morning or evening), autumn is the most comfortable, and winter is quiet.',
        },
        {
          heading: 'Time of day',
          body: 'Mornings and late afternoon/evening are cooler. In summer avoid the midday sun and use the tree shade.',
        },
        {
          heading: 'The fountains',
          body: 'The Singing Fountains usually run in summer. Check the exact schedule with Plovdiv Municipality / Visit Plovdiv.',
        },
      ],
      faq: [
        {
          question: 'What is the best month?',
          answer: 'May–June or September–October are the most comfortable months.',
        },
        {
          question: 'Can I go in summer?',
          answer: 'Yes, but prefer morning or evening and watch the fountains after sunset.',
        },
        {
          question: 'Is it open in winter?',
          answer: 'The park is open in winter too, but the fountains usually do not run out of season.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '沙皇西美昂花园最佳游览时间',
      description: '按季节与时段规划：气候、喷泉季节、人流与日照建议。',
      intro:
        '花园全年开放，但体验随季节变化。本页帮你选择最合适的时间前往。',
      sections: [
        {
          heading: '季节',
          body: '春季与秋季气候宜人；夏季炎热，傍晚最佳；冬季较冷但清静。',
        },
        {
          heading: '喷泉季节',
          body: '歌唱喷泉通常在夏季（约六月至九月）开放，具体日期由市政府确定。',
        },
        {
          heading: '一日时段',
          body: '清晨凉爽清静，傍晚适合看喷泉与灯光。正午人流较多。',
        },
      ],
      faq: [
        {
          question: '哪个月最好？',
          answer: '春季（四至六月）与秋季（九至十月）气候最舒适。',
        },
        {
          question: '喷泉什么时候开？',
          answer: '通常在夏季；请查询市政府公告确认当年安排。',
        },
        {
          question: '几点去人少？',
          answer: '清晨或工作日的非高峰时段游客较少。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'food/bulgarian-food',
    group: 'food',
    priority: 2,
    bg: {
      title: 'Българска кухня близо до парка',
      description:
        'Къде да опитате традиционна българска кухня близо до Цар Симеонова градина: механи, типични ястия и как да поръчате.',
      intro:
        'Ако искате да опитате местна кухня след разходката, центърът на Пловдив предлага „механи“ (таверни) с традиционни ястия. Тази страница обяснява какво да търсите и как да поръчате.',
      sections: [
        {
          heading: 'Какво да опитате',
          body: 'Шопска салата, баница, кавърма, кебапче, кисело мляко и ракия са сред типичните местни неща.',
        },
        {
          heading: 'Къде',
          body: 'Пешеходната улица „Княз Александър I“ и квартал Капана имат най-голям избор от механи и ресторанти.',
        },
        {
          heading: 'Как да поръчате',
          body: 'Порциите често са големи; цените и менюто се променят, затова ги проверете в заведението преди поръчка.',
        },
      ],
      faq: [
        {
          question: 'Кое е традиционно ястие?',
          answer: 'Шопска салата и баница са сред най-разпознаваемите; пробвайте и кавърма или чеверме.',
        },
        {
          question: 'Има ли вегетариански опции?',
          answer: 'Да – салати, баница със сирене и зеленчукови ястия са често срещани.',
        },
        {
          question: 'Скъпо ли е?',
          answer: 'Цените варират; проверете менюто на място.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Bulgarian Food near Tsar Simeon Garden',
      description:
        'Where to try traditional Bulgarian food near Tsar Simeon Garden: mehanas, typical dishes and how to order.',
      intro:
        'If you want local food after your walk, central Plovdiv has many "mehana" taverns with traditional dishes. This page explains what to look for and how to order.',
      sections: [
        {
          heading: 'What to try',
          body: 'Shopska salad, banitsa, kavarma, kebapche, yogurt and rakia are among the typical local items.',
        },
        {
          heading: 'Where',
          body: 'The Knyaz Alexander I pedestrian street and the Kapana district have the widest choice of taverns and restaurants.',
        },
        {
          heading: 'How to order',
          body: 'Portions are often large; prices and menus change, so check them at the venue before ordering.',
        },
      ],
      faq: [
        {
          question: 'What is a traditional dish?',
          answer: 'Shopska salad and banitsa are the most recognisable; also try kavarma or cheverme.',
        },
        {
          question: 'Are there vegetarian options?',
          answer: 'Yes – salads, cheese banitsa and vegetable dishes are common.',
        },
        {
          question: 'Is it expensive?',
          answer: 'Prices vary; check the menu on site.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '普罗夫迪夫保加利亚菜入门',
      description:
        '在公园周边尝试保加利亚菜：必点菜式、mehana 小酒馆，以及价格与用餐提示。',
      intro:
        '保加利亚菜以酸奶、奶酪、烤蔬菜与烤肉著称。在花园附近就能找到地道餐厅。',
      sections: [
        {
          heading: '必点菜式',
          body: 'shopska 沙拉、banitsa 酥皮点心、kebabche 烤肉肠、kavarma 炖锅，以及搭配酸奶酱的烤蔬菜。',
        },
        {
          heading: '去哪里吃',
          body: '寻找 mehana（传统小酒馆）；市中心与卡帕纳街区选择最多。',
        },
        {
          heading: '价格与提示',
          body: '人均价格与菜单会变动；本站不推荐具体商家，请在现场或官方渠道核实。',
        },
      ],
      faq: [
        {
          question: '什么是 mehana？',
          answer: 'Mehana 是提供传统保加利亚菜与酒水的小酒馆。',
        },
        {
          question: '有什么必尝？',
          answer: 'shopska 沙拉、banitsa 与烤肉肠是经典入门选择。',
        },
        {
          question: '贵吗？',
          answer: '价格因店而异；建议先看菜单与价位再入座。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'food/desserts-ice-cream',
    group: 'food',
    priority: 2,
    bg: {
      title: 'Десерти, сладолед и следобедна почивка',
      description:
        'Къде да хапнете сладолед, сладки или кафе с десерт близо до парка: сладкарници по пешеходната улица и в Капана.',
      intro:
        'След разходката в парка е приятно да спрете за сладолед или сладкиш. Ето къде да търсите.',
      sections: [
        {
          heading: 'Сладолед',
          body: 'Дюкянчета за сладолед (често италиански стил) има по пешеходната улица и в Капана; през лятото има плодови вкусове.',
        },
        {
          heading: 'Сладкарници',
          body: 'Традиционни сладкиши (баклава, млечни десерти, тутманик) и пастички се предлагат в сладкарниците в центъра.',
        },
        {
          heading: 'Следобедна почивка',
          body: 'Много кафенета имат тераси за кафе с десерт – удобна пауза преди или след парка.',
        },
      ],
      faq: [
        {
          question: 'Къде има сладолед?',
          answer: 'По пешеходната улица и в Капана има няколко сладоледени точки.',
        },
        {
          question: 'Какъв е традиционният десерт?',
          answer: 'Баклава и млечни десерти са сред типичните; пробвайте и тутманик.',
        },
        {
          question: 'Работят ли следобед?',
          answer: 'Повечето сладкарници са отворени следобед, но часовете се променят – проверете на място.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Desserts, Ice Cream & Afternoon Break',
      description:
        'Where to eat ice cream, sweets or coffee with dessert near the park: pastry shops on the pedestrian street and in Kapana.',
      intro:
        'After a walk in the park it is nice to stop for ice cream or a sweet. Here is where to look.',
      sections: [
        {
          heading: 'Ice cream',
          body: 'Gelato-style ice cream shops are on the pedestrian street and in Kapana; in summer there are fruit flavours.',
        },
        {
          heading: 'Pastry shops',
          body: 'Traditional sweets (baklava, milk-based desserts, tutmanik) and pastries are sold in central pastry shops.',
        },
        {
          heading: 'Afternoon break',
          body: 'Many cafés have terraces for coffee with dessert – a convenient pause before or after the park.',
        },
      ],
      faq: [
        {
          question: 'Where is the ice cream?',
          answer: 'There are a few ice cream spots on the pedestrian street and in Kapana.',
        },
        {
          question: 'What is a traditional dessert?',
          answer: 'Baklava and milk-based desserts are typical; also try tutmanik.',
        },
        {
          question: 'Are they open in the afternoon?',
          answer: 'Most pastry shops are open in the afternoon, but hours vary – check on site.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '公园周边的甜点与冰淇淋',
      description:
        '在花园附近享用甜点与冰淇淋：常见种类、店铺分布与季节提示。',
      intro: '散步之后，甜点与冰淇淋是不错的收尾。以下介绍你能找到的常见品类。',
      sections: [
        {
          heading: '甜点',
          body: 'banitsa、糕点、水果蜜饯与传统的牛奶甜点在市中心甜品店均有。',
        },
        {
          heading: '冰淇淋',
          body: '夏季沿步行街与卡帕纳有许多冰淇淋店，口味因地而异。',
        },
        {
          heading: '去哪里找',
          body: '步行街与卡帕纳的店铺最集中；具体营业时间请在现场核实。',
        },
      ],
      faq: [
        {
          question: '哪里有冰淇淋？',
          answer: '步行街和卡帕纳在夏季最集中。',
        },
        {
          question: '有什么传统甜点？',
          answer: 'banitsa 与各类糕点、蜜饯是常见选择。',
        },
        {
          question: '营业时间固定吗？',
          answer: '会变动，请在现场或店铺官方渠道确认。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'food/wine-bars',
    group: 'food',
    priority: 2,
    bg: {
      title: 'Винени барове и вечерно питие',
      description:
        'Къде да пийнете българско вино близо до парка: винени барове в Капана и центъра, сортове и връщане към парка.',
      intro:
        'България е известна с винищата си (Мавруд, Мелник, Гъмза). Ако искате чаша вино вечер, Капана и центърът предлагат винени барове.',
      sections: [
        {
          heading: 'Сортове',
          body: 'Червеното Мавруд и бялото Мискет са сред местните сортове; в много заведения се предлагат и по чаша.',
        },
        {
          heading: 'Къде',
          body: 'Винените барове са концентрирани в Капана и по пешеходната улица.',
        },
        {
          heading: 'Връщане',
          body: 'След питието вечерната разходка обратно към парка или фонтаните е кратка и приятна.',
        },
      ],
      faq: [
        {
          question: 'Кое е местно вино?',
          answer: 'Мавруд (червено) и Мискет (бяло) са сред най-известните местни сортове.',
        },
        {
          question: 'Предлагат ли по чаша?',
          answer: 'В много винени барове виното се предлага и по чаша.',
        },
        {
          question: 'До късно ли работят?',
          answer: 'Часовете се променят; проверете ги предварително.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Wine Bars & Evening Drinks',
      description:
        'Where to drink Bulgarian wine near the park: wine bars in Kapana and the centre, grape varieties, and the walk back.',
      intro:
        'Bulgaria is known for its vineyards (Mavrud, Melnik, Gamza). If you want a glass of wine in the evening, Kapana and the centre have wine bars.',
      sections: [
        {
          heading: 'Varieties',
          body: 'Red Mavrud and white Misket are local grapes; many places also serve by the glass.',
        },
        {
          heading: 'Where',
          body: 'Wine bars cluster in Kapana and along the pedestrian street.',
        },
        {
          heading: 'The walk back',
          body: 'After a drink, the evening walk back to the park or the fountains is short and pleasant.',
        },
      ],
      faq: [
        {
          question: 'What is the local wine?',
          answer: 'Mavrud (red) and Misket (white) are among the best-known local grapes.',
        },
        {
          question: 'Is it served by the glass?',
          answer: 'At many wine bars wine is available by the glass.',
        },
        {
          question: 'Are they open late?',
          answer: 'Hours vary; check them in advance.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '普罗夫迪夫葡萄酒吧',
      description:
        '在花园附近喝保加利亚葡萄酒：本地产区、wine bar 分布与品鉴提示。',
      intro:
        '保加利亚有悠久的葡萄酒传统，普罗夫迪夫周边就有多个产区。以下介绍如何就近品酒。',
      sections: [
        {
          heading: '本地葡萄酒',
          body: '梅尔尼克（Mavrud）等本地葡萄品种值得一试；具体酒单因地而异。',
        },
        {
          heading: '去哪里喝',
          body: '卡帕纳创意街区与市中心有若干葡萄酒吧；我们不推荐具体商家。',
        },
        {
          heading: '提示',
          body: '多数 wine bar 傍晚后更热闹；价格与酒单请现场确认。',
        },
      ],
      faq: [
        {
          question: '保加利亚有什么特色酒？',
          answer: 'Mavrud 等本地红葡萄品种很有代表性。',
        },
        {
          question: '卡帕纳有葡萄酒吧吗？',
          answer: '有，该街区是品酒与咖啡的集中地。',
        },
        {
          question: '需要预约吗？',
          answer: '视店铺与时段而定，建议现场或线上确认。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'food/family-restaurants',
    group: 'food',
    priority: 2,
    bg: {
      title: 'Ресторанти, подходящи за семейства',
      description:
        'Къде да вечеряте с деца близо до парка: детско меню, столове и пространство за колички (проверете предварително).',
      intro:
        'За обяд или вечеря с деца търсете заведения с детско меню и простор. Ето как да изберете и какво да проверите.',
      sections: [
        {
          heading: 'Какво да търсите',
          body: 'Високи столове, детско меню и пространство за количка са признаци за семейно заведение.',
        },
        {
          heading: 'Къде',
          body: 'Пешеходната улица и Капана предлагат много семейно ориентирани опции.',
        },
        {
          heading: 'Проверки',
          body: 'Потвърдете детското меню и високите столове в заведението преди да тръгнете; не разчитайте само на онлайн информация.',
        },
      ],
      faq: [
        {
          question: 'Има ли детско меню?',
          answer: 'Попитайте заведението – не е гарантирано навсякъде.',
        },
        {
          question: 'Удобно ли е с количка?',
          answer: 'Главните алеи и пешеходната улица са равни и удобни.',
        },
        {
          question: 'Има ли високи столове?',
          answer: 'Проверете с конкретното заведение предварително.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Family-Friendly Restaurants',
      description:
        'Where to eat with children near the park: kids menu, high chairs and stroller space (verify in advance).',
      intro:
        'For lunch or dinner with children, look for places with a kids menu and space. Here is how to choose and what to check.',
      sections: [
        {
          heading: 'What to look for',
          body: 'High chairs, a kids menu and room for a stroller are signs of a family-friendly place.',
        },
        {
          heading: 'Where',
          body: 'The pedestrian street and Kapana offer many family-oriented options.',
        },
        {
          heading: 'Checks',
          body: 'Confirm the kids menu and high chairs at the venue before you go; do not rely on online info alone.',
        },
      ],
      faq: [
        {
          question: 'Is there a kids menu?',
          answer: 'Ask the venue – it is not guaranteed everywhere.',
        },
        {
          question: 'Is it stroller-friendly?',
          answer: 'The main alleys and the pedestrian street are flat and convenient.',
        },
        {
          question: 'Are there high chairs?',
          answer: 'Verify with the specific venue in advance.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '适合家庭的餐厅',
      description:
        '公园附近适合带儿童的餐厅：儿童友好设施、菜单与实用建议。',
      intro:
        '带家人出游时，选择一家儿童友好的餐厅能让行程更轻松。以下给出通用建议。',
      sections: [
        {
          heading: '儿童友好',
          body: '许多市中心餐厅提供高脚椅与儿童菜单，但具体情况我们未独立核实，请在现场确认。',
        },
        {
          heading: '菜单选择',
          body: '保加利亚菜中烤蔬菜、烤肉与面食通常适合儿童；也可找到披萨等熟悉口味。',
        },
        {
          heading: '建议',
          body: '优先选择宽敞、靠近公园的餐厅，便于孩子休息与活动。',
        },
      ],
      faq: [
        {
          question: '哪里适合带孩子？',
          answer: '市中心与卡帕纳有不少家庭友好型餐厅；具体设施请现场确认。',
        },
        {
          question: '有儿童菜单吗？',
          answer: '部分餐厅提供，但未必普遍，建议入座前询问。',
        },
        {
          question: '靠近公园吗？',
          answer: '步行街与公园周边都有，方便散步后用餐。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'food/hemingway',
    group: 'food',
    priority: 2,
    bg: {
      title: 'Ресторант „Хемингуей“ – маршрут от парка',
      description:
        '„Хемингуей“ (ул. „Гурко“ 10): как да стигнете от парка, какво предлага и с какво да го съчетаете. Цени и часове – проверете на място.',
      intro:
        '„Хемингуей“ е известен ресторант в центъра на Пловдив с адрес ул. „Гурко“ 10. Тази страница е независимо описание на маршрута и контекста, не е препоръка.',
      sections: [
        {
          heading: 'Къде е и как да стигнете',
          body: 'Адресът е ул. „Гурко“ 10. От парка се стига пеша за около 10–15 минути през Централния площад и пешеходната улица.',
        },
        {
          heading: 'Какво предлага',
          body: 'Менюто съчетава международни и български ястия. Точните ястия, цени и часове не сме проверили самостоятелно – проверете ги на място или в официалния профил.',
        },
        {
          heading: 'Съчетание с парка',
          body: 'Удобно е след разходката или като спирка преди вечерните фонтани; резервирайте при по-натоварени часове.',
        },
      ],
      faq: [
        {
          question: 'Колко е далеч от парка?',
          answer: 'На около 10–15 минути пеша през центъра.',
        },
        {
          question: 'Трябва ли резервация?',
          answer: 'Препоръчва се при пикови часове; проверете с ресторанта.',
        },
        {
          question: 'Скъпо ли е?',
          answer: 'Проверете цените на място преди посещение.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Hemingway Restaurant – Route from the Park',
      description:
        'Hemingway (Gurko St 10): how to get there from the park, what it offers, and how to combine it. Prices and hours – verify on site.',
      intro:
        'Hemingway is a well-known restaurant in central Plovdiv at Gurko St 10. This page is an independent description of the route and context, not a recommendation.',
      sections: [
        {
          heading: 'Where & how to get there',
          body: 'The address is Gurko St 10. From the park it is about a 10–15 minute walk via the Central Square and the pedestrian street.',
        },
        {
          heading: 'What it offers',
          body: 'The menu mixes international and Bulgarian dishes. We have not independently verified the exact dishes, prices and hours – check on site or on the official profile.',
        },
        {
          heading: 'Combine with the park',
          body: 'It works well after a walk or as a stop before the evening fountains; reserve at busy times.',
        },
      ],
      faq: [
        {
          question: 'How far is it from the park?',
          answer: 'About a 10–15 minute walk through the centre.',
        },
        {
          question: 'Do I need a reservation?',
          answer: 'Recommended at peak times; check with the restaurant.',
        },
        {
          question: 'Is it expensive?',
          answer: 'Check the prices on site before visiting.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: 'Hemingway（Gurko 10）',
      description:
        '花园附近的 Hemingway 餐厅：位置、菜系与发布前需复核的营业状态。',
      intro:
        'Hemingway 是公园附近一家知名餐厅。本站为独立第三方，以下信息需你在到访前复核。',
      sections: [
        {
          heading: '位置',
          body: '位于 Gurko 街 10 号，距公园步行可达；请在地图上确认最新地址。',
        },
        {
          heading: '菜系',
          body: '提供国际与保加利亚融合菜；具体菜单与价格请现场或官方渠道核实。',
        },
        {
          heading: '重要提示',
          body: '营业状态、菜单与地址可能变化，本页不保证实时准确——请出发前自行核实。',
        },
      ],
      faq: [
        {
          question: 'Hemingway 在哪里？',
          answer: 'Gurko 街 10 号；请在地图或官方渠道确认最新位置。',
        },
        {
          question: '营业吗？',
          answer: '我们未实时核实其营业状态，请到访前自行确认。',
        },
        {
          question: '需要预订吗？',
          answer: '建议旺季提前预订，并通过官方渠道确认。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'food/smokini',
    group: 'food',
    priority: 2,
    bg: {
      title: 'Ресторант „Смокини“ – маршрут от парка',
      description:
        '„Смокини“: локация, кухня и как да го включите в разходката си. Часове и меню – проверете на място.',
      intro:
        '„Смокини“ е популярен ресторант в Пловдив. Тук описваме маршрута от парка и контекста; не сме проверили самостоятелно менюто и часовете.',
      sections: [
        {
          heading: 'Локация',
          body: 'Ресторантът е в центъра на Пловдив; от парка се стига пеша през пешеходната улица за около 10–15 минути.',
        },
        {
          heading: 'Кухня',
          body: 'Предлага съвременна българска и интернационална кухня (проверете менюто на място).',
        },
        {
          heading: 'Маршрут',
          body: 'Удобно се съчетава с Капана и Стария град като част от целодневна обиколка.',
        },
      ],
      faq: [
        {
          question: 'Далеч ли е от парка?',
          answer: 'На около 10–15 минути пеша.',
        },
        {
          question: 'Каква кухня е?',
          answer: 'Съвременна българска и интернационална; проверете менюто на място.',
        },
        {
          question: 'Трябва ли резервация?',
          answer: 'Препоръчва се при пикови часове; проверете с ресторанта.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Smokini Restaurant – Route from the Park',
      description:
        'Smokini: location, cuisine and how to include it in your walk. Hours and menu – verify on site.',
      intro:
        'Smokini is a popular restaurant in Plovdiv. Here we describe the route from the park and the context; we have not independently verified the menu and hours.',
      sections: [
        {
          heading: 'Location',
          body: 'The restaurant is in central Plovdiv; from the park it is about a 10–15 minute walk via the pedestrian street.',
        },
        {
          heading: 'Cuisine',
          body: 'It serves modern Bulgarian and international cuisine (check the menu on site).',
        },
        {
          heading: 'Route',
          body: 'It pairs well with Kapana and the Old Town as part of a full-day tour.',
        },
      ],
      faq: [
        {
          question: 'Is it far from the park?',
          answer: 'About a 10–15 minute walk.',
        },
        {
          question: 'What kind of cuisine?',
          answer: 'Modern Bulgarian and international; check the menu on site.',
        },
        {
          question: 'Do I need a reservation?',
          answer: 'Recommended at peak times; check with the restaurant.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: 'Smokini（公园附近餐厅）',
      description: 'Smokini 餐厅的位置、菜系与发布前需复核的营业状态。',
      intro:
        'Smokini 是花园附近的一家餐厅。作为独立第三方站点，以下信息请以到访前复核为准。',
      sections: [
        {
          heading: '位置',
          body: '靠近沙皇西美昂花园；具体地址请在地图或官方渠道确认。',
        },
        {
          heading: '菜系',
          body: '提供保加利亚与国际菜；菜单与价格会变动，请现场核实。',
        },
        {
          heading: '重要提示',
          body: '营业状态与地址可能变化，本页不保证实时准确，请出发前自行核实。',
        },
      ],
      faq: [
        {
          question: 'Smokini 在哪里？',
          answer: '靠近花园；具体地址请以地图或官方信息为准。',
        },
        {
          question: '还营业吗？',
          answer: '我们未实时核实其营业状态，请到访前确认。',
        },
        {
          question: '需要预订吗？',
          answer: '建议旺季提前预订并通过官方渠道确认。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'food/central-park-restaurant',
    group: 'food',
    priority: 2,
    bg: {
      title: 'Central Park (ресторант, ул. „Филип Македонски“ 1) – не е паркът',
      description:
        'Central Park ресторант (ул. „Филип Македонски“ 1): локация, маршрут от парка и уточнение, че това е заведение, а не градският парк.',
      intro:
        '„Central Park“ е име на ресторант в Пловдив (ул. „Филип Македонски“ 1), а не на самия Цар Симеонова градина. Страницата помага да не се объркват двете.',
      sections: [
        {
          heading: 'Къде е',
          body: 'Адресът е ул. „Филип Македонски“ 1. Заведението не е вътре в парка.',
        },
        {
          heading: 'Маршрут от парка',
          body: 'Пеша или с автобус от центъра; точното разстояние и време проверете на място.',
        },
        {
          heading: 'Какво е',
          body: 'Това е ресторант/кафене (проверете типа на място), а не градският парк с фонтаните.',
        },
      ],
      faq: [
        {
          question: 'Central Park това самият парк ли е?',
          answer: 'Не – това е име на ресторант, а не на градския парк.',
        },
        {
          question: 'Колко е далеч от парка?',
          answer: 'Проверете точното разстояние на място.',
        },
        {
          question: 'Трябва ли резервация?',
          answer: 'Проверете с ресторанта предварително.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Central Park Restaurant (Filip Makedonski 1) – not the park',
      description:
        'Central Park restaurant (Filip Makedonski St 1): location, route from the park, and a note that this is a venue, not the city park.',
      intro:
        'Central Park is the name of a restaurant in Plovdiv (Filip Makedonski St 1), not the Tsar Simeon Garden itself. This page helps avoid confusing the two.',
      sections: [
        {
          heading: 'Where it is',
          body: 'The address is Filip Makedonski St 1. The venue is not inside the park.',
        },
        {
          heading: 'Route from the park',
          body: 'On foot or by bus from the centre; check the exact distance and time on site.',
        },
        {
          heading: 'What it is',
          body: 'This is a restaurant/café (verify the type on site), not the city park with the fountains.',
        },
      ],
      faq: [
        {
          question: 'Is Central Park the park itself?',
          answer: 'No – it is a restaurant name, not the city park.',
        },
        {
          question: 'How far from the park?',
          answer: 'Check the exact distance on site.',
        },
        {
          question: 'Do I need a reservation?',
          answer: 'Check with the restaurant in advance.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: 'Central Park（Filip Makedonski 1）',
      description:
        'Central Park 餐厅的位置、菜系与发布前需复核的营业状态。',
      intro:
        'Central Park 是花园附近一家餐厅（Filip Makedonski 街 1 号）。本站为独立第三方，信息需到访前复核。',
      sections: [
        {
          heading: '位置',
          body: '位于 Filip Makedonski 街 1 号，距公园不远；请在地图上确认最新地址。',
        },
        {
          heading: '菜系',
          body: '提供国际与保加利亚菜；具体菜单与价格请现场或官方渠道核实。',
        },
        {
          heading: '重要提示',
          body: '营业状态、菜单与地址可能变化，本页不保证实时准确——请出发前自行核实。',
        },
      ],
      faq: [
        {
          question: 'Central Park 在哪里？',
          answer: 'Filip Makedonski 街 1 号；请在地图或官方渠道确认最新位置。',
        },
        {
          question: '营业吗？',
          answer: '我们未实时核实其营业状态，请到访前自行确认。',
        },
        {
          question: '需要预订吗？',
          answer: '建议旺季提前预订，并通过官方渠道确认。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'nearby/roman-odeon',
    group: 'nearby',
    priority: 2,
    bg: {
      title: 'Римски одеон (Пловдив)',
      description:
        'Римският одеон: какво е, как се различава от Античния театър и как да го разгледате след парка.',
      intro:
        'Одеонът е малък закрит римски театър в центъра на Пловдив, често бъркан с Античния театър. Тази страница обяснява разликата и маршрута.',
      sections: [
        {
          heading: 'Какво е',
          body: 'Одеонът е малък покрит римски театър, използван за музика и събрания, разкрит близо до пешеходната улица и форума.',
        },
        {
          heading: 'Разлика от театъра',
          body: 'Одеонът е по-малък и покрит, докато Античният театър е голям и открит. Двата са различни обекта.',
        },
        {
          heading: 'Маршрут',
          body: 'От парка тръгнете към Централния площад и форума – около 5–10 минути пеша.',
        },
      ],
      faq: [
        {
          question: 'Одеонът и театърът едно и също ли са?',
          answer: 'Не – одеонът е малък покрит театър, а Античният театър е голям открит.',
        },
        {
          question: 'Безплатен ли е?',
          answer: 'Откритите части обикновено се разглеждат безплатно; за вътрешни експозиции проверете.',
        },
        {
          question: 'Къде точно е?',
          answer: 'Близо до пешеходната улица и римския форум в центъра.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Roman Odeon (Plovdiv)',
      description:
        'The Roman Odeon: what it is, how it differs from the Ancient Theatre, and how to visit it after the park.',
      intro:
        'The Odeon is a small covered Roman theatre in central Plovdiv, often confused with the Ancient Theatre. This page explains the difference and the route.',
      sections: [
        {
          heading: 'What it is',
          body: 'The Odeon is a small covered Roman theatre used for music and meetings, excavated near the pedestrian street and the forum.',
        },
        {
          heading: 'Difference from the theatre',
          body: 'The Odeon is smaller and roofed, while the Ancient Theatre is large and open. They are different monuments.',
        },
        {
          heading: 'Route',
          body: 'From the park head to the Central Square and the forum – about a 5–10 minute walk.',
        },
      ],
      faq: [
        {
          question: 'Is the Odeon the same as the theatre?',
          answer: 'No – the Odeon is a small roofed theatre, while the Ancient Theatre is large and open.',
        },
        {
          question: 'Is it free?',
          answer: 'The open-air parts are usually free to view; check indoor exhibitions.',
        },
        {
          question: 'Where exactly is it?',
          answer: 'Near the pedestrian street and the Roman Forum in the centre.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '罗马奥德翁（附近古迹）',
      description:
        '菲利波波利斯的罗马奥德翁：位置、简介、是否免费，以及从公园如何前往。',
      intro:
        '奥德翁是古城菲利波波利斯的小型罗马剧场遗迹，距花园步行不远。',
      sections: [
        {
          heading: '位置与简介',
          body: '奥德翁是用于音乐与演出的小型罗马剧场，在市中心部分发掘、部分修复。',
        },
        {
          heading: '进入与票价',
          body: '通常为露天考古遗址，可从外部免费观看；室内或围合区域请现场核实门票。',
        },
        {
          heading: '从公园前往',
          body: '从公园走向市中心与步行街，步行约 5–10 分钟。',
        },
      ],
      faq: [
        {
          question: '奥德翁免费吗？',
          answer: '露天部分通常可免费观看；围合区域请现场核实门票。',
        },
        {
          question: '它和罗马剧场是一处吗？',
          answer: '不是——奥德翁是较小的音乐剧场，与大型罗马剧场是不同遗迹。',
        },
        {
          question: '从公园怎么走？',
          answer: '向市中心步行约 5–10 分钟即可到达。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'nearby/bishops-basilica',
    group: 'nearby',
    priority: 2,
    bg: {
      title: 'Епископската базилика (мозайките на Филипопол)',
      description:
        'Епископската базилика и мозайките на Филипопол: мозайки, посещение и маршрут от парка.',
      intro:
        'Епископската базилика е един от най-големите раннохристиянски храмове с впечатляващи мозайки, разкрит близо до центъра. Ето как да я включите.',
      sections: [
        {
          heading: 'Какво е',
          body: 'Раннохристиянска базилика с богати мозайки; днес е археологически обект с покрита експозиция.',
        },
        {
          heading: 'Посещение',
          body: 'За закритата експозиция вероятно се плаща билет; проверете часовете и цените на място.',
        },
        {
          heading: 'Маршрут',
          body: 'От парка се стига пеша за около 10–15 минути в посока центъра/реката.',
        },
      ],
      faq: [
        {
          question: 'Има ли мозайки?',
          answer: 'Да, базиликата е известна с добре запазени раннохристиянски мозайки.',
        },
        {
          question: 'Има ли билет?',
          answer: 'За закритата експозиция вероятно се плаща; проверете цените на място.',
        },
        {
          question: 'Колко време е нужно?',
          answer: 'Около 1 час за самостоятелен оглед.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Bishops Basilica (Mosaics of Philippopolis)',
      description:
        'The Bishops Basilica and the mosaics of Philippopolis: mosaics, visiting, and route from the park.',
      intro:
        'The Bishops Basilica is one of the largest Early Christian churches, with impressive mosaics, excavated near the centre. Here is how to include it.',
      sections: [
        {
          heading: 'What it is',
          body: 'An Early Christian basilica with rich mosaics; today it is an archaeological site with a covered exhibition.',
        },
        {
          heading: 'Visiting',
          body: 'The covered exhibition likely charges a ticket; check hours and prices on site.',
        },
        {
          heading: 'Route',
          body: 'From the park it is about a 10–15 minute walk towards the centre/river.',
        },
      ],
      faq: [
        {
          question: 'Are there mosaics?',
          answer: 'Yes, the basilica is known for well-preserved Early Christian mosaics.',
        },
        {
          question: 'Is there a ticket?',
          answer: 'The covered exhibition likely charges; check prices on site.',
        },
        {
          question: 'How long does it take?',
          answer: 'About 1 hour for a self-guided visit.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '主教巴西利卡（大巴西利卡）',
      description: '大巴西利卡的早期基督教马赛克：位置、展览与从公园如何前往。',
      intro:
        '主教巴西利卡（Great Basilica）是普罗夫迪夫重要的早期基督教遗迹，以其马赛克地板闻名。',
      sections: [
        {
          heading: '位置与简介',
          body: '位于市中心，是大型的早期基督教巴西利卡遗址，地下展出了精美的马赛克。',
        },
        {
          heading: '进入与票价',
          body: '设有室内展览空间，通常会收费；具体门票请现场核实。',
        },
        {
          heading: '从公园前往',
          body: '从公园走向市中心，步行约 10–15 分钟。',
        },
      ],
      faq: [
        {
          question: '马赛克值得看吗？',
          answer: '是的，其早期基督教马赛克是该遗址的核心看点。',
        },
        {
          question: '需要门票吗？',
          answer: '室内展览通常收费；请现场核实最新价格。',
        },
        {
          question: '从公园怎么走？',
          answer: '向市中心步行约 10–15 分钟。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'nearby/central-square',
    group: 'nearby',
    priority: 2,
    bg: {
      title: 'Централен площад (Пловдив)',
      description:
        'Централният площад: връзката между парка и града, забележителности наоколо и почивка.',
      intro:
        'Централният площад е сърцето на Пловдив и основната връзка между парка и пешеходната зона. Тази страница обяснява ролята му.',
      sections: [
        {
          heading: 'Роля',
          body: 'Северният вход на парка излиза точно на Централния площад, откъдето започва пешеходната улица.',
        },
        {
          heading: 'Наколо',
          body: 'Около площада са Централната поща, монументи и спирки на градския транспорт.',
        },
        {
          heading: 'Почивка',
          body: 'Има пейки и фонтани – удобна междинна спирка между парка и центъра.',
        },
      ],
      faq: [
        {
          question: 'Далеч ли е от парка?',
          answer: 'Прилежащ е – северният вход на парка излиза на площада.',
        },
        {
          question: 'Какво има наоколо?',
          answer: 'Пешеходната улица, пощата и транспортни спирки.',
        },
        {
          question: 'Подходящ ли е за почивка?',
          answer: 'Да – с пейки и фонтани в центъра на града.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Central Square (Plovdiv)',
      description:
        'The Central Square: the link between the park and the city, nearby sights, and a place to rest.',
      intro:
        'The Central Square is the heart of Plovdiv and the main link between the park and the pedestrian zone. This page explains its role.',
      sections: [
        {
          heading: 'Its role',
          body: 'The park’s north entrance opens right onto the Central Square, from where the pedestrian street begins.',
        },
        {
          heading: 'Around it',
          body: 'Around the square are the Central Post Office, monuments and public transport stops.',
        },
        {
          heading: 'Rest',
          body: 'There are benches and fountains – a convenient stop between the park and the centre.',
        },
      ],
      faq: [
        {
          question: 'Is it far from the park?',
          answer: 'It is adjacent – the park’s north entrance opens onto the square.',
        },
        {
          question: 'What is around it?',
          answer: 'The pedestrian street, the post office and transport stops.',
        },
        {
          question: 'Good for a rest?',
          answer: 'Yes – with benches and fountains in the city centre.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '中央广场（Tsentralen 广场）',
      description:
        '普罗夫迪夫中央广场：看点、休息处，以及从公园如何前往。',
      intro:
        '中央广场（Tsentralen）是普罗夫迪夫的城市中心，连接花园、步行街与公共交通。',
      sections: [
        {
          heading: '看点',
          body: '广场是城市的集会核心，周边有喷泉、雕塑与商店，也是前往步行街的入口。',
        },
        {
          heading: '休息与设施',
          body: '有许多坐椅与遮荫处，是公园与老城之间的方便折中点。',
        },
        {
          heading: '从公园前往',
          body: '从花园的中央广场入口出发，步行仅几分钟。',
        },
      ],
      faq: [
        {
          question: '广场离公园近吗？',
          answer: '很近，从花园北入口步行几分钟即到。',
        },
        {
          question: '广场有什么？',
          answer: '喷泉、雕塑、商店与前往步行街的入口。',
        },
        {
          question: '中央广场就是花园入口吗？',
          answer: '花园的北入口直接面向中央广场，两者相邻。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'nearby/roman-stadium',
    group: 'nearby',
    priority: 2,
    bg: {
      title: 'Римски стадион (Пловдив)',
      description:
        'Римският стадион: какво е, къде е изложен и как да го разгледате безплатно след парка.',
      intro:
        'Римският стадион е антично съоръжение, чиято част е разкрита под площада до пешеходната улица. Тази страница обяснява какво да видите.',
      sections: [
        {
          heading: 'Какво е',
          body: 'Античен римски стадион, чиято част е запазена под съвременния площад до пешеходната улица.',
        },
        {
          heading: 'Къде',
          body: 'Видим е от стъклена конструкция до площада на пешеходната улица; част от трибуните са експонирани.',
        },
        {
          heading: 'Маршрут',
          body: 'От парка тръгнете през Централния площад – около 10 минути пеша.',
        },
      ],
      faq: [
        {
          question: 'Безплатен ли е?',
          answer: 'Откритата част се разглежда безплатно; по-голямата част е под площада.',
        },
        {
          question: 'Къде точно е?',
          answer: 'До пешеходната улица, видим през стъклена конструкция.',
        },
        {
          question: 'Запазен ли е целият?',
          answer: 'Не – експонирана е само част, останалото е под съвременния площад.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Roman Stadium (Plovdiv)',
      description:
        'The Roman Stadium: what it is, where it is displayed, and how to view it for free after the park.',
      intro:
        'The Roman Stadium is an ancient structure, part of which is excavated beneath the square by the pedestrian street. This page explains what to see.',
      sections: [
        {
          heading: 'What it is',
          body: 'An ancient Roman stadium, part of which is preserved beneath the modern square by the pedestrian street.',
        },
        {
          heading: 'Where',
          body: 'Visible through a glass structure by the pedestrian-street square; some of the seating is on display.',
        },
        {
          heading: 'Route',
          body: 'From the park go via the Central Square – about a 10 minute walk.',
        },
      ],
      faq: [
        {
          question: 'Is it free?',
          answer: 'The open-air part is free to view; most of it is under the square.',
        },
        {
          question: 'Where exactly is it?',
          answer: 'By the pedestrian street, visible through a glass structure.',
        },
        {
          question: 'Is the whole thing preserved?',
          answer: 'No – only a part is displayed; the rest is under the modern square.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '罗马体育场（附近古迹）',
      description:
        '菲利波波利斯的罗马体育场：位置、简介、是否免费，以及从公园如何前往。',
      intro:
        '罗马体育场是古城的大型运动场遗迹，部分在今日街道下方可见，距花园步行不远。',
      sections: [
        {
          heading: '位置与简介',
          body: '体育场为古罗马运动场，现在部分段落嵌在现代街道之间，以玻璃覆盖的展示段呈现。',
        },
        {
          heading: '进入与票价',
          body: '露天展示段落通常可免费观看；具体安排请现场核实。',
        },
        {
          heading: '从公园前往',
          body: '从公园走向中央广场与步行街，步行约 5–10 分钟。',
        },
      ],
      faq: [
        {
          question: '体育场免费吗？',
          answer: '露天展示段通常可免费观看。',
        },
        {
          question: '它是竞技场吗？',
          answer: '不是——它是运动场（跑道型），与角斗士竞技场不同。',
        },
        {
          question: '从公园怎么走？',
          answer: '向中央广场方向步行约 5–10 分钟。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'nearby/dzhumaya-mosque',
    group: 'nearby',
    priority: 2,
    bg: {
      title: 'Джумая джамия и площад',
      description:
        'Джумая джамия: история, архитектура, посещение и маршрут от парка.',
      intro:
        'Джумая джамия е османска джамия на едноименния площад в центъра, близо до пешеходната улица. Тази страница обяснява какво да знаете.',
      sections: [
        {
          heading: 'Какво е',
          body: 'Османска джамия от 15–16 век, все още действащо място за молитва в центъра на Пловдив.',
        },
        {
          heading: 'Посещение',
          body: 'Като действащ храм, посещавайте с уважение към облеклото и молитвените времена; проверете часовете за не-вярващи.',
        },
        {
          heading: 'Маршрут',
          body: 'От парка през Централния площад и пешеходната улица – около 10 минути пеша.',
        },
      ],
      faq: [
        {
          question: 'Мога ли да я посетя?',
          answer: 'Като действащ храм – с уважение към облеклото и молитвените времена.',
        },
        {
          question: 'Има ли код за облекло?',
          answer: 'Да – скромно облекло е уместно; проверете часовете за посещение.',
        },
        {
          question: 'Къде е?',
          answer: 'На площад „Джумая“, близо до пешеходната улица.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Dzhumaya Mosque & Square',
      description:
        'Dzhumaya Mosque: history, architecture, visiting, and route from the park.',
      intro:
        'Dzhumaya Mosque is an Ottoman mosque on the square of the same name in the centre, near the pedestrian street. This page explains what to know.',
      sections: [
        {
          heading: 'What it is',
          body: 'An Ottoman mosque from the 15th–16th century, still an active place of worship in central Plovdiv.',
        },
        {
          heading: 'Visiting',
          body: 'As an active mosque, visit with respect for dress and prayer times; check visiting hours for non-worshippers.',
        },
        {
          heading: 'Route',
          body: 'From the park via the Central Square and the pedestrian street – about a 10 minute walk.',
        },
      ],
      faq: [
        {
          question: 'Can I visit it?',
          answer: 'As an active mosque – with respect for dress and prayer times.',
        },
        {
          question: 'Is there a dress code?',
          answer: 'Yes – modest dress is appropriate; check visiting hours.',
        },
        {
          question: 'Where is it?',
          answer: 'On Dzhumaya Square, near the pedestrian street.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '久马亚清真寺',
      description: '久马亚清真寺的位置、历史，以及从公园如何前往。',
      intro:
        '久马亚清真寺（Dzhumaya）是普罗夫迪夫市中心一座历史悠久的奥斯曼清真寺。',
      sections: [
        {
          heading: '位置与简介',
          body: '位于市中心，是保加利亚保存较好的奥斯曼时期清真寺之一。',
        },
        {
          heading: '进入',
          body: '作为宗教场所，开放时间与进入规定请现场或官方渠道核实。',
        },
        {
          heading: '从公园前往',
          body: '从花园走向中央广场与步行街，步行约 5–10 分钟。',
        },
      ],
      faq: [
        {
          question: '清真寺可以参观吗？',
          answer: '开放时间请现场或官方渠道核实，并请尊重宗教场所礼仪。',
        },
        {
          question: '离公园近吗？',
          answer: '从花园步行约 5–10 分钟。',
        },
        {
          question: '它的历史？',
          answer: '它是奥斯曼时期留下的清真寺，是市中心的地标之一。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'nearby/kapana',
    group: 'nearby',
    priority: 2,
    bg: {
      title: 'Капана (творческият квартал)',
      description:
        'Капана: кафенета, магазинчета и улично изкуство близо до парка – как да я разгледате.',
      intro:
        'Капана е творческият квартал на Пловдив с кафенета, галерии и магазинчета за ръчно изработени изделия. Тя е на няколко минути от парка.',
      sections: [
        {
          heading: 'Какво е',
          body: 'Квартал с тесни улички, кафенета, галерии и магазинчета за изкуство и занаяти.',
        },
        {
          heading: 'Какво да правите',
          body: 'Пийте кафе, разгледайте бутици и улично изкуство; често има събития и пазари.',
        },
        {
          heading: 'Маршрут',
          body: 'От парка през пешеходната улица – около 10 минути пеша.',
        },
      ],
      faq: [
        {
          question: 'Какво има в Капана?',
          answer: 'Кафенета, галерии, магазинчета за изкуство и занаяти.',
        },
        {
          question: 'Далеч ли е от парка?',
          answer: 'На около 10 минути пеша през центъра.',
        },
        {
          question: 'Подходяща ли е за деца?',
          answer: 'Да – плоска и с много неща за разглеждане.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Kapana (the Creative District)',
      description:
        'Kapana: cafés, shops and street art near the park – how to explore it.',
      intro:
        'Kapana is Plovdiv’s creative district with cafés, galleries and craft shops. It is a few minutes from the park.',
      sections: [
        {
          heading: 'What it is',
          body: 'A district of narrow streets, cafés, galleries and craft shops.',
        },
        {
          heading: 'What to do',
          body: 'Have coffee, browse boutiques and street art; there are often events and markets.',
        },
        {
          heading: 'Route',
          body: 'From the park via the pedestrian street – about a 10 minute walk.',
        },
      ],
      faq: [
        {
          question: 'What is in Kapana?',
          answer: 'Cafés, galleries, art and craft shops.',
        },
        {
          question: 'Is it far from the park?',
          answer: 'About a 10 minute walk through the centre.',
        },
        {
          question: 'Is it good for children?',
          answer: 'Yes – flat and full of things to see.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '卡帕纳创意街区',
      description: '卡帕纳（Kapana）艺术街区：看点、餐饮与从公园如何前往。',
      intro:
        '卡帕纳（“捕鼠器”之意）是普罗夫迪夫充满色彩与创意的工作室、画廊与咖啡馆街区。',
      sections: [
        {
          heading: '看点',
          body: '色彩斑斓的外墙、独立画廊、手作小店与设计工作室是这里的特色。',
        },
        {
          heading: '餐饮',
          body: '街区内有许多咖啡馆、精酿酒吧与餐厅，是午餐与夜生活的热门地。',
        },
        {
          heading: '从公园前往',
          body: '从花园向南走向步行街，再进入卡帕纳，步行约 5–10 分钟。',
        },
      ],
      faq: [
        {
          question: '卡帕纳是什么？',
          answer: '它是市中心一处以艺术、设计和咖啡馆闻名的创意街区。',
        },
        {
          question: '离公园怎么走？',
          answer: '沿步行街向南步行约 5–10 分钟。',
        },
        {
          question: '值得花时间吗？',
          answer: '值得——尤其适合喜欢画廊、咖啡与街头艺术的人。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'nearby/old-town',
    group: 'nearby',
    priority: 2,
    bg: {
      title: 'Старият град на Пловдив',
      description:
        'Старият град: маршрут от парка, възрожденски къщи, хълм Небетте и предупреждение за наклона.',
      intro:
        'Старият град е на хълма с възрожденска архитектура и панорама. От парка се стига пеша, но има наклон – планирайте време.',
      sections: [
        {
          heading: 'Какво е',
          body: 'Исторически хълм с възрожденски къщи-музеи, църкви и панорама към града.',
        },
        {
          heading: 'Маршрут',
          body: 'От парка пеша около 15–20 минути нагоре, или с автобус/такси до подножието.',
        },
        {
          heading: 'Предупреждения',
          body: 'Има наклон и стъпала; носете удобни обувки. Някои къщи-музеи са платени – проверете.',
        },
      ],
      faq: [
        {
          question: 'Колко е пеша от парка?',
          answer: 'Около 15–20 минути пеша нагоре.',
        },
        {
          question: 'Какво да се види?',
          answer: 'Възрожденски къщи-музеи, църкви и панорама от хълма Небетте.',
        },
        {
          question: 'Има ли билети?',
          answer: 'Някои къщи-музеи са платени; проверете цените на място.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Plovdiv Old Town',
      description:
        'The Old Town: route from the park, Revival houses, Nebet Tepe hill, and a slope warning.',
      intro:
        'The Old Town is on the hill with Revival architecture and a panorama. You can walk from the park, but there is a slope – plan time.',
      sections: [
        {
          heading: 'What it is',
          body: 'A historic hill with Revival-era house-museums, churches and a city panorama.',
        },
        {
          heading: 'Route',
          body: 'From the park about a 15–20 minute uphill walk, or bus/taxi to the foot.',
        },
        {
          heading: 'Warnings',
          body: 'There is a slope and steps; wear comfortable shoes. Some house-museums charge – check.',
        },
      ],
      faq: [
        {
          question: 'How far on foot from the park?',
          answer: 'About a 15–20 minute uphill walk.',
        },
        {
          question: 'What to see?',
          answer: 'Revival house-museums, churches and the Nebet Tepe panorama.',
        },
        {
          question: 'Are there tickets?',
          answer: 'Some house-museums charge; check prices on site.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '老城（Staria Grad）',
      description: '普罗夫迪夫老城：历史建筑、民族志博物馆与从公园如何前往。',
      intro:
        '老城（Staria Grad）是普罗夫迪夫保存完好的历史街区，以复原的保加利亚文艺复兴时期宅邸著称。',
      sections: [
        {
          heading: '看点',
          body: '民族志博物馆（Ethnographic Museum）、古剧场与彩色宅邸是主要亮点。',
        },
        {
          heading: '进入与票价',
          body: '宅邸与博物馆通常收费；具体门票请现场核实。',
        },
        {
          heading: '从公园前往',
          body: '从花园沿坡向老城方向步行约 10–15 分钟。',
        },
      ],
      faq: [
        {
          question: '老城有什么？',
          answer: '文艺复兴时期的宅邸、博物馆与古城剧场。',
        },
        {
          question: '需要门票吗？',
          answer: '室内博物馆与宅邸通常收费；请现场核实。',
        },
        {
          question: '从公园怎么走？',
          answer: '向老城方向步行约 10–15 分钟，部分路段有坡度。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'nearby/ancient-theatre',
    group: 'nearby',
    priority: 2,
    bg: {
      title: 'Античният театър (Пловдив)',
      description:
        'Античният театър: посещение, билети, представления и маршрут от парка – отделно от одеона.',
      intro:
        'Античният театър е един от най-добре запазените римски театри, на южния склон на Трихълмието. Тази страница обяснява посещението и разликата от одеона.',
      sections: [
        {
          heading: 'Какво е',
          body: 'Добре запазен римски театър, все още използван за представления през лятото.',
        },
        {
          heading: 'Посещение',
          body: 'За оглед се плаща билет; представленията са отделни и с вход. Проверете цените и часовете.',
        },
        {
          heading: 'Маршрут',
          body: 'От парка пеша около 15–20 минути нагоре към Трихълмието.',
        },
      ],
      faq: [
        {
          question: 'Трябва ли билет?',
          answer: 'Да – за посещение на театъра се плаща; представленията се билетират отделно.',
        },
        {
          question: 'Има ли представления?',
          answer: 'През лятото има концерти и спектакли; проверете програмата.',
        },
        {
          question: 'Далеч ли е от парка?',
          answer: 'Около 15–20 минути пеша нагоре.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Ancient Theatre (Plovdiv)',
      description:
        'The Ancient Theatre: visiting, tickets, performances and route from the park – separate from the Odeon.',
      intro:
        'The Ancient Theatre is one of the best-preserved Roman theatres, on the southern slope of the Three Hills. This page explains the visit and the difference from the Odeon.',
      sections: [
        {
          heading: 'What it is',
          body: 'A well-preserved Roman theatre, still used for performances in summer.',
        },
        {
          heading: 'Visiting',
          body: 'A ticket is charged for a visit; performances are separate and ticketed. Check prices and hours.',
        },
        {
          heading: 'Route',
          body: 'From the park about a 15–20 minute uphill walk towards the Three Hills.',
        },
      ],
      faq: [
        {
          question: 'Do I need a ticket?',
          answer: 'Yes – visiting the theatre charges; performances are ticketed separately.',
        },
        {
          question: 'Are there performances?',
          answer: 'In summer there are concerts and shows; check the programme.',
        },
        {
          question: 'Is it far from the park?',
          answer: 'About a 15–20 minute uphill walk.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '古罗马剧场',
      description:
        '普罗夫迪夫古罗马剧场：位置、简介、是否免费，以及从公园如何前往。',
      intro:
        '古罗马剧场是菲利波波利斯最著名的古迹之一，依山而建、保存完好，距花园不远。',
      sections: [
        {
          heading: '位置与简介',
          body: '剧场建于罗马时期，坐落在老城山坡，是城市最具标志性的古迹。',
        },
        {
          heading: '进入与票价',
          body: '作为活跃的文化场馆，通常收费并可能有演出安排；请现场核实。',
        },
        {
          heading: '从公园前往',
          body: '从花园向老城方向步行约 10–15 分钟，部分路段有坡度。',
        },
      ],
      faq: [
        {
          question: '剧场免费吗？',
          answer: '通常收费；请现场核实门票与演出安排。',
        },
        {
          question: '从公园怎么走？',
          answer: '向老城方向步行约 10–15 分钟。',
        },
        {
          question: '值得一看吗？',
          answer: '值得——它是菲利波波利斯最具代表性的古迹之一。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'nearby/natural-history-museum',
    group: 'nearby',
    priority: 2,
    bg: {
      title: 'Регионален природонаучен музей',
      description:
        'Природонаучният музей: с какво е подходящ за деца, дъждовен ден и как да стигнете от парка.',
      intro:
        'Регионалният природонаучен музей е добър вариант за дъждовен ден или семейства с деца, близо до центъра.',
      sections: [
        {
          heading: 'Какво е',
          body: 'Музей с природонаучни експонати – фауна, минерали и диорами.',
        },
        {
          heading: 'За деца и дъжд',
          body: 'Закрит обект, подходящ за дъждовен ден и любопитни деца.',
        },
        {
          heading: 'Маршрут',
          body: 'От парка пеша около 10–15 минути в посока центъра.',
        },
      ],
      faq: [
        {
          question: 'Подходящ ли е за деца?',
          answer: 'Да – с експонати, които заинтригуват децата.',
        },
        {
          question: 'Добър ли е за дъждовен ден?',
          answer: 'Да – закрит обект в центъра.',
        },
        {
          question: 'Има ли билет?',
          answer: 'Музеите обикновено са платени; проверете цените на място.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Regional Natural History Museum',
      description:
        'The Natural History Museum: why it suits children, a rainy day, and how to reach it from the park.',
      intro:
        'The Regional Natural History Museum is a good option for a rainy day or families with children, near the centre.',
      sections: [
        {
          heading: 'What it is',
          body: 'A museum with natural-history exhibits – fauna, minerals and dioramas.',
        },
        {
          heading: 'For children & rain',
          body: 'An indoor venue, good for a rainy day and curious children.',
        },
        {
          heading: 'Route',
          body: 'From the park about a 10–15 minute walk towards the centre.',
        },
      ],
      faq: [
        {
          question: 'Is it good for children?',
          answer: 'Yes – with exhibits that engage kids.',
        },
        {
          question: 'Good for a rainy day?',
          answer: 'Yes – an indoor venue in the centre.',
        },
        {
          question: 'Is there a ticket?',
          answer: 'Museums usually charge; check prices on site.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '地区自然史博物馆',
      description: '自然史博物馆：展品、亲子与雨天去处，以及从公园如何前往。',
      intro: '地区自然史博物馆是雨天或带儿童出游的不错选择，靠近市中心。',
      sections: [
        {
          heading: '展品',
          body: '馆内有自然史陈列——动物、矿物与生态标本（dioramas）。',
        },
        {
          heading: '亲子与雨天',
          body: '作为室内场馆，适合雨天与好奇的儿童。',
        },
        {
          heading: '从公园前往',
          body: '从花园向市中心步行约 10–15 分钟。',
        },
      ],
      faq: [
        {
          question: '适合儿童吗？',
          answer: '适合——有能吸引孩子的展品。',
        },
        {
          question: '雨天去合适吗？',
          answer: '合适——它是市中心的室内场馆。',
        },
        {
          question: '需要门票吗？',
          answer: '博物馆通常收费；请现场核实价格。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'nearby/sahat-tepe-clock-tower',
    group: 'nearby',
    priority: 2,
    bg: {
      title: 'Сахат тепе и часовниковата кула',
      description:
        'Сахат тепе (часовниковата кула): изглед, стъпала, маршрут от парка и връзка с тройния хълм.',
      intro:
        'Сахат тепе е един от Трите хълма с часовникова кула и панорама към града. От парка се стига пеша с изкачване.',
      sections: [
        {
          heading: 'Какво е',
          body: 'Хълм с историческа часовникова кула и гледка към Пловдив.',
        },
        {
          heading: 'Изкачване',
          body: 'Има стъпала и наклон; не сме проверили самостоятелно достъпността за колички.',
        },
        {
          heading: 'Маршрут',
          body: 'От парка пеша около 15–20 минути нагоре към Трихълмието.',
        },
      ],
      faq: [
        {
          question: 'Има ли стъпала?',
          answer: 'Да, има изкачване със стъпала; проверете достъпността на място.',
        },
        {
          question: 'Има ли хубав изглед?',
          answer: 'Да – от хълма се открива панорама към града.',
        },
        {
          question: 'Колко е пеша от парка?',
          answer: 'Около 15–20 минути нагоре.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Sahat Tepe & the Clock Tower',
      description:
        'Sahat Tepe (the clock tower hill): viewpoint, steps, route from the park, and the link to the Three Hills.',
      intro:
        'Sahat Tepe is one of the Three Hills with a historic clock tower and a city panorama. You can reach it on foot from the park with a climb.',
      sections: [
        {
          heading: 'What it is',
          body: 'A hill with a historic clock tower and a view over Plovdiv.',
        },
        {
          heading: 'The climb',
          body: 'There are steps and a slope; we have not independently verified wheelchair access.',
        },
        {
          heading: 'Route',
          body: 'From the park about a 15–20 minute uphill walk towards the Three Hills.',
        },
      ],
      faq: [
        {
          question: 'Are there steps?',
          answer: 'Yes, there is a stepped climb; check accessibility on site.',
        },
        {
          question: 'Is there a good view?',
          answer: 'Yes – the hill opens a panorama over the city.',
        },
        {
          question: 'How far on foot from the park?',
          answer: 'About a 15–20 minute uphill walk.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '萨哈特山与钟楼',
      description:
        '萨哈特山（钟楼山）：观景、台阶、从公园的路线，与三丘的联系。',
      intro:
        '萨哈特山（Sahat Tepe）是“三丘”之一，山上有历史钟楼与城市全景。从公园可步行登顶。',
      sections: [
        {
          heading: '简介',
          body: '这是一座带有历史钟楼、可俯瞰普罗夫迪夫的山丘。',
        },
        {
          heading: '登顶',
          body: '有台阶与坡道；轮椅可达性我们未独立核实，请在现场确认。',
        },
        {
          heading: '路线',
          body: '从公园向三丘方向步行约 15–20 分钟上坡。',
        },
      ],
      faq: [
        {
          question: '有台阶吗？',
          answer: '有，需拾级而上；请在现场确认可达性。',
        },
        {
          question: '观景好吗？',
          answer: '好——山顶可俯瞰城市全景。',
        },
        {
          question: '从公园步行多远？',
          answer: '约 15–20 分钟上坡。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'routes/plovdiv-one-day',
    group: 'routes',
    priority: 2,
    bg: {
      title: 'Пловдив за един ден: маршрут',
      description:
        'Пълен еднодневен маршрут в Пловдив: парк, Стария град, Капана и центъра в логичен ред.',
      intro:
        'Ако имате цял ден, този маршрут свързва парка със Стария град, Капана и центъра без пренатоварване.',
      sections: [
        {
          heading: 'Маршрут',
          body: 'Сутрин: паркът (около 1 час). Обяд: Капана. Следобед: Старият град и панорамата. Вечер: пешеходната улица и фонтаните (ако са в сезон).',
        },
        {
          heading: 'Време',
          body: 'Цял ден, около 6–8 часа с почивки; започнете рано.',
        },
        {
          heading: 'Съвети',
          answer: 'Носете удобни обувки, проверете програмата на фонтаните и часовете на музеите.',
        },
      ],
      faq: [
        {
          question: 'Стига ли за един ден?',
          answer: 'Да – с добра организация обхваща парка, Стария град и Капана.',
        },
        {
          question: 'Какъв е редът?',
          answer: 'Парк → Капана (обяд) → Стария град → център/фонтани вечер.',
        },
        {
          question: 'Откъде да започна?',
          answer: 'От парка сутринта, докато е хладно.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Plovdiv in One Day: Itinerary',
      description:
        'A full one-day route in Plovdiv: the park, the Old Town, Kapana and the centre in a logical order.',
      intro:
        'If you have a whole day, this route connects the park with the Old Town, Kapana and the centre without overload.',
      sections: [
        {
          heading: 'Route',
          body: 'Morning: the park (about 1 hour). Lunch: Kapana. Afternoon: the Old Town and the panorama. Evening: the pedestrian street and the fountains (if in season).',
        },
        {
          heading: 'Time',
          body: 'A full day, about 6–8 hours with breaks; start early.',
        },
        {
          heading: 'Tips',
          body: 'Wear comfortable shoes, check the fountain schedule and museum hours.',
        },
      ],
      faq: [
        {
          question: 'Is one day enough?',
          answer: 'Yes – with good planning it covers the park, Old Town and Kapana.',
        },
        {
          question: 'What is the order?',
          answer: 'Park → Kapana (lunch) → Old Town → centre/fountains in the evening.',
        },
        {
          question: 'Where to start?',
          answer: 'From the park in the morning while it is cool.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '普罗夫迪夫一日游路线',
      description:
        '完整的一日路线：公园、老城、卡帕纳与市中心，按合理顺序串联。',
      intro:
        '如果你有一整天，这条路线把公园与老城、卡帕纳、市中心串联起来，而不至于过度紧凑。',
      sections: [
        {
          heading: '路线',
          body: '上午：花园（约 1 小时）。午餐：卡帕纳。下午：老城与全景。傍晚：步行街与喷泉（若逢季节）。',
        },
        {
          heading: '时间',
          body: '一整天，含休息约 6–8 小时；建议早点出发。',
        },
        {
          heading: '提示',
          body: '穿舒适的鞋，查询喷泉节目表与博物馆开放时间。',
        },
      ],
      faq: [
        {
          question: '一天够吗？',
          answer: '够——安排得当可涵盖公园、老城与卡帕纳。',
        },
        {
          question: '顺序是什么？',
          answer: '公园 → 卡帕纳（午餐）→ 老城 → 傍晚回市中心/看喷泉。',
        },
        {
          question: '从哪里开始？',
          answer: '上午从花园开始，趁天凉。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'routes/plovdiv-evening',
    group: 'routes',
    priority: 2,
    bg: {
      title: 'Вечерен маршрут и фонтаните',
      description:
        'Вечерна разходка в Пловдив: фонтаните, вечеря и разходка след залез – и резервен план при спряло шоу.',
      intro:
        'Вечерта е най-доброто време за Пеещите фонтани (ако са в сезон). Тази страница предлага два варианта – с и без шоу.',
      sections: [
        {
          heading: 'С фонтаните',
          body: 'Вечеря близо до парка, след това фонтаните след залез – най-атрактивният момент.',
        },
        {
          heading: 'Без фонтаните',
          body: 'Вечерна разходка по пешеходната улица и Капана, осветени паметници и кафе.',
        },
        {
          heading: 'Резервен план',
          body: 'Ако шоуто е спряно или извън сезон, изберете панорамата на Стария град или кафене.',
        },
      ],
      faq: [
        {
          question: 'Кога работят фонтаните?',
          answer: 'Обикновено лятото; проверете програмата в Община Пловдив.',
        },
        {
          question: 'Има ли резервен план?',
          answer: 'Да – вечерна разходка в центъра или панорама, ако няма шоу.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Evening Walk & the Fountains',
      description:
        'An evening walk in Plovdiv: the fountains, dinner and a stroll after sunset – and a backup plan if the show is off.',
      intro:
        'The evening is the best time for the Singing Fountains (if in season). This page offers two options – with and without the show.',
      sections: [
        {
          heading: 'With the fountains',
          body: 'Dinner near the park, then the fountains after sunset – the most impressive moment.',
        },
        {
          heading: 'Without the fountains',
          body: 'An evening stroll on the pedestrian street and Kapana, lit monuments and a café.',
        },
        {
          heading: 'Backup plan',
          body: 'If the show is off or out of season, choose the Old Town panorama or a café.',
        },
      ],
      faq: [
        {
          question: 'When do the fountains run?',
          answer: 'Usually in summer; check the schedule with Plovdiv Municipality.',
        },
        {
          question: 'Is there a backup plan?',
          answer: 'Yes – an evening stroll in the centre or a panorama if there is no show.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '傍晚散步与喷泉',
      description:
        '普罗夫迪夫的傍晚散步：喷泉、晚餐与日落后漫步，以及演出暂停时的备选方案。',
      intro:
        '傍晚是“歌唱喷泉”（若逢季节）最出彩的时刻。本页提供两种方案——有喷泉与无喷泉。',
      sections: [
        {
          heading: '有喷泉时',
          body: '在公园附近用晚餐，随后日落后看喷泉——最精彩的瞬间。',
        },
        {
          heading: '无喷泉时',
          body: '在步行街与卡帕纳漫步，欣赏亮灯纪念碑与咖啡馆。',
        },
        {
          heading: '备选方案',
          body: '若演出暂停或不在季节，可选择老城全景或咖啡馆。',
        },
      ],
      faq: [
        {
          question: '喷泉什么时候演？',
          answer: '通常在夏季；请查询市政府节目安排。',
        },
        {
          question: '有备选方案吗？',
          answer: '有——若没有演出，可在市中心漫步或看全景。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'routes/plovdiv-rainy-day',
    group: 'routes',
    priority: 2,
    bg: {
      title: 'Какво да правите в дъждовен ден',
      description:
        'Дъждовен ден в Пловдив: музеи, закрити разглеждания и кафенета близо до парка.',
      intro:
        'Ако завали, центърът предлага музеи и закрити опции. Тази страница събира подходящи идеи.',
      sections: [
        {
          heading: 'Музеи',
          body: 'Природонаучният музей, Регионалният етнографски музей и галериите са добри закрити опции.',
        },
        {
          heading: 'Закрити',
          body: 'Търговски улички, кафенета и читалища предлагат почивка извън дъжда.',
        },
        {
          heading: 'Маршрут',
          body: 'Кратки преходи между покрити обекти; започнете от парка и вървете към центъра.',
        },
      ],
      faq: [
        {
          question: 'Добри музеи ли има?',
          answer: 'Да – природонаучният и етнографският музей са близо до центъра.',
        },
        {
          question: 'Какво при силен дъжд?',
          answer: 'Изберете закрити обекти и кафенета; проверете часовете им.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Plovdiv on a Rainy Day',
      description:
        'A rainy day in Plovdiv: museums, indoor visits and cafés near the park.',
      intro:
        'If it rains, the centre offers museums and indoor options. This page gathers suitable ideas.',
      sections: [
        {
          heading: 'Museums',
          body: 'The Natural History Museum, the Regional Ethnographic Museum and galleries are good indoor options.',
        },
        {
          heading: 'Indoors',
          body: 'Shopping arcades, cafés and reading rooms offer a break from the rain.',
        },
        {
          heading: 'Route',
          body: 'Short walks between covered venues; start at the park and head to the centre.',
        },
      ],
      faq: [
        {
          question: 'Are there good museums?',
          answer: 'Yes – the natural history and ethnographic museums are near the centre.',
        },
        {
          question: 'What if it rains hard?',
          answer: 'Choose indoor venues and cafés; check their hours.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '雨天该怎么玩',
      description: '普罗夫迪夫的雨天方案：博物馆、室内参观与公园附近的咖啡馆。',
      intro: '如果下雨，市中心仍有博物馆与室内选择。本页汇集合适的点子。',
      sections: [
        {
          heading: '博物馆',
          body: '自然史博物馆、地区民族志博物馆与画廊都是不错的室内选择。',
        },
        {
          heading: '室内',
          body: '购物拱廊、咖啡馆与阅览室可让你避开雨水休息。',
        },
        {
          heading: '路线',
          body: '在带顶棚的场馆间短途步行；从公园出发走向市中心。',
        },
      ],
      faq: [
        {
          question: '有好的博物馆吗？',
          answer: '有——自然史与民族志博物馆都靠近市中心。',
        },
        {
          question: '下大雨怎么办？',
          answer: '选择室内场馆与咖啡馆；并查询其开放时间。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'routes/free-things-to-do',
    group: 'routes',
    priority: 2,
    bg: {
      title: 'Безплатни неща в центъра',
      description:
        'Безплатни (или евтини) неща в центъра на Пловдив: паркът, площадите, пешеходната улица и разликата с платените обекти.',
      intro:
        'Голямата част от централните удоволствия са безплатни. Тази страница разделя безплатното от платеното.',
      sections: [
        {
          heading: 'Безплатно',
          body: 'Паркът, площадите, пешеходната улица и външният вид на античните обекти са безплатни.',
        },
        {
          heading: 'Платено',
          body: 'Театърът, музеите и закритата експозиция на базиликата обикновено се билетират.',
        },
        {
          heading: 'Съвети',
          body: 'Комбинирайте безплатните разходки с един платен акцент (например театърът).',
        },
      ],
      faq: [
        {
          question: 'Паркът безплатен ли е?',
          answer: 'Да – обществен и без вход.',
        },
        {
          question: 'Какво струва?',
          answer: 'Музеите и театърът обикновено се билетират; проверете цените.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Free Things to Do in the Centre',
      description:
        'Free (or cheap) things in central Plovdiv: the park, the squares, the pedestrian street, and the difference from paid sites.',
      intro:
        'Most of the central pleasures are free. This page separates the free from the paid.',
      sections: [
        {
          heading: 'Free',
          body: 'The park, the squares, the pedestrian street and the exterior of the antiquities are free.',
        },
        {
          heading: 'Paid',
          body: 'The theatre, museums and the covered basilica exhibition usually charge.',
        },
        {
          heading: 'Tips',
          body: 'Combine free walks with one paid highlight (e.g. the theatre).',
        },
      ],
      faq: [
        {
          question: 'Is the park free?',
          answer: 'Yes – public and with no entrance fee.',
        },
        {
          question: 'What costs?',
          answer: 'Museums and the theatre usually charge; check prices.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '市中心免费玩法',
      description:
        '普罗夫迪夫市中心的免费（或低价）活动：公园、广场、步行街，以及付费项目的区别。',
      intro: '市中心大部分乐趣都是免费的。本页把免费与付费区分开来。',
      sections: [
        {
          heading: '免费',
          body: '公园、广场、步行街，以及古迹的外观都是免费的。',
        },
        {
          heading: '付费',
          body: '剧场、博物馆与巴西利卡室内展通常收费。',
        },
        {
          heading: '提示',
          body: '把免费散步与一处付费亮点（例如剧场）结合起来。',
        },
      ],
      faq: [
        {
          question: '公园免费吗？',
          answer: '免费——公共空间，无门票。',
        },
        {
          question: '什么要花钱？',
          answer: '博物馆与剧场通常收费；请查询价格。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'routes/sofia-day-trip',
    group: 'routes',
    priority: 2,
    bg: {
      title: 'Еднодневна екскурзия от София до Пловдив',
      description:
        'От София до Пловдив за един ден: транспорт, време, какво да видите и ограничения при връщане.',
      intro:
        'Пловдив е на около 2 часа от София, което го прави подходящ за еднодневна екскурзия. Тази страница помага за планирането.',
      sections: [
        {
          heading: 'Транспорт',
          body: 'Автобус или влак за около 2 часа; проверете разписанието и цените предварително.',
        },
        {
          heading: 'Какво да видите',
          body: 'Паркът, Старият град и Капана се побират в един ден с добра организация.',
        },
        {
          heading: 'Ограничения',
          body: 'Внимавайте с последните връщания; не претоварвайте деня с твърде много обекти.',
        },
      ],
      faq: [
        {
          question: 'Колко е пътят?',
          answer: 'Около 2 часа с автобус или влак.',
        },
        {
          question: 'Заслужава ли еднодневна екскурзия?',
          answer: 'Да – центърът на Пловдив е компактен и удобен за един ден.',
        },
        {
          question: 'Как да се върна?',
          answer: 'Проверете последните връщания на автобуса/влака.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'Sofia to Plovdiv Day Trip',
      description:
        'From Sofia to Plovdiv for a day: transport, time, what to see and return limits.',
      intro:
        'Plovdiv is about 2 hours from Sofia, which makes it suitable for a day trip. This page helps with planning.',
      sections: [
        {
          heading: 'Transport',
          body: 'Bus or train for about 2 hours; check the schedule and prices in advance.',
        },
        {
          heading: 'What to see',
          body: 'The park, Old Town and Kapana fit in one day with good planning.',
        },
        {
          heading: 'Limits',
          body: 'Watch the last returns; do not overload the day with too many stops.',
        },
      ],
      faq: [
        {
          question: 'How long is the trip?',
          answer: 'About 2 hours by bus or train.',
        },
        {
          question: 'Worth a day trip?',
          answer: 'Yes – central Plovdiv is compact and fine for one day.',
        },
        {
          question: 'How do I get back?',
          answer: 'Check the last bus/train returns.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '从索菲亚到普罗夫迪夫的一日游',
      description: '从索菲亚到普罗夫迪夫一日游：交通、时间、看点与返程注意。',
      intro: '普罗夫迪夫距索菲亚约 2 小时，适合一日游。本页帮助规划。',
      sections: [
        {
          heading: '交通',
          body: '乘大巴或火车约 2 小时；请提前查询时刻表与票价。',
        },
        {
          heading: '看点',
          body: '公园、老城与卡帕纳在安排得当的情况下可纳入一天。',
        },
        {
          heading: '注意',
          body: '留意末班车；不要把行程塞得太满。',
        },
      ],
      faq: [
        {
          question: '路上多久？',
          answer: '乘大巴或火车约 2 小时。',
        },
        {
          question: '值得一日游吗？',
          answer: '值得——普罗夫迪夫市中心紧凑，适合一天。',
        },
        {
          question: '怎么返回？',
          answer: '查询末班大巴/火车的返程时间。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'history/demeter-fountain',
    group: 'history',
    priority: 3,
    bg: {
      title: 'Фонтанът „Деметра“',
      description:
        'Фонтанът „Деметра“ в Цар Симеонова градина: скулптурата на Арнолдо Дзоки, историята и къде се намира.',
      intro:
        'Фонтанът „Деметра“ е една от емблематичните скулптури в парка, дело на италианския скулптор Арнолдо Дзоки. Тази страница събира какво е известно.',
      sections: [
        {
          heading: 'Скулптурата',
          body: 'Фонтанът изобразява Деметра (богинята на плодородието) и е дело на Арнолдо Дзоки; детайлите проверете на място.',
        },
        {
          heading: 'История',
          body: 'Част е от оформлението на парка от края на 19-ти век, свързано с изложението от 1892 г.',
        },
        {
          heading: 'Къде',
          body: 'Намира се близо до централния водоем; точното място потвърдете в парка.',
        },
      ],
      faq: [
        {
          question: 'Кой го е направил?',
          answer: 'Приписва се на Арнолдо Дзоки; проверете детайлите на място.',
        },
        {
          question: 'Къде е?',
          answer: 'Близо до централния водоем в парка.',
        },
        {
          question: 'Безплатен ли е?',
          answer: 'Да – скулптурата е в обществения парк.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'The Demeter Fountain',
      description:
        'The Demeter Fountain in Tsar Simeon Garden: the sculpture by Arnoldo Zòcchi, its history and where it is.',
      intro:
        'The Demeter Fountain is one of the park’s emblematic sculptures, by the Italian sculptor Arnoldo Zòcchi. This page gathers what is known.',
      sections: [
        {
          heading: 'The sculpture',
          body: 'The fountain depicts Demeter (the goddess of fertility) and is attributed to Arnoldo Zòcchi; verify details on site.',
        },
        {
          heading: 'History',
          body: 'It is part of the late-19th-century layout of the park, tied to the 1892 exhibition.',
        },
        {
          heading: 'Where',
          body: 'It is near the central pond; confirm the exact spot in the park.',
        },
      ],
      faq: [
        {
          question: 'Who made it?',
          answer: 'Attributed to Arnoldo Zòcchi; verify the details on site.',
        },
        {
          question: 'Where is it?',
          answer: 'Near the central pond in the park.',
        },
        {
          question: 'Is it free?',
          answer: 'Yes – the sculpture is in the public park.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '得墨忒耳喷泉',
      description:
        '沙皇西美昂花园的得墨忒耳喷泉：阿诺尔多·佐基的雕塑、历史与位置。',
      intro:
        '得墨忒耳喷泉是园内标志性的雕塑之一，出自意大利雕塑家阿诺尔多·佐基之手。本页汇集已知信息。',
      sections: [
        {
          heading: '雕塑',
          body: '喷泉表现得墨忒耳（丰收女神），归于阿诺尔多·佐基；细节请在现场核实。',
        },
        {
          heading: '历史',
          body: '它是公园 19 世纪末布局的一部分，与 1892 年博览会相关。',
        },
        {
          heading: '位置',
          body: '位于中央水池附近；具体位置请在园内确认。',
        },
      ],
      faq: [
        {
          question: '谁创作的？',
          answer: '归于阿诺尔多·佐基；细节请在现场核实。',
        },
        {
          question: '在哪里？',
          answer: '在园内中央水池附近。',
        },
        {
          question: '免费吗？',
          answer: '免费——雕塑位于公共公园内。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'history/garden-origins',
    group: 'history',
    priority: 3,
    bg: {
      title: 'История на градината (1892 и Чевалас)',
      description:
        'Произходът на Цар Симеонова градина: изложението от 1892 г., архитект Люсиен Шевала и развитието ѝ.',
      intro:
        'Паркът е създаден в края на 19-ти век около Първото българско земеделско-промишлено изложение. Тази страница обобщава историята с източници.',
      sections: [
        {
          heading: 'Изложението от 1892',
          body: 'През 1892 г. в Пловдив се провежда Първото българско земеделско-промишлено изложение; теренът по-късно става градина.',
        },
        {
          heading: 'Люсиен Шевала',
          body: 'Паркът е проектиран от френския ландшафтен архитект Люсиен Шевала; ролята му проверете в източниците.',
        },
        {
          heading: 'Развитие',
          body: 'От изложбен терен до обществен градски парк – пространството се развива през десетилетията.',
        },
      ],
      faq: [
        {
          question: 'Кога е създаден?',
          answer: 'В края на 19-ти век, около изложението от 1892 г.',
        },
        {
          question: 'Кой го е проектирал?',
          answer: 'Приписва се на Люсиен Шевала; проверете източниците.',
        },
        {
          question: 'Какво е станало с изложението?',
          answer: 'Теренът се превръща в днешния обществен парк.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'History of the Garden (1892 & Chevalas)',
      description:
        'The origin of Tsar Simeon Garden: the 1892 exhibition, the architect Lucien Chevalas, and its development.',
      intro:
        'The park was created in the late 19th century around the First Bulgarian Agricultural-Industrial Exhibition. This page summarises the history with sources.',
      sections: [
        {
          heading: 'The 1892 exhibition',
          body: 'In 1892 Plovdiv hosted the First Bulgarian Agricultural-Industrial Exhibition; the grounds later became a garden.',
        },
        {
          heading: 'Lucien Chevalas',
          body: 'The park was designed by the French landscape architect Lucien Chevalas; verify his role in the sources.',
        },
        {
          heading: 'Development',
          body: 'From exhibition grounds to a public city park – the space evolved over the decades.',
        },
      ],
      faq: [
        {
          question: 'When was it created?',
          answer: 'In the late 19th century, around the 1892 exhibition.',
        },
        {
          question: 'Who designed it?',
          answer: 'Attributed to Lucien Chevalas; verify in the sources.',
        },
        {
          question: 'What happened to the exhibition?',
          answer: 'The grounds became today’s public park.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '花园的历史（1892 与谢瓦拉）',
      description:
        '沙皇西美昂花园的起源：1892 年博览会、建筑师吕西昂·谢瓦拉与其发展。',
      intro:
        '公园于 19 世纪末、围绕第一次保加利亚农业工业博览会而建。本页结合资料概述其历史。',
      sections: [
        {
          heading: '1892 年博览会',
          body: '1892 年普罗夫迪夫举办第一次保加利亚农业工业博览会；场地后来成为花园。',
        },
        {
          heading: '吕西昂·谢瓦拉',
          body: '公园由法国景观建筑师吕西昂·谢瓦拉设计；其具体角色请查阅资料核实。',
        },
        {
          heading: '发展',
          body: '从博览会展场到城市公共公园，空间历经数十年演变。',
        },
      ],
      faq: [
        {
          question: '何时建成？',
          answer: '19 世纪末，约在 1892 年博览会前后。',
        },
        {
          question: '谁设计的？',
          answer: '归于吕西昂·谢瓦拉；请查阅资料核实。',
        },
        {
          question: '博览会后来怎样了？',
          answer: '场地成为今天的公共公园。',
        },
      ],
      updated: UPDATED,
    },
  },
  {
    slug: 'history/monuments-walk',
    group: 'history',
    priority: 3,
    bg: {
      title: 'Разходка сред скулптурите и паметниците',
      description:
        'Скулптури и паметници в парка: имена, личности и маршрут за разглеждане.',
      intro:
        'Паркът съдържа редица скулптури и паметници. Тази страница помага да ги разпознаете и подреди в маршрут.',
      sections: [
        {
          heading: 'Основни обекти',
          body: 'Фонтанът „Деметра“, историческите статуи и павилионите са сред разпознаваемите обекти.',
        },
        {
          heading: 'Маршрут',
          body: 'Обиколете централния водоем и главните алеи, за да видите повечето скулптури за около 1 час.',
        },
        {
          heading: 'Източници',
          body: 'Имената и личностите потвърдете на място или в официалните туристически източници.',
        },
      ],
      faq: [
        {
          question: 'Какви скулптури има?',
          answer: 'Фонтанът „Деметра“, исторически статуи и павилиони.',
        },
        {
          question: 'Колко време е нужно?',
          answer: 'Около 1 час за обиколка на централните алеи.',
        },
      ],
      updated: UPDATED,
    },
    en: {
      title: 'A Walk Among the Sculptures & Monuments',
      description:
        'Sculptures and monuments in the park: names, figures and a viewing route.',
      intro:
        'The park contains a number of sculptures and monuments. This page helps you recognise them and arrange them into a route.',
      sections: [
        {
          heading: 'Key objects',
          body: 'The Demeter fountain, the historic statues and the pavilions are among the recognisable features.',
        },
        {
          heading: 'Route',
          body: 'Loop around the central pond and the main alleys to see most sculptures in about 1 hour.',
        },
        {
          heading: 'Sources',
          body: 'Confirm the names and figures on site or in the official tourism sources.',
        },
      ],
      faq: [
        {
          question: 'What sculptures are there?',
          answer: 'The Demeter fountain, historic statues and pavilions.',
        },
        {
          question: 'How long does it take?',
          answer: 'About 1 hour to loop the central alleys.',
        },
      ],
      updated: UPDATED,
    },
    zh: {
      title: '雕塑与纪念碑漫步',
      description: '园内的雕塑与纪念碑：名称、人物与参观路线。',
      intro:
        '园内有多处雕塑与纪念碑。本页帮你辨认它们并规划一条参观路线。',
      sections: [
        {
          heading: '主要对象',
          body: '得墨忒耳喷泉、历史雕像与各式亭阁是其中可辨识的景观。',
        },
        {
          heading: '路线',
          body: '环绕中央水池与主轴线，约 1 小时可看到大部分雕塑。',
        },
        {
          heading: '资料',
          body: '名称与人物请在现场或官方旅游资料中核实。',
        },
      ],
      faq: [
        {
          question: '有哪些雕塑？',
          answer: '得墨忒耳喷泉、历史雕像与亭阁。',
        },
        {
          question: '需要多久？',
          answer: '环绕中央轴线约 1 小时。',
        },
      ],
      updated: UPDATED,
    },
  },
];

// ============================================================
// 查询助手
// ============================================================

export type Locale = 'bg' | 'en' | 'zh';

export function getTopic(slug: string, locale: string): TopicContent | undefined {
  const def = TOPICS.find((t) => t.slug === slug);
  if (!def) return undefined;
  return def[locale as Locale];
}

/** 返回某语种已发布内容的 slug 列表（用于 generateStaticParams / sitemap） */
export function topicSlugsForLocale(locale: string): string[] {
  return TOPICS.filter((t) => t[locale as Locale]).map((t) => t.slug);
}

/** 返回某 slug 已发布内容的语种列表 */
export function topicLocales(slug: string): Locale[] {
  const def = TOPICS.find((t) => t.slug === slug);
  if (!def) return [];
  return (['bg', 'en', 'zh'] as Locale[]).filter((l) => def[l]);
}

/** 同组、同语种、已发布的其它主题（用于页内互链） */
export function relatedTopics(slug: string, locale: string): TopicDef[] {
  const def = TOPICS.find((t) => t.slug === slug);
  if (!def) return [];
  return TOPICS.filter(
    (t) => t.group === def.group && t.slug !== slug && t[locale as Locale]
  );
}
