import React from 'react'
import {paypal, visa, mastercard} from "../assets/icons"

function Copyright() {
  const icons =[paypal, visa, mastercard];
  return (
    <div className='border-t border-gray-400 w-full text-[#D69232] text-sm justify-between flex sm:flex-row md:flex-row flex-col gap-2 font-poppins font-thin'>
       <div className='mt-4 flex flex-row items-center gap-4'>
          <span>Payment Options:</span> 
          { icons.map((icon, index) => (
            <img key={index} src={icon} className='w-7 h-7'/>
          ))}
          
          
        </div>
       <span className='flex flex-wrap break-words mt-4'> © Copyright {new Date().getFullYear()} ClausemaxPlatform Designed by ClausemaxPlatform</span>
    </div>
  )
}

export default Copyright