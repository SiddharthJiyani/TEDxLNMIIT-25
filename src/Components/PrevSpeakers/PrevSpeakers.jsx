import speaker1 from "../../assets/PastSpeakers/speaker1.png";
import speaker2 from "../../assets/PastSpeakers/speaker2.png";
import speaker3 from "../../assets/PastSpeakers/speaker3.png";
import speaker4 from "../../assets/PastSpeakers/speaker4.png";
import speaker5 from "../../assets/PastSpeakers/speaker5.png";
import speaker6 from "../../assets/PastSpeakers/speaker6.png";
import speaker7 from "../../assets/PastSpeakers/speaker7.png";
import speaker9 from "../../assets/PastSpeakers/speaker9.png";
import Title from "../utility/Title.jsx";
import PrevBox from "./PrevBox.jsx";

const PrevSpeakers = () => {
  return (
    <div className="flex flex-col justify-around items-center bg-black text-[#7d7d7d] text-left w-full">
      <h1 className="text-3xl mb-4"><Title text={"PREVIOUS"} red={"SPEAKERS"}/></h1>
      <div className="flex flex-wrap justify-center flex-grow">
        <div className="flex flex-wrap justify-center">
          {/* First Speaker */}
          <PrevBox
            imgSrc={speaker1}
            altText="Speaker"
            className=" xxxs:ml-8 xxs:ml-10   xs:ml-14 sm:gap-1 "
            name="Dr. Tanu Jain"
            description="Dr. Tanu is currently posted as Assistant Director in the Ministry of Defence. Dr. Tanu has authored two books for UPSC preparation. She is Passionate to help, guiding, and motivating young minds esp."
            url="https://www.youtube.com"
          />

          {/* Second Speaker */}
          <PrevBox
            imgSrc={speaker2}
            altText="Speaker"
            className=" xxxs:ml-8 xxs:ml-10   xs:ml-14 sm:gap-1 "
            name="Krishnan Sunderarajan"
            description="Krishnan Sunderarajan is the visionary mind behind India's First Metaverse App, LOKA, as showcased on Shark Tank. A seasoned entrepreneur, reshaping the landscape of technology and gaming."
            url="https://www.youtube.com"
          />

          {/* Third Speaker */}
          <PrevBox
            imgSrc={speaker3}
            altText="Speaker"
            className=" xxxs:ml-8 xxs:ml-10   xs:ml-14 sm:gap-1 "
            name="Palakh Khanna"
            description="Palakh Khanna, a trailblazing entrepreneur and esteemed speaker, is a beacon of innovation and inspiration. Recognized as one of Asia's 100 Women Power Leaders in 2023, her journey with Break."
            url="https://www.youtube.com"
          />

          {/* Fourth Speaker */}
          <PrevBox
            imgSrc={speaker4}
            altText="Speaker"
            className=" xxxs:ml-8 xxs:ml-10   xs:ml-14 sm:gap-1 "
            name="Chinmay Gaur"
            description="Chinmay Gaur skillfully wields the flute to enrapture audiences with his enchanting melodies and charismatic presence. As an Indian Classical flutist, esteemed music composer, creating a captivating musical narrative."
            url="https://www.youtube.com/watch?v=KyLREMG86r0"
          />
        </div>
        <div className="flex flex-wrap justify-center">
          {/* Fifth Speaker */}
          <PrevBox
            imgSrc={speaker5}
            altText="Speaker"
            className=" xxxs:ml-8 xxs:ml-10   xs:ml-14 sm:gap-1 "
            name="Deepak Pareek"
            description="Deepak Pareekh is a renowned seven-time TEDx speaker and co-founder of Iceberg Creations. Deepak is a renowned content creator who was featured in IMPACT's 30 Under 30."
            url="https://www.youtube.com"
          />

          {/* Sixth Speaker */}
          <PrevBox
            imgSrc={speaker6}
            className=" xxxs:ml-8 xxs:ml-10   xs:ml-14 sm:gap-1 "
            altText="Speaker"
            name="Tejas Patil"
            description="Tejas Patil is a prominent figure in the tech world, celebrated for his insightful content creation and social media strategy. With hands-on expertise in PCs and smartphones, his authentic reviews are highly respected."
            url="https://www.youtube.com"
          />

          {/* Seventh Speaker */}
          <PrevBox
            imgSrc={speaker7}
            className=" xxxs:ml-8 xxs:ml-10   xs:ml-14 sm:gap-1 "
            altText="Speaker"
            name="Gunjan Saini"
            description="Gunjan Saini is a multifaceted Indian poet and author. Beyond her literary prowess, Gunjan's talents span across various domains as an actor, dancer, journalist, licensed practical nurse, and Filtercopy's Casting Associate."
            url="https://www.youtube.com/watch?v=7Qsg9A-mjgk"
          />

          {/* Eighth Speaker */}
          <PrevBox
            imgSrc={speaker9}
            className=" xxxs:ml-8 xxs:ml-10   xs:ml-14 sm:gap-1 "
            altText="Speaker"
            name="Sakshi Mandhyan"
            description="Sakshi Mandhyan, an accomplished professional, is an established Psychologist, Happiness Coach, and Wellness Expert with 15+ years of Fortune 500 experience."
            url="https://www.youtube.com"
          />
        </div>
      </div>
    </div>
  );
};

export default PrevSpeakers;
