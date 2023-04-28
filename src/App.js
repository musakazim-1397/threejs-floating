import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Island from "./components/Island";
import Grass from "./components/Grass";
import Trees from "./components/Trees";
import FloatingRock1 from "./components/FloatingRock1";
import FloatingRock2 from "./components/FloatingRock2";
import FloatingRock3 from "./components/FloatingRock3";
import Portal from "./components/Portal";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas>
        <PerspectiveCamera position={[10, 10, 10]} />
        <Environment files={"/textures/bg.hdr"} background={'only'} />
        <Environment files={"/textures/envmap.hdr"} background={false} />
        <OrbitControls target={[0, 1, 0]} />
        <group rotation-y={0.5}>
          <Island />
          <Grass />
          <Trees />
          <FloatingRock1/>
          <FloatingRock2/>
          <FloatingRock3/>
          <Portal/>
        </group>
      </Canvas>
    </div>
  );
}

export default App;
