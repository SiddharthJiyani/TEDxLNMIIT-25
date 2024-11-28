import { motion } from "framer-motion";
import Title from "../utility/Title";
import MemberCard from "./MemberCard";
import { useEffect } from "react";

import Aayana from "../../assets/team/Aayana.png";
import Abdul from "../../assets/team/abdulhadi y23.jpeg";
// import Abhinav from "../../assets/team/abhinav.jpg";
import Abhey from "../../assets/team/Abhey.jpg";
import Adhwaiy from '../../assets/team/Adhway.jpg';
import Aditya from "../../assets/team/Aditya Narula Y24.jpg";
import AdityaJ from "../../assets/team/Aditya Jain.jpg";
import Akshat from "../../assets/team/Akshat.jpg";
import Alisha from "../../assets/team/Alisha Malhotra y23.jpg";
import Anshika from "../../assets/team/Anshika.jpg";
// import Anmol from "../../assets/team/anmol.jpg";
import Aryanjadhav from "../../assets/team/Aryan Jadhav y23.jpg";
import Chirag from "../../assets/team/Chirag Mehta_.jpg";
import Diksha from "../../assets/team/Diksha.jpg";
import Divay from "../../assets/team/Divay.jpg";
import Hussain from "../../assets/team/Hussain.jpg";
import Kanishq from "../../assets/team/Kanishq.png";
import karya from "../../assets/team/karya.jpg";
import Krishna from "../../assets/team/Krishna.jpg";
import Krishnamanchanda from "../../assets/team/KrishnaManchanda.jpg";
import Kunal from "../../assets/team/Kunal Sharma Y23.jpg";
// import Kunal from "../../assets/team/kunal.jpg";
import Manan from "../../assets/team/Manan.png";
import Manav from "../../assets/team/manav.jpg";
import Nancy from "../../assets/team/Nancy.jpg";
import Naman from "../../assets/team/Naman.jpg";
import Nemil from "../../assets/team/Nemil.jpg";
import Nirmal from "../../assets/team/Nirmal.jpg";
import Parv from "../../assets/team/Parv.jpg";
import Poorvi from "../../assets/team/Poorvi jagga y24.jpg";
import Praneel from "../../assets/team/Praneel Dev Y24.png";
import Pranav from "../../assets/team/Pranav.jpg";
import Pratham from "../../assets/team/Pratham_Y23.jpg";
import Priyal from "../../assets/team/Priyal.jpg";
import Rahul from "../../assets/team/Rahul.jpg";
import Saanvi from "../../assets/team/Saanvi.jpg";
import Sakash from "../../assets/team/Sakash.jpg";
import Samar from "../../assets/team/Samar.jpg";
// import Sahil from "../../assets/team/sahil.jpg";
import Sanskriti from "../../assets/team/Sanskriti.jpg";
// import Shreyansh from "../../assets/team/shreyansh.jpg";
import Sid from "../../assets/team/Siddharth.jpg";
// import Siddharth from "../../assets/team/siddharth.jpg";
import Suhani from "../../assets/team/Suhani.jpg";
import Tanay from "../../assets/team/Tanay singhvi y24.JPG";
import Vedha from "../../assets/team/Vedha Sinkar Y24.JPG";
import Vihaan from "../../assets/team/Vihaan.jpg";
import Yash from "../../assets/team/Yash.jpg";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      className="bg-black py-20 text-center text-white overflow-hidden"
      initial="hidden"
      whileInView="show"
      variants={containerVariants}
    >
      {/* Team Section Title */}
      <motion.div variants={itemVariants} whileInView="show">
        {/* <h1 className="text-8xl  w-full"> */}
        <Title text="Our" red={"Team"} className=" !text-6xl md:!text-8xl" />
        {/* </h1> */}
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
            imgSrc={Abhey}
          />
        </motion.div>
        <motion.div whileInView="show" variants={itemVariants}>
          <MemberCard
            name="Abhinav Singh"
            link="https://www.linkedin.com/in/abhinav-singh"
            // imgSrc={Abhinav}
          />
        </motion.div>
        <motion.div whileInView="show" variants={itemVariants}>
          <MemberCard
            name="Krishna Rohira"
            link="https://www.linkedin.com/in/krishna-rohira-537a4524b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BDJR1kpxyQYKtZaUURWNItA%3D%3D"
            imgSrc={Krishna}
          />
        </motion.div>
        <motion.div whileInView="show" variants={itemVariants}>
          <MemberCard
            name="Suhani Gupta"
            link="https://www.linkedin.com/in/suhani-gupta"
            imgSrc={Suhani}
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
            Development Head
          </motion.h2>
          <motion.div
            className="flex justify-center gap-6"
            variants={containerVariants}
            whileInView="show"
          >
            <motion.div whileInView="show" variants={itemVariants}>
              <MemberCard
                name="Siddharth Jiyani"
                link="https://www.linkedin.com/in/siddharth-jiyani-7584a1266/"
                imgSrc={Sid}
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
                // imgSrc={Sahil}
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
                imgSrc={Krishnamanchanda}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <MemberCard
                name="Divay Yadav"
                link="https://www.linkedin.com/in/divay-yadav-52237724b/"
                imgSrc={Divay}
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
                 imgSrc={Nemil}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <hr className="m-5 mx-5"></hr>
      
      {/* Web Development */}
      <div className="w-full md:w-screen px-4">
        <h2 className="text-2xl font-semibold mt-10 mb-6">Web Development</h2>
        <div className="flex flex-wrap justify-center gap-6">
  <MemberCard
    name="Saanvi Chabaque"
    link="https://www.linkedin.com/in/saanvi-chabaque-116060312/"
    imgSrc={Saanvi}
  />
  <MemberCard
    name="Manav Desai"
    link="https://www.linkedin.com/in/manav-desai"
    imgSrc={Manav}
  />
