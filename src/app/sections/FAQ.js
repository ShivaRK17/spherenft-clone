import React from 'react'
import SectionTitle from '../components/SectionTitle'
import FAQs from '../components/FAQs'

const FAQ = () => {
  return (
    <>
      <div className='my-[100px] flex justify-between'>
        <div className='w-[47%]'>
          <div className={`flex flex-col font-inter`}>
            <div className='rounded-full p-2 w-fit px-4 border-[1px] bg-[#4e47f526] border-[#4e47f580] opacity-100'>
              <p className='text-[#9a8fff]'>Frequently asked questions</p>
            </div>
            <div className='my-5'>
              <h1 className='font-cabinet text-5xl'>Some of the things you may want to know</h1>
            </div>
            <div className=''>
              <p className='text-gray-400 text-lg'>Have more questions? Don’t hesitate to reach us</p>
            </div>
          </div>
        </div>
        <div className='w-[47%]'>
          <FAQs />
        </div>
      </div>
    </>
  )
}

export default FAQ