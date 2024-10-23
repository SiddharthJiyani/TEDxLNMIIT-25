import img from "../../assets/pic1.jpg";
import PrevBox from "../PrevSpeakers/PrevBox";

const Gallery = () => {
  return (
    <div className=" h-screen flex flex-col items-center justify-center bg-black backdrop-blur-md ">
      <div className="  top-20  bg-black backdrop-blur-md ">
        <div className="flex flex-wrap justify-center gap-4">
          <PrevBox imgSrc={img} className={"border-none bg-black"} />
          <PrevBox imgSrc={img} className={"border-none"} />
          <PrevBox imgSrc={img} className={"border-none"} />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <PrevBox imgSrc={img} className={"border-none"} />
          <PrevBox imgSrc={img} className={"border-none"} />
          <PrevBox imgSrc={img} className={"border-none"} />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <PrevBox imgSrc={img} className={"border-none"} />
          <PrevBox imgSrc={img} className={"border-none"} />
          <PrevBox imgSrc={img} className={"border-none"} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
