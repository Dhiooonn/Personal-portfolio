"use client";

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Project, Category } from "@/types/project";
import projectsData from "../../../data/projects.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Butterfly from "@/app/components/customerService";
import FadeInWhenVisible from "../components/Animasi/FadeInWhenVisible";

const projects = projectsData as Project[];

type FilterType = "all" | Category;

export default function AllProjects() {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");

    const filteredProjects = projects.filter((project) => {
        if (activeFilter === "all") return true;
        return project.category.includes(activeFilter);
    });

    return (
        <div className="min-h-screen">
            <Navbar />
            <Butterfly />

            <section className="max-w-6xl mx-auto pt-24 px-4 mb-12 sm:px-6">
                {/* TITLE */}
                <FadeInWhenVisible>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-14 text-center font-fredoka text-teal-500">
                        ALL PROJECTS
                    </h1>
                </FadeInWhenVisible>

                {/* FILTER */}
                <FadeInWhenVisible>
                    <div className="flex justify-center gap-2 mb-14 font-poppins">
                        {(["all", "uiux", "frontend"] as FilterType[]).map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-3 rounded-3xl border-2 text-lg font-semibold transition
                    ${activeFilter === filter
                                        ? "bg-teal-500 text-white border-teal-500"
                                        : "bg-white text-teal-500 hover:text-white border-teal-500 hover:bg-teal-500"
                                    }`}
                            >
                                {filter === "all"
                                    ? "All"
                                    : filter === "uiux"
                                        ? "UI/UX Design"
                                        : "Frontend Developer"}
                            </button>
                        ))}
                    </div>
                </FadeInWhenVisible>

                {/* GRID */}
                <FadeInWhenVisible>
                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-poppins">
                            {filteredProjects.map((project: Project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-teal-50">
                                <span className="text-4xl">📁</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                                No projects found
                            </h3>
                            <p className="text-gray-500 max-w-md">
                                There are no projects available in this category at the moment.
                            </p>
                            <button
                                onClick={() => setActiveFilter("all")}
                                className="mt-6 px-6 py-3 rounded-full bg-teal-500 text-white font-semibold hover:bg-teal-600 transition"
                            >
                                View All Projects
                            </button>
                        </div>
                    )}
                </FadeInWhenVisible>
            </section>

            <Footer />
        </div>
    );
}
