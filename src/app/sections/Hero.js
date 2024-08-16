"use client"
import React, { useEffect } from 'react'
import GetStartedButton from '../components/GetStartedButton'
import HeroNumbers from '../components/HeroNumbers'
import { HeroTiltCard } from '../components/HeroTiltCard'
import Aos from 'aos'
import "aos/dist/aos.css";

const Hero = () => {
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
    <div className='flex w-full min-h-[calc(100vh-100px)] font-inter justify-center'>
        <div className='w-[50%] flex flex-col justify-center'>
            <h1 className='text-6xl mb-4 font-bold font-cabinet leading-[1.3em] tracking-[2px]' data-aos="fade-up">Discover Collect and Sell Exclusive Digital Art of NFTs </h1>
            <h4 className='w-[80%] font-inter text-gray-400 my-5 text-xl' data-aos="fade-up">Explore the captivating world of NFTs, where each token represents a unique digital asset, and trust in verified ownership as you collect these one-of-a-kind treasures.</h4>
            <GetStartedButton/>
            <div className='flex' data-aos="fade-up">
              <HeroNumbers title={'$1M'} desc={'TRANSACTIONS'}/>
              <HeroNumbers title={'20K'} desc={'RARE NFTS'}/>
              <HeroNumbers title={'10K'} desc={'USERS'}/>
            </div>
        </div>
        <div data-aos="zoom-in" className='w-[50%] flex justify-center items-center'>
          <HeroTiltCard/>
        </div>
    </div>
    </>
  )
}

export default Hero