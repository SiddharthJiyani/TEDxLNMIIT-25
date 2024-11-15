const Speakers = ({ imgSrc, altText, name, className }) => {
  return (
    <div>
      <div className="m-10 border-[1px] border-bordorColor rounded-2xl w-[80%] md:w-[250px] h-[200px] bg-[#141414] relative">
        {/* Image positioned to overflow from the top */}
        <img
          className="w-full h-[250px] rounded-t-2xl absolute bottom-0 right-0 grayscale hover:grayscale-0 transition-all duration-300"
          src={imgSrc}
          alt={altText}
        />
      </div>
      
      {/* Speaker Name */}
      <h2 className="text-[30px] font-light tracking-[-0.5px] leading-[45px] text-center text-white font-amsterdam">
        {name}
      </h2>
    </div>
  );
};

export default Speakers;

