import * as THREE from 'three'

let camera: THREE.Camera, scene: THREE.Scene, renderer: THREE.WebGLRenderer
let uniforms: {
  u_time: { type: string; value: number }
  u_resolution: {
    type: string
    value: THREE.Vector2
  }
  u_noise: { type: string; value: THREE.Texture }
  u_bg: { type: string; value: THREE.Texture }
  u_mouse: { type: string; value: THREE.Vector2 }
  u_scroll: { type: string; value: number }
}

let texture: THREE.Texture, bg: THREE.Texture

let loader = new THREE.TextureLoader()
loader.setCrossOrigin('anonymous')

export default function Loader() {
  loader.load(
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png',
    tex => {
      texture = tex
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping
      texture.minFilter = THREE.LinearFilter
      loader.load(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/clouds-1-tile.jpg',
        tex => {
          bg = tex
          bg.wrapS = THREE.RepeatWrapping
          bg.wrapT = THREE.RepeatWrapping
          bg.minFilter = THREE.LinearFilter
          init()
          animate()
        }
      )
    }
  )
}

function init() {
  let container = document.getElementById('container')!
  container.classList.add('-z-50')
  container.style.backgroundColor = '#fff'

  camera = new THREE.Camera()
  camera.position.z = 1

  scene = new THREE.Scene()

  var geometry = new THREE.PlaneGeometry(2, 2)

  uniforms = {
    u_time: { type: 'f', value: 1.0 },
    u_resolution: { type: 'v2', value: new THREE.Vector2() },
    u_noise: { type: 't', value: texture },
    u_bg: { type: 't', value: bg },
    u_mouse: { type: 'v2', value: new THREE.Vector2() },
    u_scroll: { type: 'f', value: 0 },
  }

  var material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: document.getElementById('vertexShader')!.textContent!,
    fragmentShader: document.getElementById('fragmentHomeShader')!.textContent!,
  })
  let materialSundays = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: document.getElementById('vertexShader')!.textContent!,
    fragmentShader: document.getElementById('fragmentSundaysShader')!
      .textContent!,
  })
  material.extensions.derivatives = true
  materialSundays.extensions.derivatives = true

  var mesh = new THREE.Mesh(geometry, material)
  let meshSundays = new THREE.Mesh(geometry, materialSundays)
  scene.add(mesh)

  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)

  container!.appendChild(renderer.domElement)

  onWindowResize()
  window.addEventListener('resize', onWindowResize, false)

  document.addEventListener('pointermove', e => {
    let ratio = window.innerHeight / window.innerWidth
    uniforms.u_mouse.value.x =
      (e.pageX - window.innerWidth / 2) / window.innerWidth / ratio
    uniforms.u_mouse.value.y =
      ((e.pageY - window.innerHeight / 2) / window.innerHeight) * -1

    e.preventDefault()
  })
}

function onWindowResize() {
  renderer.setSize(window.innerWidth, window.innerHeight)
  uniforms.u_resolution.value.x = renderer.domElement.width
  uniforms.u_resolution.value.y = renderer.domElement.height
}

function animate(delta?: any) {
  requestAnimationFrame(animate)
  render(delta)
}

function render(delta: any) {
  uniforms.u_time.value = -1000 + delta * 0.0005
  uniforms.u_scroll.value = window.scrollY
  renderer.render(scene, camera)
}
