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
      <h1 className="text-center text-3xl mb-4 md:pl-10">
        <Title text="Previous" red={"Speakers"} />
      </h1>
      <div className="flex flex-wrap justify-center flex-grow">
        <div className="flex flex-wrap justify-center">
          {/* First Speaker */}
          <PrevBox
            imgSrc={speaker1}
            altText="Speaker"
            className=" xxxs:ml-8 xxs:ml-10   xs:ml-14 sm:gap-1 "
            name="Dr. Tanu Jain"
            description="Former IAS officer and DRDO Assistant Director, Dr. Jain advocates for education and UPSC reforms. Her multifaceted career exemplifies her dedication to creating impact beyond conventional roles."
            url="https://drive.google.com/file/d/1b2JeXhUiIs2a75v09skoxKswxAoPksSP/view"
          />

          {/* Second Speaker */}
          <PrevBox
            imgSrc={speaker2}
            altText="Speaker"
            className=" xxxs:ml-8 xxs:ml-10   xs:ml-14 sm:gap-1 "
            name="Krishnan Sunderarajan"
            description="Founder of LOKA, India’s first Metaverse app, Krishnan bridges technology and human experience. His Shark Tank success highlights his forward-thinking insights into the future of digital interaction."
            url="https://www.youtube.com/watch?v=Z9zx3kWLP6c"
          />

          {/* Third Speaker */}
          <PrevBox
            imgSrc={speaker3}
            altText="Speaker"
            className=" xxxs:ml-8 xxs:ml-10   xs:ml-14 sm:gap-1 "
            name="Palakh Khanna"
            description="Founder of Break.The.Ice and recognized as one of Asia's 100 Women Power Leaders, Palakh is a trailblazer in entrepreneurship. She inspires others by breaking barriers in leadership."
            url="https://www.youtube.com/watch?v=FunoeJDbLhs&t=19s"
          />

          {/* Fourth Speaker */}
          <PrevBox
            imgSrc={speaker4}
            altText="Speaker"
            className=" xxxs:ml-8 xxs:ml-10   xs:ml-14 sm:gap-1 "
            name="Chinmay Gaur"
            description="Indian Classical flutist and composer, blending tradition and modernity. His TEDx talk focuses on the transcendental power of music, showing how it bridges cultural and emotional divides."
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
            description="Co-founder of Iceberg Creations and IMPACT 30 Under 30 honoree, he’s a dynamic content creator. Deepak’s work spans multiple platforms, driving innovative, engaging content across industries"
            url="https://www.youtube.com/watch?v=vkIZJ0-hkQY"
          />

          {/* Sixth Speaker */}
          <PrevBox
            imgSrc={speaker6}
            className=" xxxs:ml-8 xxs:ml-10   xs:ml-14 sm:gap-1 "
            altText="Speaker"
            name="Tejas Patil"
            description="Tech content creator decoding the complexities of the digital world. His work in his videos highlights the limitless potential of technology and innovation in shaping the future"
            url="https://www.youtube.com/watch?v=YJPAISrsU6w&t=269s"
          />

          {/* Seventh Speaker */}
          <PrevBox
            imgSrc={speaker7}
            className=" xxxs:ml-8 xxs:ml-10   xs:ml-14 sm:gap-1 "
            altText="Speaker"
            name="Gunjan Saini"
            description="Poet, writer, and founder of @officialletstalk, she fosters emotional well-being through shared stories. Gunjan’s creative force helps bridge emotional gaps, making a significant impact in mental health."
            url="https://www.youtube.com/watch?v=7Qsg9A-mjgk"
          />

          {/* Eighth Speaker */}
          <PrevBox
            imgSrc={speaker9}
            className=" xxxs:ml-8 xxs:ml-10   xs:ml-14 sm:gap-1 "
            altText="Speaker"
            name="Sakshi Mandhyan"
            description="Founder of Mandhyan Care, Sakshi is a mental well-being advocate. Her work reshapes how mental health challenges are understood, fostering a transformative approach to emotional well-being."
            url="https://www.youtube.com/watch?v=QmHOBNJVP24"
          />
        </div>
      </div>
    </div>
  );
};

export default PrevSpeakers;
