import React from 'react'

function Header() {
  return (
    <header className="relative flex items-center h-16 px-4">
        <h1 className="font-red-hat-text ml-16 text-4xl font-bold bg-gradient-to-r from-sexy-purple to-sexy-pink bg-clip-text text-transparent">
            &lt;Dev/&gt;
        </h1>


      <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4 text-[#DE9AC1] font-ubuntu">
        <li className='hover:text-sexy-pink hover:cursor-pointer'>About</li>
        <li className='hover:text-sexy-pink hover:cursor-pointer'>Skills</li>
        <li className='hover:text-sexy-pink hover:cursor-pointer'>Projects</li>
        <li className='hover:text-sexy-pink hover:cursor-pointer'>Contact</li>
      </ul>
    </header>
  );
}

export default Header;
