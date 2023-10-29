import { folder, useControls } from "leva";
import UpperBody from "./UpperBody";
import LowerBody from "./LowerBody";

const FigureModel = () => {
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
      bodyScale: 0.2,
    }),
    "Debug group": folder({
      groupRotation: {
        value: { x: -Math.PI / 2, y: 0, z: 2 },
        step: 0.1,
      },
      groupPosition: {
        value: { x: 0, y: 0.8, z: 0 },
        step: 0.1,
      },
    }),
  });

  return (
    <group
      scale={0.3}
      rotation={[groupRotation.x, groupRotation.y, groupRotation.z]}
      position={[groupPosition.x, groupPosition.y, groupPosition.z]}
    >
      <UpperBody
        bodyScale={bodyScale}
        headColor={headColor}
        torsoColor={torsoColor}
        armColor={armColor}
        handColor={handColor}
      />
      <LowerBody bodyScale={bodyScale} legsColor={legsColor} />
    </group>
  );
};

export default FigureModel;
