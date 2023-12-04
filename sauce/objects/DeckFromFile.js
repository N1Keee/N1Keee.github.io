import * as THREE from 'three';
import {GLTFLoader} from 'gltfloader';

export default class DeckFromFile extends THREE.Group {

  constructor(){
    super();
    this.gltfLoader = new GLTFLoader();
    this.textureLoader = new THREE.TextureLoader();
    this.meshes = [];
    this.load(this);
  }

  load(thisDeck){
    this.gltfLoader.load('sauce/models/deck4.gltf', function(gltf){
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

  updateTexture(pathToTexture){
    console.log("updating texture...");
    let texture = this.textureLoader.load(pathToTexture);
    console.log(pathToTexture);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(-1,1);
    for(const element of this.meshes){
      if(element.material.name === 'deck-graphic'){
        element.material.map = texture;
      }
    }
  }

  upgradeTexture2(){
    for(const element of this.meshes){
      if(element.material.name === 'deck-graphic'){
        element.material.color = 0xffffff;
      }
    }
  }
}