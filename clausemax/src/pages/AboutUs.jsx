import React from 'react';
import { Link } from 'react-router-dom';
import {hero,aboutD} from "../assets"
import {NavBar} from "../components";
import { FaAngleRight} from 'react-icons/fa6'
import { AboutUsCardLeft, AboutUsCardRight } from  "../components/Cards"
import {tech,experience,solution,commitment} from "../assets/icons"


function AboutUs() {
  return (
    <div className='flex flex-col gap-4 font-poppins'>
          <div className='relative h-[38rem] overflow-hidden justify-center  md:mx-auto items-center w-full p-4'>
                <div className={`absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.7)]`}></div>
                <img src={hero} className="absolute inset-0 object-cover w-full h-full" />
                <div className='absolute inset-0 flex flex-col'>
                  <NavBar tab={'About Us'} />
                  <div className='flex justify-center items-center absolute inset-0 flex-col w-full max-w-[40rem] p-6 gap-6 mx-auto'>
                    <h1 className='text-4xl sm:text-5xl md:text-7xl text-center font-semibold text-white'>About Us</h1>
                      <div className='font-medium flex items-center text-xl space-x-1'> 
                          <Link to='/' className='flex items-center text-white hover:underline space-x-1'> 
                            <span>Home</span> 
                            <FaAngleRight/>
                          </Link>
                          <span className='text-buttonOrange hover:underline'>About Us</span>
                      </div>
                   </div>
                </div>
              </div>

              <div className='flex flex-col  gap-4 md:p-8'>

              <div className='w-full  flex md:flex-row flex-col  relative md:justify-normal sm:justify-normal justify-center mx-auto md:mx-8  md:p-8 p-4 font-poppins'>
                <img src={aboutD} className="w-[45rem] md:w-[calc(35vw)] lg:w-[calc(35vw)] h-[calc(70vh)] object-cover rounded-2xl" />
                <div className='bg-white md:w-[calc(50vw)]  sm:h-[calc(50vh)] lg:h-[calc(55vh)] md:h-[calc(55vh)] sm:w-[calc(80vw)] ss:h-[calc(60vh)] h-[calc(65vh)] w-[calc(75vw)] p-6 rounded-2xl flex flex-col gap-2 sm:gap-4 md:gap-4 absolute left-1/2 md:left-1/2 lg:left-1/2 md:top-1/3 sm:top-0 top-1/3 transform -translate-x-1/2 md:-translate-y-1/4 sm:translate-y-1/4 ss:-translate-y-[30%] -translate-y-[30%]'>
                    <span className='text-black text-sm ss:text-base sm:text-lg md:text-xl font-bold'>WELCOME TO CLAUSEMAX PLATFORM</span>
                    <span className='text-explore ss:text-xl sm:text-2xl md:text-3xl '>COMPREHENSIVE BUSINESS INSIGHTS</span>
                    <div className='font-thin md:text-base sm:text-sm ss:text-sm text-xs flex flex-col sm:gap-4 gap-2 md:gap-4'>
                      <p><span className='font-bold '>Clausemax Platform </span>is your trusted partner for comprehensive accounting and financial solutions. With a focus on empowering businesses of all sizes—from dynamic startups to large corporations—we specialize in optimizing financial performance. Our expert team provides tailored services that include bookkeeping, tax planning, and financial analysis, ensuring that you have the tools and insights needed to succeed.</p>

                      <p>We understand the unique challenges each business faces and are dedicated to helping you navigate them effectively. By partnering with us, you can achieve sustainable growth and make informed decisions that enhance your overall financial health and stability.</p>

                    </div>
                    
                </div>

              </div >

              <div className='relative overflow-hidden justify-center  md:mx-auto items-center w-full p-4 bg-gradient-to-t from-[hsla(21,37%,7%,0)] to-[rgba(36,29,12,0.7)]'>
              <div className='w-full flex flex-col md:flex-row md:p-8 p-4 items-center justify-between font-poppins '>
                <div className='text-white flex flex-col gap-4 md:w-1/3 w-full'>
                  <span className='font-semibold text-3xl'>WHY CHOOSE US</span>
                  <div className='flex flex-col font-thin md:text-base text-sm gap-4'>
                    <p><span className='font-bold'> Expert Team: </span>Our professionals are industry leaders with years of experience, bringing a wealth of knowledge and expertise to every client engagement.</p>
                    <p><span className='font-bold'> Customized Solutions: </span>We understand that each business is unique, which is why we tailor our services to meet your specific needs, ensuring you receive the most effective solutions.</p>
                    <p><span className='font-bold'> Commitment to Quality: </span>We are dedicated to excellence in every project we undertake, consistently striving to exceed your expectations and deliver exceptional results that drive your success.</p>
                  
                  </div>
                </div>

                <div className='grid  md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-2 grid-cols-1 gap-16  justify-center items-center  p-4 mt-8  md:w-[60%] w-full '>
                    <div className='flex justify-center flex-col gap-16'>
                      <AboutUsCardLeft
                      icon={solution}
                      title={'Customized Solutions'} 
                      description={'Experience the power of customised solutions, carefully  crafted to address your unique business needs and challenges. Our tailored approach ensures that you receive the optimal strategies and support necessary for sustainable growth and success.'}/>
                      <AboutUsCardLeft
                      icon={experience}
                      title={'Expertise and Experience'} 
                      description={'Leverage our expertise and experience: With a team of seasoned professionals, we bring in-depth knowledge and proven strategies to drive your bussiness forward. Our commitment to excellence ensures you benefit from insights and solutions that are both innovative and effective'}/>
                    </div>
                    
                    <div className=' flex justify-center flex-col md:gap-8 gap-10'>
                      <AboutUsCardRight 
                      icon={commitment}
                      title={'Commitment to Results'} 
                      description={'Our commitment to results: we are dedicated to delivering tangible outcomes that propel your business forward. With focus on excellence and accountability, we strive to exceed your expectations and achieve sustainable success together '}/>
                      <AboutUsCardRight
                      icon={tech}
                      title={'Technology-Driven Efficiency'} 
                      description={'We harness the power of cutting-edge technology to streamline processes and enhance productivity. Our innovative solutions enable your business to operate more effectively, reducing cost and maximizing results' }/>
                    </div>
                  
                </div>

              </div>
                
              </div>
              </div>
         
              


            <div className='w-full bg-white flex md:flex-row flex-col justify-between py-8 gap-4 px-8 md:items-center items-start relative '>
                <div className='md:max-w-[800px] w gap-4 flex flex-col'>
                  <span className='text-3xl font-semibold flex flex-wrap break-words'>
                    Ready To Take Your Business To The Next Level With Clausemax Platform?
                  </span>
                  <p className='opacity-70 leading-6'>
                    ClauseMax Platform (PVT) LTD is your trusted partner for comprehensive accounting and financial solutions. We empower businesses of all sizes, from startups to corporations, to optimize their financial performance and achieve sustainable growth.
                  </p>
                </div>

                {/* Positioned absolutely to the bottom left on small screens and bottom right on medium screens */}
                <div className='absolute bottom-1 left-8 right-0 md:bottom-8 md:right-8 md:left-auto '>
                  <Link to='/contact' className='text-buttonOrange underline'>
                    Transform Your Finances - Get in Touch
                  </Link>
                </div>
              </div>
    </div>
    
  );
}

export default AboutUs;