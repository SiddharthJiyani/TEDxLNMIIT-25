import img from "../../assets/pic1.jpg";
import PrevBox from "../PrevSpeakers/PrevBox";

const Gallery = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black backdrop-blur-md">
      <div className="mt-24 w-full top-20 backdrop-blur-md">
        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {[...Array(3)].map((_, index) => (
            <PrevBox
              key={index}
              imgSrc={img}
              className=" xxxs:ml-8 xxs:ml-10   xs:ml-14 sm:gap-1 "
            />
          ))}
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-4">
          {[...Array(3)].map((_, index) => (
            <PrevBox
              key={index + 3}
              imgSrc={img}
              className=" xxxs:ml-8 xxs:ml-10   xs:ml-14  "
            />
          ))}
        </div>
        {/* Third Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-4">
          {[...Array(3)].map((_, index) => (
            <PrevBox
              key={index + 6}
              imgSrc={img}
              className=" xxxs:ml-8 xxs:ml-10  xs:ml-14 "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
