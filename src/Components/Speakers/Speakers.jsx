import x from "../../assets/x.png";
const Speakers = ({ imgSrc, altText, name }) => {
  return (
    <div>
      {/* Container with a dynamic background image */}
      <div
        className={`m-10 border-[1px] border-bordorColor rounded-2xl w-[100%] md:w-[250px] h-[230px] bg-[#141414] relative hover:scale-110 transition-all duration-300`}
        style={{
          backgroundImage: `url(${x})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Foreground Image positioned to overflow from the top */}
        <img
          className="w-full h-[280px] font-amsterdam rounded-t-2xl absolute bottom-0 right-0 grayscale hover:grayscale-0  hover:-translate-y-2  transition-all duration-300"
          src={imgSrc}
          alt={altText}
        />
      </div>

      {/* Speaker Name */}
      <h2 className="text-[25px] ml-12 md:ml-0 font-light tracking-[-0.5px] leading-[45px] text-center text-white font-amsterdam ">
        {name}
      </h2>
    </div>
  );
};

export default Speakers;
