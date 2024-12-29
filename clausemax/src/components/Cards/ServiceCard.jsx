import React from 'react';
import image from "../../assets/feature2.png";
import { GoArrowUpRight } from 'react-icons/go';
import {Link} from "react-router-dom"

function ServiceCard({ title, description, image, state }) {
  return (
    <Link 
    to={"/info"} 
    state={{state}}
    className='flex flex-col bg-white rounded-3xl max-w-[28rem] font-poppins hover:scale-105 transition-all'>
      <div className='flex flex-row p-4'>
        <div className='flex flex-col gap-2 w-[80%] sm:w-[82%] md:w-[84%]'>
          <span className='text-lg font-semibold'>{title}</span>
          <p className='text-sm'>{description}</p>
        </div>
        <Link
        to={"/info"} 
        state={{state}}
        className='bg-buttonOrange rounded-full h-12 w-12 flex items-center justify-center text-white ml-5 hover:scale-105 transition-all hover:bg-explore '>
          <GoArrowUpRight size={28} />
        </Link>
      </div>
      <img src={image} className='rounded-3xl w-full h-auto' alt="Service" />
    </Link>
  );
}

export default ServiceCard;