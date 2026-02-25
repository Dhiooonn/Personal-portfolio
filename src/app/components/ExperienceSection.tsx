"use client";

import FadeInWhenVisible from "./Animasi/FadeInWhenVisible";
import ExperienceItem from "./ExperienceItem";

const experiences = [
  {
    year: "2025 — Present",
    month: "juni - Present",
    company:
      "BTIK UDINUS (Biro Teknologi Informasi dan Komunikasi Universitas Dian Nuswantoro)",
    role: "UI/UX Designer & Frontend Developer",
    active: true,
  },
  {
    year: "2025",
    month: "November - Desember",
    company: "Mentor Class UI/UX Design",
    role: "Mentor UI/UX Design - Bootcamp Docom University",
  },
  {
    year: "2025 — Present",
    month: "Juli - present",
    company: "Dinus Open Source Community (DOSCOM)",
    role: "Head Of Creative Media",
  },
  {
    year: "2024 — 2025",
    month: "Juni - Juni",
    company: "Dinus Open Source Community (DOSCOM)",
    role: "Staf Of Multimedia Division",
  },
];

export default function ExperienceSection() {
  return (
    <section className=" w-full px-4 sm:px-8 md:px-16">
      <div className=" rounded-2xl p-12">
        <FadeInWhenVisible>
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center font-fredoka text-teal-500">
            My Experience
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="space-y-6 font-poppins">
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} {...exp} />
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
