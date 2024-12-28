"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import Title from "../utility/Title";
import qr from "../../assets/qrcode.png";

const Button = ({ children, className, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${className}`}
    style={{
      boxShadow: "0 0 15px rgba(239, 68, 68, 0.5)",
    }}
    {...props}
  >
    {children}
  </motion.button>
);

const Card = ({ children, className, ...props }) => (
  <div
    className={`bg-black bg-opacity-50 backdrop-blur-md rounded-2xl p-6 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const SVGIcon = ({ d, className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-6 h-6 ${className}`}
  >
    <path d={d} />
  </svg>
);

export default function TicketBookingPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stars.png')] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" />
          <div
            className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
            style={{ animationDelay: "4s" }}
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto w-5/6 px-4 py-12 sm:py-24 mt-16 md:mt-0"
      >
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-[#ff2a05] text-[#ff2a05]">
            TEDx<span className="text-white">LNMIIT</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-300">
            Date: 11
            <span>
              <sup>th</sup>
            </span>{" "}
            January 2025 | LNMIIT, JAIPUR
          </p>
          <div class="relative bg-gradient-to-l from-transparent via-red-600 to-transparent text-white py-4 px-6 rounded-lg">
            <div class="flex justify-center items-center">
              <span class="text-xl font-semibold">Book Your Ticket Now</span>
            </div>

            <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-500">
            <Title
              text={"Choose Your"}
              red={"Experience"}
              className="!text-5xl"
            />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "LNMIIT Students/Staff ",
                price: "₹799",
                // discount: "25% discount applied",
                formlink: "#",
              },
              {
                title: "General Admission",
                price: "₹999",
                discount: null,
                formlink: "#",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="shadow-[0_0_21px_0px_#ef2800] hover:shadow-[0_0_30px_0px_#ef2800] transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-center text-gray-100 mb-4">
                    {item.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                    <li>Access to all TEDxLNMIIT talks and workshops</li>
                    {item.title === "General Admission" ? (
                      <li className="text-justify">
                        LNMIIT campus experience and student exposure
                      </li>
                    ) : null}
                    <li>Interaction sessions with speakers</li>
                    <li>Delicious meal and refreshments</li>
                    <li>Exclusive TEDxLNMIIT experience</li>
                    <li>
                      Exciting complimentary goodies including a t-shirt, a
                      bottle &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and a badge
                    </li>
                  </ul>
                  <div className={`border-t border-gray-600 my-4 ${item.price==="₹799"?"mt-12":""}`}></div>
                  <p className={`text-3xl font-bold text-center text-red-500 `}>
                    {item.price}
                  </p>
                  {item.discount && (
                    <p className="text-sm text-center text-gray-400">
                      {item.discount}
                    </p>
                  )}
                  <img src={qr} className="h-44 w-44 mx-auto m-5"></img>
                  <div className="mt-5 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        Buy Now
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Why Attend TEDxLNMIIT?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
                title: "Inspiring Talks",
                description: "Engage with thought-provoking ideas",
              },
              {
                icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
                title: "Networking",
                description: "Connect with like-minded individuals",
              },
              {
                icon: "M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z",
                title: "Exclusive Goodies",
                description: "Take home memorable souvenirs",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-zinc-700 bg-opacity-40 backdrop-blur-sm p-6 rounded-lg text-center"
              >
                <SVGIcon
                  d={item.icon}
                  className="w-12 h-12 mx-auto mb-4 text-red-500"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Event Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z",
                title: "Keynote Speakers",
              },
              {
                icon: "M21 3H3c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h5v2h8v-2h5c1.11 0 1.99-.89 1.99-2L23 5c0-1.11-.89-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z",
                title: "Interactive Sessions",
              },
              {
                icon: "M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z",
                title: "Networking Events",
              },
              {
                icon: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
                title: "Fun Activities",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-zinc-700 bg-opacity-40 backdrop-blur-sm p-4 rounded-lg text-center"
              >
                <SVGIcon
                  d={item.icon}
                  className="w-10 h-10 mx-auto mb-3 text-red-500"
                />
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}
