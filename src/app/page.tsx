'use client';

import React, { useEffect, useRef } from 'react';
import { 
  FiGithub, 
  FiExternalLink, 
  FiLinkedin, 
  FiCode,
  FiTarget,
  FiUser,
  FiAward,
  FiBookOpen,
  FiHeart,
  FiFileText,
  FiCpu
} from 'react-icons/fi';

// =================================================================
// 1. DATA SECTION: For MS Admissions
// =================================================================

const projectData = [
  {
    title: "MediSight: Explainable AI (XAI) for Diagnostics",
    isFlagship: true, 
    description: [
      "Research: Implemented Grad-CAM on ResNet-50 architectures to visualize CNN decision-making on chest X-Ray datasets.",
      "Engineering: Developed a high-performance inference bridge using FastAPI and Docker to serve PyTorch models.",
      "Mathematics: Optimized model convergence using custom cross-entropy loss variants for unbalanced medical data."
    ],
    techStack: ["PyTorch", "FastAPI", "Grad-CAM", "Docker", "Next.js", "Python"],
    links: {
      live: null,
      github: "https://github.com/Chandra-Prashant/medisight-xai" 
    }
  },
  {
    title: "FitTrack+ AI: Geometric Pose Estimation",
    isFlagship: false,
    description: [
      "Computer Vision: Engineered a real-time tracking system using MoveNet and Euclidean vector geometry for rep-count precision.",
      "Architecture: Implemented a decoupled inference microservice to handle high-latency CV tasks separate from the UI.",
      "Data: Applied KNN-based classification for personalized exercise recommendation engines."
    ],
    techStack: ["MoveNet", "OpenCV", "FastAPI", "TensorFlow.js", "Vector Algebra"],
    links: {
      live: "https://fittrack-monorepo.vercel.app", 
      github: "https://github.com/Chandra-Prashant/fittrack-monorepo"
    }
  },
  {
    title: "Face Recognition & Identity Systems",
    isFlagship: false,
    description: [
      "Optimization: Refined LBPH (Local Binary Patterns Histograms) algorithms to improve recognition accuracy in low-light environments.",
      "Systems: Built a robust SQLite-backed identity logger with real-time detection via OpenCV.",
      "Deployment: Designed a lightweight Tkinter interface for local system management and rapid testing."
    ],
    techStack: ["Python", "OpenCV", "NumPy", "SQLite", "Computer Vision"],
    links: {
      live: null, 
      github: "https://github.com/Chandra-Prashant/FaceAttendance"
    }
  }
];

const skillsData = [
  { category: "Artificial Intelligence", items: ["PyTorch", "OpenCV", "Grad-CAM", "SHAP", "Scikit-learn", "TensorFlow"] },
  { category: "Core Engineering", items: ["Python (Expert)", "C++", "Data Structures", "SQL", "Linux/Bash"] },
  { category: "System Architecture", items: ["FastAPI", "Docker", "Microservices", "REST APIs", "Next.js"] },
  { category: "Scientific Tools", items: ["NumPy", "Pandas", "Matplotlib", "LaTeX", "Git"] },
];

const certificationsData = [
  {
    title: "AI & Machine Learning Foundations",
    issuer: "upGrad / Industry Partner",
    date: "2024",
    link: "https://upgrad.certificate.givemycertificate.com/c/80dd91f4-b28f-46bc-a641-db02d74e32b2" 
  },
  {
    title: "System Design & Full Stack Integration",
    issuer: "Simplilearn",
    date: "2025",
    link: "https://simpli-web.app.link/e/V0c2gCUVaYb" 
  }
];

