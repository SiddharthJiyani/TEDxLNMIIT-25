import { motion } from "framer-motion";
import Title from "../utility/Title";
import MemberCard from "./MemberCard";
import { useEffect } from "react";

import default_photo from "../../assets/team/Default.jpg";
import Manav from "../../assets/team/manav.jpg";
import Sid from "../../assets/team/Siddharth.jpg";
import Abhey from "../../assets/team/Abhey.jpg";
import Abhinav from "../../assets/team/ABHINAV_SINGH.jpg";
import Krishna from "../../assets/team/Krishna.jpg";
import Suhani from "../../assets/team/Suhani.jpg";
import Sahil from "../../assets/team/SahilGaur.png";
// import Shreyansh from "../../assets/team/shreyansh.jpg";
import Krishnamanchanda from "../../assets/team/KrishnaManchanda.jpg";
import Divay from "../../assets/team/Divay.jpg";
//import Nemil from "../../assets/team/Nemil Kamdar.jpg";
import Saanvi from "../../assets/team/Saanvi.jpg";
import Aryanjadhav from "../../assets/team/Aryan Jadhav y23.jpg";
import Alisha from "../../assets/team/AlishaMalhotra.jpg";
import Aayana from "../../assets/team/Aayana.jpg";
import Abdul from "../../assets/team/abdulhadi_y23.jpeg";
import Poorvi from "../../assets/team/Poorvijagga.jpg";
import Praneel from "../../assets/team/PraneelDev.png";
import Anshika from "../../assets/team/Anshika.jpg";
import Sakash from "../../assets/team/Sakash.jpg";
import Priyal from "../../assets/team/Priyal.jpg";
import AdityaJ from "../../assets/team/Aditya Jain.jpg";
import Diksha from "../../assets/team/Diksha.jpg";
import Sanskriti from "../../assets/team/Sanskriti.jpg";
import Akshat from "../../assets/team/Akshat.jpg";
import Hussain from "../../assets/team/Hussain.jpg";
import Vedha from "../../assets/team/Vedha.jpg";
import Aditya from "../../assets/team/AdityaNarula.jpg";
import Tanay from "../../assets/team/Tanaysinghvi.jpg";
import Nancy from "../../assets/team/Nancy.jpg";
import Rahul from "../../assets/team/Rahul.jpg";
import Manan from "../../assets/team/mananvaishy24.jpg";
import Naman from "../../assets/team/Naman.jpg";
import Pranav from "../../assets/team/Pranav.jpg";
import Samar from "../../assets/team/Samar.jpg";
import Anmol from "../../assets/team/Anmol.jpg";
import Vihaan from "../../assets/team/Vihaan.jpg";
import Parv from "../../assets/team/Parv_Y23.jpg";
import Pratham from "../../assets/team/Pratham_Y23.jpg";
import Nirmal from "../../assets/team/Nirmal.jpg";
import Adwaiy from "../../assets/team/Adwaiy.jpg";
// import Kanishq from "../../assets/team/kanishqMalhotraY23.jpg";
// import Kunal from "../../assets/team/kunal.jpg";
// import Chirag from "../../assets/team/chirag.jpg";
import Naren from "../../assets/team/dr-narendra-kumar.jpg";

