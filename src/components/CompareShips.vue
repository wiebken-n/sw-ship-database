<template>
  <div class="component__container">
    <div class="component-content__wrapper">
      <div class="selection__wrapper">
        <CompareShipOneVue></CompareShipOneVue>
        <!-- <CompareShipTwoVue></CompareShipTwoVue> -->
      </div>
      <div class="search-results__container">
        <div class="result__card" v-for="result in dataStore.shipOne" :key="result.name">
          <div class="ship-data__wrapper">
            <h2 class="result-name__headline">{{ result.name }}</h2>
            <p>Model: {{ result.model }}</p>
            <p>Class: {{ result.starship_class }}</p>
            <p>Manufacturer: {{ result.manufacturer }}</p>
            <p
              v-bind:class="{
                highest: checkIfHighest(result, dataStore.shipOne)
              }"
            >
              Length: {{ result.length }}
            </p>
            <p>Speed in atmosphere: {{ result.max_atmosphering_speed }} kp/h</p>
            <p>Hyperdrive class: {{ result.hyperdrive_rating }}</p>
            <p
              v-bind:class="{
                highest: checkIfMostCrew(result, dataStore.shipOne)
              }"
            >
              Crew: {{ result.crew }}
            </p>
            <p>Passengers: {{ result.passengers }}</p>
            <p>Cargo capacity: {{ result.cargo_capacity }}kg</p>
          </div>
          <div class="aurebesh__wrapper">
            <p>Name: {{ result.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from '@/stores/useDataStore.js'
import CompareShipOneVue from '@/components/CompareShipOne.vue'
import { ref } from 'vue'
// import CompareShipTwoVue from '@/components/CompareShipTwo.vue'

// import DeleteIconVue from './icons/DeleteIcon.vue'
// import { ref } from 'vue'
const dataStore = useDataStore()

// const shipOne = ref([])
// const shipTwo = ref[[]]
// function addShipOne(ship) {
//   shipList[0] = ship
//   console.log(ship)
// }
// function addShipTwo(ship) {
//   shipList[1] = ship
// }
function checkIfHighest(ship, shipArray) {
  for (let entry of shipArray) {
    if (entry.length * 1 < ship.length * 1) {
      return true
    }
  }
  return false
}
function checkIfMostCrew(ship, shipArray) {
  let max = ref(0)
  console.log(shipArray)
  //   for (let i = 0; i < ship.Array.length; i++) {
  //     if (shipArray[i].crew * 1 > ship.crew * 1) {
  //       max.value = shipArray[i].crew * 1
  //     }
  //   }
  return ship.crew * 1 > max.value
}
</script>

<style>
.component__container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.component-content__wrapper {
  width: 80%;
}
.input__select {
  width: 15rem;
  height: max-content;
  padding: 0.3rem 0.5rem;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 2px 1px var(--color-aurebesh);
  color: var(--color-text);
  background-color: var(--color-input-background);
  flex-grow: 1;
  transition: box-shadow 200ms ease;
}
.search-results__container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.highest {
  color: green;
  font-weight: 600;
}
</style>
