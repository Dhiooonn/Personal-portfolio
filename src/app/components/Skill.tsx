"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const skillIcons = [
  "reactJS",
  "nextJS",
  "php",
  "javascript",
  "typescript",
  "bootstrap",
  "tailwindCss",
];

const repeatedIcons = [
  ...skillIcons,
  ...skillIcons,
  ...skillIcons,
  ...skillIcons,
];

export default function AutoScrollSkillAnimation() {
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const speed = 60;
  const iconWidth = 64 + 64;
  const totalWidth = repeatedIcons.length * iconWidth;

  const x = useTransform(
    baseX,
    (v) => `${-((v % totalWidth) + totalWidth) % totalWidth}px`
  );

  // Frame-by-frame animasi
  useAnimationFrame((t, delta) => {
    if (isPaused) return;
    const moveBy = (delta / 1000) * speed;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="relative w-full overflow-hidden py-4 cursor-pointer"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex gap-16 w-max will-change-transform"
      >
        {repeatedIcons.map((skill, index) => (
          <motion.div
            key={index}
            className="shrink-0 w-16 h-16"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={`/logo-${skill}.webp`}
              alt={skill}
              width={150}
              height={150}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
