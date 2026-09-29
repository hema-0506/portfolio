import React, { Suspense } from "react";
import HeroText from "@/components/HeroText";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Robot } from "../components/Robot";
import { useMediaQuery } from "react-responsive";
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
        <Canvas camera={{ position: [0, -10, 300] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />  
        <Suspense fallback={<Loader/>}>
          <Float>
          <Robot 
          scale={isMobile ? 0.8 : 1}
          position={isMobile ? [100, -180, 0] : undefined}
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
