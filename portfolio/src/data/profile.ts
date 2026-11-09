import { BrainCircuitIcon, CodeXmlIcon, WorkflowIcon } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa6"

import avatar from "@/assets/avatar-3d.webp"
import photo from "@/assets/photo.webp"
import type { IconComponent } from "./tech"
import type { ImageAsset } from "./types"

export interface SocialLink {
  id: "github" | "linkedin"
  label: string
  handle: string
  url: string
  icon: IconComponent
}

export interface FocusArea {
  title: string
  description: string
  icon: IconComponent
}

export interface Profile {
  name: string
  initials: string
  headline: string
  tagline: string
  currentRole: string
  location?: string
  email: string
  website: string
  /** Put a PDF in /public (e.g. /public/cv.pdf) and set "/cv.pdf" to show the download buttons. */
  cvUrl?: string
  photo: ImageAsset
  avatar: ImageAsset
  /**
   * Optional looping animation of the 3D avatar (e.g. generated in Higgsfield).
   * Drop the files in /public and set e.g. { mp4: "/avatar.mp4", poster: "/avatar-poster.jpg" }.
   * `poster` = first frame of the video (shown before it loads); defaults to the avatar image.
   */
  avatarVideo?: { mp4?: string; webm?: string; poster?: string }
  about: string[]
  focus: FocusArea[]
}

export const profile: Profile = {
  name: "Wiktor Mazepa",
  initials: "WM",
  headline: "Full-stack Developer & Data Analyst",
  tagline:
    "I build data-driven web applications: from ETL pipelines and API integrations to fast, accessible React interfaces.",
  currentRole: "Junior Data Analyst",
  // TODO: confirm the location you want recruiters to see.
  location: "Wrocław, Poland",
  email: "wiktor.mazepa@gmail.com",
  website: "https://portfolio.tunio.cloud",
  cvUrl: undefined,
  photo: { src: photo, alt: "Portrait of Wiktor Mazepa" },
  avatar: { src: avatar, alt: "3D avatar of Wiktor waving hello" },
  avatarVideo: undefined,
  about: [
    "I'm a graduate of Applied Computer Science (M.Sc. Eng.) at Wrocław University of Science and Technology, where I specialized in Applications of Specialized IT Technologies. In my master's thesis I developed an autonomous control method for a mobile robotic platform using a simulation environment.",
    "Today I work as a Junior Data Analyst. I use databases and data processing to support business decisions, build ETL pipelines, and develop API integrations and automations that connect different applications.",
    "Alongside that role I keep growing as a full-stack developer: React, TypeScript and Tailwind CSS on the front end, Node.js and .NET on the back end. During my studies I also worked with Python, C#, VHDL and Verilog, and contributed to a .NET Blazor WebAssembly application built with Razor and MudBlazor.",
    "I'm especially interested in AI and machine learning. My goal is to combine full-stack engineering with data analytics to build intelligent, data-driven products.",
  ],
  focus: [
    {
      title: "Data & automation",
      description:
        "ETL pipelines, SQL and API integrations that turn data scattered across systems into something the business can act on.",
      icon: WorkflowIcon,
    },
    {
      title: "Full-stack web",
      description:
        "Typed React front ends backed by REST APIs in Node.js or .NET, with relational databases underneath.",
      icon: CodeXmlIcon,
    },
    {
      title: "AI-powered features",
      description:
        "LLM integrations with strict, schema-validated outputs, used inside real product flows rather than as demos.",
      icon: BrainCircuitIcon,
    },
  ],
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    handle: "Tuni0",
    url: "https://github.com/Tuni0",
    icon: FaGithub,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "Wiktor Mazepa",
    url: "https://www.linkedin.com/in/wiktor-mazepa-812199338/",
    icon: FaLinkedin,
  },
]
