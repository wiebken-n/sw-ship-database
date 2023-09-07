<template>
  <div class="header__container">
    <div class="header-content__wrapper">
      <div class="headline__wrapper">
        <h1>Star Wars Ship DB</h1>
        <h2>Star Wars Ship DB</h2>
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
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* border-bottom: 2px solid var(--color-button-text); */
  box-shadow: 0 0 5px 1px var(--color-button-text);
  padding-top: 0.25rem;
}

.header-content__wrapper {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.headline__wrapper {
  display: flex;
  align-items: last baseline;
  gap: 1.5rem;
}
h1 {
  font-variant: small-caps;
  font-weight: 600;
  font-size: 1.7rem;
}
h2 {
  font-family: aurebesh;
  color: var(--color-aurebesh);
  font-size: 1.2rem;
}
</style>

<script setup>
import SearchBar from './SearchBar.vue'
import NavBarVue from './NavBar.vue'
</script>
