"use client";

import { useEffect, useState } from "react";
import stars from "./stars.png";
import qr from "./qrcode.png";
import Button from "../Footer/Button";
export default function TicketBookingPage() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setLoading(true);
    // try {
    //   const formData = new FormData(e.currentTarget);
    //   const data = Object.fromEntries(formData.entries());
    //   console.log("Form submitted successfully:", data);
    //   // Handle data submission logic here
    // } catch (err) {
    //   alert("Error submitting form. Please try again.");
    // } finally {
    //   setLoading(false);
    //   e.currentTarget.reset();
    // }
  };

  // When the page loads, scroll to the top
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Delay of 100ms, adjust as necessary
  }, []);
  


  return (
    <div className="min-h-screen text-gray-100">
        <div className="container mx-auto  p-24">
        {/* Event Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-500">
            Grab Your Tickets Now!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
  {[
    {
      title: "LNMIIT Students/Faculty",
      price: "₹799",
      discount: "25% discount applied",
      formlink: "#"  // Link to the form for LNMIIT Students/Faculty
    },
    {
      title: "General Admission",
      price: "₹999",
      discount: null,
      formlink: "#"  // Link to the form for General Admission
    },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-black p-10 rounded-lg border-gray-700 shadow-[0_0_21px_0px_#ef2800] ease-in-out transform hover:shadow-[0_0_30px_0px_#ef2800] h-[550px] md:w-[320px] mx-auto"
    >
      <h3 className="text-2xl font-bold text-center text-gray-100 mb-4">
        {item.title}
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
        <li>Access to all TEDxLNMIIT talks and workshops</li>
        <li>Interaction sessions with speakers</li>
        <li>Delicious meals and refreshments</li>
        <li>Exclusive TEDxLNMIIT experiences</li>
        <li>Exciting Goodies absolutely free</li>
      </ul>
      <div className="border-t border-gray-600 my-4"></div>
      <p className="text-3xl font-bold text-center text-red-400">
        {item.price}
      </p>
      {item.discount && (
        <p className="text-sm text-center text-gray-400">
          {item.discount}
        </p>
      )}
      <div className="mt-5 flex justify-center">
        {/* Wrap Button in an Anchor tag to open the form */}
        <a href={item.formlink}>
          <Button buttonLabel="Buy Now" />
        </a>
      </div>
    </div>
  ))}
</div>

        </section>

        {/* Steps to Book 
        <section className="mb-16 flex-col h-full w-full justify-center items-center ">
          <h2 className="text-3xl font-bold text-center mb-8 text-white p-10">
            STEPS TO RESERVE YOUR EXCLUSIVE SEAT.
            <div className="line bg-white h-1 w-full mt-4"></div>
          </h2>

          <div className="flex flex-col items-center justify-center space-y-20">
            {/* Step 1 
            <div className="bg-black mt-8 rounded-lg w-full max-w-3xl md:p-10  ">
              <h3 className="text-xl text-center font-semibold mb-4 text-white">
                Step-1: Kindly pay the booking amount by scanning the
                appropriate QR Code.
              </h3>
              <p className="mb-4 text-gray-300 text-center">
                Scan the appropriate QR code to pay the booking amount:
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                {/* QR Code for LNMIIT Students/Faculty 
                <div className="text-center">
                  <h1 className="mb-2 text-2xl font-semibold text-white">
                    (LNMIIT Students/Faculty)
                  </h1>
                  <div className="bg-white p-4 rounded-lg inline-block">
                    <img src={qr} alt="QR Code" className="w-32 h-32" />
                  </div>
                </div>
                {/* QR Code for General Admission 
                <div className="text-center">
                  <h1 className="mb-2 text-2xl font-semibold text-white">
                    (Not Affiliated to LNMIIT)
                  </h1>
                  <div className="bg-white p-4 rounded-lg inline-block">
                    <img src={qr} alt=" QR Code" className="w-32 h-32" />
                  </div>
                </div>
              </div>

              <div className="bg-black p-6 rounded-lg">
                <h3 className="text-xl md:text-lg text-center font-semibold mb-4 text-white">
                  Step-2: Fill the Booking Form.
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
                        <label
                          htmlFor={input.id}
                          className="text-gray-300 text-sm md:text-base"
                        >
                          {input.label}
                        </label>
                        <input
                          id={input.id}
                          name={input.id}
                          type={input.type}
                          required
                          className="w-full bg-black border border-gray-600 text-gray-100 rounded-lg p-2"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="transactionid"
                      className="text-gray-300 text-sm md:text-base"
                    >
                      Transaction ID
                    </label>
                    <input
                      id="transactionid"
                      name="transactionid"
                      required
                      className="w-full bg-black border border-gray-600 text-gray-100 rounded-lg p-2"
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

              {/* Step 3 
              <div className="mt-8 bg-black p-6 rounded-lg">
                <h3 className="text-xl md:text-lg text-center font-semibold mb-4 text-white">
                  Step-3: Sit back and relax! Our team will get in touch with
                  you shortly to confirm your seat reservation in one of the
                  finest conferences.
                </h3>
                <p className=" text-center text-gray-300 text-sm md:text-base">
                  We thank you for being a part of and supporting TEDxLNMIIT.
                </p>
              </div>
            </div>
          </div>
        </section>
        */}
      </div>
      {/* Hero Section */}
      <section className="mb-16 flex flex-col w-full justify-center items-start relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${stars})`,
            filter: "blur(2px)", // Apply blur to the background image
            zIndex: -1, // Ensure the background stays behind all other content
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto pt-10 pb-8 sm:p-4 md:pt-20 md:pb-32 md:px-4 relative z-10 text-center">
          <div className="h-3/5 w-full mx-auto">
            {/* <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
              IN A STORM OF IGNORANCE,{" "}
              <span className="text-white">FIND WISDOM</span>.
            </h1> */}
          </div>
          <div className="flex justify-center items-center flex-col h-full w-full">
  <h1 className=" text-white text-xl sm:text-2xl md:text-3xl md:pt-36">
    Date | LNMIIT, JAIPUR
  </h1>
  <p className="w-3/5 text-base sm:text-xl md:text-2xl mb-8 text-gray-200">
    Thank you for your interest in TEDxLNMIIT. As the total number of
    people we can host is limited, we’ll be offering tickets on a
    first-come-first-serve basis.
  </p>
  
  
</div>

        </div>
      </section>

      {/* Main Section */}
    

      {/* Footer */}
      <section className="mb-0 flex items-center">
        {/* <span className="text-white text-4xl font-extrabold">TEDx</span>
        <span className="text-red-700 text-4xl font-extrabold">
          LNMIIT
        </span>{" "}
        <div className="bg-white h-1 w-full"></div> */}
      </section>
    </div>
  );
}
