import Navbar from '@/app/components/Navbar'
import SectionTitle from '@/app/components/SectionTitle'
import EndNote from '@/app/sections/EndNote'
import Footer from '@/app/sections/Footer'
import Header from '@/app/sections/Header'
import Image from 'next/image'
import React from 'react'
import bg1 from '../images/bg1.png'
import MissionVision from './MissionVision'
import { PiTarget } from "react-icons/pi";
import Innovation from './Innovation'
import Team from './Team'

const About = () => {
  return (
    <>
     <div className='w-full px-10 xl:px-20 text-white'>
        <Header/>
        <Navbar/>
        <div className='my-10'>
        <SectionTitle tit1={'About Us'} tit2={'We\'re Making a Super-Strong Digital Economy'} desc={'At Sphere, discover a dynamic NFT marketplace, unleashing limitless creative exploration.'}/>
        </div>
        <div className='w-full flex justify-center items-center my-[100px]'>
            <Image src={bg1} className='w-[80%] rounded-[50px] grayscale hover:grayscale-0 transition transition-400 brightness-[0.5]'/>
        </div>
        <div className='flex w-full'>
            <MissionVision logo={<PiTarget color='#4e47f5' size={40} className='my-2'/>} tit={'Our Mission'} desc={'Empower artists and collectors worldwide by providing a secure and vibrant NFT marketplace, fostering a community-driven space for digital creativity and ownership.'}/>
            <MissionVision logo={<PiTarget color='#4e47f5' size={40} className='my-2'/>} tit={'Our Vision'} desc={'To be the forefront of the NFT revolution, creating a global platform that seamlessly connects and enriches the digital art ecosystem, making unique creations accessible and celebrated.'}/>
        </div>
        <Innovation/>
        <div className='my-10'>
        <SectionTitle tit1={'About Us'} tit2={'Meet the Minds Behind Sphere'} desc={'Explore exclusive NFTs with super convenience in collection discovery and curation.'}/>
        </div>
        <Team/>
        <EndNote/>
        <Footer/>
     </div>
    </>
  )
}

export default About