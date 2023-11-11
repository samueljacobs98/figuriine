interface BodyPartData {
  name: string;
  geometry: THREE.BufferGeometry;
  color: string;
  offsetPosition: { x: number; y: number; z: number };
  offsetRotation: { x: number; y: number; z: number };
  scale: number;
}

class BodyPartFactory implements BodyPartData {
  constructor(
    public name: string,
    public geometry: THREE.BufferGeometry,
    public color: string,
    public offsetPosition: { x: number; y: number; z: number } = {
      x: 0,
      y: 0,
      z: 0,
    },
    public offsetRotation: { x: number; y: number; z: number } = {
      x: 0,
      y: 0,
      z: 0,
    },
    public scale: number = 1
  ) {}

  render = () => <BodyPart data={this} />;
}

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

export default BodyPartFactory;
