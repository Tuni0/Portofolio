import React from "react"
import { useContext } from "react";
import { ThemeContext } from "../App.jsx";


const educations = [
  {
    id: 1,
    name: 'Wrocław University of Science and Technology. Major: Intelligent Electronics.',
    description: [
      'Basic programming skills in C/C++, C#, JavaScript, Python',
      'Basic knowledge of measurements of various electrical and non-electrical quantities and determination of their uncertainties',
      'Basic understanding of computer network operation, standards, and network infrastructure construction',
      'Ability to create technical drawings',
      'Work with semiconductor elements and instruments, as well as measurements of various parameters',
      'Knowledge of the structure and principles of sensors and their applications in medical fields',
      'Knowledge of assembly in electronics',
      'Knowledge of optoelectronic devices',
      'learning the processes of design, manufacturing and operation of MEMS devices',
      'programming logic structures (Vivado, Verilog, VHDL), embedded processors (STM32 IDE), and AVR microcontrollers (Microchip Studio, Eclipse)'
    ],
  },
 
]

function Skills() {


    const{theme}=useContext(ThemeContext);
  
  
  
    
  
    return (
  
  
  
      <div id='skills' className={`z-0 mt-24 ${theme === 'dark' ? 'dark' : ''}  bg-white dark:bg-neutral-900 `}>
        <div className="flex flex-col items-center py-16 sm:py-24 lg:max-w-screen-xl">
          <h2 className="text-left self-start text-4xl text-violet-500 dark:text-violet-600 mb-8 mt-4 font-abeezee font-semibold">Skills and Experience</h2>
  
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8 overflow-hidden shadow-xl p-8 rounded-[30px] bg-white dark:bg-neutral-800 ">
          <div className="border-r-4 ">
            <p className=" mt-4 text-black dark:text-white text-center font-medium ">2021-now</p>
          </div>
            {educations.map((education) => (
              <div key={education.id} className="max-w-lg " >
              <a className="group">
  
                <h3 className="mt-4 text-lg font-medium text-gray-700 dark:text-white text-left">{education.name}</h3>
                <p className="mt-1 mb-4 text-sm  text-gray-900 dark:text-white">
                  {education.description.map((desc, index) => (
                    <li key={index} className="list-disc text-left">{desc}</li>
                  ))} 
                </p>
             
                
              </a>
              </div>
            ))}


            
          </div>
          <h3 className="text-left mt-8 self-start text-2xl text-black dark:text-white mb-8  font-abeezee font-semibold">Certificates</h3>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 dark:bg-neutral-800 xl:aspect-h-12 xl:aspect-w-10  rounded-[30px] hover:md:animate-bounce  ">
                <img
                  alt="React"
                  src="https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/reactCertificate.png"
                  className="size-full object-cover object-center group-hover:opacity-75  "
                />
              </div>
        </div>
      </div>
    )
  
  
  
}

export default Skills