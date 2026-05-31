"use client";

import { Float, MeshTransmissionMaterial, Sparkles, Torus } from "@react-three/drei";

export function FloatingShapes() {
  return (
    <>
      <Sparkles
        color="#a7b7ff"
        count={42}
        opacity={0.58}
        scale={[7, 6, 4]}
        size={2.2}
        speed={0.32}
      />
      <Float floatIntensity={1.6} rotationIntensity={1.4} speed={1.5}>
        <mesh position={[-2.55, 1.65, 0]} rotation={[0.5, 0.7, 0.3]}>
          <boxGeometry args={[0.72, 0.72, 0.72]} />
          <meshStandardMaterial
            color="#8b5cf6"
            metalness={0.6}
            roughness={0.18}
          />
        </mesh>
      </Float>

      <Float floatIntensity={1.1} rotationIntensity={0.8} speed={1.25}>
        <mesh position={[-2.2, -1.75, -0.6]} rotation={[0.7, 0.2, 0.9]}>
          <octahedronGeometry args={[0.46, 0]} />
          <meshStandardMaterial
            color="#72e8ff"
            emissive="#15435f"
            metalness={0.56}
            roughness={0.2}
          />
        </mesh>
      </Float>

      <Float floatIntensity={1.3} rotationIntensity={0.7} speed={1.2}>
        <mesh position={[2.25, 1.9, -0.15]}>
          <sphereGeometry args={[0.76, 32, 32]} />
          <MeshTransmissionMaterial
            chromaticAberration={0.09}
            color="#7354ff"
            distortion={0.32}
            distortionScale={0.38}
            roughness={0.1}
            thickness={1.1}
            transmission={0.96}
          />
        </mesh>
      </Float>

      <Float floatIntensity={1.2} rotationIntensity={1.5} speed={1.1}>
        <Torus
          args={[1.05, 0.28, 24, 72]}
          position={[2.02, -1.25, -0.25]}
          rotation={[1.08, 0.2, -0.52]}
        >
          <meshStandardMaterial
            color="#773cff"
            metalness={0.72}
            roughness={0.14}
          />
        </Torus>
      </Float>
    </>
  );
}
