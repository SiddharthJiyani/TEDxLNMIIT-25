"use client";

import React from "react";
import { motion } from "framer-motion";
import speaker1 from "../../assets/PastSpeakers/speaker1.png";
import speaker2 from "../../assets/PastSpeakers/speaker2.png";
import speaker3 from "../../assets/PastSpeakers/speaker3.png";
import speaker4 from "../../assets/PastSpeakers/speaker4.png";
import speaker5 from "../../assets/PastSpeakers/speaker5.png";
import speaker6 from "../../assets/PastSpeakers/speaker6.png";
import speaker7 from "../../assets/PastSpeakers/speaker7.png";
import speaker9 from "../../assets/PastSpeakers/speaker9.png";
import Speakers from "./Speakers";
import Title from "../utility/Title";

const SpeakerList = () => {
  const speakers = [
    { imgSrc: speaker1, name: "Dr. Tanu Jain" },
    { imgSrc: speaker2, name: "Krishnan Sunderarajan" },
    { imgSrc: speaker3, name: "Palakh Khanna" },
    { imgSrc: speaker4, name: "Chinmay Gaur" },
    { imgSrc: speaker5, name: "Deepak Pareek" },
    { imgSrc: speaker6, name: "Tejas Patil" },
    { imgSrc: speaker7, name: "Gunjan Saini" },
    { imgSrc: speaker9, name: "Sakshi Mandhyan" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title text="Speakers" />
        </motion.h1>
        <div className="flex items-center justify-center h-screen bg-black">
          <div className="text-center">
            <h1 className="text-white text-6xl md:text-8xl font-bold uppercase">
              {/* Revealing <span className="text-red-600">Soon</span> */}
              <Title text="Revealing" red={"Soon!"} className="text-6xl md:text-8xl font-extrabold"/>
            </h1>
            <p className="text-gray-500 text-lg md:text-2xl mt-4">
              Stay tuned for something exciting!
            </p>
          </div>
        </div>
        {/* <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center mr-16 md:mr-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {speakers.map((speaker, index) => (
            <Speakers
              key={index}
              imgSrc={speaker.imgSrc}
              altText={`Speaker ${index + 1}`}
              name={speaker.name}
            />
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default SpeakerList;
