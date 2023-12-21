import * as THREE from 'three';

export class WheelsCollection {

  wheels = [];

  constructor() {
    this.initializeCollection();
  }

  getWheels(i) {
    return this.wheels[i];
  }

  // let wheels001 = new THREE.MeshStandardMaterial({color: 0x808099, metalness: 0.1, roughness: 0.9});

  initializeCollection() {
    let wheels001 = new THREE.MeshStandardMaterial({color: 0x808099, metalness: 0.1, roughness: 0.9});

    this.wheels.push(wheels001);
  }

}