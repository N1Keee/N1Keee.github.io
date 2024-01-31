import * as THREE from 'three';
import {GLTFLoader} from '../../libraries/three.js-r157/examples/jsm/loaders/GLTFLoader.js';

export default class RiserFromFile extends THREE.Group {

  constructor() {
    super();
    this.gltfLoader = new GLTFLoader();
    this.meshes = [];
    this.load(this);
  }

  load(thisRiser) {
    this.gltfLoader.load('sauce/models/Riser.gltf', function(gltf){
      gltf.scene.traverse(function(child){
        if(child.isMesh){
          child.parentRiser = thisRiser;
          child.castShadow = true;
          //child.receiveShadow = true;
          thisRiser.meshes.push(child);
          console.log("pushed " + child.name + " with materials: " +  child.material.name);
        }
      });
      thisRiser.add(gltf.scene);
    });
  }

  updateRisersMaterial(risersM){
    for(const element of this.meshes) {
      element.material = risersM;
    }
  }

}