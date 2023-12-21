import * as THREE from 'three';
import * as CONTROLS from '/libraries/three.js-r157/examples/jsm/controls/OrbitControls.js';

import DeckFromFile from "../sauce/objects/DeckFromFile.js";
import TrucksMaterialContainer from "../sauce/objects/TrucksMaterialContainer.js"
import {TrucksCollection} from "./objects/TrucksCollection.js";
import {ComponentController} from "./objects/ComponentController.js";
import {WheelsCollection} from "./objects/WheelsCollection.js";
import {BearingsCollection} from "./objects/BearingsCollection.js";
import {GripTapeCollection} from "./objects/GripTapeCollection.js";
import {SpacersCollection} from "./objects/SpacersCollection.js";
//import BearingsMaterialContainer from "../sauce/objects/BearingsMaterialContainer.js"
//import RiserMaterialContainer from "../sauce/objects/RiserMaterialContainer.js"

let container;
let scene, camera, renderer;
let orbitControls;
let aspectRatio = window.innerWidth / window.innerHeight;
let deckFromFile = new DeckFromFile();

let componentController = new ComponentController();

let trucksCollection = new TrucksCollection();
let wheelsCollection = new WheelsCollection();
let bearingsCollection = new BearingsCollection();
let gripTapeCollection = new GripTapeCollection();
let spacersCollection = new SpacersCollection();

let t = 0;

function init() {
  initDeckCatalogue();
  initTrucksCatalogue();
  initWheelsCatalogue();
  initBearingsCatalogue();
  initGripTapeCatalogue();
  initSpacersCatalogue();

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, aspectRatio, 0.1, 2000);
  camera.position.set(-64, 256, 256);
  camera.lookAt(0,0,0);

  container = document.getElementById('three_content');

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setPixelRatio(aspectRatio); //window.devicePixelRatio
  renderer.setSize(container.scrollWidth,container.scrollHeight);
  renderer.setClearColor(0xffffff);
  renderer.shadowMapEnabled = true;

  container.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add( ambientLight );

  deckFromFile.scale.set(120,120,120);
  scene.add(deckFromFile);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.target = deckFromFile;
  scene.add(directionalLight);

  orbitControls = new CONTROLS.OrbitControls(camera, renderer.domElement);
  //orbitControls.target = new THREE.Vector3(0, 0, 0);
  orbitControls.enablePan = false;

  document.getElementById("toggle_animation").addEventListener("click", function(){
    toggleAnimation();
  });
  document.getElementById("cam_1").addEventListener("click", function(){
    cameraAngle(0);
  });
  document.getElementById("cam_2").addEventListener("click", function(){
    cameraAngle(1);
  });
  document.getElementById("cam_3").addEventListener("click", function(){
    cameraAngle(2);
  });
}

function updateAspectRatio(){
  container = document.getElementById('three_content');
  camera.aspect = container.scrollWidth / container.scrollHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.scrollWidth, container.scrollHeight);
}

function main() {
  init();
  function mainLoop() {
    requestAnimationFrame(mainLoop);
    orbitControls.update();

    deckFromFile.rotation.x += t;
    //deckFromFile.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  mainLoop();
}

function cameraAngle(i){
  switch(i){
    case 0:
      camera.position.set(-64, 256, 256);
      camera.lookAt(0,0,0);
      break;
    case 1:
      camera.position.set(400, 128, 0);
      camera.lookAt(0,0,0);
      break;
    case 2:
      camera.position.set(0, 128, 400);
      camera.lookAt(0,0,0);
      break;
    default:
      camera.position.set(-64, 256, 256);
      camera.lookAt(0,0,0);
      break;
  }
}

function toggleAnimation(){
  if(t == 0){
    t = 0.01;
  } else {
    t = 0;
  }
}

function initDeckCatalogue() {
  for(const deck of componentController.deck_catalogue){
    deck.addEventListener("click", function() {
      deckFromFile.upgradeDeckTexture(document.getElementById(deck.getAttribute("id")).querySelector(".product-picture").getAttribute("src"));
      componentController.selectDeck(deck.getAttribute("id"));
    });
  }
}

function initTrucksCatalogue() {
  let i = 0;
  for(const trucks of componentController.trucks_catalogue){
    trucks.addEventListener("click", function() {
      deckFromFile.updateTrucksMaterials(trucksCollection.getTrucks(i));
      componentController.selectTrucks(trucks.getAttribute("id"));
      i++;
    });
  }
}

function initWheelsCatalogue() {
  let i = 0;
  for(const wheels of componentController.wheels_catalogue){
    wheels.addEventListener("click", function() {
      deckFromFile.updateWheelsMaterial(wheelsCollection.getWheels(i));
      componentController.selectWheels(wheels.getAttribute("id"));
      i++;
    });
  }
}

function initBearingsCatalogue() {
  let i = 0;
  for(const bearings of componentController.bearings_catalogue){
    bearings.addEventListener("click", function() {
      deckFromFile.updateBearingsMaterials(bearingsCollection.getBearings(i));
      componentController.selectBearings(bearings.getAttribute("id"));
      i++;
    });
  }
}

function initGripTapeCatalogue() {
  let i = 0;
  for(const grip of componentController.grip_catalogue){
    grip.addEventListener("click", function() {
      deckFromFile.updateGripMaterial(gripTapeCollection.getGrip(i));
      componentController.selectGrip(grip.getAttribute("id"));
      i++;
    });
  }
}

function initSpacersCatalogue() {
  let i = 0;
  for(const spacers of componentController.spacers_catalogue){
    spacers.addEventListener("click", function() {
      deckFromFile.updateSpacersMaterial(spacersCollection.getSpacers(i));
      componentController.selectSpacers(spacers.getAttribute("id"));
      i++;
    });
  }
}

window.onload = main();
window.onresize = updateAspectRatio();