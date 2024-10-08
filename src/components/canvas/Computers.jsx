// import {Suspense } from 'react';
// import { Canvas} from '@react-three/fiber';
// import {OrbitControls ,Preload , useGLTF} from '@react-three/drei'
// import CanvasLoader from '../Loader'

// const Computers = () => {
//   const computer = useGLTF('./desktop_pc/scene.gltf') 
//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black"/>
//       <pointlight intentsity = {1}/>
//       <primitive
//         object={computer.scene}
//       />
//     </mesh>

//   )
// }

// const ComputerCanvas = () =>{
//   return(
//     <Canvas
//     frameloop ="demand"
//     shadows
//     camera ={{position : [20 ,3,5], fav :25 }}
//     gl ={{preserverDrawingBuffer :true}}
//     >
//       <Suspense  fallback = {<CanvasLoader/>}>
//       <OrbitControls 
//       enableZoom={false}
//       maxPolarAngle={Math.PI/2}
//       minPolarAngle={Math.PI/2}
//       />
//       <Computers/>
//      </Suspense>
//      <Preload all/>



//     </Canvas>
//   )
// }

// export default Computers


// import {Suspense ,useEffect, useState}  from 'react';
// import {Canvas} from '@react-three/fiber';
// import {OrbitControls, Preload,useGLTF} from '@react-three/drei';


// import CanvasLoader from '../Loader';


// const Computers = () =>{
//   const computer  = useGLTF ('./desktop_pc/scene.gltf')
//   return (
//    <mesh>
//     <hemisphereLight intensity={0.15} groundColor="black"/>
//     <pointLight intensity ={1}/>
//     <spotlight
//     position ={[-20,50,10]}
//     angle ={0.12}
//     penumbra ={1}
//     castShadow
//     shadow-mapSize ={1024}
    
//     />

//     <primitive 
//     object={computer.scene}
//     scale ={0.75}
//     position ={[0,-3.25,-1.5]}
//     rotation = {[-0.01,-0.2 ,-0.1]}
//      />
//    </mesh>


//   )
// }

// const ComputerCanvas = () =>{
//   return(

//     <Canvas 
//     frameLoop="demand"
//     shadows
//     camera = {{position :[20,3,5], fov :25}}
//     gl = {{preserverDrawingBuffer:true}}
//     >
//       <Suspense fallback= {<CanvasLoader/>}>

//       <OrbitControls
//        enableZoom ={false}
//        maxPolarAngle ={Math.PI/2}
//        mixPolarAngle ={Math.PI/2}
       
//        />
//        <Computers/>
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   )
// }
// export default Computers


import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Ambient light to softly illuminate the scene */}
      <ambientLight intensity={0.3} />

      {/* Hemisphere light for soft upper and lower lighting */}
      <hemisphereLight intensity={0.35} skyColor="white" groundColor="black" />

      {/* Directional light to mimic sunlight and cast shadows */}
      <directionalLight
        position={[5, 10, 5]}  // Position it to one side to create realistic shadowing
        intensity={1}  // Increase the intensity
        shadow-mapSize={[1024, 1024]}
        castShadow
      />

      {/* Spotlight for focused lighting */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}         // Widen the spotlight's angle
        penumbra={0.5}      // Soften the edge of the spotlight
        intensity={1}       // Keep the spotlight intensity strong
        distance={50}       // Increase the distance the light reaches
        decay={2}           // Light gradually fades over distance
        castShadow
        shadow-mapSize={1024}
      />

      {/* Point light to fill in the shadows */}
      <pointLight position={[0, 10, 10]} intensity={0.5} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 8.5 : 8.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.05, -1, -0.22]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
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