import React, { useState, useContext } from "react";
import { ThemeContext } from "../App.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiPython,
  SiCsharp,
  SiCplusplus,
  SiRust,
  SiKotlin,
  SiMysql,
  SiDotnet,
  SiWebassembly,
  SiFirebase,
  SiOpenai,
  SiVisualstudio,
  SiYaml,
} from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { TbBinaryTree } from "react-icons/tb";
import { LuCpu, LuBrain, LuFileCode } from "react-icons/lu";
import { VscVscode } from "react-icons/vsc";
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  AI: "Vibe-coded",
  integratedAgent: "Integrated AI-agent",
  aiHelp: "AI help",
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
  "Vibe-coded": LuBrain,
  "Integrated AI-agent": LuBrain,
  "AI help": LuBrain,
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
  "C++":
    "rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600 ring-1 ring-inset ring-blue-600/10 dark:bg-blue-400/10 dark:text-blue-500 dark:ring-blue-400/20",
  rust: "rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10 dark:bg-orange-400/10 dark:text-orange-500 dark:ring-orange-500/20",
  Kotlin:
    "rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-500 dark:ring-purple-400/20",
  SQL: "rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-500 dark:ring-blue-500/20",
  "visual basic":
    "rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-600 ring-1 ring-inset ring-purple-600/10 dark:bg-purple-900/10 dark:text-purple-400 dark:ring-purple-900/20",
  vba: "rounded-md bg-purple-200 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-900/20 dark:text-purple-300 dark:ring-purple-900/30",
  ".NET":
    "rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-500 dark:ring-purple-400/20",
  verilog:
    "rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-700/10 dark:bg-teal-400/10 dark:text-teal-500 dark:ring-teal-500/20",
  vhdl: "rounded-md bg-teal-100 px-2 py-1 text-xs font-medium text-teal-800 ring-1 ring-inset ring-teal-800/10 dark:bg-teal-900/10 dark:text-teal-400 dark:ring-teal-900/20",
  webassembly:
    "rounded-md bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-900/10 dark:text-indigo-400 dark:ring-indigo-900/20",
  XML: "rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10 dark:bg-orange-400/10 dark:text-orange-500 dark:ring-orange-500/20",
  yaml: "rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-700/10 dark:bg-gray-800/10 dark:text-gray-400 dark:ring-gray-800/20",
  Firebase:
    "rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-600/20 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20",
  "Vibe-coded":
    "rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-600 ring-1 ring-inset ring-red-600/20 dark:bg-red-500/10 dark:text-red-300 dark:ring-red-500/30",
  "Integrated AI-agent":
    "rounded-md bg-violet-50 px-2 py-1 text-xs font-medium text-violet-700 ring-1 ring-inset ring-violet-600/20 dark:bg-violet-500/10 dark:text-violet-300 dark:ring-violet-500/30",
  "AI help":
    "rounded-md bg-sky-50 px-2 py-1 text-xs font-medium text-sky-700 ring-1 ring-inset ring-sky-600/20 dark:bg-sky-500/10 dark:text-sky-300 dark:ring-sky-500/30",
};

