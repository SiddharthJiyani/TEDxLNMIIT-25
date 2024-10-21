import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FaqBox = ({ index, question, answer, isActive, handleClick }) => {
  return (
    <li
      className={`border border-gray-700 p-5 bg-customDark rounded-lg w-full max-w-full ${
        isActive ? "active" : ""
      }`}
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
      {isActive && (
        <div className="faq-answer mt-4 break-words max-w-full h-full">
          <p className="text-base text-gray-300">{answer}</p>
        </div>
      )}
    </li>
  );
};

export default FaqBox;
