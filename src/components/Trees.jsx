import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const Trees = () => {
    const islandModel = useLoader(GLTFLoader, '/models/trees.glb')
    islandModel.scene.scale.set(0.3, 0.3, 0.3)
  return (
    <mesh >
        <primitive object={islandModel.scene} />
    </mesh>
  )
}

export default Trees