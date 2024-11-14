import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import birdSvg from "../../assets/Bird.svg";

const Theme = () => {
  const variants = {
    initial: {
      x: "100vw",
      y: "100vh",
      opacity: 0.9,
      scale: 0.9,
    },
    animate: {
      x: "-100%",
      y: "-60%",
      opacity: 1,
      scale: 1,
      transition: {
        repeat: Infinity,
        duration: 6,
        ease: "linear",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const textPart = {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      scale: 1.1,
      y: 30,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative w-full flex justify-center items-center p-2 ">
      {/* Wrap the animation inside AnimatePresence */}
      <AnimatePresence>
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[300px] md:h-[500px] w-full md:w-[500px] xs:h-[250px] xs:w-[200px] sm:h-[300px] sm:w-[300px]"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          style={{
            backgroundImage: `url(${birdSvg})`, // Corrected template literal syntax
          }}
        />
      </AnimatePresence>
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center p-4 ">
        <motion.h1
          className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-bold text-center bg-gradient-to-r from-red-800  to-red-300 bg-clip-text text-transparent"
          initial="initial"
          whileInView="animate"
          exit="exit"
          variants={textPart}
        >
          Our Theme
        </motion.h1>

        <div className="w-full flex flex-col sm:flex-row justify-center items-center mt-4 sm:mt-8">
          {/* SVG Illustration */}
          <motion.div
            className="flex z-30 justify-center items-center h-full max-w-[250px] sm:max-w-[300px]  sm:max-h-[100px] xs:h-[300px] xxs:h-[300px] xxxs:h-[300px] md:max-w-[400px] lg:max-w-[500px] "
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <svg
              width="496"
              height="497"
              viewBox="0 0 496 497"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M193.026 278.537L247.092 184.473L301.159 278.537H193.026Z"
                stroke="#EB0028"
                strokeOpacity="0.81"
                strokeWidth="3"
              />
              <path
                d="M361.437 182.671L247.676 380.567L133.916 182.671L361.437 182.671Z"
                stroke="#EB0028"
                strokeOpacity="0.68"
                strokeWidth="3"
              />
              <path
                d="M362.529 315.244L247.676 381.843L132.823 315.244L132.823 182.035L247.676 115.437L362.529 182.035L362.529 315.244Z"
                stroke="#950B0B"
                strokeWidth="3"
              />
              <path
                d="M170.187 382.386L92.5741 248.5L170.187 114.614L325.425 114.614L403.038 248.5L325.425 382.386L170.187 382.386Z"
                stroke="#950B0B"
                strokeWidth="3"
              />
              <path
                d="M92.2872 337.919L91.9717 158.529L247.486 69.107L403.325 159.081L403.641 338.471L248.126 427.893L92.2872 337.919Z"
                stroke="#630000"
                strokeWidth="3"
              />
              <path
                d="M67.8672 248.179L91.8154 158.439L157.559 92.8288L247.485 68.9285L337.5 93.1456L403.48 158.992L427.745 248.821L403.797 338.561L338.054 404.171L248.127 428.072L158.112 403.855L92.1322 338.008L67.8672 248.179Z"
                stroke="#630000"
                strokeWidth="3"
              />
              <path
                d="M65.4076 297.026L65.3087 199.6L114.107 115.276L198.731 66.6469L296.508 66.7459L381.234 115.548L430.206 199.974L430.305 297.4L381.507 381.724L296.882 430.353L199.106 430.254L114.38 381.452L65.4076 297.026Z"
                stroke="#4E0404"
                strokeWidth="3"
              />
              <path
                d="M55.971 248.303L62.457 198.835L81.5735 152.753L112.018 113.194L151.717 82.8557L197.965 63.8052L247.61 57.3416L297.269 63.9058L343.557 83.0506L383.319 113.471L413.846 153.093L433.057 199.216L439.643 248.697L433.157 298.164L414.041 344.247L383.596 383.806L343.897 414.144L297.65 433.195L248.004 439.658L198.345 433.094L152.057 413.949L112.295 383.529L81.7685 343.907L62.5576 297.784L55.971 248.303Z"
                stroke="#4E0404"
                strokeWidth="3"
              />
            </svg>
          </motion.div>

          {/* About Theme Text */}
          <div className="w-full p-3 md:p-8 lg:p-10 flex items-center justify-center">
            <motion.div
              className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] text-justify"
              initial="initial"
              whileInView="animate"
              variants={textPart}
            >
              TEDxLNMIIT 2025 Theme: Navigating the New. In a world constantly
              evolving, "Navigating the New" represents the journey of embracing
              change, exploring uncharted territories, and seeking growth
              through uncertainty. This theme captures the essence of venturing
              into unknown landscapes—whether in technology, society, or
              personal development—and calls for innovative thinking,
              resilience, and open-mindedness. It invites us to transform
              challenges into opportunities, turning disruption into progress
              and helping us forge new pathways in an ever-changing world.
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Theme;
