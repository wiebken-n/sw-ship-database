<template>
  <h1>{{ testVariable }}</h1>
  <h2>{{ dataStore.aShip }}</h2>
  <button @click="dataStore.fetchShipData()">Button</button>
  <input type="text" v-model="userInput" />
  <button @click="dataStore.searchSwapi(userInput)">Search away</button>
  <div class="search-results__container">
    <div class="result__card" v-for="result in dataStore.searchResults.results" :key="result.name">
      <div class="ship-data__wrapper">
        <h2 class="result-name__headline">{{ result.name }}</h2>
        <p>Model: {{ result.model }}</p>
        <p>Class: {{ result.starship_class }}</p>
        <p>Manufacturer: {{ result.manufacturer }}</p>
        <p>Length: {{ result.length }}</p>
        <p>Speed in atmosphere: {{ result.max_atmosphering_speed }} kp/h</p>
        <p>Hyperdrive class: {{ result.hyperdrive_rating }}</p>
        <p>Crew: {{ result.crew }}</p>
        <p>Passengers: {{ result.passengers }}</p>
        <p>Cargo capacity: {{ result.cargo_capacity }}kg</p>
      </div>
      <div class="aurebesh__wrapper">
        <p>Name: {{ result.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useDataStore } from '@/stores/useDataStore.js'
import { storeToRefs } from 'pinia'

const dataStore = useDataStore()
const { currentShip } = storeToRefs(dataStore)

const testVariable = ref(0)
const userInput = ref('')
watch(currentShip, (newValue) => {
  console.log('A Fucking Ship!')
  console.log(newValue)
})
</script>

<style scoped>
.search-results__container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
}

.result__card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--color-background-card);
  padding: 2rem;
  padding-left: 4rem;
  width: 25rem;
  border-radius: var(--border-radius-cards);
}
.ship-data__wrapper {
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  line-height: 1.5rem;
  text-indent: -2rem;
}

.result-name__headline {
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
  font-variant-caps: small-caps;
}
.aurebesh__wrapper {
  color: var(--color-aurebesh);
  writing-mode: vertical-lr;
  font-family: aurebesh;
}
</style>
