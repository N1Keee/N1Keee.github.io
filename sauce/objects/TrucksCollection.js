import * as THREE from 'three';
import TrucksMaterialContainer from "../objects/TrucksMaterialContainer.js";

export class TrucksCollection {

  trucks = [];

  small_trucks = [];

  defaultTrucks = new TrucksMaterialContainer(
      new THREE.MeshStandardMaterial({color:0xeeeeee, metalness:0,roughness:0,flatShading:false}), //main
      new THREE.MeshStandardMaterial({color:0xffffff, metalness:0,roughness:0,flatShading:false}), //base
      new THREE.MeshStandardMaterial({color:0x111111, metalness:0,roughness:0,flatShading:false}), //screws
      new THREE.MeshStandardMaterial({color:0xffffff, metalness:0,roughness:0,flatShading:false}), //bushings
      new THREE.MeshStandardMaterial({color:0xffffff, metalness:0,roughness:0,flatShading:false})  //nuts
  );

  constructor() {
    this.initializeCollection();
  }

  getTrucks(i){
    return this.trucks[i];
  }

  initializeCollection(){
    let trucks001 = new TrucksMaterialContainer(
        new THREE.MeshStandardMaterial({color:0x474747, metalness:0.8,roughness:0.3,flatShading:false}),
        new THREE.MeshStandardMaterial({color:0x737373, metalness:0.8,roughness:0.3,flatShading:false}),
        new THREE.MeshStandardMaterial({color:0x000000, metalness:0.9,roughness:0.1,flatShading:false}),
        new THREE.MeshStandardMaterial({color:0x000000, metalness:0,roughness:0.8,flatShading:false}),
        new THREE.MeshStandardMaterial({color:0x000000, metalness:0,roughness:0.5,flatShading:false})
    );
    let trucks002 = new TrucksMaterialContainer(
        new THREE.MeshStandardMaterial({color:0x4A7A9E, metalness:0.8,roughness:0.3,flatShading:false}), //main
        new THREE.MeshStandardMaterial({color:0xFFE7BF, metalness:0.8,roughness:0.3,flatShading:false}), //base
        new THREE.MeshStandardMaterial({color:0x000000, metalness:0.9,roughness:0.1,flatShading:false}), //screws
        new THREE.MeshStandardMaterial({color:0xCFCFCF, metalness:0,roughness:0.8,flatShading:false}), //bushings
        new THREE.MeshStandardMaterial({color:0x000000, metalness:0,roughness:0.5,flatShading:false})  //nuts
    );
    let trucks003 = new TrucksMaterialContainer(
        new THREE.MeshStandardMaterial({color:0xBFBFBF, metalness:0.8,roughness:0.3,flatShading:false}), //main
        new THREE.MeshStandardMaterial({color:0x457E56, metalness:0.8,roughness:0.3,flatShading:false}), //base
        new THREE.MeshStandardMaterial({color:0x000000, metalness:0.9,roughness:0.1,flatShading:false}), //screws
        new THREE.MeshStandardMaterial({color:0x67B400, metalness:0,roughness:0.8,flatShading:false}), //bushings
        new THREE.MeshStandardMaterial({color:0x000000, metalness:0,roughness:0.5,flatShading:false})  //nuts
    );
    let trucks004 = new TrucksMaterialContainer(
        new THREE.MeshStandardMaterial({color:0x7C329E, metalness:0.8,roughness:0.3,flatShading:false}), //main
        new THREE.MeshStandardMaterial({color:0xC9C9C9, metalness:0.8,roughness:0.3,flatShading:false}), //base
        new THREE.MeshStandardMaterial({color:0x000000, metalness:0.9,roughness:0.1,flatShading:false}), //screws
        new THREE.MeshStandardMaterial({color:0xCF88AE, metalness:0,roughness:0.8,flatShading:false}), //bushings
        new THREE.MeshStandardMaterial({color:0x7C329E, metalness:0,roughness:0.5,flatShading:false})  //nuts
    );

    this.trucks.push(trucks001);
    this.trucks.push(trucks002);
    this.trucks.push(trucks003);
    this.trucks.push(trucks004);

    this.small_trucks.push(trucks001);
  }
}