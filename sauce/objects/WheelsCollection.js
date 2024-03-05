import * as THREE from 'three';

export class WheelsCollection {

  wheels = [];

  defaultWheels = new THREE.MeshStandardMaterial({color: 0xffffff, metalness: 0, roughness: 0, name:'WheelM'});

  constructor() {
    this.initializeCollection();
  }

  getWheels(i) {
    return this.wheels[i];
  }

  initializeCollection() {
    let wheels001 = new THREE.MeshStandardMaterial({color: 0xFF7C46, metalness: 0, roughness: 0.3, name:'WheelM'});
    let wheels002 = new THREE.MeshStandardMaterial({color: 0x9E9685, emissive: 0x9E9685, metalness: 0, roughness: 0.3, name:'WheelM'});
    let wheels003 = new THREE.MeshStandardMaterial({color: 0x7E9E00, metalness: 0, roughness: 0.3, name:'WheelM'});
    let wheels004 = new THREE.MeshStandardMaterial({color: 0x006E9E, metalness: 0, roughness: 0.3, name:'WheelM'});


    this.wheels.push(wheels001);
    this.wheels.push(wheels002);
    this.wheels.push(wheels003);
    this.wheels.push(wheels004);
  }

}
