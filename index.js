var THREE = require('three');
var createOrbitViewer = require('three-orbit-viewer')(THREE);
var dat = require('exdat');
var glslify = require('glslify');

var time = 0;

//
// setup controls
//
// var controls = new dat.GUI();


//
// setup viewer
// 
var viewerSettings = {
		clearColor: 0x000000,
	  clearAlpha: 1.0,
	  fov: 45,
	  position: new THREE.Vector3(0, 0, 50)
	}
	, viewer = createOrbitViewer(viewerSettings);

viewer.on('tick', onTick);
viewer.on('resize', onResize);

//
// create basic plane
//
var mat = new THREE.ShaderMaterial({
	vertexShader: glslify('./shaders/noise.vert'),
  fragmentShader: glslify('./shaders/noise.frag'),
  side: THREE.DoubleSide,
  uniforms: {
    u_time: { type: 'f', value: time }
  },
  defines: {
    USE_MAP: ''
  }
});

var plane = new THREE.Mesh(
	new THREE.PlaneGeometry(10, 10)
	, mat
)

viewer.scene.add(plane);

function onResize(w, h) {}
function onTick(dt) {

	time += dt / 1000;

	mat.uniforms.u_time.value = time;


		// plane.rotateZ(Math.PI/360);
		// plane.rotateX(Math.PI/720);
		// plane.rotateY(-Math.PI/720);
		// plane.needsUpdate = true;
}




