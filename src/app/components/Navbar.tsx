"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#work", label: "WORK" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 py-6">
        <h1 className="font-fredoka font-bold text-teal-500 text-xl sm:tet-2xl d:text-3xl">
          Dhion Nur Damanhuri
        </h1>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                rel="stylesheet"
                href={href}
                onClick={closeMenu}
                className="font-fredoka font-bold text-teal-500 hover:text-white hover:bg-teal-500 py-2 px-4 rounded-2xl transition-all  duration-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Humberger Menu */}
        <button
          className="md:hidden text-teal-500 text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6 shadow-md">
          <ul className="flex flex-col gap-4">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  rel="stylesheet"
                  href={href}
                  onClick={closeMenu}
                  className="block w-full font-fredoka font-bold text-teal-500 hover:text-white hover:bg-teal-500 py-2 px-4 rounded-2xl transition-all duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
