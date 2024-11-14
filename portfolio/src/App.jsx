import React, { useState, useEffect, createContext, useContext } from 'react';
import { Routes, Route, Router } from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Skills from './components/Skills.jsx';
import './App.css';

export const ThemeContext = createContext();


function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme; // Apply theme to the body
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
   <div className="min-h-screen">
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
        
   </div>
   
   </ThemeContext.Provider>
  );
}

export default App
