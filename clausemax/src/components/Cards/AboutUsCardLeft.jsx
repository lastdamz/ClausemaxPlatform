import React from 'react'
import {  FaTrafficLight } from 'react-icons/fa6'

function AboutUsCardLeft({icon,title, description}) {
  return (
    <div className='relative pl-3 pt-3  bg-[#d6923282] rounded-xl md:w-[320px] sm:w-[320px] ss:w-[320px] w-[290px] md:h-[250px] h-[300px]'> 
        <div className='bg-[#000000] rounded-xl p-4 md:w-[325px] sm:w-[325px] ss:w-[325px] w-[305px] flex flex-col gap-4 font-poppins md:h-[250px] h-[300px]'>
             <div className='flex flex-row gap-4 text-white font-semibold text-xl text-left'>
                 <img src={icon} className='w-12 h-12'/>
                 <span>{title}</span>
             </div>
             <p className='ml-2 text-sm text-white text-left'>{description} </p>
        </div>

   </div>
  )
}

export default AboutUsCardLeft