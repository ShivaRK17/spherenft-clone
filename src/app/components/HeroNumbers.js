import React from 'react'

const HeroNumbers = ({title,desc}) => {
  return (
    <>
    <div className='flex flex-col mx-3'>
        <h2 className='text-3xl my-3 font-semibold'>{title}<span className='text-[#9a8fff]'>+</span></h2>
        <h6 className='text-lg text-gray-400'>{desc}</h6>
    </div>
    </>
  )
}

export default HeroNumbers