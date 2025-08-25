import React, { Suspense, useState } from "react";
import HeroText from "@/components/HeroText";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Canvas, useFrame } from "@react-three/fiber";
import { SpaceLoop } from "@/components/SpaceLoop";
import { OrbitControls, Bounds, Float} from "@react-three/drei";
import { Robot } from "../components/Robot";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({maxWidth: 853});
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >

        // Change the z-position from a large number to a smaller one
        <Canvas camera={{ position: [0, -10, 300] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />  
        <Suspense fallback={<Loader/>}>
          <Float>
          <Robot 
          scale={isMobile && 0.8}
          position={isMobile && [100, -180, 0]}
          />     
          </Float>
          </Suspense>   
          <OrbitControls enableZoom={false}/> 
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
