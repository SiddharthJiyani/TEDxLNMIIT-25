import React from "react";
import { motion } from "framer-motion";
import About from "../About/About";
import Faq from "../FAQ/Faq";
import Speakers from "../Speakers/Speakers";
import PrevSpeakers from "../PrevSpeakers/PrevSpeakers";
import RedButton from "../utility/RedButton";
import Theme from "../Theme/Theme";
import video from "../../assets/video.mp4";
import CountdownTimer from "../utility/CounterDown";
import { Youtube } from "../utility/Youtube";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Home = () => {
  return (
    <div className="custom-container bg-black">
      {/* Hero Section */}
      <section
        id="hero"
        className="hero-section py-20 h-screen w-full flex  justify-center items-center text-red-500 relative overflow-hidden md:flex-wrap"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Over the Video */}
        <div className="hero-content home-content text-center z-10 flex justify-around  items-center  w-full xxxs:flex-col xxxs:items-center md:flex-row ">
          <div className="hero-title-wrap pl-10">
            <h2 className="hero-title text-8xl font-bold mb-4   rounded-lg p-1 ">
              <strong className="text-[#ff3006]">Tedx </strong>
              <br></br>
              <strong className="text-white">Lnmiit</strong>
            </h2>
            {/* <p className="text-lg">Date: </p>
    <p className="text-lg">Venue: </p> */}

            {/* <div className="hero-buttons mt-8 space-x-4">
      <RedButton to="/contact-us">Contact Us</RedButton>
      <RedButton to="/buy-tickets">Buy Tickets</RedButton>
    </div> */}
            <button className="mt-3 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md px-8 bg-[#ff3006] hover:bg-red-700 text-white py-2 transition-all duration-300 transform hover:scale-105">
              Registrations Open Soon
            </button>
          </div>
          <motion.div
            className="border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm p-1 mb-4 mt-1"
            variants={sectionVariants}
          >
            <CountdownTimer />
          </motion.div>
        </div>
      </section>

      {/* Theme Section */}
      <motion.section
        id="theme"
        className="theme-section py-20 h-screen w-full flex flex-col justify-center items-center bg-black text-red-500 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Theme />
      </motion.section>

      {/* Speakers Section */}
      <motion.section
        id="speakers"
        className="speakers-section py-20 h-screen w-full flex flex-col justify-center items-center bg-black text-red-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Speakers />
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="about-section py-20 w-full flex flex-col justify-center items-center bg-black text-red-500 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Triggers only when the section is in view
        variants={sectionVariants}
      >
        <About />
      </motion.section>

      {/* Previous Speakers Section */}
      <motion.section
        id="previous-speakers"
        className="prev-speakers-section py-20 w-full flex flex-col justify-center items-center bg-black text-red-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <PrevSpeakers />
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        id="faq"
        className="faq-section py-20 w-full flex flex-col justify-center items-center bg-black text-red-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Faq />
      </motion.section>
      <motion.section
        id="faq"
        className="faq-section  w-full flex flex-col justify-center items-center bg-black text-red-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Youtube />
      </motion.section>
    </div>
  );
};

export default Home;
