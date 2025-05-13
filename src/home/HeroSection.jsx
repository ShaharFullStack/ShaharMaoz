import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { ArrowRight } from "lucide-react";

export default function HeroSection({ removeCanvas }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (removeCanvas || !canvasRef.current) return;

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 10000;
    
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      // Position
      positions[i * 3 + 0] = (Math.random() - 0.5) * 10; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
      
      // Colors - purple to pink gradient
      const colorIndex = Math.random();
      colors[i * 3 + 0] = 0.5 + colorIndex * 0.5; // r
      colors[i * 3 + 1] = 0.1 + colorIndex * 0.3; // g
      colors[i * 3 + 2] = 0.5 + (1 - colorIndex) * 0.5; // b
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.7
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Camera position
    camera.position.z = 3;
    
    // Mouse interaction
    const mouse = {
      x: 0,
      y: 0
    };
    
    const handleMouseMove = (event) => {
      // Normalize mouse coordinates (-1 to +1)
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation
    const animate = () => {
      // Basic rotation
      particles.rotation.x += 0.0002;
      particles.rotation.y += 0.0003;
      
      // Mouse interaction effect
      particles.rotation.x += mouse.y * 0.0005;
      particles.rotation.y += mouse.x * 0.0005;
      
      // Create a focus point where mouse is
      const targetX = mouse.x * 2;
      const targetY = mouse.y * 2;
      
      // Subtle movement following mouse cursor
      particles.position.x += (targetX - particles.position.x) * 0.05;
      particles.position.y += (targetY - particles.position.y) * 0.05;
      
      particlesGeometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      // Dispose resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [removeCanvas]);
    return (
    <div className="relative min-h-[90vh] flex items-center bg-transparent">
      {/* Background animation */}
      {!removeCanvas && <canvas ref={canvasRef} className="absolute inset-0 -z-10" />}
      
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
