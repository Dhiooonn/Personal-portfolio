import ProjectCard from "../components/ProjectCard"; // card project
import { Project } from "@/types/project"; // types
import projects from "../../../data/projects.json"; // data
import Navbar from "../components/Navbar"; // navbar
import Footer from "../components/Footer"; // footer
import Butterfly from "@/app/components/customerService"; // customer service
import FadeInWhenVisible from "../components/Animasi/FadeInWhenVisible"; // animasi

export default function AllProjects() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Butterfly />

            <section className="max-w-6xl mx-auto pt-24 px-4 mb-12 sm:px-6">
                <FadeInWhenVisible>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-10 sm:mb-14 text-center font-fredoka text-teal-500">
                        ALL PROJECTS
                    </h1>
                </FadeInWhenVisible>

                <FadeInWhenVisible>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto font-poppins">
                        {projects.map((project: Project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </FadeInWhenVisible>
            </section>

            <Footer />
        </div>
    );
}
