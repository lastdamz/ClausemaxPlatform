import React from 'react'
import { NavBar} from '../../components'
import { Link } from 'react-router-dom'
import { accounting} from '../../assets'
import {SiTicktick } from "react-icons/si"
import  {iVendblue,excel,matrix,palladium,sage,xero,quickBooks} from "../../assets/integrations"
import {AccountingAndReportingListData} from "../../constants/data"
function Accounting() {
  const icons =[iVendblue,excel,matrix,palladium,sage,xero,quickBooks];
  return (
    <div className='flex flex-col'>
    <div className='relative h-[16rem] sm:h-[20rem]  md:h-[25rem] overflow-hidden justify-center max-w-[88rem] md:mx-auto items-center w-full p-4 bg-gradient-to-t from-[hsla(21,37%,7%,0)] to-[rgba(36,29,12,0.7)]'>
      <div className='absolute inset-0 flex flex-col'>
        <NavBar tab={'Services'} />
        <div className='flex justify-center items-center absolute inset-0 flex-col w-full max-w-[70rem] mx-auto'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-white font-poppins'>Accounting & <br/> <span className='text-buttonOrange'>Reporting</span></h1>
             
        </div>
      </div>
    </div>

    <div className='flex flex-col gap-20'>

    <div className='w-full flex md:flex-row flex-col gap-2 px-4 sm:px-12 md:px-12 '>
      <img src={accounting} className='rounded-3xl md:h-[calc(50vh)]'/>

      <div className=' flex flex-col gap-3 text-white font-poppins font-thin opacity-80 md:px-4'>
        <p className='opacity-85'>Our Accounting and Reporting services provide businesses with comprehensive financial management solutions tailored to their needs. We specialize in bookkeeping, ensuring accurate recording of financial transactions, while our expert team prepares detailed financial statements that comply with regulatory standards. We also offer insightful financial analysis, helping businesses understand their financial health through various metrics and KPIs.</p>
        <p className='opacity-85'>Additionally, our tax preparation services ensure compliance with local tax regulations, minimizing liabilities and maximizing deductions. We create customized reports that provide clear insights into profitability, cash flow, and operational efficiency, empowering informed decision-making.</p>
        <p className='opacity-85'>By leveraging advanced accounting software and best practices, we streamline financial processes, reduce errors, and save valuable time for our clients. Our commitment to transparency and accuracy allows businesses to focus on growth while we handle their accounting needs. With our services, you gain a trusted partner in navigating the complexities of financial management.</p>
      </div>

    </div>

    
    <div className='w-full flex flex-col  px-4 sm:px-12 md:px-14 '>
      <div className='flex justify-center text-xl font-bold text-white'><span>FINANCIAL <span className='text-buttonOrange'>REPORTING</span> AND ANALYSIS</span></div>

      <div className='w-full flex flex-col p-4 items-center gap-10 my-10 bg-[radial-gradient(ellipse_at_50%_45%,_var(--tw-gradient-stops))]  from-[#392b18] via-primary  to-primary'>
      <div className=' flex flex-col gap-8 text-white font-poppins p-4'>
            
            {AccountingAndReportingListData.map((data, index) => (
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

export default Accounting