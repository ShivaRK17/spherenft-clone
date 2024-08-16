import React from 'react'
import SectionTitle from '../components/SectionTitle'
import discover from '../images/HowItWorks/discover.png'
import Image from 'next/image'

const HowItWorksdata = [
  {
    src: discover,
    id: '01',
    title: 'Discover',
    para1: 'Begin your journey by exploring Sphere\'s curated collections, revealing a diverse tapestry of exclusive digital art.',
    para2: 'Seamlessly navigate through a world of creative wonders, discovering unique pieces at every turn.'
  },
  {
    src: discover,
    id: '02',
    title: 'Collect',
    para1: 'Assemble your personal digital sanctuary by securely collecting rare and unique NFTs.',
    para2:'Sphere safeguards your treasures, cultivating a bespoke gallery that reflects your passion for the extraordinary.',
  },
  {
    src: discover,
    id: '03',
    title: 'Sell',
    para1: 'Elevate your digital artistry by showcasing and selling your creations securely on Sphere\'s platform.',
    para2:'Seamlessly list your masterpieces, confident in the platform\'s robust security measures for transactions.',
  },
]


const HowItWorks = () => {
  return (
    <>
      <div className='bg-[#151329] py-10 rounded-[50px] px-5 my-5'>
        <SectionTitle tit1={'How It Works'} tit2={'Super convenient marketplace'} desc={'Discover, collect, and sell NFTs easily by discovering treasures and showcasing with confidence.'} />
        <div className='my-5'>
          {HowItWorksdata.map((e,ind) => {
            return <div key={ind} className='h-screen flex items-center'>
              <div className='flex flex-col w-1/2 p-5'>
                <h3 className='text-3xl my-2 font-cabinet'>{e.id}</h3>
                <h2 className='text-4xl my-2 font-cabinet'>{e.title}</h2>
                <p className='font-inter text-gray-400 text-lg my-2'>{e.para1}</p>
                <p className='font-inter text-gray-400 text-lg my-2'>{e.para2}</p>
              </div>
              <div className='w-1/2 p-5 flex items-center justify-center max-h-[350px]'>
                <Image src={e.src} alt='howitworks' className='max-w-[350px] object-contain rounded-2xl border-[1px] border-[#826a92]' />
              </div>
            </div>
          })
          }
        </div>
      </div>
    </>
  )
}

export default HowItWorks