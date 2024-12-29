// Hero.js
import React from 'react';
import { hero } from '../assets';
import {NavBar} from "../components";
import {Link } from "react-router-dom"

function Hero({ onSearch }) {
  return (
    <div className='relative h-[40rem] overflow-hidden justify-center md:mx-auto items-center w-full'>
      <div className={`absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.7)]`}></div>
      <img src={hero} className="absolute inset-0 object-cover w-full h-full" />
      <div className='absolute inset-0 flex flex-col'>
        <NavBar tab={'Home'} onSearch={onSearch} />
        <div className='flex justify-center items-center absolute inset-0 flex-col w-full max-w-[45rem] p-6 gap-6 mx-auto font-poppins'>
          <p className='text-4xl sm:text-5xl md:text-6xl text-center text-white leading-10'>Comprehensive <span className='text-buttonOrange'>business</span> insights</p>
          <p className='text-center text-white font-poppins font-extralight'>Empowering businesses with innovative digital solutions for seamless financial and operational efficiency</p>
          <div className='flex justify-center gap-4'>
            <Link 
              to={"/service"} 
              className='bg-buttonOrange text-black h-10 p-2 rounded-lg text-base w-36 hover:bg-orange-800 hover:text-white hover:scale-110 transition-all flex items-center justify-center'>
                Our Services
            </Link>
            <Link
              to={"/contact"} 
              className='bg-buttonBlack text-white h-10 p-2 rounded-lg text-base w-36 hover:text-white hover:bg-slate-700 hover:scale-110 transition-all flex items-center justify-center'>
                Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;