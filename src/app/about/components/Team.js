import React from 'react'
import team from '../images/team.png'
import Image from 'next/image'

const teamdata = [
    {
        img:team,
        name:'Nathan Wallace',
        desg:'Chief Executive Officer'
    },
    {
        img:team,
        name:'Nathan Wallace',
        desg:'Chief Executive Officer'
    },
    {
        img:team,
        name:'Nathan Wallace',
        desg:'Chief Executive Officer'
    },
    {
        img:team,
        name:'Nathan Wallace',
        desg:'Chief Executive Officer'
    },
    {
        img:team,
        name:'Nathan Wallace',
        desg:'Chief Executive Officer'
    },
    {
        img:team,
        name:'Nathan Wallace',
        desg:'Chief Executive Officer'
    },
]

const Team = () => {
  return (
    <>
    <div className='w-full flex flex-wrap justify-center'>
        {teamdata.map((e)=>{
            return <div className='w-[30%] m-2 rounded-2xl overflow-hidden text-center bg-[#151329] font-inter border-[1px] border-[#282545]'>
                <Image src={e.img}/>
                <p className='my-1 font-medium'>{e.name}</p>
                <p className='my-1 text-gray-400'>{e.desg}</p>
            </div>
        })}
    </div>  
    </>
  )
}

export default Team