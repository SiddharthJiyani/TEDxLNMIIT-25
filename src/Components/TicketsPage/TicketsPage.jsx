"use client";
import { useRef, useEffect, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";
import EventCard from "./Event";

import qrcode from "../../assets/qrcode.png";
export default function TicketBookingPage() {
  const [loading, setLoading] = useState(false);
  const typewriterRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      console.log("Form submitted successfully:", data);
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
      loop: true,
      deleteSpeed: 0,
      typeSpeed: 20, // Adjust typing speed
      cursor: "<span style='color: white;'>|</span>", // White cursor

      onComplete: () => {
        // Optional: You can do something here when typing completes, if needed
        console.log("Typing effect completed.");
      },
    });

    return () => typewriter.stop();
  }, []);

  return (
    <div className=" text-gray-100 px-32 mt-30">
      <div className="relative flex  mt-10">
        <div className="p-5 w-80 h-80 flex justify-center items-center group duration-500 transform -translate-y-24 scale-125 hover:origin-top-left hover:scale-100 hover:rotate-0 hover:skew-x-1 hover:translate-x-6 hover:translate-y-12 -rotate-12 skew-x-0">
          <div className="p-5 relative rounded-2xl w-64 h-36 bg-[radial-gradient(circle_at_50.4%_50.5%,_rgb(251,32,86)_0%,_rgb(135,2,35)_90%)] text-gray-50 flex flex-col justify-center items-center gap-1 group-hover:duration-400 before:absolute before:content-[''] before:rounded-2xl before:bg-neutral-700 before:-skew-x-12 before:right-3 before:top-0 before:w-64 before:h-32 before:-z-10">
            <span className="text-4xl font-amsterdam">Reserve your seat</span>
            <p className="text-amber-300 font-thin">- For TedxLnmiit -</p>
          </div>
        </div>

        <div className="container h-80 overflow-hidden mx-auto px-4 pt-20 pb-32 relative z-10 text-center">
          <h1
            ref={typewriterRef}
            className="text-4xl font-Kaushan Script cursive md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-[radial-gradient(circle_at_50.4%_50.5%,_rgb(251,32,86)_0%,_rgb(135,2,35)_90%)]"
          />
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
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                Step 1: Make the Payment
              </h3>
              <p className="mb-4 text-white">
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
            <div className="bg-black p-6 rounded-lg">
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
                      <label htmlFor={input.id} className="text-white">
                        {input.label}
                      </label>
                      <input
                        id={input.id}
                        name={input.id}
                        type={input.type}
                        required
                        className="w-full bg-gray-800 border border-gray-600 text-gray-100 rounded-lg p-2"
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <label htmlFor="transactionid" className="text-white">
                    Transaction ID
                  </label>
                  <input
                    id="transactionid"
                    name="transactionid"
                    required
                    className="w-full bg-gray-800 border border-gray-600 text-gray-100 rounded-lg p-2"
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
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                Step 3: Confirmation
              </h3>
              <p className="text-white">
                Sit back and relax! Our team will get in touch with you shortly
                to confirm your seat reservation.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-[#f3a7a3] h-[300px]  w-[600px] mx-auto flex flex-col">
        <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#ff4f5c] mb-5 tracking-wide">
            Thank you !
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 font-sans mb-4 tracking-wider">
            Thank you for being a part of TedxLnmiit!
          </p>
          <p className="text-lg sm:text-xl text-gray-500 font-sans mb-8 tracking-wider">
            You should receive a confirmation email soon.
          </p>
          <button className="bg-[#ff4f5c] text-white py-3 px-16 rounded-full shadow-lg text-lg uppercase">
            Go Home
          </button>
        </div>
        <div className="bg-[#fbe0dc] py-2 mt-auto text-center">
          <p className="text-[#ff4f5c] font-sans tracking-wider">
            Email not received?{" "}
            <a href="#" className="font-semibold">
              Click here to send again
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
