
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface Fish3DProps {
  type: 'octahedron' | 'torus' | 'cylinder' | 'star';
  color?: string;
  position?: [number, number, number];
  scale?: number;
  autoRotate?: boolean;
}

const FishShape = ({ type, color = '#3b82f6', position = [0, 0, 0], scale = 1, autoRotate = true }: Fish3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      
      if (hovered) {
        meshRef.current.scale.setScalar(scale * 1.2);
      } else {
        meshRef.current.scale.setScalar(scale);
      }
    }
  });

  const renderGeometry = () => {
    switch (type) {
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 100]} />;
      case 'cylinder':
        return <cylinderGeometry args={[0.8, 0.8, 1.5, 32]} />;
      case 'star':
        const starShape = new THREE.Shape();
        const outerRadius = 1;
        const innerRadius = 0.5;
        const spikes = 8;
        
        for (let i = 0; i < spikes * 2; i++) {
          const angle = (i / (spikes * 2)) * Math.PI * 2;
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          if (i === 0) {
            starShape.moveTo(x, y);
          } else {
            starShape.lineTo(x, y);
          }
        }
        starShape.closePath();
        
        return <extrudeGeometry args={[starShape, { depth: 0.3, bevelEnabled: false }]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {renderGeometry()}
      <meshPhysicalMaterial
        color={color}
        metalness={0.8}
        roughness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.1}
        iridescence={1}
        iridescenceIOR={1.3}
        iridescenceThicknessRange={[100, 800]}
      />
    </mesh>
  );
};

const Fish3D = ({ type, color, position, scale, autoRotate }: Fish3DProps) => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <FishShape 
          type={type}
          color={color}
          position={position}
          scale={scale}
          autoRotate={autoRotate}
        />
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default Fish3D;
