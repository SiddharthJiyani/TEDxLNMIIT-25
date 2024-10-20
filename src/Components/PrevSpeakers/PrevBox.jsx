const PrevBox = ({ imgSrc, altText, name, description }) => {
  return (
    <div className="hover:-translate-y-3 transition-transform duration-300  ">
      <div className="m-4 mb-3 group relative border-[1px] border-bordorColor rounded-[15px] w-[80%] md:w-[200px] h-[80%] md:h-[200px] p-2 bg-[#141414] overflow-hidden">
        <img
          className="rounded-[14px] transition-opacity duration-300  group-hover:opacity-0 w-full h-full object-cover"
          src={imgSrc}
          alt={altText}
        />
        <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-[#141414] p-1 rounded-2xl transition-opacity duration-300">
          <p className="text-white">{description}</p>
        </div>
      </div>
      <h2 className="ml-4 text-md text-[#7d7d7d] text-left  ">
        {name}
      </h2>
    </div>
  );
};

export default PrevBox;
