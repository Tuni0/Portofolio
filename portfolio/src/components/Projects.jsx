import React from "react"
import { useContext } from "react";
import { ThemeContext } from "../App.jsx";


const names ={
  javascript: "javascript",
  typescript: "typescript",
  react: "React Js",
  python: "python",
  csharp: "C#",
  c: 'C',
  cpp: 'C++',
  rust: 'Rust',
  kotlin: 'Kotlin',
  sql: 'SQL',
  vb: 'Visual Basic',
  vba: 'VBA',
  dotnet: '.NET',
  verilog: 'Verilog',
  vhdl: 'VHDL',
  visualbasic: 'Visual Basic',
  webassembly: 'WebAssembly',
  xml: 'XML',
  yaml: 'YAML',

}

const colors = {
  "javascript": 'rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-500 ring-1 ring-inset ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-500 dark:ring-yellow-400/20',
  "typescript": 'rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-400/10 dark:text-indigo-500 dark:ring-indigo-500/20',
  "React Js":   'rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-500 dark:ring-blue-500/20',
  "python":     'rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-400/10 dark:text-green-500 dark:ring-green-500/20',
  "C#":         'rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-500 dark:ring-purple-400/20',
  "C": "c",
  "C++": "c++",
  "rust": "rust",
  "kotlin": "kotlin",
  "SQL":        'rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-500 dark:ring-blue-500/20',
  "visual basic": "visualbasic",
  "vba": "vba",
  ".NET":        'rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-500 dark:ring-purple-400/20',
  "verilog": "verilog",
  "vhdl": "vhdl",
  "webassembly": "webassembly",
  "XML":          'rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10 dark:bg-orange-400/10 dark:text-orange-500 dark:ring-orange-500/20',
  "yaml": "yaml",
  "firebase": 'rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/20 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20',
}

const projects = [
  {
    id: 1,
    name: 'BFS',
    href: '#',
    description: 'Take part with bfs project, aimed to create platform for monitoring cash flow in company and capital groups.',
    tags: [names.csharp, names.sql, names.xml, names.dotnet],
    imageSrc: 'https://ewamazepa.com/wp-content/uploads/2024/01/bfsmockup1.png',
    imageAlt: 'Take part with bfs project, aimed to create platform for monitoring cash flow in company and capital groups.',
  },
  {
    id: 2,
    name: 'Calculator',
    href: '#',
    description: 'Simple calculator windows app with trigonometry functions plots.',
    tags: [names.csharp],
    imageSrc: 'https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/calc.jpg',
    imageAlt: 'Simple calculator windows app with trigonometry functions plots.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    description: '$89',
    tags: [names.kotlin, names.firebase],
    imageSrc: 'https://images.credential.net/embed/18sh899n.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    description: '$35',
    tags: [],
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More projects...
]

function Projects() {

  const{theme}=useContext(ThemeContext);



  

  return (



    <div id='projects' className={`z-0 ${theme === 'dark' ? 'dark' : ''}  bg-white dark:bg-neutral-900 `}>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8   ">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8 ">
        
          {projects.map((project) => (
              <div className="max-w-lg  overflow-hidden shadow-xl p-8 rounded-3xl bg-white dark:bg-neutral-800" >
            <a key={project.id} href={project.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 xl:aspect-h-12 xl:aspect-w-10 rounded-[36px] ring-1 ring-inset ring-white dark:ring-black  hover:animate-bounce">
                <img
                  alt={project.imageAlt}
                  src={project.imageSrc}
                  className="size-full object-cover object-center group-hover:opacity-75   "
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-700 dark:text-white">{project.name}</h3>
              <p className="mt-1 mb-4 text-sm  text-gray-900 dark:text-white">{project.description}</p>
              {project.tags && project.tags.map((tagColor, index) => (
                  <span key={index} className={`inline-flex items-center ${colors[tagColor]} mr-2`}>
                    {Object.keys(colors).find((key) => colors[key] === colors[tagColor])}
                    
                  </span>
                ))}
             
            </a>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}
export default Projects


