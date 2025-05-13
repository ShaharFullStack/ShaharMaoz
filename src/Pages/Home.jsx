import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import HeroSection from "../home/HeroSection.jsx";
import AboutSection from "../home/AboutSection.jsx";
import FeaturedProjects from "../home/FeaturedProjects.jsx";

export default function Home() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;    // Three.js setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f0617, 0.05); // Add fog to make distant particles fade out
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0f0617, 0); // Match background color with zero opacity
      // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 8000; // Significantly reduced from 10000
    
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      // Position
      positions[i * 3 + 0] = (Math.random() - 0.5) * 7; // x - increased spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7; // y - increased spread
      positions[i * 3 + 2] = (Math.random() - 0.5) * 7; // z - increased spread
      
      // Colors - deep purple to pink gradient with much less white
      const colorIndex = Math.random();
      colors[i * 3 + 0] = 0.3 + colorIndex * 0.4; // r - reduced red
      colors[i * 3 + 1] = 0.05 + colorIndex * 0.1; // g - significantly reduced green
      colors[i * 3 + 2] = 0.4 + colorIndex * 0.3; // b - enhanced blue for purple tone
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));    // Use AdditiveBlending for a more subtle, glowing effect
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02, // Smaller points
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.4, // Much more transparent
      depthTest: true,
      depthWrite: false, // Prevent z-fighting
      blending: THREE.AdditiveBlending // This creates a softer, glowing effect
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
  }, []);
  return (
    <div className="relative">
      {/* Full page background Three.js canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-[#0f0617]" />
      
      {/* Content sections */}
      <div className="relative z-10">
        <HeroSection removeCanvas={true} />
        <AboutSection />
        <FeaturedProjects />
      </div>
    </div>
  );
}