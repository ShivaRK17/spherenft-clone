import React from 'react'
import Blob from '../components/Blob'
import About from './components/About'

const page = () => {
    return (
        <>
            <div className='absolute w-full'>
                <Blob />
            </div>
            <About/>
        </>
    )
}

export default page