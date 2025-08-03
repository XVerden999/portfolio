'use client'
import Image from 'next/image'
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Connect() {
    useGSAP(() => {
        gsap.fromTo('.connect', {
            scrollTrigger: {
                trigger: '.connect',
                start: 'top 80%',
            },
            y: -30,
            opacity: 0,
        },
        {
            scrollTrigger: {
                trigger: '.connect',
                start: 'top 80%',
            },
            y: 0,
            ease: 'power1.inOut',
            duration: 1,
            opacity: 1,
        });
    }, []);

    return (
        <section id='contactSection' className='mt-32 min-h-screen flex flex-col justify-center items-center font-ubuntu text-3xl sm:text-4xl px-6 sm:px-16 lg:px-32'>
            <h1 className='text-5xl sm:text-8xl font-red-hat-text text-sexy-pink connect mb-12'>Let&apos;s Connect</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-5xl'>
                <div className='m-4 sm:m-8'>
                    <h1 className='m-4 sm:m-8 text-sexy-purple connect text-3xl sm:text-4xl'>Get in Touch</h1>
                    <ul className='text-lg sm:text-2xl space-y-6'>
                        <li className='flex items-center'>
                            <Image className='w-6 sm:w-8 mr-4' src={'/gmail.png'} alt='' height={100} width={100} />
                            <a target="_blank" rel="noopener noreferrer" href="mailto:nicholis.ceo@xverden.com">nicholis.ceo@xverden.com</a>
                        </li>

                        <li className='flex items-center'>
                            <Image className='w-6 sm:w-8 mr-4' src={'/linkedin.png'} alt='' height={100} width={100} />
                            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/nick-grobler-a82859375/'>linkedin.com/in/nick-grobler</a>
                        </li>

                        <li className='flex items-center'>
                            <Image className='w-6 sm:w-8 mr-4' src={'/github.png'} alt='' height={100} width={100} />
                            <a target="_blank" rel="noopener noreferrer" href='https://github.com/XVerden999'>github.com/XVerden999</a>
                        </li>
                    </ul>
                </div>
                <div className='m-4 sm:m-8'>
                    <h1 className='m-4 sm:m-8 text-sexy-purple connect text-3xl sm:text-4xl'>Open to opportunities</h1>
                    <ul className='text-lg sm:text-2xl list-disc space-y-4 px-6 sm:px-0'>
                        <li>Freelance & Contract work</li>
                        <li>Startup & Business Colaberation</li>
                        <li>Mentoring</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Connect
