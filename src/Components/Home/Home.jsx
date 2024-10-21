// import React from "react";
import About from "../About/About"; // Adjust the import paths as needed
import Faq from "../FAQ/Faq";
import Speakers from "../Speakers/Speakers"; // Ensure you import your Speakers component
import PrevSpeakers from "../PrevSpeakers/PrevSpeakers"; // Ensure you import your PrevSpeakers component
import RedButton from "../utility/RedButton";

const Home = () => {
  return (
    <div className="custom-container">
      {/* Hero Section */}
      <section
        id="hero"
        className="hero-section py-20 h-screen w-full flex flex-col justify-center items-center bg-black text-red-500"
      >
        <div className="hero-content home-content text-center">
          <div className="hero-title-wrap">
            <h2 className="hero-title text-5xl font-bold mb-4">
              <strong>Tedx Lnmiit</strong>
            </h2>
            <p className="text-lg">Date: </p>
            <p className="text-lg">Venue: </p>

            <div className="hero-buttons mt-8 space-x-4">
              <RedButton to="/contact-us">Contact Us</RedButton>
              <RedButton to="/buy-tickets">Buy Tickets</RedButton>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black flex justify-center w-full">
        <div className="w-full max-w-[970px] border border-bordorColor rounded-[18px] flex box-border justify-center items-center flex-col sm:flex-row">
          <div className="bg-black flex justify-center items-center h-[50vh] md:h-[80vh] w-full">
            <img
              src="https://www.tedxmec.in/assets/Cube%20Light.jpg"
              className="p-4 md:p-10 w-full max-w-[970px] align-middle block box-border border-none"
              alt="Cube Light"
            />
          </div>

          {/* About theme */}
          <div className="w-full p-4 md:p-10">
            <div className="mb-10 z-10 max-w-[500px] text-white text-base md:text-[18px] leading-[1.5] font-medium font-[Generalsans Medium]">
              TEDxLNMIIT 2025 Theme: Navigating the New In a world constantly
              evolving, "Navigating the New" represents the journey of embracing
              change, exploring uncharted territories, and seeking growth
              through uncertainty. This theme captures the essence of venturing
              into unknown landscapes—whether in technology, society, or
              personal development—and calls for innovative thinking,
              resilience, and open-mindedness. It invites us to transform
              challenges into opportunities, turning disruption into progress
              and helping us forge new pathways in an ever-changing world.
            </div>
            <RedButton to="/">Our Theme</RedButton>
          </div>
        </div>
      </div>

      {/* Speakers Section */}
      <section
        id="speakers"
        className="speakers-section py-20 h-screen w-full flex flex-col justify-center items-center bg-black text-red-500"
      >
        <Speakers />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="about-section py-20 w-full flex flex-col justify-center items-center bg-black text-red-500"
      >
        <About />
      </section>

      {/* Previous Speakers Section */}
      <section
        id="previous-speakers"
        className="prev-speakers-section py-20  w-full flex flex-col justify-center items-center bg-black text-red-500"
      >
        <PrevSpeakers />
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="faq-section py-20  w-full flex flex-col justify-center items-center bg-black text-red-500"
      >
        <Faq />
      </section>
    </div>
  );
};

export default Home;