// =================================================================
// 2. COMPONENT: Matrix Background (Scientific Aesthetic)
// =================================================================
const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const alphabet = '01'; // Binary focus for AI aesthetic
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) drops[x] = 1;
    const draw = () => {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = fontSize + 'px monospace';
      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillStyle = '#0ea5e9'; 
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };
    const interval = setInterval(draw, 50);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => { clearInterval(interval); window.removeEventListener('resize', handleResize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" />;
};

// =================================================================
// 3. MAIN PAGE COMPONENT
// =================================================================
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 md:px-24 relative z-0">
      <div className="w-full max-w-5xl">
        
        {/* Navigation */}
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md sm:w-auto">
          <div className="flex items-center justify-center gap-6 px-6 py-3 bg-gray-900/80 backdrop-blur-lg rounded-full border border-gray-700/50 shadow-lg shadow-cyan-500/10">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors"><FiUser size={18} /></a>
            <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors"><FiCode size={18} /></a>
            <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition-colors"><FiTarget size={18} /></a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors"><FiHeart size={18} /></a>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-start relative pt-16">
          <MatrixBackground />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 text-sm font-mono mb-6">
               <FiAward /> <span>AMU Diploma Rank 1 | District Topper (97%)</span>
            </div>
            <p className="text-cyan-400 font-mono text-lg mb-2">Researcher & Engineer</p>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">Prashant Chandra.</h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-400 leading-tight">
              Developing the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">Explainable AI.</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg mb-10">
              Third-year Computer Engineering student (2027) at <b>Aligarh Muslim University</b>. 
              Specializing in computer vision and deep learning systems for high-stakes diagnostics.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="px-8 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-500 transition-all">View Research</a>
              <a href="https://github.com/Chandra-Prashant" target="_blank" rel="noreferrer" className="px-8 py-3 border border-gray-700 text-white rounded-md hover:border-cyan-400 transition-all">GitHub</a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32 pt-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-cyan-400 font-mono">01.</span> Featured Projects
            <span className="h-px bg-gray-800 flex-grow max-w-xs"></span>
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {projectData.map((project, idx) => (
              <div key={idx} className={`p-8 rounded-xl border ${project.isFlagship ? 'border-cyan-500/40 bg-gray-900/40' : 'border-gray-800 bg-transparent'}`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <div className="flex gap-4 text-gray-400">
                    <a href={project.links.github} className="hover:text-cyan-400"><FiGithub size={20}/></a>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {project.description.map((point, i) => (
                    <li key={i} className="text-gray-400 flex gap-2 text-md">
                      <span className="text-cyan-500">▹</span> {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(t => <span key={t} className="text-xs font-mono px-3 py-1 bg-cyan-900/20 text-cyan-300 rounded-full">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32 pt-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-cyan-400 font-mono">02.</span> Technical Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((group, i) => (
              <div key={i} className="p-6 rounded-lg border border-gray-800 bg-gray-900/20">
                <h4 className="text-cyan-400 font-bold mb-4 flex items-center gap-2"><FiCpu /> {group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(s => <span key={s} className="text-sm text-gray-400 border border-gray-800 px-3 py-1 rounded">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-32 pt-20 scroll-mt-20 text-gray-400 text-lg">
          <h2 className="text-3xl font-bold mb-12 text-white flex items-center gap-4">
            <span className="text-cyan-400 font-mono">03.</span> About
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p>
                My engineering philosophy centers on <b>transparency</b>. In an era of Black Box AI, I build systems that don&apos;t just predict, but explain their reasoning using tools like Grad-CAM.
              </p>
              <p>
                As a student at <b>Aligarh Muslim University</b>, I have consistently balanced high-level academic performance with intense project-based learning. My goal is to apply this rigour to an <b>MS in Computer Science</b>.
              </p>
            </div>
            <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-800">
               <h4 className="text-white font-bold mb-4">Academic Milestones</h4>
               <ul className="space-y-4 text-sm">
                 <li><b className="text-cyan-300">B.Tech CSE:</b> 8 CGPA (Ongoing)</li>
                 <li><b className="text-cyan-300">Diploma Engg:</b> College Rank 1 (Gold Medalist Intent)</li>
                 <li><b className="text-cyan-300">Class 10th:</b> 97% (District Topper)</li>
               </ul>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center text-gray-600 text-xs border-t border-gray-900">
          BUILD V2.0 // PRASHANT CHANDRA // 2026 REFRESH
        </footer>
      </div>
    </main>
  );
}