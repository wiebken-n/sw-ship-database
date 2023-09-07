<template>
  <div class="result__card" v-for="result in dataStore.shipOne" :key="result.name">
    <div class="ship-data__wrapper">
      <h2 class="result-name__headline">{{ result.name }}</h2>
      <p>Model: {{ result.model }}</p>
      <p>Class: {{ result.starship_class }}</p>
      <p>Manufacturer: {{ result.manufacturer }}</p>
      <p
        v-bind:class="{
          highest: dataStore.checkWhichIsHigher(
            dataStore.shipOne[0],
            dataStore.shipTwo[0],
            'length'
          )
        }"
      >
        Length: {{ result.length }}
      </p>
      <p
        v-bind:class="{
          highest: dataStore.checkWhichIsHigher(
            dataStore.shipOne[0],
            dataStore.shipTwo[0],
            'max_atmosphering_speed'
          )
        }"
      >
        Speed in atmosphere: {{ result.max_atmosphering_speed }} kp/h
      </p>
      <p
        v-bind:class="{
          highest: dataStore.checkWhichIsHigher(
            dataStore.shipOne[0],
            dataStore.shipTwo[0],
            'hyperdrive_rating'
          )
        }"
      >
        Hyperdrive class: {{ result.hyperdrive_rating }}
      </p>
      <p
        v-bind:class="{
          highest: dataStore.checkWhichIsHigher(dataStore.shipOne[0], dataStore.shipTwo[0], 'crew')
        }"
      >
        Crew: {{ result.crew }}
      </p>
      <p
        v-bind:class="{
          highest: dataStore.checkWhichIsHigher(
            dataStore.shipOne[0],
            dataStore.shipTwo[0],
            'passengers'
          )
        }"
      >
        Passengers: {{ result.passengers }}
      </p>
      <p
        v-bind:class="{
          highest: dataStore.checkWhichIsHigher(
            dataStore.shipOne[0],
            dataStore.shipTwo[0],
            'cargo_capacity'
          )
        }"
      >
        Cargo capacity: {{ result.cargo_capacity }} kg
      </p>
    </div>
    <div class="aurebesh__wrapper">
      <p>Name: {{ result.name }}</p>
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from '@/stores/useDataStore.js'

const dataStore = useDataStore()
</script>