import Kunal from "../../assets/team/Kunal Sharma Y23.jpg";
import Chirag from "../../assets/team/Chirag Mehta_.jpg";
import Yash from "../../assets/team/Yash.jpg";
import karya from "../../assets/team/karya.jpg";

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
    <motion.div className="bg-red py-10 text-center text-white overflow-hidden">
      {/* Team Section Title */}
      <motion.div>
        {/* <h1 className="text-8xl  w-full"> */}
        <Title text="Our" red={"Team"} className=" !text-6xl md:!text-8xl" />
        {/* </h1> */}
      </motion.div>

      {/* Organizer */}
      <motion.h2
        whileInView="show"
        variants={itemVariants}
        className="text-2xl font-semibold mt-10 mb-6">
        Faculty Mentor
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center gap-6"
        whileInView="show"
        variants={containerVariants}>
        <motion.div whileInView="show" variants={itemVariants}>
          <MemberCard
            name="Dr. Narendra Kumar"
            // link="https://www.linkedin.com/in/abhey-raheja-19a7b525b/"
            imgSrc={Naren}
          />
        </motion.div>
      </motion.div>
      {/* Organizer */}
      <motion.h2
        whileInView="show"
        variants={itemVariants}
        className="text-2xl font-semibold mt-10 mb-6">
        Organizer
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center gap-6"
        whileInView="show"
        variants={containerVariants}>
        <motion.div whileInView="show" variants={itemVariants}>
          <MemberCard
            name="Abhey Raheja"
            link="https://www.linkedin.com/in/abhey-raheja-19a7b525b/"
            imgSrc={Abhey}
          />
        </motion.div>
        <motion.div whileInView="show" variants={itemVariants}>
          <MemberCard
            name="Abhinav Singh"
            link="https://www.linkedin.com/in/abhinav-singh-1b8384250/"
            imgSrc={Abhinav}
          />
        </motion.div>
        <motion.div whileInView="show" variants={itemVariants}>
          <MemberCard
            name="Krishna Rohira"
            link="https://www.linkedin.com/in/krishna-rohira-537a4524b/"
            imgSrc={Krishna}
          />
        </motion.div>
        <motion.div whileInView="show" variants={itemVariants}>
          <MemberCard
            name="Suhani Gupta"
            link="https://www.linkedin.com/in/suhani-gupta-2bb1a2272/"
            imgSrc={Suhani}
          />
        </motion.div>
      </motion.div>

      <div className="flex flex-wrap justify-center">
        {/* Website Development Head */}
        <div className="w-full md:w-1/3 px-4">
          <motion.h2
            variants={itemVariants}
            whileInView="show"
            className="text-2xl font-semibold mt-10 mb-6">
            Development Head
          </motion.h2>
          <motion.div
            className="flex justify-center gap-6"
            variants={containerVariants}
            whileInView="show">
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
            className="text-2xl font-semibold mt-10 mb-6">
            Content Writing Head
          </motion.h2>
          <motion.div
            className="flex justify-center gap-6"
            variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <MemberCard
                name="Sahil Gaur"
                link="https://www.linkedin.com/in/links1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                imgSrc={Sahil}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Creative Head */}
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 px-4">
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold mt-10 mb-6">
            Creative Head
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <MemberCard
                name="Krishna Manchanda"
                link="https://www.linkedin.com/in/krishna-manchanda-544125193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
      </div>
      <hr className="m-5 mx-5"></hr>

      {/* Web Development */}
      <div className="w-full md:w-screenpx-4 mb-10">
        <h2 className="text-2xl font-semibold mt-10 mb-6">Web Development</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <MemberCard
            name="Saanvi Chabaque"
            link="https://www.linkedin.com/in/saanvi-chabaque-116060312/?originalSubdomain=in"
            imgSrc={Saanvi}
          />
          <MemberCard
            name="Manav Desai"
            link="https://www.linkedin.com/in/manav-desai-985aab326/"
            imgSrc={Manav}
          />
        </div>
      </div>
      <hr className="m-5 mx-5"></hr>
      {/* Content Writing */}
      <div className="w-full md:w-screenpx-4 mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Content Writing
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <MemberCard
            name="Aryan Jadhav"
            link="https://www.linkedin.com/in/aryan-jadhav-04020b296/?originalSubdomain=in"
            imgSrc={Aryanjadhav}
          />
          <MemberCard
            name="Alisha Malhotra"
            link="https://www.linkedin.com/in/alisha-malhotra-746a212a5/?originalSubdomain=in"
            imgSrc={Alisha}
          />
          <MemberCard
            name="Abdul Hadi"
            link="https://www.linkedin.com/in/abdul-hadi-siddiqui-145850295/"
            imgSrc={Abdul}
          />
          <MemberCard
            name="Poorvi Jagga"
            link="https://www.linkedin.com/in/poorvi-jagga-ba6b9b341/"
            imgSrc={Poorvi}
          />
          <MemberCard
            name="Praneel Dev"
            link="http://www.linkedin.com/in/praneel-dev-3b9754321"
            imgSrc={Praneel}
          />
        </div>
      </div>
      <hr className="m-4 mx-5"></hr>

      {/* Speaker Outreach */}
      <div className="w-full md:w-screenpx-4 mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Speaker Outreach
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <MemberCard
            name="Anshika Agrawal"
            link="http://www.linkedin.com/in/anshika-agrawal3379"
            imgSrc={Anshika}
          />
          <MemberCard
            name="Sakash Srivastava"
            link="https://www.linkedin.com/in/sakash-srivastava"
            imgSrc={Sakash}
          />
          <MemberCard
            name="Priyal Maheshwari"
            link="https://www.linkedin.com/in/priyal-maheshwari-001494284/"
            imgSrc={Priyal}
          />

          <MemberCard
            name="Aditya Jain"
            link="https://www.linkedin.com/in/aditya-jain-790743322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            imgSrc={AdityaJ}
          />

          <MemberCard
            name="Diksha Sakhi"
            link="https://www.linkedin.com/in/diksha-sakhi-a60b62334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            imgSrc={Diksha}
          />
        </div>
      </div>

      <hr className="m-5 mx-5"></hr>
      {/* Graphic Designing */}
      <div className="w-full md:w-screenpx-4 mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Graphic Designing
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <MemberCard
            name="Sanskriti Arora"
            link="https://www.linkedin.com/in/sanskriti-arora-452454293/"
            imgSrc={Sanskriti}
          />
          <MemberCard
            name="Akshat Gupta"
            link="https://www.linkedin.com/in/akshat-gupta-0a5937231/"
            imgSrc={Akshat}
          />
          <MemberCard
            name="Hussain Haidary"
            link="https://www.linkedin.com/in/hussain-haidary-44610b286/"
            imgSrc={Hussain}
          />

          <MemberCard
            name="Aditya Narula"
            link="https://www.linkedin.com/in/aditya-narula-b36057301"
            imgSrc={Aditya}
          />
          <MemberCard
            name="Tanay Singhvi"
            link="https://www.linkedin.com/in/tanay-singhvi"
            imgSrc={Tanay}
          />
          <MemberCard
            name="Vedha Sinkar"
            link="https://www.linkedin.com/in/vedha-sinkar-308b4131a/"
            imgSrc={Vedha}
          />
        </div>
      </div>
      <hr className="m-5 mx-5"></hr>
      {/* Event Management */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Event Management</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <MemberCard
          name="Nancy"
          link="https://www.linkedin.com/in/nancy-garg-781734237/"
          imgSrc={Nancy}
        />
        <MemberCard
          name="Rahul Sharma"
          link="https://www.linkedin.com/in/rahul-sharma-346216319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          imgSrc={Rahul}
        />
        <MemberCard
          name="Naman Agarwal"
          link="https://www.linkedin.com/in/naman-agarwal-53b26030b/"
          imgSrc={Naman}
        />
        <MemberCard
          name="Anmol Adwani"
          link="https://www.linkedin.com/in/anmol-adwani-727ba72a3/"
          imgSrc={Anmol}
        />
        <MemberCard
          name="Pranav Vashisth"
          link="https://www.linkedin.com/in/pranav-vashisth-2b7906320/"
          imgSrc={Pranav}
        />
        <MemberCard
          name="Samar Goyal"
          link="https://www.linkedin.com/in/samar-goyal-164383314/"
          imgSrc={Samar}
        />
      </div>

      <hr className="m-5 mx-5"></hr>
      {/* Sponsorship */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Sponsorship</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <MemberCard
          name="Vihaan Malik"
          link="https://www.linkedin.com/in/vihaan-malik"
          imgSrc={Vihaan}
        />
        <MemberCard
          name="Parv Khandelwal"
          link="https://www.linkedin.com/in/parv-khandelwal-918562281/"
          imgSrc={Parv}
        />
        <MemberCard
          name="Pratham Gupta"
          link="http://linkedin.com/in/pratham-gupta-86607431b"
          imgSrc={Pratham}
        />
        <MemberCard
          name="Nirmal Patel"
          link="https://www.linkedin.com/in/nirmal-patel-0a8868267/"
          imgSrc={Nirmal}
        />
        <MemberCard
          name="Adwaiy Mahajan"
          link="https://www.linkedin.com/in/adwaiy-mahajan-107503212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          imgSrc={Adwaiy}
        />
        <MemberCard
          name="Manan Vaish"
          link="https://www.linkedin.com/in/manan-vaish-0ba187313/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BaP163GwIRSyUu77JNQcPWw%3D%3D"
          imgSrc={Manan}
        />
      </div>

      <hr className="m-5 mx-5"></hr>
      {/* Social Media */}
      <div className="w-full md:w-screen px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Social Media
        </h2>
        <div className="flex justify-center gap-6">
          <MemberCard
            name="Kanishq Malhotra"
            link="https://www.linkedin.com/in/kanishq-malhotra-47b400294/"
            imgSrc={
              "https://res.cloudinary.com/dedcazsvk/image/upload/v1733962321/KanishqmalhotraY23_gw3mfd.jpg"
            }
          />
        </div>
      </div>
      <hr className="m-5 mx-5"></hr>
      {/* Video Editing */}
      <div className="w-full md:w-screenpx-4 mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Video Editing
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <MemberCard
            name="Kunal Sharma"
            link="https://www.linkedin.com/in/kunal-sharma-8a4121333/"
            imgSrc={Kunal}
          />
          <MemberCard
            name="Chirag Mehta"
            link="https://www.linkedin.com/in/chirag-mehta-97468b213/"
            imgSrc={Chirag}
          />
          <MemberCard
            name="K Arya Sekhar Das"
            link="https://www.linkedin.com/in/intelligentears/"
            imgSrc={karya}
          />
          <MemberCard
            name="Aayana Jain"
            link="https://www.linkedin.com/in/aayana-jain-aa8902321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            imgSrc={Aayana}
          />

          <MemberCard
            name="Yash"
            link="https://www.linkedin.com/in/yash-jain-agkj11"
            imgSrc={Yash}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
