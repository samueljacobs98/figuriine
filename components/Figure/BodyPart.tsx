import BodyPartData from "./BodyPartData";

type BodyPartProps = {
  data: BodyPartData;
  scale?: number;
};

const BodyPart = ({ data }: BodyPartProps) => {
  return (
    <mesh
      castShadow
      geometry={data.geometry}
      rotation={[
        data.offsetRotation.x,
        data.offsetRotation.y,
        data.offsetRotation.z,
      ]}
      position={[
        data.offsetPosition.x,
        data.offsetPosition.y,
        data.offsetPosition.z,
      ]}
      scale={data.scale}
    >
      <meshStandardMaterial color={data.color} />
    </mesh>
  );
};

export default BodyPart;
