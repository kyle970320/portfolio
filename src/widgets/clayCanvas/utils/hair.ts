import * as THREE from "three";

const HEAD_RADIUS = 0.8;
function hairBald(head: THREE.Mesh, hairColor: number) {
  return { head, hairColor };
}
function hairCap(head: THREE.Mesh, hairColor: number) {
  const geo = new THREE.SphereGeometry(
    HEAD_RADIUS * 1.12,
    32,
    32,
    0,
    Math.PI * 2,
    0,
    Math.PI * 0.6,
  );

  const mat = new THREE.MeshStandardMaterial({
    color: hairColor,
    roughness: 0.85,
    metalness: 0.0,
  });

  const cap = new THREE.Mesh(geo, mat);
  cap.position.set(0, 0.3, -0.22);
  cap.castShadow = true;
  cap.receiveShadow = true;

  head.add(cap);
}

function hairTwinBuns(head: THREE.Mesh, hairColor: number) {
  const mat = new THREE.MeshStandardMaterial({
    color: hairColor,
    roughness: 0.9,
  });

  const bunGeo = new THREE.SphereGeometry(0.22, 16, 16);

  const left = new THREE.Mesh(bunGeo, mat);
  left.position.set(-0.45, 0.92, -0.05);
  left.castShadow = true;

  const right = new THREE.Mesh(bunGeo, mat);
  right.position.set(0.45, 0.92, -0.05);
  right.castShadow = true;

  head.add(left);
  head.add(right);
}

// function hairHelmet(head: THREE.Mesh, hairColor: number) {
//   const geo = new THREE.SphereGeometry(HEAD_RADIUS * 1.06, 32, 32);
//   const mat = new THREE.MeshStandardMaterial({
//     color: hairColor,
//     roughness: 0.6,
//   });

//   const shell = new THREE.Mesh(geo, mat);
//   shell.position.set(0, 0.15, -0.25);
//   shell.scale.set(1.02, 1.08, 1.02);
//   shell.castShadow = true;
//   shell.receiveShadow = true;

//   head.add(shell);
// }
function hairFluffy(head: THREE.Mesh, hairColor: number) {
  const mat = new THREE.MeshStandardMaterial({
    color: hairColor,
    roughness: 1.0,
  });

  const puffGeo = new THREE.SphereGeometry(0.22, 16, 16);
  const group = new THREE.Group();

  [
    [-0.25, 0.65, -0.05],
    [0.0, 0.78, -0.18],
    [0.28, 0.62, -0.05],
    [-0.05, 0.55, 0.08],
  ].forEach(([x, y, z]) => {
    const p = new THREE.Mesh(puffGeo, mat);
    p.position.set(x, y, z);
    p.castShadow = true;
    group.add(p);
  });

  group.position.set(0, 0.15, -0.25);
  head.add(group);
}

function hairMinimal(head: THREE.Mesh, hairColor: number) {
  const pinGeo = new THREE.SphereGeometry(0.08, 12, 12);
  const pinMat = new THREE.MeshStandardMaterial({
    color: hairColor,
    roughness: 0.4,
    emissive: 0xffd54a,
    emissiveIntensity: 0.25,
  });

  const pin = new THREE.Mesh(pinGeo, pinMat);
  pin.position.set(0.28, 0.82, 0.25);
  pin.castShadow = true;

  head.add(pin);
}
function hairMohawk(head: THREE.Mesh, hairColor: number) {
  const group = new THREE.Group();

  const material = new THREE.MeshStandardMaterial({
    color: hairColor,
    roughness: 0.85,
    metalness: 0.0,
  });

  const spikeCount = 12;
  const startZ = -0.55;
  const endZ = 0.45;

  for (let i = 0; i < spikeCount; i++) {
    const t = i / (spikeCount - 1); // 0 → 1
    const z = THREE.MathUtils.lerp(startZ, endZ, t);

    // 가운데가 가장 길고 앞/뒤는 짧음
    const height = 0.3 + Math.sin(Math.PI * t) * 0.45; // 🔥 핵심 곡선
    const radius = 0.09;

    const geo = new THREE.ConeGeometry(radius, height, 64);
    const spike = new THREE.Mesh(geo, material);

    spike.position.set(0, 0.57 + height * 0.65 * t, z);
    spike.scale.set(2.0, 1.0, 2.5);
    spike.rotation.x = Math.PI * 0.02; // 살짝만 기울임
    spike.castShadow = true;
    spike.receiveShadow = true;

    group.add(spike);
  }

  // 머리 위 중앙에 얹기
  group.position.set(0, 0.05, -0.25);
  head.add(group);
}
export const hairFactories = [
  (head: THREE.Mesh, hairColor: number) => hairBald(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairTwinBuns(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairFluffy(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairMinimal(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairMohawk(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairCap(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairTwinBuns(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairBald(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairFluffy(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairBald(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairMohawk(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairBald(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairTwinBuns(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairFluffy(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairMinimal(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairFluffy(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairMohawk(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairTwinBuns(head, hairColor),
  (head: THREE.Mesh, hairColor: number) => hairFluffy(head, hairColor),
];