</div>
<hr className="m-5 mx-5" />

{/* Content Writing */}
<div className="w-full md:w-screen px-4">
  <h2 className="text-2xl font-semibold mt-10 mb-6">Content Writing</h2>
  <div className="flex flex-wrap justify-center gap-6">
    <MemberCard
      name="Aryan Jadhav"
      link="https://www.linkedin.com/in/aryan-jadhav"
      imgSrc={Aryanjadhav}
    />
    <MemberCard
      name="Alisha Malhotra"
      link="https://www.linkedin.com/in/alisha-malhotra"
      imgSrc={Alisha}
    />
    <MemberCard
      name="Abdul Hadi"
      link="https://www.linkedin.com/in/abdul-hadi"
      imgSrc={Abdul}
    />
    <MemberCard
      name="Poorvi Jagga"
      link="https://www.linkedin.com/in/poorvi-jagga"
      imgSrc={Poorvi}
    />
    <MemberCard
      name="Praneel Dev"
      link="http://www.linkedin.com/in/praneel-dev-3b9754321"
      imgSrc={Praneel}
    />
  </div>
</div>
<hr className="m-4 mx-5" />

{/* Speaker Outreach */}
<div className="w-full md:w-screen px-4 mb-10">
  <h2 className="text-2xl font-semibold mb-4 text-center">Speaker Outreach</h2>
  <div className="flex flex-wrap justify-center gap-6">
    <MemberCard
      name="Anshika Agrawal"
      link="https://www.linkedin.com/in/anshika-agrawal3379"
      imgSrc={Anshika}
    />
    <MemberCard
      name="Sakash Srivastava"
      link="https://www.linkedin.com/in/sakash-srivastava"
      imgSrc={Sakash}
    />
    <MemberCard
      name="Priyal Maheshwari"
      link="https://www.linkedin.com/in/priyal-maheshwari-001494284"
      imgSrc={Priyal}
    />
    <MemberCard
      name="Aditya Jain"
      link="https://www.linkedin.com/in/adiya-jain"
      imgSrc={AdityaJ}
    />
    <MemberCard
      name="Diksha Sakhi"
      link="https://www.linkedin.com/in/diksha-sakhi"
      imgSrc={Diksha}
    />
  </div>
</div>
<hr className="m-5 mx-5" />

{/* Graphic Designing */}
<div className="w-full md:w-screen px-4 mb-10">
  <h2 className="text-2xl font-semibold mb-4 text-center">Graphic Designing</h2>
  <div className="flex flex-wrap justify-center gap-6">
    <MemberCard
      name="Sanskriti Arora"
      link="https://www.linkedin.com/in/sanskriti-arora-452454293"
      imgSrc={Sanskriti}
    />
    <MemberCard
      name="Akshat Gupta"
      link="https://www.linkedin.com/in/akshat-gupta"
      imgSrc={Akshat}
    />
    <MemberCard
      name="Hussain Haidary"
      link="https://www.linkedin.com/in/hussain-haidary"
      imgSrc={Hussain}
    />
    <MemberCard
      name="Aditya Narula"
      link="https://www.linkedin.com/in/aditya-narula"
      imgSrc={Aditya}
    />
    <MemberCard
      name="Tanay Singhvi"
      link="https://in.linkedin.com/in/tanay-singhvi-3ab754321"
      imgSrc={Tanay}
    />
    <MemberCard
      name="Vedha Sinkar"
      link="https://www.linkedin.com/in/vedha-sinkar-308b4131a/"
      imgSrc={Vedha}
    />
  </div>
