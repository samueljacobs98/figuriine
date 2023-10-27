"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Leva } from "leva";
import Experience from "./Experience";

const Renderer = () => {
  return (
    <>
      <Suspense>
        <div className="absolute right-0 pr-2 pt-2 z-10">
          <Leva fill />
        </div>
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <OrbitControls
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
          />
          <Experience />
        </Canvas>
      </Suspense>
    </>
  );
};

export default Renderer;
