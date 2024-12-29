import React from 'react'
import {  FaTrafficLight } from 'react-icons/fa6'

function AboutUsCardRight({icon,title, description}) {
  return (
        <div className=' bg-[#000000] rounded-xl p-4 md:w-[325px] sm:w-[325px] ss:w-[325px] w-[305px] md:h-[275px] h-[300px]  flex flex-col gap-4  font-poppins shadow-xl shadow-[#d6923282] '>
             <div className='flex flex-row gap-4 text-white font-semibold text-xl'>
             <img src={icon} className='w-12 h-12'/>
                    <span>{title}</span>
             </div>
             <p className='ml-2 text-sm text-white'>{description} </p>
        </div>

  )
}

export default AboutUsCardRight