"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";


const Navbar = () => {
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
    <div className='fixed top-[50px] left-1/2 p-3 z-[999] font-inter -translate-x-1/2 flex bg-[#14122799] backdrop-blur rounded-full border-[1px] border-[#282545]'>
        <Link className='mx-5 hover:text-gray-300' href={'/'}>Home</Link>
        <Link className='mx-5 hover:text-gray-300' href={'/about'}>About</Link>
        <Link className='mx-5 hover:text-gray-300' href={'/'}>Blog</Link>
    </div>
    </>
  )
}

export default Navbar