import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* Cool ambient spot lights */}
    <spotLight
      position={[2, 6, 7]}
      angle={0.2}
      penumbra={0.3}
      intensity={25}
      color="white"
    />
    <spotLight
      position={[4, 6, 4]}
      angle={0.35}
      penumbra={0.6}
      intensity={18}
      color="#4cc9f0"
    />
    <spotLight
      position={[-4, 6, 5]}
      angle={0.4}
      penumbra={1}
      intensity={22}
      color="#9d4edd"
    />
    <primitive
      object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
      position={[2, 4, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={8}
    />
  </>
);

export default HeroLights;
