<template>
  <h1>{{ testVariable }}</h1>
  <h2>{{ dataStore.aShip }}</h2>
  <button @click="dataStore.fetchShipData()">Button</button>
  <input type="text" v-model="userInput" />
  <button @click="dataStore.searchSwapi(userInput)">Search away</button>
  <div class="search-results__container">
    <div class="result__card" v-for="result in dataStore.searchResults.results" :key="result.name">
      <p>Name: {{ result.name }}</p>
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
  background-color: black;
  width: 300px;
}
</style>
