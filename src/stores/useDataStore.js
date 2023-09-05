import { defineStore } from 'pinia'

export const useDataStore = defineStore('state', {
  state: () => ({
    searchResults: {},
    savedShips: [],
    selectedSite: ''
  }),

  actions: {
    fetchShipData() {
      console.log(this.currentShip)
      this.currentShip = 'a new ship has arrived'
      console.log(this.currentShip)
      console.log('fetch!')
    },
    searchSwapi(userinput) {
      return fetch(`https://swapi.dev/api/starships/?search=${userinput}`, {
        method: 'GET',
        contentType: 'application/json'
      })
        .then((response) => response.json())
        .then((data) => {
          this.searchResults = data
          console.log(data)
          console.log(this.searchResults)
        })
    },
    saveShip(ship) {
      this.savedShips.push(ship)
      console.log(this.savedShips)
    }
  }
})
