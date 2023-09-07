import { defineStore } from 'pinia'

export const useDataStore = defineStore('state', {
  state: () => ({
    currentSite: '',
    searchResults: {},
    savedShips: [],
    shipOneName: 'Select a ship',
    shipTwoName: 'Select a ship',
    shipOne: [],
    shipTwo: [],
    selectedSite: '',
    shipOneSelectionOn: false,
    shipTwoSelectionOn: false
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
    },
    setCurrent(current) {
      this.currentSite = current
    },
    toggleShipOneSelection() {
      console.log(this.shipOneSelectionOn)
      if (this.shipOneSelectionOn) {
        this.shipOneSelectionOn = false
      } else if (!this.shipOneSelectionOn) {
        this.shipOneSelectionOn = true
      }
    },
    toggleShipTwoSelection() {
      console.log(this.shipTwoSelectionOn)
      if (this.shipTwoSelectionOn) {
        this.shipTwoSelectionOn = false
      } else if (!this.shipTwoSelectionOn) {
        this.shipTwoSelectionOn = true
      }
    },
    closeShipSelectionDropDowns() {
      this.shipOneSelectionOn = false
      this.shipTwoSelectionOn = false
    },
    selectShipOne(ship) {
      console.log(ship)
      this.shipOne[0] = ship
      this.shipOneName = ship.name
      this.shipOneSelectionOn = false
    },
    selectShipTwo(ship) {
      console.log(ship)
      this.shipTwo[0] = ship
      this.shipTwoName = ship.name
      this.shipTwoSelectionOn = false
    },
    checkWhichIsHigher(thisShip, otherShip, shipAttribute) {
      return thisShip[shipAttribute] * 1 > otherShip[shipAttribute] * 1
    },

    checkIfHighest(ship, shipArray) {
      for (let entry of shipArray) {
        if (entry.length > ship.length) {
          return true
        }
      }
      return false
    }
  }
})
