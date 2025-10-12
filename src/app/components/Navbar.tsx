"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full border-b bg-white fixed top-0 left-0 z-50 shadow-sm h-16">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="https://collegemanch.com/views/common/collegemanch-logo.png"
            alt="College Manch Logo"
            width={130}
            height={38}
            className="object-contain"
            loading="lazy"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-[16px] text-gray-900 font-medium">
          <li><Link href="/" className="hover:text-gray-700 transition">Home</Link></li>
          {/* <li><Link href="/compare-colleges" className="hover:text-gray-700 transition">Compare Colleges</Link></li> */}
          <li><Link href="/short-videos" className="hover:text-gray-700 transition">Short Videos</Link></li>
          <li><Link href="/long-videos" className="hover:text-gray-700 transition">Long Videos</Link></li>
          <li><Link href="/college-review" className="hover:text-gray-700 transition">College Review</Link></li>
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-3 text-lg">
          <Link href="https://www.youtube.com/" target="_blank" aria-label="YouTube"
            className="text-red-600 hover:opacity-80 transition">
            <FaYoutube />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank" aria-label="Instagram"
            className="text-pink-600 hover:opacity-80 transition">
            <FaInstagram />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          aria-label="Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col items-center space-y-3 py-3 text-base font-medium text-gray-900">
            <li><Link href="/" onClick={closeMenu}>Home</Link></li>
            <li><Link href="/compare-colleges" onClick={closeMenu}>Compare Colleges</Link></li>
            <li><Link href="/short-videos" onClick={closeMenu}>Short Videos</Link></li>
            <li><Link href="/long-videos" onClick={closeMenu}>Long Videos</Link></li>
            <li><Link href="/college-review" onClick={closeMenu}>College Review</Link></li>
            <div className="flex items-center space-x-4 pt-2 text-lg">
              <Link href="https://www.youtube.com/" target="_blank" aria-label="YouTube"
                className="text-red-600 hover:opacity-80 transition">
                <FaYoutube />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank" aria-label="Instagram"
                className="text-pink-600 hover:opacity-80 transition">
                <FaInstagram />
              </Link>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
