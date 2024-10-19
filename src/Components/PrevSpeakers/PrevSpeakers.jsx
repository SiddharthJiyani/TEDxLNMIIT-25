import React from 'react';
import speaker1 from '../../assets/speaker1.jpg';
import speaker2 from '../../assets/speaker2.png';
import speaker8 from '../../assets/speaker8.jpg';
import speaker3 from '../../assets/speaker3.png';

const PrevSpeakers = () => {
  return (
    <div className="flex flex-col justify-around flex-wrap items-center bg-black text-gray-700 text-left">
      <h1 className='text-3xl mb-4'>PREVIOUS SPEAKERS</h1>
      <div className="flex flex-wrap justify-center">
        <div className='flex'>
          {/* First Speaker */}
          <div className='hover:-translate-y-3 transition-transform duration-300'>
            <div className="m-12 group relative border-4 border-gray-900 rounded-2xl w-[250px] h-[250px] p-1 bg-gray-900 overflow-hidden">
              <img
                className="rounded-2xl transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-cover"
                src={speaker1}
                alt="Speaker"
              />
              <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-gray-900 p-1 rounded-2xl transition-opacity duration-300">
                <p className="text-white">Dr. Tanu Jain, an accomplished IAS Officer, transitioned from dentistry to civil service, exemplifying excellence and community service.</p>
              </div>
            </div>
            <h2 className="text-xl text-gray-700 text-left mt-1 pl-10">Dr. Tanu Jain</h2>
          </div>

          {/* Second Speaker */}
          <div className='hover:-translate-y-3 transition-transform duration-300'>
            <div className="m-12 group relative border-4 border-gray-900 rounded-2xl w-[250px] h-[250px] p-1 bg-gray-900 overflow-hidden">
              <img
                className="rounded-2xl transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-cover"
                src={speaker2}
                alt="Speaker"
              />
              <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-gray-900 p-1 rounded-2xl transition-opacity duration-300">
                <p className="text-white">Krishnan Sunderarajan is the visionary mind behind India's First Metaverse App, LOKA, as showcased on Shark Tank.</p>
              </div>
            </div>
            <h2 className="text-xl text-gray-700 text-left mt-1 pl-10">Krishnan Sunderarajan</h2>
          </div>

          {/* Third Speaker */}
          <div className='hover:-translate-y-3 transition-transform duration-300'>
            <div className="m-12 group relative border-4 border-gray-900 rounded-2xl w-[250px] h-[250px] p-1 bg-gray-900 overflow-hidden">
              <img
                className="rounded-2xl transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-cover"
                src={speaker3}
                alt="Speaker"
              />
              <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-gray-900 p-1 rounded-2xl transition-opacity duration-300">
                <p className="text-white">Palakh Khanna, a trailblazing entrepreneur and esteemed speaker, is a beacon of innovation and inspiration.</p>
              </div>
            </div>
            <h2 className="text-xl text-gray-700 text-left mt-1 pl-10">Palakh Khanna</h2>
          </div>

          {/* Fourth Speaker */}
          <div className='hover:-translate-y-3 transition-transform duration-300'>
            <div className="m-12 group relative border-4 border-gray-900 rounded-2xl w-[250px] h-[250px] p-1 bg-gray-900 overflow-hidden">
              <img
                className="rounded-2xl transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-cover"
                src={speaker1}
                alt="Speaker"
              />
              <div className="absolute inset-0 hidden group-hover:flex items-center justify-center blog-img-wrap chinese-black-bg p-1 rounded-2xl transition-opacity duration-300">
                <p className="text-white">This text appears when the image is hidden.</p>
              </div>
            </div>
            <h2 className="text-xl text-gray-700 text-left mt-1 pl-10">Dr. Tanu Jain</h2>
          </div>
        </div>
        <div className='flex'>
          {/* Fifth Speaker */}
          <div className='hover:-translate-y-3 transition-transform duration-300'>
            <div className="m-12 group relative border-4 border-gray-900 rounded-2xl w-[250px] h-[250px] p-1 bg-gray-900 overflow-hidden">
              <img
                className="rounded-2xl transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-cover"
                src={speaker1}
                alt="Speaker"
              />
              <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-gray-900 p-1 rounded-2xl transition-opacity duration-300">
                <p className="text-white">This text appears when the image is hidden.</p>
              </div>
            </div>
            <h2 className="text-xl text-gray-700 text-left mt-1 pl-10">Dr. Tanu Jain</h2>
          </div>

          {/* Sixth Speaker */}
          <div className='hover:-translate-y-3 transition-transform duration-300'>
            <div className="m-12 group relative border-4 border-gray-900 rounded-2xl w-[250px] h-[250px] p-1 bg-gray-900 overflow-hidden">
              <img
                className="rounded-2xl transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-cover"
                src={speaker1}
                alt="Speaker"
              />
              <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-gray-900 p-1 rounded-2xl transition-opacity duration-300">
                <p className="text-white">This text appears when the image is hidden.</p>
              </div>
            </div>
            <h2 className="text-xl text-gray-700 text-left mt-1 pl-10">Dr. Tanu Jain</h2>
          </div>

          {/* Seventh Speaker */}
          <div className='hover:-translate-y-3 transition-transform duration-300'>
            <div className="m-12 group relative border-4 border-gray-900 rounded-2xl w-[250px] h-[250px] p-1 bg-gray-900 overflow-hidden">
              <img
                className="rounded-2xl transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-cover"
                src={speaker1}
                alt="Speaker"
              />
              <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-gray-900 p-1 rounded-2xl transition-opacity duration-300">
                <p className="text-white">This text appears when the image is hidden.</p>
              </div>
            </div>
            <h2 className="text-xl text-gray-700 text-left mt-1 pl-10">Dr. Tanu Jain</h2>
          </div>

          {/* Eighth Speaker */}
          <div className='hover:-translate-y-3 transition-transform duration-300'>
            <div className="m-12 group relative border-4 border-gray-900 rounded-2xl w-[250px] h-[250px] p-1 bg-gray-900 overflow-hidden">
              <img
                className="rounded-2xl transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-cover"
                src={speaker8}
                alt="Speaker"
              />
              <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-gray-900 p-1 rounded-2xl transition-opacity duration-300">
                <p className="text-white">This text appears when the image is hidden.</p>
              </div>
            </div>
            <h2 className="text-xl text-gray-700 text-left mt-1 pl-10">Riya Upreti</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrevSpeakers;
