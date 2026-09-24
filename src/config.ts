// ============================================================
// 单景点 SEO 实体绑定配置变量表
// 所有结构化数据 / TDK / 地图 / 权威外链均从这里读取
// ============================================================
export const siteConfig = {
  // —— 站点 ——
  domain: 'tsarsimeongardenplovdiv.com',
  baseUrl: 'https://tsarsimeongardenplovdiv.com',

  // —— 景点实体 ——
  // 官方全称（含引号写法）
  attractionFullName: '"Tsar Simeon Garden" Park',
  // 常用俗称 / 域名含义
  attractionShortName: 'Tsar Simeon Garden',
  // 页面通用展示名
  attractionName: 'Tsar Simeon Garden Park',
  // 当地语言官方名（保加利亚语）
  attractionLocalName: 'Цар Симеонова градина',

  // —— 地理归属层级 ——
  city: 'Plovdiv',
  stateProvince: 'Plovdiv Province',
  country: 'Bulgaria',
  countryCode: 'BG',
  postalCode: '4000',
  streetAddress: 'ul. "Veliko Tarnovo" 11А, Plovdiv Center',

  // —— 坐标 ——
  latitude: 42.141586,
  longitude: 24.7468298,
  plusCode: '4PRW+JP',

  // —— 地图 ——
  mapsShareUrl: 'https://maps.app.goo.gl/toDts5VqGcTJ4NhLA',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.4065620217475!2d24.746829800000004!3d42.141586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd1b0f4d72103%3A0x2dbfbf91b938256a!2z4oCcVHNhciBTaW1lb24gR2FyZGVu4oCdIFBhcms!5e0!3m2!1szh-CN!2s!4v1788173901487!5m2!1szh-CN!2s',

  // —— 周边核心地标（语义集群） ——
  nearbyLandmark1: 'Ancient Roman Stadium',
  nearbyLandmark2: 'Plovdiv Old Town',

  // —— 官方旅游门户（权威出站链接） ——
  govtTourismUrl: 'http://www.visitplovdiv.com/',

  // —— 视觉素材 ——
  heroImage: '/gallery/tsar-simeon-garden-park-1.jpg',
  ogImage: '/gallery/tsar-simeon-garden-park-1.jpg',

  // —— 评分信息 ——
  rating: '4.8',
  reviewCount: '17,019',
} as const;

export type SiteConfig = typeof siteConfig;
