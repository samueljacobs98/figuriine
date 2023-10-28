import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import BodyPart from "./BodyPart";
import BodyPartData from "./BodyPartData";

type GLTFResult = GLTF & {
  nodes: {
    object: THREE.Mesh;
  };
};

type TorsoGLTFResult = GLTF & {
  nodes: {
    torso: THREE.Mesh;
  };
};

type UpperBodyProps = {
  bodyScale: number;
  headColor: string;
  torsoColor: string;
  armColor: string;
  handColor: string;
};

const UpperBody = ({
  bodyScale,
  headColor,
  torsoColor,
  armColor,
  handColor,
}: UpperBodyProps) => {
  const head = useGLTF("/head.glb") as GLTFResult;
  const torso = useGLTF("/torso.glb") as TorsoGLTFResult;
  const leftArm = useGLTF("/left-arm.glb") as GLTFResult;
  const leftHand = useGLTF("/left-hand.glb") as GLTFResult;
  const rightArm = useGLTF("/right-arm.glb") as GLTFResult;
  const rightHand = useGLTF("/right-hand.glb") as GLTFResult;

  const upperBodyData: BodyPartData[] = [
    new BodyPartData("head", head.nodes.object.geometry, headColor),
    new BodyPartData("torso", torso.nodes.torso.geometry, torsoColor),
    new BodyPartData(
      "left arm",
      leftArm.nodes.object.geometry,
      armColor,
      { x: 0, y: 0.2, z: 0 },
      { x: -3.2, y: -0.2, z: -1.8 }
    ),
    new BodyPartData(
      "left hand",
      leftHand.nodes.object.geometry,
      handColor,
      { x: -0.8, y: 0.2, z: 0.2 },
      { x: -4.9, y: 1.8, z: -5.4 }
    ),
    new BodyPartData(
      "right arm",
      rightArm.nodes.object.geometry,
      armColor,
      { x: -6.1, y: -0.2, z: 0 },
      { x: Math.PI, y: 0, z: -1.8 }
    ),
    new BodyPartData(
      "right hand",
      rightHand.nodes.object.geometry,
      handColor,
      { x: -0.5, y: 0, z: -0.2 },
      { x: 4.9, y: 2.6, z: -4.9 }
    ),
  ];

  return (
    <group rotation={[0, 0, 0]} position={[0, 0, 8.8]}>
      {upperBodyData.map((data) => {
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

export default UpperBody;
