'use client'

import Image from 'next/image'
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Terminal from '@/components/Terminal';

gsap.registerPlugin(useGSAP);

function Hero() {

    useGSAP(() => {
        gsap.from('#name', {
            x: -400,
            ease: 'power1.inOut',
            duration: 1,
        });

        gsap.from('#nameIs', {
            x: -400,
            ease: 'power1.inOut',
            duration: 2,
        });

        gsap.fromTo('.info', {
            y: 20,
            ease: 'power1.inOut',
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            delay: 1,
            ease: 'power1.inOut',
        });

        gsap.fromTo('#infoImg', {
            y: 20,
            ease: 'power1.inOut',
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            delay: 1.5,
            ease: 'power1.inOut',
        });
    }, [])

  return (
    <section className='h-screen flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2 font-ubuntu p-8 md:p-16 flex flex-col justify-center gap-8 text-4xl'>
        <p id='nameIs'>Hi! my name is,</p>
        <h1
        id='name'
        className='w-max font-red-hat-text font-bold bg-gradient-to-r from-sexy-purple to-sexy-pink bg-clip-text text-transparent
                    text-7xl sm:text-8xl md:text-9xl
                    break-words'
        >
            Nicholis
        </h1>

        <p className='info text-2xl sm:text-3xl md:text-4xl break-words'>I&apos;m a Full Stack Developer, Entrepreneur and Student.</p>
        <p className='info text-2xl sm:text-3xl md:text-4xl break-words'>
          I love all things{' '}
          <span className='bg-gradient-to-r from-sexy-purple to-sexy-pink bg-clip-text text-transparent'>
            Tech, Business and Managment
          </span>{' '}
          related.
        </p>
      </div>

      <div className='hidden md:flex w-1/2 p-24'>
        <Terminal />
      </div>
    </section>
  )
}

export default Hero
