import React, { useState, useContext } from "react";
import { ThemeContext } from "../App.jsx";
import { motion, AnimatePresence } from "framer-motion";

const educations = [
  {
    id: 1,
    name: "Wrocław University of Science and Technology. Major: Applied Computer Science (M.Sc.).",
    description: [
      "Specialization: Applications of Specialized IT Technologies",
      "Design, optimization, implementation and evaluation of IT systems - multimedia, web, mobile, embedded and IoT",
      "Building embedded intelligence systems and interactive environments, including user experience (UX) modeling",
      "Modeling of computerized processes, stream data processing and data mining",
      "Modeling, analysis and optimization of IT systems and networks",
      "Mobile applications - Android Studio, Material Design, multimedia",
      "Web and IoT security",
      "Algorithms and IT systems optimization",
      "Career paths: IT specialist maintaining and developing software supporting business operations, software designer, tester, systems administrator, and IT specialist designing, deploying and maintaining computer systems and networks",
    ],
    date: "June 2025 - June 2027",
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

const iconBase =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const technologies = [
  { name: "JavaScript", icon: `${iconBase}/javascript/javascript-original.svg` },
  { name: "TypeScript", icon: `${iconBase}/typescript/typescript-original.svg` },
  { name: "React", icon: `${iconBase}/react/react-original.svg` },
  { name: "Tailwind CSS", icon: `${iconBase}/tailwindcss/tailwindcss-original.svg` },
  { name: "HTML5", icon: `${iconBase}/html5/html5-original.svg` },
  { name: "CSS3", icon: `${iconBase}/css3/css3-original.svg` },
  { name: "Node.js", icon: `${iconBase}/nodejs/nodejs-original.svg` },
  { name: "C#", icon: `${iconBase}/csharp/csharp-original.svg` },
  { name: ".NET", icon: `${iconBase}/dotnetcore/dotnetcore-original.svg` },
  { name: "Python", icon: `${iconBase}/python/python-original.svg` },
  { name: "C++", icon: `${iconBase}/cplusplus/cplusplus-original.svg` },
  { name: "C", icon: `${iconBase}/c/c-original.svg` },
  { name: "MySQL", icon: `${iconBase}/mysql/mysql-original.svg` },
  { name: "PostgreSQL", icon: `${iconBase}/postgresql/postgresql-original.svg` },
  { name: "MS SQL Server", icon: `${iconBase}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
  { name: "Git", icon: `${iconBase}/git/git-original.svg` },
];

function Skills() {
  const { theme } = useContext(ThemeContext);
  const [selectedCert, setSelectedCert] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const certs = [
    { title: "DevOps", src: "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/devops_certification.jpg" },
    { title: "React", src: "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/reactCertification.png" },
    { title: "JavaScript", src: "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/js.png" },
    { title: "HTML", src: "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/html.png" },
    { title: "CSS", src: "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/css.png" },
  ];

  return (
    <div id="skills" className={`z-1 mt-32 ${theme === "dark" ? "dark" : ""} `}>
      <div className="py-4 sm:py-8 lg:max-w-screen-xl mx-auto px-4">
        <h2 className="text-left self-start text-4xl text-violet-500 dark:text-violet-600 mb-16 mt-4 font-abeezee font-semibold">
          Education & Experience
        </h2>

        {/* Timeline Section */}
        <div className="relative">
          <motion.div
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {educations.map((education, index) => (
              <motion.div
                key={education.id}
                className="flex items-stretch gap-4 sm:gap-12"
                variants={itemVariants}
              >
                {/* Left Column: Date (Desktop) */}
                <div className="hidden sm:flex flex-col items-end pt-8 w-40 shrink-0 text-right">
                  <p className="text-sm font-bold text-violet-500 dark:text-violet-400 whitespace-nowrap">
                    {education.date}
                  </p>
                </div>

                {/* Middle Column: Line and Dot */}
                <div className="flex flex-col items-center shrink-0 relative">
                  {/* Dot */}
                  <div className="w-5 h-5 rounded-full bg-violet-500 border-4 border-white dark:border-neutral-900 z-10 shadow-[0_0_15px_rgba(139,92,246,0.6)] mt-8"></div>
                  {/* Line */}
                  {index !== educations.length - 1 && (
                    <div className="w-0.5 bg-gradient-to-b from-violet-500 to-transparent flex-grow mt-2"></div>
                  )}
                </div>

                {/* Right Column: Content Card */}
                <div className="flex-grow pb-16">
                  <div className="bg-white/40 dark:bg-neutral-800/20 backdrop-blur-md p-8 rounded-[32px] border border-violet-100/50 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 group">
                    {/* Date Label (Mobile) */}
                    <p className="sm:hidden text-xs font-bold text-violet-500 dark:text-violet-400 mb-2 uppercase tracking-widest text-left">
                      {education.date}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-violet-500 transition-colors duration-300 text-left">
                      {education.name}
                    </h3>
                    <ul className="space-y-3">
                      {education.description.map((desc, idx) => (
                        <li key={idx} className="text-sm sm:text-base text-gray-600 dark:text-gray-400 flex items-start text-left leading-relaxed">
                          <span className="text-violet-500 mr-3 mt-2 h-2 w-2 rounded-full bg-violet-500 shrink-0 shadow-[0_0_5px_rgba(139,92,246,0.5)]"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <h3 className="text-left mt-24 self-start text-3xl text-violet-500 dark:text-violet-600 mb-3 font-abeezee font-semibold">
          Languages & Frameworks
        </h3>
        <p className="text-left text-gray-600 dark:text-gray-400 mb-10 text-sm sm:text-base">
          The languages and frameworks I use across my projects.
        </p>

        <motion.div
          className="bg-white/40 dark:bg-neutral-800/20 backdrop-blur-md p-6 sm:p-8 rounded-[32px] border border-violet-100/50 dark:border-white/5 shadow-sm"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-violet-100/60 dark:border-white/10 bg-white/50 dark:bg-neutral-900/40 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-violet-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.25)] transition-all duration-300"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-5 h-5"
                  loading="lazy"
                />
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <h3 className="text-left mt-24 self-start text-3xl text-violet-500 dark:text-violet-600 mb-12 font-abeezee font-semibold">
          Certificates
        </h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-[40px] bg-white/30 dark:bg-neutral-800/30 backdrop-blur-md border border-white/20 dark:border-white/5 hover:border-violet-500 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="p-6 aspect-[16/10] overflow-hidden flex items-center justify-center bg-gray-50/50 dark:bg-neutral-900/50">
                <img
                  alt={cert.title}
                  src={cert.src}
                  className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110 shadow-sm"
                />
              </div>
              <div className="bg-white/80 dark:bg-neutral-800/80 p-8 flex justify-between items-center border-t border-violet-50 dark:border-white/5">
                <div className="text-left">
                  <h4 className="text-gray-900 dark:text-white text-xl font-bold mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-violet-500 text-sm font-medium">Verify credentials →</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Certificates */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-12 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
            >
              <button
                className="absolute -top-12 sm:top-0 -right-4 sm:-right-12 text-white text-4xl hover:text-violet-400 transition-colors p-4"
                onClick={() => setSelectedCert(null)}
              >
                &times;
              </button>
              <div className="bg-white p-2 rounded-2xl shadow-2xl relative overflow-hidden group">
                <img
                  src={selectedCert.src}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-8 text-center"
              >
                <h3 className="text-white text-3xl font-bold mb-2">{selectedCert.title}</h3>
                <p className="text-violet-400 font-medium text-left sm:text-center">Professional Certification</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Skills;
