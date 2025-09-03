import React from "react";
import Container from "../../components/Container";
import { motion } from "framer-motion";
import { PricingData } from "../../data/LandingPageData";

const Pricing = () => {
  const PricingItems = () => {
    return (
      <div className="flex flex-col gap-7 lg:flex-row lg:gap-10 items-stretch w-full">
        {PricingData.map((plan, index) =>
          plan.highlight ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-gradient dark:bg-[#1e293b] p-1 rounded-xl 
                                w-full md:max-w-md mx-auto lg:flex-1"
            >
              <div className="bg-white dark:bg-[#1e293b] justify-between rounded-xl p-6 flex flex-col items-center text-center h-full">
                <span className="absolute top-0 z-20 text-white bg-gradient rounded-b-full font-medium text-md font-heading px-4 py-1">
                  Best Value
                </span>
                <div>
                  <div className="flex items-center justify-center">
                    <h2 className="font-body text-heading-1 inline mr-2 font-semibold  text-md mt-4  md:text-2xl ">
                      {plan.name}
                    </h2>
                  </div>
                  <h3 className="font-body text-heading-1 font-medium  ">
                    {plan.tagline}
                  </h3>
                  <p className="mt-10 text-2xl lg:text-3xl text-heading-2 font-bold">
                    {plan.price}
                  </p>
                </div>

                <ul className="mt-4 space-y-1 font-medium text-left text-sm md:text-base font-body text-gray-700 dark:text-gray-200">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      ✅ <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-10 w-full bg-indigo-500 hover:bg-indigo-600 rounded-full text-white font-heading py-2 transition-colors">
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
              className="inset-shadow-xs dark:bg-[#1e293b] p-6 rounded-2xl shadow-md 
                                flex flex-col items-center text-center justify-between 
                                w-full md:max-w-md mx-auto lg:flex-1"
            >
              <div>
                <h2 className="font-body text-heading-1 font-semibold  text-md md:text-2xl mt-4 ">
                  {plan.name}
                </h2>
                <h3 className="font-body text-heading-1 font-medium">
                  {plan.tagline}
                </h3>
                <p className="mt-10 text-2xl  lg:text-3xl text-heading-2 font-bold">
                  {plan.price}
                </p>
              </div>

              <ul className="mt-4 space-y-2 font-medium text-left text-sm md:text-base font-body text-gray-700 dark:text-gray-200">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    ✅ <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-10 w-full bg-indigo-500 hover:bg-indigo-600 rounded-full text-white font-heading py-2 transition-colors">
                Choose Plan
              </button>
            </motion.div>
          )
        )}
      </div>
    );
  };

  return (
    <Container>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-heading text-heading-1 font-bold text-2xl mb-5  text-center
                       md:text-3xl
                       lg:text-4xl"
      >
        Pricing
      </motion.h1>
      <PricingItems />
    </Container>
  );
};

export default Pricing;
