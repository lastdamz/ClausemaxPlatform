import React from 'react'
import { FaInstagram, FaFacebook, } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

function ContactCard() {
  return (
    <div className='bg-contact rounded-3xl flex flex-col text-white p-8 gap-5 font-poppins  '>
        <span className=' font-bold text-3xl '>Contact Us</span>
        <p className='w-full font-thin'> Contact us for inquiries, support, or to learn more about out products and services. We're here to assist you </p>

        <div className='mt-6 flex flex-col  gap-2'>
            <span className=' font-semibold '>Email Address</span>
            <p className='break-all font-thin'> info@clausemaxplatform.co.zw</p>
        </div>

        <div className='mt-6 flex flex-col gap-2'>
            <span className=' font-semibold'>Phone Number</span>
            <p className='font-thin'> +263 774 086 344</p>
        </div>

        <div className=' px-4 h-[1px] w-full bg-white mt-6'></div>

    
            <span className='font-semibold text-base'>Stay Connected, Follow US.</span>
            <div className='flex gap-6 mt-2'>
                <FaInstagram size={24} className='hover:scale-125 transition-all'/>
                <FaFacebook size={24} className='hover:scale-125 transition-all'/>
                <FaSquareXTwitter size={24} className='hover:scale-125 transition-all'/>
            </div>
            
     


    </div>
  )
}

export default ContactCard