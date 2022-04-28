<script lang="ts" setup>
import {
  about,
  city,
  current,
  data,
  filter,
  filteredGeo,
  searchOpen,
  setAbout,
  setCurrent,
  setSearchOpen,
} from '~/composables/store'
</script>

<template>
  <div h-full relative>
    <div
      h-full
      grid
      relative
      style="grid-template-rows: max-content auto"
    >
      <nav-comp />
      <map-comp
        :city="city"
        :data="data"
        :geo="filteredGeo"
        :filter="filter"
      />
    </div>
    <float-control />
    <modal-comp :value="about" :set-value="() => setAbout(false)">
      <about-comp />
    </modal-comp>
    <modal-comp :value="!!current" :set-value="() => setCurrent(null)">
      <detail-comp v-if="current" :shop="current" />
    </modal-comp>
    <modal-comp :value="searchOpen" :set-value="() => setSearchOpen(false)">
      <search-comp />
    </modal-comp>
  </div>
</template>
