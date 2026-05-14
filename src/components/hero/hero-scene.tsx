"use client";

import { Float, MeshTransmissionMaterial, Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const points = new Float32Array(1200 * 3);
    for (let i = 0; i < points.length; i += 3) {
      points[i] = (Math.random() - 0.5) * 9;
      points[i + 1] = (Math.random() - 0.5) * 5;
      points[i + 2] = (Math.random() - 0.5) * 5;
    }
    return points;
  }, []);

  useFrame(({ mouse, clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.035 + mouse.x * 0.16;
    ref.current.rotation.x = mouse.y * 0.08;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#00ff66" size={0.018} sizeAttenuation depthWrite={false} opacity={0.55} />
    </Points>
  );
}

function Core() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock, mouse }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = clock.elapsedTime * 0.24 + mouse.y * 0.18;
    mesh.current.rotation.y = clock.elapsedTime * 0.32 + mouse.x * 0.25;
  });

  return (
    <Float speed={1.35} rotationIntensity={0.35} floatIntensity={0.7}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.28, 5]} />
        <MeshTransmissionMaterial
          backside
          thickness={0.72}
          roughness={0.22}
          transmission={0.82}
          chromaticAberration={0.08}
          anisotropicBlur={0.18}
          color="#d8ffe8"
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[3, 2, 5]} intensity={2.4} color="#ffffff" />
        <pointLight position={[-3, -2, 2]} intensity={3.2} color="#00ff66" />
        <ParticleField />
        <Core />
      </Canvas>
    </div>
  );
}
