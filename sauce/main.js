import * as THREE from 'three';
import * as CONTROLS from '/libraries/three.js-r157/examples/jsm/controls/OrbitControls.js';

import DeckFromFile from "../sauce/objects/DeckFromFile.js";
import TrucksMaterialContainer from "../sauce/objects/TrucksMaterialContainer.js"
import {TrucksCollection} from "./objects/TrucksCollection.js";
import {ComponentController} from "./objects/ComponentController.js";
import {WheelsCollection} from "./objects/WheelsCollection.js";
import {BearingsCollection} from "./objects/BearingsCollection.js";
import {GripTapeCollection} from "./objects/GripTapeCollection.js";
import {RisersCollection} from "./objects/RisersCollection.js";
import RiserFromFile from "./objects/RiserFromFile.js";
//import BearingsMaterialContainer from "../sauce/objects/BearingsMaterialContainer.js"
//import RiserMaterialContainer from "../sauce/objects/RiserMaterialContainer.js"

let container;
let scene, camera, renderer;
let orbitControls;
let aspectRatio = window.innerWidth / window.innerHeight;
let deckFromFile = new DeckFromFile();
let riserFromFile = new RiserFromFile();

let componentController = new ComponentController();

let trucksCollection = new TrucksCollection();
let wheelsCollection = new WheelsCollection();
let bearingsCollection = new BearingsCollection();
let gripTapeCollection = new GripTapeCollection();
let risersCollection = new RisersCollection();

let mySpotLight;

let t = 0;
let animationRunning = false;

