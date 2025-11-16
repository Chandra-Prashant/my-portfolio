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
// 1. DATA
// =================================================================

const projectData = [
  {
    title: "FitTrack+ AI: AI Powered Fitness and Nutrition Platform",
    description: [
      "Built a full-stack AI fitness platform integrating ML and computer vision for real-time workout and nutrition tracking.",
      "Achieved 92% accuracy in rep-count detection using MoveNet and custom preprocessing.",
      "Added AI-based food recognition and a KNN-driven Smart Coach recommendation engine."
    ],
    techStack: ["Next.js", "Node.js", "FastAPI", "MongoDB", "PyTorch", "Vercel", "Render"],
    links: {
      live: "https://example.com", 
      github: "https://github.com/Chandra-Prashant/FitTrack-AI"
    }
  },
  {
    title: "Face Recognition Attendance System",
    description: [
      "Designed a computer-vision-based attendance system using Python, OpenCV, and LBPH embeddings.",
      "Implemented CRUD student management and secure local database logging.",
      "Optimized recognition accuracy under varying lighting and angles."
    ],
    techStack: ["Python", "OpenCV", "LBPH", "SQLite"],
    links: {
      github: "https://github.com/Chandra-Prashant/Face-Recognition-Attendance"
    }
  }
];

const skillsData = [
  { category: "Languages", items: ["Python", "JavaScript (ES6+)", "C++", "SQL"] },
  { category: "Frontend", items: ["Next.js", "React.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "FastAPI"] },
  { category: "Databases", items: ["MongoDB", "MySQL"] },
  { category: "AI / ML", items: ["OpenCV", "scikit-learn", "PyTorch", "TensorFlow", "Hugging Face"] },
  { category: "Tools / DevOps", items: ["Git", "GitHub", "Vercel", "Render", "VS Code"] },
  { category: "Concepts", items: ["RESTful API", "OOP", "DSA", "Agile"] },
];

const certificationsData = [
  {
    title: "Full Stack Web Development (MERN)",
    issuer: "Simplilearn",
    link: "https://simpli-web.app.link/e/V0c2gCUVaYb" 
  },
  {
    title: "AI in the Real World",
    issuer: "upGrad",
    link: "https://upgrad.certificate.givemycertificate.com/c/80dd91f4-b28f-46bc-a641-db02d74e32b2" 
  }
];

// =================================================================
// 2. COMPONENT: Navbar
// =================================================================
const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 bg-gray-900/80 backdrop-blur-lg rounded-full border border-gray-700/50 shadow-lg shadow-cyan-500/10">
        <a href="#home" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors" title="Home">
          <FiUser size={18} /> <span className="hidden sm:inline">Home</span>
        </a>
        <span className="text-gray-600">|</span>
        <a href="#projects" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors" title="Projects">
          <FiCode size={18} /> <span className="hidden sm:inline">Projects</span>
        </a>
        <span className="text-gray-600">|</span>
        <a href="#skills" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors" title="Skills">
          <FiTarget size={18} /> <span className="hidden sm:inline">Skills</span>
        </a>
        <span className="text-gray-600">|</span>
        <a href="#about" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors" title="About">
          <FiHeart size={18} /> <span className="hidden sm:inline">About</span>
        </a>
        <span className="text-gray-600">|</span>
        <a href="#certs" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors" title="Certifications">
          <FiFileText size={18} /> <span className="hidden sm:inline">Certs</span>
        </a>
      </div>
    </nav>
  );
};

