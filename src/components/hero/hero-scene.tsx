"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroScene() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, host.clientWidth / host.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 5.5);

    const ambient = new THREE.AmbientLight("#ffffff", 0.7);
    const key = new THREE.DirectionalLight("#ffffff", 2.2);
    key.position.set(3, 2, 5);
    const accent = new THREE.PointLight("#00ff66", 5, 12);
    accent.position.set(-3, -2, 3);
    scene.add(ambient, key, accent);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.25, 5),
      new THREE.MeshPhysicalMaterial({
        color: "#d8ffe8",
        metalness: 0.1,
        roughness: 0.22,
        transmission: 0.72,
        thickness: 0.8,
        transparent: true,
        opacity: 0.88,
        emissive: "#002b12",
        emissiveIntensity: 0.28
      })
    );
    scene.add(core);

    const particleCount = 1200;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 9;
      positions[i + 1] = (Math.random() - 0.5) * 5;
      positions[i + 2] = (Math.random() - 0.5) * 5;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: "#00ff66",
        size: 0.018,
        transparent: true,
        opacity: 0.55,
        depthWrite: false
      })
    );
    scene.add(particles);

    const mouse = new THREE.Vector2();
    const onPointerMove = (event: PointerEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onResize = () => {
      if (!host) return;
      camera.aspect = host.clientWidth / host.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(host.clientWidth, host.clientHeight);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", onResize);

    let frame = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      core.rotation.x = elapsed * 0.24 + mouse.y * 0.18;
      core.rotation.y = elapsed * 0.32 + mouse.x * 0.25;
      core.position.y = Math.sin(elapsed * 1.15) * 0.16;
      particles.rotation.y = elapsed * 0.035 + mouse.x * 0.16;
      particles.rotation.x = mouse.y * 0.08;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      core.geometry.dispose();
      (core.material as THREE.Material).dispose();
      particleGeometry.dispose();
      (particles.material as THREE.Material).dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className="absolute inset-0 -z-10" aria-hidden="true" />;
}
