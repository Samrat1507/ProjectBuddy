import React from 'react'
import Switcher from './Switcher'


export const Navbar = () => {
  return (
    <div className='bg-blue/80 h-fit w-full text-xl rounded-xl shadow-md '>
        <ul className='flex justify-between px-10 py-5'>
            <div className='flex gap-10'>
              <img
                src="logo.svg"
                alt="logo"
                className="h-12"
              />
            </div>
            <div className='flex gap-10 items-center'>
            <li className=''>About</li>
            <li className=''>Login</li>
            <li className=''>SignUp</li>
            {/* <li className=''>ModeButton</li> */}
            <li><Switcher/></li>
            </div>
        </ul>
    </div>
  )
}
