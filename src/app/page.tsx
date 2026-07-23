'use client';

import React, { useState, useEffect } from 'react';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail,
  FiArrowUpRight,
  FiTerminal,
  FiCheckCircle,
  FiBookOpen
} from 'react-icons/fi';

// =================================================================
// DATA SYNCHRONIZED WITH RESUME-2.PDF
// =================================================================

const experienceData = [
  {
    role: "Research Intern (Concurrent, Remote)",
    organization: "RV University (RVU)",
    location: "Bengaluru, Karnataka",
    period: "Jun. 2026 – Jul. 2026",
    highlights: [
      "Built a local RAG pipeline (Qdrant vector DB, all-MiniLM-L6-v2 embeddings, Ollama/Mistral-7B) that auto-generates secure threat reports end-to-end.",
      "Designed a zero-cloud security log parser and a Graph Causal Engine in NetworkX, cutting OS telemetry log volume by >80% while preserving causal structure for downstream analysis."
    ],
    techStack: ["Python", "NetworkX", "Qdrant", "Ollama", "Mistral-7B", "all-MiniLM"]
  },
  {
    role: "Research Intern",
    organization: "Maulana Azad National Institute of Technology (MANIT)",
    location: "Bhopal, MP",
    period: "Jun. 2026",
    highlights: [
      "Designed a ~118K-parameter pipeline decoupling artifact denoising from cross-modal fusion, achieving 31 dB PSNR, 0.99 SSIM, and real-time 238 FPS inference.",
      "Implemented an Inverse-Attention Gating Mask to bypass degraded pixels; validated against SOTA baselines on the MSRS dataset."
    ],
    techStack: ["PyTorch", "Computer Vision", "Multispectral Fusion", "CUDA", "Python"]
  }
];

const publicationsData = [
  {
    title: "Decoupled Dual-Phase Network for Multispectral Image Fusion under Sensor Degradation",
    authors: "Prashant Chandra, R. K. Thakur, N. Gupta, T. F. Khan",
    venue: "Published in NPDSM 2026 (MANIT Bhopal), Springer Lecture Notes in Mechanical Engineering (LNME)",
    status: "Published",
  },
  {
    title: "Robustness-Fairness Gap in Facial Recognition Architectures Under Stressors",
    authors: "Prashant Chandra, D. Gaur, A. Khan",
    venue: "Under review, DELCON 2026 (52.5K matching trials across demographic & geometric resilience boundaries)",
    status: "Under Review",
  }
];

const projectData = [
  {
    title: "Autonomous Agent Governance Harness",
    period: "Mar. 2026",
    description: [
      "Built a runtime to intercept and supervise autonomous LLM tool-use in real time, feeding policy-violation context back to the model for closed-loop correction.",
      "Implemented a first-principles shell-command tokenizer (shlex-based) to defeat injection/bypass attempts; validated with a full pytest suite covering path-traversal and blocked-tool cases."
    ],
    techStack: ["Python", "Google GenAI SDK (Gemini 2.5)", "NetworkX", "pytest", "shlex"],
    github: "https://github.com/Chandra-Prashant"
  },
  {
    title: "MediSight: Explainable AI Medical Diagnostic Platform",
    period: "Jun. 2025",
    description: [
      "Built a diagnostics platform using DenseNet-121 (trained on ChestX-ray14) with Grad-CAM heatmaps for clinical explainability."
    ],
    techStack: ["Python", "PyTorch", "DenseNet-121", "Grad-CAM", "XAI"],
    github: "https://github.com/Chandra-Prashant/medisight-xai"
  },
  {
    title: "XAI Microservices Fraud Detection System",
    period: "Mar. 2025",
    description: [
      "Engineered a real-time fraud detection microservices pipeline with SHAP-based feature-level attributions for model explainability."
    ],
    techStack: ["FastAPI", "SHAP", "Python", "Microservices", "Docker"],
    github: "https://github.com/Chandra-Prashant"
  }
];

