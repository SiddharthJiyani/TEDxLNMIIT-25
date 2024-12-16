import { motion } from "framer-motion";
import PrevBox from "../PrevSpeakers/PrevBox";
import { useEffect } from "react";

const Gallery = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20, scale: 0.7 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Array of Cloudinary image URLs
  const imageUrls = [
    "https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734287102/_DSC0512_q0lej7.jpg",
    "https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734284836/IMG20240113144027_npuamh.jpg",
    "https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734284836/IMG20240113124622_ncigry.jpg",
    "https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734284835/_DSC0525_grzcpd.jpg",
    "https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734284836/IMG20240113165706_ndioaf.jpg",
    "https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734284835/IMG20240113144545_hvayzz.jpg",
    "https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734284835/IMG20240113175013_zbofr5.jpg",
    "https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734284833/IMG20240113160555_ojqjqm.jpg",
    "https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734284833/IMG20240113131854_n3bqgq.jpg",
    "https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734284832/IMG20240112225947_g0q4vd.jpg",
    "https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734284831/_P3A7565_m4vaab.jpg",
    "https://res.cloudinary.com/dvhjoqdm6/image/upload/v1734284831/20240113_182834424_iOS_evicfy.jpg",
    "https://res.cloudinary.com/dvhjoqdm6/image/upload/f_auto/v1734284830/IMG_1122_mwrzac.heic",
    "https://res.cloudinary.com/dvhjoqdm6/image/upload/f_auto/v1734284830/IMG_1227_y52t89.heic",
    "https://res.cloudinary.com/dvhjoqdm6/image/upload/f_auto/v1734284828/IMG_4682_yi556w.heic",
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-black backdrop-blur-md pb-10">
      <div className="mt-24 w-full max-w-screen-lg mx-auto top-20 backdrop-blur-md">
        {/* Render Images in a Grid */}
        <div className="items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {imageUrls.map((url, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              {/* Wrap the PrevBox in an anchor tag to make it clickable */}
              <a href={url} target="_blank" rel="noopener noreferrer">
                <PrevBox imgSrc={url} className="xxxs:ml-8 xxs:ml-10 xs:ml-14 sm:gap-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
