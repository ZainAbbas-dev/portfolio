"use client";

import { Canvas } from "@react-three/fiber";
import { FloatingShapes } from "@/components/3d/FloatingShapes";

export function HeroCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas camera={{ position: [0, 0, 7], fov: 44 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.8} />
        <pointLight color="#a66cff" intensity={16} position={[3, 4, 5]} />
        <pointLight color="#72e8ff" intensity={10} position={[-4, -2, 3]} />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
