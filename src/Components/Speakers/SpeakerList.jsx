import React from "react";
import { motion } from "framer-motion";

import Speakers from "./Speakers";
import Title from "../utility/Title";

import currentspeaker1 from "../../assets/Speakers/speaker1.png";
import currentspeaker2 from "../../assets/Speakers/speaker2.png";
import currentspeaker3 from "../../assets/Speakers/2.png";
import currentspeaker4 from "../../assets/Speakers/6.png";
import currentspeaker5 from "../../assets/Speakers/3.png";
import currentspeaker6 from "../../assets/Speakers/4.png";
import currentspeaker7 from "../../assets/Speakers/5.png";
// import currentspeaker3 from "../../assets/PastSpeakers/speaker3.png";
// import currentspeaker4 from "../../assets/PastSpeakers/speaker4.png";
// import currentspeaker5 from "../../assets/PastSpeakers/speaker5.png";
// import currentspeaker6 from "../../assets/PastSpeakers/speaker6.png";
// import currentspeaker7 from "../../assets/PastSpeakers/speaker7.png";
// import currentspeaker9 from "../../assets/PastSpeakers/speaker9.png";

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
    {
      imgSrc: currentspeaker3, // Update with the correct image source for Preksha Kaparwan
      altText: "Preksha Kaparwan",
      name: "Preksha Kaparwan",
      bio: "Preksha Kaparwan – the dynamic entrepreneur and storyteller revolutionizing the way we access and understand data! As the Co-Founder and CMO of Alphaa AI, she’s on a mission to democratize data using AI and NLP, building a platform that empowers users to interact with data effortlessly. A passionate marketer and a curious technologist, Preksha blends creativity and innovation to drive change.",
      socialHandles: {
        linkedin: "https://www.linkedin.com/in/prekshak/", // Update with actual LinkedIn link if available
        instagram: "https://www.instagram.com/bossymiss/", // Update with actual Instagram link if available
      },
      websiteUrl: "", // Update with the correct website URL for Preksha Kaparwan
    },
    {
      imgSrc: currentspeaker4, // Update with the correct image source for Shelly Jyoti
      altText: "Shelly Jyoti",
      name: "Shelly Jyoti",
      bio: "Shelly Jyoti is a contemporary artist, designer, and poet whose work explores Gandhi's principles of nation-building and moral societies. She collaborates with Ajrakh artisans to revive ancient textile traditions, blending khadi and Ajrakh with modern narratives.",
      socialHandles: {
        linkedin: "", // LinkedIn profile not found
        instagram: "https://www.instagram.com/shellyjyoti1211/", // Instagram profile
      },
      websiteUrl: "https://www.shellyjyoti.com/", // Official website
    },
    {
      imgSrc: currentspeaker5, // Update with the correct image source for Dr. Lopa Mudraa
      altText: "Dr. Lopa Mudraa",
      name: "Dr. Lopa Mudraa",
      bio: "Dr. Lopa Mudraa is a trailblazing Security Evangelist with over two decades of expertise in Information Security, Data Privacy, and Risk Management. Recognized as a 4x Global 100 Chief Information Security Officer awardee, she transforms security into a business enabler, inspiring organizations to achieve growth through secure, trusted platforms.",
      socialHandles: {
        linkedin: "https://www.linkedin.com/in/drlopamudraabasuu/", // LinkedIn profile not found
        instagram: "", // Instagram profile not found
      },
      websiteUrl: "", // Official website not found
    },
    { 
      imgSrc: currentspeaker6, // Update with the correct image source for Dr. Kamna Chhibber
      altText: "Dr. Kamna Chhibber",
      name: "Dr. Kamna Chhibber",
      bio: "Dr. Kamna Chhibber, Head of Mental Health at Fortis Healthcare, is a renowned clinical psychologist with over 15 years of experience specializing in Cognitive Behaviour Therapy, relationships, trauma, and abuse. A passionate advocate for mental health awareness, she is an accomplished author and speaker whose insights have shaped the discourse on mental well-being across leading platforms.",
      socialHandles: {
        linkedin: "https://www.linkedin.com/in/kamna-chhibber-15a18b31/", // LinkedIn profile
        instagram: "https://www.instagram.com/fortismentalhealth/", // Instagram profile
      },
      websiteUrl: "", // Official website not found
    },
    {
      imgSrc: currentspeaker7, // Update with the correct image source for Dr. Ajay Data
      altText: "Dr. Ajay Data",
      name: "Dr. Ajay Data",
      bio: "Dr. Ajay Data, Managing Director of Data Group of Industries, is a visionary entrepreneur who introduced the internet to Rajasthan. As founder of Data XGen Technologies, he developed the world’s first linguistic email solution, driving global digital inclusion.",
      socialHandles: {
        linkedin: "", // LinkedIn profile
        instagram: "https://www.instagram.com/ajaydata/", // Instagram profile
      },
      websiteUrl: "https://www.ajaydata.com/", // Official website
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
