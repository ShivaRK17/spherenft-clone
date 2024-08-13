import React from 'react'
import Marquee from 'react-fast-marquee'
const CryptoScroll = () => {
  return (
    <>
    <div className='w-full my-20'>
      <Marquee speed={30} autoFill>
        <div className='text-2xl mx-20'>
          Crypto 1
        </div>
        <div className='text-2xl mx-20'>
          Crypto 2
        </div>
        <div className='text-2xl mx-20'>
          Crypto 3
        </div>
        <div className='text-2xl mx-20'>
          Crypto 4
        </div>
      </Marquee>
    </div>
    </>
  )
}

export default CryptoScroll