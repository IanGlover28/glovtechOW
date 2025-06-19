'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white py-4 backdrop-blur-md">
    <div className="flex justify-between items-center px-6 md:px-8 max-w-6xl mx-auto">
      <div className="text-2xl font-bold">Glovtech</div>
      <div className="space-x-6 hidden md:flex">
        <Link href="#services" className="hover:text-blue-400">Products</Link>
        <Link href="#about" className="hover:text-blue-400">Company</Link>
        <Link href="#solutions" className="hover:text-blue-400">Solutions</Link>
        <Link href="#contact" className="hover:text-blue-400">Contact Us</Link>
      </div>
    </div>
  </nav>
  
  )
}
