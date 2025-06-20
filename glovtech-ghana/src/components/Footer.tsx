'use client'

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import FadeInWhenVisible from './FadeInWhenVisible'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 pt-16 pb-8 mt-20">
      <FadeInWhenVisible>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#solutions" className="hover:text-white transition">Solutions</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Resources</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition">Partners</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">About Glovtech</h2>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              We provide cutting-edge AI solutions, web services, and automation to transform businesses across Africa.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-sm">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Glovtech Ghana. All rights reserved.</p>
          <a href="#" className="text-gray-500 hover:text-white mt-4 md:mt-0">Terms & Conditions</a>
        </div>
      </FadeInWhenVisible>
    </footer>
  )
}
