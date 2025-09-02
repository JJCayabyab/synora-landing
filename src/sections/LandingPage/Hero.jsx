import React from 'react'
import Container from '../../components/Container'
import heroImage from '../../assets/hero/hero.png'

const Hero = () => {
   return (
      <Container className='flex flex-col text-center items-center gap-7 
                           lg:flex-row  mt-20' >
         <div className='flex flex-col justify-center  items-center gap-5 lg:w-1/2
                           lg:items-start lg:gap-10 '>
            <h1 className='font-heading font-semibold text-5xl bg-gradient-to-r text-gradient
                           sm:text-6xl
                           lg:text-7xl lg:text-left
                '>
               AI that Thinks with You
            </h1>
            <p className='text-heading-2 font-body lg:text-left font-medium text-[14px] md:text-[17px] '>Synora seamlessly combines human creativity with advanced artificial intelligence to accelerate ideas, automate complex workflows, provide actionable insights, and unlock smarter, more efficient decisions for individuals and businesses alike.</p>
            {/* <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-accent-2 px-6 font-medium text-neutral-50"><span className="absolute h-56 w-32 rounded-full bg-accent-1 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span><span className="relative">Try Synora</span></button> */}
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4  focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-md font-heading px-5 py-2.5 text-center me-2 mb-2 transition-all duration-500">Try Synora</button>

         </div>
         <div className="lg:w-1/2 flex justify-end relative">
            <img
               src={heroImage}
               className="rounded-2xl max-h-96 w-auto relative z-10"
            />
            <div className="absolute bottom-0 right-0 w-40 h-40  rounded-full bg-gradient-to-r from-[#6366f1] to-[#ec4899] blur-2xl opacity-90
                                md:w-70 md:h-70 md:opacity-30">
            </div>
         </div>
      </Container>
   )
}

export default Hero