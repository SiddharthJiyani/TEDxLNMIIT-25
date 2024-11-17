'use client';

import { useState } from 'react';

export default function TicketBookingPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      console.log('Form submitted successfully:', data);
      // Handle data submission logic here
    } catch (err) {
      alert('Error submitting form. Please try again.');
    } finally {
      setLoading(false);
      e.currentTarget.reset();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600 opacity-10 transform -skew-y-6"></div>
        <div className="container mx-auto px-4 pt-20 pb-32 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            IN A STORM OF IGNORANCE, <span className="text-white">FIND WISDOM</span>.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">Reserve Your Seat for TEDxLNMIIT</p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-400">
            Experience inspiring talks, interactive workshops, and delightful cuisine. Join us on{' '}
            <span className="font-bold text-red-400">November 25th, 2023</span>, for an unforgettable event!
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Event Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-500">Event Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'LNMIIT Students/Faculty', price: '₹600', discount: '25% discount applied' },
              { title: 'General Admission', price: '₹800', discount: null },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-red-500 transition-colors"
              >
                <h3 className="text-2xl font-bold text-center text-gray-100 mb-4">{item.title}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                  <li>Access to all TEDxLNMIIT talks and workshops</li>
                  <li>Interaction sessions with speakers</li>
                  <li>Delicious meals and refreshments</li>
                  <li>Exclusive TEDxLNMIIT experiences</li>
                </ul>
                <div className="border-t border-gray-600 my-4"></div>
                <p className="text-3xl font-bold text-center text-red-400">{item.price}</p>
                {item.discount && <p className="text-sm text-center text-gray-400">{item.discount}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Steps to Book */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-500">Steps to Reserve Your Exclusive Seat</h2>
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Step 1: Make the Payment</h3>
              <p className="mb-4 text-gray-300">Scan the appropriate QR code to pay the booking amount:</p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                {['LNMIIT Students/Faculty', 'General Admission'].map((label, idx) => (
                  <div key={idx} className="text-center">
                    <p className="mb-2 text-gray-400">{label}</p>
                    <div className="bg-white p-4 rounded-lg inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="black"
                        className="w-32 h-32"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Step 2: Fill the Booking Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { id: 'name', label: 'Name', type: 'text' },
                    { id: 'email', label: 'Email', type: 'email' },
                    { id: 'phone', label: 'Phone Number', type: 'tel' },
                    { id: 'upiid', label: 'UPI ID', type: 'text' },
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
                  {loading ? 'Processing...' : 'Submit Booking'}
                </button>
              </form>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Step 3: Confirmation</h3>
              <p className="text-gray-300">
                Sit back and relax! Our team will get in touch with you shortly to confirm your seat reservation.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center">
        <p className="text-gray-400">
          Thank you for being part of <span className="text-red-500 font-bold">TEDxLNMIIT</span>.
        </p>
      </footer>
    </div>
  );
}
