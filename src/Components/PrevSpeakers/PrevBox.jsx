const PrevBox = ({ imgSrc, altText, name, description }) => {
  return (
    <div className="hover:-translate-y-3 transition-transform duration-300">
      <div className="m-4 group relative border-4 border-[#141414] rounded-2xl w-[80%] md:w-[250px] h-[80%] md:h-[250px] p-1 bg-[#141414] overflow-hidden">
        <img
          className="rounded-2xl transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-cover"
          src={imgSrc}
          alt={altText}
        />
        <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-[#141414] p-1 rounded-2xl transition-opacity duration-300">
          <p className="text-white text-center"><h2 className="m-4">{name}</h2>{description}</p>
        </div>
      </div>
      <h2 className="text-xl text-[#7d7d7d] text-left  pl-1 md:pl-10">
        {name}
      </h2>
    </div>
  );
};

export default PrevBox;
