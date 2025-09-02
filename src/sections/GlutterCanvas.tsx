import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Text } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { createNoise4D } from "simplex-noise";

const simplex = createNoise4D();

function Model() {
  const { viewport } = useThree();
  const meshRef = useRef<THREE.Mesh>(null);
  const originalPositions = useRef<Float32Array | null>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef(new THREE.Vector3());
  const rotation = useRef({ x: 0, y: 0 });
  const { width, height } = useThree((s) => s.viewport);
  const titleSize = useMemo(
    () => Math.min(width, height) * 0.1,
    [width, height],
  );
  const subSize = useMemo(
    () => Math.min(width, height) * 0.045,
    [width, height],
  );

  // 마우스 위치 저장
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 초기 위치 저장
  useEffect(() => {
    if (meshRef.current) {
      const attr = meshRef.current.geometry.attributes.position;
      originalPositions.current = new Float32Array(attr.array);
    }
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current || !originalPositions.current) return;

    const t = clock.getElapsedTime();
    const geometry = meshRef.current.geometry;
    const positionAttr = geometry.attributes.position;
    const positions = positionAttr.array;

    for (let i = 0; i < positions.length; i += 3) {
      const ox = originalPositions.current[i];
      const oy = originalPositions.current[i + 1];
      const oz = originalPositions.current[i + 2];

      const normal = new THREE.Vector3(ox, oy, oz).normalize();

      const noiseValue = simplex(ox * 1.5, oy * 1.5, oz * 1.5, t * 0.5);

      const distortion = noiseValue * 0.05;

      positions[i] = ox + normal.x * distortion;
      positions[i + 1] = oy + normal.y * distortion;
      positions[i + 2] = oz + normal.z * distortion;
    }

    positionAttr.needsUpdate = true;
    geometry.computeVertexNormals();

    // 마우스 기반 위치 이동
    const rangeX = 1.5;
    const rangeY = 1.5;
    const targetX = (mouse.current.x - 0.5) * 2 * rangeX;
    const targetY = -(mouse.current.y - 0.5) * 2 * rangeY;

    position.current.x += (targetX - position.current.x) * 0.2;
    position.current.y += (targetY - position.current.y) * 0.2;
    rotation.current.x += (targetY - rotation.current.x) * 0.05;
    rotation.current.y += (targetX - rotation.current.y) * 0.05;

    meshRef.current.position.set(position.current.x, position.current.y, 0);
    meshRef.current.rotation.set(rotation.current.x, rotation.current.y, 0);
  });

  return (
    <>
      <group scale={viewport.width / 7.25}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.6, 128, 128]} />
          <MeshTransmissionMaterial
            color={"#FFFFFF"}
            thickness={0.2}
            roughness={0.2}
            transmission={1}
            ior={1.2}
            chromaticAberration={0.02}
            envMapIntensity={0}
            backside
          />
        </mesh>
      </group>
      <Text
        font="/font/GmarketSansTTFBold.ttf"
        fontSize={titleSize}
        color="white"
        anchorX="center"
        anchorY="bottom"
      >
        안녕하세요
      </Text>
      <Text
        font="/font/GmarketSansTTFBold.ttf"
        fontSize={subSize}
        color="gray"
        anchorX="center"
        anchorY="top"
      >
        반갑습니다
      </Text>
    </>
  );
}

export default function GlutterBlob() {
  return (
    <Canvas id={"main_section"} className="absolute z-100 h-500">
      <Model />
      <directionalLight intensity={3} position={[0, 2, 3]} />
      <Environment preset="night" />
    </Canvas>
  );
}
