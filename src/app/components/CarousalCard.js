import Image from 'next/image'
import React from 'react'
import { MdVerified } from "react-icons/md";

const CarousalCard = ({className,src,title1,title2,desc1,desc2,desc3,desc4}) => {
    return (
        <>
            <div className={`h-full m-3 flex font-inter flex-col p-5 rounded-2xl border-[1px] border-[#826a92] bg-[#ffffff26] backdrop-blur ${className}`}>
                <div className="rounded-xl overflow-hidden">
                    <Image width={300} height={300} src={src} className="object-cover" alt="carcard" />
                </div>
                <div className='flex flex-col mt-2'>
                    <p className='text-sm text-gray-400 flex items-center'>{title1} <MdVerified className='mx-1' color='#4e47f5'/></p>
                    <p className='text-base'>{title2}</p>
                </div>
                <div className="flex my-3 bg-gradient-to-r justify-between from-[#9390b747] via-[#9390b747] via-[90%] to-[#8f8cae0f] rounded-xl backdrop-blur-xl p-3 border-[1px] border-[#826a92]">
                    <div className="flex flex-col text-left">
                        <h3 className="text-gray-400 text-sm">{desc1}</h3>
                        <p className="text-sm flex items-center">{desc2}</p>
                    </div>
                    <div className="flex flex-col text-left">
                        <h3 className="text-gray-400 text-sm">{desc3}</h3>
                        <p className="text-sm">{desc4}</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CarousalCard