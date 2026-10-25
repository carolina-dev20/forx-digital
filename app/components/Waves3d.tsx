
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function AnimatedSilk() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(
    () => new THREE.PlaneGeometry(12, 8, 140, 100),
    []
  );

  const originalPositions = useMemo(
    () => new Float32Array(geometry.attributes.position.array),
    [geometry]
  );

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const time = clock.getElapsedTime() * 0.6;
    const positions = geometry.attributes.position;

    for (let i = 0; i < positions.count; i++) {
      const x = originalPositions[i * 3];
      const y = originalPositions[i * 3 + 1];

      const wave1 =
        Math.sin(x * 1.2 + time) * 0.5;

      const wave2 =
        Math.sin(y * 1.7 - time * 0.8 + x * 0.7) *
        0.3;

      const folds =
        Math.sin(x * 3.5 + y * 0.9 + time * 1.2) *
        0.13;

      positions.setZ(i, wave1 + wave2 + folds);
    }

    positions.needsUpdate = true;
    geometry.computeVertexNormals();

    meshRef.current.rotation.z =
      Math.sin(time * 0.25) * 0.03;
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      rotation={[-0.3, -0.2, -0.1]}
      position={[1.7, 0, 0]}
    >
      <meshStandardMaterial
        color="#281535"
        metalness={0.2}
        roughness={0.35}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function Waves3D() {
  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden bg-[#08070D]"
      aria-hidden="true"
    >
      <Canvas
        camera={{
          position: [0, 0, 8.5],
          fov: 48,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >
        <color attach="background" args={["#08070D"]} />

        <ambientLight intensity={0.6} />

        <directionalLight
          position={[1, 4, 5]}
          intensity={3}
          color="#B184FF"
        />

        <pointLight
          position={[4, -2, 3]}
          intensity={65}
          distance={12}
          color="#6930B5"
        />

        <pointLight
          position={[-3, 1, 4]}
          intensity={20}
          distance={10}
          color="#C7C0D0"
        />

        <AnimatedSilk />
      </Canvas>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/10" />
    </div>
  );
}
