'use client';

import React, { useEffect, useRef } from 'react';
import { 
  FiGithub, 
  FiExternalLink, 
  FiLinkedin, 
  FiMail,
  FiCode,
  FiTarget,
  FiUser,
  FiAward,
  FiBookOpen,
  FiHeart,
  FiFileText
} from 'react-icons/fi';

// =================================================================
// 1. DATA SECTION (Optimized for Research & Corporate)
// =================================================================

const projectData = [
  {
    title: "MediSight: XAI Diagnostic Dashboard",
    isFlagship: true, // Highlights this as your "Holy Grail" project
    description: [
      "Research: Implemented Grad-CAM on a ResNet-50 CNN to visualize decision boundaries on Chest X-Rays (Explainable AI).",
      "Engineering: Architected a hybrid microservice system (Next.js + Python/FastAPI) handling binary image payloads.",
      "Impact: Bridges the gap between 'Black Box' Deep Learning and clinical trust."
    ],
    techStack: ["Next.js", "Python", "FastAPI", "PyTorch", "Grad-CAM", "Docker", "MongoDB"],
    links: {
      live: null, // Add Vercel link here once deployed
      github: "https://github.com/Chandra-Prashant/medisight-xai" 
    }
  },
  {
    title: "FitTrack+ AI: Geometric Pose Estimation",
    isFlagship: false,
    description: [
      "Computer Vision: Achieved 92% rep-count accuracy using MoveNet (Lightning) and Euclidean geometry vector analysis.",
      "System Design: Built a monorepo architecture deploying distinct frontend (Vercel) and inference (Render) services.",
      "Features: Real-time nutrition tracking via object detection and KNN-based recommendation engine."
    ],
    techStack: ["Next.js", "TypeScript", "FastAPI", "MoveNet", "Vector Algebra", "Vercel"],
    links: {
      live: "https://fittrack-monorepo.vercel.app", 
      github: "https://github.com/Chandra-Prashant/fittrack-monorepo"
    }
  },
  {
    title: "XAI Fraud Detection Platform",
    isFlagship: false,
    description: [
      "Algorithm: Utilized SHAP (Shapley Additive Explanations) to quantify feature importance in Random Forest models.",
      "Architecture: Dockerized model serving with strict Pydantic data validation contracts between services.",
      "Visualization: Interactive financial dashboard for transparent risk scoring."
    ],
    techStack: ["SHAP", "Scikit-learn", "Docker", "FastAPI", "Next.js", "Pandas"],
    links: {
      live: "https://xai-fraud-detection.vercel.app", 
      github: "https://github.com/Chandra-Prashant/xai-fraud-detection"
    }
  },
  {
    title: "Face Recognition Attendance System",
    isFlagship: false,
    description: [
      "System Design: Developed a contactless attendance logger using Python and OpenCV with real-time face detection.",
      "Data Management: Implemented a secure SQLite database with full CRUD capabilities for managing student records.",
      "Optimization: Optimized LBPH (Local Binary Patterns Histograms) algorithm to handle recognition under varying lighting conditions."
    ],
    techStack: ["Python", "OpenCV", "SQLite", "Tkinter", "Computer Vision"],
    links: {
      live: null, 
      github: "https://github.com/Chandra-Prashant/FaceAttendance"
    }
  }
];

const skillsData = [
  { category: "Languages", items: ["Python", "JavaScript (ES6+)", "C++", "SQL"] },
  { category: "Frontend", items: ["Next.js", "React.js", "Tailwind CSS", "HTML5 Canvas"] },
  { category: "Backend", items: ["Node.js", "Express.js", "FastAPI", "Microservices"] },
  { category: "Databases", items: ["MongoDB", "MySQL", "SQLite"] },
  { category: "AI / ML", items: ["OpenCV", "PyTorch", "Grad-CAM", "SHAP", "Scikit-learn"] },
  { category: "Tools / DevOps", items: ["Git", "Docker", "Vercel", "Render", "Postman"] },
];

const certificationsData = [
  {
    title: "Full Stack Web Development (MERN)",
    issuer: "Simplilearn",
    date: "2024",
    link: "https://simpli-web.app.link/e/V0c2gCUVaYb" 
  },
  {
    title: "AI in the Real World",
    issuer: "upGrad",
    date: "2024",
    link: "https://upgrad.certificate.givemycertificate.com/c/80dd91f4-b28f-46bc-a641-db02d74e32b2" 
  }
];

