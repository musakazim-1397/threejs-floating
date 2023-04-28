import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const FloatingRock3 = () => {
    const floatingRock = useLoader(GLTFLoader, '/models/floating_rock_3.glb')
    floatingRock.scene.scale.set(0.3, 0.3, 0.3)
  return (
    <mesh position={[-5,-1,-2]}>
        <primitive object={floatingRock.scene} />
    </mesh>
  )
}

export default FloatingRock3