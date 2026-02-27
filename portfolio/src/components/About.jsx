import React, {
  useEffect,
  useContext,
  useState,
  createContext,
  useRef,
} from "react";
import { ThemeContext } from "../App";
import { motion } from "framer-motion";

function About() {
  const { theme } = useContext(ThemeContext);
  const fullName = "Wiktor Mazepa.";
  const [name, setName] = useState(fullName);
  const [change, setChange] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setName((prevName) => {
        //deleting
        if (change == false) {
          if (prevName.length !== 2) {
            return prevName.substring(0, prevName.length - 2) + "|";
          } else {
            setChange(true);
            return prevName.substring(0, prevName.length - 1) + "|";
          }
        }
        //adding
        else {
          if (prevName.length !== fullName.length) {
            return fullName.substring(0, prevName.length) + "_";
          } else {
            setTimeout(() => {
              setChange(false);
            }, 3000);
            return fullName.substring(0, prevName.length + 1);
          }
        }
      });
    }, 300);

    return () => clearInterval(interval);
  }, [change]);

  return (
    <div id="about" className={`z-0 mt-32 sm:mt-48 ${theme === "dark" ? "dark" : ""} `}>
      <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-12">
        <div className="lg:max-w-[60%] w-full flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full text-left"
          >
            <h1 className="text-5xl sm:text-7xl font-abeezee font-bold text-violet-500 dark:text-violet-600 mb-8 h-20 sm:h-24 text-left">
              {name}
            </h1>
          </motion.div>

          <motion.p
            className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-justify mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I am studing at Wrocław University of Science and Technology. My
            major is Applied Computer Science. I started learning front-end
            technologies like HTML, CSS, JavaScript, React, and Tailwind CSS.
            Moreover, I gain experience in working with databases like MySQL,
            MsSQL, PostgreSQL. I am looking for an internship to gain experience
            in the field of web development. My goal is to become a full-stack
            developer. While studying I learn a bit of Python, VHDL, Verilog,
            C#. In one of my projects, I was a participant in building .NET
            WebAssembly application with Razor Pages and MudBlazor components. I
            am also interested in AI and machine learning technologies and
            wanted to learn more about them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex gap-4"
          >
            <a href="#projects" className="px-8 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-full font-bold transition-all duration-300 shadow-lg shadow-violet-500/30">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white rounded-full font-bold transition-all duration-300">
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-violet-500 to-indigo-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <img
            className="relative object-cover rounded-full border-4 border-white dark:border-neutral-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            style={{
              imageRendering: "high-quality",
              WebkitFontSmoothing: "antialiased",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden"
            }}
            width={800}
            height={800}
            src="https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/face.jpg"
            alt="Wiktor Mazepa"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
