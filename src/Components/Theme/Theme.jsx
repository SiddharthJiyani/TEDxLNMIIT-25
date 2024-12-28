'use client';

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import birdSvg from "../../assets/Bird.svg";
import Title from "../utility/Title";
// import bg from "../../assets/background.svg";


const Theme = () => {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start -0.1", "end 0.5"],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0, 1.5]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [0.8, 5.2]);

  useEffect(() => {
    const canvas = document.getElementById("gridCanvas");
    const ctx = canvas.getContext("2d");
    let startTime = null;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Customizable parameters
    const cellSize = 100; // Size of each grid cell
    const frequency = 0.7; // Wave frequency
    const amplitude = 0.6; // Wave amplitude
    const phaseSpeed = -0.003; // Negative value to reverse direction

    // Calculate rows and columns based on canvas size
    const rows = Math.ceil(canvas.height / cellSize);
    const columns = Math.ceil(canvas.width / cellSize);

    const drawGrid = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          const x = col * cellSize;
          const y = row * cellSize;

          // Create smooth wave effect
          const phase = elapsed * phaseSpeed;
          const yPos = row / rows;
          const wave = Math.sin(yPos * Math.PI * frequency * 2 + phase) * amplitude;
          const normalizedWave = (wave + 1) / 2; // Normalize to 0-1 range

          // Calculate color intensity based on wave position
          const red = Math.floor(255 * normalizedWave);
          const alpha = 0.3 + (normalizedWave * 0.7); // Varying opacity for better effect

          ctx.strokeStyle = `rgba(${red}, 0, 0, ${alpha})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.strokeRect(x, y, cellSize, cellSize);
        }
      }

      // Request next frame
      animationFrameRef.current = requestAnimationFrame(drawGrid);
    };

    // Start animation
    animationFrameRef.current = requestAnimationFrame(drawGrid);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden ">
      {/* Grid Background Animation */}
      <canvas
        id="gridCanvas"
        className="absolute inset-0 z-0 w-[100%] md:w-full h-[100%] md:h-full  hidden md:block"
        style={{ backgroundColor: "black" }}
      ></canvas>

      {/* Background Animation */}
      <motion.div
        className="absolute inset-0  "
        style={{
          opacity: backgroundOpacity,
          scale: backgroundScale,
        }}
      >
        {/* <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.path
            d="M10 10 Q 50 20, 90 10 T 90 50 T 10 90 T 10 10"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg> */}
      </motion.div>

      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between relative z-10 min-h-screen">
        {/* Left side image */}
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={birdSvg}
            alt="Navigating the New"
            className="rounded-lg shadow-2xl w-full h-auto"
          />
        </motion.div>

        {/* Right side content */}
        <motion.div
          className="w-full md:w-1/2 md:pl-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <Title text="Our" red="Theme" />
          </h1>
          <div className="bg-white/10 backdrop-blur-sm border-none p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Navigating the New
            </h2>
            <p className="text-lg text-red-100 mb-6">
              TEDxLNMIIT 2025 invites you to explore the frontiers of innovation,
              resilience, and discovery. Join us in navigating the new landscapes
              of ideas that shape our future.
            </p>
            <ul className="list-disc list-inside text-red-100">
              <li>Embracing change and uncertainty</li>
              <li>Pioneering solutions for global challenges</li>
              <li>Fostering creativity and adaptability</li>
              <li>Building bridges between diverse perspectives</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Phoenix SVG */}
      {/* <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 opacity-20"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src={birdSvg}
          alt="Phoenix"
          className="w-full h-full object-contain"
        />
      </motion.div> */}
    </div>
  );
};

export default Theme;
