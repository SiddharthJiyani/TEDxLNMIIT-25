"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const CountdownTimer = () => {
  const targetDate = new Date("2024-12-09T00:00:00") // Set your target event date here

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateTimeLeft = () => {
      const currentTime = new Date()
      const diff = targetDate.getTime() - currentTime.getTime()

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    const timerInterval = setInterval(updateTimeLeft, 1000)

    return () => clearInterval(timerInterval)
  }, [targetDate])

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ]

  return (
    <div className="bg-black p-6 rounded-xl shadow-2xl max-w-md mx-auto">

      <div className="grid grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex flex-col items-center">
            <motion.div
              className="w-20 h-20 bg-zinc-800 rounded-lg flex items-center justify-center overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={unit.value}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl font-bold text-white"
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
            </motion.div>
            <span className="text-xs mt-2 text-gray-400 font-medium">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
      <motion.div
        className="h-1 bg-red-500 rounded-full mt-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <p className="text-gray-400 text-center mt-4 text-sm">
        Until the next big idea
      </p>
    </div>
  )
}

export default CountdownTimer

