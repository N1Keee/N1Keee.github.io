import * as THREE from 'three';
import * as CONTROLS from 'controls';

import DeckFromFile from "./objects/DeckFromFile.js";

let container;
let scene, camera, renderer;
const aspectRatio = window.innerWidth / window.innerHeight;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(70, aspectRatio, 0.1, 2000);
  camera.position.set(-64, 256, 256);
  camera.lookAt(0,0,0);

  container = document.getElementById('three_content');

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setPixelRatio(aspectRatio); //window.devicePixelRatio
  renderer.setSize(container.scrollWidth,container.scrollHeight);
  renderer.setClearColor(0xffffff);
  renderer.shadowMapEnabled = true;

  container.appendChild(renderer.domElement);
  //document.getElementById("3d_content").appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add( ambientLight );

  const deck = new DeckFromFile();
  deck.scale.set(120,120,120);
  scene.add(deck);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
  directionalLight.target = deck;
  scene.add(directionalLight);

  const cubeGeometry = new THREE.BoxGeometry(20,20,20);
  const cubeMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(0,10,0);
  //scene.add( cube );

  /*
  const folder = gui.addFolder("Cube-Scale");
  folder.add(cube.scale, "x", 1, 10).step(1);
  folder.add(cube.scale, "y", 1, 10).step(1);
  folder.add(cube.scale, "z", 1, 10).step(1);
  */

  const orbitControls = new CONTROLS.OrbitControls(camera, renderer.domElement);
  orbitControls.target = new THREE.Vector3(0, 0, 0);

  document.getElementById("decks-header").addEventListener("click", function(){
    if(document.getElementById("deck-selection").style.display === "block"){
      document.getElementById("deck-selection").style.display = "none";
    } else {
      document.getElementById("deck-selection").style.display = "block";
    }
  });

  document.getElementById("deck1").addEventListener("click", function (){
    //deck.scale.set(60,60,60);
    deck.updateTexture(document.getElementById("deck1").getAttribute("src")); //document.getElementById("deck1").getAttribute("src")
  });
  document.getElementById("deck2").addEventListener("click", function (){
    //deck.scale.set(60,60,60);
    deck.updateTexture(document.getElementById("deck2").getAttribute("src"));
  });
}

function main() {


  function mainLoop() {
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
  }

  mainLoop();
}

init();
main();