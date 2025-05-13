import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  
  console.log("ThreeBackground mounted");
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Three.js setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f0647, 0.3); // Add fog to make distant particles fade out
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
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
    const particlesCount = 5000; // Increased for more visible effect
    
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
      for (let i = 0; i < particlesCount; i++) {
      // Position
      positions[i * 3 + 0] = (Math.random() - 0.5) * 10; // x - increased spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y - increased spread
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z - increased spread
      
      // Colors - brighter purple to pink gradient for better visibility
      const colorIndex = Math.random();
      colors[i * 3 + 0] = 0.5 + colorIndex * 0.5; // r - more red for visibility
      colors[i * 3 + 1] = 0.1 + colorIndex * 0.2; // g - slightly more green
      colors[i * 3 + 2] = 0.6 + colorIndex * 0.4; // b - enhanced blue for vibrant purple tone
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));    // Use AdditiveBlending for a more visible, glowing effect
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05, // Larger points for better visibility
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.9, // More opaque for visibility
      depthTest: true,
      depthWrite: false, // Prevent z-fighting
      blending: THREE.AdditiveBlending // This creates a glowing effect
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
    
    window.addEventListener('resize', handleResize);    // Animation
    const animate = () => {
      // Get current scroll position
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      
      // Basic rotation
      particles.rotation.x += 0.0002;
      particles.rotation.y += 0.0003;
      
      // Mouse interaction effect
      particles.rotation.x += mouse.y * 0.0005;
      particles.rotation.y += mouse.x * 0.0005;
        // Create a focus point where mouse is
      const targetX = mouse.x * 2;
      
      // Apply subtle scroll parallax effect
      const scrollEffect = scrollY * 0.0001;
      
      // Subtle movement following mouse cursor and incorporating scroll
      particles.position.x += (targetX - particles.position.x) * 0.05;
      particles.position.y = -scrollEffect * 0.5; // Apply vertical offset based on scroll
      
      particlesGeometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();    // Cleanup
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

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" style={{ backgroundColor: '#0f0617' }} />;
}
