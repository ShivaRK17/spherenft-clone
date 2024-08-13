import React from 'react'

const SectionTitle = ({tit1,tit2,desc}) => {
  return (
    <>
    <div className='flex flex-col items-center font-inter'>
        <div className='rounded-full p-2 px-4 border-[1px] bg-[#4e47f526] border-[#4e47f580] opacity-100'>
            <p className='text-[#9a8fff]'>{tit1}</p>
        </div>
        <div className='my-5'>
            <h1 className='font-cabinet text-5xl'>{tit2}</h1>
        </div>
        <div className='w-[50%] text-center'>
            <p className='text-gray-400 text-lg'>{desc}</p>
        </div>
    </div>
    </>
  )
}

export default SectionTitle