import React from 'react'
import { logoOrange } from '../assets';
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

function Footer() {
  const tabs = [
    { name: 'Services', path: '/service' }, 
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];
  return (
    <div className='w-full bg-[#1B1B1B] flex sm:flex-row md:flex-row flex-col md:justify-between justify-center items-center py-4  gap-4  font-poppins'>
      <div className='flex items-center flex-col gap-4  md:w-1/3 '>
        <img src={logoOrange} className='w-2/3  h-4/5 object-cover'/>
        <div className="flex justify-between  items-center md:w-full md:px-16 gap-8 px-4">
              {tabs.map(({ name, path }) => (
                <Link
                  to={path}
                  key={name}
                  className="relative cursor-pointer hover:underline text-white hover:text-buttonOrange hover:scale-105 transition-all"
                 
                >
                  {name}
                </Link>
              ))}
            </div>
      </div>


      <div className='rounded-3xl flex flex-col text-white p-4 gap-6 font-poppins md:mt-0 mt-8'>
        <div>
          <span className=' font-bold text-base '>Address</span>
         <p className='max-w-[320px] mt-2 font-thin'> Exploration House, No 145 RG Mugabe Rd, Harare  </p>
        </div>
       
        <div className='mt-2'>
            <p className='break-all font-thin'> info@clausemaxplatform.co.zw</p>
        </div>

        <div className='mt-2 font-thin'>
            <p> +263 774 086 344</p>
        </div>


        <div className='mt-4'>
            <span className='font-semibold text-base'>Follow Us</span>
            <div className='flex gap-6 mt-6'>
                <FaInstagram size={28} className='hover:scale-125 transition-all'/>
                <FaFacebook size={28} className='hover:scale-125 transition-all'/>
                <FaSquareXTwitter size={28} className='hover:scale-125 transition-all'/>
            </div>
            
        </div>


    </div>
    </div>
  )
}

export default Footer