varying vec2 vUv;
uniform float u_time;

void main() {
  vUv = uv;
  vec4 pos = vec4(position, 1.0);

  gl_Position = projectionMatrix * modelViewMatrix * pos;
}	