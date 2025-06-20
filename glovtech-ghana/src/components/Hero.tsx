'use client'

import FadeInWhenVisible from "./FadeInWhenVisible"

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-32 px-8 flex items-center justify-center">
      <FadeInWhenVisible>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="space-y-4 md:order-2 text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Empowering Africa with AI & Tech
            </h1>
            <p className="text-lg text-gray-300">
              Glovtech Ghana delivers AI automation, web development, and IT solutions to help your business scale faster.
            </p>
            <a
              href="tel:+233540808755"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white rounded-xl font-semibold shadow-md transition duration-300"
            >
              Free Consultation!
            </a>
          </div>

          <div className="md:order-1 hidden md:block">
            <video
              src="/hero.mp4"
              className="w-full rounded-xl shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  )
}
