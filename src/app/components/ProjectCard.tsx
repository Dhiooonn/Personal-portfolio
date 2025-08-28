import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border-gray-100 border-2">
            <span className="inline-block self-start bg-teal-500 text-white text-xl font-semibold px-6 py-3 rounded-xl mb-4">
                {project.category}
            </span>

            <div className="w-full h-72 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover rounded-md"
                    />
                ) : (
                    <span className="text-gray-400">Image Placeholder</span>
                )}
            </div>

            <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
            <p className="text-lg text-gray-600 mt-2 line-clamp-3">{project.description}</p>

            <a
                href={project.link}
                target="_blank"
                className="mt-8 inline-block text-xl text-center bg-teal-500 text-white font-medium py-3 px-6 rounded-xl hover:bg-teal-600 transition"
            >
                View Project
            </a>
        </div>
    );
}
