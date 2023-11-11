import { useGLTF } from "@react-three/drei";
import MinifigureGLTFResult from "@/Types/MinifigureGLTFResult";
import { useControls, folder } from "leva";
import UpperBody from "./UpperBody";
import LowerBody from "./LowerBody";
import GenerateBodyParts from "./GenerateBodyParts";

const defaultColours = {
  headColor: "#F7C602",
  torsoColor: "#0224f7",
  armColor: "#0224f7",
  handColor: "#F7C602",
  legsColor: "#030b89",
};

const defaultSizes = {
  bodyScale: 0.05,
};

const Minifigure = () => {
  const { headColor, torsoColor, armColor, handColor, legsColor, bodyScale } =
    useControls({
      Colors: folder(defaultColours),
      Sizes: folder(defaultSizes),
    });

  const { nodes } = useGLTF(
    "/minifigure.draco.glb",
    true
  ) as MinifigureGLTFResult;

  const {
    head,
    leftArm,
    rightArm,
    leftHand,
    rightHand,
    waist,
    leftLeg,
    rightLeg,
    torso,
  } = GenerateBodyParts({
    nodes,
    colors: {
      head: headColor,
      torso: torsoColor,
      arms: armColor,
      hands: handColor,
      legs: legsColor,
    },
  });

  return (
    <group scale={bodyScale} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      {head.render()}
      <UpperBody {...{ torso, leftArm, rightArm, leftHand, rightHand }} />
      <LowerBody {...{ waist, leftLeg, rightLeg }} />
    </group>
  );
};

export default Minifigure;
