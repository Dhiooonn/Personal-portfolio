"use client";

import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

export default function Butterfly() {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const moveButterfly = () => {
      const newX = Math.random() * (window.innerWidth - 100);
      const newY = Math.random() * (window.innerHeight - 100);
      setPosition({ x: newX, y: newY });
    };

    const interval = setInterval(moveButterfly, 2000); // setiap 2 detik gerak
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x,
        y: position.y,
        rotate: [0, 5, -5, 0], // efek melayang
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
        pointerEvents: "none", // agar tidak menghalangi klik user
      }}
    >
      <Player
        autoplay
        loop
        src="/asset/butterfly.json" // pastikan file ini ada di public/
        className="w-[clamp(40px,5vw,80px)] h-[clamp(40px,5vw,80px)]"
      />
    </motion.div>
  );
}
