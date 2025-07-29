import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='h-screen flex'>
        <div className='w-1/2 font-ubuntu p-16 flex flex-col justify-center gap-8 text-4xl'>
            <p>Hi! my name is,</p>
            <h1 className='w-max font-red-hat-text text-9xl font-bold bg-gradient-to-r from-sexy-purple to-sexy-pink bg-clip-text text-transparent'>
                Nicholis
            </h1>
            <p>I&apos;m a Full Stack Developer, Entrepreneur and Student.</p>
            <p>I love all things <span className='bg-gradient-to-r from-sexy-purple to-sexy-pink bg-clip-text text-transparent'>Tech, Business and Managment</span> related.</p>
        
            <ul className='flex text-xl gap-5 ml-2'>
                <li><Image className='w-8 cursor-pointer' src={'/linkedin.png'} alt='' height={200} width={200}></Image></li>
                <li><Image className='w-8 cursor-pointer' src={'/github.png'} alt='' height={200} width={200}></Image></li>
                <li><Image className='w-8 cursor-pointer' src={'/gmail.png'} alt='' height={200} width={200}></Image></li>
            </ul>
        </div>

        <div className='w-1/2'>
            <Image src={'/keyboard.jpeg'} alt='' width={800} height={800}/>
        </div>
    </div>
  )
}

export default Hero