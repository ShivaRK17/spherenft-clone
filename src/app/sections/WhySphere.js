"use client"
import React, { useEffect } from 'react'
import SectionTitle from '../components/SectionTitle'
import Carousal from '../components/Carousal'
import globe from '../images/WhySphere/globe.png'
import upload from '../images/WhySphere/upload.png'
import Image from 'next/image';
import Aos from 'aos'
import "aos/dist/aos.css";

const images = [
  "/image.png",
  "/image.png",
  "/image.png",
];

const WhySphere = () => {
  useEffect(() => {
    Aos.init({
        once:true,
        disable: "phone",
        duration: 200,
        easing: "ease-out-cubic",
    });
}, []);
  return (
    <>
      <div>
        <SectionTitle tit1={'Why Sphere?'} tit2={'Unlock the true essence of NFTs'} desc={'seamlessly collect rare digital masterpieces and effortlessly elevate your art portfolio. '} />
      </div>
      <div data-aos="zoom-in" className='flex w-full h-min'>
        <div className='w-1/2 my-5 ml-5 h-auto bg-[#151329] rounded-xl border-[1px] border-[#282545] p-5'>
          <h2 className='font-cabinet text-2xl'>Collect rare and exclusive digital art</h2>
          <p className='text-gray-400 text-base font-inter'>Collect rare, exclusive digital art, breathing life into the extraordinary realm.</p>
          <div className="rounded-xl h-fit mt-5 bg-[#151329] w-full overflow-hidden">
            <Carousal images={images} />
          </div>
        </div>
        <div className='w-1/2 h-auto'>
          <div className='bg-[#151329] m-5 rounded-xl border-[1px] border-[#282545] p-5'>
            <h2 className='font-cabinet text-2xl'>Sell your creations securely</h2>
            <p className='text-gray-400 text-base font-inter'>Turn creativity into currency with confidence in Sphere's secure marketplace.</p>
            <Image className='mt-3' src={upload} alt="whyimg" />
          </div>
          <div className='bg-[#151329] m-5 rounded-xl border-[1px] border-[#282545] px-5 pt-5'>
            <h2 className='font-cabinet text-2xl'>Embrace blockchain benefits for NFTs</h2>
            <p className='text-gray-400 text-base font-inter'>Unlock digital ownership's future with transparency, security, and decentralized beauty.</p>
            <Image className='mt-3' src={globe} alt="whyimg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default WhySphere