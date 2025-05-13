import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {    return (
    <div className="relative min-h-[90vh] flex items-center bg-transparent">
      
      <div className="container mx-auto px-4 md:px-8 z-10 relative">
        <div className="md:flex md:items-center md:justify-between md:gap-8">
          <div className="max-w-3xl md:flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  Shahar Maoz
                </span>
                <span className="text-white">
                  Programmer, Musician, Visual Artist & AI Expert
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              With over 15 years of experience as an educator, musician, and performer, I bring a unique blend of creativity, 
              pedagogical insight, and technical expertise to every project.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to={createPageUrl("Projects")}
                className="px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(191,85,236,0.6)] flex items-center gap-2"
              >
                View My Projects <ArrowRight size={18} />
              </Link>
              
              <Link
                to={createPageUrl("Music")}
                className="px-6 py-3 rounded-lg font-medium bg-transparent border border-purple-500 hover:bg-purple-900/30 transition-all duration-300 transform hover:scale-105"
              >
                My Music
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:block md:w-1/2 lg:w-2/5 mt-8 md:mt-0 md:ml-4"
          >
            <img 
              src="https://github.com/ShaharFullStack/cryptoProject/blob/master/assets/img/aboutBackground2.png?raw=true" 
              alt="Shahar Maoz Profile" 
              className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
              style={{ height:"700px",  filter: "drop-shadow(2px 2px 10px rgba(191, 85, 236, 0.92))" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
