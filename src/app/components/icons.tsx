"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Icons() {
  const icons = [
    {
      href: "https://github.com/Dhiooonn",
      icon: <FaGithub />,
    },
    {
      href: "https://www.linkedin.com/in/dhion-nur-damanhuri-2bb863275",
      icon: <FaLinkedin />,
    },
    {
      href: "https://www.instagram.com/dhioonnn",
      icon: <FaInstagram />,
    },
    {
      href: "https://wa.me/62895422528428",
      icon: <FaWhatsapp />,
    },
  ];

  return (
    <div className="flex gap-4 lg:gap-5 text-2xl lg:text-3xl">
      {icons.map(({ href, icon }, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white p-4 rounded-full shadow-md"
        >
          <a href={href} target="_blank" className="text-gray-900">
            {icon}
          </a>
        </motion.div>
      ))}
    </div>
  );
}
