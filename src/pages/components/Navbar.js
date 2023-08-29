import React from 'react'


export const Navbar = () => {
  return (
    <div className='bg-blue/80 h-fit w-full text-xl rounded-xl shadow-md'>
        <ul className='flex justify-between px-10 py-5'>
            <div className='flex gap-10'>
              <li>Logo</li>
            </div>
            <div className='flex gap-10'>
            <li className=''>About</li>
            <li className=''>Login</li>
            <li className=''>SignUp</li>
            <li className=''>ModeButton</li>
            </div>
        </ul>
    </div>
  )
}
