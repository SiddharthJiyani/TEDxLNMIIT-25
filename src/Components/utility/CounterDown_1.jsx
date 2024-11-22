"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

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
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ]

  return (
    <Card className="bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-xl shadow-2xl max-w-2xl mx-auto overflow-hidden">
      <CardContent className="p-0">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-white tracking-wider">
          TEDx Countdown
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {timeUnits.map((unit, index) => (
            <div key={unit.label} className="flex flex-col items-center">
              <div className="relative w-full pb-[100%] bg-black bg-opacity-30 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={unit.value}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
                    >
                      {unit.value.toString().padStart(2, '0')}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
              <span className="text-xs sm:text-sm mt-2 text-red-100 font-semibold tracking-wider">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-1 bg-white rounded-full"
          />
          <p className="text-red-100 mt-4 text-sm sm:text-base">
            Until the next big idea
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default CountdownTimer

