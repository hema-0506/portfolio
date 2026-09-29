import React, { useState } from 'react'
import {motion } from 'motion/react'

function Navigation({ onNavigate }){
  return(
    <ul className='nav-ul'>
      <li className='nav-li'>
        <a href="#home" className='nav-link' onClick={onNavigate}>Home</a>
      </li>
      <li className='nav-li'>
        <a href="#about" className='nav-link' onClick={onNavigate}>About</a>
      </li>
      <li className='nav-li'>
        <a href="#projects" className='nav-link' onClick={onNavigate}>Projects</a>
      </li>
      <li className='nav-li'>
        <a href="#education" className='nav-link' onClick={onNavigate}>Education</a>
      </li>
      <li className='nav-li'>
        <a href="#contact" className='nav-link' onClick={onNavigate}>Contact</a>
      </li>
    </ul>
  )
}

const Navbar = () => {
  const[isOpen, setIsOpen] = useState(false);
  return (
    <div className='fixed backdrop-blur-lg z-20 inset-x-0 w-full bg-primary/40'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-2 sm:py-0'>
          <a href="/" className='text-xl font-bold transition-colors text-neutral-600 hover:text-blue-100'>Hema</a>
          <button onClick={() => setIsOpen(!isOpen)} className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'>
            <img src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} className="w-6 h-6" alt="toggle" />
          </button>
          <nav className='hidden sm:flex'>
            <Navigation/>
          </nav>
        </div>
      </div>
      {isOpen &&(
        <motion.div className='block overflow-hidden text-center transition-all duration-300 ease-in-out sm:hidden'
        initial={{opacity: 0, x:-10}}
        animate={{opacity:1, x:0}}
        style={{maxHeight:"100vh"}}
        transition={{duration:1}}
        >
        <nav className='pb-5'>
          <Navigation onNavigate={() => setIsOpen(false)}/>
        </nav>
      </motion.div>)}
    </div>
  )
}

export default Navbar