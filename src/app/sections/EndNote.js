import Image from 'next/image'
import React from 'react'
import img from '../images/endnotebg.png'
import GetStartedButton from '../components/GetStartedButton'
const EndNote = () => {
  return (
    <>
      <div className='w-full relative rounded-3xl overflow-hidden p-[100px] text-center my-10' style={{backgroundImage:`url(${img.src})`,objectFit:'cover',backgroundPosition:'center',backgroundSize:'100%',backgroundRepeat:'no-repeat'}}>
        {/* <Image alt='bg' src={img} className='absolute left-0 top-0 h-full w-full rounded-3xl z-[1]' /> */}
        <div className='z-[2]'>
          <h1 className='text-white font-cabinet text-5xl my-3'>Start your NFT Journey</h1>
          <p className='font-inter text-lg text-gray-400 my-3'>Join Sphere and dive into the world of exclusive digital art.</p>
          <div className='flex items-center justify-center mt-[50px]'>
            <GetStartedButton/>
          </div>
        </div>
      </div>

    </>
  )
}

export default EndNote