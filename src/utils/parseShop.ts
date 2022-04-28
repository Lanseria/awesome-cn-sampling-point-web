import { getDistanceFromMe } from './distance'
import type { CafeShop } from '~/composables/types'
import { ignoredProperties } from '~/constants'

export const parseShop = (shop: CafeShop) => {
  const { properties, coordinates } = shop

  const location1 = coordinates.join(',')
  const location2 = coordinates.slice().reverse().join(',')
  const distance = getDistanceFromMe(coordinates)

  const table = Object.entries(properties).filter(
    ([k]) => !ignoredProperties.includes(k),
  )

  return {
    shop,
    properties,
    coordinates,
    color: properties['marker-color'],
    name: properties['名称'],
    suggestion: properties['建议'],
    weiBoUrl: properties['WeiBo 链接'],
    referrers: properties.referrers as unknown as string[],
    location1,
    location2,
    table,
    distance,
  }
}
