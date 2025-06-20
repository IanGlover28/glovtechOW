'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react' // Requires `lucide-react`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white py-4 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 md:px-8 max-w-6xl mx-auto">
        <div className="text-2xl font-bold">Glovtech</div>

        {/* Desktop Nav Links */}
        <div className="space-x-6 hidden md:flex">
          <Link href="#services" className="hover:text-blue-400">Products</Link>
          <Link href="#about" className="hover:text-blue-400">Company</Link>
          <Link href="#solutions" className="hover:text-blue-400">Solutions</Link>
          <Link href="#contact" className="hover:text-blue-400">Contact Us</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 mt-2 space-y-4 bg-black/70 backdrop-blur-md py-4">
          <Link href="#services" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Products</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Company</Link>
          <Link href="#solutions" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Solutions</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Contact Us</Link>
        </div>
      )}
    </nav>
  )
}
