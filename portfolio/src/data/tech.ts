import type { ComponentType } from "react"
import {
  CircuitBoardIcon,
  CodeXmlIcon,
  ContainerIcon,
  CpuIcon,
  DatabaseIcon,
  FlaskConicalIcon,
  LayoutTemplateIcon,
  MicrochipIcon,
  ServerIcon,
  WebhookIcon,
  WorkflowIcon,
} from "lucide-react"
import { DiMsqlServer } from "react-icons/di"
import {
  SiAndroid,
  SiBlazor,
  SiC,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiGitlab,
  SiGooglemaps,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJetpackcompose,
  SiKotlin,
  SiMaterialdesign,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiShadcnui,
  SiStmicroelectronics,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTraefikproxy,
  SiTypescript,
  SiVercel,
  SiVite,
  SiXml,
} from "react-icons/si"
import { TbBrandCSharp, TbBrandOpenai, TbSql } from "react-icons/tb"

export type IconComponent = ComponentType<{ className?: string }>

export type TechCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "data"
  | "devops"
  | "hardware"

interface TechDefinition {
  label: string
  icon: IconComponent
  category: TechCategory
}

/**
 * Single source of truth for every technology shown on the site.
 * Projects, jobs and degrees reference these ids, so a typo is a type error
 * instead of a silently missing icon.
 */
export const techRegistry = {
  // Languages
  typescript: { label: "TypeScript", icon: SiTypescript, category: "languages" },
  javascript: { label: "JavaScript", icon: SiJavascript, category: "languages" },
  python: { label: "Python", icon: SiPython, category: "languages" },
  csharp: { label: "C#", icon: TbBrandCSharp, category: "languages" },
  kotlin: { label: "Kotlin", icon: SiKotlin, category: "languages" },
  sql: { label: "SQL", icon: TbSql, category: "languages" },
  cpp: { label: "C++", icon: SiCplusplus, category: "languages" },
  c: { label: "C", icon: SiC, category: "languages" },
  html: { label: "HTML5", icon: SiHtml5, category: "languages" },
  css: { label: "CSS", icon: SiCss, category: "languages" },
  xml: { label: "XML", icon: SiXml, category: "languages" },

  // Frontend & mobile
  react: { label: "React", icon: SiReact, category: "frontend" },
  nextjs: { label: "Next.js", icon: SiNextdotjs, category: "frontend" },
  tailwind: { label: "Tailwind CSS", icon: SiTailwindcss, category: "frontend" },
  shadcn: { label: "shadcn/ui", icon: SiShadcnui, category: "frontend" },
  vite: { label: "Vite", icon: SiVite, category: "frontend" },
  blazor: { label: "Blazor WebAssembly", icon: SiBlazor, category: "frontend" },
  android: { label: "Android", icon: SiAndroid, category: "frontend" },
  "jetpack-compose": { label: "Jetpack Compose", icon: SiJetpackcompose, category: "frontend" },
  "material-design": { label: "Material Design 3", icon: SiMaterialdesign, category: "frontend" },

  // Backend & APIs
  nodejs: { label: "Node.js", icon: SiNodedotjs, category: "backend" },
  express: { label: "Express", icon: SiExpress, category: "backend" },
  dotnet: { label: ".NET", icon: SiDotnet, category: "backend" },
  "rest-api": { label: "REST APIs", icon: WebhookIcon, category: "backend" },
  supabase: { label: "Supabase", icon: SiSupabase, category: "backend" },
  firebase: { label: "Firebase", icon: SiFirebase, category: "backend" },
  stripe: { label: "Stripe", icon: SiStripe, category: "backend" },
  openai: { label: "OpenAI API", icon: TbBrandOpenai, category: "backend" },
  "google-maps": { label: "Google Maps API", icon: SiGooglemaps, category: "backend" },

  // Data
  postgresql: { label: "PostgreSQL", icon: SiPostgresql, category: "data" },
  mysql: { label: "MySQL", icon: SiMysql, category: "data" },
  mssql: { label: "MS SQL Server", icon: DiMsqlServer, category: "data" },
  etl: { label: "ETL pipelines", icon: WorkflowIcon, category: "data" },

  // DevOps & tooling
  git: { label: "Git", icon: SiGit, category: "devops" },
  docker: { label: "Docker", icon: SiDocker, category: "devops" },
  "github-actions": { label: "GitHub Actions", icon: SiGithubactions, category: "devops" },
  "gitlab-ci": { label: "GitLab CI/CD", icon: SiGitlab, category: "devops" },
  nginx: { label: "Nginx", icon: SiNginx, category: "devops" },
  traefik: { label: "Traefik", icon: SiTraefikproxy, category: "devops" },
  vercel: { label: "Vercel", icon: SiVercel, category: "devops" },
  playwright: { label: "Playwright", icon: FlaskConicalIcon, category: "devops" },
  jest: { label: "Jest", icon: SiJest, category: "devops" },

  // Embedded & hardware
  vhdl: { label: "VHDL", icon: CircuitBoardIcon, category: "hardware" },
  verilog: { label: "Verilog", icon: CircuitBoardIcon, category: "hardware" },
  stm32: { label: "STM32", icon: SiStmicroelectronics, category: "hardware" },
  avr: { label: "AVR", icon: MicrochipIcon, category: "hardware" },
} as const satisfies Record<string, TechDefinition>

export type TechId = keyof typeof techRegistry

export const techCategories: {
  id: TechCategory
  label: string
  description: string
  icon: IconComponent
}[] = [
  {
    id: "languages",
    label: "Languages",
    description: "What I write every day and what I learned along the way.",
    icon: CodeXmlIcon,
  },
  {
    id: "frontend",
    label: "Frontend & mobile",
    description: "Component-driven web UIs and native Android apps.",
    icon: LayoutTemplateIcon,
  },
  {
    id: "backend",
    label: "Backend & APIs",
    description: "Services, integrations and third-party platforms.",
    icon: ServerIcon,
  },
  {
    id: "data",
    label: "Data",
    description: "Relational databases and data pipelines.",
    icon: DatabaseIcon,
  },
  {
    id: "devops",
    label: "DevOps & tooling",
    description: "Shipping, testing and running software.",
    icon: ContainerIcon,
  },
  {
    id: "hardware",
    label: "Embedded & hardware",
    description: "From my electronics engineering degree.",
    icon: CpuIcon,
  },
]

export function getTech(id: TechId) {
  return techRegistry[id]
}

export function techIdsByCategory(category: TechCategory): TechId[] {
  return (Object.keys(techRegistry) as TechId[]).filter(
    (id) => techRegistry[id].category === category
  )
}
