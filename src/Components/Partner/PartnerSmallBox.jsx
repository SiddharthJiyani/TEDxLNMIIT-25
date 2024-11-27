const PartnerSmallBox = ({ imgSrc, name }) => {
  return (
    <div className="hover:-translate-y-3 transition-transform duration-300 mx-6">
      <div className="m-1 group relative border-4 border-[#141414] rounded-2xl w-[195px] h-[160px] bg-white overflow-hidden xxs:w-[100px] xxs:h-[90px] xs:w-[100px] xs:h-[100px] sm:w-[150px] sm:h-[120px] md:w-[180px] md:h-[140px]">
        <img
          className="rounded-2xl transition-opacity duration-300 w-full h-full object-contain"
          src={imgSrc}
          alt={name}
          aria-label={name}
        />
      </div>
      <h2 className="text-xl text-[#7d7d7d] text-left mt-1 ml-2 group-hover:text-white transition-colors duration-300 sm:text-lg md:text-xl">
        {name}
      </h2>
    </div>
  );
};

export default PartnerSmallBox;
