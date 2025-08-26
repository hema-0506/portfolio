import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl' >
      <Navbar/>
      <section id='home'><Hero/></section>
      <section id='about'><About/></section>
      <section id='projects'><Projects/></section>      
      <section id='education'><Education/></section>
      <section id='contact'><Contact/></section>
      <section id='about'><Footer/></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section>
      
      
      
      
      {/*
      
      <Skills/>
      <Experience/>
      */}
    </div>
  )
}

export default App

