import android from "@/assets/android.webp"
import bfs from "@/assets/bfs.webp"
import calc from "@/assets/calc.webp"
import ecommerce1 from "@/assets/ecommerce1.jpg"
import ecommerce2 from "@/assets/ecommerce2.jpg"
import ecommerce3 from "@/assets/ecommerce3.jpg"
import ecommerce4 from "@/assets/ecommerce4.jpg"
import monero1 from "@/assets/monero1.jpg"
import monero2 from "@/assets/monero2.jpg"
import monero3 from "@/assets/monero3.jpg"
import todo from "@/assets/todo.webp"
import wedding1 from "@/assets/wedding1.jpg"
import wedding2 from "@/assets/wedding2.jpg"
import wedding3 from "@/assets/wedding3.jpg"
import wedding4 from "@/assets/wedding4.jpg"
import type { Project, ProjectKind } from "./types"

export const projectKinds: Record<ProjectKind, string> = {
  startup: "Startup",
  academic: "Academic",
  personal: "Personal",
}

export const projects: Project[] = [
  {
    slug: "bfs-cashflow-platform",
    title: "BFS Cashflow Platform",
    kind: "startup",
    status: "in-progress",
    team: true,
    private: true,
    summary: "Real-time cashflow visibility for multi-entity finance teams.",
    cover: {
      src: bfs,
      alt: "BFS landing page with the platform's login screen on a laptop mockup.",
    },
    overview:
      "Internal web platform for finance teams to track cash positions, forecasts, and inter-company flows across multiple entities.",
    problem:
      "Finance teams were stitching together spreadsheets from multiple banks and entities, making it slow and error-prone to understand the true cash position.",
    solution:
      "I built a centralized dashboard that ingests bank statements and manual inputs, normalizes the data, and exposes cash positions, forecasts, and alerts in one place.",
    stack: [
      {
        name: ".NET 8",
        reason: "Backend services and application layer for financial processing.",
        tech: "dotnet",
      },
      {
        name: "C#",
        reason:
          "Domain services and DTOs coordinating the database, Entity Framework, and the WebAssembly UI.",
        tech: "csharp",
      },
      {
        name: "Blazor WebAssembly + MudBlazor",
        reason: "Component-based frontend built with Razor components and the MudBlazor UI library.",
        tech: "blazor",
      },
      {
        name: "SQL",
        reason:
          "Relational schema with server-side stored procedures for cashflow calculations and reporting.",
        tech: "sql",
      },
      {
        name: "XML",
        reason: "Bank statement import format and integration with external financial systems.",
        tech: "xml",
      },
    ],
    architecture: {
      auth: "Role-based access (finance vs. management) with per-entity permissions.",
      api: ".NET 8 backend services powering a Blazor WebAssembly frontend with a MudBlazor-based UI architecture.",
      data: "SQL database with Entity Framework mappings to internal namespaces and server-side stored procedures for financial processing.",
      deployment:
        "Containerized service architecture with optimized data access, deployed automatically via GitLab CI/CD pipelines.",
      security: "Database-level row restrictions per entity and encrypted connection strings.",
    },
    tech: ["dotnet", "csharp", "blazor", "sql", "xml", "gitlab-ci"],
    links: { note: "Private startup project – code not public." },
  },
  {
    slug: "ai-driven-ecommerce-platform",
    title: "AI-Driven E-Commerce Platform",
    kind: "academic",
    status: "completed",
    team: true,
    ai: "ai-agent",
    summary:
      "Full-stack e-commerce store with AI-powered product recommendations and Stripe Checkout.",
    cover: {
      src: ecommerce1,
      alt: "Storefront of the e-commerce app with product cards in dark mode.",
    },
    gallery: [
      { src: ecommerce2, alt: "E-commerce app – product details view." },
      { src: ecommerce3, alt: "E-commerce app – basket and checkout flow." },
      { src: ecommerce4, alt: "E-commerce app – admin and AI recommendation views." },
    ],
    overview:
      "Pulse is a full-stack e-commerce web application that combines a classic online store (authentication, cart, checkout, admin) with an AI-powered recommendation engine. The system analyzes user behavior, purchase history, and inventory data to generate personalized product suggestions, discounts, and ideas for new products.",
    problem:
      "Traditional e-commerce sites often rely on static listings and simple category filters, which do not adapt to individual user behavior. This limits personalization, reduces engagement, and makes it difficult to experiment with AI-driven targeting and pricing strategies in a realistic store workflow.",
    solution:
      "We built a complete e-commerce stack with React and Vite on the frontend, an Express.js REST API, Supabase Postgres for storage, and Stripe Checkout for payments. On top of this, an AI layer powered by OpenAI models analyzes logs, purchase history, and product data to generate per-user recommendations, discount suggestions, and proposals for new products. All AI responses are validated against a strict JSON schema before being stored or used, and the project includes automated tests (Playwright + Jest) to keep the system stable.",
    stack: [
      {
        name: "React + Vite",
        reason:
          "Client-side SPA for the product catalog, cart, authentication views, and admin dashboard, optimized for fast local iteration.",
        tech: "react",
      },
      {
        name: "Tailwind CSS",
        reason:
          "Utility-first styling for a clean, responsive storefront and admin interface without heavy design overhead.",
        tech: "tailwind",
      },
      {
        name: "Node.js & Express",
        reason:
          "Backend REST API handling authentication, product CRUD, basket operations, Stripe webhooks, and AI orchestration.",
        tech: "express",
      },
      {
        name: "Supabase (PostgreSQL)",
        reason:
          "Relational schema for users, products, baskets, logs, and AI outputs, with Supabase providing managed Postgres and auth primitives.",
        tech: "supabase",
      },
      {
        name: "Stripe Checkout",
        reason:
          "Secure payment collection with hosted checkout, webhooks, and integration into the order lifecycle.",
        tech: "stripe",
      },
      {
        name: "OpenAI API",
        reason:
          "AI agent layer using multiple models (gpt-5-nano, o4-mini, o1, gpt-3.5-turbo) to generate recommendations, discounts, and product ideas under a strict JSON schema.",
        tech: "openai",
      },
      {
        name: "Playwright & Jest",
        reason:
          "Automated frontend, end-to-end, and backend tests keeping critical purchase and recommendation flows stable.",
        tech: "playwright",
      },
    ],
    architecture: {
      auth: "JWT-based authentication with bcrypt-hashed passwords, issued by the Express backend and consumed by the React client for protected routes.",
      api: "REST API built with Express exposes endpoints for auth, products, baskets, and orders, and integrates with Stripe webhooks and the OpenAI API.",
      data: "Supabase-hosted PostgreSQL with relational tables for users, products, baskets, orders, logs, and AI recommendation outputs, enabling analysis and auditing.",
      performance:
        "Clear separation between frontend, backend, database, and AI agent modules allows independent scaling and paves the way for extracting the AI engine or auth into separate services.",
      security:
        "bcrypt password hashing, JWT auth with backend authorization checks, Stripe-managed payment flows, and strict JSON schema validation of AI responses reduce the risk of invalid or unsafe data entering the system.",
    },
    tech: ["react", "express", "postgresql", "openai", "stripe", "supabase", "tailwind", "vite", "playwright", "jest"],
    links: {
      repo: "https://github.com/Tuni0/E-commerce-ai",
      note: "Academic research project.",
    },
  },
  {
    slug: "ai-assisted-wedding-planner",
    title: "Wedding Planner SaaS",
    kind: "startup",
    status: "in-progress",
    ai: "vibe-coded",
    summary: "Full-stack wedding planning SaaS for venues, budgets, guests and maps.",
    cover: {
      src: wedding1,
      alt: "Dashboard view of the wedding planner web application.",
    },
    gallery: [
      { src: wedding2, alt: "Wedding planner – venue list with budget breakdown." },
      { src: wedding3, alt: "Wedding planner – map with color-coded venue pins." },
      { src: wedding4, alt: "Wedding planner – guest and event planning view." },
    ],
    overview:
      "Modern full-stack wedding planning web application built with Next.js, Supabase, and Google integrations. The platform lets users manage venues, guests, budgets, and custom cost structures, with real-time Google Maps and Places API integration. The project combines AI-assisted development (Vercel v0 and Cursor) with manual architecture and feature design.",
    problem:
      "Couples and planners often juggle spreadsheets, notes, and separate tools to manage venues, budgets, and guest lists. Existing tools rarely combine venue search, Google Maps, budget breakdowns, and guest management into a single, modern web experience tailored for weddings.",
    solution:
      "I designed a full-stack SaaS application where users authenticate via Google OAuth and One Tap, add venues through Google Places Autocomplete, manage per-venue budgets and custom cost fields, visualize locations on an embedded map with color-coded pins, and coordinate guest and event planning from a single dashboard. The app is built with Next.js (App Router), Supabase (Postgres + Auth), Tailwind CSS, and shadcn/ui, with Supabase row-level security and server actions for data access.",
    stack: [
      {
        name: "Next.js (App Router)",
        reason:
          "Full-stack React framework providing server actions, routing, and seamless integration with Vercel for deployment.",
        tech: "nextjs",
      },
      {
        name: "React & TypeScript",
        reason:
          "Type-safe component logic for complex UI states like budget panels, venue forms, and guest management flows.",
        tech: "typescript",
      },
      {
        name: "Tailwind CSS & shadcn/ui",
        reason:
          "Composable, themeable component system and utility-first styling for a clean, SaaS-style interface.",
        tech: "shadcn",
      },
      {
        name: "Supabase (Postgres + Auth)",
        reason:
          "Backend-as-a-service handling authentication, Postgres storage, and row-level security for multi-user data isolation.",
        tech: "supabase",
      },
      {
        name: "Google Maps & Places APIs",
        reason:
          "Real-time venue search, address autocomplete, map embeds, and custom pins for visual venue exploration.",
        tech: "google-maps",
      },
      {
        name: "Vercel & Supabase Storage",
        reason:
          "Vercel hosts the Next.js frontend and server actions, with Supabase and Vercel Blob Storage for persistence.",
        tech: "vercel",
      },
      {
        name: "AI-assisted tooling (Vercel v0, Cursor)",
        reason:
          "AI agents scaffolded parts of the UI and backend, while the architecture, data model, and critical workflows were designed manually.",
      },
    ],
    architecture: {
      auth: "Supabase authentication with Google OAuth and One Tap login, handling multi-account sessions and isolating user environments.",
      api: "Next.js server actions talk to Supabase Postgres and Google APIs, powering venue management, budget calculations, and guest workflows from a single codebase.",
      data: "Postgres relational schema in Supabase models venues, budgets, cost items, and guests, with row-level security enforcing per-account data separation.",
      performance:
        "Server actions and edge-friendly deployment on Vercel keep dashboard interactions responsive, while Google Maps and Places integrations are loaded on demand.",
      security:
        "Supabase row-level security, Supabase-based session handling, and Google OAuth ensure each user's data is isolated and protected in a multi-tenant SaaS context.",
    },
    tech: ["nextjs", "typescript", "supabase", "google-maps", "react", "tailwind", "shadcn", "postgresql", "vercel"],
    links: {
      note: "In development – currently limited to 2 Google accounts due to API rate limits.",
    },
  },
  {
    slug: "android-crypto-wallet",
    title: "Monero Mobile Wallet (Android)",
    kind: "academic",
    status: "completed",
    ai: "ai-assisted",
    summary:
      "Mobile-first Monero wallet with multi-wallet support, QR transfers and real-time sync.",
    cover: {
      src: android,
      alt: "Monero wallet app screens in light and dark mode.",
    },
    gallery: [
      { src: monero1, alt: "Monero wallet – account overview.", fit: "contain" },
      { src: monero2, alt: "Monero wallet – transactions.", fit: "contain" },
      { src: monero3, alt: "Monero wallet – market chart.", fit: "contain" },
    ],
    overview:
      "Android mobile wallet for managing Monero balances and transactions with support for multiple wallets, QR-based transfers, and real-time account data synchronization via an external backend service. Built in Kotlin with Jetpack Compose and a Material Design 3-inspired UI.",
    problem:
      "Many existing cryptocurrency wallets are overly technical, with unclear transaction states, complex wallet setup, poor transfer UX, limited multi-wallet management, and interfaces that are not truly mobile-first.",
    solution:
      "I designed and developed a Kotlin + Jetpack Compose wallet in Android Studio that supports multiple Monero wallets per user, real-time balance and transaction sync via an external backend, QR code transfers (including in-app scanning), a Monero market chart view, and secure local storage of wallet secrets. Authentication uses Firebase (email/password and Google OAuth via GCP), with passwords hashed and salted before storage.",
    stack: [
      {
        name: "Kotlin",
        reason:
          "Primary language for the Android app, leveraging coroutines and strong typing for clean asynchronous flows.",
        tech: "kotlin",
      },
      {
        name: "Jetpack Compose",
        reason: "Declarative UI layer following Material Design 3 guidelines for a modern, mobile-first experience.",
        tech: "jetpack-compose",
      },
      {
        name: "Material Design 3",
        reason: "Visual and interaction system used to design clean, predictable wallet and transfer flows.",
        tech: "material-design",
      },
      {
        name: "Coroutines",
        reason: "Asynchronous network calls and data sync without blocking the UI thread.",
      },
      {
        name: "Firebase Authentication",
        reason: "Email/password login and Google OAuth (via GCP) for secure, familiar user authentication.",
        tech: "firebase",
      },
      {
        name: "REST API",
        reason:
          "External backend service handling transaction processing, wallet synchronization, and real-time balance updates.",
        tech: "rest-api",
      },
      {
        name: "Firestore & local storage",
        reason:
          "Firestore for user metadata and device-level local storage for wallet secrets, with salted password hashing for additional security.",
      },
    ],
    architecture: {
      auth: "Firebase Authentication with email/password and Google OAuth (via Google Cloud Platform), with hashed and salted passwords and Firebase-secured backend access.",
      api: "REST-based external backend responsible for wallet creation, transaction handling, and real-time Monero balance synchronization with the mobile client.",
      data: "Firestore stores user metadata and wallet associations, while wallet secrets stay on the device to keep private keys isolated from backend services.",
      performance:
        "Background synchronization and local caching keep the UI responsive even on flaky networks; the market chart visualizes price trends without blocking main interactions.",
      security:
        "Wallet secrets never leave the device; salted password hashing and Firebase-authenticated requests protect user accounts and API usage.",
    },
    tech: ["kotlin", "jetpack-compose", "firebase", "android", "material-design", "rest-api"],
    links: { repo: "https://github.com/Tuni0/Monero_jetpack" },
  },
  {
    slug: "portfolio",
    title: "This Portfolio (self-hosted)",
    kind: "personal",
    status: "completed",
    summary:
      "Type-safe React portfolio shipped as a Docker image and auto-deployed to my own VPS on every push.",
    cover: {
      src: "/og-image.png",
      alt: "Social preview card of this portfolio.",
    },
    overview:
      "The site you are looking at. A single-page React application with all content kept in typed data files, built on shadcn/ui components and deployed through a fully automated container pipeline to a self-managed VPS.",
    problem:
      "A portfolio needs to be fast, easy to keep up to date and cheap to run – and it is also the best place to demonstrate the DevOps side of my work, not just the UI.",
    solution:
      "Content lives in typed TypeScript modules, so adding a project is a data change and an invalid technology id fails the build. Every push to main triggers GitHub Actions, which builds a multi-stage Docker image (Node build → Nginx runtime), publishes it to GitHub Container Registry, and redeploys it over SSH with docker compose. Traefik routes the domain and handles Let's Encrypt certificates.",
    stack: [
      {
        name: "React 19 + TypeScript",
        reason: "Typed components and typed content modules for projects, experience and certificates.",
        tech: "typescript",
      },
      {
        name: "Vite",
        reason: "Fast dev server and an optimized, hashed production build.",
        tech: "vite",
      },
      {
        name: "Tailwind CSS v4 & shadcn/ui",
        reason: "Accessible Radix-based components, themed with CSS variables for light and dark mode.",
        tech: "shadcn",
      },
      {
        name: "Docker & Nginx",
        reason: "Multi-stage image: Node builds the static bundle, Nginx serves it with long-term caching of hashed assets.",
        tech: "docker",
      },
      {
        name: "GitHub Actions + GHCR",
        reason: "CI/CD pipeline that builds, caches and pushes the image, then deploys it over SSH.",
        tech: "github-actions",
      },
      {
        name: "Traefik",
        reason: "Reverse proxy on the VPS with automatic HTTPS via Let's Encrypt.",
        tech: "traefik",
      },
    ],
    architecture: {
      api: "Static single-page app – no backend needed; deep links like ?project=… open a case study directly.",
      performance:
        "Hashed assets cached for a year by Nginx, WebP images, self-hosted fonts and a small, tree-shaken bundle.",
      deployment:
        "push → GitHub Actions → Docker image on GHCR → SSH → docker compose pull && up -d on the VPS, behind Traefik.",
      security:
        "Secrets live in GitHub Actions secrets, HTTPS everywhere through Let's Encrypt, and the container only serves static files.",
    },
    tech: ["react", "typescript", "docker", "github-actions", "vite", "tailwind", "shadcn", "nginx", "traefik", "git"],
    links: {
      repo: "https://github.com/Tuni0/Portofolio",
      demo: "https://portfolio.tunio.cloud",
    },
  },
  {
    slug: "kotlin-todo-companion",
    title: "Kotlin To-Do Companion",
    kind: "academic",
    status: "completed",
    summary: "Lightweight task manager with real-time sync across devices.",
    cover: {
      src: todo,
      alt: "Kotlin to-do app screens with a task list and completed items.",
    },
    overview:
      "Android to-do application built in Kotlin that lets users quickly add, complete, and delete tasks, with data synced via Firebase.",
    problem:
      "Many simple to-do apps either feel bloated or do not reliably sync tasks between sessions and devices.",
    solution:
      "I implemented a focused task list with clear status states and Firebase-backed persistence, so tasks are safely stored and available whenever the user returns.",
    stack: [
      {
        name: "Kotlin",
        reason: "Modern Android language with coroutines for async operations.",
        tech: "kotlin",
      },
      {
        name: "Firebase",
        reason: "Realtime database and auth for persisting user tasks.",
        tech: "firebase",
      },
      {
        name: "Android UI (XML)",
        reason: "Material-inspired layouts for clean, accessible task lists.",
        tech: "android",
      },
    ],
    architecture: {
      auth: "Optional user identity using Firebase so tasks can be tied to a profile.",
      api: "Firebase SDK for CRUD operations on task documents.",
      data: "Tasks stored as documents with status, timestamps, and user association.",
      performance: "Local caching and batched writes keep the UI responsive when adding or toggling tasks.",
      security: "Firebase security rules scope reads and writes to the authenticated user's task collection.",
    },
    tech: ["kotlin", "firebase", "android", "xml"],
    links: { repo: "https://github.com/Tuni0/ToDoApp" },
  },
  {
    slug: "scientific-calculator-desktop",
    title: "Scientific Calculator with Trigonometric Visualization",
    kind: "academic",
    status: "completed",
    summary:
      "Windows scientific calculator with chained operations and real-time trigonometric function plots.",
    cover: {
      src: calc,
      alt: "Windows scientific calculator application.",
      fit: "contain",
    },
    overview:
      "Windows desktop scientific calculator built in C# and .NET WinForms that supports standard arithmetic, chained operations, keyboard input, trigonometric functions (sin, cos, tan), and real-time graphical visualization of trigonometric functions in a dedicated plotting window using manual GDI+ rendering.",
    problem:
      "Built-in system calculators provide basic numeric operations but do not help users visually understand trigonometric behavior or see function graphs alongside numeric results.",
    solution:
      "I implemented a multi-form WinForms application with a custom arithmetic engine and a secondary plotting form. The main form handles standard and chained calculations, keyboard input, and trig functions, while the secondary form uses GDI+ to draw axes, scale values, plot sin/cos/tan from 0° to 360°, and highlight the currently selected input – including special handling for tan(x) asymptotes.",
    stack: [
      {
        name: "C#",
        reason:
          "Calculator logic, operand and operator state management, and trigonometric computations using System.Math.",
        tech: "csharp",
      },
      {
        name: ".NET WinForms",
        reason:
          "Desktop UI with a multi-form architecture (calculator and plotting forms), button-driven input and keyboard mapping.",
        tech: "dotnet",
      },
      {
        name: "System.Drawing (GDI+)",
        reason:
          "Manual 2D rendering of trigonometric functions, including axes, scaling, line interpolation and tangent asymptotes.",
      },
    ],
    architecture: {
      api: "No external APIs – all arithmetic, trigonometry and plotting run on-device using .NET and System.Math.",
      data: "In-memory state for operands, operator history, decimal validation flags, the selected trig function and degree-to-radian conversion, plus sampled plot points.",
      performance:
        "Lightweight WinForms UI and efficient GDI+ drawing keep numeric operations and real-time plotting responsive, even for full 0°–360° curves with tan(x) discontinuities.",
      security: "Local-only execution with no network calls, which keeps the attack surface minimal.",
    },
    tech: ["csharp", "dotnet"],
    links: { repo: "https://github.com/Tuni0/Calculator" },
  },
]

export function findProject(slug: string | null | undefined) {
  if (!slug) return undefined
  return projects.find((project) => project.slug === slug)
}
