import React from "react";
import { FaInstagram, FaLinkedin, FaGlobe } from "react-icons/fa"; // FaGlobe imported

const Speakers = ({
  imgSrc,
  altText,
  name,
  description,
  instagramUrl,
  linkedinUrl,
  websiteUrl,  // Ensure this is passed
}) => {
  return (
    <div>
      {/* Container with a dynamic background image */}
      <div
  className={` m-10 border-[1px] border-bordorColor rounded-2xl w-[100%] md:w-[250px] h-[230px] bg-[#141414] relative hover:scale-110 transition-all duration-300 hover:overflow-hidden flex flex-col justify-center items-end`}
  style={{
    backgroundImage: `url(x)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Foreground Image positioned to center */}
  <img
    className="w-full h-[280px] absolute bottom-0 font-amsterdam rounded-2xl transition-all duration-300"
    src={imgSrc}
    alt={altText}
  />

  {/* Social media icons */}
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#141414] p-1 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
    <div className="text-white text-center">
      <h2 className="m-4 text-xl font-extrabold text-[#e4dbdb]">
        {name}
      </h2>
      {description && <p className="text-sm mb-2">{description}</p>}
      <div className="flex flex-col justify-center items-center gap-5 mt-2">
        <h2>Checkout Our Speaker Here :</h2>
        <div className="flex gap-5">
          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          )}
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 transition-colors duration-300"
            >
              <FaGlobe size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Speaker Name */}
      <h2 className="text-[25px] ml-12 md:ml-0 font-light tracking-[-0.5px] leading-[45px] text-center text-white font-amsterdam">
        {name}
      </h2>
    </div>
  );
};

export default Speakers;
