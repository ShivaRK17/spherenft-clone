import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const GetStartedButton = () => {
  return (
    <>
    <div data-aos="fade-up" className='rounded-full py-3 px-4 flex justify-evenly bg-[#4e47f5] my-4 w-fit items-center hover:bg-white hover:text-[#4e47f5] cursor-pointer'>
        <div className='mx-1 flex flex-col items-center justify-center'>
        <p className='font-inter m-0 p-0'>Get Started</p>
        </div>
        <div className='h-full flex items-center justify-center mx-1'>
        <FaArrowRight size={15} fontWeight={200}/>
        </div>
    </div>
    </>
  )
}

export default GetStartedButton