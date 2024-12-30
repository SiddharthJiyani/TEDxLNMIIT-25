'use client'

import React from 'react';
import { motion } from 'framer-motion'
import { Instagram, Globe, Phone, Mail } from 'lucide-react'
import { useEffect } from 'react';
const SVGIcon = ({ d, className }: { d: string; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-6 h-6 ${className}`}
  >
    <path d={d} />
  </svg>
)
  
const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`bg-red-600 border-white border-[2px] hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
)

const Card = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`bg-black bg-opacity-50 backdrop-blur-md rounded-2xl p-6 shadow-[0_0_21px_0px_#ef2800] hover:shadow-[0_0_30px_0px_#ef2800] transition-shadow duration-300 ${className}`}
    {...props}
  >
    {children}
  </div>
)

const CardHeader = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={`text-2xl font-bold text-center text-gray-100 ${className}`} {...props}>
    {children}
  </h3>
)

const CardDescription = ({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`text-gray-400 text-center ${className}`} {...props}>
    {children}
  </p>
)

const CardContent = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={className} {...props}>
    {children}
  </div>
)

export default function CampusAmb() {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page starts at the top
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stars.png')] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" />
          <div
            className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
            style={{ animationDelay: '4s' }}
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 py-12 sm:py-24"
      >
        <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4  bg-clip-text text-[#ff3006] ">
  TEDx<span className="text-white">LNMIIT</span> 2025
</h1>

          <p className="text-xl sm:text-2xl mb-8 text-gray-300">
            Campus Ambassador Program
          </p>
          <div className="relative bg-gradient-to-l from-transparent via-red-600 to-transparent text-white py-4 px-6 rounded-lg">
            <div className="flex justify-center items-center">
              <span className="text-xl font-semibold">Spread Ideas That Matter!</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-500">
            Why Become a Campus Ambassador?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
                <CardDescription>What you'll gain as an ambassador</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                  <li>Exclusive Free Ticket: Win a chance for TEDxLNMIIT 2025</li>
                  <li>Exclusive TEDxLNMIIT merchandise and goodies</li>
                  <li>Official certificate recognizing your contribution</li>
                  <li>Networking with speakers and influencers</li>
                  <li>Develop leadership and organizational skills</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Responsibilities</CardTitle>
                <CardDescription>Your role as an ambassador</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                  <li>Promote TEDxLNMIIT 2025 through various channels</li>
                  <li>Assist in organizing TEDx-related events on campus</li>
                  <li>Engage and inspire your community</li>
                  <li>Share the importance of ideas worth spreading</li>
                  <li>Represent TEDxLNMIIT in your institution</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Ready to Make an Impact?
          </h2>
          <Button>
            <a
              href="https://forms.gle/7URnnJrEJuMu4E2y8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply to be a Campus Ambassador
            </a>
          </Button>
          <p className="mt-4 text-gray-400">
            Fill out the application form, and we'll contact you with further details.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Join Our Inspiring Community
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
                title: "Spread Ideas",
                description: "Be a catalyst for sharing innovative thoughts",
              },
              {
                icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
                title: "Build Connections",
                description: "Network with diverse, like-minded individuals",
              },
              {
                icon: "M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z",
                title: "Personal Growth",
                description: "Enhance your skills and broaden your horizons",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-zinc-700 bg-opacity-40 backdrop-blur-sm p-6 rounded-lg text-center"
              >
                <SVGIcon
                  d={item.icon}
                  className="w-12 h-12 mx-auto mb-4 text-red-500"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}

