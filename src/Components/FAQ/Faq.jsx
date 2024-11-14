import { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import FaqBox from "./FaqBox"; // Adjust the path if needed

function Faq() {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (index) => {
    setActiveSection(index === activeSection ? null : index);
  };

  const variants = {
    initial: {
      y: -100,
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      y: 10,
      opacity: 1,
      scale: 1.1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white h-screen w-screen">
      <div className="mt-14 faq-container bg-black text-white py-10 px-6 md:px-12 max-w-xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-200 ">
          Frequently Asked Questions
        </h2>
        <motion.ul
          className="mt-10 faq-list space-y-6 "
          initial="initial"
          whileInView="animate"
          variants={variants}
        >
          {/* FAQ Item 1 */}
          <motion.li variants={variants} key={0}>
            <FaqBox
              index={0}
              question="What is TEDx?"
              answer="TEDx is a series of independently organized events that bring people together to share ideas worth spreading."
              isActive={activeSection === 0}
              handleClick={handleSectionClick}
            />
          </motion.li>

          {/* FAQ Item 2 */}
          <motion.li variants={variants} key={1}>
            <FaqBox
              index={1}
              question="How can I attend a TEDx event?"
              answer="You can find upcoming TEDx events in your area by visiting the TEDx website or searching online."
              isActive={activeSection === 1}
              handleClick={handleSectionClick}
            />
          </motion.li>

          {/* FAQ Item 3 */}
          <motion.li variants={variants} key={2}>
            <FaqBox
              index={2}
              question="Are TEDx talks available online?"
              answer="Many TEDx talks are available to watch online on the TEDx YouTube channel."
              isActive={activeSection === 2}
              handleClick={handleSectionClick}
            />
          </motion.li>

          {/* FAQ Item 4 */}
          <motion.li variants={variants} key={3}>
            <FaqBox
              index={3}
              question="What makes a TEDx talk different from a TED talk?"
              answer="TEDx talks are independently organized, while TED talks are curated by the TED team. Both formats aim to share ideas worth spreading."
              isActive={activeSection === 3}
              handleClick={handleSectionClick}
            />
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
}

export default Faq;
