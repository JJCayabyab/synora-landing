import React from 'react'
import Container from '../../components/Container'

const Features = () => {
    return (
        <Container className=''>
            <h1 className='font-heading text-heading-1 font-semibold text-xl text-center
                            sm:text-2xl
                            md:text-3xl
                            lg:text-4xl'>
                <span className='bg-gradient-to-r from-[#6366f1] to-[#ec4899] 
               bg-clip-text text-transparent'>Smarter</span> Tools. <br/>
                <span className='bg-gradient-to-r from-[#6366f1] to-[#ec4899] 
               bg-clip-text text-transparent'>Human-Centered</span> AI.</h1>
        </Container>
    )
}

export default Features