import * as THREE from "three";

const HEAD_RADIUS = 0.8;
const EYE_SURFACE_OFFSET = 0.02;

export const setupEye = (faceGroup: THREE.Group) => {
  const eyeWhiteGeometry = new THREE.SphereGeometry(0.28, 16, 16);
  const eyeWhiteMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.1,
    metalness: 0.0,
  });
  const leftEyeWhite = new THREE.Mesh(eyeWhiteGeometry, eyeWhiteMaterial);

  {
    const v = new THREE.Vector3(-0.3, 0.02, 0.8);
    v.normalize().multiplyScalar(HEAD_RADIUS + EYE_SURFACE_OFFSET);
    leftEyeWhite.position.copy(v);
  }

  leftEyeWhite.scale.set(1.3, 1.3, 0.4);
  leftEyeWhite.castShadow = true;
  leftEyeWhite.receiveShadow = true;
  faceGroup.add(leftEyeWhite);

  const rightEyeWhite = new THREE.Mesh(eyeWhiteGeometry, eyeWhiteMaterial);

  {
    const v = new THREE.Vector3(0.3, 0.02, 0.8);
    v.normalize().multiplyScalar(HEAD_RADIUS + EYE_SURFACE_OFFSET);
    rightEyeWhite.position.copy(v);
  }

  rightEyeWhite.scale.set(1.3, 1.3, 0.4);
  rightEyeWhite.castShadow = true;
  rightEyeWhite.receiveShadow = true;
  faceGroup.add(rightEyeWhite);
  const pupilGeometry = new THREE.SphereGeometry(0.22, 16, 16);
  const pupilMaterial = new THREE.MeshStandardMaterial({
    color: 0x1a1a1a,
    roughness: 1.2,
    metalness: 0.3,
  });

  const leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
  leftPupil.position.set(-0.0, 0.01, 0.22);
  leftPupil.scale.set(1.0, 1.0, 0.35);
  leftEyeWhite.add(leftPupil);

  const rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
  rightPupil.position.set(0.0, 0.01, 0.3);
  rightPupil.scale.set(1.0, 1.0, 0.35);
  rightEyeWhite.add(rightPupil);

  return { leftPupil, rightPupil };
};
