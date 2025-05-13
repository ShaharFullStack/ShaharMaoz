import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layout";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Code from "./Pages/Code";
import Music from "./Pages/Music";

function AppContent() {
  const location = useLocation();
  const pageName = location.pathname === "/" ? "Home" : 
                  location.pathname.substring(1).charAt(0).toUpperCase() + 
                  location.pathname.substring(2);

  return (
    <Layout currentPageName={pageName}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/code" element={<Code />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
