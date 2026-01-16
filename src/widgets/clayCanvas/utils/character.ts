import * as THREE from "three";
import { hairFactories } from "./hair";
import { setupEar } from "./ear";
import { setupEye } from "./eye";
import { BODY_OFFSETS } from "../constants/offset";
import { getAccessoryForCharacter } from "./accessory";
export const makeBlobProfile = ({
  height = 5,
  baseRadius = 1.8,
  topRadius = 0.35,
  bulge = 1.25,
  squashTop = 0.15,
  steps = 32,
} = {}) => {
  const pts = [];

  const yMin = 0;
  const yMax = height;

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const y = THREE.MathUtils.lerp(yMin, yMax, t);
    const belly = Math.sin(Math.PI * t);
    const taper = Math.pow(1 - t, 0.7);
    const topFlatten = 1 - squashTop * Math.pow(t, 6);

    const r =
      (topRadius +
        (baseRadius * taper + baseRadius * bulge * belly) * topFlatten) *
      0.5;

    pts.push(new THREE.Vector2(Math.max(r, 0.001), y));
  }

  return pts;
};

export const createCharacter = (
  color: number,
  hairColor: number,
  x: number,
  y: number,
  z = 0,
  i: number,
) => {
  const group = new THREE.Group();
  const points = makeBlobProfile({
    height: 1.9,
    baseRadius: 0.3,
    topRadius: 0.55,
    bulge: 0.4,
    squashTop: 0.12,
    steps: 40,
  });

  const bodyGeometry = new THREE.LatheGeometry(points, 28);
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: 0x333333,
    roughness: 0.1,
    metalness: 0.1,
  });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.position.y = -1.5 - (BODY_OFFSETS[i].y - 0.7);
  body.scale.set(BODY_OFFSETS[i].x, BODY_OFFSETS[i].y, 1);
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  const HEAD_RADIUS = 0.8;

  const headGeometry = new THREE.SphereGeometry(HEAD_RADIUS, 32, 32);
  const headMaterial = new THREE.MeshStandardMaterial({
    color: color,
    roughness: 0.37,
    metalness: 0.0,
  });
  const head = new THREE.Mesh(headGeometry, headMaterial);
  head.position.y = 0.5;
  head.castShadow = true;
  head.receiveShadow = true;
  group.add(head);

  const faceGroup = new THREE.Group();
  head.add(faceGroup);

  hairFactories[i](head, hairColor);
  getAccessoryForCharacter(i, head);
  setupEar(head, color);
  const {
    leftPupil,
    rightPupil,
    leftEyeWhite,
    rightEyeWhite,
    leftEyelid,
    rightEyelid,
  } = setupEye(faceGroup);

  group.position.set(x, y, z);
  group.scale.set(1.5, 1.5, 0.5);
  group.userData = {
    head: head,
    faceGroup: faceGroup,
    leftPupil: leftPupil,
    rightPupil: rightPupil,
    leftEyeWhite: leftEyeWhite,
    rightEyeWhite: rightEyeWhite,
    leftEyelid: leftEyelid,
    rightEyelid: rightEyelid,
    originalRotation: { x: 0, y: 0 },
    blinkTimer: 0,
    nextBlinkTime: 2000 + Math.random() * 4000,
    isBlinking: false,
    blinkProgress: 0,
    // ... 기존 필드들
    isReacting: false,
    reactionType: "surprise",
    reactionProgress: 0,
    reactionDuration: 1000,
  };

  const csGeo = new THREE.CircleGeometry(0.9, 24);
  const csMat = new THREE.MeshBasicMaterial({
    color: 0x000000,
    transparent: true,
    opacity: 0.18,
  });
  const contact = new THREE.Mesh(csGeo, csMat);
  contact.rotation.x = -Math.PI / 2;
  contact.position.y = -2.4;
  contact.position.z = 0.1;
  group.add(contact);

  return group;
};
