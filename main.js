import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// create our shape
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
    color: "#00ff83",
})

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)

// Lights
const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(0, 10, 10)
scene.add(light)

// Camera
const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 100)
camera.position.z = 100
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(800, 600)
renderer.render(scene, camera)