import ProjectCard from "../components/ProjectCard"; // card project
import { Project } from "@/types/project"; // types
import projects from "../../../data/projects.json"; // data
import Navbar from "../components/Navbar"; // navbar
import Butterfly from "@/app/components/customerService"; // customer service

export default function AllProjects() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Butterfly />

            <section className="max-w-6xl mx-auto pt-26">
                <h1 className="text-6xl font-bold mb-14 text-center font-fredoka text-teal-500">
                    All Projects
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto font-poppins">
                    {projects.map((project: Project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
}
