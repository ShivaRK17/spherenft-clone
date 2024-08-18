import React from 'react'

const MissionVision = ({logo,tit,desc}) => {
  return (
    <>
    <div className='w-1/2 bg-[#151329] font-inter flex flex-col border-[1px] border-[#282545] rounded-3xl m-3 p-5'>
        {logo}
        <h3 className='font-cabinet text-2xl my-2'>{tit}</h3>
        <p className='text-lg text-gray-400 mt-5'>{desc}</p>
    </div>
    </>
  )
}

export default MissionVision