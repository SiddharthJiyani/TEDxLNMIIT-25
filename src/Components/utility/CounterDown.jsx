"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CountdownTimer = () => {
  const targetDate = new Date("2025-01-11T00:00:00"); // Set your target event date here

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimeLeft = () => {
      const currentTime = new Date();
      const diff = targetDate.getTime() - currentTime.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timerInterval = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(timerInterval);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="bg-black p-4 rounded-lg shadow-lg max-w-md mx-auto">
      {/* <h2 className="text-2xl font-bold text-center mb-1 text-white">
        TEDxLNMIIT Starts In
      </h2> */}
      <div className="flex justify-between items-center">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex flex-col items-center">
            <motion.div
              className="bg-zinc-800 m-2 w-16 h-16 rounded-full flex items-center justify-center mb-2 overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatePresence mode="">
                <motion.span
                  key={unit.value}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold text-white absolute"
                >
                  {/* <div className="text-2xl font-bold text-white absolute"> */}
                  {unit.value.toString().padStart(2, "0")}
                  {/* </div > */}
                </motion.span>
              </AnimatePresence>
            </motion.div>
            <span className="text-xs text-gray-400">{unit.label}</span>
          </div>
        ))}
      </div>
      <motion.div
        className="h-1 bg-[#ff3006db] rounded-full mt-3"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <p className="text-gray-400 text-center mt-3 -mb-2 text-sm">
        Until the next big idea
      </p>
      
    </div>
  );
};

export default CountdownTimer;
