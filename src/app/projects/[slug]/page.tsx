import projects from "../../../../data/projects.json";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p: any) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="bg-white min-h-screen">
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20">
        <h1 className="text-4xl font-bold text-center mb-6">{project.title}</h1>

        <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
          <img src={project.image} alt={project.title} className="w-full" />
        </div>

        <p className="text-gray-700 leading-relaxed mb-10">
          {project.description}
        </p>

        {project.link && (
          <div className="text-center">
            <a
              href={project.link}
              target="_blank"
              className="px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition"
            >
              View Design
            </a>
          </div>
        )}

        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="px-6 py-3 border rounded-full hover:bg-gray-100 transition"
          >
            ← Back to Projects
          </Link>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return projects.map((project: any) => ({
    slug: project.slug,
  }));
}
