import React from 'react'
import Header from '../sections/Header'
import Hero from '../sections/Hero'
import CryptoScroll from '../sections/CryptoScroll'
import WhySphere from '../sections/WhySphere'
import CuratedCollections from '../sections/CuratedCollections'
import HowItWorks from '../sections/HowItWorks'
import Testimonials from '../sections/Testimonials'
import FAQ from '../sections/FAQ'
import EndNote from '../sections/EndNote'
import Footer from '../sections/Footer'

const Main = () => {
  return (
    <>
      <div className='w-full px-10 xl:px-20 text-white'>
        <Header />
        <Hero />
        <CryptoScroll />
        <WhySphere />
        <CuratedCollections />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <EndNote />
        <Footer />
      </div>
    </>
  )
}

export default Main