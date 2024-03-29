import * as THREE from 'three';
import {GLTFLoader} from '../../libraries/three.js-r157/examples/jsm/loaders/GLTFLoader.js';
import TrucksMaterialContainer from "./TrucksMaterialContainer.js";

export default class DeckFromFile extends THREE.Group {

  constructor(){
    super();
    this.gltfLoader = new GLTFLoader();
    this.textureLoader = new THREE.TextureLoader();
    this.meshes = [];
    this.smallDecks = [
      "sauce/textures/boards/Karl-Skateboard.png",
      "sauce/textures/boards/Karl-Skateboard2.png",
      "sauce/textures/boards/Karl-Skateboard3.png",
      "sauce/textures/boards/Karl-Skateboard4.png"
    ];
    this.hasRiser = false;
    this.smallDeck = false;
    this.smallTrucks = false;
    this.compatible = true;
    this.noGripMaterial;
    this.load(this);
  }

  load(thisDeck){
    this.gltfLoader.load('sauce/models/DeckWood.gltf', function(gltf){
      gltf.scene.traverse(function(child){
        if(child.isMesh){
          if(child.material.name === 'GripTapeM'){
            thisDeck.noGripMaterial = child.material;
          }
          if(child.material.name === 'DeckM'){
            thisDeck.noDeckMaterial = child.material;
          }
          child.parentDeck = thisDeck;
          child.castShadow = true;
          thisDeck.meshes.push(child);
        }
      });
      thisDeck.add(gltf.scene);
    });
  }

  upgradeDeckTexture(path){
    let texture = this.textureLoader.load(path);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1,-1);
    for(const element of this.meshes){
      if(element.material.name === 'DeckM'){
        element.material.map = texture;
      }
    }
    if(this.smallDecks.includes(path)){
      this.smallDeck = true;
    } else {
      this.smallDeck = false;
    }
    this.changeBoardSize();
  }

  updateTrucksMaterials(trucksMaterialContainer){
    if(!(trucksMaterialContainer instanceof TrucksMaterialContainer)){
      return;
    } else {
      for(const element of this.meshes){
        if(element.material.name === 'TruckMainM'){
          element.material = trucksMaterialContainer.mainMaterial;
        }
        if(element.material.name === 'TruckBaseM'){
          element.material = trucksMaterialContainer.basePlateMaterial;
        }
        if(element.material.name === 'BaseScrewsM'){
          element.material = trucksMaterialContainer.baseScrewsMaterial;
        }
        if(element.material.name === 'BushingM'){
          element.material = trucksMaterialContainer.bushingMaterial;
        }
        if(element.material.name === 'OuterNutsM'){
          element.material = trucksMaterialContainer.nutsMaterial;
        }
      }
    }
  }

  updateWheelsMaterial(wheelM){
    for(const element of this.meshes) {
      if (element.material.name === 'WheelM') {
        element.material = wheelM;
      }
    }
  }

  updateBearingsMaterials(bearingM){
    for(const element of this.meshes) {
      if (element.material.name === 'BearingM') {
        element.material = bearingM;
      }
    }
  }

  updateGripMaterial(gripTapeM){
    for(const element of this.meshes) {
      if (element.material.name === 'GripTapeM') {
        element.material = gripTapeM;
      }
    }
  }

  changeBoardSize(){
    let x;
    if(this.smallDeck){
      x = 0.95;
    } else {
      x = 1;
    }
    for(const element of this.meshes){
      if(element.name === 'Deck_1' || element.name === 'Deck_2' || element.name === 'Deck_3'){
        element.scale.set(x,1,x);
      }
    }
  }

  changeTruckSize(trucks){
    let x;
    if(trucks){
      x = 0.95;
      this.smallTrucks = true;
    } else {
      x = 1;
      this.smallTrucks = false;
    }
    for(const element of this.meshes){
      if(element.name === 'TrucksJoined_1' ||
          element.name === 'TrucksJoined_2' ||
          element.name === 'TrucksJoined_3' ||
          element.name === 'TrucksJoined_4' ||
          element.name === 'TrucksJoined_5' ||
          element.name === 'TrucksJoined_6' ||
          element.name === 'TrucksJoined_7' ||
          element.name === 'DeckScrews'){
        element.scale.set(x,x,x);
      }
    }
  }

  toggleRiserOffset(){
    let riserOffset;
    if(!this.hasRiser){
      riserOffset = 0.02725;
    } else {
      riserOffset = -0.02725;
    }
    for(const element of this.meshes){
      if(element.name === 'TrucksJoined_1'){ // TruckMain
        element.position.y += riserOffset;
      }
      if(element.name === 'TrucksJoined_2'){ // Wheels
        element.position.y += riserOffset;
      }
      if(element.name === 'TrucksJoined_3'){ // Bearings
        element.position.y += riserOffset;
      }
      if(element.name === 'TrucksJoined_4'){ // BasePlate
        element.position.y += riserOffset;
      }
      if(element.name === 'TrucksJoined_5'){ // OuterNuts
        element.position.y += riserOffset;
      }
      if(element.name === 'TrucksJoined_6'){ // Bushings
        element.position.y += riserOffset;
      }
      if(element.name === 'TrucksJoined_7'){ // BaseScrews
        element.position.y += riserOffset;
      }
    }
  }

  checkCompatible(){
    if((this.smallDeck && this.smallTrucks)||(!this.smallDeck && !this.smallTrucks)){
      document.getElementById("compatible").innerHTML = "Build compatible";
      document.getElementById("compatible").style.color = "#22c0c4";
      this.compatible = true;
    } else {
      if(this.smallDeck && !this.smallTrucks){
        document.getElementById("compatible").innerHTML = "We recommend matching Deck and Truck sizes";
        document.getElementById("compatible").style.color = "deeppink";
        this.compatible = false;
      } else {
        document.getElementById("compatible").innerHTML = "We recommend matching Deck and Truck sizes";
        document.getElementById("compatible").style.color = "deeppink";
        this.compatible = false;
      }
    }
  }
}