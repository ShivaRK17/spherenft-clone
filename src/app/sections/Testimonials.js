import React from 'react'
import SectionTitle from '../components/SectionTitle'
import TestimonialCard from '../components/TestimonialCard'

const Testimonials = () => {
  return (
    <>
      <div>
        <SectionTitle tit1={'Testimonials'} tit2={'Hear what our creators and collectors say about us'} desc={''} />
        <div className='flex flex-col p-3'>
          <div  className='flex items-center justify-between'>
            <div className='w-[50%]'>
              <TestimonialCard/>
            </div>
            <div className='w-[50%]'>
              <TestimonialCard/>
            </div>
          </div>
          <div data-aos="fade-up"  className='flex items-center justify-between'>
            <div className='w-[33%]'>
              <TestimonialCard/>
            </div>
            <div className='w-[33%]'>
              <TestimonialCard/>
            </div>
            <div className='w-[33%]'>
              <TestimonialCard/>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials