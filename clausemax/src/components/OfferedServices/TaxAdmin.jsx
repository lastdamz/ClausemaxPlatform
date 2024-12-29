import React from 'react'
import { NavBar} from '../../components'
import { Link } from 'react-router-dom'
import {tax} from "../../assets"
import {SiTicktick } from "react-icons/si"
import  {iVendblue,excel,matrix,palladium,sage,xero,quickBooks} from "../../assets/integrations"
import {taxListData} from "../../constants/data"

function TaxAdmin() {
  const icons =[iVendblue,excel,matrix,palladium,sage,xero,quickBooks];
  return (
    <div className='flex flex-col'>
    <div className='relative h-[16rem] sm:h-[20rem]  md:h-[25rem] overflow-hidden justify-center max-w-[88rem] md:mx-auto items-center w-full p-4 bg-gradient-to-t from-[hsla(21,37%,7%,0)] to-[rgba(36,29,12,0.7)]'>
      <div className='absolute inset-0 flex flex-col'>
        <NavBar tab={'Services'} />
        <div className='flex justify-center items-center absolute inset-0 flex-col w-full max-w-[70rem] mx-auto'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-white font-poppins'>Tax <br/> <span className='text-buttonOrange'> Administration</span></h1>
             
        </div>
      </div>
    </div>

    <div className='flex flex-col gap-20'>

    <div className='w-full flex md:flex-row flex-col gap-8 px-4 sm:px-12 md:px-14 '>
      <img src={tax} className='rounded-3xl md:h-[calc(50vh)]'/>

      <div className=' flex flex-col gap-6 text-white font-poppins font-thin opacity-80 md:px-4 mt-4'>
        <p className='opacity-85'>Managing taxes can often feel overwhelming, especially with the ever-changing regulations and intricate processes involved. However, you don’t have to face it alone. Our team of certified tax professionals is dedicated to simplifying this often-complicated task for you. With years of experience and in-depth knowledge of tax laws, we are here to provide the support and expertise you need. </p>
        <p className='opacity-85'>We take a personalized approach to tax management, offering guidance that is specifically tailored to your unique financial situation. Whether you're an individual, a small business owner, or part of a larger organization, we work closely with you to understand your needs, goals, and challenges. This ensures that we offer tax strategies and solutions that align perfectly with your objectives..</p>
    
      </div>

    </div>

   
    
    <div className='w-full flex flex-col  px-4 sm:px-12 md:px-14 '>
      <div className='flex justify-center text-xl font-bold text-white'>
        <span>
          <span className='text-buttonOrange'>TAX ADMINISTRATION</span> SERVICES: 
          </span>
      </div>

      <div className='w-full flex flex-col p-4 items-center gap-10 my-10 bg-[radial-gradient(ellipse_at_50%_45%,_var(--tw-gradient-stops))]  from-[#392b18] via-primary  to-primary'>
        <div className=' flex flex-col gap-8 text-white font-poppins p-4'>
              
          {taxListData.map((data, index) => (
            <div key={index}
                className=' flex flex-row gap-4 flex-grow'>
                <div>
                  <SiTicktick size={30} className='text-buttonOrange'/>
                </div> 
                <div className='space-y-3'>
                  <span className='text-buttonOrange font-semibold'>{data.title}</span>
                  <p className='leading-7'>{data.description}</p>
                </div> 
            </div>
          ))}
        
        </div>
    </div>
    </div>
    

    </div>
    </div>
  )
}

export default TaxAdmin