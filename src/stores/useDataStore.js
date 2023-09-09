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
    searchSwapi(userinput) {
      if (userinput !== '') {
        return fetch(`https://swapi.dev/api/starships/?search=${userinput}`, {
          method: 'GET',
          contentType: 'application/json'
        })
          .then((response) => response.json())
          .then((data) => {
            this.searchResults = data
          })
      }
    },
    searchAction(userinput) {
      this.searchSwapi(userinput)
      this.setCurrent('search')
    },
    saveShip(ship) {
      this.savedShips.push(ship)
      localStorage.setItem('savedShips', JSON.stringify(this.savedShips))
    },
    setCurrent(current) {
      this.currentSite = current
      this.searchResults = {}
    },
    toggleShipOneSelection() {
      if (this.shipOneSelectionOn) {
        this.shipOneSelectionOn = false
      } else if (!this.shipOneSelectionOn) {
        this.shipOneSelectionOn = true
      }
    },
    toggleShipTwoSelection() {
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
      this.shipOne[0] = ship
      this.shipOneName = ship.name
      this.shipOneSelectionOn = false
    },
    selectShipTwo(ship) {
      this.shipTwo[0] = ship
      this.shipTwoName = ship.name
      this.shipTwoSelectionOn = false
    },
    checkWhichIsHigher(thisShip, otherShip, shipAttribute) {
      return (
        thisShip[shipAttribute].replace(/\D/g, '') * 1 >
        otherShip[shipAttribute].replace(/\D/g, '') * 1
      )
    }
  }
})
