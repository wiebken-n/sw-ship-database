<template>
  <div class="component__container">
    <div class="search-results__container">
      <TransitionGroup>
        <div
          class="result__card"
          v-for="(result, index) in dataStore.savedShips"
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
            <DeleteIconVue @click="dataStore.savedShips.splice(index, 1)"></DeleteIconVue>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from '@/stores/useDataStore.js'
import DeleteIconVue from './icons/deleteicon.vue'

const dataStore = useDataStore()
</script>
