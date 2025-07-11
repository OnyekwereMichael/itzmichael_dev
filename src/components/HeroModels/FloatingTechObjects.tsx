import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Simple test cube
const TestCube = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#61dafb" />
    </mesh>
  )
}

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