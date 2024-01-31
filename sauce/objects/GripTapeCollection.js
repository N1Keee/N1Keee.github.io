import * as THREE from 'three';

export class GripTapeCollection {
   grips = [];

   defaultGrip;

   textureLoader = new THREE.TextureLoader();

   constructor() {
     this.initializeCollection();
   }

   getGrip(i){
     return this.grips[i];
   }

   /*
   let grip00X = new THREE.MeshStandardMaterial({
       name: 'GripTapeM',
       bumpMap: bmp,
       bumpScale: 10,
       metalness: 0,
       color: 0x000000,
       roughness: 1
    });
   */

   initializeCollection(){
     let bmp = this.textureLoader.load("/sauce/textures/GriptapeBumpmap.png");

     //bmp.wrapS = THREE.repeatWrapping;
     //bmp.wrapT = THREE.repeatWrapping;

     let grip001 = new THREE.MeshStandardMaterial({
       name: 'GripTapeM',
       bumpMap: bmp,
       bumpScale: 5,
       metalness: 0,
       color: 0x999999,
       roughness: 1
     });
     let grip002 = new THREE.MeshStandardMaterial({
       name: 'GripTapeM',
       bumpMap: bmp,
       bumpScale: 10,
       metalness: 0,
       color: 0x000000,
       roughness: 1
     });

     this.grips.push(grip001);
     this.grips.push(grip002);

     this.defaultGrip = new THREE.MeshStandardMaterial({
       name: 'GripTapeM',
       bumpMap: bmp,
       bumpScale: 10,
       metalness: 0,
       color: 0xffffff,
       roughness: 1
     });
   }
}