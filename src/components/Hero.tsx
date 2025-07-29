'use client'

import Image from 'next/image'
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Hero() {

    useGSAP(()=>{
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

        gsap.from('#info', {
            y: 400,
            ease: 'power1.inOut',
            duration: 1,
        });

        gsap.from('#infoImg', {
            y: 800,
            ease: 'power1.inOut',
            duration: 2,
        });

        gsap.fromTo('#pImg', {
            x: 800,
            borderRadius: '50%',
            rotate: 180,
        },
        {
            x: 0,
            ease: 'power1.inOut',
            duration: 2,
            borderRadius: '100%',
            rotate:0
        });
    }, [])

  return (
    <div className='h-screen flex'>
        <div className='w-1/2 font-ubuntu p-16 flex flex-col justify-center gap-8 text-4xl'>
            <p id='nameIs'>Hi! my name is,</p>
            <h1 id='name' className='w-max font-red-hat-text text-9xl font-bold bg-gradient-to-r from-sexy-purple to-sexy-pink bg-clip-text text-transparent'>
                Nicholis
            </h1>
            <p id='info'>I&apos;m a Full Stack Developer, Entrepreneur and Student.</p>
            <p id='info'>I love all things <span className='bg-gradient-to-r from-sexy-purple to-sexy-pink bg-clip-text text-transparent'>Tech, Business and Managment</span> related.</p>
        
            <ul id='infoImg' className='flex text-xl gap-5 ml-2'>
                <li><Image className='w-8 cursor-pointer' src={'/linkedin.png'} alt='' height={200} width={200}></Image></li>
                <li><Image className='w-8 cursor-pointer' src={'/github.png'} alt='' height={200} width={200}></Image></li>
                <li><Image className='w-8 cursor-pointer' src={'/gmail.png'} alt='' height={200} width={200}></Image></li>
            </ul>
        </div>

        <div className='w-1/2 p-32'>
            <Image id='pImg' className='border-0 rounded-full' src={'/keyboard.jpeg'} alt='' width={800} height={800}/>
        </div>
    </div>
  )
}

export default Hero