// =================================================================
// 3. COMPONENT: Matrix Background
// =================================================================
const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix characters (Mix of Katakana and Latin)
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const nums = '01';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    // Array of drops - one per column
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      // Black BG for the canvas
      // Translucent BG to show trail
      ctx.fillStyle = 'rgba(3, 7, 18, 0.05)'; // Matches bg-gray-950 very closely
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0'; // Green text
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        // Randomly vary color slightly for depth (Cyan to Green)
        const isCyan = Math.random() > 0.95;
        ctx.fillStyle = isCyan ? '#22d3ee' : '#0ea5e9'; // Cyan-400 to Sky-500 range
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    // Handle resize
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
// 4. COMPONENT: ProjectCard
// =================================================================
type ProjectCardProps = {
  project: typeof projectData[0];
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-900/60 backdrop-blur-md border border-gray-800/60 rounded-lg shadow-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-500/50 hover:shadow-cyan-500/10 group">
       <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors">
          {project.title}
        </h3>
        <div className="flex gap-4">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="text-gray-400 hover:text-cyan-300 transition-colors"><FiGithub size={22} /></a>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="text-gray-400 hover:text-cyan-300 transition-colors"><FiExternalLink size={22} /></a>
          )}
        </div>
      </div>
      <div className="mb-5 space-y-2">
        {project.description.map((point, index) => (
          <p key={index} className="text-gray-300 leading-relaxed text-sm md:text-base">{point}</p>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="bg-cyan-900/30 text-cyan-200 text-xs font-medium px-3 py-1 rounded-full border border-cyan-800/50">{tech}</span>
        ))}
      </div>
    </div>
  );
};

// =================================================================
// 5. COMPONENT: Hero Section
// =================================================================
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start relative overflow-hidden pt-16">
      
      {/* 1. Matrix Background */}
      <MatrixBackground />
      
      {/* 2. Gradient Blob (Behind Matrix) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]">
        <div className="w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-cyan-900/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* 3. Content */}
      <div className="relative z-10 max-w-4xl">
        <p className="text-cyan-400 font-mono text-lg mb-4 tracking-wide">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Prashant Chandra.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
          I build AI-powered web apps.
        </h2>
        <p className="text-gray-300 max-w-xl text-lg leading-relaxed mb-10">
          I&apos;m a Computer Engineering student specializing in full-stack development.
          I unite <span className="text-cyan-300 font-medium">Next.js</span> and <span className="text-cyan-300 font-medium">Machine Learning</span> to create intelligent, scalable applications like 
          <span className="italic text-gray-100"> FitTrack+ AI</span>.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <a href="https://github.com/Chandra-Prashant" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
            <FiGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/prashant-chandra-" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
            <FiLinkedin /> LinkedIn
          </a>
          <a href="mailto:prashant.chandra.aligarh@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg shadow-lg shadow-cyan-500/20 hover:bg-cyan-500 hover:shadow-cyan-500/50 transition-all">
            <FiMail /> Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

// =================================================================
// 6. COMPONENT: About Me Section
// =================================================================
const AboutMeSection = () => {
  return (
    <section id="about" className="mb-32 pt-20">
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
            As a fitness enthusiast, I&apos;m interested in AI-driven health solutions, like my <a href="#projects" className="text-cyan-300 underline hover:text-cyan-200">FitTrack+ AI</a> project. I thrive on solving complex problems and turning ideas into tangible, intelligent applications.
          </p>
          <p>
            Outside of coding, I practice mindfulness and discipline of ISKCON, values I find essential in programming and life.
          </p>
        </div>
        <div className="md:col-span-2 space-y-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 flex gap-4 items-center hover:border-cyan-500/30 transition-colors">
            <FiBookOpen className="text-cyan-400 w-10 h-10 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-white">B.Tech, Computer Engineering</h4>
              <p className="text-sm text-gray-400">Aligarh Muslim University (2023-2027)</p>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 flex gap-4 items-center hover:border-cyan-500/30 transition-colors">
            <FiAward className="text-cyan-400 w-10 h-10 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-white">Diploma, Computer Engineering</h4>
              <p className="text-sm text-gray-400">Aligarh Muslim University (2020-2023)</p>
              <p className="text-sm text-cyan-300 font-medium">College Topper (9.66 CGPA)</p>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 flex gap-4 items-center hover:border-cyan-500/30 transition-colors">
            <FiAward className="text-cyan-400 w-10 h-10 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-white">CBSE (10th)</h4>
              <p className="text-sm text-gray-400">(2019-2020)</p>
              <p className="text-sm text-cyan-300 font-medium">District Topper (97%)</p>
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
    <section id="certs" className="mb-32 pt-20">
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
              <p className="text-sm text-gray-400">Issued by {cert.issuer}</p>
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

        <section id="projects" className="mb-32 pt-20">
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

        <section id="skills" className="mb-32 pt-20">
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
                    <span key={i} className="px-3 py-1 bg-gray-800/80 text-cyan-100 rounded-full text-sm border border-gray-700">{item}</span>
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