import React from 'react'
import logoImage from '../assets/logo.png'
import { LogIn } from 'lucide-react';
import { PhoneCall } from 'lucide-react';

export default function Navbar() {
  return (
    <div className='bg-white shadow-sm fixed w-full top-7 '>
      <div className='flex  items-center w-11/12 mx-auto justify-between p-2.5'>


        <div>
          <img className='h-16' src={logoImage} alt="logo-image-ho" />
        </div>


        <div  className='flex  space-x-8 items-center '>
          <p className='text-blue-600 font-medium cursor-pointer' > Home </p>
          <p className='text-blue-600 font-medium cursor-pointer' > Features </p>
          <p className='text-blue-600 font-medium cursor-pointer' > Testimonial  </p>
          <p className='text-blue-600 font-medium cursor-pointer' > Pricing </p>
          <p className='text-blue-600 font-medium cursor-pointer' > Contact </p>
          <button className='text-orange-500 bg-orange-50 px-4 py-2   text-sm  rounded-r-full rounded-l-full font-medium cursor-pointer'> Try Demo  </button>
        </div>


        <div className='flex space-x-2'>
          <button className=' flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-500 px-3 py-2   text-sm rounded-lg font-medium cursor-pointer'>
          <LogIn />
            Login
            </button> 
          <button className=' flex items-center gap-2 text-purple-600 bg-white   hover:text-black px-4  border border-gray-300  rounded-lg font-medium cursor-pointer'>
          <PhoneCall />
            Call Now
            </button>
        </div>


      </div>
    </div>
  )
}
      