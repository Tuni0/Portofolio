import React, { useEffect,useContext, useState, createContext, useRef } from "react";
import { ThemeContext } from "../App";


function About() {

  const{theme}=useContext(ThemeContext)

    return (
      <div id="about" className={`z-0 mt-8 ${theme === 'dark' ? 'dark' : ''}  `}>

        <p className="text-6xl mb-4 flex justify-start font-abeezee text-violet-500 dark:text-violet-600">Wiktor Mazepa</p>
        <img className="w-40 h-40 rounded-full" src="https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/face.png" alt="Wiktor Mazepa" />
        <p className="text-black dark:text-white text-justify "> 
          I am studing at Wrocław University of Science and Technology. My major is Intelligence Electronics. I started learning front-end technologies like 
          HTML, CSS, JavaScript, React, and Tailwind CSS. I am looking for an internship to gain experience in the field of web development. My goal is to become a full-stack developer. 
          While studing I learn a bit of Python, VHDL, Verilog, C#. In one of my projects, I was a participiant in building .NET WebAssembly application with Razor Pages and MudBlazor components.

          
        </p>
      </div>
    );
}

export default About