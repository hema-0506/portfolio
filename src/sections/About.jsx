import React, { useRef, useState } from 'react'
import Card from '../components/Card'
import {FaLaptopCode, FaUtensils, FaMugHot} from 'react-icons/fa'
import {AnimatePresence, motion} from 'framer-motion'
import Confetti from 'react-confetti';
import WordleHint from '../components/WordleHint';
import CopyEmailButton from '../components/CopyEmailButton';

const currentActivities = [
  {
    icon: <FaLaptopCode />,
    label: 'Learning',
    description: 'Rust for its performance and safety features.',
  },
  {
    icon: <FaUtensils />,
    label: 'Building',
    description: 'An app to map the best street food spots in Chennai.',
  },
  {
    icon: <FaMugHot />,
    label: 'Obsessed with',
    description: 'The art of making the perfect South Indian filter coffee.',
  },
];
const SECRET_CODE = 'coffee';
const About = () => {
  const grid2Container = useRef();

   // State to manage the flow: 'initial' -> 'playing' -> 'revealed'
   const [gameState, setGameState] = useState('initial');
   const [showConfetti, setShowConfetti] = useState(false);
 
   // This function is called by the Wordle game upon winning
   const handleWin = () => {
     setGameState('revealed');
     setShowConfetti(true);
     console.log(
       `%c🎉 You solved it! A true problem-solver. Well done.`,
       'color: #ba74a6; font-size: 16px; font-weight: bold;'
     );
   };
 
   // Resets the entire sequence
   const handleCloseSecret = () => {
     setGameState('initial');
   };
 
   const animationVariants = {
     hidden: { opacity: 0, scale: 0.95 },
     visible: { opacity: 1, scale: 1 },
     exit: { opacity: 0, scale: 0.95 },
   };
 
  return (
    <section className='c-space section-spacing'>
      {/* Conditionally render confetti for the entire section */}
      {showConfetti && <Confetti recycle={false} onConfettiComplete={() => setShowConfetti(false)} />}
       <h2 className='text-heading'>About Me</h2>
       <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
        {/* Grid 1 */}
        <div className='flex items-end grid-default-color grid-2'>
          <img src="/assets/grid-1-code.jpg" alt="" 
          className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
           <div className="z-10">
            <p className="headtext">Hi, I'm Hema</p>
            <p className="subtext">
            A creative problem-solver and passionate coder dedicated to building elegant software solutions for complex challenges.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className=' items-end grid-special-color grid-1'>
        <AnimatePresence mode="wait">
            {gameState === 'initial' && (
              <motion.div
                key="initial"
                variants={animationVariants}
                initial="hidden" animate="visible" exit="exit"
                className='flex flex-col items-center justify-center h-full text-center p-4 text-gray-400'
              >
                <h3 className='text-lg font-semibold text-gray-200'>My Philosophy</h3>
                <p className='mt-2'>I build software like a well-structured temple gopuram...</p>
                <p className='mt-1'>...strong at the base, and intricately detailed at the top.</p>
                <button 
                  onClick={() => setGameState('playing')}
                  className='mt-4 bg-[#0c1639] text-white py-2 px-4 rounded-md hover:bg-gray-700/80 transition-colors'
                >
                  Want to find the secret key?
                </button>
              </motion.div>
            )}

            {gameState === 'playing' && (
              <motion.div
                key="wordle-game"
                variants={animationVariants}
                initial="hidden" animate="visible" exit="exit"
                className="w-full h-full"
              >
                <WordleHint onWin={handleWin} />
              </motion.div>
            )}

            {gameState === 'revealed' && (
              <motion.div
                key="revealed"
                variants={animationVariants}
                initial="hidden" animate="visible" exit="exit"
                className='w-full h-full p-6 flex flex-col items-center justify-center bg-black/20 text-center'
              >
                <img
                  src='https://images.unsplash.com/photo-1593393198335-587053a8a3b0?q=80&w=2592&auto=format&fit=crop'
                  alt='A cup of South Indian filter coffee'
                  className='w-24 h-24 rounded-full object-cover border-4 border-white/50 shadow-lg'
                />
                <h3 className='text-2xl font-bold text-white mt-4'>You found it!</h3>
                <p className='text-gray-300 mt-1'>A strong cup of filter coffee and a great problem to solve. That's what fuels me.</p>
                <button
                  onClick={handleCloseSecret}
                  className='mt-6 bg-[#ba74a6] text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity'
                >
                  Hide Secret
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Grid 3 */}
        <div className=' items-end grid-default-color grid-3'>
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className='flex items-end text-4xl text-gray-500'>
            Building tomorrow's reality
            </p>
            <Card
                style={{ rotate: "75deg", top: "30%", left: "20%" }}
                text="JavaScript"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                text="next.js"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                text="HTML"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-75deg", top: "25%", left: "0%" }}
                text="Tailwind CSS"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "20deg", top: "10%", left: "38%" }}
                text="Python"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "30deg", top: "70%", left: "70%" }}
                image="assets/logos/css-3.svg"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                text="CSS"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                image="assets/logos/git-icon.svg"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-70deg", top: "8%", left: "74%" }}
                image="assets/logos/javascript.svg"
                containerRef={grid2Container}
              />
          </div>
        </div>
        {/* Grid 4 */}
        <div className=' items-end grid-black-color grid-2'>
      <h3 className='text-xl font-bold text-[#9adedb] mb-4'>
        Currently...
      </h3>
      
      {/* This div will hold our list of activities */}
      <div className='flex flex-col gap-y-4'>
        {currentActivities.map((activity) => (
          // We map over the array to create each item dynamically
          <div key={activity.label} className='flex items-center gap-x-4'>
            {/* Icon Circle */}
            <div className='flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-2'>
              {activity.icon}
            </div>
            
            {/* Text Content */}
            <p className='text-[#9a9a9a] text-sm md:text-base'>
              <strong className='font-semibold text-[#ba74a6]'>{activity.label}:</strong> {activity.description}
            </p>
          </div>
        ))}
      
    </div>

        </div>
        {/* Grid 5 */}
        <div className=' items-end grid-unique-color grid-2'>
          <div className='flex flex-col items-center justify-center gap-4 size-full'>
            <p className='text-center headtext'>
            Ready to build something remarkable? Let's connect.
            <br/><br/>
              <CopyEmailButton/>
            </p>
          </div>
        </div>
       </div>
    </section>
  )
}

export default About
