import React from 'react'
import { NavBar} from '../../components'
import { Link } from 'react-router-dom'
import { dev,hosting } from '../../assets'
import {SiTicktick } from "react-icons/si"
import  {iVendblue,excel,matrix,palladium,sage,xero,quickBooks} from "../../assets/integrations"

function Developmemt() {
  const icons =[iVendblue,excel,matrix,palladium,sage,xero,quickBooks];
  return (
    <div className='flex flex-col pb-20'>
    <div className='relative h-[16rem] sm:h-[20rem]  md:h-[25rem] overflow-hidden justify-center max-w-[88rem] md:mx-auto items-center w-full p-4 bg-gradient-to-t from-[hsla(21,37%,7%,0)] to-[rgba(36,29,12,0.7)]'>
      <div className='absolute inset-0 flex flex-col'>
        <NavBar tab={'Services'} />
        <div className='flex justify-center items-center absolute inset-0 flex-col w-full max-w-[70rem] mx-auto'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-white font-poppins'>Web Developmemnt<br/> <span className='text-buttonOrange'> & Hosting</span></h1>
             
        </div>
      </div>
    </div>

    <div className='flex flex-col gap-20'>

    <div className='w-full flex md:flex-row flex-col gap-8 px-4 sm:px-12 md:px-14 '>
      <img src={hosting} className='rounded-3xl md:h-[calc(50vh)]'/>

      <div className=' flex flex-col gap-8 text-white font-poppins font-thin opacity-80 md:px-4 mt-4 leading-7'>
        <p className='opacity-85'>In today's digital age, a strong online presence is essential for businesses of all sizes. Web development is the process of creating, designing, and building websites. It involves crafting user-friendly interfaces, optimizing for search engines, and ensuring seamless functionality across various devices.</p>
        <p className='opacity-85'>Our team of skilled web developers specializes in creating custom websites tailored to your specific needs. From simple static sites to complex dynamic applications, we have the expertise to bring your vision to life. We utilize the latest technologies and industry best practices to deliver exceptional results.</p>
      </div>

    </div>

  
    <div className='w-full flex flex-col items-center gap-5  bg-[radial-gradient(ellipse_at_50%_45%,_var(--tw-gradient-stops))]  from-[#392b18] via-primary  to-primary'>
    <div className='w-full flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-8 px-4 sm:px-12 md:px-12 '>
    <div className=' flex flex-col gap-6 sm:gap-4 md:gap-5 text-white font-poppins font-thin p-4'>
        <p className='text-lg font-bold'>Web Hosting</p>
        <p className='font-thin opacity-85'>Once your website is developed, it needs a reliable home on the internet. Web hosting provides the necessary infrastructure to make your website accessible to the world. Our hosting solutions offer a range of features, including:</p>

        <div className=' flex flex-row gap-4 text-buttonOrange'>
          <div>
             <SiTicktick size={28} />
          </div>
          
           <span className='font-semibold'>Reliable Uptime: 
              <span className='font-thin text-white'> Ensure your website is always available to your visitors
              </span>
            </span> 
        </div>

        <div className=' flex flex-row gap-4 text-buttonOrange'>
          <div>
             <SiTicktick size={28} />
          </div>
           <span className='font-semibold'>Fast Loading Speeds: 
              <span className='font-thin text-white'> Optimize your website's performance for a seamless user experience.
              </span>
            </span> 
        </div>

        <div className=' flex flex-row gap-4 text-buttonOrange'>
        <div>
             <SiTicktick size={28} />
          </div>
           <span className='font-semibold'>Easy-to-Use Control Panel: 
              <span className='font-thin text-white'> Manage your website effortlessly with our user-friendly interface.
              </span>
            </span> 
        </div>

        <div className=' flex flex-row gap-4 text-buttonOrange'>
        <div>
             <SiTicktick size={28} />
          </div>
           <span className='font-semibold'>Robust Security: 
              <span className='font-thin text-white'> Protect your website from cyber threats and data breaches.
              </span>
            </span> 
        </div>
        
      </div>

      <img src={dev} className='rounded-3xl md:h-[calc(60vh)]'/>

    </div>
    </div>

    </div>
    </div>
  )
}

export default Developmemt