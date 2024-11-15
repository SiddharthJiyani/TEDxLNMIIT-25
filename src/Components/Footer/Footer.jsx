import React from 'react';
import tedxlnm from '../../assets/tedxlnm.webp';
import Button from './Button';

const Footer = () => {
  return (
<div className="relative z-10 bg-[#141414] p-10 text-white flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left">
        <img src={tedxlnm} alt="TEDx LNMIIT logo" className="mb-4 mx-auto md:mx-0" />
        <p className="font-arimo md:text-[14px] md:leading-[18px] text-xs text-flatwhite-500">
          ©2023 All Rights Reserved
          <br />
          This independent TEDx event is operated under license from TED.
        </p>
        <div className="flex gap-2 text-flatwhite-500 md:gap-6 mt-4 justify-center md:justify-start">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/tedxlnmiit/"
            className="cursor-pointer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="flex-none text-xl md:text-2xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/tedxlnmiit/"
            className="cursor-pointer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="flex-none text-xl md:text-2xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tedxlnmiit"
            className="cursor-pointer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="flex-none text-xl md:text-2xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511.6 76.3C265.2 76.3 64 281.6 64 534.7c0 201.5 133.1 372.3 317.8 432.7 23.2 4.4 31.6-9.9 31.6-22.1 0-10.9-.4-47.2-.7-85.6-129.3 28.2-156.5-55.6-156.5-55.6-21.1-54.5-51.6-69-51.6-69-42.2-29 3.2-28.4 3.2-28.4 46.7 3.3 71.3 49 71.3 49 41.5 71.1 108.8 50.5 135.3 38.6 4.2-30 16.2-50.5 29.5-62.1-102.9-11.8-211.2-51.4-211.2-229.1 0-50.6 18.1-92 47.6-124.5-4.8-11.8-20.6-59.2 4.5-123.4 0 0 39-12.6 127.7 47.9 37.1-10.5 76.9-15.7 116.5-15.9 39.6.2 79.4 5.4 116.5 15.9 88.7-60.5 127.7-47.9 127.7-47.9 25.1 64.2 9.3 111.6 4.5 123.4 29.6 32.5 47.6 73.9 47.6 124.5 0 178.2-108.5 217.1-211.6 228.7 16.6 14.4 31.3 42.8 31.3 86.3 0 62.3-.6 112.5-.6 127.9 0 12.3 8.4 26.7 31.8 22 184.5-60.5 317.4-231.2 317.4-432.5-.1-253.1-201.2-458.4-447.6-458.4z"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center md:text-left">
        <p className="text-white font-bigshouldersdisplay md:text-[36px] text-[20px] md:leading-[56px] max-w-[500px] text-lg uppercase text-flatwhite-500">
          Locate us
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.966118263098!2d75.92091417490334!3d26.93628857663312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dba21e8a1d1c9%3A0x5ab565cce4d44c2b!2sThe%20LNM%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1697160525952!5m2!1sen!2sin"
          width="300"
          height="100"
          className="w-[250px] md:w-[300px]"
          allowFullScreen=""
          loading="lazy"
          style={{ border: 0, borderRadius: '5px' }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="footer_text py-1 font-bigshouldersdisplay">
          Rupa ki Nangal, Post-Sumel, <br />
          Via, Jamdoli, Jaipur, <br />
          Rajasthan, India-302031
        </p>
      </div>

      <div className="mt-4 md:mt-0">
        <Button buttonLabel=" Book Tickets Now! " />
      </div>
    </div>
  );
};

export default Footer;
