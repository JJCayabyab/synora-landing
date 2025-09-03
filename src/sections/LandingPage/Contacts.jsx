import React from "react";
import Container from "../../components/Container";
import { motion } from "framer-motion";
import { contactData } from "../../data/LandingPageData";

const Contacts = ({ darkMode }) => {
  return (
    <Container
      className="flex flex-col-reverse justify-center gap-5
                md:gap-15 md:flex-row"
    >
      <div className="md:w-1/2 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <div className=" lg:w-full">
            <label className="font-body text-heading-1 text-sm">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <div className=" lg:w-full">
            <label className="font-body text-heading-1 text-sm">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <div className=" lg:w-full">
            <label className="font-body text-heading-1 text-sm">Message</label>
            <textarea
              type="text"
              placeholder="Enter your message"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <button
            type="button"
            className="text-white bg-gradient focus:ring-4  focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm font-heading px-5 py-2.5 text-center me-2 mb-2 transition-all duration-500"
          >
            Send Message
          </button>
        </motion.div>
      </div>

      <div
        className="flex flex-col div md:w-1/2 items-center 
                      md:flex-col
                      lg:items-start"
      >
        <div
          className="text-center 
                    md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-heading text-heading-1 font-bold text-2xl  
                       md:text-3xl 
                       lg:text-4xl"
          >
            Get in Touch
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-heading text-gray-500 dark:text-gray-400 font-semibold mb-10  text-sm
                       md:text-lg"
          >
            We'd love to hear from you!
          </motion.h2>
        </div>
        <div className="flex  flex-col gap-5">
          {contactData.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className=" flex items-center gap-3"
            >
              <img
                src={darkMode ? contact.iconDark : contact.icon}
                alt={contact.text}
                className="w-6 h-6"
              />
              <p className="text-gray-700 dark:text-gray-300">{contact.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Contacts;
