<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import ListItem from './ListItem.vue'
import { searchResult, searchString, setSearchOpen } from '~/composables/store'
</script>
<template>
  <div
    class="h-screen w-screen relative grid"
    bg="white dark:black"
    :style="{
      gridTemplateRows: 'max-content auto',
    }"
  >
    <div class="px-4 border-b border-gray-200">
      <input
        ref="inputRef"
        :value="searchString"
        placeholder="搜索"
        bg="white dark:black"
        class="px-3 py-4 outline-none w-full"
        @change="
          (e) => {
            // @ts-ignore
            searchString = e.target!.value;
          }
        "
      >
      <Icon
        class="absolute top-0 right-0 m-4 text-2xl text-gray-600 hover:text-gray-800"
        icon="carbon:close"
        @click="() => setSearchOpen(false)"
      />
    </div>
    <div class="overflow-auto py-2 px-6">
      <template v-if="searchString">
        <template v-if="searchResult.length">
          <ListItem
            v-for="item in searchResult"
            :key="item.coordinates.toString()"
            :shop="item"
          />
        </template>
        <template v-else>
          <div class="p-3 text-sm text-gray-400 text-center">
            无结果
          </div>
        </template>
      </template>
      <template v-else>
        <div class="p-3 text-sm text-gray-400 text-center">
          输入关键字以开始搜索
        </div>
      </template>
    </div>
  </div>
</template>
