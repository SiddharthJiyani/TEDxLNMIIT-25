import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import About from "../About/About";
import Faq from "../FAQ/Faq";
import Speakers from "../Speakers/SpeakerList";
import PrevSpeakers from "../PrevSpeakers/PrevSpeakers";
import RedButton from "../utility/RedButton";
import CountdownTimer from "../utility/CounterDown";
import birdSvg from "../../assets/Bird.svg";
import Ticket from "../utility/Ticket";
import Youtube from "../utility/Youtube";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Home = () => {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start -0.1", "end 0.5"],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0, 1.5]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [0.8, 5.2]);

  useEffect(() => {
    const canvas = document.getElementById("gridCanvas");
    const ctx = canvas.getContext("2d");
    let startTime = null;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const cellSize = 100; // Size of each grid cell
    const frequency = 0.7; // Wave frequency
    const amplitude = 0.6; // Wave amplitude
    const phaseSpeed = -0.003;

    const rows = Math.ceil(canvas.height / cellSize);
    const columns = Math.ceil(canvas.width / cellSize);

    const drawGrid = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          const x = col * cellSize;
          const y = row * cellSize;
          const phase = elapsed * phaseSpeed;
          const yPos = row / rows;
          const wave =
            Math.sin(yPos * Math.PI * frequency * 2 + phase) * amplitude;
          const normalizedWave = (wave + 1) / 2;

          const red = Math.floor(255 * normalizedWave);
          const alpha = 0.3 + normalizedWave * 0.7;

          ctx.strokeStyle = `rgba(${red}, 0, 0, ${alpha})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.strokeRect(x, y, cellSize, cellSize);
        }
      }

      animationFrameRef.current = requestAnimationFrame(drawGrid);
    };

    animationFrameRef.current = requestAnimationFrame(drawGrid);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="custom-container overflow-hidden relative">
      {/* Hero Section */}
      <section
        id="hero"
        className="hero-section py-20 min-h-screen h-full w-full flex  justify-center items-center text-red-500 relative overflow-hidden md:flex-wrap"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75"
        >
          <source
            src="https://res.cloudinary.com/djodcayme/video/upload/v1732190366/TEDxLNMIIT%2725/Ted_Web_Back_Black_White_compressed_o1lz1l.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div
          className="absolute bottom-0 left-0 w-full h-48 z-10"
          style={{
            background: "linear-gradient(to bottom, transparent, #000000)",
          }}
        ></div>

        {/* Content Over the Video */}
        <div className="hero-content home-content text-center z-10 justify-around items-center w-full xxxs:flex-col xxxs:items-center md:flex-row">
          <div className="flex text-center z-10 justify-around items-center w-full xxxs:flex-col xxxs:items-center md:flex-row">
            {/* Title and Button */}
            <div className="hero-title-wrap xxxs:pl-4 sm:pl-7 xxxs:mr-0 md:mr-56 mb-6 md:mb-0">
              <div>
                <h2 className="hero-title text-6xl sm:text-5xl md:text-6xl xl:text-7xl mb-9 font-Audrey rounded-lg p-1">
                  <strong className="text-[#ff3006]">TEDx</strong>
                  <span className="text-white md:font-light font-normal">
                    LNMIIT 
                  </span>
                </h2>
                <div className="hero-buttons mt-8 space-x-4 font-generalSans">
                  <RedButton to="/buy-tickets">
                    Registrations Open Soon !
                  </RedButton>
                </div>
              </div>
            </div>

            {/* Timer */} 
            <motion.div
              className="border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm p-1 mb-4 md:mt-1 mt-12"
              variants={sectionVariants}
            >
              <CountdownTimer />
            </motion.div>
          </div>

          {/* Theme heading */}
          <div className="w-full mt-10 h-screen bg-transparent font-generalSans flex items-center justify-center">
  <div className="h-full w-full container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative text-center"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-tight">
        <span className="inline-block py-3 sm:py-5 px-2 sm:px-4 bg-clip-text text-transparent animate-red-gradient relative">
          Navigating
          <span className="absolute inset-0 bg-clip-text text-transparent animate-flowing-shine"></span>
        </span>
        <span className="inline-block py-3 sm:py-5 px-2 sm:px-4 bg-clip-text text-transparent animate-white-gradient relative">
          the
          <span className="absolute inset-0 bg-clip-text text-transparent animate-flowing-shine"></span>
        </span>
        <span className="inline-block py-3 sm:py-5 px-2 sm:px-4 bg-clip-text text-transparent animate-red-gradient relative">
          New
          <span className="absolute inset-0 bg-clip-text text-transparent animate-flowing-shine"></span>
        </span>
      </h2>
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

      <section
        id="theme"
        className=" relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-[#1a1a1a]"
        ref={containerRef}
      >
        {/* Gradient Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-48 z-10"
          style={{
            background: "linear-gradient(to top, transparent, #000000)",
          }}
        ></div>

        <canvas
          id="gridCanvas"
          className="absolute inset-0 w-full h-full z-0"
          style={{ backgroundColor: "black" }}
        ></canvas>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: backgroundOpacity,
            scale: backgroundScale,
          }}
        ></motion.div>
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center relative z-10">
          <motion.img
            src={birdSvg}
            alt="Navigating the New"
            className="w-full md:w-1/2 mb-8 md:mb-0 rounded-lg shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="w-full md:w-1/2 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Navigating the <span className="text-[#ff3006]">New</span>
            </h1>
            <p className="text-lg text-red-100 mb-6">
              TEDxLNMIIT 2025 invites you to explore the frontiers of
              innovation, resilience, and discovery.
            </p>
            <ul className="list-disc list-inside text-red-100">
              <li>Embracing change and uncertainty</li>
              <li>Pioneering solutions for global challenges</li>
              <li>Fostering creativity and adaptability</li>
              <li>Building bridges between diverse perspectives</li>
            </ul>
          </motion.div>
        </div>
        {/* Gradient Overlay at the Bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-48 z-10"
          style={{
            background: "linear-gradient(to bottom, transparent, #000000)",
          }}
        ></div>
      </section>

      {/* Other Sections */}
      <motion.section id="speakers" className="py-20 bg-black">
        <Speakers />
      </motion.section>
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

      <Ticket />

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
