// import React from "react";
import About from "../About/About"; // Adjust the import paths as needed
import Faq from "../FAQ/Faq";
import Speakers from "../Speakers/Speakers"; // Ensure you import your Speakers component
import PrevSpeakers from "../PrevSpeakers/PrevSpeakers"; // Ensure you import your PrevSpeakers component

const Home = () => {
  return (
    <div className="custom-container">
      {/* Hero Section */}
      <section
        id="hero"
        className="hero-section py-20 h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white"
      >
        <div className="hero-content home-content text-center">
          <div className="hero-title-wrap">
            <h2 className="hero-title text-5xl font-bold mb-4 text-gradient">
              <strong>Uncharted dimensions unlocked.</strong>
            </h2>
            <p className="text-lg">Date: 17 March 2024</p>
            <p className="text-lg">Venue: IMA House, Kaloor</p>

            <div className="hero-buttons mt-8 space-x-4">
              <a
                href="/contact-us"
                className="custom-link bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="custom-link bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
              >
                Buy Tickets
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section
        id="speakers"
        className="speakers-section py-20 h-screen w-full flex flex-col justify-center items-center bg-gray-100"
      >
        {/* <h2 className="section-title text-4xl font-bold text-center mb-10">
          Speakers
        </h2> */}
        <Speakers />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="about-section py-20 h-screen w-full flex flex-col justify-center items-center bg-white"
      >
        {/* <h2 className="section-title text-4xl font-bold text-center mb-10">
          About Us
        </h2> */}
        <About />
      </section>

      {/* Previous Speakers Section */}
      <section
        id="previous-speakers"
        className="prev-speakers-section py-20 h-screen w-full flex flex-col justify-center items-center bg-gray-200"
      >
        {/* <h2 className="section-title text-4xl font-bold text-center mb-10">
          Previous Speakers
        </h2> */}
        <PrevSpeakers />
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="faq-section py-20 h-screen w-full flex flex-col justify-center items-center bg-white"
      >
        <Faq />
      </section>
    </div>
  );
};

export default Home;
