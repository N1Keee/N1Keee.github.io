import * as THREE from 'three';

export class SpacersCollection {
  spacers = [];

  constructor() {
    this.initializeCollection();
  }

  getSpacers(i){
    return this.spacers[i];
  }

  // let spacers001 = new THREE.MeshStandardMaterial({color: 0x333333, metalness: 0.5, roughness: 1});

  initializeCollection(){
    let spacers001 = new THREE.MeshStandardMaterial({color: 0x333333, metalness: 0.5, roughness: 1});

    this.spacers.push(spacers001);
  }
}