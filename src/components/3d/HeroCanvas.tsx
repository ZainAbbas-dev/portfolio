"use client";
import { Canvas } from "@react-three/fiber";
import { DeveloperScene } from "./DeveloperScene";
import { Suspense } from "react";

export const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 h-screen w-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <Suspense fallback={null}>
          <DeveloperScene />
        </Suspense>
      </Canvas>
    </div>
  );
};