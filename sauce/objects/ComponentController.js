export class ComponentController {
  selectedDeck;
  selectedTrucks;
  selectedWheels;
  selectedBearings;
  selectedGrip;
  selectedSpacers;

  deck_catalogue = [];
  trucks_catalogue = [];
  wheels_catalogue = [];
  bearings_catalogue = [];
  grip_catalogue = [];
  spacers_catalogue = [];

  constructor() {
    this.selectedDeck = document.getElementById("selected_parts").querySelector(".selected-deck");
    this.selectedTrucks = document.getElementById("selected_parts").querySelector(".selected-trucks");
    this.selectedWheels = document.getElementById("selected_parts").querySelector(".selected-wheels");
    this.selectedBearings = document.getElementById("selected_parts").querySelector(".selected-bearings");
    this.selectedGrip = document.getElementById("selected_parts").querySelector(".selected-grip");
    this.selectedSpacers = document.getElementById("selected_parts").querySelector(".selected-spacers");

    this.deck_catalogue = document.getElementsByClassName("deck-item");
    this.trucks_catalogue = document.getElementsByClassName("truck-item");
    this.wheels_catalogue = document.getElementsByClassName("wheel-item");
    this.bearings_catalogue = document.getElementsByClassName("bearing-item");
    this.grip_catalogue = document.getElementsByClassName("grip-tape-item");
    this.spacers_catalogue = document.getElementsByClassName("spacer-item");
  }

  selectDeck(deckId) {
    let src = document.getElementById(deckId).querySelector(".product-picture").getAttribute("src");
    let name = document.getElementById(deckId).querySelector(".product-name").innerHTML;
    let price = document.getElementById(deckId).querySelector(".product-price").innerHTML;

    this.selectedDeck.querySelector(".product-picture").setAttribute('src', src);
    this.selectedDeck.querySelector(".product-name").innerHTML = name;
    this.selectedDeck.querySelector(".product-price").innerHTML = price;
  }
  selectTrucks(trucksId) {
    let src = document.getElementById(trucksId).querySelector(".product-picture").getAttribute("src");
    let name = document.getElementById(trucksId).querySelector(".product-name").innerHTML;
    let price = document.getElementById(trucksId).querySelector(".product-price").innerHTML;

    this.selectedTrucks.querySelector(".product-picture").setAttribute('src', src);
    this.selectedTrucks.querySelector(".product-name").innerHTML = name;
    this.selectedTrucks.querySelector(".product-price").innerHTML = price;
  }
  selectWheels(wheelsId) {
    let src = document.getElementById(wheelsId).querySelector(".product-picture").getAttribute("src");
    let name = document.getElementById(wheelsId).querySelector(".product-name").innerHTML;
    let price = document.getElementById(wheelsId).querySelector(".product-price").innerHTML;

    this.selectedWheels.querySelector(".product-picture").setAttribute('src', src);
    this.selectedWheels.querySelector(".product-name").innerHTML = name;
    this.selectedWheels.querySelector(".product-price").innerHTML = price;
  }
  selectBearings(bearingsId) {
    let src = document.getElementById(bearingsId).querySelector(".product-picture").getAttribute("src");
    let name = document.getElementById(bearingsId).querySelector(".product-name").innerHTML;
    let price = document.getElementById(bearingsId).querySelector(".product-price").innerHTML;

    this.selectedBearings.querySelector(".product-picture").setAttribute('src', src);
    this.selectedBearings.querySelector(".product-name").innerHTML = name;
    this.selectedBearings.querySelector(".product-price").innerHTML = price;
  }
  selectGrip(gripId) {
    let src = document.getElementById(gripId).querySelector(".product-picture").getAttribute("src");
    let name = document.getElementById(gripId).querySelector(".product-name").innerHTML;
    let price = document.getElementById(gripId).querySelector(".product-price").innerHTML;

    this.selectedGrip.querySelector(".product-picture").setAttribute('src', src);
    this.selectedGrip.querySelector(".product-name").innerHTML = name;
    this.selectedGrip.querySelector(".product-price").innerHTML = price;
  }
  selectSpacers(spacersId) {
    let src = document.getElementById(spacersId).querySelector(".product-picture").getAttribute("src");
    let name = document.getElementById(spacersId).querySelector(".product-name").innerHTML;
    let price = document.getElementById(spacersId).querySelector(".product-price").innerHTML;

    this.selectedSpacers.querySelector(".product-picture").setAttribute('src', src);
    this.selectedSpacers.querySelector(".product-name").innerHTML = name;
    this.selectedSpacers.querySelector(".product-price").innerHTML = price;
  }

}