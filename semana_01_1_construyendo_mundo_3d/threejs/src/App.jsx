import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Center } from '@react-three/drei'

function Model() {
  const { scene } = useGLTF('/models/lion_chinatown.glb')

  return (
    <Center>
      <primitive object={scene} scale={3} />
    </Center>
  )
}

export default function App() {
  return (
    <Canvas
      camera={{ position: [0, 3, 10], fov: 45 }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />

      <Model />

      <OrbitControls target={[0, 0, 0]} />
    </Canvas>
  )
}

