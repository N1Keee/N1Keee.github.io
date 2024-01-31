import * as THREE from 'three';

export class RisersCollection {
  risers = [];

  constructor() {
    this.initializeCollection();
  }

  getRisers(i){
    return this.risers[i];
  }

  // let risers001 = new THREE.MeshStandardMaterial({color: 0x333333, metalness: 0.5, roughness: 1});

  initializeCollection(){
    let risers001 = new THREE.MeshStandardMaterial({color: 0x212121, metalness: 0, roughness: 0});
    let risers002 = new THREE.MeshStandardMaterial({color: 0xFFE7BF, metalness: 0, roughness: 0});
    let risers003 = new THREE.MeshStandardMaterial({color: 0x457E56, metalness: 0, roughness: 0});
    let risers004 = new THREE.MeshStandardMaterial({color: 0xFF7C46, metalness: 0, roughness: 0});

    this.risers.push(risers001);
    this.risers.push(risers002);
    this.risers.push(risers003);
    this.risers.push(risers004);
  }
}