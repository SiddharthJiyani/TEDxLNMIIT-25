"use client";
import React, { useRef, useEffect, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";
import "./Footer.css";
import EventCard from "./Event";

import qrcode from "../../assets/qrcode.png";
export default function TicketBookingPage() {
  const [loading, setLoading] = useState(false);
  const typewriterRef = useRef(null);
  // Scroll to top when the page loads
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      console.log("Form submitted successfully:", data);
      // Add form submission logic here
    } catch (err) {
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
      e.currentTarget.reset();
    }
  };

  // Initialize Typewriter effect
  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: ["IN A STORM OF IGNORANCE FIND WISDOM."],
      autoStart: true,
      loop: true, // Don't repeat the typing
      deleteSpeed: 0, // Don't delete characters
      typeSpeed: 10, // Adjust typing speed
      cursor: "<span style='color: white;'>|</span>", // White cursor
      // Stop the typing after all strings are typed
      onComplete: () => {
        // Optional: You can do something here when typing completes, if needed
        console.log("Typing effect completed.");
      },
    });

    return () => typewriter.stop();
  }, []);

  return (
    <div className="min-h-screen h-full text-gray-100 p-32 bg-black">
      {/* Hero Section */}
      <div className="relative  flex ">
        <div className="p-5  w-80 h-80 flex justify-center items-center  group duration-500 -translate-y-24 scale-125 hover:origin-top-left hover:scale-100 -rotate-12 hover:-rotate-0 hover:skew-x-1 skew-x-0 hover:translate-x-6  hover:translate-y-12">
          <div className="p-5 group-hover:duration-400 relative rounded-2xl w-64 h-36 bg-[radial-gradient(circle_at_50.4%_50.5%,_rgb(251,32,86)_0%,_rgb(135,2,35)_90%)] text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12 before:rounded-2xl before:absolute before:content[''] before:bg-neutral-700 before:right-3 before:top-0 before:w-64 before:h-32 before:-z-10">
            <span className="text-4xl font-amsterdam">Reserve your seat</span>
            <p className="text-amber-300 font-thin">- For TedxLnmiit.-</p>
          </div>
        </div>

        <div className="container h-80 overflow-hidden mx-auto px-4 pt-20 pb-32 relative  text-center">
          <h1
            ref={typewriterRef}
            className="text-4xl md:text-6xl font-kaushan font-bold mb-4 text-transparent bg-clip-text bg-[radial-gradient(circle_at_50.4%_50.5%,_rgb(251,32,86)_0%,_rgb(135,2,35)_90%)]"
          ></h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Event Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-500">
            Event Details
          </h2>

          <div className="flex justify-around">
            <EventCard
              title="LNMIIT Students/Faculty"
              price="₹600"
              discount="25% discount applied"
            />
            <EventCard title="General Admission" price="₹800" discount={null} />
          </div>
        </section>

        {/* Steps to Book */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-500">
            Steps to Reserve Your Exclusive Seat
          </h2>
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                Step 1: Make the Payment
              </h3>
              <p className="mb-4 text-gray-300">
                Scan the appropriate QR code to pay the booking amount:
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                {["LNMIIT Students/Faculty", "General Admission"].map(
                  (label, idx) => (
                    <div key={idx} className="text-center">
                      <p className="mb-2 text-gray-400">{label}</p>
                      <div className="bg-white p-4 rounded-lg inline-block">
                        <img src={qrcode}></img>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                Step 2: Fill the Booking Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { id: "name", label: "Name", type: "text" },
                    { id: "email", label: "Email", type: "email" },
                    { id: "phone", label: "Phone Number", type: "tel" },
                    { id: "upiid", label: "UPI ID", type: "text" },
                  ].map((input) => (
                    <div key={input.id} className="space-y-2">
                      <label htmlFor={input.id} className="text-gray-300">
                        {input.label}
                      </label>
                      <input
                        id={input.id}
                        name={input.id}
                        type={input.type}
                        required
                        className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-lg p-2"
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <label htmlFor="transactionid" className="text-gray-300">
                    Transaction ID
                  </label>
                  <input
                    id="transactionid"
                    name="transactionid"
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-lg p-2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg py-2"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Submit Booking"}
                </button>
              </form>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                Step 3: Confirmation
              </h3>
              <p className="text-gray-300">
                Sit back and relax! Our team will get in touch with you shortly
                to confirm your seat reservation.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="">
        <div className="wrapper-1">
          <div className="wrapper-2">
            <h1 className=".h1">Thank you !</h1>
            <p>Thank you for being a part of TedxLnmiit! </p>
            <p>you should receive a confirmation email soon </p>
            <button className="go-home">go home</button>
          </div>
          <div className="footer-like">
            <p>
              Email not received?
              <a href="#">Click here to send again</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
