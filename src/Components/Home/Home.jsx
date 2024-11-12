// import React from "react";
import About from "../About/About"; // Adjust the import paths as needed
import Faq from "../FAQ/Faq";
import Speakers from "../Speakers/Speakers"; // Ensure you import your Speakers component
import PrevSpeakers from "../PrevSpeakers/PrevSpeakers"; // Ensure you import your PrevSpeakers component
import RedButton from "../utility/RedButton";
import Theme from "../Theme/Theme";

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

      <section
        id="theme"
        className="speakers-section py-20 h-screen w-full flex flex-col justify-center items-center bg-black text-red-500"
      >
        <Theme />
      </section>

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
