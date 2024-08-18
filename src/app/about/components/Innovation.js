import Image from 'next/image'
import React from 'react'
import innovate from '../images/innovate.png'

const Innovation = () => {
    return (
        <>
            <div className='flex my-[100px] w-full'>
                <div className='w-1/2'>
                    <h3 className='font-cabinet text-5xl font-semibold my-2'>Innovation in Web 3</h3>
                    <p className='text-xl text-gray-400 mt-5'>Explore what sets Sphere apart in the Web 3 ecosystem. We leverage cutting-edge blockchain technology to ensure verified ownership, security, and a seamless experience for both digital artists and collectors. Sphere is not just a marketplace; it's a revolutionary hub for creative expression.</p>
                    <button className='p-3 px-5 rounded-full border-[1px] border-[#4e47f5] hover:bg-[#4e47f5] cursor-pointer my-10 text-lg'>Learn More</button>
                </div>
                <div className='w-1/2 flex justify-end px-2'>
                    <Image src={innovate} className='rounded-2xl w-[500px] h-[500px] object-cover'/>
                </div>
            </div>
        </>
    )
}

export default Innovation