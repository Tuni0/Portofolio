import React, { useState, useEffect, createContext, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";
import "./App.css";
import GlowingBlob from "./components/GlowingBlob.jsx";
import ScrollProgress from "./components/ui/ScrollProgress.jsx";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(() => {
    // Check system preference on initial load
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Update theme when system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    document.body.className = theme; // Apply theme to the body

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ScrollProgress />
      <div className="min-h-screen">
        <div className="fixed inset-0 flex items-center justify-center -z-10">
          <GlowingBlob />
        </div>
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