const projects = [
  {
    id: 1,
    projectType: "startup",
    slug: "bfs-cashflow-platform",
    title: "BFS Cashflow Platform",
    valueProp: "Real‑time cashflow visibility for multi‑entity finance teams.",
    status: ["in-progress", "private", "team"], // can combine: "Completed" | "private" | "in-progress"
    imageSrc: "https://ewamazepa.com/wp-content/uploads/2024/01/bfsmockup1.png",
    imageAlt: "Cashflow monitoring dashboards for BFS capital groups.",

    overview:
      "Internal web platform for finance teams to track cash positions, forecasts, and inter‑company flows across multiple entities.",

    problem:
      "Finance teams were stitching together spreadsheets from multiple banks and entities, making it slow and error‑prone to understand true cash position.",

    solution:
      "I built a centralized dashboard that ingests bank statements and manual inputs, normalizes the data, and exposes cash positions, forecasts, and alerts in one place.",

    techStack: [
      {
        name: ".NET",
        reason:
          ".NET 8 backend services and application layer for financial processing.",
      },
      {
        name: "C#",
        reason:
          "Domain services and DTOs coordinating database, Entity Framework, and WebAssembly UI.",
      },
      {
        name: "SQL",
        reason:
          "Relational schema with server‑side stored procedures for cashflow calculations and reporting.",
      },
      {
        name: "XML",
        reason:
          "Bank statement import format and integration with external financial systems.",
      },
    ],

    architecture: {
      auth: "Role‑based access (finance vs management) with per‑entity permissions.",
      api: ".NET 8 backend services powering a Blazor WebAssembly frontend with a MudBlazor‑based UI architecture.",
      data: "SQL database with Entity Framework mappings to internal namespaces and server‑side stored procedures for financial processing.",
      performance:
        "Containerized service architecture with optimized data access, deployed automatically via GitLab CI/CD pipelines.",
      security:
        "Database‑level row restrictions per entity and encrypted connection strings.",
    },

    links: {
      demo: null,
      repo: null,
      codeAccessNote: "Private Startup Project",
    },

    tags: [names.csharp, names.sql, names.xml, names.dotnet],
  },
  {
    id: 6,
    projectType: "student",
    slug: "ai-driven-ecommerce-platform",
    title: "AI-Driven E-Commerce Platform",
    valueProp:
      "Full-stack e-commerce store with AI-powered product recommendations and Stripe Checkout.",
    status: "Completed",
    imageSrc:
      "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/ecommerce1.jpg",
    imageAlt:
      "Modern e-commerce dashboard with product cards and analytics charts.",
    overview:
      "Pulse is a full-stack e-commerce web application that combines a classic online store (authentication, cart, checkout, admin) with an AI-powered recommendation engine. The system analyzes user behavior, purchase history, and inventory data to generate personalized product suggestions, discounts, and ideas for new products.",
    problem:
      "Traditional e-commerce sites often rely on static listings and simple category filters, which do not adapt to individual user behavior. This limits personalization, reduces engagement, and makes it difficult to experiment with AI-driven targeting and pricing strategies in a realistic store workflow.",
    solution:
      "We built a complete e-commerce stack with React and Vite on the frontend, an Express.js REST API, Supabase Postgres for storage, and Stripe Checkout for payments. On top of this, an AI layer powered by OpenAI models analyzes logs, purchase history, and product data to generate per-user recommendations, discount suggestions, and proposals for new products. All AI responses are validated against a strict JSON schema before being stored or used, and the project includes automated tests (Playwright + Jest) to keep the system stable.",
    techStack: [
      {
        name: "React + Vite",
        reason:
          "Client-side SPA for product catalog, cart, authentication views, and admin dashboard, optimized for fast local iteration.",
      },
      {
        name: "TailwindCSS",
        reason:
          "Utility-first styling for a clean, responsive storefront and admin interface without heavy design overhead.",
      },
      {
        name: "Node.js & Express.js",
        reason:
          "Backend REST API handling authentication, product CRUD, basket operations, Stripe webhooks, and AI orchestration.",
      },
      {
        name: "Supabase (PostgreSQL)",
        reason:
          "Relational schema for users, products, baskets, logs, and AI outputs, with Supabase providing managed Postgres and auth primitives.",
      },
      {
        name: "Stripe Checkout",
        reason:
          "Secure payment collection with hosted checkout, webhooks, and integration into the order lifecycle.",
      },
      {
        name: "OpenAI API",
        reason:
          "AI agent layer using multiple models (gpt-5-nano, o4-mini, o1, gpt-3.5-turbo) to generate recommendations, discounts, and product ideas under a strict JSON schema.",
      },
      {
        name: "Playwright & Jest",
        reason:
          "Automated frontend, end-to-end, and backend tests ensuring that critical purchase and recommendation flows remain stable.",
      },
    ],
    architecture: {
      auth: "JWT-based authentication with bcrypt-hashed passwords, issued by the Express.js backend and consumed by the React client for protected routes.",
      api: "REST API built with Express.js exposes endpoints for auth, products, baskets, and orders, and integrates with Stripe webhooks and the OpenAI API.",
      data: "Supabase-hosted PostgreSQL database with relational tables for users, products, baskets, orders, logs, and AI recommendation outputs, enabling analysis and auditing.",
      performance:
        "Clear separation between frontend, backend, database, and AI agent modules allows independent scaling and paves the way for extracting the AI engine or auth into separate services in the future.",
      security:
        "Password hashing with bcrypt, JWT-based auth and authorization checks on the backend, Stripe-managed payment flows, and strict JSON schema validation of AI responses reduce the risk of invalid or unsafe data entering the system.",
    },
    gallery: [
      {
        src: "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/ecommerce2.jpg",
      },
      {
        src: "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/ecommerce3.jpg",
      },
      {
        src: "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/ecommerce4.jpg",
      },
    ],
    links: {
      demo: null,
      repo: "https://github.com/Tuni0/E-commerce-ai",
      codeAccessNote: "Academic research project.",
    },
    tags: [names.react, names.sql, names.integratedAgent],
  },
  {
    id: 5,
    projectType: "startup",
    slug: "ai-assisted-wedding-planner",
    title: "Vibe-coded Wedding Planner (SaaS)",
    valueProp:
      "Fullstack wedding planning SaaS for venues, budgets, guests, and maps.",
    status: "in-progress",
    imageSrc:
      "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/wedding1.jpg",
    imageAlt:
      "Dashboard view of the AI-assisted wedding planner web application.",
    overview:
      "Modern fullstack wedding planning web application built with Next.js, Supabase, and Google integrations. The platform lets users manage venues, guests, budgets, and custom cost structures, with real-time Google Maps and Places API integration. The project combines AI-assisted development (Vercel v0 and Cursor) with manual architecture and feature design.",
    problem:
      "Couples and planners often juggle spreadsheets, notes, and separate tools to manage venues, budgets, and guest lists. Existing tools rarely combine venue search, Google Maps, budget breakdowns, and guest management into a single, modern web experience tailored for weddings.",
    solution:
      "I designed a fullstack SaaS application where users authenticate via Google OAuth and One Tap, add venues through Google Places Autocomplete, manage per-venue budgets and custom cost fields, visualize locations on an embedded map with color-coded pins, and coordinate guest and event planning from a single dashboard. The app is built with Next.js (App Router), Supabase (Postgres + Auth), TailwindCSS, and shadcn/ui, with Supabase row-level security and server actions for data access.",
    techStack: [
      {
        name: "Next.js (App Router)",
        reason:
          "Fullstack React framework providing server actions, routing, and seamless integration with Vercel for deployment.",
      },
      {
        name: "React & TypeScript",
        reason:
          "Type-safe component logic for complex UI states like budget panels, venue forms, and guest management flows.",
      },
      {
        name: "TailwindCSS & shadcn/ui",
        reason:
          "Composable, themeable component system and utility-first styling for a clean, SaaS-style wedding planning interface.",
      },
      {
        name: "Supabase (Postgres + Auth)",
        reason:
          "Backend-as-a-service handling authentication, Postgres storage, and row-level security for multi-user data isolation.",
      },
      {
        name: "Google Maps & Places APIs",
        reason:
          "Real-time venue search, address autocomplete, map embeds, and custom pins for visual venue exploration.",
      },
      {
        name: "Vercel & Supabase Storage",
        reason:
          "Vercel for hosting the Next.js frontend and server actions, with Supabase and Vercel Blob Storage for persistence.",
      },
      {
        name: "AI-Assisted Tooling (Vercel v0, Cursor)",
        reason:
          "Used AI agents to scaffold parts of the UI and backend, while manually designing the architecture, data model, and critical workflows.",
      },
    ],
    architecture: {
      auth: "Supabase authentication with Google OAuth and One Tap login, handling multi-account sessions and isolating user environments.",
      api: "Next.js server actions communicate with Supabase Postgres and Google APIs, powering venue management, budget calculations, and guest workflows from a single codebase.",
      data: "Postgres relational schema in Supabase models venues, budgets, cost items, and guests, with row-level security enforcing per-account data separation.",
      performance:
        "Server actions and edge-friendly deployment on Vercel keep dashboard interactions responsive, while Google Maps and Places integrations are loaded on-demand.",
      security:
        "Supabase row-level security, Supabase-based session handling, and Google OAuth ensure that each user's data is isolated and protected in a multi-tenant SaaS context.",
    },
    gallery: [
      {
        src: "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/wedding2.jpg",
      },
      {
        src: "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/wedding3.jpg",
      },
      {
        src: "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/wedding4.jpg",
      },
    ],
    links: {
      demo: null,
      repo: null,
      codeAccessNote:
        "In development, currently secure for only 2 google accounts due to api rate limit",
    },
    tags: [names.typescript, names.react, names.sql, names.AI],
  },
  {
    id: 2,
    projectType: "student",
    slug: "android-crypto-wallet",
    title: "Monero Mobile Wallet (Android)",
    valueProp:
      "Mobile‑first Monero wallet with multi‑wallet support, QR transfers, and realtime sync.",
    status: "Completed",
    imageSrc:
      "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/android.png",
    imageAlt: "Android Monero wallet application screens.",
    overview:
      "Android mobile wallet for managing Monero balances and transactions with support for multiple wallets, QR‑based transfers, and realtime account data synchronization via an external backend service. Built in Kotlin with Jetpack Compose and Material Design 3‑inspired UI.",
    problem:
      "Many existing cryptocurrency wallets are overly technical, with unclear transaction states, complex wallet setup, poor transfer UX, limited multi‑wallet management, and interfaces that are not truly mobile‑first.",
    solution:
      "I designed and developed a Kotlin + Jetpack Compose wallet in Android Studio that supports multiple Monero wallets per user, realtime balance and transaction sync via an external backend, QR code transfers (including in‑app scanning), a Monero market chart view, and secure local storage of wallet secrets. Authentication uses Firebase (email/password and Google OAuth via GCP), with password hashing and salt applied before storage.",
    techStack: [
      {
        name: "Kotlin",
        reason:
          "Primary language for the Android app, leveraging coroutines and strong typing for clean asynchronous flows.",
      },
      {
        name: "Jetpack Compose",
        reason:
          "Declarative UI layer following Material Design 3 guidelines for a modern, mobile‑first experience.",
      },
      {
        name: "Material Design 3",
        reason:
          "Visual and interaction system used to design clean, predictable wallet and transfer flows.",
      },
      {
        name: "Coroutines",
        reason:
          "Asynchronous handling of network calls and data sync without blocking the UI thread.",
      },
      {
        name: "Firebase Authentication",
        reason:
          "Email/password login and Google OAuth (via GCP) for secure, familiar user authentication.",
      },
      {
        name: "REST API",
        reason:
          "External backend service that handles transaction processing, wallet synchronization, and realtime balance updates.",
      },
      {
        name: "Firestore & Local Storage",
        reason:
          "Firestore for user metadata and device‑level local storage for wallet secrets, with password hashing and salt for additional security.",
      },
    ],
    architecture: {
      auth: "Firebase Authentication with email/password and Google OAuth (via Google Cloud Platform), with hashed and salted passwords and Firebase‑secured backend access.",
      api: "REST‑based external backend responsible for wallet creation, transaction handling, and realtime Monero balance synchronization with the mobile client.",
      data: "Firestore used for user metadata and wallet associations, while wallet secrets are stored locally on device to keep private keys isolated from backend services.",
      performance:
        "Background synchronization and local caching keep the UI responsive even on flaky networks, while the Monero market chart view visualizes price trends without blocking main interactions.",
      security:
        "Wallet secrets remain on device and are never exposed to the backend; password hashing with salt and Firebase‑authenticated requests protect user accounts and API usage.",
    },
    links: {
      demo: null,
      repo: "https://github.com/Tuni0/Monero_jetpack",
      codeAccessNote: null,
    },
    gallery: [
      {
        src: "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/monero1.jpg",
      },
      {
        src: "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/monero2.jpg",
      },
      {
        src: "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/monero3.jpg",
      },
    ],
    tags: [names.kotlin, names.firebase, names.xml, names.aiHelp],
  },
  {
    id: 3,
    projectType: "student",
    slug: "kotlin-todo-companion",
    title: "Kotlin To‑Do Companion",
    valueProp: "Lightweight task manager with real‑time sync across devices.",
    status: "Completed",
    tags: [names.kotlin, names.firebase, names.xml],
    imageSrc:
      "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/todoo.png",
    imageAlt:
      "Kotlin to-do list app screens with task list and completed items.",
    overview:
      "Android to‑do application built in Kotlin that lets users quickly add, complete, and delete tasks, with data synced via Firebase.",
    problem:
      "Many simple to‑do apps either feel bloated or do not reliably sync tasks between sessions and devices.",
    solution:
      "I implemented a focused task list with clear status states and Firebase-backed persistence so tasks are safely stored and available whenever the user returns.",
    techStack: [
      {
        name: "Kotlin",
        reason: "Modern Android language with coroutines for async operations.",
      },
      {
        name: "Firebase",
        reason: "Realtime database and auth for persisting user tasks.",
      },
      {
        name: "Android UI",
        reason: "Material‑inspired layout for clean, accessible task lists.",
      },
    ],
    architecture: {
      auth: "Optional user identity using Firebase so tasks can be tied to a profile.",
      api: "Firebase SDK for CRUD operations on task documents.",
      data: "Tasks stored as documents with status, timestamps, and user association.",
      performance:
        "Local caching and batched writes to keep the UI responsive when adding or toggling tasks.",
      security:
        "Firebase security rules scoped writes and reads to the authenticated user’s task collection.",
    },
    links: {
      demo: null,
      repo: "https://github.com/Tuni0/ToDoApp",
      codeAccessNote: null,
    },
  },
  {
    id: 4,
    projectType: "student",
    slug: "scientific-calculator-desktop",
    title: "Scientific Calculator with Trigonometric Visualization",
    valueProp:
      "Windows scientific calculator with chained operations and real‑time trigonometric function plots.",
    status: "Completed",
    tags: [names.csharp],
    imageSrc:
      "https://raw.githubusercontent.com/Tuni0/Portofolio/refs/heads/main/portfolio/src/assets/calc.jpg",
    imageAlt:
      "Windows scientific calculator application with trigonometry plots.",
    overview:
      "Windows desktop scientific calculator built in C# and .NET WinForms that supports standard arithmetic, chained operations, keyboard input, trigonometric functions (sin, cos, tan), and real‑time graphical visualization of trigonometric functions in a dedicated plotting window using manual GDI+ rendering.",
    problem:
      "Built‑in system calculators typically provide basic numeric operations but do not help users visually understand trigonometric behavior or see function graphs alongside numeric results.",
    solution:
      "I implemented a multi‑form WinForms application with a custom arithmetic engine and a secondary plotting form. The main form handles standard and chained calculations, keyboard input, and trig functions, while the secondary form uses GDI+ to draw axes, scale values, plot sin/cos/tan from 0° to 360°, and highlight the currently selected input, including special handling for tan(x) asymptotes.",
    techStack: [
      {
        name: "C#",
        reason:
          "Core language for the calculator logic, state management of operands and operators, and trigonometric computations using System.Math.",
      },
      {
        name: ".NET",
        reason:
          "WinForms‑based desktop UI with multi‑form architecture (calculator form and plotting form), button‑driven input, and keyboard mapping.",
      },
      {
        name: "System.Drawing (GDI+)",
        reason:
          "Manual 2D graph rendering for trigonometric functions, including axes, scaling, line interpolation, and tangent asymptote visualization.",
      },
    ],
    architecture: {
      auth: "Runs entirely locally without authentication so the calculator is immediately available on desktop.",
      api: "No external APIs; all arithmetic, trigonometric calculations, and plotting are performed on‑device using the .NET framework and System.Math.",
      data: "In‑memory state for operands, operator history, decimal validation flags, selected trigonometric function, and degree‑to‑radian transformation, along with sampled plot points for the visualization form.",
      performance:
        "Lightweight WinForms UI and efficient GDI+ drawing keep numeric operations and real‑time plotting responsive, even when rendering full 0°–360° function curves and handling tan(x) discontinuities.",
      security:
        "Local‑only execution with no network calls; all user input and computed values stay on the device, reducing the application’s attack surface.",
    },
    links: {
      demo: null,
      repo: "https://github.com/Tuni0/Calculator",
      codeAccessNote: null,
    },
  },
];

