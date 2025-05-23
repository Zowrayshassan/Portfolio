import React from "react";
import "boxicons/css/boxicons.min.css";
import { TypeAnimation } from "react-type-animation";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  return (
    <main className="flex flex-col">
      {/* Intro Header */}
      <motion.div
        className="flex py-10 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* <div className='flex flex-col justify-center items-center   '>
          <div className='introducing-container w-[230px] md:w-[250px] h-[33px] text-center mt-10 font-bold py-1'>
           <a className='hover:cursor-pointer' href=""></a>
          </div>
        </div> */}
      </motion.div>

      <motion.div
        className="text-white text-2xl font-semibold px-5 flex flex-col items-start gap-4 md:ml-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={1}
      >
        <h2 className="text-blue-400 text-3xl mt-5 font-medium animate-bounce">
          Hi there 👋
        </h2>

        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
          I'm <br />
          Zowrays Hassan
        </h1>

        <TypeAnimation
          sequence={[
            "Web Developer 🌐",
            2000,
            "React & Django Expert ⚛️",
            2000,
            "Tailwind CSS Designer 🎨",
            2000,
            "Database Designer 🗃️",
            2000,
            "Python Developer 👨‍💻",
            2000,
          ]}
          speed={50}
          wrapper="h2"
          repeat={Infinity}
          className="text-gray-300 text-lg md:text-2xl"
        />
      </motion.div>

      {/* Contact Me Button */}
      <motion.div
        className="mt-10 text-center flex gap-10 justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={2}
      >
        <Link to="/contact">
          <button
            className="inline-flex items-center mt-8 gap-3 border border-gray-500 px-4 py-3 text-center text-gray-400 rounded-md 
                     transition-colors
                       duration-300 ease-in-out
                      hover:border-gray-400 cursor-pointer hover:text-white"
            onClick={Contact}
          >
            <i className="bx bx-book text-xl"></i>
            CONTACT ME
          </button>
        </Link>
        <a
          href="https://drive.google.com/uc?export=download&id=1qXkltoBFRPZg5u48RNXqilXziZ9B21V_"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-8 gap-5 border border-gray-500 px-4 py-3 text-center text-gray-400 rounded-md 
             transition-colors duration-300 ease-in-out hover:border-gray-400 cursor-pointer hover:text-white"
        >
          <i className="bx bx-download text-xl"></i>
          Download Resume
        </a>
      </motion.div>
    </main>
  );
};

export default Hero;
