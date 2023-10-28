import * as THREE from "three";

type BodyPartProps = {
  name: string;
  scale: number;
  color: string;
  geometry: THREE.BufferGeometry;
  rotation: { x: number; y: number; z: number };
  position: { x: number; y: number; z: number };
};

const BodyPart = ({
  scale,
  color,
  geometry,
  rotation,
  position,
}: BodyPartProps) => {
  return (
    <mesh
      castShadow
      geometry={geometry}
      rotation={[rotation.x, rotation.y, rotation.z]}
      position={[position.x, position.y, position.z]}
      scale={scale}
    >
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default BodyPart;
