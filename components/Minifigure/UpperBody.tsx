import BodyPartFactory from "./BodyPartFactory";

type UpperBodyProps = {
  torso: BodyPartFactory;
  leftArm: BodyPartFactory;
  rightArm: BodyPartFactory;
  leftHand: BodyPartFactory;
  rightHand: BodyPartFactory;
};

const UpperBody = ({
  torso,
  leftArm,
  rightArm,
  leftHand,
  rightHand,
}: UpperBodyProps) => {
  return (
    <group position={[0, 54, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      {torso.render()}
      {leftArm.render()}
      {rightArm.render()}
      {leftHand.render()}
      {rightHand.render()}
    </group>
  );
};

export default UpperBody;
