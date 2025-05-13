import React from "react";
import HeroSection from "../home/HeroSection.jsx";
import AboutSection from "../home/AboutSection.jsx";
import FeaturedProjects from "../home/FeaturedProjects.jsx";

export default function Home() {  return (
    <div className="relative">
      {/* Content sections */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FeaturedProjects />
      </div>
    </div>
  );
}