import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Project } from "../Entities/Project";
import ProjectCard from "../Components/common/ProjectCard.js";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const allProjects = await Project.list("-created_date");
        setProjects(allProjects);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "game", label: "Games" },
    { id: "web", label: "Web Apps" },
    { id: "tool", label: "Tools" },
    { id: "music", label: "Music" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">My Projects</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore my creative coding projects, spanning from interactive 3D games to innovative tools and web applications
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex justify-center flex-wrap gap-3 mb-12"
      >
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === category.id 
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_10px_rgba(191,85,236,0.5)]" 
                : "glass-card hover:bg-purple-900/30 text-gray-300"
            }`}
          >
            {category.label}
          </button>
        ))}
      </motion.div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="glass-card rounded-xl h-80 animate-pulse">
              <div className="h-48 bg-purple-900/20 rounded-t-xl"></div>
              <div className="p-5">
                <div className="h-5 bg-purple-900/20 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-purple-900/20 rounded w-full mb-2"></div>
                <div className="h-4 bg-purple-900/20 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-2xl font-medium text-gray-400">No projects found in this category</h3>
        </div>
      )}
    </div>
  );
}