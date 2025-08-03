'use client'
import Image from 'next/image'
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

function Tech() {
  useGSAP(() => {
    const split = SplitText.create(".header-group1", { type: "chars" });
    gsap.fromTo(
      split.chars,
      {
        y: 3,
        opacity: 0,
        scrollTrigger: {
          trigger: '.devStack',
          start: 'top 80%',
        },
      },
      {
        duration: 0.5,
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.devStack',
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.devStack',
      {
        y: 30,
        opacity: 0,
        scrollTrigger: {
          trigger: '.devStack',
          start: 'top 80%',
        },
      },
      {
        opacity: 1,
        y: 0,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.devStack',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section id='skillsSection' className='mb-32 min-h-screen flex flex-col justify-center px-6 sm:px-16 lg:px-32'>
      <div className='flex flex-col lg:flex-row gap-16'>
        <div className='mx-auto flex flex-col gap-16 w-full lg:w-1/3'>
          <div className='flex flex-col items-center text-2xl font-ubuntu'>
            <h1 className='text-4xl font-red-hat-text mb-4 header-group1'>FrontEnd<span className='text-sexy-purple'>{'()'}</span></h1>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 w-full'>
              <div className='flex flex-col justify-center items-center devStack'>
                <Image src='https://www.svgrepo.com/show/452228/html-5.svg' alt='' height={80} width={80} />
                <p>HTML</p>
              </div>
              <div className='flex flex-col justify-center items-center devStack'>
                <Image src='https://www.svgrepo.com/show/452185/css-3.svg' alt='' height={80} width={80} />
                <p>CSS</p>
              </div>
              <div className='flex flex-col justify-center items-center devStack'>
                <Image src='https://www.svgrepo.com/show/349419/javascript.svg' alt='' height={80} width={80} />
                <p>Javascript</p>
              </div>
              <div className='flex flex-col justify-center items-center devStack'>
                <Image src='https://www.svgrepo.com/show/349540/typescript.svg' alt='' height={80} width={80} />
                <p>Typescript</p>
              </div>
              <div className='flex flex-col justify-center items-center devStack'>
                <Image src='https://www.svgrepo.com/show/452092/react.svg' alt='' height={80} width={80} />
                <p>React</p>
              </div>
              <div className='flex flex-col justify-center items-center devStack'>
                <Image src='/next.png' alt='' height={80} width={80} />
                <p>Next.js</p>
              </div>
              <div className='flex flex-col justify-center items-center devStack'>
                <Image src='https://www.svgrepo.com/show/374118/tailwind.svg' alt='' height={80} width={80} />
                <p>Tailwind CSS</p>
              </div>
              <div className='flex flex-col justify-center items-center devStack'>
                <Image src='/gsap.png' alt='' height={80} width={80} />
                <p>GSAP</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center text-2xl font-ubuntu'>
            <h1 className='font-red-hat-text text-4xl mb-4 header-group1'>BackEnd<span className='text-sexy-pink'>{'()'}</span></h1>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 w-full'>
              <div className='flex flex-col justify-center items-center devStack'>
                <Image src='https://www.svgrepo.com/show/452075/node-js.svg' alt='' height={80} width={80} />
                <p>Node.js</p>
              </div>
              <div className='flex flex-col justify-center items-center devStack'>
                <Image src='https://www.svgrepo.com/show/452091/python.svg' alt='' height={80} width={80} />
                <p>Python</p>
              </div>
              <div className='flex flex-col justify-center items-center devStack'>
                <Image src='/express.png' alt='' height={80} width={80} />
                <p>Express.js</p>
              </div>
              <div className='flex flex-col justify-center items-center devStack'>
                <Image src='https://www.svgrepo.com/show/355133/mysql.svg' alt='' height={80} width={80} />
                <p>MySQL</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-auto flex flex-col justify-center items-center w-full lg:w-1/3'>
          <h1 className='text-4xl font-red-hat-text mb-4 text-[#e34fa3] header-group1 text-center'>
            {'/* My language stack over 7 years */'}
          </h1>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 w-full'>
            <div className='flex flex-col justify-center items-center devStack'>
              <Image src='/C.png' alt='' height={80} width={80} />
              <p>C</p>
            </div>
            <div className='flex flex-col justify-center items-center devStack'>
              <Image src='/C++.png' alt='' height={80} width={80} />
              <p>C++</p>
            </div>
            <div className='flex flex-col justify-center items-center devStack'>
              <Image src='/CSharp.png' alt='' height={80} width={80} />
              <p>C#</p>
            </div>
            <div className='flex flex-col justify-center items-center devStack'>
              <Image src='https://www.svgrepo.com/show/452234/java.svg' alt='' height={80} width={80} />
              <p>Java</p>
            </div>
            <div className='flex flex-col justify-center items-center devStack'>
              <Image src='https://www.svgrepo.com/show/354020/lua.svg' alt='' height={80} width={80} />
              <p>Lua</p>
            </div>
            <div className='flex flex-col justify-center items-center devStack'>
              <Image src='https://www.svgrepo.com/show/452091/python.svg' alt='' height={80} width={80} />
              <p>Python</p>
            </div>
            <div className='flex flex-col justify-center items-center devStack'>
              <Image src='https://www.svgrepo.com/show/373548/delphi.svg' alt='' height={80} width={80} />
              <p>Delphi</p>
            </div>
            <div className='flex flex-col justify-center items-center devStack'>
              <Image src='https://www.svgrepo.com/show/367142/pasc.svg' alt='' height={80} width={80} />
              <p>Pascal</p>
            </div>
            <div className='flex flex-col justify-center items-center devStack'>
              <Image src='https://www.svgrepo.com/show/374056/rust.svg' alt='' height={80} width={80} />
              <p>Rust</p>
            </div>
            <div className='flex flex-col justify-center items-center devStack'>
              <Image src='https://www.svgrepo.com/show/452214/go.svg' alt='' height={80} width={80} />
              <p>Go</p>
            </div>
            <div className='flex flex-col justify-center items-center devStack'>
              <Image src='https://www.svgrepo.com/show/349419/javascript.svg' alt='' height={80} width={80} />
              <p>Javascript</p>
            </div>
            <div className='flex flex-col justify-center items-center devStack'>
              <Image src='https://www.svgrepo.com/show/349540/typescript.svg' alt='' height={80} width={80} />
              <p>Typescript</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tech
