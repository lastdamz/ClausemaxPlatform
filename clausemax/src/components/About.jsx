import React from 'react'
import {ServiceCard} from "../components/Cards"
import { GoArrowUpRight } from 'react-icons/go';
import {Link} from "react-router-dom"
function About() {
  return (
    <div className='w-full flex flex-col p-4 items-center gap-10 my-10 bg-[radial-gradient(ellipse_at_50%_45%,_var(--tw-gradient-stops))]  from-[#392b18] via-primary  to-primary'>
    <span className='text-3xl justify-center text-white'>About Us</span>
    <p className='w-5/6  break-words  text-center flex flex-wrap justify-center text-base text-white leading-9'>Causemax Platform, we are your trusted partner in delivering comprehensive accounting and financial solutions. Our mission is to empower businesses of all sizes- from innovative startups to established corporations- to enhance their financial performance and drive sustainable growth. With a dedication to excellence, we tailor our services to meet the unique needs of each client, ensuring they have the insights and support necessary to thrive in today's dynamic market </p> 

    <Link
    to={"/about"}
    className=' bg-buttonOrange p-2  px-2 rounded-3xl h-10 flex  items-center hover:bg-explore hover:text-white hover:scale-110 transition-all'>
      <div className='flex items-center justify-between text-sm gap-3'>
        <span>Explore more</span>

        <div className='bg-explore rounded-full h-7 w-7 flex items-center p-1 justify-end'>
        <GoArrowUpRight size={28} className='justify-center text-buttonOrange' />
      </div> 
      </div>
      </Link>
    </div>
  )
}

export default About