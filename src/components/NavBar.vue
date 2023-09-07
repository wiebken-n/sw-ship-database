<template>
  <div class="nav__container">
    <RouterLink
      :class="{
        active: dataStore.currentSite === 'search'
      }"
      class="navlink"
      to="/"
      @click="dataStore.setCurrent('search')"
    >
      Search
    </RouterLink>
    <RouterLink
      :class="{
        active: dataStore.currentSite === 'saved'
      }"
      class="navlink"
      to="/ships"
      @click="dataStore.setCurrent('saved')"
    >
      Saved Ships
    </RouterLink>
    <RouterLink
      :class="{
        active: dataStore.currentSite === 'compare'
      }"
      class="navlink"
      to="/compare-ships"
      @click="dataStore.setCurrent('compare')"
    >
      Compare Ships
    </RouterLink>
  </div>
</template>

<script setup>
import { useDataStore } from '@/stores/useDataStore.js'
import { RouterLink } from 'vue-router'

const dataStore = useDataStore()
</script>

<style scoped>
.nav__container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-block: 1rem;
}

.navlink {
  font-family: comfortaa;
  color: var(--color-text);
  font-size: 1.2rem;
  border-radius: 2px;
  border: 2px solid transparent;
  border-bottom: 2px solid var(--color-text);
  text-decoration: none;
  transition: all 200ms ease;
}
.navlink:hover {
  border-block: 2px solid var(--color-input-active);
}

.active {
  border-block: 2px solid var(--color-aurebesh);
}
.navlink:active {
  border-block: 2px solid var(--color-aurebesh);
}
</style>
