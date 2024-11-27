import React, { useRef, useState, useEffect, useMemo } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if screen width is <= 768
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []); // Empty dependency array means it runs once on mount and cleanup on unmount

  // Use useMemo to dynamically calculate scale based on isMobile
  const scaleDimensions = useMemo(() => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  }, [isMobile]);

  const rotate = useTransform(scrollYProgress, [0, 0.5], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-5 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mb-10 mx-auto text-center "
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({ rotate, scale, children }) => {
  return (
    <motion.div
      style={{
        scale: scale, // Apply the dynamic scale here
        // Apply the rotate transform
        boxShadow: `
          0 0 10px rgba(255, 0, 0, 0.3),
          0 0 20px rgba(255, 0, 0, 0.3),
          0 0 40px rgba(255, 0, 0, 0.3),
          0 0 80px rgba(255, 0, 0, 0.3)
        `,
      }}
      className="max-w-5xl -mt-12 mx-auto h-[20rem] sm:h-[500px] sm:w-screen border-2 border-[#6C6C6C] p-2 sm:p-4 rounded-[30px] shadow-2xl bg-red-600  xxs:h-[600px] xxs:w-screen  "
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
