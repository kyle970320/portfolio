import * as THREE from "three";

export const setupLight = (scene: THREE.Scene) => {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 0.9);
  mainLight.position.set(8, 14, 10);
  mainLight.castShadow = true;

  mainLight.shadow.mapSize.width = 2048;
  mainLight.shadow.mapSize.height = 2048;

  const d = 25;
  mainLight.shadow.camera.left = -d;
  mainLight.shadow.camera.right = d;
  mainLight.shadow.camera.top = d;
  mainLight.shadow.camera.bottom = -d;
  mainLight.shadow.camera.near = 1;
  mainLight.shadow.camera.far = 60;

  mainLight.shadow.bias = -0.0002;
  mainLight.shadow.normalBias = 0.02;

  scene.add(mainLight);

  const fillLight = new THREE.DirectionalLight(0x9090ff, 0.3);
  fillLight.position.set(-5, 5, -5);
  scene.add(fillLight);

  const backLight = new THREE.DirectionalLight(0xff90ff, 0.2);
  backLight.position.set(0, 5, -10);
  scene.add(backLight);
};

function makeRadialGlowTexture(size = 256) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  const g = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2,
  );

  // 중심은 밝게, 바깥으로 갈수록 투명
  g.addColorStop(0.0, "rgba(180, 120, 255, 0.55)");
  g.addColorStop(0.35, "rgba(120, 90, 255, 0.25)");
  g.addColorStop(1.0, "rgba(0, 0, 0, 1.0)");

  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

export function addBackGlow(scene: THREE.Scene) {
  const tex = makeRadialGlowTexture(512);

  const mat = new THREE.SpriteMaterial({
    map: tex,
    transparent: true,
    depthWrite: false, // 뒤에서 번지는 느낌 유지
    blending: THREE.AdditiveBlending, // “빛” 느낌 핵심
    opacity: 1.0,
  });

  const sprite = new THREE.Sprite(mat);

  // 캐릭터 뒤쪽(카메라 기준 더 뒤)로 위치
  // 지금 캐릭터 z가 0 ~ -3 정도라면 더 뒤로 -8 ~ -12 추천
  sprite.position.set(0, -3.5, -10);

  // 크기는 장면에 맞게 조절 (커질수록 더 넓게 퍼짐)
  sprite.scale.set(30, 20, 1);

  scene.add(sprite);
  return sprite;
}
