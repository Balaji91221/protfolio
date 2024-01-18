import { Canvas, useLoader } from "react-three-fiber";
import { Suspense, useMemo } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Loader2 } from "../Loader";
import useThemes from "../../hooks/contextTheme";

const Earth = () => {
 
  const textureLoader = new THREE.TextureLoader();

  // Use the traditional THREE.TextureLoader for loading textures
  const textureDay = useMemo(() => textureLoader.load("/texture/night.webp"), [textureLoader]);
  const textureNight = useMemo(() => textureLoader.load("/texture/day.webp"), [textureLoader]);

  const { theme } = useThemes();

  const texture = useMemo(() => (theme ? textureDay : textureNight), [theme]);
  const intensity = theme ? 5 : 0.25;
  return (
    <Suspense fallback={<Loader2 />}>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 60 }}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={-0.5}
          enableZoom={false}
          makeDefault
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={intensity} />
        <pointLight position={[15, 25, -15]} />
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial map={texture} />
        </mesh>
      </Canvas>
    </Suspense>
  );
};

export default Earth;
