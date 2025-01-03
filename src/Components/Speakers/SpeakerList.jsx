import React from "react";
import { motion } from "framer-motion";

import Speakers from "./Speakers";
import Title from "../utility/Title";

import currentspeaker1 from "../../assets/Speakers/speaker1.png";
import currentspeaker2 from "../../assets/Speakers/speaker2.png";
import currentspeaker3 from "../../assets/PastSpeakers/speaker3.png";
import currentspeaker4 from "../../assets/PastSpeakers/speaker4.png";
import currentspeaker5 from "../../assets/PastSpeakers/speaker5.png";
import currentspeaker6 from "../../assets/PastSpeakers/speaker6.png";
import currentspeaker7 from "../../assets/PastSpeakers/speaker7.png";
import currentspeaker9 from "../../assets/PastSpeakers/speaker9.png";

const SpeakerList = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const speakersData = [
    {
      imgSrc: currentspeaker1,
      altText: "Anand Megalingam",
      name: "Anand Megalingam",
      bio: "He is the visionary Founder and CEO of Space Zone India, is at the forefront of advancing India's space technology through innovative hybrid propulsion systems. As the architect of India's first reusable hybrid rocket launch, his pioneering efforts have earned him national recognition, including honors from the Prime Minister’s Office and the Young Scientist award.",
      socialHandles: {
        linkedin:
          "https://www.linkedin.com/in/anand-megalingam/?originalSubdomain=in",
        instagram:
          "https://www.instagram.com/anandmegalingamofficial?igsh=MWx0a256cXljY2JmZw==",
      },
      websiteUrl: "https://www.spacezoneindia.com/anand-megalingam-ceo/", // Correct website URL for speaker1
    },
    {
      imgSrc: currentspeaker2, // Update with the correct image source for Aabha Hanjura
      altText: "Aabha Hanjura",
      name: "Aabha Hanjura",
      bio: "She is a celebrated Indian singer-songwriter and founder of the band Sufistication. Having carved a unique niche in music by seamlessly blending Kashmiri folk, Sufi, and contemporary pop, she has earned nationwide acclaim in her journey. Her rendition of the Kashmiri classic 'Hukus Bukus' gained widespread recognition and was featured in the hit OTT series, 'The Family Man.'",
      socialHandles: {
        linkedin: "https://www.linkedin.com/in/aabha-hanjura-94182b15/", // Update with actual LinkedIn link if available
        instagram: "https://www.instagram.com/aabhahanjura/", // Update with actual Instagram link if available
      },
      websiteUrl: "", // Update with the correct website URL for Aabha Hanjura
    },
  ];

  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title text="Speakers" />
        </motion.h1>
        <motion.div
          // className="grid md:block  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center"
          //className="flex mr-14 md:mr-0 items-center flex-wrap gap-8 justify-center sm:w-1/2 lg:w-1/3 xl:w-1/4"
          className="flex mr-14 md:mr-0 items-center flex-wrap gap-8 justify-center "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {speakersData.map((speaker, index) => (
            <Speakers
              key={index}
              imgSrc={speaker.imgSrc}
              altText={speaker.altText}
              name={speaker.name}
              description={speaker.bio}
              instagramUrl={speaker.socialHandles.instagram}
              linkedinUrl={speaker.socialHandles.linkedin}
              websiteUrl={speaker.websiteUrl}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakerList;
