<template>
  <div class="component__container">
    <div class="selected-ship__container" @click="dataStore.toggleShipOneSelection()">
      <div class="selected-ship-name">{{ dataStore.shipOneName }}</div>
      <div class="select_symbol">
        <ChevrondownIcon
          v-if="!dataStore.shipOneSelectionOn"
          class="icon-chevron"
        ></ChevrondownIcon>
        <ChevronUpIcon v-else class="icon-chevron"></ChevronUpIcon>
      </div>
    </div>
    <Transition>
      <div v-if="dataStore.shipOneSelectionOn" class="shiplist_dropdown_container">
        <div
          @click="dataStore.selectShipOne(ship)"
          class="shiplist_dropdown-row"
          v-for="ship of dataStore.savedShips"
          :key="ship.name"
        >
          {{ ship.name }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { useDataStore } from '@/stores/useDataStore.js'
import ChevrondownIcon from './icons/ChevronDownIcon.vue'
import ChevronUpIcon from './icons/ChevronUpIcon.vue'

const dataStore = useDataStore()
</script>

<style scoped>
.component__container {
  width: 40%;
  position: relative;
  display: flex;
  flex-direction: column;
}
.selected-ship__container {
  margin-block: 1.5rem;
  border-radius: 5px;
  padding: 0.1rem 1rem;
  display: flex;
  height: 3.25rem;
  align-items: center;
  background-color: var(--color-input-background);
  width: 100%;
}
.selected-ship-name {
  display: flex;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  font-family: changa;
}

.icon-chevron {
  height: 100%;
  display: flex;
}
.shiplist_dropdown_container {
  top: 4.9rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3px;
}
.shiplist_dropdown-row {
  font-family: changa;
  border-radius: 5px;
  padding: 0.1rem 1rem;
  display: flex;
  height: 3.25rem;
  align-items: center;
  background-color: var(--color-input-background);
  border: 2px solid var(--color-input-background);
}
.shiplist_dropdown-row:hover {
  border: 2px solid var(--color-input-active);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 200ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
