import { motion } from "framer-motion";
import Title from "../utility/Title";
import MemberCard from "./MemberCard";
import { useEffect } from "react";

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

const Team = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9, rotate: -10 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    tap: {
      scale: 0.95,
      rotate: -5,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="bg-black py-20 text-center text-white"
      initial="hidden"
      whileInView="show"
      variants={containerVariants}
    >
      {/* Team Section Title */}
      <motion.div variants={itemVariants} whileInView="show">
        <h1 className="text-8xl bg-red-700 w-full">Our Team</h1>
      </motion.div>

      {/* Organizer */}
      <motion.h2
        whileInView="show"
        variants={itemVariants}
        className="text-2xl font-semibold mt-10 mb-6"
      >
        Organizer
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center gap-6"
        whileInView="show"
        variants={containerVariants}
      >
        <motion.div whileInView="show" variants={itemVariants}>
          <MemberCard
            name="Abhey Raheja"
            link="https://www.linkedin.com/in/abhey-raheja"
          />
        </motion.div>
        <motion.div whileInView="show" variants={itemVariants}>
          <MemberCard
            name="Abhinav Singh"
            link="https://www.linkedin.com/in/abhinav-singh"
          />
        </motion.div>
        <motion.div whileInView="show" variants={itemVariants}>
          <MemberCard
            name="Krishna Rohira"
            link="https://www.linkedin.com/in/krishna-rohira"
          />
        </motion.div>
        <motion.div whileInView="show" variants={itemVariants}>
          <MemberCard
            name="Suhani Gupta"
            link="https://www.linkedin.com/in/suhani-gupta"
          />
        </motion.div>
      </motion.div>

      <div className="flex flex-wrap justify-between">
        {/* Website Development Head */}
        <div className="w-full md:w-1/3 px-4">
          <motion.h2
            variants={itemVariants}
            whileInView="show"
            className="text-2xl font-semibold mt-10 mb-6"
          >
            Web Development Head
          </motion.h2>
          <motion.div
            className="flex justify-center gap-6"
            variants={containerVariants}
            whileInView="show"
          >
            <motion.div whileInView="show" variants={itemVariants}>
              <MemberCard
                name="Siddharth Jiyani"
                link="https://www.linkedin.com/in/siddharth-jiyani"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Content Writing Head */}
        <div className="w-full md:w-1/3 px-4">
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold mt-10 mb-6"
          >
            Content Writing Head
          </motion.h2>
          <motion.div
            className="flex justify-center gap-6"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <MemberCard
                name="Sahil Gaur"
                link="https://www.linkedin.com/in/sahil-gaur"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Sponsorship Head */}
        <div className="w-full md:w-1/3 px-4">
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold mt-10 mb-6"
          >
            Sponsorship Head
          </motion.h2>
          <motion.div
            className="flex justify-center gap-6"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <MemberCard
                name="Shreyansh Badoni"
                link="https://www.linkedin.com/in/shreyansh-badoni"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Creative Head */}
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 px-4">
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold mt-10 mb-6"
          >
            Creative Head
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <MemberCard
                name="KrishnaManchanda"
                link="https://www.linkedin.com/in/krishna-manchanda"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <MemberCard
                name="Divay Yadav"
                link="https://www.linkedin.com/in/divay-yadav"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Event Management Head */}
        <div className="w-full md:w-1/2 px-4">
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold mt-10 mb-6"
          >
            Event Management Head
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <MemberCard
                name="Nemil Kamdar"
                link="https://www.linkedin.com/in/nemil-kamdar"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between">
        {/* Web Development */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mt-10 mb-6">Web Development</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <MemberCard
              name="Saanvi Chabaque"
              link="https://www.linkedin.com/in/saanvi-chabaque"
            />
            <MemberCard
              name="Manav Desai"
              link="https://www.linkedin.com/in/manav-desai"
            />
          </div>
        </div>

        {/* Content Writing */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mt-10 mb-6">Content Writing</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <MemberCard
              name="Aryan Jadhav"
              link="https://www.linkedin.com/in/aryan-jadhav"
            />
            <MemberCard
              name="Alisha Malhotra"
              link="https://www.linkedin.com/in/alisha-malhotra"
            />
            <MemberCard
              name="Abdul Hadi"
              link="https://www.linkedin.com/in/abdul-hadi"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between p-6">
        {/* Speaker Outreach */}
        <div className="w-full md:w-1/2 px-4 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Speaker Outreach
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <MemberCard
              name="Anshika Agrawal"
              link="https://www.linkedin.com/in/anshika-agrawal"
            />
            <MemberCard
              name="Sakash Srivastava"
              link="https://www.linkedin.com/in/sakash-srivastava"
            />
            <MemberCard
              name="Priyal Maheshwari"
              link="https://www.linkedin.com/in/priyal-maheshwari"
            />
          </div>
        </div>

        {/* Graphic Designing */}
        <div className="w-full md:w-1/2 px-4 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Graphic Designing
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <MemberCard
              name="Sanskriti Arora"
              link="https://www.linkedin.com/in/sanskriti-arora"
            />
            <MemberCard
              name="Akshat Gupta"
              link="https://www.linkedin.com/in/akshat-gupta"
            />
            <MemberCard
              name="Hussain Haidary"
              link="https://www.linkedin.com/in/hussain-haidary"
            />
          </div>
        </div>
      </div>

      {/* Event Management */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Event Management</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <MemberCard name="Nancy" link="https://www.linkedin.com/in/nancy" />
        <MemberCard
          name="Rahul Sharma"
          link="https://www.linkedin.com/in/rahul-sharma"
        />
        <MemberCard
          name="Naman Agarwal"
          link="https://www.linkedin.com/in/naman-agarwal"
        />
        <MemberCard
          name="Anmol Adwani"
          link="https://www.linkedin.com/in/anmol-adwani"
        />
      </div>

      {/* Sponsorship */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Sponsorship</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <MemberCard
          name="Vihaan Malik"
          link="https://www.linkedin.com/in/vihaan-malik"
        />
        <MemberCard
          name="Parv Khandelwal"
          link="https://www.linkedin.com/in/parv-khandelwal"
        />
        <MemberCard
          name="Pratham Gupta"
          link="https://www.linkedin.com/in/pratham-gupta"
        />
        <MemberCard
          name="Nirmal Patel"
          link="https://www.linkedin.com/in/nirmal-patel"
        />
      </div>

      <div className="flex flex-wrap justify-between p-6">
        {/* Social Media */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Social Media
          </h2>
          <div className="flex justify-center gap-6">
            <MemberCard
              name="Kanishq Malhotra"
              link="https://www.linkedin.com/in/kanishq-malhotra"
            />
          </div>
        </div>

        {/* Video Editing */}
        <div className="w-full md:w-1/2 lg:w-2/3 px-4 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Video Editing
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <MemberCard
              name="Kunal Sharma"
              link="https://www.linkedin.com/in/kunal-sharma"
            />
            <MemberCard
              name="Chirag Mehta"
              link="https://www.linkedin.com/in/chirag-mehta"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
