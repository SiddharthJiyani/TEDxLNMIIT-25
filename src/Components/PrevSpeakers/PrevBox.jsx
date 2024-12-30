import youtube from "../../assets/youtube.png";
import xprev from "../../assets/xprev.png";
const PrevBox = ({ imgSrc, altText, name, description, url, className }) => {
  return (
    <div className="hover:-translate-y-3 transition-transform duration-300">
      <div
        className={`m-4 group relative border-[1px] border-bordorColor  rounded-2xl w-[80%] md:w-[250px] h-[80%] md:h-[290px] p-1 bg-[#141414] overflow-hidden ${className} `}
        style={{
          backgroundImage: `url(${xprev})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Image always shown */}
        <img
          className={`rounded-2xl transition-opacity mt-8 duration-300 w-full h-full object-contain ${
            description || url ? "group-hover:opacity-0" : ""
          }`}
          src={imgSrc}
          alt={altText}
          loading="lazy"
        />

        {/* Conditional hover content */}
        {(description || url) && (
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-[#141414] p-1 rounded-2xl transition-opacity duration-300">
            <div className="text-white text-center">
              <h2 className="m-4 text-xl font-extrabold text-[#e4dbdb]">
                {name}
              </h2>
              {description && <p>{description}</p>}
              {url && (
                <a
                  className="flex justify-center items-center"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="h-6 w-6 m-2"
                    src={youtube}
                    alt="YouTube logo"
                  />
                  Watch Talk here
                </a>
              )}
            </div>
          </div>
        )}
      </div>
      <h2 className="text-xl text-[#7d7d7d] text-center md:pl-9">{name}</h2>
    </div>
  );
};

export default PrevBox;
