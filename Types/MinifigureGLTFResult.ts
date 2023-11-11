import { GLTF } from "three-stdlib";

type MinifigureGLTFResult = GLTF & {
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

export default MinifigureGLTFResult;
