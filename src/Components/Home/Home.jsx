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
        className="hero-section py-20 h-screen w-full flex flex-col justify-center items-center bg-black text-red-500">
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


      <div className="bg-black flex justify-center w-full ">
        <div className="w-5/6 border-[1px] border-bordorColor rounded-[18px] flex box-border justify-center items-center">
          <div className="bg-black flex justify-center items-center h-80">
            <img
              src="https://www.tedxmec.in/assets/Cube%20Light.jpg"
              className="p-[100px_40px] w-[970px] max-w-full align-middle block box-border border-none"
              alt="Cube Light"
            />
          </div>

          {/* About theme */}
          <div className="w-full p-[80px_60px] ">
            <div className="mb-[40px] z-10 max-w-[500px] text-white text-[18px] leading-[28px] font-medium font-[Generalsans Medium]">
              Our voyage through existence is an intricate tapestry woven with
              the threads of philosophical inquiry, personal growth, and shared
              experiences. At TEDxLNMIIT, we journey on a profound exploration of
              the multidimensional nature of human existence. Our vision is to
              build a platform where you can forge connections and build
              conversations that explore multifaceted humanness. Through fervent
              words and engagement, we foster a community where philosophical
              inquiry into the fundamentals of life is celebrated.
            </div>
            <RedButton to="/Our Theme">Our Theme</RedButton>
          </div>
        </div>
      </div>

      {/* Speakers Section */}
      <section
        id="speakers"
        className="speakers-section py-20 h-screen w-full flex flex-col justify-center items-center bg-black text-red-500">
        <Speakers />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="about-section py-20 h-screen w-full flex flex-col justify-center items-center bg-black text-red-500">
        <About />
      </section>

      {/* Previous Speakers Section */}
      <section
        id="previous-speakers"
        className="prev-speakers-section py-20  w-full flex flex-col justify-center items-center bg-black text-red-500">
        <PrevSpeakers />
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="faq-section py-20  w-full flex flex-col justify-center items-center bg-black text-red-500">
        <Faq />
      </section>
    </div>
  );
};

export default Home;
