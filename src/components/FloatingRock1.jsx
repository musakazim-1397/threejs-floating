import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const FloatingRock1 = () => {
    const floatingRock = useLoader(GLTFLoader, '/models/floating_rock_1.glb')
    floatingRock.scene.scale.set(0.3, 0.3, 0.3)
  return (
    <mesh position={[10,2,-5]}>
        <primitive object={floatingRock.scene} />
    </mesh>
  )
}

export default FloatingRock1