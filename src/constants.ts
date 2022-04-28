export const AppName = '核酸采样点 𝐂𝐍'

export const ColorToIcon: Record<string, string> = {
  '#50C240': 'mdi:medical-cotton-swab',
  '#F3AE1A': 'mdi:medical-cotton-swab',
  '#C24740': 'mdi:medical-cotton-swab',
  '#BEBEBE': 'mdi:domain-off',
}

export const Colors = Object.keys(ColorToIcon)

export const ignoredProperties = [
  '名称',
  '下载速度',
  'shortname',
  'Speedtest 链接',
  'marker-color',
  'marker-symbol',
  'referrers',
]
