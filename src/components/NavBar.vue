<template>
  <RouterLink to="/"><button>search</button></RouterLink>
  <RouterLink to="/ships"><button>show</button> </RouterLink>
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
