import React from 'react'
import { NavBar} from '../../components'
import { statutory} from '../../assets'
import  {iVendblue,excel,matrix,palladium,sage,xero,quickBooks} from "../../assets/integrations"
import {SiTicktick } from "react-icons/si"
import {statutoryListData} from "../../constants/data"
import { Nssa,VendorNumber,Praz } from '../../assets/statutories'

function Statutory() {
  const icons =[iVendblue,excel,matrix,palladium,sage,xero,quickBooks];
  return (
    <div className='flex flex-col pb-20'>
        <div className='relative h-[16rem] sm:h-[20rem]  md:h-[25rem] overflow-hidden justify-center max-w-[88rem] md:mx-auto items-center w-full p-4 bg-gradient-to-t from-[hsla(21,37%,7%,0)] to-[rgba(36,29,12,0.7)]'>
            <div className='absolute inset-0 flex flex-col'>
              <NavBar tab={'Services'} />
              <div className='flex justify-center items-center absolute inset-0 flex-col w-full max-w-[70rem] mx-auto'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-white font-poppins'>Statutory & <br/> <span className='text-buttonOrange'>Secretarial Services</span></h1>
                  
              </div>
            </div>
        </div>

    <div className='flex flex-col gap-20'>

      <div className='w-full flex md:flex-row flex-col gap-8 px-4 sm:px-12 md:px-14 '>
        <img src={statutory} className='rounded-3xl md:h-[calc(50vh)]'/>

        <div className=' flex flex-col gap-6 text-white font-poppins font-thin opacity-80 px-4 mt-4'>
          <p className='opacity-85'>Clausemax Platform Pvt Ltd. is your trusted partner in navigating the complexities of Zimbabwean statutory and secretarial requirements. With a deep understanding of the local regulatory landscape, we offer a comprehensive suite of services designed to streamline your business operations and ensure compliance.</p>
          <p className='opacity-85'>Our experienced team of experts is committed to providing efficient and personalized solutions that cater to the unique needs of your business. Whether you're a startup, SME, or multinational corporation, we have the expertise to assist you.</p>
        
        </div>

      </div>

  
    
    <div className='w-full flex flex-col  px-4 sm:px-12 md:px-14 '>
      <div className='flex justify-center text-xl font-bold text-white'><span>OUR <span className='text-buttonOrange'>CORE</span> SERVICES INCLUDE:</span></div>

      <div className='w-full flex flex-col p-4 items-center gap-10 my-10 bg-[radial-gradient(ellipse_at_50%_45%,_var(--tw-gradient-stops))]  from-[#392b18] via-primary  to-primary'>
      <div className=' flex flex-col gap-8 text-white font-poppins p-4'>
            
            {statutoryListData.map((data, index) => (
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

      <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 ss:grid-cols-2 grid-cols-1 items-center justify-center md:gap-4 sm:gap-12 gap-16 p-4 my-4'>
       <img src={Praz} alt={""} className='w-64 h-36 mx-auto' />
       <img src={Nssa} alt={""} className='w-64 h-36 mx-auto' />
       <img src={VendorNumber} alt={""} className='w-64 h-36 mx-auto' />
      </div>
    </div>
  )
}

export default Statutory