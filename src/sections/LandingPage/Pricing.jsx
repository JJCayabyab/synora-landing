import React from 'react'
import Container from '../../components/Container'
import { motion } from 'framer-motion'
import { PricingData } from '../../data/LandingPageData'

const Pricing = () => {
   const PricingItems = () => {
      return (
         <div className="flex flex-col gap-7 justify-center 
                         lg:flex-row lg:gap-10">
            {PricingData.map((plan, index) => (
               plan.highlight ? (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: index * 0.2 }}
                     viewport={{ once: true }}
                     className="bg-gradient relative dark:bg-[#1e293b] p-1 rounded-xl lg:w-1/3"
                  >
                     <div className="bg-white dark:bg-[#1e293b] justify-between rounded-xl p-6 flex flex-col items-center text-center h-full">
                          <span className="absolute top-0 z-20 text-white  bg-gradient rounded-b-full font-medium  text-md font-heading px-4 py-1">
                                 Best Value
                              </span>
                        <div>
                           <div className='flex items-center justify-self-center'>
                              <h2 className="font-body text-heading-1 inline mr-2 font-semibold text-3xl">{plan.name}</h2>
                            
                           </div>
                           <h3 className="font-body text-heading-1 font-medium">{plan.tagline}</h3>
                       <p className="mt-10 text-3xl text-heading-2 font-bold">{plan.price}</p>
                        </div>

                        <ul className="mt-4 space-y-2 font-medium text-left text-sm md:text-base font-body text-gray-700 dark:text-gray-200">
                           {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                 ✅ <span>{feature}</span>
                              </li>
                           ))}
                        </ul>

                        <button className=" mt-10 w-50 lg:w-full bg-indigo-500 hover:bg-indigo-600 rounded-full text-white font-heading py-2 transition-colors">
                           Choose Plan
                        </button>
                     </div>
                  </motion.div>
               ) : (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: index * 0.2 }}
                     viewport={{ once: true }}
                     className="inset-shadow-xs dark:bg-[#1e293b] p-6 rounded-2xl shadow-md flex flex-col items-center text-center justify-between lg:w-1/3"
                  >
                     <div>
                        <h2 className="font-body text-heading-1 font-semibold text-3xl">{plan.name}</h2>
                        <h3 className="font-body text-heading-1 font-medium">{plan.tagline}</h3>
                        <p className="mt-10 text-3xl text-heading-2 font-bold">{plan.price}</p>
                     </div>


                     <ul className="mt-4 space-y-2 font-medium text-left text-sm md:text-base font-body text-gray-700 dark:text-gray-200">
                        {plan.features.map((feature, i) => (
                           <li key={i} className="flex items-center gap-2">
                              ✅ <span>{feature}</span>
                           </li>
                        ))}
                     </ul>

                     <button className="mt-10 w-50 lg:w-full bg-indigo-500 hover:bg-indigo-600 rounded-full text-white font-heading py-2 transition-colors">
                        Choose Plan
                     </button>
                  </motion.div>
               )
            ))}
         </div>
      )
   }

   return (
      <Container>
         <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="font-heading text-heading-1 font-bold text-xl mb-10 text-center
                       sm:text-2xl
                       md:text-3xl
                       lg:text-4xl"
         >
            Pricing
         </motion.h1>
         <PricingItems />
      </Container>
   )
}

export default Pricing
