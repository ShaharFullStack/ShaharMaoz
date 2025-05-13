import React from "react";
import { motion } from "framer-motion";
import { Code, Music, Gamepad2, Cpu } from "lucide-react";

export default function AboutSection() {
  const skills = [
    {
      title: "Programming",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-600 to-indigo-600",
      description: "Full stack web development with React, TypeScript, and modern frameworks."
    },
    {
      title: "Game Development",
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600",
      description: "Creating interactive 3D experiences with Three.js and WebGL technologies."
    },
    {
      title: "Music Production",
      icon: <Music className="w-6 h-6" />,
      color: "from-pink-600 to-red-600",
      description: "Composing, performing, and producing music across various genres and styles."
    },
    {
      title: "AI & Technology",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-green-600 to-teal-600",
      description: "Exploring the intersection of artificial intelligence and creative expression."
    }
  ];
  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            My journey into technology was driven by a desire to combine my diverse skills to solve complex problems 
            in innovative ways. From fullstack websites to three.js games and visualizations or musical instruments 
            controlled by hand gestures, I love creating engaging digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-xl bg-opacity-30"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-5`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