</div>
<hr className="m-5 mx-5" />

{/* Event Management */}
<h2 className="text-2xl font-semibold mt-10 mb-6">Event Management</h2>
<div className="flex flex-wrap justify-center gap-6">
  <MemberCard
    name="Nancy"
    link="https://www.linkedin.com/in/nancy"
    imgSrc={Nancy}
  />
  <MemberCard
    name="Rahul Sharma"
    link="https://www.linkedin.com/in/rahul-sharma-346216319"
    imgSrc={Rahul}
  />
  <MemberCard
    name="Naman Agarwal"
    link="https://www.linkedin.com/in/naman-agarwal-53b26030b"
    imgSrc={Naman}
  />
  <MemberCard
    name="Anmol Adwani"
    link="https://www.linkedin.com/in/anmol-adwani"
  />
  <MemberCard
    name="Pranav Vashisth"
    link="https://www.linkedin.com/in/pranav-vashisth"
    imgSrc={Pranav}
  />
  <MemberCard
    name="Samar Goyal"
    link="https://www.linkedin.com/in/samar-goyal-164383314/"
    imgSrc={Samar}
  />
</div>
<hr className="m-5 mx-5" />

{/* Sponsorship */}
<h2 className="text-2xl font-semibold mt-10 mb-6">Sponsorship</h2>
<div className="flex flex-wrap justify-center gap-6">
  <MemberCard
    name="Vihaan Malik"
    link="https://www.linkedin.com/in/vihaan-malik"
    imgSrc={Vihaan}
  />
  <MemberCard
    name="Pratham Gupta"
    link="http://linkedin.com/in/pratham-gupta-86607431b"
    imgSrc={Pratham}
  />
  <MemberCard
    name="Nirmal Patel"
    link="https://www.linkedin.com/in/nirmal-patel-0a8868267"
    imgSrc={Nirmal}
  />
  <MemberCard
    name="Parv Khandelwal"
    link="https://www.linkedin.com/in/parv-khandelwal-918562281"
    imgSrc={Parv}
  />
  <MemberCard
    name="Adwaiy Mahajan"
    link="https://www.linkedin.com/in/adwaiy-mahajan"
    imgSrc={Adhwaiy}
  />
  <MemberCard
    name="Manan Vaish"
    link="https://www.linkedin.com/in/manan-vaish-0ba187313/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BaP163GwIRSyUu77JNQcPWw%3D%3D"
    imgSrc={Manan}
  />
</div>
<hr className="m-5 mx-5" />

{/* Social Media */}
<div className="w-full md:w-screen px-4">
  <h2 className="text-2xl font-semibold mb-4 text-center">Social Media</h2>
  <div className="flex justify-center gap-6">
    <MemberCard
      name="Kanishq Malhotra"
      link="https://www.linkedin.com/in/kanishq-malhotra-47b400294"
      imgSrc={Kanishq}
    />
  </div>
</div>
<hr className="m-5 mx-5" />

{/* Video Editing */}
<div className="w-full md:w-screen px-4">
  <h2 className="text-2xl font-semibold mb-4 text-center">Video Editing</h2>
  <div className="flex flex-wrap justify-center gap-6">
    <MemberCard
      name="Kunal Sharma"
      link="https://www.linkedin.com/in/kunal-sharma"
      imgSrc={Kunal}
    />
    <MemberCard
      name="Chirag Mehta"
      link="https://www.linkedin.com/in/chirag-mehta-97468b213"
      imgSrc={Chirag} />
          <MemberCard
            name="K Arya Sekhar Das"
            link="https://www.linkedin.com/in/intelligentears/"
            imgSrc={karya}
          />
          <MemberCard
            name="Aayana Jain"
            link="https://www.linkedin.com/in/aayana-jain"
            imgSrc={Aayana}
          />
          <MemberCard
            name="Yash"
            link="https://www.linkedin.com/in/yash"
            imgSrc={Yash}
          />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
