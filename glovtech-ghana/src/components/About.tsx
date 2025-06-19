'use client'

import Image from 'next/image'
import FadeInWhenVisible from './FadeInWhenVisible'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white text-gray-900 px-4 md:px-10 lg:px-20">
      <FadeInWhenVisible>
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/logo.jpg"
            alt="About Glovtech Ghana"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">About Glovtech Ghana</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Glovtech Ghana, we harness the power of AI, automation, and modern tech to help African businesses operate smarter. Our mission is to drive efficiency, elevate customer experiences, and innovate through practical digital solutions.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
           Meet The Team
          </button>
        </div>
      </div>

      {/* Card Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: 'AI Automation',
            desc: 'We build AI tools that streamline your workflow and save time.',
            img: '/ai-card.jpg'
          },
          {
            title: 'Web Design & Development',
            desc: 'Modern, responsive websites tailored for your business needs.',
            img: '/web-card.jpg'
          },
          {
            title: 'IT Consulting',
            desc: 'Get expert advice to scale your digital infrastructure.',
            img: '/it-card.jpg'
          },
          {
            title: 'Social Media Management',
            desc: 'We offer active Social Media Account Management and Social media account Sales to our clients.',
            img: '/social-card.jpg'
          }
        ].map((card, index) => (
          <div key={index} className="bg-gray-100 rounded-2xl shadow hover:shadow-lg transition p-4">
            <Image
              src={card.img}
              alt={card.title}
              width={400}
              height={250}
              className="rounded-xl object-cover w-full h-48 "
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
      </FadeInWhenVisible>
    </section>
  )
}
