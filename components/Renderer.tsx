"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Leva } from "leva";
import Experience from "./Experience";

const Renderer = () => {
  return (
    <>
      <div className="absolute right-0 pr-2 pt-2 z-10">
        <Leva fill />
      </div>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-8, 6, 8],
        }}
      >
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
        <Experience />
      </Canvas>
    </>
  );
};

export default Renderer;
