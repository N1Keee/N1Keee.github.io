import * as THREE from 'three';
import {GLTFLoader} from '../../libraries/three.js-r157/examples/jsm/loaders/GLTFLoader.js';
import TrucksMaterialContainer from "./TrucksMaterialContainer.js";

export default class DeckFromFile extends THREE.Group {

  constructor(){
    super();
    this.gltfLoader = new GLTFLoader();
    this.textureLoader = new THREE.TextureLoader();
    this.meshes = [];
    this.loadingDone = false;
    this.load(this);


    this.hasRiser = false;
    this.smallDecks = [
      "sauce/textures/boards/Karl-Skateboard.png",
      "sauce/textures/boards/Karl-Skateboard2.png",
      "sauce/textures/boards/Karl-Skateboard3.png",
      "sauce/textures/boards/Karl-Skateboard4.png"
    ];
    this.smallDeck = false;
  }

  load(thisDeck){
    this.gltfLoader.load('sauce/models/decksmalltest.gltf', function(gltf){
      gltf.scene.traverse(function(child){
        if(child.isMesh){
          child.parentDeck = thisDeck;
          child.castShadow = true;
          thisDeck.meshes.push(child);
          console.log("Deck: pushed " + child.name + " with materials: " +  child.material.name);
        }
      });
      thisDeck.add(gltf.scene);
      thisDeck.loadingDone = true;
    });
  }

  upgradeDeckTexture(path){
    console.log(path);
    let texture = this.textureLoader.load(path);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    //texture.repeat.set(-1,1);
    texture.repeat.set(1,-1);
    for(const element of this.meshes){
      if(element.material.name === 'DeckM'){
        element.material.map = texture;
      }
    }
    if(this.smallDecks.includes(path)){
      console.log("7.75inch deck");
      this.smallDeck = true;
    } else {
      console.log("8inch deck");
      this.smallDeck = false;
    }
    this.changeBoardSize();
  }

  updateTrucksMaterials(trucksMaterialContainer){
    if(!(trucksMaterialContainer instanceof TrucksMaterialContainer)){
      return;
    } else {
      console.log(trucksMaterialContainer.nutsMaterial.color);
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
    if(this.smallDeck){
      for(const element of this.meshes){
        if(element.name === 'Deck_1' || element.name === 'Deck_2' || element.name === 'Deck_3'){
          element.scale.set(0.95,1,0.95);
        }
      }
    } else {
      for(const element of this.meshes){
        if(element.name === 'Deck_1' || element.name === 'Deck_2' || element.name === 'Deck_3'){
          element.scale.set(1,1,1);
        }
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
      // move up trucks, wheels, bearings
      if(element.name === 'TrucksJoined_1'){ // TruckMain
        element.position.y += riserOffset;
      }
      if(element.name === 'TrucksJoined_2'){ // Wheels
        element.position.y += riserOffset;
      }
      /*
      */
      if(element.name === 'TrucksJoined_3'){ // Bearings
        element.position.y += riserOffset;
      }
      /*
      */
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
}