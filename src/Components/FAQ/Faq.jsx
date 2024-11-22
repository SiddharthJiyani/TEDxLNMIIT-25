import { useState } from "react";
import FaqBox from "./FaqBox"; // Adjust the path if necessary
import Title from "../utility/Title";

function Faq() {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (index) => {
    setActiveSection(index === activeSection ? null : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white h-screen w-screen">
      <div className="mt-14 faq-container bg-black text-white py-10 px-6 md:px-12 max-w-xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-200">
          <Title text={"Frequently Asked"} red={"Questions"} className="text-2xl" />
        </h2>
        <ul className="mt-10 faq-list space-y-6">
          {/* FAQ Items */}
          <li>
            <FaqBox
              index={0}
              question="What is TEDx?"
              answer="TEDx is a series of independently organized events that bring people together to share ideas worth spreading."
              isActive={activeSection === 0}
              handleClick={handleSectionClick}
            />
          </li>
          <li>
            <FaqBox
              index={1}
              question="How can I attend a TEDx event?"
              answer="You can find upcoming TEDx events in your area by visiting the TEDx website or searching online."
              isActive={activeSection === 1}
              handleClick={handleSectionClick}
            />
          </li>
          <li>
            <FaqBox
              index={2}
              question="Are TEDx talks available online?"
              answer="Many TEDx talks are available to watch online on the TEDx YouTube channel."
              isActive={activeSection === 2}
              handleClick={handleSectionClick}
            />
          </li>
          <li>
            <FaqBox
              index={3}
              question="What makes a TEDx talk different from a TED talk?"
              answer="TEDx talks are independently organized, while TED talks are curated by the TED team. Both formats aim to share ideas worth spreading."
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
