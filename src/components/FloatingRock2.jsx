import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const FloatingRock2 = () => {
    const floatingRock = useLoader(GLTFLoader, '/models/floating_rock_2.glb')
    floatingRock.scene.scale.set(0.4, 0.4, 0.4)
  return (
    <mesh position={[-6,2,-2]}>
        <primitive object={floatingRock.scene} />
    </mesh>
  )
}

export default FloatingRock2