import React from 'react'
import Container from '../../components/Container'
import { motion } from 'framer-motion'
import aboutImg from '../../assets/about/about.jpg'

const About = () => {
  return (
    <div>
      <Container className="flex flex-col items-center gap-5 lg:flex-row">
        <div className="lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="font-heading text-heading-1 font-bold text-xl mb-3 text-center
                       sm:text-2xl
                       md:text-3xl
                       lg:text-4xl lg:text-left"
          >
            Who We Are
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="font-heading text-gradient font-semibold mb-5 text-center text-[15px]
                       md:text-xl lg:text-left"
          >
            Building Human-Centered AI for Smarter Solutions
          </motion.h2>

      
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-heading-2 font-medium text-[14px] md:text-[16px] dark:text-gray-300 font-body"
          >
            We believe technology should feel natural, not complicated. Our mission is to create AI tools that empower people and businesses to work smarter, faster, and more creatively.
            <br /> <br />
            With a team of passionate engineers, designers, and researchers, we combine cutting-edge machine learning with thoughtful design to deliver solutions that truly understand human needs.
            <br /> <br />
            Our vision is clear: AI that doesn’t just automate, but collaborates.
          </motion.p>
        </div>

        <div className="lg:w-1/2">
          <img className="rounded-2xl" src={aboutImg} alt="About us" />
        </div>
      </Container>
    </div>
  )
}

export default About
