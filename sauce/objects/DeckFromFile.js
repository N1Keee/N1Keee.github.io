import * as THREE from 'three';
import {GLTFLoader} from '../../libraries/three.js-r157/examples/jsm/loaders/GLTFLoader.js';
import TrucksMaterialContainer from "./TrucksMaterialContainer.js";

export default class DeckFromFile extends THREE.Group {

  constructor(){
    super();
    this.gltfLoader = new GLTFLoader();
    this.textureLoader = new THREE.TextureLoader();
    this.meshes = [];
    this.load(this);
  }

  load(thisDeck){
    this.gltfLoader.load('sauce/models/SkateboardNamed 1.gltf', function(gltf){
      gltf.scene.traverse(function(child){
        if(child.isMesh){
          child.parentDeck = thisDeck;
          child.castShadow = true;
          child.receiveShadow = true;
          thisDeck.meshes.push(child);
          console.log("pushed " + child.name + " with materials: " +  child.material.name);
        }
      });
      thisDeck.add(gltf.scene);
    });
  }

  upgradeDeckTexture(path){
    console.log(path);
    let texture = this.textureLoader.load(path);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(-1,1);
    for(const element of this.meshes){
      if(element.material.name === 'DeckM'){
        element.material.map = texture;
      }
    }
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

  updateSpacersMaterial(spacersM){
    for(const element of this.meshes) {
      if (element.material.name === 'SpacersM') {
        element.material = spacersM;
      }
    }
  }
}