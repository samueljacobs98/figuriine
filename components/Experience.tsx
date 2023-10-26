import { useControls } from "leva";

const Experience = () => {
  const { boxColour, position } = useControls({
    boxColour: "#ff0000",
    position: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.1,
    },
  });

  return (
    <>
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh
        castShadow
        scale={1.5}
        position={[position.x, position.y, position.z]}
      >
        <boxGeometry />
        <meshStandardMaterial color={boxColour} />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={100}
      >
        <planeGeometry />
        <meshStandardMaterial color="black" />
      </mesh>
    </>
  );
};

export default Experience;
