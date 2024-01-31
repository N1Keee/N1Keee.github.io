import * as THREE from 'three';

export class GripTapeCollection {
   grips = [];

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

     /*
     this.defaultGrip = new THREE.MeshStandardMaterial({
       name: 'GripTapeM',
       bumpMap: bmp,
       bumpScale: 0.5,
       metalness: 0,
       color: 0x626262,
       roughness: 1
     });
     */
     let grip001 = new THREE.MeshStandardMaterial({
       name: 'GripTapeM',
       bumpMap: bmp,
       bumpScale: 0.5,
       metalness: 0,
       color: 0x000000,
       roughness: 1
     });

     let texture002 = this.textureLoader.load("/sauce/textures/griptapes/DDgriptape-default.png");
     texture002.wrapS = THREE.repeatWrapping;
     texture002.wrapT = THREE.repeatWrapping;
     texture002.repeat.set(-1,1);
     let grip002 = new THREE.MeshStandardMaterial({
       name: 'GripTapeM',
       map: texture002,
       bumpMap: bmp,
       bumpScale: 0.5,
       metalness: 0,
       color: 0x666666,
       roughness: 1
     });

     let texture003 = this.textureLoader.load("/sauce/textures/griptapes/Griptape3.png");
     texture003.wrapS = THREE.repeatWrapping;
     texture003.wrapT = THREE.repeatWrapping;
     texture003.repeat.set(-1,1);
     let grip003 = new THREE.MeshStandardMaterial({
       name: 'GripTapeM',
       map: texture003,
       bumpMap: bmp,
       bumpScale: 0.5,
       metalness: 0,
       color: 0x626262,
       roughness: 1
     });
     let texture004 = this.textureLoader.load("/sauce/textures/griptapes/Griptape4.png");
     texture004.wrapS = THREE.repeatWrapping;
     texture004.wrapT = THREE.repeatWrapping;
     texture004.repeat.set(-1,1);
     let grip004 = new THREE.MeshStandardMaterial({
       name: 'GripTapeM',
       map: texture004,
       bumpMap: bmp,
       bumpScale: 0.5,
       metalness: 0,
       color: 0xaaaaaa,
       roughness: 1
     });

     this.grips.push(grip001);
     this.grips.push(grip002);
     this.grips.push(grip003);
     this.grips.push(grip004);
   }
}