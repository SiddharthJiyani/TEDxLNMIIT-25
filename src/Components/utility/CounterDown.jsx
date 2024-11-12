import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const targetDate = new Date("2025-09-30T00:00:00"); // Set your target event date here

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimeLeft = () => {
      const currentTime = new Date();
      const diff = targetDate - currentTime;

      if (diff <= 0) {
        clearInterval(timerInterval);
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

    // Clean up interval on component unmount
    return () => clearInterval(timerInterval);
  }, [targetDate]);

  return (
    <div className="container mx-auto px-4 py-2 relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 font-satoshi text-white">
        Event Starts In
      </h2>
      <div className="grid grid-cols-4 font-satoshi gap-2 sm:gap-4 md:gap-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
        {/* Day */}
        <motion.div
          className="flex flex-col items-center justify-center bg-gradient-to-b from-red-500 to-red-900 rounded-lg shadow-lg p-2 w-full aspect-square overflow-hidden border border-red-500/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full h-2/3 bg-black/30 rounded-md flex items-center justify-center">
            <motion.div
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              initial={{ opacity: 0, transform: "translateY(-20px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.5 }}
            >
              {timeLeft.days}
            </motion.div>
          </div>
          <span className="text-xs sm:text-sm md:text-base capitalize text-white mt-2 font-semibold">
            days
          </span>
        </motion.div>

        {/* Hour */}
        <motion.div
          className="flex flex-col items-center justify-center bg-gradient-to-b from-red-500 to-red-900 rounded-lg shadow-lg p-2 w-full aspect-square overflow-hidden border border-red-500/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full h-2/3 bg-black/30 rounded-md flex items-center justify-center">
            <motion.div
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              initial={{ opacity: 0, transform: "translateY(-20px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.5 }}
            >
              {timeLeft.hours}
            </motion.div>
          </div>
          <span className="text-xs sm:text-sm md:text-base capitalize text-white mt-2 font-semibold">
            hours
          </span>
        </motion.div>

        {/* Minute */}
        <motion.div
          className="flex flex-col items-center justify-center bg-gradient-to-b  from-red-500 to-red-900 rounded-lg shadow-lg p-2 w-full aspect-square overflow-hidden border border-red-500/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full h-2/3 bg-black/30 rounded-md flex items-center justify-center">
            <motion.div
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              initial={{ opacity: 0, transform: "translateY(-20px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.5 }}
            >
              {timeLeft.minutes}
            </motion.div>
          </div>
          <span className="text-xs sm:text-sm md:text-base capitalize text-white mt-2 font-semibold">
            minutes
          </span>
        </motion.div>

        {/* Second */}
        <motion.div
          className="flex flex-col items-center justify-center bg-gradient-to-b  from-red-500 to-red-900 rounded-lg shadow-lg p-4 w-full aspect-square overflow-hidden border border-red-500/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full h-2/3 bg-black/30 rounded-md flex items-center justify-center">
            <motion.div
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              initial={{ opacity: 0, transform: "translateY(-20px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.5 }}
            >
              {timeLeft.seconds}
            </motion.div>
          </div>
          <span className="text-xs sm:text-sm md:text-base capitalize text-white mt-2 font-semibold">
            seconds
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default CountdownTimer;
