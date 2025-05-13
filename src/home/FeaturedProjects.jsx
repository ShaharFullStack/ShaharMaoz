import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { ArrowRight } from "lucide-react";
import ProjectCard from "../Components/common/ProjectCard.js";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulating project loading
    const dummyProjects = [
      {
        id: 1,
        title: "HandSynth",
        description: "A gesture-controlled musical instrument using computer vision",
        image_url: "/HandSynth.png",
        technologies: ["MediaPipe", "Tone.js", "Three.js", "JavaScript"],
        project_url: "https://shaharfullstack.github.io/HandSynthBetter/",
        category: "music"
      },
      {
        id: 2,
        title: "GuiTab",
        description: "Guitar tablature web app with interactive playback",
        image_url: "/GuiTab.png",
        technologies: ["Docker", "React", "Puppeteer", "Typescript", "Alphatab"],
        project_url: "https://github.com/ShaharFullStack/GuiTab",
        category: "web"
      },
      {
        id: 3,
        title: "UFO Game",
        description: "Interactive 3D space game with physics and collision detection",
        image_url: "/UFOGame.png",
        technologies: ["Three.js", "WebGL", "JavaScript"],
        project_url: "https://shaharfullstack.github.io/UFOGame/",
        category: "game"
      }
    ];
    
    setProjects(dummyProjects);
    setLoading(false);
  }, []);
  return (
    <section className="py-20 px-4 relative bg-transparent">
      {/* Gradient accent - keeping these with reduced opacity for subtle effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full filter blur-[120px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 rounded-full filter blur-[120px] opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Featured Projects</span>
            </h2>
            <p className="text-gray-400 max-w-xl">Check out some of my creative coding and development work</p>
          </div>
          <Link 
            to={createPageUrl("Projects")}
            className="mt-4 md:mt-0 flex items-center text-purple-400 hover:text-white transition-colors gap-1"
          >
            View all projects <ArrowRight size={16} className="ml-1" />
          </Link>
        </motion.div>
        
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
