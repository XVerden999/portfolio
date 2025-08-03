import React from 'react'

function Footer() {
  return (
    <footer className='flex justify-center items-center py-2 text-[#e34fa3]'>
        <h1 className='ml-4 md:ml-16 text-2xl font-red-hat-text'>{'<Dev/>'}</h1>
        <p className='ml-auto mr-4 md:mr-16 text-[8px] md:text-xs font-ubuntu'>© {new Date().getFullYear()} Nicholis Grobler & XVerden.com. All rights reserved.</p>
    </footer>
  )
}

export default Footer