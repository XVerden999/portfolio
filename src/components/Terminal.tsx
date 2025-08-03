'use client'
import React, { useState } from 'react'
import Eye from './Eye'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/all';

gsap.registerPlugin(useGSAP, SplitText);

function Terminal() {

    useGSAP(()=>{
            const tl = gsap.timeline();
            tl.fromTo("#box", {
                width: '0%',
                height: '0%',
                opacity: 0,
                y: 400,
                duration: 1,
            },
            {
                width: '100%',
                height: '100%',
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power1.inOut',
            })

            gsap.fromTo('#eyes', {
                opacity: 0,
                y:20
            },
            {
                delay: 1.5,
                opacity: 1,
                ease: 'power1.inOut',
                y:0,
            });

          const split = SplitText.create(".myText", { type: "chars" });

          gsap.fromTo(split.chars, { 
            //delay: 3,
            y: 3,      
            opacity: 0, 
          },
          {
            delay: 2,
            duration: 0.5, 
            y: 0,      
            opacity: 1, 
            stagger: 0.05,
            ease: 'power1.inOut'
          });
        }, [])

    const [isOpen, SetIsOpen] = useState(false);
  return (
    <div id='box' className='bg-gray-800/40 w-full h-full border-0 rounded-2xl'>
        <div className='bg-gray-900/40 w-full h-1/10 border-0 rounded-t-2xl flex items-center relative'>

        <div className='flex gap-2 p-4'>
            <div className='bg-red-500 border-0 rounded-full w-4 h-4 hover:bg-red-400 cursor-pointer' onClick={() => SetIsOpen(true)}/>
            <div className='bg-yellow-500 border-0 rounded-full w-4 h-4 hover:bg-yellow-300 cursor-pointer'/>
            <div className='bg-green-500 border-0 rounded-full w-4 h-4 hover:bg-green-300 cursor-pointer'/>
        </div>
            <h1 className='absolute left-1/2 transform -translate-x-1/2 text-white'>
                Terminal
            </h1>
        </div>

        <div id='eyes' className='flex items-center justify-center p-8'>
            <Eye size={8}/>
            <Eye size={8}/>
        </div>

        <div className='pl-4'>
            <p><span className='text-sexy-purple myText'>Nicholis-Grobler</span> <span className='text-sexy-pink myText'>~/portfolio</span> <span className='myText'>(master)</span></p>
            <p className='myText'>{'> echo Hello WRLD'}</p>
            <p className='myText'>{'Hello WRLD'}</p>
            <p className='myText'>{'>_'}</p>
        </div>
        {isOpen && (
        <>
            <div className="fixed inset-0 bg-background/80 bg-opacity-50 z-[999]" />

            <div className='bg-background fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] p-6 rounded-2xl shadow-lg 
            flex flex-col justify-center items-center'>
            <p className='mb-4'>Terminal cannot be closed because a process &apos;Portfolio&apos; is running!</p>
            <button 
                onClick={() => SetIsOpen(false)} 
                className='bg-sexy-purple px-4 py-2 rounded cursor-pointer'
            >
                Back
            </button>
            </div>
        </>
        )}


    </div>
  )
}

export default Terminal