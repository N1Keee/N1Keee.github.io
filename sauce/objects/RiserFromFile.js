import * as THREE from 'three';
import {GLTFLoader} from '../../libraries/three.js-r157/examples/jsm/loaders/GLTFLoader.js';

export default class RiserFromFile extends THREE.Group {

  constructor() {
    super();
    this.gltfLoader = new GLTFLoader();
    this.meshes = [];
    this.smallRisers = false;
    this.load(this);
  }

  load(thisRiser) {
    this.gltfLoader.load('sauce/models/Riser.gltf', function(gltf){
      gltf.scene.traverse(function(child){
        if(child.isMesh){
          child.parentRiser = thisRiser;
          child.castShadow = true;
          thisRiser.meshes.push(child);
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

  adjustRiserPosition(smallTrucks){
    if(!smallTrucks){
      for(const element of this.meshes){
        element.scale.set(1,1,1);
        this.smallRisers = false;
      }
    } else {
      for(const element of this.meshes){
        element.scale.set(0.95,1,0.95);
        this.smallRisers = true;
      }
    }
  }

}