import * as THREE from "three";

function createAppleLikeLogoMesh() {
  // ✅ 사과 "느낌" 실루엣(단순화)
  // - 몸통: 타원 2개를 겹쳐서 하트/사과 느낌
  // - 한입(바이트): hole로 작게 파줌
  // - 잎: 작은 타원
  const body = new THREE.Shape();

  // 몸통(두 타원 합성 느낌)
  body.absellipse(-0.08, 0.0, 0.16, 0.2, 0, Math.PI * 2, false, 0);
  body.absellipse(0.08, 0.0, 0.16, 0.2, 0, Math.PI * 2, false, 0);

  // 한입(바이트) 표현: 오른쪽 위를 살짝 파줌
  const bite = new THREE.CircleGeometry(0.2, 32);

  // 잎
  const leaf = new THREE.Shape();
  leaf.absellipse(0.06, 0.26, 0.08, 0.045, 0, Math.PI * 2, false, 0);

  const leafGeo = new THREE.ExtrudeGeometry(leaf, {
    depth: 0.02,
    bevelEnabled: false,
  });

  const logoGeo = new THREE.ExtrudeGeometry(body, {
    depth: 0.03,
    bevelEnabled: false,
  });

  // ✅ 로고 머티리얼: 은은한 빛 + 메탈릭
  const logoMat = new THREE.MeshStandardMaterial({
    color: 0xe9e9ef,
    roughness: 0.25,
    metalness: 0.85,
    emissive: 0x888888,
    emissiveIntensity: 0.62,
  });
  const biteMat = new THREE.MeshStandardMaterial({
    color: 0x000000,
    roughness: 0.25,
    metalness: 0.85,
  });

  const logo = new THREE.Mesh(logoGeo, logoMat);
  const leafMesh = new THREE.Mesh(leafGeo, logoMat);
  const biteMesh = new THREE.Mesh(bite, biteMat);
  biteMesh.position.set(0.31, 0.02, 0.1);

  // 로고는 중앙 기준이므로 leaf를 위로 살짝
  leafMesh.position.set(0.22, 0.02, 0.0);
  leafMesh.rotation.z = 0.85;

  const group = new THREE.Group();
  group.add(logo);
  group.add(leafMesh);
  group.add(biteMesh);

  // 로고 크기(너무 크지 않게)
  group.scale.setScalar(1.5);

  return group;
}

export const setupLaptop = (laptop: THREE.Group) => {
  // 키보드 베이스
  const baseGeo = new THREE.BoxGeometry(4.2, 0.25, 3.0);
  const baseMat = new THREE.MeshStandardMaterial({
    color: 0x1a1a22,
    roughness: 0.3,
    metalness: 0.6,
  });
  const base = new THREE.Mesh(baseGeo, baseMat);
  base.castShadow = true;
  base.receiveShadow = true;
  laptop.add(base);

  // 화면 뚜껑
  const lidGeo = new THREE.BoxGeometry(4.2, 2.8, 0.18);
  const lidMat = new THREE.MeshStandardMaterial({
    color: 0x15151f,
    roughness: 0.25,
    metalness: 0.7,
  });
  const lid = new THREE.Mesh(lidGeo, lidMat);
  lid.position.set(0, 1.5, -1.3);
  lid.rotation.x = -0.1;
  lid.castShadow = true;
  lid.receiveShadow = true;
  laptop.add(lid);

  // ✅ 로고(뚜껑 전면에 부착)
  // - lid의 전면(z)은 lid.position.z - lid두께/2 정도 방향
  // - Z-fighting 방지를 위해 아주 살짝 더 앞으로
  const logo = createAppleLikeLogoMesh();
  logo.position.set(0, 1.5, -1.5);
  // 노트북이 rotation.y = Math.PI로 뒤집혀 있으므로 로고 방향 보정
  logo.rotation.y = Math.PI;
  logo.castShadow = false;
  laptop.add(logo);

  // 힌지
  const hingeGeo = new THREE.CylinderGeometry(0.08, 0.08, 4.0, 16);
  const hingeMat = new THREE.MeshStandardMaterial({
    color: 0x2a2a35,
    roughness: 0.3,
    metalness: 0.7,
  });
  const hinge = new THREE.Mesh(hingeGeo, hingeMat);
  hinge.position.set(0, 0.125, -1.5);
  hinge.rotation.z = Math.PI / 2;
  laptop.add(hinge);

  // 화면 빛
  const screenLight = new THREE.RectAreaLight(0x302eb2, 70, 5.0, 2.7);
  screenLight.position.set(0, 1.5, -1.15);
  screenLight.rotation.y = Math.PI;
  laptop.add(screenLight);

  // 노트북 위치
  laptop.position.set(0, -8.4, 5);
  laptop.rotation.y = Math.PI;
};
