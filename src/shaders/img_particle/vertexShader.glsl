
//varying vec2 vUv;

void main() {
   //vUv = uv;
   vec4 mvPosition = modelViewMatrix * vec4(position, 1. );
   gl_PointSize = 50. * (1. / - mvPosition.z);
   gl_Position = projectionMatrix * mvPosition;
}

// Vertex Shader는 객체의 Vertex를 다루는 쉐이더이다.
// Fragment Shader는 최종적으로 보여주는 색상값을 다루는 쉐이더 이다.
// 버텍스쉐이더, 프래그먼트 쉐이더를 합쳐서 GLSL Program 이라고 한다.

// GLSL에서 자주 사용하는 타입은 float, vec2, vec3, vec4, mat2, mat3, mat4

// Uniform 은 Program이 사용하는 전역변수 이다.
// Varying 은 Vertex Shader 가 Fragment Shader에게 값을 전달하는 방법이다.

// GLSL에서 3차원 객체를 드로잉하여 보여주기 위한 단계
// Model View > World View > Camera View > Projection > Normalize > Monitor

// 기초 문서
// https://webglfundamentals.org/webgl/lessons/ko/webgl-2d-matrices.html
// https://webglfundamentals.org/webgl/lessons/ko/webgl-3d-orthographic.html