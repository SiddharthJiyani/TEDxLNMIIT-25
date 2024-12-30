import { useState } from "react";
import FaqBox from "./FaqBox"; // Adjust the path if necessary
import Title from "../utility/Title";

function Faq() {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (index) => {
    setActiveSection(index === activeSection ? null : index);
  };


  return (
    <div className="mt-16 min-h-screen flex items-center justify-center bg-black text-white h-screen w-screen">
      <div className="faq-container bg-black text-white px-6 md:px-12 max-w-xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 my-20 text-center text-gray-200">
          <Title text={"Frequently Asked"} red={"Questions"} className="block text-[40px] md:text-5xl" />
        </h2>
        <ul className="mt-10 faq-list space-y-4">
          {/* FAQ Items */}
          {/* <li className=" opacity-0 scale-0 right-0">
            <FaqBox
              index={-1}
              question="What is TEDx?"
              answer="TEDx is a locally organized event that is licensed by TED, allowing communities to host live speakers who share their ideas, experiences, and viewpoints."
              isActive={activeSection === -1}
              handleClick={handleSectionClick}
            />
          </li> */}
          <li>
            <FaqBox
              index={0}
              question="What is TEDx?"
              answer="TEDx is a locally organized event that is licensed by TED, allowing communities to host live speakers who share their ideas, experiences, and viewpoints."
              isActive={activeSection === 0}
              handleClick={handleSectionClick}
            />
          </li>
          <li>
            <FaqBox
              index={1}
              question="How can I attend a TEDx event?"
              answer="To attend a TEDx event, visit the official TEDx website or the page dedicated to the specific event for information on registration, dates, and ticket availability."
              isActive={activeSection === 1}
              handleClick={handleSectionClick}
            />
          </li>
          <li>
            <FaqBox
              index={2}
              question="Are TEDx talks available online?"
              answer="Yes, the majority of TEDx talks are recorded and published on the TEDx YouTube channel and the TEDx website, enabling a worldwide audience to access this inspiring content."
              isActive={activeSection === 2}
              handleClick={handleSectionClick}
            />
          </li>
          <li>
            <FaqBox
              index={3}
              question="What makes TEDx talks different from TED talks?"
              answer="TEDx talks are organized and managed at the local level, whereas TED talks are curated by the main TED organization. While both platforms aim to share ideas, they function on different scales and have distinct structures."
              isActive={activeSection === 3}
              handleClick={handleSectionClick}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Faq;