// =================================================================
// 2. COMPONENT: Navbar
// =================================================================
const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md sm:w-auto">
      <div className="flex items-center justify-between sm:justify-center gap-3 sm:gap-6 px-5 py-3 bg-gray-900/80 backdrop-blur-lg rounded-full border border-gray-700/50 shadow-lg shadow-cyan-500/10">
        <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors" title="Home">
          <FiUser size={20} />
        </a>
        <span className="text-gray-700">|</span>
        <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors" title="Projects">
          <FiCode size={20} />
        </a>
        <span className="text-gray-700">|</span>
        <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition-colors" title="Skills">
          <FiTarget size={20} />
        </a>
        <span className="text-gray-700">|</span>
        <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors" title="About">
          <FiHeart size={20} />
        </a>
        <span className="text-gray-700">|</span>
        <a href="#certs" className="text-gray-300 hover:text-cyan-400 transition-colors" title="Certifications">
          <FiFileText size={20} />
        </a>
      </div>
    </nav>
  );
};

// =================================================================
// 3. COMPONENT: Matrix Background (Visual Polish)
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

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const nums = '01';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.05)'; // Matches bg-gray-950
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        const isCyan = Math.random() > 0.95;
        ctx.fillStyle = isCyan ? '#22d3ee' : '#0ea5e9'; 
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
    />
  );
};

// =================================================================
// 4. COMPONENT: ProjectCard (Updated with Flagship Logic)
// =================================================================
type ProjectCardProps = {
  project: typeof projectData[0];
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={`relative bg-gray-900/60 backdrop-blur-md border rounded-lg shadow-xl p-6 transition-all duration-300 hover:scale-[1.02] group
      ${project.isFlagship ? 'border-cyan-500/60 shadow-cyan-500/20' : 'border-gray-800/60 hover:border-cyan-500/50'}`}>
       
       {/* Flagship Ribbon for MediSight */}
       {project.isFlagship && (
         <div className="absolute -top-3 -right-3 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-cyan-900/50 z-10">
           Flagship Research
         </div>
       )}

       <div className="flex justify-between items-center mb-4">
        <h3 className={`text-xl font-semibold transition-colors ${project.isFlagship ? 'text-white' : 'text-cyan-300 group-hover:text-cyan-200'}`}>
          {project.title}
        </h3>
        <div className="flex gap-4">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-cyan-300 transition-colors"><FiGithub size={22} /></a>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="text-gray-400 hover:text-cyan-300 transition-colors"><FiExternalLink size={22} /></a>
          )}
        </div>
      </div>
      <div className="mb-5 space-y-3">
        {project.description.map((point, index) => (
          <div key={index} className="flex gap-3 text-sm md:text-base">
            <span className="text-cyan-500 mt-1">▹</span>
            <p className="text-gray-300 leading-relaxed">{point}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="bg-cyan-900/20 text-cyan-100 text-xs font-medium px-3 py-1 rounded-full border border-cyan-800/30">{tech}</span>
        ))}
      </div>
    </div>
  );
};

