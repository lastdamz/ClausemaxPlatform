import React from 'react'
import { NavBar} from '../../components'
import { Link } from 'react-router-dom'
import { ERPs} from '../../assets'
import {SiTicktick } from "react-icons/si"
import  {iVendblue,excel,matrix,palladium,sage,xero,quickBooks} from "../../assets/integrations"
import {softwareListData} from "../../constants/data"
function Zimra() {
  const icons =[iVendblue,excel,matrix,palladium,sage,xero,quickBooks];
  return (
    <div className='flex flex-col'>
    <div className='relative h-[16rem] sm:h-[20rem]  md:h-[25rem] overflow-hidden justify-center max-w-[88rem] md:mx-auto items-center w-full p-4 bg-gradient-to-t from-[hsla(21,37%,7%,0)] to-[rgba(36,29,12,0.7)]'>
      <div className='absolute inset-0 flex flex-col'>
        <NavBar tab={'Services'} />
        <div className='flex justify-center items-center absolute inset-0 flex-col w-full max-w-[70rem] mx-auto'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-white font-poppins'>Accounting Systems <br/> <span className='text-buttonOrange'>and ERPs</span></h1>
             
        </div>
      </div>
    </div>

    <div className='flex flex-col gap-20'>

    <div className='w-full flex md:flex-row flex-col gap-2 px-4 sm:px-12 md:px-14 '>
      <img src={ERPs} className='rounded-3xl md:h-[calc(50vh)]'/>

      <div className=' flex flex-col gap-4 text-white font-poppins font-thin opacity-80 px-4 md:mt-0 mt-4'>
        <p className='opacity-85'>Our Accounting Systems and ERP solutions cater to businesses of all sizes, providing both online and offline options. We offer robust software like QuickBooks, known for its user-friendly interface and powerful features, making bookkeeping and financial management efficient. Sage, including Sage Evolution and Pastel, supports advanced accounting needs with customizable modules for various industries.</p>
        <p className='opacity-85'>For businesses seeking cloud-based solutions, Xero offers real-time financial tracking and collaboration. Additionally, we provide Palladium which integrates seamlessly with various business functions, enhancing operational efficiency.</p>
        <p className='opacity-85'>Our point-of-sale (POS) systems, such as QuickBooks POS, RetailMan, and Palladium POS, streamline sales transactions and inventory management, ensuring accurate reporting and improved customer experiences. Together, these tools empower businesses to manage their finances effectively, fostering growth and informed decision-making in today’s competitive landscape.</p>
      </div>





    </div>

    <div className='w-full flex flex-col  px-4 sm:px-12 md:px-14 '>
      <div className='flex justify-center text-xl font-bold text-white items-center px-4 sm:px-12 md:px-14  '>
          <span> DETAILED EXPLANATION OF THE 
            <span className='text-buttonOrange'> ACCOUNTING SYSTEMS AND ERPs </span> 
            WE OFFER:
            </span>
          </div>

      <div className='w-full flex flex-col p-4 items-center gap-5  bg-[radial-gradient(ellipse_at_50%_45%,_var(--tw-gradient-stops))]  from-[#392b18] via-primary  to-primary'>
      <div className="p-4 text-white font-light">
        {softwareListData.map((software, index) => (
          <div key={index} className="mb-8 space-y-4 font-poppins">
            <h1 className="text-base font-bold mb-2">{`${index + 1}. ${software.name}`}</h1>
            <div className='flex flex-col ml-4'>
            <span className='text-buttonOrange font-thin'>Overview:</span>
            <p className='font-normal'> {software.overview}</p>
            </div>
           
            <h2 className="text-base font-thin mb-2 ml-4">Features:</h2>
            <ul className="list-none list-inside ml-8">
              {software.features.map((feature, idx) => { 
                const [title,description ] = feature.split(/:(.+)/);
                return(
                <li key={idx}>
                  <span className='text-buttonOrange font-semibold'>{title}:</span>
                  <span className='text-white'>{description}</span>
                </li>
              );
              })}
            </ul>
          </div>
        ))}
  </div>
     
    </div>
    </div>
    

    </div>
    </div>
  )
}

export default Zimra