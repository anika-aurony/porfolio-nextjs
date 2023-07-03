"use client";

import { FiActivity } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ borderRadius: "0 0 0 0" }}
      whileInView={{ borderRadius: "1.5rem 1.5rem 0 0" }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="wrapper section-padding bg-accent text-dark rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold text-center flex gap-5 justify-center items-center"
        >
          <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl animate-transform-x-full">
          <FiActivity />
          </span>
          <span>Thank You</span>
          <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl animate-linear">
          <FiActivity />
          </span>
        </motion.h2>
      </div>

      <div className="mt-10  text-center px-20 text-lg md:text-xl">
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.7 }}
          >
            &copy; {new Date().getFullYear()} Anika Tasnim Aurony
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.9 }}
          >
            All Rights Reserved
          </motion.p>
        </div>
        
      </div>
    </motion.footer>
  );
};

export default Footer;
