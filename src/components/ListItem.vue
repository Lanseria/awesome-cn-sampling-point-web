<script lang="ts" setup>
import type { PropType } from 'vue'
import { setCurrent, setSearchOpen } from '~/composables/store'
import type { CafeShop } from '~/composables/types'
import { emitter } from '~/event'
import { parseShop } from '~/utils/parseShop'
const props = defineProps({
  shop: {
    type: Object as PropType<CafeShop>,
    required: true,
  },
})
const { name, color, suggestion, distance, referrers } = parseShop(props.shop)
const onClick = () => {
  setCurrent(props.shop)
  setSearchOpen(false)
  emitter.emit('fly-to', {
    center: [props.shop.coordinates[0], props.shop.coordinates[1] - 0.005],
    zoom: 14,
    speed: 1.5,
  })
}
</script>
<template>
  <div class="px-1 py-2 border-b border-gray-200" @click="onClick">
    <h1 class="text-gray-700">
      {{ name }}
    </h1>
    <p class="text-gray-500 text-sm">
      <span class="inline-block align-middle" :style="{ color }">
        {{ suggestion }}</span>
      <template v-if="distance">
        <span class="inline-block align-middle mx-1">・</span>
        <span class="inline-block align-middle">{{ distance }}</span>
      </template>
      <template v-else>
        <span class="inline-block align-middle mx-1">・</span>
        <span class="inline-block align-middle">{{ referrers.join(" ") }}</span>
      </template>
    </p>
  </div>
</template>
