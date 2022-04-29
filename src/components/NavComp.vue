<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import LogoComp from './LogoComp.vue'
import { emitter } from '~/event'
import {
  changeCity,
  cities,
  city,
  cityName,
  setAbout,
  setSearchOpen,
} from '~/composables/store'
</script>
<template>
  <div
    text-center
    p="2"
    border="b gray-200 dark:gray-800"
    flex
    font-light
    relative
  >
    <div
      text="sm gray-400 dark:white"
      flex="none"
      m="1"
      bg="hover:gray-100"
      rounded
      p="x2 y1"
      cursor="pointer"
      relative
    >
      {{ cityName }}
      <Icon
        icon="carbon:chevron-down"
        inline-block
        text="gray-400 dark:white"
        align-middle
      />
      <select
        absolute
        top="0"
        bottom="0"
        left="0"
        right="0"
        opacity="0"
        :value="city"
        @change="(e) => {
          // @ts-ignore
          changeCity(e!.target!.value )}"
      >
        <option v-for="[k, v] in cities" :key="k" :value="k">
          {{ v.name }} ({{ v.count }})
        </option>
      </select>
    </div>
    <div flex-auto />
    <div
      p="2"
      m="x1 auto"
      cursor="pointer"
      bg="hover:gray-100 dark:hover:gray-700"
      text="gray-400 dark:white hover:gray-700 dark:hover:gray-100"
      rounded
      @click="() => setSearchOpen(true)"
    >
      <Icon icon="carbon:search" class="text-lg" />
    </div>
    <div
      p="2"
      m="x1 auto"
      cursor="pointer"
      bg="hover:gray-100 dark:hover:gray-700"
      text="gray-400 dark:white hover:gray-700 dark:hover:gray-100"
      @click="() => emitter.emit('track')"
    >
      <Icon icon="carbon:map" text="lg" />
    </div>

    <div
      text="lg gray-700"
      absolute
      m="r2"
      select="none"
      top="1/2"
      left="1/2"
      :style="{
        transform: 'translate(-50%, -50%)',
      }"
      @click="() => setAbout(true)"
    >
      <LogoComp />
    </div>
  </div>
</template>
