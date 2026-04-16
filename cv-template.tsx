"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  Award,
  Users,
  TrendingUp,
  Brain,
  Code2,
  Cloud,
  BarChart3,
  Briefcase,
  GraduationCap,
  Zap,
  Star,
  Sun,
  Moon,
} from "lucide-react"

/* ── Brand icons (lucide deprecated these) ─────────────────────────────────── */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────────────────── */

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
]

const IMPACT_STATS = [
  {
    icon: TrendingUp,
    value: "50%",
    label: "ML Efficiency Gain",
    sublabel: "Incremental update strategies",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-500/10",
    border: "border-blue-200 dark:border-blue-500/20",
    glow: "dark:shadow-blue-500/20",
  },
  {
    icon: Award,
    value: "40%",
    label: "Cost Reduction",
    sublabel: "Pipeline optimisation & automation",
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-500/10",
    border: "border-cyan-200 dark:border-cyan-500/20",
    glow: "dark:shadow-cyan-500/20",
  },
  {
    icon: Zap,
    value: "17M+",
    label: "Records Processed",
    sublabel: "Entity resolution at scale",
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-500/10",
    border: "border-violet-200 dark:border-violet-500/20",
    glow: "dark:shadow-violet-500/20",
  },
  {
    icon: Users,
    value: "5+",
    label: "Years Experience",
    sublabel: "Leading data science teams",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    border: "border-emerald-200 dark:border-emerald-500/20",
    glow: "dark:shadow-emerald-500/20",
  },
]

const EXPERIENCES = [
  {
    title: "Founder & CEO",
    company: "DetaLabs AI (Pvt) Ltd",
    companyUrl: "https://www.detalabsai.com",
    period: "Nov 2022 – Present",
    badge: "Self Employed",
    badgeStyle: "bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 border-violet-300 dark:border-violet-500/30",
    current: true,
    description:
      "As the founder of DetaLabs AI, I lead a venture dedicated to pushing the boundaries of artificial intelligence. We specialise in crafting intelligent AI agents designed to automate complex tasks, developing high-performance computer vision applications for insightful analysis, and building powerful machine learning solutions—from deep learning to neural networks—that turn data into actionable intelligence.",
    highlights: [],
    metrics: [],
  },
  {
    title: "Lead Data Scientist",
    company: "Mortar AI PVT LTD",
    period: "Sep 2024 – Present",
    badge: "Current Role",
    badgeStyle: "bg-blue-100 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-500/30",
    current: true,
    description: "",
    highlights: [
      "Architected Helix — an agentic AI system built with LangGraph, Redis, Azure AI Search, FastAPI, and RAG-based retrieval pipelines",
      "Designed and optimised RAG workflows to improve response quality, retrieval accuracy, and overall system intelligence",
      "Manage a distributed Data Science team across Australia and Sri Lanka, driving collaboration and technical alignment",
      "Partner with Business Analysts and PMO to gather requirements, define solution approaches, and support project planning",
      "Build end-to-end data pipelines across multiple data sources for AI and analytics workflows",
      "Execute POCs for strategic R&D initiatives, assessing feasibility, technical design, and business impact",
      "Developed n8n automation workflows to streamline ad hoc operational and business processes",
    ],
    metrics: [],
  },
  {
    title: "Lead Data Scientist",
    company: "Firehouse Technology",
    period: "Feb 2023 – Sep 2024",
    badge: "",
    badgeStyle: "",
    current: false,
    description: "",
    highlights: [
      "Led and managed distributed Data Science teams across Australia and Sri Lanka",
      "Achieved 50% improvement in ML model training efficiency through innovative incremental update strategies",
      "Reduced data pipeline operational costs by 40% through comprehensive optimisation and automation",
      "Designed scalable Python ETL processes using Kafka and Airbyte for Azure Data Lake integration",
      "Spearheaded AI initiatives: Mortar AI co-pilot, entity resolution, churn prediction, and audience analysis",
      "Managed complete ML model lifecycle from development to production deployment and monitoring",
      "Mentored team members and interns, fostering technical growth and knowledge transfer",
    ],
    metrics: [
      { icon: Users, label: "Team Leadership" },
      { icon: TrendingUp, label: "50% Efficiency Gain" },
      { icon: Award, label: "40% Cost Reduction" },
    ],
  },
  {
    title: "Senior Data Scientist",
    company: "Firehouse Technology",
    period: "Feb 2023 – Oct 2024",
    badge: "",
    badgeStyle: "",
    current: false,
    description: "",
    highlights: [
      "Conducted comprehensive POC exercises for emerging data initiatives and AI solutions",
      "Developed automated data processing scripts, significantly reducing manual effort and increasing productivity",
      "Analysed complex, high-volume datasets to identify actionable business insights and trends",
      "Implemented production-ready machine learning models with continuous monitoring and optimisation",
    ],
    metrics: [],
  },
  {
    title: "Business Intelligence Engineer",
    company: "OctopusBI",
    period: "May 2022 – Feb 2023",
    badge: "",
    badgeStyle: "",
    current: false,
    description: "",
    highlights: [
      "Managed analytics dashboard projects for Australian Public Schools (Anglican School corporations)",
      "Developed custom analytics solutions and queries for client-specific requirements",
      "Led R&D initiatives to enhance student academic performance through innovative analytics",
      "Collaborated with development teams to optimise ETL processes and API services",
      "Conducted comprehensive BI verification across development and QA environments",
    ],
    metrics: [],
  },
  {
    title: "Data Science Intern",
    company: "Sydpro (Pvt) Ltd",
    period: "Sep 2020 – Mar 2021",
    badge: "",
    badgeStyle: "",
    current: false,
    description: "",
    highlights: [
      "Identified business problems solvable through data analytics and machine learning approaches",
      "Developed data-driven solutions for student performance improvement and risk detection",
      "Built real-time analytics dashboards supporting multiple client teams",
      "Created full-stack POC applications for key R&D initiatives",
    ],
    metrics: [],
  },
]

