import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"; // Import motion

const FaqBox = ({ index, question, answer, isActive, handleClick }) => {
  const variants = {
    initial: {
      opacity: 0,
      height: 0,
      overflow: "hidden",
    },
    animate: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.li
      className={`border border-bordorColor p-5 bg-customDark rounded-lg w-full max-w-full ${
        isActive ? "active" : ""
      }`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      <h3
        className="text-xl font-semibold cursor-pointer flex justify-between items-center w-full"
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
      <motion.div
        className="faq-answer mt-1 break-words max-w-full h-full"
        variants={variants} // Apply animation to the answer container
        initial="initial"
        animate={isActive ? "animate" : "exit"} // Toggle animation based on active state
      >
        {isActive && <p className="text-base text-gray-300">{answer}</p>}
      </motion.div>
    </motion.li>
  );
};

export default FaqBox;
