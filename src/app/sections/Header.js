import React from 'react'

const Header = () => {
    return (
        <>
            <div className='flex justify-between text-white w-full items-center py-10 font-inter'>
                <div>
                    <h1 className='text-2xl'>Playsphere</h1>
                </div>
                <button className='p-3 px-5 rounded-full border-[1px] border-[#4e47f5]'>Get Template</button>
            </div>
        </>
    )
}

export default Header