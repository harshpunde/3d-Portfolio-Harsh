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

  // Define scaling and positioning for mobile and desktop
  const scale = isMobile ? [3.4, 3.4, 3.4] : [8.8, 8.8, 8.8]; // Adjust the scale as necessary
  const position = isMobile ? [0, -1.5, -1] : [0, -2.5, -1.5]; // Adjust position for mobile

  return (
    <mesh>
      <ambientLight intensity={0.3} />
      <hemisphereLight intensity={0.35} skyColor="white" groundColor="black" />
      <directionalLight
        position={[5, 10, 5]}  
        intensity={1}  
        shadow-mapSize={[1024, 1024]}
        castShadow
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={0.5}
        intensity={1}
        distance={50}
        decay={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[0, 10, 10]} intensity={0.5} />

      {/* Apply scale and position based on the device type */}
      <primitive
        object={computer.scene}
        scale={scale} // Use dynamic scale
        position={position} // Use dynamic position
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
      camera={{ position: isMobile ? [10, 3, 5] : [20, 3, 5], fov: 25 }}
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