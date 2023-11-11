import { Suspense } from "react";
import Placeholder from "./Placeholder";
import Minifigure from "./Minifigure/Minifigure";

const Experience = () => {
  const defaultPosition = { x: -1.2, y: 3.8, z: 2.9 };

  return (
    <>
      <directionalLight
        castShadow
        position={[defaultPosition.x, defaultPosition.y, defaultPosition.z]}
        intensity={1.5}
        shadow-normalBias={0.027}
        shadow-bias={-0.004}
      />
      <ambientLight intensity={0.5} />

      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        <Minifigure />
      </Suspense>
      <mesh
        receiveShadow
        position-y={-0.9}
        rotation-x={-Math.PI * 0.5}
        scale={30}
      >
        <planeGeometry />
        <meshStandardMaterial color="#004a00" />
      </mesh>
    </>
  );
};

export default Experience;
