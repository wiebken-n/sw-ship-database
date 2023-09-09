<template>
  <div class="search-input__container">
    <input
      id="search-input"
      type="text"
      placeholder="Input name or model of a spaceship"
      v-model.trim="userInput"
      @keypress.enter="searchAction(userInput), this.$router.push('/')"
    />
    <RouterLink to="/"
      ><button class="btn-search" for="search-input" @click="dataStore.searchAction(userInput)">
        Search Database
      </button></RouterLink
    >
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useDataStore } from '@/stores/useDataStore.js'

const dataStore = useDataStore()
const userInput = ref('')

function searchAction(userInput) {
  dataStore.searchSwapi(userInput)
  dataStore.setCurrent('search')
}
</script>

<style scoped>
.search-input__container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1.25rem;
}
#search-input {
  width: 15rem;
  height: 2.5rem;
  padding: 0.3rem 0.5rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 2px 1px var(--color-aurebesh);
  color: var(--color-text);
  background-color: var(--color-input-background);
  flex-grow: 1;
  transition: box-shadow 200ms ease;
}

#search-input:focus {
  outline: none;
  box-shadow: 0 0 4px 3px var(--color-input-active);
}

button {
  font-family: changa;
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-text);
  border: none;
  border-radius: 5px;
  border: 1px solid var(--color-button-border);
  box-shadow: 0 0 4px 0px var(--color-button-border);
  background-color: var(--color-button-background);
  width: 9rem;
  height: 2.5rem;
}
button:hover {
  background-color: var(--color-button-background-hover);
  box-shadow: 0 0 15px 4px var(--color-input-active);
}
</style>
