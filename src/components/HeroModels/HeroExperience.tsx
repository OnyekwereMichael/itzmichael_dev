// import { useRef } from 'react'
// import { Canvas, useLoader } from '@react-three/fiber'
// import * as THREE from 'three'
// import { useMediaQuery } from 'react-responsive'
// import Particles from './Particle'
// import HeroLights from './HeroLights'

// const RotatingImage = ({ isMobile }: { isMobile: boolean }) => {
//   const texture = useLoader(THREE.TextureLoader, '/src/assets/public/images/man.avif')
//   texture.anisotropy = 16
//   texture.minFilter = THREE.LinearFilter
//   texture.magFilter = THREE.LinearFilter

//   return (
//     <group position={[0, -1.5, 0]}>
//       {/* BACK Glow Plane (faint light effect behind the image) */}
//       <mesh position={[0, 0, -0.1]} scale={isMobile ? [5, 5, 1] : [10, 10, 1]}>
//         <circleGeometry args={[1.8, 64]} />
//         <meshBasicMaterial color="#4cc9f0" transparent opacity={0.08} />
//       </mesh>

//       {/* Main Profile Image */}
//       <mesh
//         scale={isMobile ? [3.5, 3.5, 3.5] : [5, 5, 6.5]}
//         rotation={[0, 0, 0]}
//       >
//         <circleGeometry args={[1.5, 128]} />
//         <meshStandardMaterial
//           map={texture}
//           roughness={0.25}
//           metalness={0.1}
//         />
//       </mesh>

//       {/* Glow Ring */}
//       <mesh scale={isMobile ? [3.7, 3.7, 3.7] : [5, 5, 7]}>
       
//         <meshBasicMaterial
//           color="#4cc9f0"
//           side={THREE.DoubleSide}
//           transparent
//           opacity={0.7}
//         />
//       </mesh>
//     </group>
//   )
// }

// const HeroExperience = () => {
//   const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

//   return (
//     <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
//       {/* Place lights behind the avatar */}
//       <ambientLight intensity={0.3} />
//       <directionalLight position={[0, 0, -5]} intensity={1.2} color="#4cc9f0" />
//       <pointLight position={[0, 1.5, -3]} intensity={1.5} color="#7209b7" />

//       {/* Background particles and ambient lighting */}
//       <Particles count={120} />
//       <HeroLights /> 
//       <RotatingImage isMobile={isMobile} />
//     </Canvas>
//   )
// }

// export default HeroExperience

import { Canvas, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useMediaQuery } from 'react-responsive'
import Particles from './Particle'
import HeroLights from './HeroLights'

const RotatingImage = ({ isMobile }: { isMobile: boolean }) => {
  const texture = useLoader(THREE.TextureLoader, '/src/assets/public/images/man.avif')
  texture.anisotropy = 16
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter

  return (
    <group position={[0, -1.5, 0]}>
      {/* BACK Glow Plane */}
      <mesh position={[0, 0, -0.2]} scale={isMobile ? [4, 4, 1] : [7, 7, 1]}>
        <planeGeometry args={[2.8, 2.8]} />
        <meshBasicMaterial color="#4cc9f0" transparent opacity={0.06} />
      </mesh>

      {/* Main Profile Image as Box */}
      <mesh scale={isMobile ? [7, 4, 0.2] : [9, 6, 7.5]}>
        <boxGeometry args={[1.5, 2, 0.05]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.25}
          metalness={0.1}
        />
      </mesh>

    </group>
  )
}

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
      {/* Lighting behind image */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, -5]} intensity={1} color="#4cc9f0" />
      <pointLight position={[0, 1.5, -3]} intensity={1.2} color="#7209b7" />


      <Particles count={120} />
      <HeroLights />
      <RotatingImage isMobile={isMobile} />
    </Canvas>
  )
}

export default HeroExperience