function StatusBadge({ status }) {
  if (!status) return null;

  const configMap = {
    Completed: {
      label: "Completed",
      className:
        "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400",
    },
    "in-progress": {
      label: "In Progress",
      className:
        "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-400",
    },
    // private: {
    //   label: "Private",
    //   className:
    //     "bgred-50 text-red-700 ring-red-600/20 dark:bg-red-500/10 dark:text-red-300",
    // },
    team: {
      label: "Team",
      className:
        "bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-500/10 dark:text-blue-300",
    },
  };

  const statuses = Array.isArray(status) ? status : [status];

  return (
    <>
      {statuses.map((s) => {
        const config = configMap[s];
        if (!config) return null;
        return (
          <span
            key={s}
            className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide ring-1 ring-inset ${config.className}`}
          >
            {config.label}
          </span>
        );
      })}
    </>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
      {children}
    </p>
  );
}

function getProjectTypeLabel(project) {
  switch (project.projectType) {
    case "student":
      return "Student Project";
    case "startup":
      return "Startup Project";
    default:
      return "Case Study";
  }
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      onClick={() => onOpen(project)}
      className="group relative flex h-full flex-col flex-none overflow-hidden bg-white/15 dark:bg-neutral-900/40 backdrop-blur-xl border border-white/30 dark:border-neutral-800/60 rounded-[50px] shadow-xl transition-all duration-500 snap-center hover:shadow-violet-500/25 cursor-pointer text-left"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-[50px]">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-black dark:from-black dark:via-neutral-950 dark:to-black" />
        <div className="absolute inset-[6px] overflow-hidden rounded-[22px] bg-neutral-950/50 shadow-[0_18px_45px_rgba(15,23,42,0.65)] ring-1 ring-white/10">
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            className="h-full w-full origin-center scale-105 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/0 opacity-80" />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-3 p-6">
        <div>
          <div className="mb-1 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest bg-neutral-900/80 text-white dark:bg-neutral-100/90 dark:text-neutral-900 backdrop-blur">
                {getProjectTypeLabel(project)}
              </span>
              <StatusBadge status={project.status} />
            </div>
          </div>

          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight text-neutral-900 group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400">
              {project.title}
            </h3>
          </div>

          <p className="text-sm font-medium leading-snug text-neutral-600 line-clamp-2 dark:text-neutral-300">
            {project.valueProp}
          </p>
        </div>

        <div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.tags?.slice(0, 4).map((tag, index) => {
              const Icon = icons[tag];
              return (
                <span
                  key={index}
                  className={`inline-flex items-center gap-1 rounded-2xl px-3 py-1 text-[10px] font-semibold uppercase tracking-wide ${colors[tag]}`}
                >
                  {Icon && <Icon className="text-xs" />}
                  {tag}
                </span>
              );
            })}
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <span>View more info</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />2 min
              read
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function ProjectCaseStudy({ project, onClose }) {
  if (!project) return null;

  const mediaItems = [
    {
      kind: "image",
      src: project.imageSrc,
      alt: project.imageAlt,
    },
    ...(project.gallery || []).slice(0, 3).map((item) => ({
      kind: "image",
      src: item.src,
      alt: item.alt || project.title,
    })),
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = mediaItems[activeIndex] || mediaItems[0];

  return (
    <AnimatePresence>
      <motion.div
        key={project.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center bg-neutral-950/80 p-3 sm:p-6 backdrop-blur-2xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 230, damping: 26 }}
          className="relative flex h-[min(90vh,900px)] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-neutral-200/80 bg-card text-card-foreground shadow-[0_32px_120px_rgba(15,23,42,0.65)] dark:border-neutral-800 dark:bg-neutral-950"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            as="button"
            size="icon"
            onClick={onClose}
            className="absolute right-3 top-3 sm:right-4 sm:top-4 z-20 rounded-full bg-black/30 text-neutral-100 shadow-md backdrop-blur hover:bg-black/60 hover:text-white dark:bg-white/10 dark:text-neutral-100 dark:hover:bg-white/20"
            aria-label="Close project details"
          >
            <XIcon className="text-xl" />
          </Button>

          <div className="border-b border-neutral-200/80 bg-neutral-50/80 px-5 pb-4 pt-7 sm:pt-8 pr-10 sm:pr-12 dark:border-neutral-800 dark:bg-neutral-900/70 sm:px-7 sm:pb-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <SectionLabel>Case Study</SectionLabel>
                <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-2xl">
                  {project.title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {project.valueProp}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-start gap-2 sm:justify-end">
                <StatusBadge status={project.status} />
                {project.tags?.slice(0, 3).map((tag, idx) => {
                  const Icon = icons[tag];
                  return (
                    <span
                      key={idx}
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide ${colors[tag]}`}
                    >
                      {Icon && <Icon className="text-xs" />}
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col md:flex-row">
            <div className="hidden w-full border-r border-neutral-200/70 bg-neutral-50/70 p-5 dark:border-neutral-900/70 dark:bg-neutral-950/60 md:block md:w-[45%]">
              <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-card text-card-foreground shadow-xl">
                <div className="relative m-4 flex items-center justify-center overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
                  <img
                    src={activeItem.src}
                    alt={activeItem.alt}
                    className="max-h-[60vh] w-full max-w-full object-contain"
                  />

                  {mediaItems.length > 1 && (
                    <>
                      <Button
                        size="icon"
                        as="button"
                        onClick={() =>
                          setActiveIndex((prev) =>
                            prev === 0 ? mediaItems.length - 1 : prev - 1,
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border-transparent bg-neutral-900/70 text-card-foreground shadow-md backdrop-blur hover:bg-neutral-800 dark:bg-neutral-900/80 dark:hover:bg-neutral-800"
                        aria-label="Previous image"
                      >
                        <ArrowLeftIcon className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        as="button"
                        onClick={() =>
                          setActiveIndex((prev) =>
                            prev === mediaItems.length - 1 ? 0 : prev + 1,
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border-transparent bg-neutral-900/70 text-card-foreground shadow-md backdrop-blur hover:bg-neutral-800 dark:bg-neutral-900/80 dark:hover:bg-neutral-800"
                        aria-label="Next image"
                      >
                        <ArrowRightIcon className="h-4 w-4" />
                      </Button>

                      <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
                        {mediaItems.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            className={`h-1.5 w-4 rounded-full transition ${
                              index === activeIndex
                                ? "bg-violet-500"
                                : "bg-neutral-300/80 hover:bg-violet-300/80 dark:bg-neutral-700/80 dark:hover:bg-violet-400/80"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="modern-scrollbar flex-1 space-y-6 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
              <section className="space-y-1.5">
                <SectionLabel>Overview</SectionLabel>
                <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200 text-justify">
                  {project.overview}
                </p>
              </section>

              <section className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <SectionLabel>Problem</SectionLabel>
                  <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200 text-justify">
                    {project.problem}
                  </p>
                </div>
                <div className="space-y-1.5">
                  <SectionLabel>Solution</SectionLabel>
                  <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200 text-justify">
                    {project.solution}
                  </p>
                </div>
              </section>

              {project.techStack?.length > 0 && (
                <section className="space-y-2.5">
                  <SectionLabel>Tech Stack</SectionLabel>
                  <ul className="grid gap-2 text-sm sm:grid-cols-2">
                    {project.techStack.map((item) => (
                      <li
                        key={item.name}
                        className="rounded-2xl border border-neutral-200/80 bg-neutral-50 p-3 text-left dark:border-neutral-800 dark:bg-neutral-950/60"
                      >
                        <p className="text-[13px] font-semibold text-neutral-900 dark:text-neutral-50">
                          {item.name}
                        </p>
                        <p className="mt-1 text-[12px] leading-snug text-neutral-600 dark:text-neutral-300 text-justify">
                          {item.reason}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.architecture && (
                <section className="space-y-2.5">
                  <SectionLabel>Architecture Highlights</SectionLabel>
                  <div className="grid gap-2 text-sm sm:grid-cols-2">
                    {project.architecture.auth && (
                      <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50 p-3 text-left dark:border-neutral-800 dark:bg-neutral-950/60">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                          Auth
                        </p>
                        <p className="mt-1.5 text-[12px] leading-snug text-neutral-700 dark:text-neutral-200 text-justify">
                          {project.architecture.auth}
                        </p>
                      </div>
                    )}
                    {project.architecture.api && (
                      <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50 p-3 text-left dark:border-neutral-800 dark:bg-neutral-950/60">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                          API Integration
                        </p>
                        <p className="mt-1.5 text-[12px] leading-snug text-neutral-700 dark:text-neutral-200 text-justify">
                          {project.architecture.api}
                        </p>
                      </div>
                    )}
                    {project.architecture.data && (
                      <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50 p-3 text-left dark:border-neutral-800 dark:bg-neutral-950/60">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                          Data & Storage
                        </p>
                        <p className="mt-1.5 text-[12px] leading-snug text-neutral-700 dark:text-neutral-200 text-justify">
                          {project.architecture.data}
                        </p>
                      </div>
                    )}
                    {project.architecture.performance && (
                      <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50 p-3 text-left dark:border-neutral-800 dark:bg-neutral-950/60">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                          Performance
                        </p>
                        <p className="mt-1.5 text-[12px] leading-snug text-neutral-700 dark:text-neutral-200 text-justify">
                          {project.architecture.performance}
                        </p>
                      </div>
                    )}
                    {project.architecture.security && (
                      <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50 p-3 text-left dark:border-neutral-800 dark:bg-neutral-950/60 sm:col-span-2">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                          Security
                        </p>
                        <p className="mt-1.5 text-[12px] leading-snug text-neutral-700 dark:text-neutral-200 text-justify">
                          {project.architecture.security}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              )}

              <section className="space-y-2.5 pt-1">
                <SectionLabel>Links</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-violet-700 hover:shadow-md"
                    >
                      Completed Demo <span className="text-sm">↗</span>
                    </a>
                  )}
                  {project.links?.repo && (
                    <Button
                      as="a"
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="default"
                      className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-800 transition hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700 dark:border-neutral-800 dark:bg-neutral-950/60 dark:text-neutral-100 dark:hover:border-violet-500 dark:hover:bg-neutral-900 dark:hover:text-violet-300"
                    >
                      GitHub Repo <span className="text-sm">↗</span>
                    </Button>
                  )}
                  {project.links?.codeAccessNote && (
                    <span className="inline-flex items-center rounded-full bg-neutral-100 px-4 py-2 text-[11px] font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">
                      {project.links.codeAccessNote}
                    </span>
                  )}
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

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
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      id="projects"
      className={`z-0 mt-4 pt-20 ${theme === "dark" ? "dark" : ""}`}
    >
      <div className="mx-auto flex w-full flex-col items-start px-4 py-4 sm:py-6 lg:max-w-screen-xl">
        <div className="mb-6 flex w-full flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="mb-2 mt-4 self-start text-start font-abeezee text-3xl font-semibold text-violet-500 dark:text-violet-600 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="max-w-xl text-sm text-start text-neutral-600 dark:text-neutral-300">
              Case‑study style breakdowns focused on real problems, engineering
              trade‑offs, and production‑ready decisions.
            </p>
          </div>
        </div>

        <div className="relative w-full pb-12 pt-4 sm:pb-14 sm:pt-6">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <div className="flex items-center gap-2">
              <CarouselPrevious className="hidden sm:flex shrink-0" />

              <div className="flex-1 overflow-hidden">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <CarouselContent>
                    {projects.map((project) => (
                      <CarouselItem
                        key={project.id}
                        className="basis-[85%] sm:basis-1/2 lg:basis-1/3"
                      >
                        <div className="h-full p-3 sm:p-4">
                          <motion.div
                            variants={cardVariants}
                            className="h-full"
                          >
                            <ProjectCard
                              project={project}
                              onOpen={setSelectedProject}
                            />
                          </motion.div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </motion.div>
              </div>

              <CarouselNext className="hidden sm:flex shrink-0" />
            </div>
          </Carousel>
        </div>
      </div>

      <ProjectCaseStudy
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default Projects;
