import { motion } from "framer-motion";
// import img from "../../assets/pic1.jpg";
import PrevBox from "../PrevSpeakers/PrevBox";
import RedButton from "../utility/RedButton";
import { useEffect } from "react";
import img from "../../assets/tednewlogo.png"


const Gallery = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20, scale: 0.7 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-black backdrop-blur-md pb-10">
      <div className="mt-24 w-full top-20 backdrop-blur-md">
        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <PrevBox
                imgSrc={img}
                className=" xxxs:ml-8 xxs:ml-10 xs:ml-14 sm:gap-1"
              />
            </motion.div>
          ))}
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-4">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index + 3}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <PrevBox imgSrc={img} className=" xxxs:ml-8 xxs:ml-10 xs:ml-14" />
            </motion.div>
          ))}
        </div>
        {/* Third Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-4">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index + 6}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <PrevBox imgSrc={img} className=" xxxs:ml-8 xxs:ml-10 xs:ml-14" />
            </motion.div>
          ))}
        </div>
        {/* Fourth Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-4">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index + 9}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <PrevBox imgSrc={img} className=" xxxs:ml-8 xxs:ml-10 xs:ml-14" />
            </motion.div>
          ))}
        </div>
      </div>
      {/* <RedButton>Click for More Photos</RedButton> */}
    </div>
  );
};

export default Gallery;
