import React from 'react'
import { FaInstagram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <div className='flex justify-between my-10 font-inter'>
        <div className='flex flex-col'>
          <h1 className='text-2xl my-5'>Playsphere</h1>
          <p className='text-gray-400 my-5 text-lg'>Discover, collect, sell  NFT artwork with ease.</p>
        </div>
        <div className='flex text-lg'>
          <div className='m-5 mx-10'>
            <h5 className='my-4'>Company</h5>
            <p className='text-gray-400 my-2'>About</p>
            <p className='text-gray-400 my-2'>Careers</p>
            <p className='text-gray-400 my-2'>Terms of Policy</p>
            <p className='text-gray-400 my-2'>Privacy Policy</p>
          </div>
          <div className='m-5 mx-10'>
            <h5 className='my-4'>Resources</h5>
            <p className='text-gray-400 my-2'>Blog</p>
            <p className='text-gray-400 my-2'>Contact</p>
            <p className='text-gray-400 my-2'>Community</p>
            <p className='text-gray-400 my-2'>Become a Partner</p>
          </div>
        </div>
      </div>
      <div className='h-[1px] bg-gray-400 my-5'/>
      <div className='flex justify-between pb-10'>
          <p className='text-gray-400'>© Copyright Sphere 2024. All Rights Reserved</p>
          <div className='flex'>
            <div className='mx-3'>
              <FaXTwitter/>
            </div>
            <div className='mx-3'>
              <FaInstagram/>
            </div>
            <div className='mx-3'>
              <FaWhatsapp/>
            </div>
          </div>
      </div>
    </>
  )
}

export default Footer