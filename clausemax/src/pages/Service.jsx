import React from 'react'
import { NavBar } from '../components'
import { ServiceCard } from '../components/Cards'
import {FAQ} from "../components"
import { FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import {services} from "../constants/data"
import{faqData} from "../constants/data"

function Service() {
  return (
    <div className='flex flex-col gap-12'>
    <div className='relative h-[30rem] overflow-hidden justify-center  md:mx-auto items-center w-full p-4 bg-gradient-to-t from-[hsla(21,37%,7%,0)] to-[rgba(36,29,12,0.7)]'>
      <div className='absolute inset-0 flex flex-col'>
        <NavBar tab={'Services'} />
        <div className='flex justify-center items-center absolute inset-0 flex-col w-full max-w-[70rem] p-6 gap-6 mx-auto'>
          <h1 className='text-4xl sm:text-5xl md:text-7xl text-center font-semibold text-white'>Services</h1>
            <div className='font-medium flex items-center text-xl space-x-1'> 
                <Link to='/' className='flex items-center text-white hover:underline space-x-1'> 
                  <span>Home</span> 
                  <FaAngleRight/>
                </Link>
                <span className='text-buttonOrange hover:underline'>Services</span>
            </div>
              <p className='text-center text-white'>At Clausemax Platform, we take pride in offering exceptional solutions tailored to your unique needs. Our team of experts is committed to delivering outstanding service across a diverse range of sectors, ensuring that we meet and exceed your expectations every step of the way. </p>
              
        </div>
      </div>
    </div>
      

    <div className='flex flex-col p-8 gap-12'>

    <div className='grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-full items-center p-4  md:flex-row md:mx-auto justify-center'>
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              state={service.state}
            />
          ))}
        
        </div>
        <FAQ data={faqData}/>

    </div>
      
    </div>
  )
}

export default Service