const SKILL_CATEGORIES = [
  {
    icon: Code2,
    title: "Programming & Frameworks",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-500/10",
    border: "border-blue-200 dark:border-blue-500/20",
    skills: ["Python", "SQL", "PySpark", "TensorFlow", "PyTorch", "Flask", "FastAPI", "Celery", "LangGraph"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-500/10",
    border: "border-violet-200 dark:border-violet-500/20",
    skills: ["NLP", "Deep Learning", "Computer Vision", "Neural Networks", "GPT", "LangChain", "RAG", "Agentic AI"],
  },
  {
    icon: Cloud,
    title: "Cloud & Data Platforms",
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-500/10",
    border: "border-cyan-200 dark:border-cyan-500/20",
    skills: ["Azure", "GCP", "Databricks", "Kafka", "Airbyte", "Azure AI Search", "Redis", "Azure Data Lake"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Automation",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    border: "border-emerald-200 dark:border-emerald-500/20",
    skills: ["Power BI", "ETL / SSMS", "GraphQL", "Postman", "Figma", "n8n"],
  },
]

const PROJECTS = [
  {
    title: "Mortar Helix",
    company: "Mortar AI PVT LTD",
    period: "2024 – Present",
    featured: true,
    badge: "",
    tech: ["Python", "LangGraph", "Azure AI Search", "Redis", "SerpAPI", "Keycloak", "RAG", "Flask"],
    metric: null,
    highlights: [
      "Built the backend for an AI co-pilot that unified reasoning across enterprise documents, SQL data, ML forecasts, and live web context through a single endpoint",
      "Orchestrated multi-tool planning and execution with LangGraph — combining document retrieval, SQL, web search, visualisation, and synthesis agents",
      "Implemented streaming responses with incremental tokens, tables, charts, and citations for real-time co-pilot interactions",
      "Integrated Azure AI Search, Redis, SerpAPI, Keycloak OIDC, and Azure Key Vault for secure enterprise-ready deployment",
    ],
  },
  {
    title: "Intelligent Churn Prediction System",
    company: "Firehouse Technology",
    period: "2023 – 2024",
    featured: false,
    badge: "",
    tech: ["Python", "TensorFlow", "Azure ML", "PySpark", "Kafka", "Power BI"],
    metric: { value: "92%", label: "Accuracy" },
    highlights: [
      "Built end-to-end ML pipeline for customer churn prediction with 92% accuracy",
      "Processed 10M+ customer records using distributed computing with PySpark",
      "Implemented real-time data streaming with Kafka for continuous model updates",
      "Reduced customer churn by 28% through early intervention strategies",
    ],
  },
  {
    title: "Hybrid Client Entity Resolution System",
    company: "Firehouse Technology",
    period: "2023 – 2024",
    featured: false,
    badge: "Personal Initiative",
    tech: ["Python", "Autoencoders", "MinHash", "Deep Learning", "Azure", "ETL"],
    metric: { value: "67%", label: "Faster" },
    highlights: [
      "Replaced legacy rule-based system with hybrid ML approach using autoencoders and MinHash blocking",
      "67% processing time reduction — from 30 minutes to 10 minutes for equivalent workloads",
      "Scaled to process 17 million client records — a capability the previous system lacked",
      "Significantly reduced cloud infrastructure costs through optimised algorithms",
    ],
  },
  {
    title: "Product Resolution & Clustering System",
    company: "Firehouse Technology",
    period: "2023 – 2024",
    featured: false,
    badge: "",
    tech: ["Python", "Flask", "NLP", "Neural Networks", "Databricks", "Azure", "SQL"],
    metric: null,
    highlights: [
      "Developed full-stack product resolution system to identify duplicates across multiple data sources",
      "Implemented advanced NLP and neural networks for intelligent product matching and clustering",
      "Built interactive Flask backend with decision-making interface for cluster recommendations",
      "Integrated with Databricks for large-scale data processing on Azure infrastructure",
    ],
  },
  {
    title: "Mortar AI Co-pilot",
    company: "Firehouse Technology",
    period: "2024",
    featured: false,
    badge: "",
    tech: ["Python", "GPT", "LangChain", "RAG", "Azure", "NLP"],
    metric: { value: "35%", label: "Efficiency" },
    highlights: [
      "Developed AI-powered co-pilot system to assist with automated decision-making",
      "Implemented RAG architecture for enhanced context awareness and accuracy",
      "Improved operational efficiency by 35% across integrated business workflows",
      "Led cross-functional team of 5 engineers across Australia and Sri Lanka",
    ],
  },
  {
    title: "Student Academic Performance Analytics",
    company: "OctopusBI",
    period: "2021",
    featured: false,
    badge: "",
    tech: ["Python", "RNN", "Flask", "React", "Feature Engineering"],
    metric: null,
    highlights: [
      "Developed RNN-based predictive model to analyse sequential academic data and performance patterns",
      "Built full-stack application with Flask backend and React frontend for interactive data visualisation",
      "Implemented feature importance analysis to help educators understand performance drivers",
      "Delivered actionable insights for improving student outcomes in Australian Public Schools",
    ],
  },
]

const EDUCATION = [
  {
    degree: "Master of Science in Data Science and Artificial Intelligence",
    school: "University of Sri Jayewardenepura",
    period: "2023 – Present",
    gpa: "",
    current: true,
  },
  {
    degree: "Machine Learning for Professionals (Certificate)",
    school: "University of Jayewardenepura & Erasmus DS and AI Consortium",
    period: "2022",
    gpa: "",
    current: false,
  },
  {
    degree: "BSc (Hons.) Applied Statistics",
    school: "University of Colombo — Faculty of Science",
    period: "2017 – 2021",
    gpa: "GPA: 3.2 / 4.0",
    current: false,
  },
]

/* ─────────────────────────────────────────────────────────────────────────────
   THEME TOGGLE BUTTON
───────────────────────────────────────────────────────────────────────────── */

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-white/5 animate-pulse" />
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex items-center justify-center w-9 h-9 rounded-xl
        bg-slate-100 hover:bg-slate-200 border border-slate-200
        dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10
        text-slate-600 dark:text-slate-400
        hover:text-slate-900 dark:hover:text-white
        transition-all duration-200 hover:scale-105 group"
    >
      {/* Sun icon — visible in dark mode (click → go light) */}
      <Sun
        className={`w-4 h-4 absolute transition-all duration-300 ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"
        }`}
      />
      {/* Moon icon — visible in light mode (click → go dark) */}
      <Moon
        className={`w-4 h-4 absolute transition-all duration-300 ${
          !isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
        }`}
      />
    </button>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   SCROLL PROGRESS BAR
───────────────────────────────────────────────────────────────────────────── */

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 z-[60] h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-[width] duration-75"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(progress)}
    />
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   SCROLL REVEAL HOOK
   Strategy: content starts fully visible (SSR safe).
   After mount, JS hides each .reveal element with inline styles,
   then IntersectionObserver restores them when they enter the viewport.
   If JS never runs → everything stays visible. No blank pages.
───────────────────────────────────────────────────────────────────────────── */

function useScrollReveal() {
  useEffect(() => {
    const EASE = "cubic-bezier(0.16, 1, 0.3, 1)"
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    )

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
          observer.unobserve(el)
        })
      },
      { threshold: 0.07, rootMargin: "0px 0px -32px 0px" }
    )

    elements.forEach((el, i) => {
      const delay = (i % 5) * 55  // gentle stagger: 0, 55, 110, 165, 220 ms, then resets
      el.classList.add("reveal-ready")
      el.style.opacity = "0"
      el.style.transform = "translateY(22px)"
      el.style.transition = `opacity 0.6s ${EASE} ${delay}ms, transform 0.6s ${EASE} ${delay}ms`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────────────────── */

export default function ProfessionalCV() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useScrollReveal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050b18] text-slate-900 dark:text-slate-100 overflow-x-hidden">

      {/* ── Scroll progress bar ── */}
      <ScrollProgressBar />

      {/* ── Ambient background glows (dark only) ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="hidden dark:block absolute -top-40 left-1/3 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] animate-glow" />
        <div className="hidden dark:block absolute top-1/2 -right-20 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[120px] animate-glow" style={{ animationDelay: "2s" }} />
        <div className="hidden dark:block absolute -bottom-20 left-0 w-[600px] h-[500px] bg-cyan-600/6 rounded-full blur-[130px] animate-glow" style={{ animationDelay: "4s" }} />

        {/* Light mode — subtle colour wash */}
        <div className="dark:hidden absolute -top-20 left-1/3 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[120px]" />
        <div className="dark:hidden absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-100/40 rounded-full blur-[100px]" />
      </div>

      {/* ══════════════════════════════════════════
          NAVIGATION
      ══════════════════════════════════════════ */}
      <header>
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            scrolled
              ? "bg-white/90 dark:bg-[#050b18]/90 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 shadow-sm dark:shadow-xl dark:shadow-black/40"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => scrollTo("#hero")}
              className="text-slate-900 dark:text-white font-bold text-xl tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Back to top"
            >
              <span className="text-blue-600 dark:text-blue-400">N</span>imantha
              <span className="text-blue-600 dark:text-blue-400">.</span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-7">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}

              <ThemeToggle />

              <a
                href="mailto:nimantabandara@gmail.com"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white text-sm rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile: toggle + hamburger */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen((o) => !o)}
                className="flex flex-col gap-1.5 p-1 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                aria-label="Toggle mobile menu"
              >
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-80" : "max-h-0"}`}>
            <div className="bg-white/95 dark:bg-[#050b18]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 px-6 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="block w-full text-left text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-3 text-sm border-b border-slate-100 dark:border-white/5 last:border-0 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="mailto:nimantabandara@gmail.com"
                className="block mt-3 text-center py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-xl font-medium transition-colors"
              >
                Hire Me
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section
          id="hero"
          aria-label="Introduction"
          className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 dot-grid"
        >
          <div className="relative z-10 text-center max-w-4xl mx-auto">

            {/* Profile photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500 blur-2xl opacity-30 dark:opacity-40 animate-glow" />
                <div className="relative w-36 h-36 rounded-full overflow-hidden ring-2 ring-blue-200 dark:ring-white/10 ring-offset-4 ring-offset-slate-50 dark:ring-offset-[#050b18] shadow-xl">
                  <Image
                    src="/nimantha.jpg"
                    alt="Nimantha Bandara — Lead Data Scientist and AI Engineer"
                    width={144}
                    height={144}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-50 dark:border-[#050b18] animate-dot-pulse" />
              </div>
            </div>

            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-xs font-medium mb-6 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              Open to Opportunities
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white mb-3 tracking-tight leading-none">
              Nimantha{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 dark:from-blue-400 dark:via-cyan-400 dark:to-violet-400 bg-clip-text text-transparent animate-gradient-x">
                Bandara
              </span>
            </h1>

            {/* Title */}
            <h2 className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 mb-5 font-light">
              Founder &amp; Lead Data Scientist
              <span className="mx-2 text-slate-300 dark:text-slate-600">·</span>
              <span className="text-blue-600 dark:text-blue-400">AI &amp; ML Engineer</span>
            </h2>

            {/* Summary */}
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed text-sm md:text-base">
              Nimantha Bandara is a results-driven Lead Data Scientist with 5+ years of experience in advanced analytics,
              AI initiatives, and business intelligence. Specialised in NLP, Machine Learning, and agentic AI systems
              built on modern cloud platforms. Proven track record driving 50% efficiency gains and 40% cost reductions.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <a
                href="https://www.linkedin.com/in/nimantha-bandara-986192132"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-700 dark:text-white rounded-2xl font-medium text-sm transition-all hover:scale-105"
              >
                <LinkedInIcon className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/RNimantha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-700 dark:text-white rounded-2xl font-medium text-sm transition-all hover:scale-105"
              >
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="mailto:nimantabandara@gmail.com"
                aria-label="Send email"
                className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-700 dark:text-white rounded-2xl font-medium text-sm transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </div>

            {/* Contact pills */}
            <div className="flex flex-wrap justify-center gap-5 text-xs text-slate-400 dark:text-slate-500">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                +94 716 113 385
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Borelasgamuwa, Sri Lanka
              </span>
            </div>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollTo("#about")}
            aria-label="Scroll to about section"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-300 dark:text-slate-600 hover:text-slate-500 dark:hover:text-slate-400 transition-colors animate-bounce"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </section>

        {/* ══════════════════════════════════════════
            IMPACT STATS
        ══════════════════════════════════════════ */}
        <section id="about" aria-label="Key achievements" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 reveal">
              <p className="text-blue-600 dark:text-blue-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3">
                Impact at a Glance
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Measurable Results</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm">
                Delivering data-driven solutions with quantifiable business impact across industries.
              </p>
            </div>

            {/* SEO prose */}
            <p className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-12 text-sm leading-relaxed text-center">
              Nimantha Bandara is a Sri Lankan Lead Data Scientist and AI Engineer currently serving as Lead Data
              Scientist at Mortar AI PVT LTD and as the Founder &amp; CEO of{" "}
              <a
                href="https://www.detalabsai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                DetaLabs AI (Pvt) Ltd
              </a>
              . With expertise spanning Machine Learning, Natural Language Processing, Deep Learning, RAG pipelines, and
              agentic AI systems, Nimantha has led distributed data science teams across Australia and Sri Lanka,
              delivering production-grade AI solutions for enterprise clients. He holds a BSc (Hons.) in Applied
              Statistics from the University of Colombo and is currently completing an MSc in Data Science and
              Artificial Intelligence at the University of Sri Jayewardenepura.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {IMPACT_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className={`reveal relative p-6 rounded-2xl ${stat.bg} border ${stat.border} hover:scale-105 hover:shadow-xl ${stat.glow} transition-all duration-300 group cursor-default`}
                >
                  <stat.icon className={`w-5 h-5 ${stat.color} mb-4 opacity-80 group-hover:opacity-100 transition-opacity`} />
                  <div className={`text-4xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-white mb-1">{stat.label}</div>
                  <div className="text-slate-500 dark:text-slate-500 text-xs leading-snug">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="gradient-divider mx-6 max-w-6xl md:mx-auto" />

        {/* ══════════════════════════════════════════
            EXPERIENCE
        ══════════════════════════════════════════ */}
        <section id="experience" aria-label="Professional experience" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 reveal">
              <p className="text-blue-600 dark:text-blue-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3 flex items-center justify-center gap-2">
                <Briefcase className="w-3.5 h-3.5" />
                Career Journey
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Professional Experience</h2>
            </div>

            <div className="relative">
              <div
                aria-hidden
                className="absolute left-[7px] md:left-[35px] top-4 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-cyan-500/30 to-transparent"
              />

              <div className="space-y-6">
                {EXPERIENCES.map((exp, idx) => (
                  <article key={idx} className="relative pl-8 md:pl-20 reveal">
                    <div
                      aria-hidden
                      className={`absolute left-0 md:left-7 top-7 w-4 h-4 rounded-full border-2 transition-all ${
                        exp.current
                          ? "bg-blue-500 border-blue-500 shadow-lg shadow-blue-500/50"
                          : "bg-slate-200 dark:bg-[#0a1628] border-slate-300 dark:border-slate-600"
                      }`}
                    />

                    <div className="glass-card rounded-2xl p-6 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm inline-flex items-center gap-1 transition-colors"
                            >
                              {exp.company}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{exp.company}</p>
                          )}
                        </div>
                        <div className="flex flex-row md:flex-col items-center md:items-end gap-2 flex-shrink-0">
                          <span className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">{exp.period}</span>
                          {exp.badge && (
                            <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium whitespace-nowrap ${exp.badgeStyle}`}>
                              {exp.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      {exp.description && (
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                      )}

                      {exp.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-4 mb-4 pb-4 border-b border-slate-100 dark:border-white/5">
                          {exp.metrics.map((m, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                              <m.icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                              {m.label}
                            </div>
                          ))}
                        </div>
                      )}

                      {exp.highlights.length > 0 && (
                        <ul className="space-y-2">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                              <span className="mt-2 w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="gradient-divider mx-6 max-w-6xl md:mx-auto" />

        {/* ══════════════════════════════════════════
            SKILLS
        ══════════════════════════════════════════ */}
        <section id="skills" aria-label="Technical skills" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 reveal">
              <p className="text-cyan-600 dark:text-cyan-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3 flex items-center justify-center gap-2">
                <Brain className="w-3.5 h-3.5" />
                Technical Stack
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Skills &amp; Expertise</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {SKILL_CATEGORIES.map((cat) => (
                <div
                  key={cat.title}
                  className={`reveal p-6 rounded-2xl ${cat.bg} border ${cat.border} hover:shadow-md transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl ${cat.bg} border ${cat.border}`}>
                      <cat.icon className={`w-5 h-5 ${cat.color}`} />
                    </div>
                    <h3 className="font-bold text-slate-800 dark:text-white text-sm">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium ${cat.bg} ${cat.color} border ${cat.border} hover:scale-105 transition-transform cursor-default`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="gradient-divider mx-6 max-w-6xl md:mx-auto" />

        {/* ══════════════════════════════════════════
            PROJECTS
        ══════════════════════════════════════════ */}
        <section id="projects" aria-label="Key projects" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 reveal">
              <p className="text-violet-600 dark:text-violet-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3 flex items-center justify-center gap-2">
                <Zap className="w-3.5 h-3.5" />
                Portfolio
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Key Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {PROJECTS.map((project, idx) => (
                <article
                  key={idx}
                  className={`relative glass-card rounded-2xl p-6 transition-all duration-300 reveal ${
                    project.featured
                      ? "md:col-span-2 !border-blue-200 dark:!border-blue-500/25 hover:!border-blue-300 dark:hover:!border-blue-500/40"
                      : ""
                  }`}
                >
                  {project.featured && (
                    <div className="absolute top-5 right-5">
                      <span className="text-xs px-3 py-1 bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 rounded-full font-medium">
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div className="min-w-0">
                      <h3 className="font-bold text-slate-900 dark:text-white text-base md:text-lg leading-snug">{project.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 text-sm">{project.company}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <span className="text-xs text-slate-400 dark:text-slate-500 block">{project.period}</span>
                      {project.metric && (
                        <div className="mt-1">
                          <span className="text-2xl font-black text-cyan-600 dark:text-cyan-400">{project.metric.value}</span>
                          <span className="text-xs text-slate-400 dark:text-slate-500 block">{project.metric.label}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {project.badge && (
                    <span className="inline-block text-xs px-2.5 py-0.5 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20 rounded-full mb-3 font-medium">
                      {project.badge}
                    </span>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-500 dark:text-slate-400 rounded-lg hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                        <span className="mt-2 w-1 h-1 rounded-full bg-violet-500 dark:bg-violet-400 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="gradient-divider mx-6 max-w-6xl md:mx-auto" />

        {/* ══════════════════════════════════════════
            EDUCATION
        ══════════════════════════════════════════ */}
        <section id="education" aria-label="Education" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 reveal">
              <p className="text-emerald-600 dark:text-emerald-400 text-xs uppercase tracking-[0.25em] font-semibold mb-3 flex items-center justify-center gap-2">
                <GraduationCap className="w-3.5 h-3.5" />
                Academic Background
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Education</h2>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 flex flex-col md:flex-row reveal md:items-center md:justify-between gap-3 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">{edu.degree}</h3>
                      {edu.current && (
                        <span className="text-xs px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 rounded-full font-medium">
                          In Progress
                        </span>
                      )}
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">{edu.school}</p>
                    {edu.gpa && <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">{edu.gpa}</p>}
                  </div>
                  <span className="text-sm text-slate-400 dark:text-slate-500 flex-shrink-0">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="gradient-divider mx-6 max-w-6xl md:mx-auto" />

        {/* ══════════════════════════════════════════
            LEADERSHIP & TEACHING
        ══════════════════════════════════════════ */}
        <section aria-label="Leadership and teaching" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="glass-card rounded-2xl p-6 reveal">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2.5">
                  <Star className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
                  Teaching &amp; Mentoring
                </h3>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white text-sm">Guest Lecturer</h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mt-0.5">University of Colombo</p>
                  <ul className="mt-3 space-y-2">
                    {["Fundamentals of AI", "Introduction to Deep Learning"].map((c) => (
                      <li key={c} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-yellow-500 dark:bg-yellow-400" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 reveal">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2.5">
                  <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Leadership &amp; Activities
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    { role: "Director", org: "Rotaract Club of Faculty of Science (2018/19)" },
                    { role: "Team Leader", org: "AIESEC in Colombo Central (2018/19)" },
                    { role: "Department Head — Videography & Photography", org: "FOS Media (2018/19)" },
                    { role: "University Colors — Rugby, Weightlifting (Vice Captain), Rowing", org: "University of Colombo (2017–2019)" },
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="font-semibold text-slate-800 dark:text-white">{item.role}</p>
                      <p className="text-blue-600 dark:text-blue-400 text-xs">{item.org}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="relative py-20 px-6 overflow-hidden" aria-label="Contact and footer">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5" aria-hidden />
        <div className="absolute inset-0 dot-grid opacity-50" aria-hidden />

        <div className="relative max-w-6xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-md mx-auto text-sm leading-relaxed">
            Looking for a Data Scientist who can turn complex data into measurable business impact? I&apos;d love to
            connect.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a
              href="mailto:nimantabandara@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white rounded-2xl font-medium text-sm transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
            >
              <Mail className="w-4 h-4" />
              nimantabandara@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/nimantha-bandara-986192132"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-700 dark:text-white rounded-2xl font-medium text-sm transition-all hover:scale-105"
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/RNimantha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-700 dark:text-white rounded-2xl font-medium text-sm transition-all hover:scale-105"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-xs text-slate-400 mb-8">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              +94 716 113 385
            </span>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Borelasgamuwa, Sri Lanka
            </span>
          </div>

          <div className="gradient-divider mb-8" />

          <p className="text-slate-400 dark:text-slate-700 text-xs">
            © 2025 Nimantha Bandara · References available upon request
          </p>
        </div>
      </footer>
    </div>
  )
}
