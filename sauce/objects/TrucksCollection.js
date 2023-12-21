import * as THREE from 'three';
import TrucksMaterialContainer from "../objects/TrucksMaterialContainer.js";

export class TrucksCollection {

  trucks = [];

  constructor() {
    this.initializeCollection();
  }

  addTrucks(trucksToAdd){
    if(!(trucksToAdd instanceof TrucksMaterialContainer)){

    } else {
      this.trucks.push(trucksToAdd);
    }
  }

  getTrucks(i){
    return this.trucks[i];
  }

  /*
    let trucks001 = new TrucksMaterialContainer(
        new THREE.MeshStandardMaterial({color:0x000000, metalness:0,roughness:0,flatShading:false}), //main
        new THREE.MeshStandardMaterial({color:0x000000, metalness:0,roughness:0,flatShading:false}), //base
        new THREE.MeshStandardMaterial({color:0x000000, metalness:0,roughness:0,flatShading:false}), //screws
        new THREE.MeshStandardMaterial({color:0x000000, metalness:0,roughness:0,flatShading:false}), //bushings
        new THREE.MeshStandardMaterial({color:0x000000, metalness:0,roughness:0,flatShading:false})  //nuts
    );
  */

  initializeCollection(){
    let trucks001 = new TrucksMaterialContainer(
        new THREE.MeshStandardMaterial({color:0x808080, metalness:0.7,roughness:0.7,flatShading:false}),
        new THREE.MeshStandardMaterial({color:0xaa3333, metalness:0.8,roughness:0.3,flatShading:false}),
        new THREE.MeshStandardMaterial({color:0x777777, metalness:0.9,roughness:0.1,flatShading:false}),
        new THREE.MeshStandardMaterial({color:0x006666, metalness:0,roughness:0.8,flatShading:false}),
        new THREE.MeshStandardMaterial({color:0xaabbcc, metalness:0,roughness:0.5,flatShading:false})
    );
    this.addTrucks(trucks001);
  }
}