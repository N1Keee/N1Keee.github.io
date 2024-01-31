import * as THREE from 'three';

export class BearingsCollection {

  bearings = [];

  defaultBearings = new THREE.MeshStandardMaterial({color:0xffffff, metalness:0,roughness:0, name: 'BearingM'});

  constructor() {
    this.initializeCollection();
  }

  getBearings(i) {
    return this.bearings[i];
  }

  // let bearings001 = new THREE.MeshStandardMaterial({color:0x306075, metalness:0.9,roughness:0.123, name: 'BearingM'});

  initializeCollection() {
    let bearings001 = new THREE.MeshStandardMaterial({color:0x810000, metalness:0,roughness:0.8, name: 'BearingM'});
    let bearings002 = new THREE.MeshStandardMaterial({color:0x62397E, metalness:0,roughness:0.8, name: 'BearingM'});
    let bearings003 = new THREE.MeshStandardMaterial({color:0x7E9E00, metalness:0,roughness:0.8, name: 'BearingM'});
    let bearings004 = new THREE.MeshStandardMaterial({color:0x505050, metalness:0,roughness:0.8, name: 'BearingM'});

    this.bearings.push(bearings001);
    this.bearings.push(bearings002);
    this.bearings.push(bearings003);
    this.bearings.push(bearings004);
  }

}