import * as THREE from 'three';
import "./style.css"

// Scene
const scene = new THREE.Scene();

// create our shape
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
    color: "#00ff83",
})

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)

//Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Lights
const light = new THREE.PointLight(0xffffff, 1, 100)
// light.position.set(x, y, z)
light.position.set(0, 10, 10)
scene.add(light)

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.width, 0.1, 100)
// we can not see the object if the camera is away from 100 and near than 0.1 (break points)
camera.position.z = 20
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.width)
renderer.render(scene, camera)



// RESIZE
window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)

})
const loop = () => {
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)


}

loop()