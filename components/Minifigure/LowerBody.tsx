import BodyPartFactory from "./BodyPartFactory";

type LowerBodyProps = {
  waist: BodyPartFactory;
  leftLeg: BodyPartFactory;
  rightLeg: BodyPartFactory;
};

const LowerBody = ({ waist, leftLeg, rightLeg }: LowerBodyProps) => {
  return (
    <group position={[0, 10, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      {waist.render()}
      {leftLeg.render()}
      {rightLeg.render()}
    </group>
  );
};

export default LowerBody;
