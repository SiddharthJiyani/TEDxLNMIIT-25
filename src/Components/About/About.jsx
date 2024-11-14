import { motion } from "framer-motion"; // Import motion

const About = () => {
  // Define animation variants
  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1.1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  // Card Variants with Different Directions and Delays
  const cardVariant1 = {
    initial: { opacity: 0, scale: 0.5, rotateY: 90 },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const cardVariant2 = {
    initial: { opacity: 0, scale: 0.5, rotateY: 90 },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <motion.section
      className="bg-black text-white py-10 px-8"
      initial="initial"
      whileInView="animate"
      variants={sectionVariants}
    >
      <div className="mt-14 container mx-auto">
        {/* About TEDx Heading */}
        <motion.h1
          className="text-5xl font-bold text-gray-200 mb-12 text-center"
          initial="initial"
          whileInView="animate"
          variants={sectionVariants}
        >
          About TEDx
        </motion.h1>

        {/* First Card */}
        <motion.div
          className="bg-customDark p-10 rounded-xl mb-8 shadow-lg border border-bordorColor max-w-4xl  mx-auto"
          initial="initial"
          whileInView="animate"
          variants={cardVariant1}
        >
          <motion.div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-white rounded-full mr-4 flex items-center justify-center">
              <span className="text-black font-bold text-lg">
                <img
                  src="https://static.thenounproject.com/png/4411728-200.png"
                  alt="TEDx Icon"
                />
              </span>
            </div>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-red-800 to-red-400 text-transparent bg-clip-text ">
              WHAT IS TEDx
            </h2>
          </motion.div>
          <motion.p
            className="text-white text-justify "
            initial="initial"
            whileInView="animate"
            variants={cardVariant1}
          >
            TEDx is a series of independently organized events under a license
            from TED, the globally recognized platform dedicated to sharing
            ideas that matter. While TED is renowned for its flagship annual
            conferences, where influential voices from all fields come together,
            TEDx allows local communities to create their own events inspired by
            TED's mission of "Ideas Worth Spreading." These events unite
            individuals to ignite discussions, foster creativity, and promote a
            culture of curiosity and openness. TEDx showcases live speakers,
            performances, and pre-recorded TED Talks, providing a platform for
            passionate thinkers to present their insights and innovations to
            a wider audience.
          </motion.p>
        </motion.div>

        {/* Second Card */}
        <motion.div
          className="bg-customDark p-10 rounded-xl shadow-lg border border-bordorColor max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          variants={cardVariant2}
        >
          <div className="flex items-center mb-4">
            <div className="w-[35px] h-8 bg-white rounded-full mr-4 flex items-center justify-center">
              <span className="text-black font-bold text-lg">
                <img
                  src="https://static.thenounproject.com/png/4411728-200.png"
                  alt="TEDx Icon"
                />
              </span>
            </div>

            <h2 className="text-xl font-bold bg-gradient-to-r from-red-900 to-red-500 text-transparent bg-clip-text ">
              X = independently organized event
            </h2>
          </div>
          <p className="text-white text-justify">
            TEDxLnmiit stands for the mission of TED - to propagate ideas potent
            enough to change mindsets, inspire youth at large, and equip them to
            crave a better living, beneficial for themselves and the society
            they dwell in. TEDxLnmiit features engaging talks inspiring people
            ranging from veteran performers and social reformers to young
            innovators. It serves as a stage for promoting fresh thoughts and
            inspiring innovation.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
