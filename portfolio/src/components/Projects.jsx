import React, { useState, useContext } from "react";
import { ThemeContext } from "../App.jsx";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiReact, SiPython, SiCsharp, SiCplusplus,
  SiRust, SiKotlin, SiMysql, SiDotnet, SiWebassembly,
  SiFirebase, SiOpenai, SiVisualstudio, SiYaml
} from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { TbBinaryTree } from "react-icons/tb";
import { LuCpu, LuBrain, LuFileCode } from "react-icons/lu";
import { VscVscode } from "react-icons/vsc";

const names = {
  javascript: "javascript",
  typescript: "typescript",
  react: "React Js",
  python: "python",
  csharp: "C#",
  c: "C",
  cpp: "C++",
  rust: "Rust",
  kotlin: "Kotlin",
  sql: "SQL",
  vb: "Visual Basic",
  vba: "VBA",
  dotnet: ".NET",
  verilog: "Verilog",
  vhdl: "VHDL",
  visualbasic: "Visual Basic",
  webassembly: "WebAssembly",
  xml: "XML",
  yaml: "YAML",
  firebase: "Firebase",
  AI: "AI",
};

const icons = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  "React Js": SiReact,
  python: SiPython,
  "C#": SiCsharp,
  C: TbBinaryTree,
  "C++": SiCplusplus,
  rust: SiRust,
  Kotlin: SiKotlin,
  SQL: DiDatabase,
  "visual basic": SiVisualstudio,
  vba: VscVscode,
  ".NET": SiDotnet,
  verilog: LuCpu,
  vhdl: LuCpu,
  webassembly: SiWebassembly,
  XML: LuFileCode,
  yaml: SiYaml,
  Firebase: SiFirebase,
  AI: LuBrain,
};

const colors = {
  javascript:
    "rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-500 ring-1 ring-inset ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-500 dark:ring-yellow-400/20",
  typescript:
    "rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-400/10 dark:text-indigo-500 dark:ring-indigo-500/20",
  "React Js":
    "rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-500 dark:ring-blue-500/20",
  python:
    "rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-400/10 dark:text-green-500 dark:ring-green-500/20",
  "C#": "rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-500 dark:ring-purple-400/20",
  C: "rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-500 dark:ring-blue-500/20",
  "C++": "rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600 ring-1 ring-inset ring-blue-600/10 dark:bg-blue-400/10 dark:text-blue-500 dark:ring-blue-400/20",
  rust: "rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10 dark:bg-orange-400/10 dark:text-orange-500 dark:ring-orange-500/20",
  Kotlin:
    "rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-500 dark:ring-purple-400/20",
  SQL: "rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-500 dark:ring-blue-500/20",
  "visual basic": "rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-600 ring-1 ring-inset ring-purple-600/10 dark:bg-purple-900/10 dark:text-purple-400 dark:ring-purple-900/20",
  vba: "rounded-md bg-purple-200 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-900/20 dark:text-purple-300 dark:ring-purple-900/30",
  ".NET":
    "rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-500 dark:ring-purple-400/20",
  verilog: "rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-700/10 dark:bg-teal-400/10 dark:text-teal-500 dark:ring-teal-500/20",
  vhdl: "rounded-md bg-teal-100 px-2 py-1 text-xs font-medium text-teal-800 ring-1 ring-inset ring-teal-800/10 dark:bg-teal-900/10 dark:text-teal-400 dark:ring-teal-900/20",
  webassembly: "rounded-md bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-900/10 dark:text-indigo-400 dark:ring-indigo-900/20",
  XML: "rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10 dark:bg-orange-400/10 dark:text-orange-500 dark:ring-orange-500/20",
  yaml: "rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-700/10 dark:bg-gray-800/10 dark:text-gray-400 dark:ring-gray-800/20",
  Firebase:
    "rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/20 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20",
  AI:
    "rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-500 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-400/10 dark:text-blue-500 dark:ring-blue-400/20",
};

