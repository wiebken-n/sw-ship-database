<template>
  <div class="header__container" @click="dataStore.closeShipSelectionDropDowns()">
    <div class="header-content__wrapper">
      <div class="headline__wrapper">
        <h1>SW Ship DB</h1>
        <h2>SW Ship DB</h2>
      </div>
      <SearchBar></SearchBar>
      <NavBarVue></NavBarVue>
    </div>
  </div>
</template>

<style scoped>
* {
  background-color: var(--color-background-header);
}
.header__container {
  height: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0 0 5px 1px var(--color-header-divider);
}

.header-content__wrapper {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.headline__wrapper {
  display: flex;
  align-items: last baseline;
  gap: 1.5rem;
}
h1 {
  font-family: comfortaa;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 0;
}
h2 {
  font-family: aurebesh;
  color: var(--color-aurebesh);
  font-size: 1.2rem;
  margin-bottom: 0;
}
</style>

<script setup>
import { useDataStore } from '../stores/useDataStore'
import SearchBar from './SearchBar.vue'
import NavBarVue from './NavBar.vue'

const dataStore = useDataStore()
</script>
