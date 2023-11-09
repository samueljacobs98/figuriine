import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import BodyPartData from "./BodyPartData";
import BodyPart from "./BodyPart";
import { useControls, folder } from "leva";

type GLTFResult = GLTF & {
  nodes: {
    WaistModel: THREE.Mesh;
    LeftLegModel: THREE.Mesh;
    RightLegModel: THREE.Mesh;
    TorsoModel: THREE.Mesh;
    LeftArmModel: THREE.Mesh;
    RightArmModel: THREE.Mesh;
    LeftHandModel: THREE.Mesh;
    RightHandModel: THREE.Mesh;
    HeadModel: THREE.Mesh;
  };
};

const Minifigure = () => {
  const { nodes } = useGLTF("/minifigure.draco.glb", true) as GLTFResult;

  const {
    headColor,
    torsoColor,
    armColor,
    handColor,
    legsColor,
    bodyScale,
    groupRotation,
    groupPosition,
  } = useControls({
    Customise: folder({
      headColor: "#F7C602",
      torsoColor: "#0224f7",
      armColor: "#0224f7",
      handColor: "#F7C602",
      legsColor: "#030b89",
      bodyScale: 0.05,
    }),
    "Debug group": folder({
      groupRotation: {
        value: { x: 0, y: 0, z: 0 },
        step: 0.1,
      },
      groupPosition: {
        value: { x: 0, y: 0, z: 0 },
        step: 0.1,
      },
    }),
  });

  const waist = new BodyPartData(
    "Waist",
    nodes.WaistModel.geometry,
    legsColor,
    { x: 0, y: 0, z: 12 },
    { x: 0, y: 0, z: 0 }
  );

  const leftLeg = new BodyPartData(
    "Left Leg",
    nodes.LeftLegModel.geometry,
    legsColor
  );

  const rightLeg = new BodyPartData(
    "Right Leg",
    nodes.RightLegModel.geometry,
    legsColor
  );

  const torso = new BodyPartData(
    "Torso",
    nodes.TorsoModel.geometry,
    torsoColor
  );

  const leftArm = new BodyPartData(
    "Left Arm",
    nodes.LeftArmModel.geometry,
    armColor,
    { x: -15.5, y: 0, z: -8 },
    { x: 0, y: 0.2, z: 0 }
  );

  const rightArm = new BodyPartData(
    "Right Arm",
    nodes.RightArmModel.geometry,
    armColor,
    { x: 15.5, y: 0, z: -8 },
    { x: 0, y: -0.2, z: 0 }
  );

  const leftHand = new BodyPartData(
    "Left Hand",
    nodes.LeftHandModel.geometry,
    handColor,
    { x: -24, y: 10, z: -25 },
    { x: -0.8, y: 0, z: 0.1 }
  );

  const rightHand = new BodyPartData(
    "Right Hand",
    nodes.RightHandModel.geometry,
    handColor,
    { x: 24, y: 10, z: -25 },
    { x: -0.8, y: 0, z: -0.1 }
  );

  const head = new BodyPartData(
    "Head",
    nodes.HeadModel.geometry,
    headColor,
    { x: 0, y: 78, z: 0 },
    { x: -Math.PI / 2, y: 0, z: Math.PI / 2 }
  );

  return (
    <group
      scale={bodyScale}
      position={[groupPosition.x, groupPosition.y, groupPosition.z]}
      rotation={[groupRotation.x, groupRotation.y, groupRotation.z]}
    >
      {/* Head */}
      <BodyPart data={head} />
      {/* Upper Body */}
      <group position={[0, 54, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <BodyPart data={torso} />
        <BodyPart data={leftArm} />
        <BodyPart data={rightArm} />
        <BodyPart data={leftHand} />
        <BodyPart data={rightHand} />
      </group>
      {/* Lower Body */}
      <group position={[0, 10, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <BodyPart data={waist} />
        <BodyPart data={leftLeg} />
        <BodyPart data={rightLeg} />
      </group>
    </group>
  );
};

export default Minifigure;
