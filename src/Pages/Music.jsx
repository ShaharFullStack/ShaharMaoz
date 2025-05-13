import React from "react";
import { motion } from "framer-motion";
import { Music as MusicIcon } from "lucide-react";

export default function Music() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Music</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore my musical journey as a performer, composer, and innovator at the intersection of technology and sound
        </p>
      </motion.div>

      <div className="max-xl mx-auto">
        {/* HandSynth Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-xl overflow-hidden mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600">
                  <MusicIcon className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold">HandSynth</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                An innovative musical instrument controlled by hand gestures, using computer vision technology to transform movement into sound.
              </p>
              
              <ul className="mb-6 space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Real-time hand tracking
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Custom synthesizer engine
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Gesture-controlled effects
                </li>
              </ul>
              
              <a 
                href="https://shaharfullstack.github.io/HandSynthBetter/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Try HandSynth
              </a>
            </div>
            <div className="relative h-full">
              <iframe 
                src="https://drive.google.com/file/d/1Ino7JsiJtoNI5x49UFVHoCbWheec8cbU/preview" 
                width="100%" 
                height="100%" 
                allow="autoplay"
                className="min-h-[300px]"
                frameBorder="0"
                title="HandSynth Project Demonstration"
              ></iframe>
            </div>
          </div>
        </motion.div>
        {/* GuiTab Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-xl overflow-hidden mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600">
                  <MusicIcon className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold">GuiTab</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                A web scraping Guitar Pro-based guitar tab search engine, player and editor, designed to enhance the experience of learning and playing guitar.
              </p>
              
              <ul className="mb-6 space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Scrap Guitar Pro files
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Custom music sheet spread
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Player can choose a note-sheet, tab or both
                </li>
              </ul>
              
              <a 
                href="https://github.com/ShaharFullStack/GuiTab" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                To GuiTab's Repository on GitHub
              </a>
            </div>
            <div className="relative h-full">
              <iframe 
                src="https://drive.google.com/file/d/1A8Ifpv-LHKC-ZB2iy0zcjeaFX_Qlyqf5/preview" 
                width="100%" 
                height="100%" 
                allow="autoplay"
                className="min-h-[300px]"
                title="HandSynth Project Demonstration"
              ></iframe>
            </div>
          </div>
        </motion.div>        
        {/* Music Player - SoundCloud Embeds */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
        <h1 className="text-3xl md:text-3=4xl font-bold mb-5">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">My Compositions</span>
        </h1>          
          <div className="space-y-8">

              {/* Going Nowhere */}
            <div className="glass-card rounded-lg p-4">
              <iframe 
                title="Going Nowhere - Shahar Maoz Hakim"
                width="100%" 
                height="100" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/94105068&color=%23a5149b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
              <div className="text-xs text-gray-400 mt-2 font-light">
                <a href="https://soundcloud.com/rakloze" title="Shahar Maoz Hakim" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Shahar Maoz Hakim
                </a> · 
                <a href="https://soundcloud.com/rakloze/going-nowhere-shahar-maoz" title="Going Nowhere" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors ml-1">
                  Going Nowhere
                </a>
              </div>
            </div>
              {/* When I Fall Asleep */}
            <div className="glass-card rounded-lg p-4">
              <iframe 
                title="When I Fall Asleep - Shahar Maoz Hakim"
                width="100%" 
                height="100" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/119132435&color=%23a5149b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
              <div className="text-xs text-gray-400 mt-2 font-light">
                <a href="https://soundcloud.com/rakloze" title="Shahar Maoz Hakim" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Shahar Maoz Hakim
                </a> · 
                <a href="https://soundcloud.com/rakloze/when-i-fall-asleep" title="When I Fall Asleep" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors ml-1">
                  When I Fall Asleep
                </a>
              </div>
            </div>
                        {/* Leylotaim */}
            <div className="glass-card rounded-lg p-4">
              <iframe 
                title="Leylotaim" 
                width="100%" 
                height="100" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/960694669&color=%23a5149b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}