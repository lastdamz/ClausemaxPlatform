import React from 'react'
import { ServiceCard } from './Cards';
import { services } from '../constants/data';

function Services() {
   // Get the first three services
 
  return (
    <div 
    id = "services"
    className='w-full flex flex-col items-center gap-8 my-10 '>
      <span className='text-3xl justify-center text-white '>Our Services</span>
      <p className='w-5/6  break-words  text-center flex flex-wrap justify-center text-base text-white leading-9'>At Clausemax Platform, we pride ourselves on delivering top-notch solutions tailored to meet your unique needs.  Our team of experts is dedicated to providing exceptional service across a variety of sectors.</p>

      <div className='flex md:space-x-8 md:gap-8 sm:gap-8 gap-4 w-full items-center p-4 flex-col md:flex-row md:mx-auto justify-center'>
      <div className='grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-full items-center p-4  md:flex-row md:mx-auto'>
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
    </div>
    </div>
    
  )
}

export default Services