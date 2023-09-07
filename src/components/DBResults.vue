<template>
  <div class="component__container">
    <div class="search-results__container">
      <div
        class="result__card"
        v-for="result in dataStore.searchResults.results"
        :key="result.name"
      >
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
          <AddIconVue
            v-bind:class="{ shipSaved: checkIfShipSaved(result.name) }"
            @click.once="dataStore.saveShip(result)"
          ></AddIconVue>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from '@/stores/useDataStore.js'
import AddIconVue from './icons/AddIcon.vue'
function checkIfShipSaved(shipname) {
  for (let ship of dataStore.savedShips) {
    if (ship.name === shipname) {
      console.log('true')
      return true
    }
  }
  return false
}
const dataStore = useDataStore()
</script>
