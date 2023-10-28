class BodyPartData {
  constructor(
    public name: string,
    public geometry: THREE.BufferGeometry,
    public color: string,
    public offsetRotation: { x: number; y: number; z: number } = {
      x: 0,
      y: 0,
      z: 0,
    },
    public offsetPosition: { x: number; y: number; z: number } = {
      x: 0,
      y: 0,
      z: 0,
    }
  ) {}
}

export default BodyPartData;
