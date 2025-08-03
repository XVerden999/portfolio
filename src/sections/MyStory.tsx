'use client'
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Story() {
  useGSAP(() => {
    gsap.from('#titleStory1', {
      scrollTrigger: {
        trigger: '#titleStory1',
        start: 'top 80%',
      },
      y: -20,
      opacity: 0,
      duration: 1.5,
    });

    gsap.to('.paragraph1', {
      scrollTrigger: {
        trigger: '.paragraph1',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      ease: 'power1.inOut',
      duration: 1,
      stagger: 2,
    });
  }, []);

  return (
    <section className='min-h-screen mt-16 flex flex-col justify-center items-center font-ubuntu text-2xl text-center mx-6 sm:mx-16 lg:mx-64 gap-4'>
      <h1 id='titleStory1' className='font-red-hat-text text-5xl sm:text-7xl bg-gradient-to-r from-sexy-purple to-sexy-pink bg-clip-text text-transparent h-20'>{'<MyStory/>'}</h1>
      <p className='paragraph1 opacity-0 max-w-3xl'>
        I started programming at the age of 12 when my home computer couldn&apos;t run the games I wanted to play. Naturally, as a young and curious child, I came up with a solution:
      </p>
      <p className='paragraph1 opacity-0 max-w-3xl'>
        "<span className='text-sexy-pink'>Why don&apos;t i just make my own games</span>"
      </p>
      <p className='paragraph1 opacity-0 max-w-3xl'>
        and that&apos;s how i started programming with C# in the Unity game engine at age 12.
      </p>

      <p className='paragraph1 opacity-0 max-w-3xl'>
        At age 16, I transitioned from creating multiple 2D and 3D games in Unity to developing several 2D game engines using both C++ and C.
      </p>
      <p className='paragraph1 opacity-0 max-w-3xl'>
        At age 17, I started experimenting with the Rust programming language and created several small Rust projects.
      </p>
      <p className='paragraph1 opacity-0 max-w-3xl'>
        At age 18, right after graduating from high school, I attended an overseas internship. That&apos;s where my journey in web programming, API development, and database design began.
      </p>
      <p className='paragraph1 opacity-0 max-w-3xl'>
        I&apos;m currently attending Belgium Campus iTversity, a prestigious IT institution.
      </p>

      <p className='paragraph1 opacity-0 max-w-3xl'>
        Over the past seven years of my programming journey, I&apos;ve learned 12 programming languages and completed full projects in each of them.
      </p>
      <p className='paragraph1 opacity-0 max-w-3xl'>
        I have no intention of stopping; I&apos;m constantly learning and working to improve my skills.
      </p>
    </section>
  )
}

export default Story
