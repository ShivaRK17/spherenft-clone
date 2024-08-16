"use client"
import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";

  
  const SectionTitle = ({tit1,tit2,desc,className}) => {
  useEffect(() => {
    Aos.init({
      once:true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
    <div className={`flex flex-col items-center font-inter ${className}`}>
        <div data-aos="fade-up" className='rounded-full p-2 px-4 border-[1px] bg-[#4e47f526] border-[#4e47f580] opacity-100'>
            <p className='text-[#9a8fff]'>{tit1}</p>
        </div>
        <div data-aos="fade-up" className='my-5 w-[70%] text-center'>
            <h1 className='font-cabinet text-5xl'>{tit2}</h1>
        </div>
        <div data-aos="fade-up" className='w-[50%] text-center'>
            <p className='text-gray-400 text-lg'>{desc}</p>
        </div>
    </div>
    </>
  )
}

export default SectionTitle