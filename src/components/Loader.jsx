import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  const {progress} = useProgress();
  return (
    <Html center className='text-xl font-bold text-center'>{progress}% Loaded</Html>
  )
}

export default Loader