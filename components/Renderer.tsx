"use client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const Renderer = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
};

export default Renderer;
