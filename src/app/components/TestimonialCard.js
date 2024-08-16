"use client"
import Image from 'next/image';
import React, { useEffect } from 'react'
import { PiQuotesFill } from "react-icons/pi";
import heroimg from '../images/Hero/image.png'
import Aos from 'aos'
import "aos/dist/aos.css";

const TestimonialCard = () => {
    useEffect(() => {
        Aos.init({
            disable: "phone",
            duration: 1000,
            easing: "ease-out-cubic",
        });
    }, []);
  return (
    <>
    <div data-aos="fade-up" className='bg-[#151329] font-inter flex flex-col border-[1px] border-[#282545] rounded-xl m-3 p-5'>
        <PiQuotesFill size={50} color='#5c5791'/>
        <p className='my-3 text-lg'>Sphere has revolutionized my art journey; as an NFT creator, I've found a vibrant community and seamless selling experience.</p>
        <div className='flex items-center'>
            <Image alt='testcard' src={heroimg} width={50} height={50} objectFit='cover' className='w-[50px] h-[50px] rounded-full'/>
            <div className='mx-3 flex flex-col justify-center'>
                <p className='text-gray-400'>PixelPioneer</p>
                <p className='text-gray-400 text-sm'>Creator</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default TestimonialCard