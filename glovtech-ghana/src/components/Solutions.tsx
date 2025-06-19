'use client'

import Image from 'next/image'
import FadeInWhenVisible from './FadeInWhenVisible'

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="w-full bg-white py-20 px-6 text-gray-800"
    >
        <FadeInWhenVisible>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        {/* Solutions List (Left) */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Solutions</h3>
          <ul className="space-y-2 text-gray-700 text-left">
            <li>AI-Powered Email Automation</li>
            <li>Web Design & Development</li>
            <li>SEO Optimization</li>
            <li>IT Consulting & Tech Strategy</li>
            <li>CMS Integration (WordPress, Shopify)</li>
            <li>Social Media Management</li>
            <li>Google Ads & Facebook Ads Setup</li>
            <li>Custom Web Portals & Dashboards</li>
            <li>Domain & Hosting Setup</li>
            <li>Branding & Graphic Design</li>
          </ul>
        </div>

        {/* Logo (Center) */}
        <div className="flex flex-col items-center">
        <video
  src="/glovtech.mp4"
  width={170}
  height={170}
  autoPlay
  loop
  muted
  playsInline
  className="rounded-full"
/>

          {/* <h2 className="text-xl font-bold mt-4">Glovtech Ghana</h2> */}
        </div>

        {/* What Makes Us Stand Out (Right) */}
        <div className="md:text-right">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">
            What Makes Us Stand Out
          </h3>
          <p className="text-gray-700">
            At Glovtech, we bridge innovation and impact. We deliver intelligent
            automation and digital services tailored for Ghanaian and African businesses.
            Our team combines local insight with global tech trends to help you scale smart.
          </p>
        </div>
      </div>
      </FadeInWhenVisible>
    </section>
  )
}
