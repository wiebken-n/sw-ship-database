<template>
  <div class="header__container">
    <div class="header-content__wrapper">
      <div class="headline__wrapper">
        <h1>Star Wars Ship Database</h1>
        <h2>Star Wars Ship Database</h2>
      </div>
      <SearchBar></SearchBar>
      <NavBarVue></NavBarVue>
    </div>
  </div>
</template>

<style scoped>
* {
  background-color: var(--color-background);
}
.header__container {
  height: 12rem;
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 2px solid red;
  padding-top: 1rem;
}

.header-content__wrapper {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.headline__wrapper {
  display: flex;
  align-items: last baseline;
  gap: 1.5rem;
}
h1 {
  font-variant: small-caps;
  font-weight: 600;
}
h2 {
  font-family: aurebesh;
  color: var(--color-aurebesh);
  font-size: 1.125rem;
}
</style>

<script setup>
import SearchBar from './SearchBar.vue'
import NavBarVue from './NavBar.vue'
</script>
