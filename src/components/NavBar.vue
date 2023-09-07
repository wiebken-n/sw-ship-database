<template>
  <div class="nav__container">
    <RouterLink class="navlink" to="/"> Search </RouterLink>
    <RouterLink class="navlink" to="/ships"> Saved Ships </RouterLink>
    <RouterLink class="navlink" to="/compare-ships"> Compare Ships </RouterLink>
  </div>
</template>

<script setup>
// import { useDataStore } from '@/stores/useDataStore.js'
import { RouterLink } from 'vue-router'

// const dataStore = useDataStore()
// const router = useRouter()

// function goToSearch() {
//   console.log(dataStore)
//   //   dataStore.selectedSite = 'search'
//   router.push({ path: '/' })
// }

// function goToShow() {
//   //   dataStore.selectedSite = 'ships'
//   router.push({ path: '/ships' })
// }
</script>
<style scoped>
.nav__container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.navlink {
  color: var(--color-text);
  font-size: 1.2rem;
  text-decoration: overline 0 black;
  text-decoration: underline 1px var(--color-button-background-hover);
  text-underline-offset: 8px;
  transition: all 200ms ease;
}
.navlink:hover {
  text-decoration: underline overline 2px var(--color-input-active);
}

.navlink:active {
  text-decoration: underline overline 1px var(--color-aurebesh);
}
</style>
