import { folder, useControls } from "leva";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    hand: THREE.Mesh;
    object: THREE.Mesh;
  };
  materials: {
    HandsMaterial: THREE.MeshStandardMaterial;
  };
};

const Experience = () => {
  const boxRef = useRef<THREE.Mesh | null>(null);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();

    if (boxRef.current) {
      boxRef.current.rotation.y = Math.sin(a) * a * 0.005;
    }
  });

  const { headRotation, headColor, headPosition, headScale } = useControls({
    modifiables: folder({
      headColor: "#fcff00",
    }),
    debugHead: folder({
      headRotation: {
        value: { x: -Math.PI / 2, y: 0, z: 0 },
        step: 0.1,
      },
      headPosition: {
        value: { x: 0, y: 0, z: 0 },
        step: 0.1,
      },
      headScale: 0.2,
    }),
  });

  const head = useGLTF("/head.glb") as GLTFResult;

  return (
    <>
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.027}
        shadow-bias={-0.004}
      />
      <ambientLight intensity={0.5} />

      <group
        scale={0.3}
        //  position={[position.x, position.y, position.z]}
        //  rotation={[rotation.x, rotation.y - 0.75, rotation.z]}
      >
        <mesh
          geometry={head.nodes.object.geometry}
          rotation={[headRotation.x, headRotation.y, headRotation.z]}
          position={[headPosition.x, headPosition.y, headPosition.z]}
          scale={headScale}
        >
          <meshStandardMaterial color={headColor} />
        </mesh>
      </group>
      <mesh
        receiveShadow
        position-y={-0.9}
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
