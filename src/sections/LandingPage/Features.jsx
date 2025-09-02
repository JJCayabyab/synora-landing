import React from 'react'
import Container from '../../components/Container'
import { FeaturesData } from '../../data/LandingPageData'
import { motion } from 'framer-motion'


const Features = ({ darkMode }) => {
    const FeaturesItems = () => {
        return (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                {FeaturesData.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="h-full"
                    >
                        <div className="h-full bg-indigo-50 dark:bg-[#1e293b] p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
                            <img
                                src={darkMode ? feature.srcDark : feature.srcLight}
                                alt={feature.title}
                                className="w-16 h-16 mb-4"
                            />
                            <h3 className="font-semibold text-lg mb-2 text-gradient md:text-2xl">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-heading-1 dark:text-gray-300 font-body lg:text-[15px]">
                                {feature.desc}
                            </p>
             
                        </div>
                    </motion.div>
                ))}
            </div>
        );
    };

    return (
        <Container className="">
            {/* Animated Heading */}
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="font-heading text-heading-1 font-semibold text-xl mb-5 text-center
                   sm:text-2xl
                   md:text-3xl
                   lg:text-4xl"
            >
                <span className="">
                    Smarter
                </span>{" "}
                Tools. <br />
                <span className="">
                    Human-Centered
                </span>{" "}
                AI.
            </motion.h1>

            {/* Animated Features grid */}

            <FeaturesItems />

        </Container>
    );
}
export default Features