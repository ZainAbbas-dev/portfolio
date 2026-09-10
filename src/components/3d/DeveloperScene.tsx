"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useMouseParallax } from "./useMouseParallax";

export const DeveloperScene = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useMouseParallax();

  // Mouse ke sath slight rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
      
      // Parallax effect using custom hook
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 2, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 2, 0.05);
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#D4956A" />
      <pointLight position={[-5, -5, -5]} intensity={1.5} color="#4FD9C7" />

      <Float speed={2} rotationIntensity={0.2} floatIntensity={1.5}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[2.5, 1]} />
          <MeshDistortMaterial 
            color="#0B0E14" 
            envMapIntensity={1} 
            clearcoat={1} 
            clearcoatRoughness={0.1} 
            metalness={0.9} 
            roughness={0.2} 
            wireframe={true} 
          />
        </mesh>
      </Float>

      {/* Deep space background stars */}
      <Stars radius={150} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />
    </>
  );
};