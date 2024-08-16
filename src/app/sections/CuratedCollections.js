"use client";
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import heroimg from '../images/Hero/image.png'
import CarousalCard from '../components/CarousalCard'
import Marquee from 'react-fast-marquee';

const ccollections = [
  {
    src: heroimg,
    title1: 'Astro',
    title2: 'Astro #34',
    desc1: 'Price',
    desc2: '5.95 ETH',
    desc3: 'Highest Bid',
    desc4: '6.24 ETH',
  },
  {
    src: heroimg,
    title1: 'Astro',
    title2: 'Astro #34',
    desc1: 'Price',
    desc2: '5.95 ETH',
    desc3: 'Highest Bid',
    desc4: '6.24 ETH',
  },
  {
    src: heroimg,
    title1: 'Astro',
    title2: 'Astro #34',
    desc1: 'Price',
    desc2: '5.95 ETH',
    desc3: 'Highest Bid',
    desc4: '6.24 ETH',
  },
  {
    src: heroimg,
    title1: 'Astro',
    title2: 'Astro #34',
    desc1: 'Price',
    desc2: '5.95 ETH',
    desc3: 'Highest Bid',
    desc4: '6.24 ETH',
  },
  {
    src: heroimg,
    title1: 'Astro',
    title2: 'Astro #34',
    desc1: 'Price',
    desc2: '5.95 ETH',
    desc3: 'Highest Bid',
    desc4: '6.24 ETH',
  }
]

const CuratedCollections = () => {
  return (
    <>
      <div>
        <SectionTitle tit1={'Curated Collections'} tit2={'Our selection of exclusive NFTs'} desc={'Explore exclusive NFTs with super convenience in collection discovery and curation.'} />
        <div className='my-10'>
          <Marquee
          autoFill
          speed={10}
          >
            {ccollections.map((e,ind) => {
              return <CarousalCard key={ind} src={e.src} title1={e.title1} title2={e.title2} desc1={e.desc1} desc2={e.desc2} desc3={e.desc3} desc4={e.desc4} />
            })}
          </Marquee>
        </div>
      </div>
    </>
  )
}

export default CuratedCollections