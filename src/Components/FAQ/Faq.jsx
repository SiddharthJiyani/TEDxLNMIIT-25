import { useState } from "react";

function Faq() {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (index) => {
    setActiveSection(index === activeSection ? null : index);
  };

  return (
    <div className="faq-container bg-gray-900 text-white py-10 px-6 md:px-12">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-200">
        Frequently Asked Questions
      </h2>
      <ul className="faq-list space-y-4 max-w-2xl mx-auto">
        {/* FAQ Item 1 */}
        <li
          className={`border-b border-gray-700 pb-4 ${
            activeSection === 0 ? "active" : ""
          }`}
        >
          <h3
            className="text-xl font-semibold cursor-pointer flex justify-between items-center"
            onClick={() => handleSectionClick(0)}
          >
            What is TEDx?
            <span className="text-red-500">
              {activeSection === 0 ? "-" : "+"}
            </span>
          </h3>
          {activeSection === 0 && (
            <div className="faq-answer mt-4">
              <p className="text-gray-300">
                TEDx is a series of independently organized events that bring
                people together to share ideas worth spreading.
              </p>
            </div>
          )}
        </li>

        {/* FAQ Item 2 */}
        <li
          className={`border-b border-gray-700 pb-4 ${
            activeSection === 1 ? "active" : ""
          }`}
        >
          <h3
            className="text-xl font-semibold cursor-pointer flex justify-between items-center"
            onClick={() => handleSectionClick(1)}
          >
            How can I attend a TEDx event?
            <span className="text-red-500">
              {activeSection === 1 ? "-" : "+"}
            </span>
          </h3>
          {activeSection === 1 && (
            <div className="faq-answer mt-4">
              <p className="text-gray-300">
                You can find upcoming TEDx events in your area by visiting the
                TEDx website or searching online.
              </p>
            </div>
          )}
        </li>

        {/* FAQ Item 3 */}
        <li
          className={`border-b border-gray-700 pb-4 ${
            activeSection === 2 ? "active" : ""
          }`}
        >
          <h3
            className="text-xl font-semibold cursor-pointer flex justify-between items-center"
            onClick={() => handleSectionClick(2)}
          >
            Are TEDx talks available online?
            <span className="text-red-500">
              {activeSection === 2 ? "-" : "+"}
            </span>
          </h3>
          {activeSection === 2 && (
            <div className="faq-answer mt-4">
              <p className="text-gray-300">
                Many TEDx talks are available to watch online on the TEDx
                YouTube channel.
              </p>
            </div>
          )}
        </li>

        {/* FAQ Item 4 */}
        <li
          className={`border-b border-gray-700 pb-4 ${
            activeSection === 3 ? "active" : ""
          }`}
        >
          <h3
            className="text-xl font-semibold cursor-pointer flex justify-between items-center"
            onClick={() => handleSectionClick(3)}
          >
            What makes a TEDx talk different from a TED talk?
            <span className="text-red-500">
              {activeSection === 3 ? "-" : "+"}
            </span>
          </h3>
          {activeSection === 3 && (
            <div className="faq-answer mt-4">
              <p className="text-gray-300">
                TEDx talks are independently organized, while TED talks are
                curated by the TED team. Both formats aim to share ideas worth
                spreading.
              </p>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Faq;
