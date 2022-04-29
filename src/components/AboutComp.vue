<script lang="ts" setup>
import { loc } from '~/composables/store'
import { BuildTime } from '~/build'
import { fromNow } from '~/utils/time'
</script>

<template>
  <div
    p="10 y-8"
  >
    <h1
      text="lg gray-900"
      font-light
      m="b4"
    >
      <LogoComp />
    </h1>
    <div
      text="sm gray-500"
      m="y1"
      font-light
    >
      分享国内核酸采样点（避免排队）
    </div>

    <div
      text="sm gray-500"
      m="y1"
      font-light
    >
      数据来源
      <a
        class="text-gray-700 hover:text-gray-900"
        href="https://github.com/Lanseria/awesome-cn-data/tree/sampling-point"
        target="_blank"
        rel="noreferrer"
      >AwesomeCnData(Github)</a>
    </div>

    <div
      text="sm gray-500"
      m="y1"
      font-light
    >
      最近更新 <span text="gray-700">{{ fromNow(BuildTime) }}</span>
    </div>
    <div
      text="sm gray-500"
      m="y1"
      font-light
    >
      Made by
      <a
        class="text-gray-700 hover:text-gray-900"
        href="https://github.com/lanseria"
        target="_blank"
        rel="noreferrer"
      >@Lanseria</a>
    </div>
    <div
      text="sm gray-500"
      m="y1"
      font-light
    >
      Fork by
      <a
        class="text-gray-700 hover:text-gray-900"
        href="https://github.com/aufu"
        target="_blank"
        rel="noreferrer"
      >@aufu</a>
    </div>
    <div
      text="sm gray-500"
      m="y1"
      font-light
    >
      源代码在
      <a
        class="text-gray-700 hover:text-gray-900"
        href="https://github.com/Lanseria/awesome-cn-sampling-point-web"
        target="_blank"
        rel="noreferrer"
      >Github</a>
    </div>
    <div
      v-if="loc" text="sm gray-500"
      m="y1"
      font-light
    >
      My Location
      <span
        text="gray-700"
        m="l1"
      >
        {{ loc.map((i) => +i.toFixed(5)).join(", ") }}
      </span>
    </div>
  </div>
</template>
