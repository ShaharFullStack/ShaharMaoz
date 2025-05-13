import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const contactLinks = [
    {
      name: "Email",
      value: "rakloze@gmail.com",
      icon: <Mail className="text-purple-400" size={28} />,
      url: "mailto:rakloze@gmail.com",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/shaharmh",
      icon: <Linkedin className="text-blue-400" size={28} />,
      url: "https://www.linkedin.com/in/shaharmh",
    },
    {
      name: "X",
      value: "x.com/shaharmh",
      icon: <span className="text-2xl leading-none">𝕏</span>,
      url: "https://www.x.com/shaharmh",
    },
    {
      name: "GitHub",
      value: "github.com/ShaharFullStack",
      icon: <Github className="text-gray-300" size={28} />,
      url: "https://github.com/ShaharFullStack",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
          Contact Me
        </h1>
        <div className="w-24 h-1 mx-auto rounded-full glow bg-gradient-to-r from-purple-600 to-pink-500"></div>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Feel free to reach out through any of these channels. I'm always open to new opportunities, collaborations, or just a friendly chat.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactLinks.map((contact) => (
          <a
            key={contact.name}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="glass-card rounded-xl p-6 h-full transition-all duration-300 hover:glow hover:transform hover:scale-105 hover:bg-purple-900/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#2a1a3a] group-hover:bg-purple-800/60 transition-colors duration-300">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:neon-text transition-all duration-300">
                    {contact.name}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Profile Image and Name Section */}
      <div className="mt-16 text-center">
        <div className="w-40 h-40 mx-auto rounded-full glow bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
          <img 
            src="me.JPEG" 
            alt="Shahar Maoz" 
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>
        <h2 className="mt-6 text-3xl font-bold neon-text">Shahar Maoz</h2>
        <h2 className="mt-2 text-2xl font-bold neon-text">+972-52-534-7274</h2>
        <p className="mt-7 text-gray-400">
          Musician • Programmer • Visual Artist • AI Expert
        </p>
      </div>
      
      {/* Optional Additional Info */}
      <div className="mt-2 text-center">
        <p className="text-gray-400">
          Based in Israel • Available for remote work worldwide
        </p>
      </div>
    </div>
  );
}