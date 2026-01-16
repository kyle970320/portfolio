import * as THREE from "three";

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

  // 화면 뚜껑 (각도 조정)
  const lidGeo = new THREE.BoxGeometry(4.2, 2.8, 0.18);
  const lidMat = new THREE.MeshStandardMaterial({
    color: 0x15151f,
    roughness: 0.25,
    metalness: 0.7,
  });
  const lid = new THREE.Mesh(lidGeo, lidMat);
  lid.position.set(0, 1.5, -1.3);
  lid.rotation.x = -0.1; // 각도 줄임
  lid.castShadow = true;
  lid.receiveShadow = true;
  laptop.add(lid);

  // 힌지 (양쪽)
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

  // RectAreaLight (화면 크기에 맞춤)
  const screenLight = new THREE.RectAreaLight(0x302eb2, 70, 5.0, 2.7);
  screenLight.position.set(0, 1.5, -1.15);
  screenLight.rotation.y = Math.PI;
  laptop.add(screenLight);

  laptop.position.set(0, -8.4, 5);
  laptop.rotation.y = Math.PI;
};
