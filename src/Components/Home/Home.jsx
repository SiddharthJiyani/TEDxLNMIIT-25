import React from "react";
import { motion } from "framer-motion";
import About from "../About/About";
import Faq from "../FAQ/Faq";
import Speakers from "../Speakers/SpeakerList";
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
    <div className="custom-container bg-black overflow-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="hero-section py-20 h-screen w-full flex  justify-center items-center text-red-500 relative overflow-hidden md:flex-wrap">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75">
          <source
            src="https://res.cloudinary.com/djodcayme/video/upload/v1732190366/TEDxLNMIIT%2725/Ted_Web_Back_Black_White_compressed_o1lz1l.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Content Over the Video */}
        <div className="hero-content home-content text-center z-10 justify-around items-center w-full xxxs:flex-col xxxs:items-center md:flex-row">
          <div className="flex text-center z-10 justify-around items-center w-full xxxs:flex-col xxxs:items-center md:flex-row">
            {/* Title and Button */}
            <div className="hero-title-wrap xxxs:pl-4 sm:pl-7 xxxs:mr-0 md:mr-56 mb-6 md:mb-0">
              <div>
                <h2 className="hero-title text-4xl sm:text-5xl md:text-6xl xl:text-7xl mb-4 font-Audrey rounded-lg p-1">
                  <strong className="text-[#ff3006]">TEDx</strong>
                  <span className="text-white font-extralight">Lnmiit</span>
                </h2>
                <div className="hero-buttons mt-8 space-x-4 font-generalSans">
                  <RedButton to="/buy-tickets">
                    Registrations Open Soon
                  </RedButton>
                </div>
              </div>
            </div>

            {/* Timer */}
            <motion.div
              className="border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm p-1 mb-4 mt-1"
              variants={sectionVariants}>
              <CountdownTimer />
            </motion.div>
          </div>

          {/* Theme heading */}
          <div className="w-full mt-16 sm:mt-20 -mb-36 bg-transparent font-generalSans">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center tracking-tight leading-none">
                  <span className="inline-block py-5 px-4 bg-clip-text text-transparent animate-red-gradient relative">
                    Navigating
                    <span className="absolute inset-0 bg-clip-text text-transparent animate-flowing-shine"></span>
                  </span>
                  <span className="inline-block py-5 px-4 bg-clip-text text-transparent animate-white-gradient relative">
                    the
                    <span className="absolute inset-0 bg-clip-text text-transparent animate-flowing-shine"></span>
                  </span>
                  <span className="inline-block py-5 px-4 bg-clip-text text-transparent animate-red-gradient relative">
                    New
                    <span className="absolute inset-0 bg-clip-text text-transparent animate-flowing-shine"></span>
                  </span>
                </h2>
                <div className="absolute -bottom-4 left-1/2 text-[#ce2200d4] transform -translate-x-1/2 w-16 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-gray-400 via-gray-300 to-white"></div>
              </motion.div>
            </div>
            <style jsx>{`
              @keyframes red-gradient {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
              @keyframes white-gradient {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
              @keyframes flowing-shine {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(100%);
                }
              }

              .animate-red-gradient {
                background-image: linear-gradient(
                  90deg,
                  #ff2c05 0%,
                  #ff3306 10%,
                  #f22c04 20%,
                  #e02603 30%,
                  #ce2200 40%,
                  #ff2c05 50%,
                  #ce2200 60%,
                  #e02603 70%,
                  #f22c04 80%,
                  #ff3306 90%,
                  #ff2c05 100%
                );
                background-size: 200% auto;
                animation: red-gradient 8s linear infinite;
              }

              .animate-white-gradient {
                background-image: linear-gradient(
                  90deg,
                  #4a4a4a 0%,
                  #8e8e8e 20%,
                  #c0c0c0 40%,
                  #ffffff 50%,
                  #c0c0c0 60%,
                  #8e8e8e 80%,
                  #4a4a4a 100%
                );
                background-size: 200% auto;
                animation: white-gradient 8s linear infinite;
              }

              .animate-flowing-shine {
                background-image: linear-gradient(
                  90deg,
                  transparent 0%,
                  rgba(255, 255, 255, 0.4) 50%,
                  transparent 100%
                );
                background-size: 200% auto;
                animation: flowing-shine 3s linear infinite;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <motion.section
        id="theme"
        className="theme-section py-20 h-screen w-full flex flex-col justify-center items-center bg-black text-red-500 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}>
        <Theme />
      </motion.section>

      {/* Speakers Section */}
      <motion.section
        id="speakers"
        className="speakers-section py-20 h-full w-full flex flex-col justify-center items-center bg-black text-red-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}>
        <Speakers />
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="about-section py-20 w-full flex flex-col justify-center items-center bg-black text-red-500 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Triggers only when the section is in view
        variants={sectionVariants}>
        <About />
      </motion.section>

      {/* Previous Speakers Section */}
      <motion.section
        id="previous-speakers"
        className="prev-speakers-section py-20 w-full flex flex-col justify-center items-center bg-black text-red-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}>
        <PrevSpeakers />
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        id="faq"
        className="faq-section py-20 w-full flex flex-col justify-center items-center bg-black text-red-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}>
        <Faq />
      </motion.section>
      <motion.section
        id="faq"
        className="faq-section  w-full flex flex-col justify-center items-center bg-black text-red-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}>
        <Youtube />
      </motion.section>
    </div>
  );
};

export default Home;
