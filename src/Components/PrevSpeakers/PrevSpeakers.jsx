import speaker1 from "../../assets/speaker1.jpg";
import speaker2 from "../../assets/speaker2.png";
import speaker3 from "../../assets/speaker3.png";
import speaker8 from "../../assets/speaker8.jpg";
import PrevBox from "./PrevBox.jsx";

const PrevSpeakers = () => {
  return (
    <div className="flex flex-col justify-around items-center bg-black text-[#7d7d7d] text-left w-full h-screen">
      <h1 className="text-3xl mb-4">PREVIOUS SPEAKERS</h1>
      <div className="flex flex-wrap justify-center flex-grow">
        <div className="flex flex-wrap justify-center">
          {/* First Speaker */}
          <PrevBox
            imgSrc={speaker1}
            altText="Speaker"
            name="Dr. Tanu Jain"
            description="Dr. Tanu Jain, an accomplished IAS Officer, transitioned from dentistry to civil service, exemplifying excellence and community service."
          />

          {/* Second Speaker */}
          <PrevBox
            imgSrc={speaker2}
            altText="Speaker"
            name="Krishnan Sunderarajan"
            description="Krishnan Sunderarajan is the visionary mind behind India's First Metaverse App, LOKA, as showcased on Shark Tank."
          />

          {/* Third Speaker */}
          <PrevBox
            imgSrc={speaker3}
            altText="Speaker"
            name="Palakh Khanna"
            description="Palakh Khanna, a trailblazing entrepreneur and esteemed speaker, is a beacon of innovation and inspiration."
          />

          {/* Fourth Speaker */}
          <PrevBox
            imgSrc={speaker1}
            altText="Speaker"
            name="Dr. Tanu Jain"
            description="This text appears when the image is hidden."
          />
        </div>
        <div className="flex flex-wrap justify-center">
          {/* Fifth Speaker */}
          <PrevBox
            imgSrc={speaker1}
            altText="Speaker"
            name="Dr. Tanu Jain"
            description="This text appears when the image is hidden."
          />

          {/* Sixth Speaker */}
          <PrevBox
            imgSrc={speaker1}
            altText="Speaker"
            name="Dr. Tanu Jain"
            description="This text appears when the image is hidden."
          />

          {/* Seventh Speaker */}
          <PrevBox
            imgSrc={speaker1}
            altText="Speaker"
            name="Dr. Tanu Jain"
            description="This text appears when the image is hidden."
          />

          {/* Eighth Speaker */}
          <PrevBox
            imgSrc={speaker8}
            altText="Speaker"
            name="Riya Upreti"
            description="This text appears when the image is hidden."
          />
        </div>
      </div>
    </div>
  );
};

export default PrevSpeakers;
