import speaker1 from "../../assets/speaker1.jpg";
import speaker2 from "../../assets/speaker2.png";
import speaker3 from "../../assets/speaker3.png";
import speaker4 from "../../assets/speaker4.webp";
import speaker5 from "../../assets/speaker5.webp";
import speaker6 from "../../assets/speaker6.webp";
import speaker7 from "../../assets/speaker7.webp";
import speaker8 from "../../assets/speaker8.jpg";
import speaker9 from "../../assets/speaker9.webp";
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
            description="Dr. Tanu is currently posted as Assistant Director in the Ministry of Defence. Dr. Tanu has authored two books for UPSC preparation. She is Passionate to help, guiding, and motivating young minds esp."
          />

          {/* Second Speaker */}

          <PrevBox
            imgSrc={speaker2}
            altText="Speaker"
            name="Krishnan Sunderarajan"
            description="Krishnan Sunderarajan is the visionary mind behind India's First Metaverse App, LOKA, as showcased on Shark Tank. A seasoned entrepreneur, reshaping the landscape of technology and gaming. "
          />

          {/* Third Speaker */}
          <PrevBox
            imgSrc={speaker3}
            altText="Speaker"
            name="Palakh Khanna"
            description="Palakh Khanna, a trailblazing entrepreneur and esteemed speaker, is a beacon of innovation and inspiration. Recognized as one of Asia's 100 Women Power Leaders in 2023, her journey with Break."
          />

          {/* Fourth Speaker */}
          <PrevBox
            imgSrc={speaker4}
            altText="Speaker"
            name="Chinmay Gaur"
            description="Chinmay Gaur,skillfully wields the flute to enrapture audiences with his enchanting melodies and charismatic presence. As an Indian Classical flutist , esteemed music composer, creating a captivating musical narrative."
          />
        </div>
        <div className="flex flex-wrap justify-center">
          {/* Fifth Speaker */}
          <PrevBox
            imgSrc={speaker5}
            altText="Speaker"
            name="Deepak Pareek"
            description="Deepak Pareekh is a renowned seven-time TEDx speaker and co-founder of Iceberg Creations. Deepak is a renowned content creator who was featured in IMPACT's 30 Under 30"
          />

          {/* Sixth Speaker */}
          <PrevBox
            imgSrc={speaker6}
            altText="Speaker"
            name="Tejas Patil"
            description="Tejas Patil is a prominent figure in the tech world, celebrated for his insightful content creation and social media strategy. With hands-on expertise in PCs and smartphones, his authentic reviews are highly respected."
          />

          {/* Seventh Speaker */}
          <PrevBox
            imgSrc={speaker7}
            altText="Speaker"
            name="Gunjan Saini"
            description="Gunjan Saini is a multifaceted Indian poet and author. Beyond her literary prowess, Gunjan's talents span across various domains as an actor, dancer, journalist, licensed practical nurse, and Filtercopy's Casting Associate."
          />

          {/* Eighth Speaker */}
          <PrevBox
            imgSrc={speaker8}
            altText="Speaker"
            name="Riya Upreti"
            description="Riya Upreti, influencer and CEO of Thefobet, is reshaping education in Delhi. FOBET, her brainchild, revolutionizes the learning landscape, particularly in psychology-related knowledge. "
          />

          {/* Ninth Speaker */}
          <PrevBox
            imgSrc={speaker9}
            altText="Speaker"
            name="Sakshi Mandhyan"
            description="Sakshi Mandhyan, an accomplished professional, is
an established Psychologist, Happiness Coach, and
Wellness Expert with 15+ years of Fortune 500
experience."
          />

        </div>
      </div>
    </div>
  );
};

export default PrevSpeakers;
