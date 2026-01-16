import { useEffect, useRef } from "react";
import * as THREE from "three";
import { setupLaptop } from "./utils/laptop";
import { HAIR_COLORS, SKIN_COLORS } from "./constants/color";
import { addBackGlow, setupLight } from "./utils/light";
import { createCharacter } from "./utils/character";
import TypingTitle from "../TypingTitle";
import { CHARACTER_OFFSETS } from "./constants/offset";

export default function App() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // 광원 설정
    setupLight(scene);
    // addBackGlow(scene);
    const characters: THREE.Group[] = [];
    const spacing = 2.7;
    const characterCount = 19;

    for (let i = 0; i < characterCount; i++) {
      let x = 0;
      let y = 0;
      let z = 0;
      const yVariation = 2.4;
      if (i < 7) {
        const currentY = 0;
        x = (i - 3) * spacing;
        y = -7 + currentY * yVariation;
      } else if (i < 13) {
        const currentY = 1;
        x = (i - 9.5) * spacing;
        y = -7 + currentY * yVariation;
        z = -1;
      } else if (i < 17) {
        const currentY = 2;
        x = (i - 14.5) * spacing;
        y = -7 + currentY * yVariation;
        z = -2;
      } else {
        const currentY = 3;
        x = (i - 17.5) * spacing;
        y = -7 + currentY * yVariation;
        z = -3;
      }
      const offset = CHARACTER_OFFSETS[i] ?? { x: 0, y: 0, z: 0 };

      x += offset.x;
      y += offset.y;
      z += offset.z;
      const character = createCharacter(
        SKIN_COLORS[i % SKIN_COLORS.length],
        HAIR_COLORS[i % HAIR_COLORS.length],
        x,
        y,
        z,
        i,
      );

      characters.push(character);
      scene.add(character);
    }

    // ✅ 마우스 입력
    const mouse = new THREE.Vector2();
    let mouseMoved = false;

    function onMouseMove(event: MouseEvent) {
      mouseMoved = true;
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    window.addEventListener("mousemove", onMouseMove);

    // ✅ 타임라인 시작
    const startTime = performance.now();

    // ✅ Phase별 목표 지점 선택
    function getLookTarget(now: number) {
      const t = (now - startTime) / 1000;

      if (t < 2) {
        return new THREE.Vector3(0, -12, 10);
      }

      if (t < 3) {
        return new THREE.Vector3(0, 0, 50);
      }

      if (!mouseMoved) {
        return new THREE.Vector3(0, 0, 50);
      }

      return new THREE.Vector3(mouse.x * 15, mouse.y * 10, 10);
    }

    let animationFrameId: number;

    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      const now = performance.now();
      const deltaTime = now - (animate as any).lastTime || 16;
      (animate as any).lastTime = now;

      const intersectPoint = getLookTarget(now);

      characters.forEach((char) => {
        const charPos = char.position;

        const direction = new THREE.Vector3().subVectors(
          intersectPoint,
          charPos,
        );

        const targetRotationY = Math.atan2(direction.x, direction.z);
        const targetRotationX = -Math.atan2(
          direction.y,
          Math.sqrt(direction.x * direction.x + direction.z * direction.z),
        );

        const maxRotation = 0.3;

        const clampedRotationX = Math.max(
          -maxRotation,
          Math.min(maxRotation, targetRotationX),
        );
        const clampedRotationY = Math.max(
          -maxRotation,
          Math.min(maxRotation, targetRotationY),
        );

        const lerpFactor = 0.1;

        // head / face 회전
        char.userData.faceGroup.rotation.y +=
          (clampedRotationY - char.userData.faceGroup.rotation.y) * lerpFactor;
        char.userData.faceGroup.rotation.x +=
          (clampedRotationX - char.userData.faceGroup.rotation.x) * lerpFactor;

        char.userData.head.rotation.y +=
          (clampedRotationY - char.userData.head.rotation.y) * lerpFactor;
        char.userData.head.rotation.x +=
          (clampedRotationX - char.userData.head.rotation.x) * lerpFactor;

        // pupil 이동
        const pupilMovement = 0.06;
        const pupilX = Math.max(
          -pupilMovement,
          Math.min(pupilMovement, direction.x * 0.02),
        );
        const pupilY = Math.max(
          -pupilMovement,
          Math.min(pupilMovement, direction.y * 0.02),
        );

        char.userData.leftPupil.position.x +=
          (pupilX - char.userData.leftPupil.position.x) * lerpFactor;
        char.userData.leftPupil.position.y +=
          (pupilY - char.userData.leftPupil.position.y) * lerpFactor;

        char.userData.rightPupil.position.x +=
          (pupilX - char.userData.rightPupil.position.x) * lerpFactor;
        char.userData.rightPupil.position.y +=
          (pupilY - char.userData.rightPupil.position.y) * lerpFactor;

        // ✨ 눈 깜빡임 애니메이션
        char.userData.blinkTimer += deltaTime;

        if (char.userData.blinkTimer >= char.userData.nextBlinkTime) {
          char.userData.isBlinking = true;
          char.userData.blinkProgress = 0;
          char.userData.blinkTimer = 0;
          char.userData.nextBlinkTime = 6000 + Math.random() * 5000;
        }

        if (char.userData.isBlinking) {
          char.userData.blinkProgress += deltaTime * 0.01;

          const blinkDuration = 850;
          let blinkPhase = (char.userData.blinkProgress * 1000) / blinkDuration;

          if (blinkPhase > 2) {
            char.userData.isBlinking = false;
            blinkPhase = 0;
          }

          const eyelidScale = blinkPhase <= 1 ? blinkPhase : 2 - blinkPhase;

          if (char.userData.leftEyelid && char.userData.rightEyelid) {
            char.userData.leftEyelid.scale.y = 0.01 + eyelidScale * 1.19;
            char.userData.rightEyelid.scale.y = 0.01 + eyelidScale * 1.19;
          }

          if (char.userData.leftEyeWhite && char.userData.rightEyeWhite) {
            const eyeScale = 1 - eyelidScale * 0.9;
            char.userData.leftEyeWhite.scale.y = 1.2 * eyeScale;
            char.userData.rightEyeWhite.scale.y = 1.2 * eyeScale;
          }
        } else {
          if (char.userData.leftEyelid && char.userData.rightEyelid) {
            char.userData.leftEyelid.scale.y = 0.01;
            char.userData.rightEyelid.scale.y = 0.01;
          }
          if (char.userData.leftEyeWhite && char.userData.rightEyeWhite) {
            char.userData.leftEyeWhite.scale.y = 1.2;
            char.userData.rightEyeWhite.scale.y = 1.2;
          }
        }
      });

      renderer.render(scene, camera);
    }

    // 노트북
    const laptop = new THREE.Group();
    setupLaptop(laptop);
    scene.add(laptop);

    // 노트북 아래 그림자(가짜)
    const csGeo = new THREE.CircleGeometry(2.4, 32);
    const csMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.25,
    });
    const laptopShadow = new THREE.Mesh(csGeo, csMat);
    laptopShadow.rotation.x = -Math.PI / 2;
    laptopShadow.position.set(0, -11.98, 3);
    scene.add(laptopShadow);

    animate();

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onWindowResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh && object.geometry) {
          object.geometry.dispose();
        }
        if (object instanceof THREE.Mesh && object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      renderer.dispose();
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div id="main_section" className="relative w-full h-screen">
      <TypingTitle duration={2000} />
      <div ref={mountRef} className="relative w-full h-full" />
    </div>
  );
}
