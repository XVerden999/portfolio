'use client'

import React, { useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/all';
gsap.registerPlugin(useGSAP, SplitText);

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    const split = SplitText.create(".header-group", { type: "chars" });
    gsap.fromTo(split.chars, {
      y: 3,
      opacity: 0,
    }, {
      duration: 0.5,
      y: 0,
      opacity: 1,
      stagger: 0.05,
      ease: 'power1.inOut'
    });

    gsap.from('#logo', {
      x: -100,
      ease: 'power1.inOut',
      duration: 1,
    });

    gsap.from('#li', {
      y: -50,
      stagger: {
        amount: 0.5,
        ease: 'power1.inOut',
        from: 'center'
      }
    });
  }, [])

  return (
    <header className="relative flex items-center h-16 px-4">
      <h1
        id='logo'
        className="font-red-hat-text text-4xl font-bold bg-gradient-to-r from-sexy-purple to-sexy-pink bg-clip-text text-transparent ml-4 z-20"
      >
        &lt;Dev/&gt;
      </h1>

      <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <ul className="flex space-x-4 text-[#e34fa3] font-ubuntu header-group text-lg">
          <p>{'/*'}</p>
          <li id="li" className='hover:text-sexy-pink cursor-pointer'><a href="#aboutSection">About</a></li>
          <li id="li" className='hover:text-sexy-pink cursor-pointer'><a href="#skillsSection">Skills</a></li>
          <li id="li" className='hover:text-sexy-pink cursor-pointer'><a href="#storySection">My Story</a></li>
          <li id="li" className='hover:text-sexy-pink cursor-pointer'><a href="#contactSection">Contact</a></li>
          <p>{'*/'}</p>
        </ul>
      </nav>

      <div className="md:hidden ml-auto mr-4 z-20">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="focus:outline-none"
        >
          <div className="w-6 h-0.5 bg-[#e34fa3] mb-1"></div>
          <div className="w-6 h-0.5 bg-[#e34fa3] mb-1"></div>
          <div className="w-6 h-0.5 bg-[#e34fa3]"></div>
        </button>
      </div>

      {menuOpen && (
        <nav className="bg-background absolute top-16 left-0 right-0 px-6 py-4 flex flex-col space-y-4 text-[#e34fa3] font-ubuntu text-lg z-10">
          <p>{'/*'}</p>
          <a href="#aboutSection" onClick={() => setMenuOpen(false)} className="hover:text-sexy-pink cursor-pointer">About</a>
          <a href="#skillsSection" onClick={() => setMenuOpen(false)} className="hover:text-sexy-pink cursor-pointer">Skills</a>
          <a href="#storySection" onClick={() => setMenuOpen(false)} className="hover:text-sexy-pink cursor-pointer">My Story</a>
          <a href="#contactSection" onClick={() => setMenuOpen(false)} className="hover:text-sexy-pink cursor-pointer">Contact</a>
          <p>{'*/'}</p>
        </nav>
      )}
    </header>
  );
}

export default Header;
