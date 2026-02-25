import Link from "next/link";
import { notFound } from "next/navigation";

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  role: string;
  category: string;
  content: string;
}

const projects: { [key: string]: Project } = {
  "ecommerce-platform": {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform Case Study",
    description: "Designing a scalable and user-friendly commerce experience.",
    image: "/projects/ecommerce.jpg",
    date: "January 2026",
    role: "Full Stack Developer",
    category: "Web Development",
    content: `
    Establishing a modern commerce experience requires balancing performance, design, and usability.
    
    The goal of this project was to build a scalable platform that feels seamless across devices while keeping checkout friction minimal.
    
    The biggest challenge was maintaining performance while integrating payment systems and dynamic product filtering.
    
    The final result is a fast, intuitive, and conversion-focused e-commerce experience.
    `,
  },
};

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects[params.slug];
  if (!project) return notFound();

  return (
    <main className="bg-white text-gray-900">
      {/* Container */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight mb-6">
          {project.title}
        </h1>

        {/* Category Tag */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 text-sm bg-teal-100 text-teal-700 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Short Description */}
        <p className="text-center text-gray-600 text-lg mb-12">
          {project.description}
        </p>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Meta Info */}
        <div className="flex justify-center gap-10 text-sm text-gray-500 mb-14">
          <div>
            <p className="font-semibold text-gray-700">Role</p>
            {project.role}
          </div>
          <div>
            <p className="font-semibold text-gray-700">Date</p>
            {project.date}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {project.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-20 text-center">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
          >
            ← Back to Projects
          </Link>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}
