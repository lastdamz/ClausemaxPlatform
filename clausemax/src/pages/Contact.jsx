import React from 'react'
import { NavBar } from '../components'
import { FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function Contact() {
  return (
    <div className='relative h-[30rem] overflow-hidden justify-center  md:mx-auto items-center w-full p-4 bg-gradient-to-t from-[hsla(21,37%,7%,0)] to-[rgba(36,29,12,0.7)]'>
    <div className='absolute inset-0 flex flex-col'>
      <NavBar tab={'Contact'} />
      <div className='flex justify-center items-center absolute inset-0 flex-col w-full max-w-[48rem] p-6 gap-6 mx-auto'>
        <h1 className='text-4xl sm:text-5xl md:text-7xl text-center font-semibold text-white'>Contact Us </h1>
          <div className='font-medium flex items-center text-xl space-x-1'> 
              <Link to='/' className='flex items-center text-white hover:underline space-x-1'> 
                <span>Home</span> 
                <FaAngleRight/>
              </Link>
              <span className='text-buttonOrange hover:underline'>Contact</span>
          </div>
            <div className='text-center text-white font-poppins max-w-[50rem] font-thin'>We’d love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Please reach out to us using the form below or through the contact information provided.</div>
            
      </div>
    </div>
  </div>
  )
}

export default Contact