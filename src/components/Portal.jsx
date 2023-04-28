import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const Portal = () => {
    const portal = useLoader(GLTFLoader, '/models/portal.glb')
    portal.scene.scale.set(0.4, 0.4, 0.4)
  return (
    <mesh position={[0,-0.5,-1]}>
        <primitive object={portal.scene} />
    </mesh>
  )
}

export default Portal