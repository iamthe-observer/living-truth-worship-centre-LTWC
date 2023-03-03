<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { Mesh, MeshStandardMaterialParameters, Vector2 } from 'three'
import { gsap } from 'gsap'

onMounted(() => {
  canvas.value!.appendChild(renderer.domElement)

  renderer.setClearColor(0xffffff, 0)
  window.addEventListener('resize', onWindowResize, false)
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  gsap.to(camera.position, { x: 10, duration: 2 })
  animate()
})

const canvas = ref<HTMLDivElement>()
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

// lights
const lights = ref<THREE.PointLight[]>([])
const top_point_light = new THREE.PointLight(0xffffff)
const bottom_point_light = new THREE.PointLight(0xffffff)
top_point_light.position.setY(30)
top_point_light.position.setX(30)
top_point_light.position.setZ(30)
bottom_point_light.position.setX(-30)
bottom_point_light.position.setY(-30)
bottom_point_light.position.setZ(-30)
const sphereSize = 3
const point_light_helper_top = new THREE.PointLightHelper(
  top_point_light,
  sphereSize
)
const point_light_helper_bottom = new THREE.PointLightHelper(
  bottom_point_light,
  sphereSize
)
const ambient_light = new THREE.AmbientLight(0xa020f0)

scene.add(ambient_light)
// scene.add(point_light_helper_top)
// scene.add(point_light_helper_bottom)
// scene.add(top_point_light)
// scene.add(bottom_point_light)

// planes
const grid_size = 50
const divisions = 50
const gridHelper = new THREE.GridHelper(grid_size, divisions)
scene.add(gridHelper)

// class of cross
class Cross {
  v_geometry: THREE.BoxGeometry
  h_geometry: THREE.BoxGeometry
  v_material: THREE.MeshStandardMaterial
  h_material: THREE.MeshStandardMaterial
  options: MeshStandardMaterialParameters
  bar_v: THREE.Mesh
  bar_h: THREE.Mesh
  objects: THREE.Mesh[]
  constructor(
    size: [[number, number, number], [number, number, number]],
    options: MeshStandardMaterialParameters,
    position: [number, number, number]
  ) {
    this.options = options
    this.v_geometry = new THREE.BoxGeometry(size[0][0], size[0][1], size[0][2])
    this.h_geometry = new THREE.BoxGeometry(size[1][0], size[1][1], size[1][2])
    this.v_material = new THREE.MeshStandardMaterial(this.options)
    this.h_material = new THREE.MeshStandardMaterial(this.options)
    this.bar_v = new Mesh(this.v_geometry, this.v_material)
    this.bar_h = new Mesh(this.h_geometry, this.h_material)
    this.bar_v.position.set(position[0], position[1], position[2])
    this.bar_h.position.set(position[0], position[1], 0)

    this.objects = [this.bar_v, this.bar_h]
  }

  render() {
    for (let ii = 0; ii < this.objects.length; ii++) {
      const obj = this.objects[ii]

      scene.add(obj)
    }
  }

  moveCross(mouseX: number, mouseY: number) {
    this.bar_v.position.set(mouseX * 2, mouseY * 2, position[2])
    this.bar_h.position.set(mouseX * 2, mouseY * 2, 0)
  }
}

// rendering the cross
const size: [[number, number, number], [number, number, number]] = [
  [30, 3, 5],
  [5, 3, 40],
]
const position: [number, number, number] = [0, 2, -8]
const options = {
  color: 0xffff00,
  metalness: 1,
  roughness: 2,
}
const CROSS = new Cross(size, options, position)
CROSS.render()

camera.position.set(0, 10, 10)

window.addEventListener('mousemove', function (event) {
  // Calculate the normalized mouse position
  let mouseX = (event.clientX / window.innerWidth) * 2 - 1
  let mouseY = -(event.clientY / window.innerHeight) * 2 + 1

  // Set the position of the object based on the mouse position
  // CROSS.moveCross(mouseX, mouseY)

  let timeoutId
  clearTimeout(timeoutId)

  // Create a new timeout to delay the animation
  timeoutId = setTimeout(function () {
    // Create a new Tween to animate the position of the object
    gsap.to(CROSS, { x: mouseX * 10, y: mouseY * 10 })
  }, 200)
})

const controls = new OrbitControls(camera, renderer.domElement)
controls.autoRotate = false
controls.enableDamping = true
controls.enablePan = true

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  controls.update()

  // {
  // x:6.1629893609691235,
  // y:2.0657016169262525,
  // z:-3.368689269439583,
  // }
}
</script>

<template>
  <div ref="canvas" class="w-full h-full"></div>
</template>
