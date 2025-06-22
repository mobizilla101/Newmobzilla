import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import gsap from 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js';
import { ScrollTrigger } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollTrigger.min.js';

gsap.registerPlugin(ScrollTrigger);

// Block all interactions and scrolling initially
document.documentElement.style.overflow = 'hidden'; // Target html element
document.body.style.overflow = 'hidden';           // Target body element
document.body.style.pointerEvents = 'none'; 

document.documentElement.style.transition = 'all 0.6s ease';
document.body.style.transition = 'all 0.6s ease';

// ————————————————————————————————
// THREE.JS SETUP
// ————————————————————————————————
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf2f2f2);

const container = document.getElementById('three-container');
const width = container.clientWidth;
const height = container.clientHeight;

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.set(0, 0, 4);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);
container.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  const w = container.clientWidth;
  const h = container.clientHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
});

// Lighting (UNCHANGED)
const light1 = new THREE.DirectionalLight(0xffffff, 2.0);
light1.position.set(1, 2, 3);
scene.add(light1);

const light2 = new THREE.DirectionalLight(0xffffff, 1.0);
light2.position.set(-1, 1, -2);
scene.add(light2);

scene.add(new THREE.AmbientLight(0x808080, 0.8));
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
hemiLight.position.set(0, 20, 0);
scene.add(hemiLight);

const pointLight = new THREE.PointLight(0xffffff, 1.5, 10);
pointLight.position.set(0, 0, 1.5);
scene.add(pointLight);

// ————————————————————————————————
// LOAD MODEL & SET UP SCROLL-SCRUB ANIMATION
// ————————————————————————————————
const loader = new GLTFLoader();
let mixer;

loader.load(
  './m.glb',
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    // Center & scale (UNCHANGED)

    // const box = new THREE.Box3().setFromObject(model);
    // const center = box.getCenter(new THREE.Vector3());
    // model.position.sub(center);
    // model.position.y += 4.5;

    // const size = box.getSize(new THREE.Vector3());
    // const scale = 4 / Math.max(size.x, size.y, size.z);
    // model.scale.setScalar(scale);

    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    // Center model at origin
    model.position.sub(center);

    // Raise it upward by a fraction of its height (adjust 0.5 to 0.6, 0.7 if needed)
    model.position.y += size.y * 1.2;

    // Scale model to fit within a virtual box size (4 units here)
    const scale = 4 / Math.max(size.x, size.y, size.z);
    model.scale.setScalar(scale);

    model.traverse((child) => {
      if (child.isMesh) {
        child.geometry.computeVertexNormals();
        child.material.flatShading = false;
        child.material.side = THREE.DoubleSide;
        child.material.needsUpdate = true;
      }
    });

    if (gltf.animations.length) {
      mixer = new THREE.AnimationMixer(model);
      const clip = gltf.animations[0];
      const action = mixer.clipAction(clip);
      action.play();

      const duration = clip.duration;
      const targetTime = 0.19 * duration; // 20% of animation

      let currentTime = 0;
      const speed = 2; // Playback speed for intro

      const clock = new THREE.Clock();

      function playInitialAnimation() {
        const delta = clock.getDelta();
        currentTime += delta * speed;

        mixer.setTime(currentTime);
        renderer.render(scene, camera);

        if (currentTime < targetTime) {
          requestAnimationFrame(playInitialAnimation);
        } else {
          mixer.setTime(targetTime); // Clamp to 20%
          initScrollTrigger(mixer, duration, targetTime);
        }
      }

      playInitialAnimation();
    }
  },
  undefined,
  (err) => console.error(err)
);

function initScrollTrigger(mixer, duration, targetTime) {
  // Ensure #scroll-pages has enough height
  const scrollContainer = document.querySelector('#scroll-pages');
  scrollContainer.style.minHeight = `${window.innerHeight * 2}px`; // Adjustable

  // Delay enabling scroll and pointer events
  setTimeout(() => {
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    document.body.style.pointerEvents = 'auto';
  }, 400); // Adjust delay to match your animation timing

  // Optional: Reset scroll position smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Map scroll progress [0, 1] to animation time [targetTime, duration]
  ScrollTrigger.create({
    trigger: '#scroll-pages',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate(self) {
      const p = Math.max(0, Math.min(0.9999, self.progress)); // [0, 1]
      const animTime = targetTime + p * (duration - targetTime); // [20%, 100%]
      mixer.setTime(animTime);
    }
  });

  ScrollTrigger.create({
    trigger: '#scroll-pages',
    start: 'top top',
    end: 'bottom bottom',
    snap: {
      snapTo: (progress) => {
        const pages = gsap.utils.toArray('.page');
        return gsap.utils.snap(1 / (pages.length - 1), progress);
      },
      duration: 0.5,
      delay: 0.1,
      ease: 'power1.inOut'
    }
  });

}

// ————————————————————————————————
// RENDER LOOP
// ————————————————————————————————
function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