// =================================================================
// 5. COMPONENT: Hero Section (With Topper Badge)
// =================================================================
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start relative overflow-hidden pt-16">
      
      <MatrixBackground />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]">
        <div className="w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-cyan-900/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-4xl">
        {/* Topper Badge: The "IIT Signal" */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 text-sm font-mono mb-6 backdrop-blur-sm">
           <FiAward /> <span>District Topper (97%) & College Rank 1</span>
        </div>

        <p className="text-cyan-400 font-mono text-lg mb-4 tracking-wide">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Prashant Chandra.
        </h1>
        
        {/* Headline: The "Hybrid" Pitch */}
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-300">
          Full Stack Engineer & <br className="md:hidden"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
            AI Researcher.
          </span>
        </h2>

        <p className="text-gray-300 max-w-xl text-lg leading-relaxed mb-10">
          I bridge the gap between <b>Deep Learning research</b> and <b>Production SaaS</b>. 
          Currently building <span className="text-cyan-300 font-medium">MediSight</span> to bring Explainable AI (Grad-CAM) to medical diagnostics.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a href="https://github.com/Chandra-Prashant" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
            <FiGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/prashant-chandra-" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
            <FiLinkedin /> LinkedIn
          </a>
          <a href="#projects" className="flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg shadow-lg shadow-cyan-500/20 hover:bg-cyan-500 hover:shadow-cyan-500/50 transition-all">
            <FiCode /> View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

// =================================================================
// 6. COMPONENT: About Me Section (Updated with Education)
// =================================================================
const AboutMeSection = () => {
  return (
    <section id="about" className="mb-32 pt-20 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
        <span className="text-cyan-400 text-2xl font-mono">03.</span> About Me
        <span className="h-px bg-gray-800 flex-grow max-w-xs"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-3 text-gray-300 text-lg leading-relaxed space-y-4">
          <p>
            Hello! I&apos;m Prashant, a developer driven by a passion for building hands-on projects and academic excellence. My journey is about combining <span className="text-cyan-300">full-stack development</span> with <span className="text-cyan-300">Artificial Intelligence</span>.
          </p>
          <p>
            As a fitness enthusiast, I developed <a href="#projects" className="text-cyan-300 underline hover:text-cyan-200">FitTrack+ AI</a> to solve real-world tracking problems. I thrive on solving complex problems—whether it&apos;s optimizing an API response time or training a CNN model.
          </p>
          <p>
            Outside of coding, I practice the mindfulness and discipline of ISKCON, values I find essential in maintaining focus during complex engineering challenges.
          </p>
        </div>
        
        {/* Education & Stats Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 flex gap-4 items-start hover:border-cyan-500/30 transition-colors">
            <FiBookOpen className="text-cyan-400 w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-white">B.Tech, Computer Engineering</h4>
              <p className="text-sm text-gray-400">AMU (2023-2027) | CGPA: 7.89</p>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 flex gap-4 items-start hover:border-cyan-500/30 transition-colors">
            <FiAward className="text-cyan-400 w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-white">Diploma in Engg.</h4>
              <p className="text-sm text-gray-400">AMU (2020-2023)</p>
              <p className="text-sm text-cyan-300 font-medium mt-1">🥇 College Topper (Rank 1)</p>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 flex gap-4 items-start hover:border-cyan-500/30 transition-colors">
            <FiAward className="text-cyan-400 w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-white">Senior Secondary (10th)</h4>
              <p className="text-sm text-gray-400">CBSE (2019-2020)</p>
              <p className="text-sm text-cyan-300 font-medium mt-1">🥇 District Topper (97%)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// =================================================================
// 7. COMPONENT: Certifications Section
// =================================================================
const CertificationsSection = () => {
  return (
    <section id="certs" className="mb-32 pt-20 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
        <span className="text-cyan-400 text-2xl font-mono">04.</span> Certifications
        <span className="h-px bg-gray-800 flex-grow max-w-xs"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationsData.map((cert, index) => (
          <a 
            key={index}
            href={cert.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gray-900/50 border border-gray-800 rounded-lg p-5 
                       hover:border-cyan-500/30 hover:bg-gray-800/50 transition-all group"
          >
            <FiFileText className="text-cyan-400 w-8 h-8 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                {cert.title}
              </h4>
              <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                <span>{cert.issuer}</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span>{cert.date}</span>
              </div>
            </div>
            <FiExternalLink className="text-gray-500 ml-auto group-hover:text-cyan-300 transition-colors" />
          </a>
        ))}
      </div>
    </section>
  );
};

// =================================================================
// 8. MAIN PAGE EXPORT
// =================================================================
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 md:px-24 relative z-0">
      <div className="w-full max-w-5xl">
        
        <Navbar />
        
        <HeroSection />

        <section id="projects" className="mb-32 pt-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-cyan-400 text-2xl font-mono">01.</span> Projects
            <span className="h-px bg-gray-800 flex-grow max-w-xs"></span>
          </h2>
          <div className="grid grid-cols-1 gap-10">
            {projectData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <section id="skills" className="mb-32 pt-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-cyan-400 text-2xl font-mono">02.</span> Technical Skills
            <span className="h-px bg-gray-800 flex-grow max-w-xs"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((skillGroup, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-cyan-500/30 transition-colors">
                <h3 className="text-lg font-semibold text-cyan-300 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800/80 text-cyan-100 rounded-full text-sm border border-gray-700 hover:border-cyan-500/50 transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <AboutMeSection />

        <CertificationsSection />

        <footer className="text-center text-gray-600 pb-8 text-sm">
          <p>Designed & Built by Prashant Chandra</p>
        </footer>
      </div>
    </main>
  );
}