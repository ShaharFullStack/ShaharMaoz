import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
    ><div className="relative h-48 overflow-hidden group cursor-pointer">
        <a href={project.project_url} target="_blank" rel="noopener noreferrer">
          <img 
            src={project.image_url} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 text-white font-medium transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center bg-purple-600/80 px-3 py-2 rounded-lg backdrop-blur-sm">
              View Project <ExternalLink className="ml-1 w-4 h-4" />
            </span>
          </div>
        </a>
        <div className="absolute top-3 right-3">
          <span className="text-xs px-3 py-1 rounded-full bg-purple-900/70 backdrop-blur-sm text-purple-200 border border-purple-800/50">
            {project.category === "game" && "Game"}
            {project.category === "web" && "Web App"}
            {project.category === "tool" && "Tool"}
            {project.category === "music" && "Music"}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 rounded-full bg-purple-900/30 border border-purple-800/50 text-purple-300">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-purple-900/30 border border-purple-800/50 text-purple-300">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex justify-end">
          {project.project_url && (            <a
              href={project.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-purple-400 hover:text-white transition-colors group"
            >
              <div className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-full">
                  {project.project_url.includes("github") ? "View Code" : "View Project"}
                </span>
                <span className="absolute left-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                  {project.project_url.includes("github") ? "View Code" : "View Project"}
                </span>
              </div>
              <div className="transform transition-transform duration-300 group-hover:translate-x-1">
                {project.project_url.includes("github") ? <Github size={14} /> : <ExternalLink size={14} />}
              </div>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
