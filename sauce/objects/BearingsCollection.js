import * as THREE from 'three';

export class BearingsCollection {

  bearings = [];

  constructor() {
    this.initializeCollection();
  }

  getBearings(i) {
    return this.bearings[i];
  }

  // let bearings001 = new THREE.MeshStandardMaterial({color:0x306075, metalness:0.9,roughness:0.123});

  initializeCollection() {
    let bearings001 = new THREE.MeshStandardMaterial({color:0x306075, metalness:0.9,roughness:0.123});

    this.bearings.push(bearings001);
  }

}