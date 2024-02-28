export class ComponentController {
  selectedDeck;
  selectedTrucks;
  selectedWheels;
  selectedBearings;
  selectedGrip;
  selectedRisers;

  selectedParts = [];

  deck_catalogue = [];
  trucks_catalogue = [];
  wheels_catalogue = [];
  bearings_catalogue = [];
  grip_catalogue = [];
  risers_catalogue = [];

  totalSumP;

  complete = false;

  defaultIcons = [
      "sauce/pictures/default-icons/default-deck.png",
    "sauce/pictures/default-icons/default-trucks.png",
    "sauce/pictures/default-icons/default-wheels.png",
    "sauce/pictures/default-icons/default-bearings.png",
    "sauce/pictures/default-icons/default-griptape.png",
    "sauce/pictures/default-icons/default-riser.png"
  ];

  constructor() {
    this.selectedDeck = document.getElementById("selected_parts").querySelector(".selected-deck");
    this.selectedTrucks = document.getElementById("selected_parts").querySelector(".selected-trucks");
    this.selectedWheels = document.getElementById("selected_parts").querySelector(".selected-wheels");
    this.selectedBearings = document.getElementById("selected_parts").querySelector(".selected-bearings");
    this.selectedGrip = document.getElementById("selected_parts").querySelector(".selected-grip");
    this.selectedRisers = document.getElementById("selected_parts").querySelector(".selected-risers");

    this.deck_catalogue = document.getElementsByClassName("deck-item");
    this.trucks_catalogue = document.getElementsByClassName("truck-item");
    this.wheels_catalogue = document.getElementsByClassName("wheel-item");
    this.bearings_catalogue = document.getElementsByClassName("bearing-item");
    this.grip_catalogue = document.getElementsByClassName("grip-tape-item");
    this.risers_catalogue = document.getElementsByClassName("riser-item");

    this.selectedParts.push(this.selectedDeck,
        this.selectedTrucks,
        this.selectedWheels,
        this.selectedBearings,
        this.selectedGrip,
        this.selectedRisers);

    this.totalSumP = document.getElementById("total");
    this.initComponentController();
  }

  initComponentController(){
    this.selectedDeck.querySelector(".product-picture").style.marginTop = "15%";
    this.selectedTrucks.querySelector(".product-picture").style.marginTop = "15%";
    this.selectedWheels.querySelector(".product-picture").style.marginTop = "15%";
    this.selectedBearings.querySelector(".product-picture").style.marginTop = "15%";
    this.selectedGrip.querySelector(".product-picture").style.marginTop = "15%";
    this.selectedRisers.querySelector(".product-picture").style.marginTop = "15%";
  }

  selectDeck(deckId) {
    let src = document.getElementById(deckId).querySelector(".product-picture").getAttribute("src");
    let name = document.getElementById(deckId).querySelector(".product-name").innerHTML;
    let price = document.getElementById(deckId).querySelector(".product-price").innerHTML;

    this.selectedDeck.querySelector(".product-picture").setAttribute('src', src);
    this.selectedDeck.querySelector(".product-picture").style.marginTop = "5%";
    this.selectedDeck.querySelector(".product-name").innerHTML = name;
    this.selectedDeck.querySelector(".product-name").display = true;
    this.selectedDeck.querySelector(".product-price").innerHTML = price;
    this.selectedDeck.querySelector(".product-price").display = true;
  }
  selectTrucks(trucksId) {
    let src = document.getElementById(trucksId).querySelector(".product-picture").getAttribute("src");
    let name = document.getElementById(trucksId).querySelector(".product-name").innerHTML;
    let price = document.getElementById(trucksId).querySelector(".product-price").innerHTML;

    this.selectedTrucks.querySelector(".product-picture").setAttribute('src', src);
    this.selectedTrucks.querySelector(".product-picture").style.marginTop = "5%";
    this.selectedTrucks.querySelector(".product-name").innerHTML = name;
    this.selectedTrucks.querySelector(".product-name").display = true;
    this.selectedTrucks.querySelector(".product-price").innerHTML = price;
    this.selectedTrucks.querySelector(".product-price").display = true;
  }
  selectWheels(wheelsId) {
    let src = document.getElementById(wheelsId).querySelector(".product-picture").getAttribute("src");
    let name = document.getElementById(wheelsId).querySelector(".product-name").innerHTML;
    let price = document.getElementById(wheelsId).querySelector(".product-price").innerHTML;

    this.selectedWheels.querySelector(".product-picture").setAttribute('src', src);
    this.selectedWheels.querySelector(".product-picture").style.marginTop = "5%";
    this.selectedWheels.querySelector(".product-name").innerHTML = name;
    this.selectedWheels.querySelector(".product-name").display = true;
    this.selectedWheels.querySelector(".product-price").innerHTML = price;
    this.selectedWheels.querySelector(".product-price").display = true;
  }
  selectBearings(bearingsId) {
    let src = document.getElementById(bearingsId).querySelector(".product-picture").getAttribute("src");
    let name = document.getElementById(bearingsId).querySelector(".product-name").innerHTML;
    let price = document.getElementById(bearingsId).querySelector(".product-price").innerHTML;

    this.selectedBearings.querySelector(".product-picture").setAttribute('src', src);
    this.selectedBearings.querySelector(".product-picture").style.marginTop = "5%";
    this.selectedBearings.querySelector(".product-name").innerHTML = name;
    this.selectedBearings.querySelector(".product-name").display = true;
    this.selectedBearings.querySelector(".product-price").innerHTML = price;
    this.selectedBearings.querySelector(".product-price").display = true;
  }
  selectGrip(gripId) {
    let src = document.getElementById(gripId).querySelector(".product-picture").getAttribute("src");
    let name = document.getElementById(gripId).querySelector(".product-name").innerHTML;
    let price = document.getElementById(gripId).querySelector(".product-price").innerHTML;

    this.selectedGrip.querySelector(".product-picture").setAttribute('src', src);
    this.selectedGrip.querySelector(".product-picture").style.marginTop = "5%";
    this.selectedGrip.querySelector(".product-name").innerHTML = name;
    this.selectedGrip.querySelector(".product-name").display = true;
    this.selectedGrip.querySelector(".product-price").innerHTML = price;
    this.selectedGrip.querySelector(".product-price").display = true;
  }
  selectRisers(risersId) {
    let src = document.getElementById(risersId).querySelector(".product-picture").getAttribute("src");
    let name = document.getElementById(risersId).querySelector(".product-name").innerHTML;
    let price = document.getElementById(risersId).querySelector(".product-price").innerHTML;

    this.selectedRisers.querySelector(".product-picture").setAttribute('src', src);
    this.selectedRisers.querySelector(".product-picture").style.marginTop = "5%";
    this.selectedRisers.querySelector(".product-name").innerHTML = name;
    this.selectedRisers.querySelector(".product-name").display = true;
    this.selectedRisers.querySelector(".product-price").innerHTML = price;
    this.selectedRisers.querySelector(".product-price").display = true;
  }

  deselectDeck(){
    this.selectedDeck.querySelector(".product-picture").setAttribute('src', '/sauce/pictures/default-icons/default-deck.png');
    this.selectedDeck.querySelector(".product-picture").style.marginTop = "15%";
    this.selectedDeck.querySelector(".product-name").innerHTML = "";
    this.selectedDeck.querySelector(".product-name").display = false;
    this.selectedDeck.querySelector(".product-price").innerHTML = "";
    this.selectedDeck.querySelector(".product-price").display = false;
  }
  deselectTrucks(){
    this.selectedTrucks.querySelector(".product-picture").setAttribute('src', 'sauce/pictures/default-icons/default-trucks.png');
    this.selectedTrucks.querySelector(".product-picture").style.marginTop = "15%";
    this.selectedTrucks.querySelector(".product-name").innerHTML = "";
    this.selectedTrucks.querySelector(".product-name").display = true;
    this.selectedTrucks.querySelector(".product-price").innerHTML = "";
    this.selectedTrucks.querySelector(".product-price").display = true;
  }
  deselectWheels(){
    this.selectedWheels.querySelector(".product-picture").setAttribute('src', 'sauce/pictures/default-icons/default-wheels.png');
    this.selectedWheels.querySelector(".product-picture").style.marginTop = "15%";
    this.selectedWheels.querySelector(".product-name").innerHTML = "";
    this.selectedWheels.querySelector(".product-name").display = true;
    this.selectedWheels.querySelector(".product-price").innerHTML = "";
    this.selectedWheels.querySelector(".product-price").display = true;
  }
  deselectBearings(){
    this.selectedBearings.querySelector(".product-picture").setAttribute('src', 'sauce/pictures/default-icons/default-bearings.png');
    this.selectedBearings.querySelector(".product-picture").style.marginTop = "15%";
    this.selectedBearings.querySelector(".product-name").innerHTML = "";
    this.selectedBearings.querySelector(".product-name").display = true;
    this.selectedBearings.querySelector(".product-price").innerHTML = "";
    this.selectedBearings.querySelector(".product-price").display = true;
  }
  deselectGrip(){
    this.selectedGrip.querySelector(".product-picture").setAttribute('src', 'sauce/pictures/default-icons/default-griptape.png');
    this.selectedGrip.querySelector(".product-picture").style.marginTop = "15%";
    this.selectedGrip.querySelector(".product-name").innerHTML = "";
    this.selectedGrip.querySelector(".product-name").display = true;
    this.selectedGrip.querySelector(".product-price").innerHTML = "";
    this.selectedGrip.querySelector(".product-price").display = true;
  }
  deselectRisers(){
    this.selectedRisers.querySelector(".product-picture").setAttribute('src', 'sauce/pictures/default-icons/default-riser.png');
    this.selectedRisers.querySelector(".product-picture").style.marginTop = "15%";
    this.selectedRisers.querySelector(".product-name").innerHTML = "";
    this.selectedRisers.querySelector(".product-name").display = true;
    this.selectedRisers.querySelector(".product-price").innerHTML = "";
    this.selectedRisers.querySelector(".product-price").display = true;
  }

  checkOut(){
    let total_price = 0.0;
    let prices_s = [
        this.selectedDeck.querySelector(".product-price").innerHTML,
        this.selectedTrucks.querySelector(".product-price").innerHTML,
        this.selectedWheels.querySelector(".product-price").innerHTML,
        this.selectedBearings.querySelector(".product-price").innerHTML,
        this.selectedGrip.querySelector(".product-price").innerHTML,
        this.selectedRisers.querySelector(".product-price").innerHTML
    ];
    for(const p of prices_s){
      if(!(p === '')){
        let priceWithoutSign = p.replace('€', '');
        let priceToFloat = parseFloat(priceWithoutSign.replace(',', '.'));
        total_price += priceToFloat;
      }
    }
    let priceString = total_price.toFixed(2);
    this.totalSumP.innerHTML = "Total: " + priceString + "€";
  }

  missingParts(){
    this.complete = true;
    for(const part of this.selectedParts){
      if(this.defaultIcons.includes(part.querySelector(".product-picture").getAttribute('src'))){
        this.complete = false;
      }
    }
    return this.complete;
  }

}