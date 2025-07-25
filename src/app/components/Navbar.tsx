import { useState } from "react";

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
    <header className="">
      <nav className="">
        <h1 className="">Dhion Nur Damanhuri</h1>
      </nav>
    </header>
  );
}
