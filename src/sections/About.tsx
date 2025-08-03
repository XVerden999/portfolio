'use client'
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function About() {
  useGSAP(() => {
    gsap.from('#title', {
      scrollTrigger: {
        trigger: '#title',
        start: 'top 80%', 
      },
      y: -20,
      opacity: 0,
      duration: 1.5,
    });

    gsap.to('.paragraph', {
      scrollTrigger: {
        trigger: '.paragraph',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      ease: 'power1.inOut',
      duration: 1,
      stagger: 0.5, 
    })
  }, [])

  return (
    <section
      id='aboutSection'
      className='min-h-screen flex flex-col justify-center items-center font-ubuntu text-center gap-4 px-6 sm:px-16 md:px-32 lg:px-64 text-xl sm:text-2xl'
    >
      <h1
        id='title'
        className='font-red-hat-text text-5xl sm:text-6xl md:text-7xl bg-gradient-to-r from-sexy-purple to-sexy-pink bg-clip-text text-transparent'
      >
        {'<AboutMe/>'}
      </h1>
      <p className='paragraph opacity-0 max-w-4xl'>
        My name is Nicholis Grobler, I&apos;m a{' '}
        <span className='text-sexy-purple'>Full-Stack Developer</span>,{' '}
        <span className='text-sexy-pink'>Entrepreneur and Student</span>.
      </p>
      <p className='paragraph opacity-0 max-w-4xl'>
        I have attended one internship thus far overseas, where i learn&apos;t new technologies and built{' '}
        <span className='bg-gradient-to-r from-sexy-purple to-sexy-pink bg-clip-text text-transparent'>industry standard</span>{' '}
        applications, databases, API&apos;s and web interfaces.
      </p>
      <p className='paragraph opacity-0 max-w-4xl'>
        I&apos;m very pasionate about building scalable digital solutions and learning new technologies, I specialize in{' '}
        <span className='text-sexy-purple'>Web Aplications</span>,{' '}
        <span className='text-sexy-pink'>Mobile Apps</span> and{' '}
        <span className='text-sexy-purple'>API backends</span>.
      </p>
    </section>
  )
}

export default About
