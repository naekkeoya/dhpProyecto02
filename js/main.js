// Setting the Scene + Camera + Render for Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ antialias: true});
// Setting colors
const magenta = 0xb34d6f;
const gray = 0xaaaaaa;
const white = 0xFFFFFF;
const lightPurple = 0xb78f93;

renderer.setSize( window.innerWidth, window.innerHeight );
// sets renderer background color to gray
renderer.setClearColor(gray);
document.body.appendChild( renderer.domElement );
camera.position.z = 5;

// resize canvas on resize window
window.addEventListener( 'resize', () => {
	let width = window.innerWidth;
	let height = window.innerHeight;
	renderer.setSize( width, height );
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
});

// basic cube
var geometry = new THREE.BoxGeometry( 1, 1, 1);
var material = new THREE.MeshStandardMaterial( {
  color: lightPurple,
  flatShading: true,
  metalness: 0,
  roughness: 1
});
var cube = new THREE.Mesh ( geometry, material );
scene.add( cube );

// wireframe cube
var geometry = new THREE.BoxGeometry( 3, 4, 3);
var material = new THREE.MeshBasicMaterial( {
	color: magenta,
  wireframe: true,
  transparent: true
});
var wireframeCube = new THREE.Mesh ( geometry, material );
scene.add( wireframeCube );

// ambient light
var ambientLight = new THREE.AmbientLight ( white, 0.2);
scene.add( ambientLight );

// point light
var pointLight = new THREE.PointLight( white, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );


function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.04;
	cube.rotation.y += 0.04;
	wireframeCube.rotation.x -= 0.01;
	wireframeCube.rotation.y -= 0.01;
	renderer.render( scene, camera );
}
animate();
