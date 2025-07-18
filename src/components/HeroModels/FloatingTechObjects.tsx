import { Canvas } from '@react-three/fiber'

// Main floating objects component
const FloatingTechObjects = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* Left side - 2 objects */}
        <mesh position={[-3, 1.5, 0]}>
          <boxGeometry args={[4, 4, 4]} />
          <meshStandardMaterial color="#61dafb" />
        </mesh>
        
        <mesh position={[-3, -1.5, 0]}>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color="#3776ab" />
        </mesh>
        
        {/* Right side - 2 objects
        // <mesh position={[3, 1.5, 0]}>
        //   <boxGeometry args={[0.6, 0.6, 0.6]} />
        //   <meshStandardMaterial color="#68a063" />
        // </mesh> */}
        
        <mesh position={[3, -1.5, 0]}>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color="#f05032" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default FloatingTechObjects 