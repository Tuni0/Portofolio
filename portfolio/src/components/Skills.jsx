import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App.jsx";
import { motion } from "motion/react";

const educations = [
  {
    id: 1,
    name: "Wrocław University of Science and Technology. Major: Applied Computer Science (M.Sc.).",
    description: [
      "Mobile applications - Android Studio, Material Design, multimedia",
      "Web and IoT security",
      "Algorithms and IT systems optimization",
    ],
    date: "June 2025 - Present",
  },
  {
    id: 2,
    name: "Wrocław University of Science and Technology. Major: Intelligent Electronics (B.Eng.).",
    description: [
      "Basic programming skills in C/C++, C#, JavaScript, Python",
      "Basic knowledge of measurements of various electrical and non-electrical quantities and determination of their uncertainties",
      "Basic understanding of computer network operation, standards, and network infrastructure construction",
      "Ability to create technical drawings",
      "Work with semiconductor elements and instruments, as well as measurements of various parameters",
      "Knowledge of the structure and principles of sensors and their applications in medical fields",
      "Knowledge of assembly in electronics",
      "Knowledge of optoelectronic devices",
      "learning the processes of design, manufacturing and operation of MEMS devices",
      "programming logic structures (Vivado, Verilog, VHDL), embedded processors (STM32 IDE), and AVR microcontrollers (Microchip Studio, Eclipse)",
    ],
    date: "September 2021 - February 2025",
  },
];

function Skills() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="about" className={`z-1 mt-2 ${theme === "dark" ? "dark" : ""}  `}>
      <div className=" py-4 sm:py-8 lg:max-w-screen-xl">
        <h2 className="text-left self-start text-4xl text-violet-500 dark:text-violet-600 mb-8 mt-4 font-abeezee font-semibold">
          Skills and Experience
        </h2>

        <motion.div
          className="flex flex-col  gap-x-6 gap-y-10 max-w-full"
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, once: true }}
          viewport={{ once: true }}
        >
          <div className="">
            {educations.map((education) => (
              <div key={education.id} className="mb-4">
                <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4 sm:gap-6">
                  {/* Lewa kolumna z datą */}
                  <div className="sm:border-r-4 text-start">
                    <p className="mt-2 sm:mt-4 text-black dark:text-white font-medium sm:mr-8">
                      {education.date}
                    </p>
                  </div>

                  {/* Prawa kolumna z treścią */}
                  <a className="group sm:ml-6">
                    <h3 className="text-base sm:text-lg font-medium text-gray-700 dark:text-white text-left">
                      {education.name}
                    </h3>
                    <ul className="mt-1 text-sm text-gray-900 dark:text-white list-disc pl-5">
                      {education.description.map((desc, index) => (
                        <li key={index} className="text-left">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <h3 className="text-left mt-8 self-start text-2xl text-black dark:text-white mb-2  font-abeezee font-semibold">
          Certificates
        </h3>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6"
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-fit h-fit  max-w-screen-md ">
            <img
              alt="React"
              src="https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/reactCertification.png"
              className="  rounded-[30px] "
            />
          </div>

          <div className="w-fit h-fit  max-w-screen-md ">
            <img
              alt="JavaScript"
              src="https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/js.png"
              className="  rounded-[30px] "
            />
          </div>

          <div className="w-fit h-fit  max-w-screen-md ">
            <img
              alt="HTML"
              src="https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/html.png"
              className="  rounded-[30px] "
            />
          </div>

          <div className="w-fit h-fit  max-w-screen-md ">
            <img
              alt="CSS"
              src="https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/css.png"
              className="  rounded-[30px] "
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
