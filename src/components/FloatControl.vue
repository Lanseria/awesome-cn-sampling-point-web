<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { ColorToIcon, Colors } from '~/constants'
import { filter, setFilter } from '~/composables/store'
</script>

<template>
  <div
    fixed
    bottom="0"
    left="0"
    m="x3 b10"
  >
    <div
      bg="white dark:black"
      rounded
      shadow
      flex="~ col"
      p="2"
    >
      <button
        v-for="color in Colors"
        :key="color"
        p="y2 x1"
        outline="none focus:none"
        transition="all duration-300 "
        :class="filter === color || filter === 'all' ? '' : 'opacity-25'"
        :style="{
          color,
        }"
        title="状态"
        @click="() => setFilter(color)"
      >
        <Icon pointer-events-none :icon="ColorToIcon[color]" />
      </button>
    </div>
  </div>
</template>