const projects = [
  {
    id: 1,
    name: "BFS",
    description:
      "Take part with bfs project, aimed to create platform for monitoring cash flow in company and capital groups.",
    tags: [names.csharp, names.sql, names.xml, names.dotnet],
    imageSrc: "https://ewamazepa.com/wp-content/uploads/2024/01/bfsmockup1.png",
    imageAlt:
      "Take part with bfs project, aimed to create platform for monitoring cash flow in company and capital groups.",
    link: "#"
  },
  {
    id: 2,
    name: "Android Crypto Wallet",
    description:
      "Make android crypto wallet in Kotlin with Jetpack Compose, Firebase to store users and wallets and backend API to manage Monero wallets.",
    tags: [names.kotlin, names.firebase, names.xml, names.chatGPT],
    imageSrc:
      "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/android.png",
    imageAlt:
      "Make android crypto wallet in Kotlin with Jetpack Compose, Firebase to store users and wallets and backend API to manage Monero wallets.",
    link: "#"
  },
  {
    id: 3,
    name: "Kotlin To-Do List",
    description:
      "Make to-do list aplication in Kotlin with Firebase to store the new and deleted tasks.",
    tags: [names.kotlin, names.firebase, names.xml],
    imageSrc:
      "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/todoo.png",
    imageAlt:
      "Make to-do list aplication in Kotlin with Firebase to store the new and deleted tasks.",
    link: "#"
  },
  {
    id: 4,
    name: "Calculator",
    description:
      "Simple calculator windows app with trigonometry functions plots.",
    tags: [names.csharp],
    imageSrc:
      "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/calc.jpg",
    imageAlt:
      "Simple calculator windows app with trigonometry functions plots.",
    link: "#"
  },
];

function Projects() {
  const { theme } = useContext(ThemeContext);
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      id="projects"
      className={`z-0 mt-4 pt-20 ${theme === "dark" ? "dark" : ""} `}
    >
      <div className="flex flex-col items-start py-2 sm:py-4 lg:max-w-screen-xl mx-auto px-4 w-full">
        <h2 className="text-left self-start text-4xl text-violet-500 dark:text-violet-600 mb-12 mt-4 font-abeezee font-semibold">
          Featured Projects
        </h2>

        {/* Seamless Scroll Row */}
        <div className="relative w-full">
          <motion.div
            className="flex gap-6 sm:gap-10 overflow-x-auto pt-6 pb-16 w-full snap-x snap-mandatory px-4 sm:px-8 modern-scrollbar overflow-y-visible"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative flex flex-col flex-none w-[280px] sm:w-[350px] overflow-hidden bg-white/20 dark:bg-neutral-800/10 backdrop-blur-xl border border-white/30 dark:border-white/5 rounded-[50px] shadow-xl transition-all duration-500 snap-center hover:shadow-violet-500/20"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[50px] bg-gray-100/50 dark:bg-neutral-900/30">
                  <img
                    alt={project.imageAlt}
                    src={project.imageSrc}
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 backdrop-blur-[2px]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="bg-white/90 dark:bg-violet-600/90 text-gray-900 dark:text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-110 transition-transform"
                    >
                      View Description
                    </button>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest pointer-events-none">
                    Featured
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-violet-500 transition-colors duration-300 text-left">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 leading-relaxed line-clamp-4 text-left font-medium">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-auto flex flex-wrap gap-2.5">
                    {project.tags &&
                      project.tags.map((tag, index) => {
                        const Icon = icons[tag];
                        return (
                          <span
                            key={index}
                            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-2xl text-[10px] font-bold uppercase tracking-wider ${colors[tag]} opacity-90`}
                          >
                            {Icon && <Icon className="text-sm" />}
                            {tag}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* End Spacing */}
            <div className="flex-none w-[5vw]"></div>
          </motion.div>
        </div>
      </div>

      {/* Modal for Project Description */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-12 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative max-w-4xl w-full bg-white dark:bg-neutral-900 rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 text-gray-500 dark:text-gray-400 text-3xl hover:text-violet-500 z-10 p-2"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>

              {/* Left: Project Image */}
              <div className="w-full md:w-1/2 aspect-square md:aspect-auto overflow-hidden bg-gray-100 dark:bg-neutral-800">
                <img
                  src={selectedProject.imageSrc}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-1/2 p-10 flex flex-col overflow-y-auto modern-scrollbar">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {selectedProject.name}
                </h3>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags &&
                    selectedProject.tags.map((tag, index) => {
                      const Icon = icons[tag];
                      return (
                        <span
                          key={index}
                          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-2xl text-xs font-bold uppercase tracking-wider ${colors[tag]}`}
                        >
                          {Icon && <Icon className="text-base" />}
                          {tag}
                        </span>
                      );
                    })}
                </div>

                <div className="prose dark:prose-invert">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-10 text-left">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mt-auto pt-8">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-700 text-white px-10 py-4 rounded-full font-bold shadow-xl transition-all hover:scale-105"
                  >
                    Visit Site <span className="text-xl">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
