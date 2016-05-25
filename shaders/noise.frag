precision highp float;
varying vec2 vUv;
uniform float u_time;


#pragma glslify: snoise3 = require(glsl-noise/simplex/3d) 

void main() {
	float v = snoise3(vec3(vUv, u_time));
  gl_FragColor = vec4(v, v, v, 1.0);
}