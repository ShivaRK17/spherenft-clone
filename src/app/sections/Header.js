"use client"
import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";


const Header = () => {
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
            <div data-aos="fade-down" className='flex justify-between text-white w-full items-center py-10 font-inter'>
                <div>
                    <h1 className='text-2xl'>Playsphere</h1>
                </div>
                <button className='p-3 px-5 rounded-full border-[1px] border-[#4e47f5] hover:bg-[#4e47f5] cursor-pointer '>Get Template</button>
            </div>
        </>
    )
}

export default Header