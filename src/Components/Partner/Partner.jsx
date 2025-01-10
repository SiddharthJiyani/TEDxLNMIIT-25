import PrevBox from "./PartnerBox";
import { useEffect } from "react";
import image1 from "../../assets/sponsors/BP.png";
import image2 from "../../assets/sponsors/EP.png";
import image3 from "../../assets/sponsors/HP.png";
import image4 from "../../assets/sponsors/PP.png";
import image5 from "../../assets/sponsors/UB.png";
import imagec1 from "../../assets/sponsors/vrj.png";
import imagec2 from "../../assets/sponsors/waffle.png";
import imagec3 from "../../assets/sponsors/fern.jpg";
import imagec4 from "../../assets/sponsors/cb.png";
// import imagec5 from "../../assets/sponsors/UB.png";
import PartnerSmallBox from "./PartnerSmallBox";
import { motion } from "framer-motion";
import Title from "../utility/Title";
import Marquee from "react-fast-marquee";
const Partner = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  });
  const partners = [
    {
      imgSrc: image1,
      name: "Petite Pâtisserie",
      link: "https://www.instagram.com/petitepatisserie_jaipur/?hl=en",
    },
    {
      imgSrc: image2,
      name: "Kalam IAS Academy",
      link: "https://kalamias.academy/",
    },
    {
      imgSrc: image3,
      name: "Sarovar Hotels & Resorts",
      link: "https://www.sarovarhotels.com/",
    },
    {
      imgSrc: image4,
      name: "Regal Offset",
      link: "https://regal-offset-cards.business.site/",
    },
    {
      imgSrc: image5,
      name: "Union Bank",
      link: "https://www.unionbankofindia.co.in/english/home.aspx",
    },
  ];

  const currPartners = [
    {
      imgSrc: imagec1,
      name: "",
      link: "",
    },
    {
      imgSrc: imagec2,
      name: "",
      link: "",
    },
    {
      imgSrc: imagec3,
      name: "",
      link: "",
    },
    {
      imgSrc: imagec4,
      name: "",
      link: "",
    },
  ];


  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen py-20">
      <h2 className="mt-5 text-6xl font-bold mb-5 text-center">
        {/* Current Partners */}
        <Title text="Current" red={"Partners"} className="text-6xl font-bold" />
      </h2>
      <div className="flex flex-wrap justify-center mb-10">
        {currPartners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="m-4 "
          >
            <PrevBox
              imgSrc={partner.imgSrc}
              name={partner.name}
              className="h-[250px]"
            />
          </a>
        ))}
      </div>
      {/* <h1 className="text-white text-6xl md:text-8xl font-bold uppercase m-10 mb-28">
        <h1 className="text-gray-500 text-5xl font-normal mx-auto text-center">Revealing Soon!!</h1>
      </h1> */}
      <h3 className="mt-5 text-6xl font-bold mb-16 text-center ">
        <Title
          text="Previous"
          red={"Partners"}
          className="text-6xl font-bold" 
        />
      </h3>
      {/* <motion.div
        className="flex justify-center mb-10 w-full overflow-x-hidden"
        animate={{ x: ["0%", "-10%"] }}
        transition={{
          duration: 6,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ display: "flex" }}
      >
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PartnerSmallBox imgSrc={partner.imgSrc} name={partner.name} />
          </a>
        ))}
        {/* Repeat the partners list to create a seamless looping effect */}
      {/* {partners.map((partner, index) => (
          <a
            key={`${index}-copy`}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PartnerSmallBox imgSrc={partner.imgSrc} name={partner.name} />
          </a>
        ))}

        {partners.map((partner, index) => (
          <a
            key={`${index}-copy`}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PartnerSmallBox imgSrc={partner.imgSrc} name={partner.name} />
          </a>
        ))}
      </motion.div> */}
      <Marquee autoFill="true">
        {partners.map((partner, index) => (
          <a
            key={`${index}-copy`}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PartnerSmallBox imgSrc={partner.imgSrc} name={partner.name} />
          </a>
        ))}
      </Marquee>
      <div className="text-center max-w-2xl px-4 md:px-6 lg:px-8">
        <h3 className="text-4xl md:text-4xl lg:text-6xl font-semibold mb-4 mt-24">
          Interested in partnership?
        </h3>
        <p className="text-base md:text-lg lg:text-xl mb-4">
          Collaborating with TEDxLNMIIT provides a unique opportunity to enhance
          your organization’s global network within the TED and TEDx community.
          Leverage innovative ideas, technology, and local investments to
          empower education and foster innovation, harnessing the transformative
          potential of ideas for a brighter future.
        </p>
        <p>
          <a
            href="/Brochure.pdf"
           
            className="text-blue-400 underline"
          >
            Know more
          </a>
        </p>
      </div>
    </div>
  );
};

export default Partner;
