import { useGLTF } from "@react-three/drei";
import { folder, useControls } from "leva";
import { GLTF } from "three-stdlib";
import BodyPart from "./BodyPart";
import BodyPartData from "./BodyPartData";

type GLTFResult = GLTF & {
  nodes: {
    Object006: {
      geometry: THREE.BufferGeometry;
    };
    Object007: {
      geometry: THREE.BufferGeometry;
    };
    Object008: {
      geometry: THREE.BufferGeometry;
    };
  };
};

type LowerBodyProps = {
  bodyScale: number;
  legsColor: string;
};

const LowerBody = ({ bodyScale, legsColor }: LowerBodyProps) => {
  const legs = useGLTF("/legs.glb") as GLTFResult;

  const lowerBodyData: BodyPartData[] = [
    new BodyPartData(
      "waist",
      legs.nodes.Object006.geometry,
      legsColor,
      { x: 0, y: 0, z: 0 },
      { x: 0, y: 0, z: 2.4 }
    ),
    new BodyPartData("left leg", legs.nodes.Object007.geometry, legsColor),
    new BodyPartData("right leg", legs.nodes.Object008.geometry, legsColor),
  ];

  return (
    <group rotation={[0, 0, 0]} position={[0, 0, 0]}>
      {lowerBodyData.map((data) => {
        return (
          <BodyPart
            key={data.name}
            name={data.name}
            color={data.color}
            geometry={data.geometry}
            scale={bodyScale}
            rotation={data.offsetRotation}
            position={data.offsetPosition}
          />
        );
      })}
    </group>
  );
};

export default LowerBody;
