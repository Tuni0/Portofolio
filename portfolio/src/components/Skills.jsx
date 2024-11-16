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
    date: '2021-now',
  },
 
]

function Skills() {


    const{theme}=useContext(ThemeContext);
  
  
  
    
  
    return (
  
  
  
      <div id='skills' className={`z-1 mt-24 ${theme === 'dark' ? 'dark' : ''}   `}>
        <div className=" py-4 sm:py-8 lg:max-w-screen-xl">
          <h2 className="text-left self-start text-4xl text-violet-500 dark:text-violet-600 mb-8 mt-4 font-abeezee font-semibold">Skills and Experience</h2>
  
          <div className="flex flex-col  gap-x-6 gap-y-10 max-w-full">
            


              <div className="">
                {educations.map((education) => (
                  

                  <div key={education.id} className="mb-4">
                    <div className="flex flex-row justify-between">
                    <div className="border-r-4 max-w-30 text-center ">
                     <p className="mt-4 text-black dark:text-white font-medium mr-8 min-w-20">{education.date}</p>
                     </div>
                     
                    <a className="group ml-10">
                      <h3 className="text-lg font-medium text-gray-700 dark:text-white text-left">
                        {education.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-900 dark:text-white">
                        {education.description.map((desc, index) => (
                          <li key={index} className="list-disc text-left">
                            {desc}
                          </li>
                        ))}
                      </p>
                    </a>
                  </div>
                  </div>
                ))}
              </div>
    

            
          </div>
          <h3 className="text-left mt-8 self-start text-2xl text-black dark:text-white mb-2  font-abeezee font-semibold">Certificates</h3>
          <div className="flex flex-col">
     
                <img
                  alt="React"
                  src="https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/reactCertification.png"
                  className="scale-[55%] rounded-[120px] "
                />

          </div>
        </div>
      </div>
    )
  
  
  
}

export default Skills