import * as THREE from 'three';

export class GripTapeCollection {
   grips = [];

   constructor() {
     this.initializeCollection();
   }

   getGrip(i){
     return this.grips[i];
   }

   // let grip001 = new THREE.MeshStandardMaterial({color: 0x333333, metalness: 0.5, roughness: 1});

   initializeCollection(){
     let grip001 = new THREE.MeshStandardMaterial({color: 0x333333, metalness: 0.5, roughness: 1});

     this.grips.push(grip001);
   }
}