import speaker1 from "../../assets/PastSpeakers/speaker1.png";
import speaker2 from "../../assets/PastSpeakers/speaker2.png";
import speaker3 from "../../assets/PastSpeakers/speaker3.png";
import speaker4 from "../../assets/PastSpeakers/speaker4.png";
import speaker5 from "../../assets/PastSpeakers/speaker5.png";
import speaker6 from "../../assets/PastSpeakers/speaker6.png";
import speaker7 from "../../assets/PastSpeakers/speaker7.png";
import speaker9 from "../../assets/PastSpeakers/speaker9.png";
import Speaker from "./Speaker.jsx";

const SpeakerList = () => {
  return (
    <div className="flex flex-col justify-around items-center bg-black text-[#7d7d7d] text-left w-full">
      <h1 className="text-3xl mb-4">SPEAKERS</h1>
      <div className="flex flex-wrap justify-center flex-grow">
        <div className="flex flex-wrap justify-center">
          {/* First Speaker */}
        
          <Speaker imgSrc={speaker1} altText="Speaker" name="Dr. Tanu Jain" />

          {/* Second Speaker */}
          <Speaker imgSrc={speaker2} altText="Speaker" name="Krishnan Sunderarajan" />

          {/* Third Speaker */}
          <Speaker imgSrc={speaker3} altText="Speaker" name="Palakh Khanna" />

          {/* Fourth Speaker */}
          <Speaker imgSrc={speaker4} altText="Speaker" name="Chinmay Gaur" />
        </div>
        <div className="flex flex-wrap justify-center">
          {/* Fifth Speaker */}
          <Speaker imgSrc={speaker5} altText="Speaker" name="Deepak Pareek" />

          {/* Sixth Speaker */}
          <Speaker imgSrc={speaker6} altText="Speaker" name="Tejas Patil" />

          {/* Seventh Speaker */}
          <Speaker imgSrc={speaker7} altText="Speaker" name="Gunjan Saini" />

          {/* Eighth Speaker */}
          <Speaker imgSrc={speaker9} altText="Speaker" name="Sakshi Mandhyan" />
        </div>
      </div>
    </div>
  );
};

export default SpeakerList;
