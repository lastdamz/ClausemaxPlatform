import React from 'react'
import { NavBar} from '../../components'
import { Link } from 'react-router-dom'
import { infoOne, infoTwo } from '../../assets'
import {SiTicktick } from "react-icons/si"
import  {iVendblue,excel,matrix,palladium,sage,xero,quickBooks} from "../../assets/integrations"

function VirtualFiscalisation() {
  const icons = [
    { src: sage, alt: 'Sage' },
    { src: iVendblue, alt: 'iVend Blue' },
    { src: xero, alt: 'Xero' },
    { src: quickBooks, alt: 'QuickBooks' },
    { src: excel, alt: 'Excel' },
    { src: palladium, alt: 'Palladium' },
    { src: matrix, alt: 'Matrix' }
  ];
  return (
    <div className='flex flex-col'>
    <div className='relative h-[16rem] sm:h-[20rem]  md:h-[25rem] overflow-hidden justify-center max-w-[88rem] md:mx-auto items-center w-full p-4 bg-gradient-to-t from-[hsla(21,37%,7%,0)] to-[rgba(36,29,12,0.7)]'>
      <div className='absolute inset-0 flex flex-col'>
        <NavBar tab={'Services'} />
        <div className='flex justify-center items-center absolute inset-0 flex-col w-full max-w-[70rem] mx-auto'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-white font-poppins'>Virtual <br/> <span className='text-buttonOrange'>Fiscalisation</span></h1>
             
        </div>
      </div>
    </div>

    <div className='flex flex-col gap-20'>

    <div className='w-full flex md:flex-row flex-col md:gap-6 gap-8 px-4 sm:px-12 md:px-14 '>
      <img src={infoTwo} className='rounded-3xl md:h-[calc(50vh)]'/>

      <div className=' flex flex-col gap-2 text-white font-poppins font-thin opacity-80 text-base leading-6'>
        <p className='opacity-85'>Virtual fiscalisation is an innovative approach that revolutionizes the way businesses manage their financial transactions. By electronically recording sales data in real-time, this process ensures that all transactions are accurately captured and transmitted to Tax Authorities(ZIMRA) via a secure  server-to-server connection. This not only enhances transparency but also reduces the risk of errors and fraud allowing businesses to maintain compliance with tax regulations seamlessly. With virtual fiscalisation, companies can streamline their reporting processes, minimize administrative burdens and focus more on their core operations </p>
        <p className='opacity-85'>Moreover, implementing Virtual fiscalisation empowers businesses with valuable insights into their sales performance. This technology-driven solution not only simplifies compliance but also fosters a culture of accountability, ensuring that the business remain proactive in their financial management. With our expert support you can transition smoothly to Virtual fiscalisation , ensuring that you business is not only compliant but also positioned for sustainable growth.  </p>
       
      </div>

    </div>

   <div className='flex flex-col justify-center items-center w-full bg-[radial-gradient(ellipse_at_50%_45%,_var(--tw-gradient-stops))]  from-[#392b18] via-primary to-primary gap-8 '>
   <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-medium text-buttonOrange font-poppins'>Integrations <span className='text-white'>Supported</span></h1>
   <div className='grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-[80rem] px-4'>
            {icons.map((icon, index) => (
              <img key={index} src={icon.src} alt={icon.alt} className='md:w-64 md:h-36 mx-auto' />
            ))}
          </div>
   </div>
    
    <div className='w-full flex flex-col md:flex-row gap-8 px-4 sm:px-12 md:px-14 '>
    <div className=' flex flex-col gap-6 text-white font-poppins font-thin p-4'>
        <p className='text-lg font-bold'>BENEFITS OF VIRTUAL FISCALISATION</p>
        <p className='font-thin opacity-85'>Virtual fiscalisation offers a range of significant benefits that enhance both operational efficieny and compliance for businesses. One of the primary advantages is improved accuracy in sales reporting. Other advantages include: </p>

        <div className=' flex flex-row gap-4'>
          <SiTicktick size={28} className='text-buttonOrange'/>
          <span>Painless setups</span>
        </div>
        <div className=' flex flex-row gap-4' >
          <SiTicktick size={28} className='text-buttonOrange'/>
          <span>Cloud based systems</span>
        </div>
        <div className=' flex flex-row gap-4'>
          <SiTicktick size={28} className='text-buttonOrange'/>
          <span>No more spending time on templates</span>
        </div>
      </div>

      <img src={ infoOne} className='rounded-3xl md:h-[calc(50vh)]'/>

    </div>
    

    </div>
    </div>
  )
}

export default VirtualFiscalisation