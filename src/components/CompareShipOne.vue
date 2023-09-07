<template>
  <div class="ship-one__wrapper">
    <select class="input__select" multiple name="shipOne" id="shipOne" v-model="dataStore.shipOne">
      <option disabled value="">Select a ship</option>
      <option
        class="input__option"
        v-for="result in dataStore.savedShips"
        :key="result.name + 'one'"
        v-bind:value="result"
      >
        {{ result.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { useDataStore } from '@/stores/useDataStore.js'
const dataStore = useDataStore()
</script>