function init() {
  initDeckCatalogue();
  initTrucksCatalogue();
  initWheelsCatalogue();
  initBearingsCatalogue();
  initGripTapeCatalogue();
  initRisersCatalogue();

  selectedPartsOnClickEvents();

  scene = new THREE.Scene();
  //scene.add(new THREE.AxesHelper(50));

  camera = new THREE.PerspectiveCamera(45, aspectRatio, 0.1, 2000);
  //camera.position.set(-1, 2, 2);
  //camera.position.set(0, -3, 0);
  camera.position.set(0, 0, 3.5);
  camera.lookAt(0,0,0);

  container = document.getElementById('three_content');

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setPixelRatio(aspectRatio); //window.devicePixelRatio
  renderer.setSize(container.scrollWidth,container.scrollHeight);
  renderer.setClearColor(0xffffff);
  renderer.shadowMap.enabled = true;
  //renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  container.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff, 2);
  scene.add( ambientLight );

  mySpotLight = new THREE.SpotLight(0xffffff);
  mySpotLight.intensity = 1.5;
  mySpotLight.position.set(0, 1.5, 1.5);
  mySpotLight.castShadow = true;
  mySpotLight.target = deckFromFile;
  mySpotLight.angle = THREE.MathUtils.degToRad(45);
  mySpotLight.shadow.mapSize.set(2048, 2048);
  mySpotLight.shadow.camera.aspect = 1;
  mySpotLight.shadow.camera.near = 0.5;
  mySpotLight.shadow.camera.far = 200;
  mySpotLight.shadow.bias = -0.001;
  scene.add(mySpotLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
  directionalLight.position.set(0,2,0);
  directionalLight.castShadow = true;
  directionalLight.target = deckFromFile;
  scene.add(directionalLight);

  //deckFromFile.scale.set(120,120,120);
  deckFromFile.position.set(0,0,0);
  riserFromFile.position.set(0,0.001,0);
  deckFromFile.rotation.set(THREE.MathUtils.degToRad(-90),0,0);
  riserFromFile.rotation.set(THREE.MathUtils.degToRad(-90),0,0);

  scene.add(deckFromFile);

  orbitControls = new CONTROLS.OrbitControls(camera, renderer.domElement);
  //orbitControls.target = new THREE.Vector3(0, 0, 0);
  orbitControls.enablePan = false;
  orbitControls.enableZoom = false;

  window.addEventListener("resize", function(){
    updateAspectRatio();
  });

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

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.getElementById("check-out-button").addEventListener("click", function (){
    window.location.assign("/sauce/checkOut.html");
  });
}

function repositionSpotLight(){
  mySpotLight.position.set(camera.position.x, camera.position.y, camera.position.z);
  mySpotLight.lookAt(deckFromFile);
}

function updateAspectRatio(){ // width: 90%, height: 60%
  container = document.getElementById('skateboard-view');
  let newWidth = (0.9*container.scrollWidth);
  let newHeight = (0.6*container.scrollHeight);
  console.log("updating aspect ratio| width: " + newWidth + ", height: "+ newHeight);
  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(newWidth, newHeight);
}

function main() {
  init();
  function mainLoop() {
    requestAnimationFrame(mainLoop);
    orbitControls.update();

    repositionSpotLight();
    deckFromFile.rotation.x += t;
    riserFromFile.rotation.x += t;
    //deckFromFile.rotation.y += 0.01;

    renderer.render(scene, camera);

    componentController.checkOut();
  }

  mainLoop();
}

function cameraAngle(i){
  repositionBoard();
  switch(i){
    case 0:
      camera.position.set(-2.5, 1, 2);
      camera.lookAt(0,0,0);
      break;
    case 1:
      camera.position.set(4, 1, 0);
      camera.lookAt(0,0,0);
      break;
    case 2:
      //camera.position.set(0, 1, 4);
      camera.position.set(0, -3, 0);
      camera.lookAt(0,0,0);
      break;
    default:
      camera.position.set(0, -3, 0);
      camera.lookAt(0,0,0);
      break;
  }
}

function repositionBoard(){
  deckFromFile.rotation.set(0, 0, 0);
  riserFromFile.rotation.set(0, 0, 0);
}

function toggleAnimation(){
  if(t == 0){
    t = 0.01;
    animationRunning = true;
    document.getElementById("start-stop").setAttribute("src","sauce/pictures/controls-icons/rotation-locked.png");
  } else {
    t = 0;
    animationRunning = false;
    document.getElementById("start-stop").setAttribute("src","sauce/pictures/controls-icons/rotation-allowed.png");
  }
}

function initDeckCatalogue() {
  for(const deck of componentController.deck_catalogue){
    deck.addEventListener("click", function() {
      deckFromFile.upgradeDeckTexture(document.getElementById(deck.getAttribute("id")).querySelector(".product-picture").getAttribute("src"));
      componentController.selectDeck(deck.getAttribute("id"));
      deckFromFile.checkCompatible();
    });
  }
}

function initTrucksCatalogue() {
  for (let i = 0; i < componentController.trucks_catalogue.length; i++) {
    const trucks = componentController.trucks_catalogue[i];

    trucks.addEventListener("click", function() {
      deckFromFile.updateTrucksMaterials(trucksCollection.getTrucks(i));
      deckFromFile.changeTruckSize(trucksCollection.small_trucks.includes(trucksCollection.getTrucks(i)));
      riserFromFile.adjustRiserPosition(deckFromFile.smallTrucks);
      componentController.selectTrucks(trucks.getAttribute("id"));
      deckFromFile.checkCompatible();
    });
  }
}

function initWheelsCatalogue() {
  for(let i = 0; i < componentController.wheels_catalogue.length; i++){
    const wheels = componentController.wheels_catalogue[i];

    wheels.addEventListener("click", function() {
      deckFromFile.updateWheelsMaterial(wheelsCollection.getWheels(i));
      componentController.selectWheels(wheels.getAttribute("id"));
    });
  }
}

function initBearingsCatalogue() {
  for(let i = 0; i < componentController.bearings_catalogue.length; i++){
    const bearings = componentController.bearings_catalogue[i];

    bearings.addEventListener("click", function() {
      deckFromFile.updateBearingsMaterials(bearingsCollection.getBearings(i));
      componentController.selectBearings(bearings.getAttribute("id"));
    });
  }
}

function initGripTapeCatalogue() {
  for(let i = 0; i < componentController.grip_catalogue.length; i++){
    const grip = componentController.grip_catalogue[i];

    grip.addEventListener("click", function() {
      deckFromFile.updateGripMaterial(gripTapeCollection.getGrip(i));
      componentController.selectGrip(grip.getAttribute("id"));
    });
  }
}

function initRisersCatalogue() {
  for(let i = 0; i < componentController.risers_catalogue.length; i++){
    const risers = componentController.risers_catalogue[i];

    risers.addEventListener("click", function() {
      riserFromFile.updateRisersMaterial(risersCollection.getRisers(i));
      addRisers();
      componentController.selectRisers(risers.getAttribute("id"));
    });
  }
}

function selectedPartsOnClickEvents(){
  componentController.selectedDeck.addEventListener("click", function(){
    componentController.deselectDeck();
    deckFromFile.upgradeDeckTexture("sauce/textures/dd-default.png");
    deckFromFile.checkCompatible();
  });
  componentController.selectedTrucks.addEventListener("click", function(){
    componentController.deselectTrucks();
    deckFromFile.updateTrucksMaterials(trucksCollection.defaultTrucks);
    deckFromFile.checkCompatible();
  });
  componentController.selectedWheels.addEventListener("click", function(){
    componentController.deselectWheels();
    deckFromFile.updateWheelsMaterial(wheelsCollection.defaultWheels);
  });
  componentController.selectedBearings.addEventListener("click", function(){
    componentController.deselectBearings();
    deckFromFile.updateBearingsMaterials(bearingsCollection.defaultBearings);
  });
  componentController.selectedGrip.addEventListener("click", function(){
    componentController.deselectGrip();
    deckFromFile.updateGripMaterial(deckFromFile.noGripMaterial);
  });
  componentController.selectedRisers.addEventListener("click", function(){
    componentController.deselectRisers();
    removeRisers();
  });
}

function addRisers(){
  if(!deckFromFile.hasRiser){
    scene.add(riserFromFile);
    deckFromFile.hasRiser = true;
    deckFromFile.toggleRiserOffset();
  }
}

function removeRisers(){
  if(deckFromFile.hasRiser){
    scene.remove(riserFromFile);
    deckFromFile.hasRiser = false;
    deckFromFile.toggleRiserOffset();
  }
}

window.onload = main();
//window.onresize = console.log("width " + container.scrollWidth + ", height " + container.scrollHeight);