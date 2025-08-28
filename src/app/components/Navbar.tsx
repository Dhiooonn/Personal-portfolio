"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = ["HOME", "ABOUT", "SKILL", "WORK", "CONTACT"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false); // Scroll down
      } else {
        setShowNavbar(true); // Scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.header
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.3 }}
          className="fixed w-full px-4 py-4 lg:px-16 bg-white shadow-md z-50"
        >
          <nav className="flex justify-between items-center">
            <h1 className="font-fredoka font-bold text-teal-500 text-2xl">
              Dhion Nur Damanhuri
            </h1>

            <ul className="hidden lg:flex gap-6 text-teal-500 font-bold ">
              {menuItems.map((label) => (
                <li key={label}>
                  <Link
                    href={label === "HOME" ? "/" : `/#${label.toLowerCase()}`}
                    className="font-fredoka hover:text-white hover:bg-teal-500 px-4 py-2 rounded-xl transition-all duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="lg:hidden">
              {isOpen ? (
                <XMarkIcon
                  className="w-8 h-8 text-teal-500 cursor-pointer transition duration-300 hover:rotate-90"
                  onClick={toggleMenu}
                />
              ) : (
                <Bars3Icon
                  className="w-8 h-8 text-teal-500 cursor-pointer transition duration-300 hover:scale-110"
                  onClick={toggleMenu}
                />
              )}
            </div>
          </nav>

          <AnimatePresence>
            {isOpen && (
              <motion.ul
                className="absolute z-50 top-full left-0 w-full bg-white shadow-lg rounded-b-2xl flex flex-col gap-3 lg:hidden px-4 py-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {menuItems.map((label) => (
                  <li key={label}>
                    <Link
                      href={`#${label.toLowerCase()}`}
                      onClick={closeMenu}
                      className="block w-full text-teal-500 font-bold font-fredoka hover:text-white hover:bg-teal-500 px-4 py-2 rounded-xl transition-all duration-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
