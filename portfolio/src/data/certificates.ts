import certCss from "@/assets/cert-css.webp"
import certDevops from "@/assets/cert-devops.webp"
import certHtml from "@/assets/cert-html.webp"
import certJs from "@/assets/cert-js.webp"
import certReact from "@/assets/cert-react.webp"
import type { Certificate } from "./types"

/** Newest first. */
export const certificates: Certificate[] = [
  {
    title: "Decoding DevOps – From Basics to Advanced Projects with AI",
    issuer: "Udemy",
    date: "2026-02-27",
    credentialId: "UC-3e2a56e3-7855-46f8-a627-5ff440b2f3a4",
    url: "https://ude.my/UC-3e2a56e3-7855-46f8-a627-5ff440b2f3a4",
    image: certDevops,
    hours: 64,
  },
  {
    title: "The Origins III: JavaScript",
    issuer: "Codédex",
    date: "2024-11-25",
    credentialId: "123941536",
    image: certJs,
    tech: ["javascript"],
  },
  {
    title: "The Origins II: CSS",
    issuer: "Codédex",
    date: "2024-11-25",
    credentialId: "123941525",
    image: certCss,
    tech: ["css"],
  },
  {
    title: "The Origins I: HTML",
    issuer: "Codédex",
    date: "2024-11-25",
    credentialId: "123941500",
    image: certHtml,
    tech: ["html"],
  },
  {
    title: "Framework Valley: React",
    issuer: "Codédex",
    date: "2024-11-14",
    credentialId: "122787872",
    image: certReact,
    tech: ["react"],
  },
]
