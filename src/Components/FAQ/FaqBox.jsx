import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion"; // Add AnimatePresence for exit animations

const FaqBox = ({ index, question, answer, isActive, handleClick }) => {
  const answerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      overflow: "hidden",
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <li
      className="border border-gray-700 p-6 bg-gray-900 rounded-lg w-full"
    >
      <h3
        className="text-xl font-semibold cursor-pointer flex justify-between items-center"
        onClick={() => handleClick(index)}
      >
        {question}
        <span className="text-red-500">
          {isActive ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </span>
      </h3>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="faq-answer mt-3 text-gray-300"
            variants={answerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default FaqBox;
