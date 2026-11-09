import type { Degree, Job } from "./types"

export const jobs: Job[] = [
  {
    role: "Junior Data Analyst",
    // TODO: add company name (+ companyUrl), start date and location.
    company: undefined,
    start: undefined,
    current: true,
    highlights: [
      "Use databases and data processing to support business decision-making.",
      "Build ETL pipelines that move and transform data between systems.",
      "Develop API integrations and automations between different applications.",
    ],
    tech: ["sql", "etl", "rest-api"],
  },
]

export const degrees: Degree[] = [
  {
    degree: "M.Sc. Eng.",
    field: "Applied Computer Science",
    school: "Wrocław University of Science and Technology",
    schoolUrl: "https://pwr.edu.pl/en/",
    // TODO: replace with exact months, e.g. "Mar 2025" – "Sep 2026".
    start: "2025",
    end: "2026",
    specialization: "Applications of Specialized IT Technologies",
    thesis: {
      kind: "Master's thesis",
      title: "Development of an autonomous control method for a mobile robotic platform using a simulation environment",
      originalTitle:
        "Opracowanie metody autonomicznego sterowania robotyczną platformą jezdną z wykorzystaniem środowiska symulacyjnego",
      originalLang: "pl",
    },
    topics: ["Autonomous robotics", "Simulation", "Data mining", "Stream processing", "IoT", "Android", "Web security"],
    highlights: [
      "Design, optimization, implementation and evaluation of IT systems: multimedia, web, mobile, embedded and IoT.",
      "Embedded intelligence systems and interactive environments, including user experience (UX) modeling.",
      "Modeling of computerized processes, stream data processing and data mining.",
      "Modeling, analysis and optimization of IT systems and networks.",
      "Mobile applications: Android Studio, Material Design, multimedia.",
      "Web and IoT security.",
      "Algorithms and IT systems optimization.",
    ],
    tech: ["android", "kotlin", "python"],
  },
  {
    degree: "B.Eng.",
    field: "Intelligent Electronics",
    school: "Wrocław University of Science and Technology",
    schoolUrl: "https://pwr.edu.pl/en/",
    start: "Sep 2021",
    end: "Feb 2025",
    thesis: {
      kind: "Engineering thesis",
      title: "Ferrofluid-based MEMS microvalve",
      originalTitle: "Mikrozawór MEMS bazujący na cieczy ferromagnetycznej",
      originalLang: "pl",
    },
    topics: ["MEMS", "C/C++", "FPGA (VHDL, Verilog)", "STM32", "AVR", "Computer networks"],
    highlights: [
      "Programming in C/C++, C#, JavaScript and Python.",
      "Programmable logic (Vivado, Verilog, VHDL), embedded processors (STM32 IDE) and AVR microcontrollers (Microchip Studio, Eclipse).",
      "Computer networks: how they work, standards, and building network infrastructure.",
      "Measurements of electrical and non-electrical quantities and estimating their uncertainty.",
      "Semiconductor devices and instrumentation, and measuring their parameters.",
      "Sensors and their applications in medicine; optoelectronic devices.",
      "Design, manufacturing and operation of MEMS devices; electronics assembly; technical drawing.",
    ],
    tech: ["c", "cpp", "csharp", "javascript", "python", "vhdl", "verilog", "stm32", "avr"],
  },
]
