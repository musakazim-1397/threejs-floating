import { useLoader } from '@react-three/fiber'
import { useEffect } from 'react'
import { Color, DoubleSide } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const Grass = () => {
    const islandModel = useLoader(GLTFLoader, '/models/grass.glb')
    islandModel.scene.scale.set(0.3, 0.3, 0.3)
    useEffect(()=>{
        islandModel.scene.children[0].material.alphaToCoverage=true;
        islandModel.scene.children[0].material.transparent=true;
        islandModel.scene.children[0].material.map= islandModel.scene.children[0].material.emissiveMap;
        islandModel.scene.children[0].material.emissive= new Color(0.5,0.5,0.5);
        islandModel.scene.children[0].material.side = DoubleSide;
    },[islandModel])
    console.log(islandModel);
  return (
    <mesh>
        <primitive object={islandModel.scene} />
    </mesh>
  )
}

export default Grass