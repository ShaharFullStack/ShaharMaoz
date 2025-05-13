import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Code as CodeIcon, ExternalLink } from "lucide-react";

export default function Code() {
  const [activeTab, setActiveTab] = useState("web");
  
  const projects = {
    web: [
            {
        title: "My Resume Website",
        description: "My resume in English and Hebrew with some easter eggs (try the skills) and a pdf export.",
        category: "web",
        image: "Resume.png",
        live: "https://shaharfullstack.github.io/ShaharResume/",
        technologies: ["JavaScript", "HTML5", "CSS3", "Three.js"],
      },
      {
        title: "Vacations Website",
        description: "A full-stack vacation management system with user authentication, favorites, and admin dashboard.",
        github: "https://github.com/ShaharFullStack/vacation-management",
        technologies: ["React", "Node.js", "MySQL", "JWT", "Redux"],
        image: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&q=80"
      },
      {
        title: "Cryptonite",
        description: "A cryptocurrency portfolio tracker and news aggregator.",
        github: "http://github.com/ShaharFullStack/cryptoProject",
        technologies: ["JavaScript", "HTML5", "CSS3", "API"],
        image: "Cryptonite.png"
      },

    ],
    games: [
      {
        title: "UFO Tower Game",
        description: "A 3D game where the player's hands gestures control a UFO to grab and stack cubes.",
        github: "https://github.com/ShaharFullStack/UFOcubeTower",
        technologies: ["Three.js", "JavaScript", "WebGL"],
        image: "UFOGame.png"
      },
      {
        title: "Balloon Flighter",
        description: "A balloon shooting game with 3D flight controls and physics.",
        github: "https://github.com/ShaharFullStack/3DFlightSimulator/",
        technologies: ["Three.js", "JavaScript", "3D Physics"],
        image: "BalloonFlighter.png"
      },
      {
        title: "2D Balloon Jumper",
        description: "A 2D game where players control a balloon to avoid obstacles and collect items.",
        github: "https://github.com/ShaharFullStack/BalloonGame/",
        technologies: ["JavaScript", "HTML5", "CSS3"],
        image: "BalloonGame.png"
      },
    ],
    tools: [
            {
        title: "GuiTab",
        description: "A guitar tablature editor with interactive UI and playback capabilities.",
        github: "https://github.com/ShaharFullStack/GuiTab",
        technologies: ["Docker", "React", "Puppeteer", "Typescript", "Alphatab"],
        image: "GuiTab.png"
      },
    ],
    music: [
      {
        title: "HandSynth",
        description: "An innovative musical instrument controlled by hand gestures.",
        github: "https://github.com/ShaharFullStack/HandSynthBetter/",
        technologies: ["TensorFlow.js", "Web Audio API", "Canvas"],
        image: "HandSynth.png"
      },
      {
        title: "Chord Blast",
        description: "Use your fist to gather the particles and start FX synthesizer, open your hand to release the particles.",
        github: "https://github.com/ShaharFullStack/ChordBlast",
        technologies: ["TensorFlow.js", "Web Audio API", "JavaScript"],
        image: "ChordBlast.png"
      },
    ]
  };
  const tabs = [
    { id: "web", label: "Web Apps" },
    { id: "games", label: "Games" },
    { id: "tools", label: "Tools" },
    { id: "music", label: "Music" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Code Projects</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore my programming projects spanning web development, game creation, and innovative tools
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex justify-center mb-12"
      >
        <div className="glass-card rounded-full p-1 inline-flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab.id 
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" 
                : "hover:bg-white/5 text-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-12"
        >
          {projects[activeTab].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-video md:aspect-auto">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent md:bg-gradient-to-t md:from-black/70 md:via-transparent md:to-transparent"></div>
                  <div className="absolute bottom-4 left-4 md:hidden">
                    <h2 className="text-xl font-bold text-white">{project.title}</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 hidden md:block">{project.title}</h2>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 rounded-full bg-purple-900/30 border border-purple-800/50 text-purple-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-transparent border border-purple-500 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105"
                      >
                        <Github size={18} />
                        GitHub Repo
                      </a>
                    )}
                    
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-3xl mx-auto mt-20 text-center"
      >
        <div className="glass-card rounded-xl p-8">
          <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6">
            <CodeIcon className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Interested in my code?</h2>
          <p className="text-gray-300 mb-6">
            Check out my GitHub profile for more projects and contributions.
          </p>
          <a
            href="https://github.com/ShaharFullStack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            View GitHub Profile
          </a>
        </div>
      </motion.div>
    </div>
  );
}