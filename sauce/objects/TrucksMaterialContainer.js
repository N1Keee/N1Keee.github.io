import * as THREE from 'three';

export default class TrucksMaterialContainer{

  mainMaterial = new THREE.MeshStandardMaterial();
  basePlateMaterial = new THREE.MeshStandardMaterial();
  baseScrewsMaterial = new THREE.MeshStandardMaterial();
  bushingMaterial = new THREE.MeshStandardMaterial();
  nutsMaterial = new THREE.MeshStandardMaterial();

  constructor(truckMainM, truckBaseM, truckScrewsM, truckBushingsM, truckNutsM) {
    this.mainMaterial = truckMainM;
    this.basePlateMaterial = truckBaseM;
    this.baseScrewsMaterial = truckScrewsM;
    this.bushingMaterial = truckBushingsM;
    this.nutsMaterial = truckNutsM;

    this.mainMaterial.name = "TruckMainM";
    this.basePlateMaterial.name = "TruckBaseM";
    this.baseScrewsMaterial.name = "BaseScrewsM";
    this.bushingMaterial.name = "BushingM";
    this.nutsMaterial.name = "OuterNutsM";
  }
}