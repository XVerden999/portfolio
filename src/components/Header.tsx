'use client'

import React from 'react'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function Header() {

  useGSAP(()=>{
          gsap.from('#logo', {
              x: -100,
              ease: 'power1.inOut',
              duration: 0.5,
          });
          gsap.from('#li1', {
              y: -50,
              ease: 'power1.inOut',
              duration: 1,
          });
          gsap.from('#li2', {
              y: -50,
              ease: 'power1.inOut',
              duration: 1.5,
          });
          gsap.from('#li3', {
              y: -50,
              ease: 'power1.inOut',
              duration: 2,
          });
          gsap.from('#li4', {
              y: -50,
              ease: 'power1.inOut',
              duration: 2.5,
          });
      }, [])

  return (
    <header className="relative flex items-center h-16 px-4">
        <h1 id='logo' className="font-red-hat-text ml-16 text-4xl font-bold bg-gradient-to-r from-sexy-purple to-sexy-pink bg-clip-text text-transparent">
            &lt;Dev/&gt;
        </h1>


      <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4 text-[#DE9AC1] font-ubuntu">
        <li id='li1' className='hover:text-sexy-pink hover:cursor-pointer'>About</li>
        <li id='li2' className='hover:text-sexy-pink hover:cursor-pointer'>Skills</li>
        <li id='li3' className='hover:text-sexy-pink hover:cursor-pointer'>Projects</li>
        <li id='li4' className='hover:text-sexy-pink hover:cursor-pointer'>Contact</li>
      </ul>
    </header>
  );
}

export default Header;
