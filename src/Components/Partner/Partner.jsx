import PrevBox from "./PartnerBox";
import { useEffect } from "react";
import image1 from "../../assets/sponsors/BP.png";
import image2 from "../../assets/sponsors/EP.png";
import image3 from "../../assets/sponsors/HP.png";
import image4 from "../../assets/sponsors/PP.png";
import image5 from "../../assets/sponsors/UB.png";
import PartnerSmallBox from "./PartnerSmallBox";
import { motion } from "framer-motion";

useEffect(() => {
  window.scrollTo(0, 0);
}, []);
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

  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen py-20">
      <h2 className="mt-5 text-7xl font-bold mb-5 text-center">
        Current Partners
      </h2>
      <div className="flex flex-wrap justify-center mb-10">
        {partners.map((partner, index) => (
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
      <h3 className="mt-5 text-7xl font-bold mb-5 text-center">
        Previous Partners
      </h3>
      <motion.div
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
      </motion.div>

      <div className="text-center max-w-2xl px-4 md:px-6 lg:px-8">
        <h3 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-4">
          Interested in partnership?
        </h3>
        <p className="text-base md:text-lg lg:text-xl mb-4">
          Collaborating with TED×Lnmiit offers a rare chance to expand your
          organization&apos;s global network within the TED and TEDx community.
          Harness ideas, technology, and local investments to empower education,
          innovation, and the transformative power of ideas for a brighter
          future.
        </p>
        <p>
          <a href="#" className="text-blue-400 underline">
            Know more
          </a>
        </p>
      </div>
    </div>
  );
};

export default Partner;
