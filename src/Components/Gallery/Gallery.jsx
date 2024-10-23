import img from "../../assets/pic1.jpg";
import PrevBox from "../PrevSpeakers/PrevBox";

const Gallery = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center bg-black backdrop-blur-md">
      <div className="mt-12 w-full top-20 backdrop-blur-md">
        <div className="flex flex-wrap justify-center gap-4">
          <PrevBox imgSrc={img} />
          <PrevBox imgSrc={img} />
          <PrevBox imgSrc={img} />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <PrevBox imgSrc={img} />
          <PrevBox imgSrc={img} />
          <PrevBox imgSrc={img} />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <PrevBox imgSrc={img} />
          <PrevBox imgSrc={img} />
          <PrevBox imgSrc={img} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
