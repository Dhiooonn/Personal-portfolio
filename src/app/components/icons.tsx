import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Icons() {
  return (
    <div className="flex gap-5 text-3xl">
      {/* Github icons */}
      <div className="bg-white p-4 rounded-full">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-gray-900" />
        </a>
      </div>

      {/* LinkedIn icons */}
      <div className="bg-white p-4 rounded-full">
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-gray-900" />
        </a>
      </div>

      {/* Instagram Icons */}
      <div className="bg-white p-4 rounded-full">
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-gray-900" />
        </a>
      </div>

      {/* WhatsApp Icons */}
      <div className="bg-white p-4 rounded-full">
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-gray-900" />
        </a>
      </div>
    </div>
  );
}
