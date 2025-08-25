import React from "react";
import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion"; // Corrected import for framer-motion

const HeroText = () => {
  const words = ["Secure", "Optimized", "Scalable", "Robust", "Intuitive"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    // This container is now positioned over your canvas and is click-through
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                 w-full max-w-4xl px-4 pointer-events-none z-10"
    >
      <div className="text-center md:text-left">
        {/* Desktop View */}
        <div className="hidden md:flex flex-col items-center md:items-start c-space">
          <motion.h1
            className="text-4xl font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            Hi&#44; I&apos;m Hema
          </motion.h1>
          <div className="flex flex-col items-center md:items-start">
            <motion.p
              className="text-5xl font-medium text-neutral-300"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
            >
              A Developer <br /> Translating Complex Problems into
            </motion.p>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.4 }}
            >
              <FlipWords
                words={words}
                className="font-black text-white text-8xl"
              />
            </motion.div>
          </div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            Software Solutions
          </motion.p>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col space-y-6 md:hidden -translate-y-5 -translate-x-23">
          <motion.p
            className="text-3xl font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            Hi&#44; I&apos;m Hema
          </motion.p>
          <div>
            <motion.p
              className="text-4xl font-black text-neutral-300"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
            >
              A Developer <br /> Translating Complex Problems into
            </motion.p>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.4 }}
            >
              <FlipWords
                words={words}
                className="font-black text-white text-6xl text-center"
              />
            </motion.div>
          </div>
          <motion.p
            className="text-3xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.6 }}
          >
            Software Solutions
          </motion.p>
        </div>
        
        {/* Example of an interactive button inside the container */}
        <motion.div
          className="mt-8 flex justify-center md:justify-start"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
        
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;