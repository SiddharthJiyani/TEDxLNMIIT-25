import { FaLinkedin } from "react-icons/fa"; // Importing the LinkedIn icon from react-icons.

const MemberCard = ({ name, position, link, imgSrc }) => {
  return (
    <div className="relative group flex flex-col items-center bg-black p-4 rounded-lg hover:opacity-90">
      {/* Image section */}
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-800">
        <img
          src={imgSrc}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name section */}
      <h3 className="mt-4 text-xl font-bold text-red-500">{name}</h3>

      {/* Title section */}
      <p className="text-lg italic text-gray-400">{position}</p>

      {/* Hovered Component */}
      <div
        className={`absolute mt-4 ml-4 w-40 h-40 inset-0 rounded-full flex flex-col items-center justify-center bg-gradient-to-b from-[#DA0400] to-[#890300] opacity-0 transition-all duration-300 group-hover:opacity-100 ${
          name === "Krishna Manchanda" || "Dr. Narendra Kumar" ? "ml-6" : ""
        }`}
      >
        <h3
          className={`select-none text-center text-sm/[110%] capitalize leading-none text-white md:text-lg/[110%] md:leading-tight word-break mb-2 ${
            name === "Krishna Manchanda" || "Dr. Narendra Kumar" ? "md:text-base" : ""
          }`}
        >
          {name}
        </h3>

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black text-red-500 translate-y-10 duration-300 ease-out group-hover:translate-y-0 grayscale hover:grayscale-0">
              <FaLinkedin size={24} />
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
