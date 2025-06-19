'use client'

import Image from 'next/image'
import Link from 'next/link'
import FadeInWhenVisible from './FadeInWhenVisible'

const services = [
  {
    title: 'Glovtech Pharma+ ERP',
    description:
      'An all-in-one pharmacy management system that simplifies inventory, sales, and prescription tracking for modern pharmacies.',
    image: '/erp.jpg',
    link: '#ai-automation',
  },
  {
    title: 'G-TicketN',
    description:
      'A smart digital ticketing platform built for seamless event access, bookings, and real-time tracking.',
    image: '/ticket.jpg',
    link: '#web-dev',
  },
  {
    title: 'MTN Mobile App UI',
    description:
      'A clean and user-friendly mobile interface concept for the MTN MoMo app, optimized for ease of use.',
    image: '/momo.jpg',
    link: '#it-consulting',
  },
  {
    title: 'GRACE Online Dating App UI',
    description:
      'A sleek and inclusive UI design for GRACE, a dating app focused on modern matchmaking experiences.',
    image: '/grace.jpg',
    link: '#seo-optimization',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-black to-gray-900 py-20 px-6 md:px-16 text-gray-300">
      <FadeInWhenVisible>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Products</h2>
        <p className="text-lg text-gray-400 mb-12">
          Explore the solutions we offer to help your business grow with technology.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-[380px]"
            >
              <div className="relative w-full h-60">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-left text-white bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-300 mb-2">{service.description}</p>
                <Link href={service.link} className="text-blue-400 hover:underline text-sm font-medium">
                  Explore more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      </FadeInWhenVisible>
    </section>
  )
}
