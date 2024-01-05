import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

//import starCanvas


import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./ironman/scene.gltf");


  return (
    <mesh>
    <ambientLight intensity={2000.5} /> {/* New ambient light */}
    {/* <hemisphereLight skyColor={'#ffffff'} groundColor={'#000000'} intensity={2000000} /> */}
    <spotLight
      position={[0, 0, 0 ]}
      angle={0.12}
      penumbra={20}
      intensity={80}
      castShadow
      shadow-mapSize={1024}
    />
    
    <pointLight intensity={300} />
    <pointLight position={[10, 10, -10]} intensity={30} /> {/* New point light */}
    <pointLight position={[-10, -10, -50]} intensity={30} /> {/* New point light */}

    <pointLight position={[40, 40, 50]} intensity={5000} />
    <pointLight position={[40, -40, 50]} intensity={5000} />
    <pointLight position={[-40, -40, 50]} intensity={120} />
    <pointLight position={[0, 0, 50]} intensity={120} /> //front
    <pointLight position={[0, 0, -50]} intensity={5200} /> //back
    <pointLight position={[0, 0, -50]} intensity={500} /> //back
    <pointLight position={[0, 0, -50]} intensity={500} /> //back
    <pointLight position={[0, 0, -50]} intensity={5000} /> //back
    <pointLight position={[50, 0, 0]} intensity={5000} /> //right
    <pointLight position={[-50, 0, 0]} intensity={5000} /> //left
    <pointLight position={[0, 50, 0]} intensity={8000} /> //top
    <pointLight position={[0, -50, 0]} intensity={8000} /> //bottom
    <pointLight position={[0, 0, 50]} intensity={100} /> //front
    <pointLight position={[0, 0, 50]} intensity={1000} /> //front
    <pointLight position={[0, 0, 50]} intensity={5000} /> //front


    <primitive
      object={computer.scene}
      scale={isMobile ? 45.5 : 51.45}
      position={isMobile ? [0, -79.5, -2.2] : [0, -82.25, -1.5]}
      rotation={[-0.00, -0.0, -0.0]}
    />
  </mesh>
);
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [10, -50, 200], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;