import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Gamepad2, Code, Music, Home, Menu, X, Linkedin, Github, Mail } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: <Home />, page: "Home" },
    { name: "Projects", icon: <Gamepad2 />, page: "Projects" },
    { name: "Code", icon: <Code />, page: "Code" },
    { name: "Music", icon: <Music />, page: "Music" },
    { name: "Contact", icon: <Mail />, page: "Contact" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/shaharmh" },
    { name: "X", icon: <span className="text-xl leading-none">𝕏</span>, url: "https://www.x.com/shaharmh" },
    { name: "GitHub", icon: <Github size={20} />, url: "https://github.com/ShaharFullStack" }
  ];

  return (
    <div className="min-h-screen bg-[#0f0617] text-white font-sans">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse {
          0% { opacity: 0.4; }
          50% { opacity: 0.8; }
          100% { opacity: 0.4; }
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        
        .glass-nav {
          background: rgba(15, 6, 23, ${scrolled ? "0.85" : "0.5"});
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .glow {
          box-shadow: 0 0 15px 2px rgba(191, 85, 236, 0.3),
                      0 0 30px 5px rgba(191, 85, 236, 0.1);
        }
        
        .neon-text {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
                       0 0 20px rgba(191, 85, 236, 0.5);
        }
        
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: pulse 3s infinite ease-in-out;
        }
        
        .floating {
          animation: float 6s infinite ease-in-out;
        }

        .social-icon {
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          transform: translateY(-3px);
          filter: drop-shadow(0 0 8px rgba(191, 85, 236, 0.6));
        }
      `}</style>
      
      {/* Purple-pink gradient in the background */}
      <div 
        className="fixed inset-0 z-0 opacity-40" 
        style={{
          background: "radial-gradient(circle at top right, rgba(255, 75, 160, 0.3), transparent 60%), radial-gradient(circle at bottom left, rgba(191, 85, 236, 0.3), transparent 60%)"
        }}
      />

      {/* Navbar - Three Column Layout */}
      <nav className={`glass-nav fixed top-0 left-0 right-0 z-50 py-3 px-4 md:px-8 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
          {/* Logo & Name - Left */}
          <div className="flex items-center">
            <Link to={createPageUrl("Home")} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center glow bg-gradient-to-br from-purple-600 to-pink-500">
                <img src="Logo.png" alt="Logo" className="w-9.8 h-9.8 rounded-full" />
              </div>
              <span className="text-xl font-bold tracking-wider neon-text">SHAHAR MAOZ</span>
            </Link>
          </div>

          {/* Navigation - Center */}
          <div className="hidden md:flex items-center justify-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={createPageUrl(item.page)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-purple-800/30 hover:scale-105 ${
                  currentPageName === item.page 
                    ? "bg-purple-800/50 text-white glow" 
                    : "text-gray-300"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Social Links - Right */}
          <div className="hidden md:flex items-center justify-end gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white social-icon"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden col-span-2 flex justify-end">
            <button 
              className="p-2 rounded-lg glass-card" 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setMenuOpen(false)} />
        <div className="absolute right-0 top-0 h-full w-64 glass-card p-8 pt-20 transform transition-transform duration-300 flex flex-col gap-4" style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(100%)' }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={createPageUrl(item.page)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                currentPageName === item.page 
                  ? "bg-purple-800/50 text-white glow" 
                  : "text-gray-300"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.icon}
              <span className="text-lg">{item.name}</span>
            </Link>
          ))}

          {/* Social links in mobile menu */}
          <div className="mt-4 pt-4 border-t border-purple-800/30">
            <div className="flex justify-center gap-6 px-4 py-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white social-icon"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="pt-24 pb-16 z-10 relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-800/30 pt-1 pb-2 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full glow bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                <img src="Logo.png" alt="Logo" className="w-7.8 h-7.8 rounded-full" />
              </div>
              <span className="font-bold text-lg">Shahar Maoz</span>
              <span className="hidden md:inline"></span>
            </div>

            <div className="text-sm text-gray-400">
              Musician • Programmer • Visual Artist • AI Expert
            </div>
          </div>
          <div className="md:hidden text-xs text-gray-500 mt-2 text-center">
            +972-52-534-7274 • rakloze@gmail.com
          </div>
          <div className="text-center text-xs text-gray-500 mt-2">
            © {new Date().getFullYear()} Shahar Maoz. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}