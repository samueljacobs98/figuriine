import BodyPartFactory from "./BodyPartFactory";
import MinifigureGLTFResult from "@/Types/MinifigureGLTFResult";

type GenerateBodyPartsProps = {
  nodes: MinifigureGLTFResult["nodes"];
  colors: {
    head: string;
    torso: string;
    arms: string;
    hands: string;
    legs: string;
  };
};

const GenerateBodyParts = ({ nodes, colors }: GenerateBodyPartsProps) => {
  const waist = new BodyPartFactory(
    "Waist",
    nodes.WaistModel.geometry,
    colors.legs,
    { x: 0, y: 0, z: 12 },
    { x: 0, y: 0, z: 0 }
  );

  const leftLeg = new BodyPartFactory(
    "Left Leg",
    nodes.LeftLegModel.geometry,
    colors.legs
  );

  const rightLeg = new BodyPartFactory(
    "Right Leg",
    nodes.RightLegModel.geometry,
    colors.legs
  );

  const torso = new BodyPartFactory(
    "Torso",
    nodes.TorsoModel.geometry,
    colors.torso
  );

  const leftArm = new BodyPartFactory(
    "Left Arm",
    nodes.LeftArmModel.geometry,
    colors.arms,
    { x: -15.5, y: 0, z: -8 },
    { x: 0, y: 0.2, z: 0 }
  );

  const rightArm = new BodyPartFactory(
    "Right Arm",
    nodes.RightArmModel.geometry,
    colors.arms,
    { x: 15.5, y: 0, z: -8 },
    { x: 0, y: -0.2, z: 0 }
  );

  const leftHand = new BodyPartFactory(
    "Left Hand",
    nodes.LeftHandModel.geometry,
    colors.hands,
    { x: -24, y: 10, z: -25 },
    { x: -0.8, y: 0, z: 0.1 }
  );

  const rightHand = new BodyPartFactory(
    "Right Hand",
    nodes.RightHandModel.geometry,
    colors.hands,
    { x: 24, y: 10, z: -25 },
    { x: -0.8, y: 0, z: -0.1 }
  );

  const head = new BodyPartFactory(
    "Head",
    nodes.HeadModel.geometry,
    colors.hands,
    { x: 0, y: 78, z: 0 },
    { x: -Math.PI / 2, y: 0, z: Math.PI / 2 }
  );

  return {
    waist,
    leftLeg,
    rightLeg,
    torso,
    leftArm,
    rightArm,
    leftHand,
    rightHand,
    head,
  };
};

export default GenerateBodyParts;