const skillsData = [
  { category: "Languages", items: ["Python", "C", "C++", "SQL"] },
  { category: "AI/LLM & ML", items: ["Agentic AI Systems", "Tool-Use Governance", "RAG Pipelines", "PyTorch", "NetworkX", "OpenCV", "CUDA", "SHAP"] },
  { category: "Core Tooling", items: ["Git / GitHub", "Docker", "FastAPI", "LaTeX", "Qdrant", "Ollama"] },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'publications', 'projects', 'skills'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      
      {/* SUBTLE GLOW ACCENTS IN BACKGROUND */}
      <div className="pointer-events-none fixed -top-40 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="pointer-events-none fixed top-1/2 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="lg:flex lg:justify-between lg:gap-16">
        
        {/* ========================================================= */}
        {/* LEFT COLUMN: STICKY BRANDING & DYNAMIC NAV                */}
        {/* ========================================================= */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-800/50 text-teal-300 text-xs font-mono mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              Open to CS MS & AI Research Roles
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
              Prashant Chandra
            </h1>
            <h2 className="mt-3 text-lg font-semibold tracking-tight text-teal-400 sm:text-xl">
              AI Research & Systems Engineer
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-slate-400 text-sm">
              Computer Engineering undergraduate at AMU building applied LLM systems (RAG, agent supervision/governance) and deep learning research pipelines.
            </p>

            {/* DYNAMIC NAV LINKS WITH INDICATORS */}
            <nav className="mt-12 hidden lg:block">
              <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-slate-500">
                {[
                  { id: 'about', label: '01. About & Education' },
                  { id: 'experience', label: '02. Research Experience' },
                  { id: 'publications', label: '03. Publications' },
                  { id: 'projects', label: '04. Flagship Projects' },
                  { id: 'skills', label: '05. Technical Stack' },
                ].map((item) => (
                  <li key={item.id}>
                    <a 
                      href={`#${item.id}`} 
                      className={`group flex items-center gap-3 py-1 transition-all ${
                        activeSection === item.id ? 'text-teal-300 font-bold' : 'hover:text-slate-200'
                      }`}
                    >
                      <span className={`h-px transition-all duration-300 ${
                        activeSection === item.id ? 'w-8 bg-teal-400' : 'w-4 bg-slate-700 group-hover:w-8 group-hover:bg-slate-400'
                      }`}></span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* SOCIAL LINKS & QUICK RESUME BUTTON */}
          <div className="mt-12 lg:mt-0 flex items-center gap-6 text-slate-400">
            <a href="https://github.com/Chandra-Prashant" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors p-2 -ml-2" aria-label="GitHub">
              <FiGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/prashant-chandra-" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors p-2" aria-label="LinkedIn">
              <FiLinkedin size={22} />
            </a>
            <a href="mailto:prashant.chandra.aligarh@gmail.com" className="hover:text-teal-400 transition-colors p-2" aria-label="Email">
              <FiMail size={22} />
            </a>
          </div>
        </header>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: ELEGANT SCROLLABLE CONTENT                  */}
        {/* ========================================================= */}
        <main className="lg:w-[55%] lg:py-24 pt-12">
          
          {/* ABOUT & EDUCATION SECTION */}
          <section id="about" className="mb-24 scroll-mt-16">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6 lg:hidden">01. About & Education</h3>
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm">
              <p>
                My work focuses on bridging theoretical deep learning with robust, production-grade systems. I prioritize a first-principles approach to system architecture—whether that involves engineering real-time vision pipelines, running local LLM inference engines, or designing safety harnesses for agentic workflows.
              </p>
            </div>

            {/* EDUCATION CARDS WITH HOVER GLOW */}
            <div className="mt-8 grid grid-cols-1 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-teal-500/40 hover:bg-slate-900/60 transition-all duration-300 shadow-lg shadow-black/20">
                <div className="flex justify-between text-slate-200 font-bold">
                  <span className="text-slate-100">Aligarh Muslim University</span>
                  <span className="text-teal-400 font-semibold">CGPA: 8.21 / 10</span>
                </div>
                <div className="text-slate-400 mt-1">B.Tech. in Computer Engineering (Aug. 2023 – Present)</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-teal-500/40 hover:bg-slate-900/60 transition-all duration-300 shadow-lg shadow-black/20">
                <div className="flex justify-between text-slate-200 font-bold">
                  <span className="text-slate-100">Aligarh Muslim University</span>
                  <span className="text-teal-400 font-semibold">CGPA: 9.66 / 10 (Rank 1)</span>
                </div>
                <div className="text-slate-400 mt-1">Diploma in Computer Engineering (Aug. 2020 – Jun. 2023)</div>
              </div>
            </div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section id="experience" className="mb-24 scroll-mt-16">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-8">02. Research Experience</h3>
            <div className="space-y-10">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="group relative p-6 rounded-2xl bg-slate-900/30 border border-slate-800/60 hover:border-teal-500/30 hover:bg-slate-900/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                    <h4 className="text-base font-semibold text-slate-200 group-hover:text-teal-300 transition-colors">
                      {exp.role} <span className="text-teal-400">@ {exp.organization}</span>
                    </h4>
                    <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-500 mb-4">{exp.location}</div>
                  <ul className="space-y-2.5 mb-5 text-xs text-slate-300 leading-relaxed">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="text-teal-400 font-mono">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map(t => (
                      <span key={t} className="text-[11px] font-mono px-3 py-1 rounded-full bg-teal-950/60 text-teal-300 border border-teal-800/50 shadow-sm">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PUBLICATIONS SECTION */}
          <section id="publications" className="mb-24 scroll-mt-16">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-8">03. Publications & Manuscripts</h3>
            <div className="space-y-6">
              {publicationsData.map((pub, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/80 hover:border-teal-500/30 hover:bg-slate-900/50 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-sm font-semibold text-slate-200 leading-snug group-hover:text-teal-300">
                      {pub.title}
                    </h4>
                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-medium whitespace-nowrap ${pub.status === 'Published' ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60' : 'bg-amber-950/80 text-amber-300 border border-amber-800/60'}`}>
                      {pub.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2.5 font-mono">{pub.authors}</p>
                  <p className="text-xs text-slate-500 mt-1 italic">{pub.venue}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="mb-24 scroll-mt-16">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-8">04. Flagship Projects</h3>
            <div className="space-y-8">
              {projectData.map((project, idx) => (
                <div key={idx} className="group p-6 rounded-2xl bg-slate-900/30 border border-slate-800/80 hover:border-teal-500/40 hover:bg-slate-900/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-base font-semibold text-slate-200 group-hover:text-teal-300 transition-colors flex items-center gap-2">
                      {project.title}
                    </h4>
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors p-1" aria-label="GitHub Repository">
                      <FiGithub size={18} />
                    </a>
                  </div>
                  <ul className="space-y-2 mb-4 text-xs text-slate-300 leading-relaxed">
                    {project.description.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-teal-400 font-mono">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(t => (
                      <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/50">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS SECTION */}
          <section id="skills" className="mb-24 scroll-mt-16">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-8">05. Technical Stack</h3>
            <div className="grid grid-cols-1 gap-6">
              {skillsData.map((group, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60">
                  <h5 className="text-xs font-mono text-teal-400 mb-3 font-semibold">{group.category}</h5>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(s => (
                      <span key={s} className="text-xs font-mono text-slate-300 bg-slate-800/50 border border-slate-700/60 px-3 py-1 rounded-lg">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <footer className="pt-8 text-xs font-mono text-slate-600 border-t border-slate-900 flex justify-between items-center">
            <span>PRASHANT CHANDRA // 2026</span>
            <span>BUILT WITH NEXT.JS & TAILWIND</span>
          </footer>

        </main>
      </div>
    </div>
  );
}