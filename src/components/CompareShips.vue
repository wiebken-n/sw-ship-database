<template>
  <div class="component__container">
    <div class="component-content__wrapper">
      <div class="dropdown__container">
        <SelectShipOneVue></SelectShipOneVue>
        <SelectShipTwoVue></SelectShipTwoVue>
      </div>
      <div class="selection__wrapper"></div>
      <TransitionGroup>
        <div class="search-results__container" id="compare-ship-cards__container">
          <ShipOneCardVue></ShipOneCardVue>
          <ShipTwoCardVue></ShipTwoCardVue>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import SelectShipOneVue from '@/components/SelectShipOne.vue'
import SelectShipTwoVue from '@/components/SelectShipTwo.vue'
import ShipOneCardVue from '@/components/ShipOneCard.vue'
import ShipTwoCardVue from '@/components/ShipTwoCard.vue'
</script>

<style scoped>
.component__container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 0.25rem;
}
.component-content__wrapper {
  width: 80%;
}
#compare-ship-cards__container {
  justify-content: space-around;
}

.dropdown__container {
  display: flex;
  gap: 2rem;
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
</style>

<style>
.highest {
  color: var(--color-input-active);
  font-weight: 600;
}
</style>
