// 1. Setup della scena 3D
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas') });

// 2. Creazione del cubo
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Verde
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// 3. Interattività: Il Bottone
const btn = document.getElementById('colorBtn');
btn.addEventListener('click', () => {
  // Genera un colore casuale e lo applica al cubo
  cube.material.color.setHex(Math.random() * 0xffffff);
});

// 4. Animazione (il loop che tiene vivo il gioco)
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01; // Fa ruotare il cubo
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();