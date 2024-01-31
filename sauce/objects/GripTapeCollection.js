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
       bumpScale: 0.5,
       metalness: 0,
       color: 0x000000,
       roughness: 1
    });
   */

   initializeCollection(){
     let bmp = this.textureLoader.load("/sauce/textures/GriptapeBumpmap.png");
     bmp.wrapS = THREE.repeatWrapping;
     bmp.wrapT = THREE.repeatWrapping;
     bmp.repeat.set(8,2);

     let texture = this.textureLoader.load("/sauce/pictures/DECK DYNASTY Logo q sw-RGB.png");
     texture.wrapS = THREE.repeatWrapping;
     texture.wrapT = THREE.repeatWrapping;
     texture.repeat.set(-1,1);

     this.defaultGrip = new THREE.MeshStandardMaterial({
       name: 'GripTapeM',
       map: texture,
       bumpMap: bmp,
       bumpScale: 0.5,
       metalness: 0,
       color: 0xffffff,
       roughness: 1
     });

     let grip001 = new THREE.MeshStandardMaterial({
       name: 'GripTapeM',
       bumpMap: bmp,
       bumpScale: 0.5,
       metalness: 0,
       color: 0x999999,
       roughness: 1
     });
     let grip002 = new THREE.MeshStandardMaterial({
       name: 'GripTapeM',
       bumpMap: bmp,
       bumpScale: 0.5,
       metalness: 0,
       color: 0x000000,
       roughness: 1
     });

     this.grips.push(grip001);
     this.grips.push(grip002);
   }
}