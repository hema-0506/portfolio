import {motion, useScroll, useSpring, useTransform } from 'motion/react'
import React from 'react'

const ParallaxBackground = () => {
   const {scrollYProgress} = useScroll();
   const x = useSpring(scrollYProgress, {damping:80})
   const bg1Y = useTransform(x, [0,0.5], ["0%", "70%"])
   const planetY = useTransform(x, [0,0.5], ["0%", "-20%"])
   const mount1Y = useTransform(x, [0,0.5], ["0%", "30%"])
  return (
    <section className='absolute inset-0 bg-black/40'>
      <div className='relative h-screen overflow-y-hidden'>
        <motion.div className='absolute inset-0 w-full h-screen -z-50'
        style={{
          backgroundImage:"url(/assets/bg-1.png)",
          backgroundPosition:"bottom",
          backgroundSize:"cover",
          y:bg1Y
        }}/>
        <motion.div className='absolute  inset-0 w-full h-screen -z-40'
        style={{
          backgroundImage:"url(/assets/mountain-1.png)",
          backgroundPosition:"bottom",
          backgroundSize:"cover",
          y:mount1Y
        }}/>
        <motion.div className='absolute inset-0 w-full h-screen -z-30'
        style={{
          backgroundImage:"url(/assets/planets.png)",
          backgroundPosition:"bottom",
          backgroundSize:"cover",
          y:planetY
        }}/>
        <motion.div className='absolute inset-0 w-full h-screen -z-20'
        style={{
          backgroundImage:"url()",
          backgroundPosition:"bottom",
          backgroundSize:"cover"
        }}/>
        <motion.div />
      </div>
    </section>
  )
}

export default ParallaxBackground