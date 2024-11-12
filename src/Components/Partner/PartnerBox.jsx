const PartnerBox = ({ imgSrc, name }) => {
  return (
    <div className="hover:-translate-y-3 transition-transform duration-300">
      <div className="m-10 group relative border-4 border-[#141414] rounded-2xl w-[80%] md:w-[250px] h-[80%] md:h-[250px] p-1 bg-white overflow-hidden">
        <img
          className="rounded-2xl transition-opacity duration-300  w-full h-full object-contain"
          src={imgSrc}
          alt={name}
          aria-label={name}
        />
      </div>
      <h2 className="text-xl text-[#7d7d7d] text-left mt-1 pl-4 md:pl-10 group-hover:text-white transition-colors duration-300">
        {name}
      </h2>
    </div>
  );
};

export default PartnerBox;
