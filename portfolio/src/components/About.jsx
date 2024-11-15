import React, { useEffect,useContext, useState, createContext, useRef } from "react";
import { ThemeContext } from "../App";


function About() {

  const{theme}=useContext(ThemeContext)
  const fullName = "Wiktor Mazepa.";
  const [name,setName] =useState(fullName);
  const [change, setChange] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setName((prevName) => {
        //deleting
        if(change==false){
          if(prevName.length !== 2){
            return prevName.substring(0, prevName.length - 2) + '|';
          }
          else{
            setChange(true);
            return prevName.substring(0, prevName.length - 1) + '|';
          }
        }
        //adding
        else{
          if(prevName.length !== fullName.length){

            return (fullName.substring(0, prevName.length )+'_');

          }
          else{

            setTimeout(() => {
              setChange(false); 
            }, 3000); 
            return fullName.substring(0,  prevName.length+1);
         
          }
        }
      });
  }, 300);

    return () => clearInterval(interval);

  },[change]);

    return (
      <div id="about" className={`z-0 mt-48 ${theme === 'dark' ? 'dark' : ''} `}>
        <div className="flex items-center max-h-80 ">
        <div className="">
        <p className="text-5xl mb-12 flex justify-start font-abeezee text-violet-500 dark:text-violet-600 h-20">{name}</p>

        <p className="text-black dark:text-white text-justify "> 
          I am studing at Wrocław University of Science and Technology. My major is Intelligence Electronics. I started learning front-end technologies like 
          HTML, CSS, JavaScript, React, and Tailwind CSS. I am looking for an internship to gain experience in the field of web development. My goal is to become a full-stack developer. 
          While studing I learn a bit of Python, VHDL, Verilog, C#. In one of my projects, I was a participiant in building .NET WebAssembly application with Razor Pages and MudBlazor components.

          
        </p>
        </div>
        <div className="">
        <img className="scale-[50%]  rounded-full" src="https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/face.jpg" alt="Wiktor Mazepa" />
        </div>
        </div>
      </div>
    );
}

export default About