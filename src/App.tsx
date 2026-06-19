import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Calendar,
  Award,
  BookOpen,
  Briefcase,
  MapPin,
  Sparkles,
  Send,
  Bot,
  CheckCircle,
  ArrowRight,
  User,
  Terminal,
  ChevronRight,
  Menu,
  X,
  Layers,
  Heart,
  Network,
  FileText,
  ExternalLink,
  Code2,
  Trophy,
  Activity,
  Cpu
} from "lucide-react";
import { 
  EXPERIENCES, 
  EDUCATIONS, 
  PROJECTS, 
  RESEARCH_PAPERS, 
  ACHIEVEMENTS, 
  LEETCODE_PROFILE 
} from "./data";
import SkillsSandbox from "./components/SkillsSandbox";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProjectCategory, setSelectedProjectCategory] = useState<"All" | "Web" | "AI/ML">("All");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  
  // Interactive state for achievements & research
  const [activeResearchTab, setActiveResearchTab] = useState(0);
  const [activeLeetcodeTopic, setActiveLeetcodeTopic] = useState<string | null>(null);
  const [showTrophyCelebration, setShowTrophyCelebration] = useState(false);

  // Scroll visibility listeners to update current nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "achievements", "skills", "projects"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects = PROJECTS.filter(
    (p) => selectedProjectCategory === "All" || p.category === selectedProjectCategory
  );

  return (
    <div className="min-h-screen bg-[#050505] text-[#f2f2f2] font-sans selection:bg-[#FF9900]/30 selection:text-[#FF9900] overflow-x-hidden relative">
      {/* Implements subtle scanline grid overlays for that extreme premium modern aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Top Banner Ticker */}
      <div className="w-full bg-[#111] border-b border-white/5 py-2.5 px-4 overflow-hidden relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-4 animate-marquee whitespace-nowrap">
            <span className="text-[#FF9900] font-bold">&#9670; AWS CLOUD CLUB WEB TEAM MEMBER</span>
            <span className="text-white/40">|</span>
            <span className="text-emerald-400 font-bold">&#9679; PICT CGPA: 9.80/10</span>
            <span className="text-white/40">|</span>
            <span className="text-orange-400 font-bold">&#9670; IN SEARCH OF ENGINEERING INTERNSHIPS</span>
            <span className="text-white/40">|</span>
            <span className="text-blue-400">&#9679; SPECIALIZED IN ML & COMPUTER VISION</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/50 text-[11px] shrink-0">
            <MapPin className="h-3 w-3 text-orange-500" /> Pune, Maharashtra
          </div>
        </div>
      </div>

      {/* Global Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#050505]/95 backdrop-blur-md border-b border-white/10 w-full transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <motion.div 
              className="h-9 w-9 rounded-xl bg-gradient-to-tr from-[#FF9900] to-orange-600 flex items-center justify-center font-bold text-black"
              whileHover={{ rotate: 15, scale: 1.05 }}
            >
              JK
            </motion.div>
            <a href="#home" className="text-lg font-bold tracking-tighter uppercase ml-1">
              Jagruti <span className="text-[#FF9900]">/</span> Web-ML
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-mono uppercase tracking-[0.15em] text-white/50">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "achievements", label: "Laurels & Papers" },
              { id: "skills", label: "Code Sandbox" },
              { id: "projects", label: "Projects" },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors duration-300 relative py-1 hover:text-white ${
                  activeSection === link.id ? "text-white font-bold" : ""
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#FF9900]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* LeetCode quick button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://leetcode.com/u/Jagruti_Kaulkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 border border-yellow-500/20 hover:border-yellow-500 bg-white/5 hover:bg-yellow-500/10 text-xs font-mono tracking-widest uppercase transition-all rounded-lg text-yellow-400 flex items-center gap-1.5"
            >
              <Code2 className="h-4 w-4" /> LeetCode profile
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-white md:hidden hover:text-orange-400 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#111] border-b border-white/10 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4 text-sm font-mono uppercase tracking-wider">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "experience", label: "Work Experience" },
                  { id: "achievements", label: "Publications & Awards" },
                  { id: "skills", label: "Skills Playground" },
                  { id: "projects", label: "Projects" }
                ].map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 border-b border-white/5 block hover:text-[#FF9900] ${
                      activeSection === link.id ? "text-amber-400 font-bold" : "text-white/60"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col gap-28 relative z-20">
        
        {/* HERO SECTION */}
        <section id="home" className="pt-8 md:pt-16 flex flex-col lg:flex-row gap-12 items-center min-h-[80vh]">
          {/* Left Block: Bold Typography & Slogans */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#FF9900] w-fit">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              Web Developer Full Stack - PICT Student
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extralight tracking-tighter leading-none text-slate-100 uppercase">
              Learning & <br />
              <span className="italic font-serif text-[#FF9900]">Exploring Cloud</span> <br />
              & AI Systems.
            </h1>
            <p className="text-base sm:text-lg text-white/50 max-w-lg font-light leading-relaxed">
              I am <span className="text-[#FF9900] font-bold">Jagruti Kaulkar</span>, an IT Engineering student at PICT, Pune maintaining a stellar 9.80 CGPA. Co-author of an ICCETAC 2025 research publication & National winner in software integration.
            </p>
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-6 max-w-lg">
              <div>
                <h3 className="text-3xl font-bold text-slate-100 font-mono">9.80</h3>
                <p className="text-[10px] uppercase font-mono tracking-wider text-white/40 mt-1">PICT Academic CGPA</p>
              </div>
              <div className="border-l border-white/5 pl-4">
                <h3 className="text-3xl font-bold text-slate-100 font-mono">1st</h3>
                <p className="text-[10px] uppercase font-mono tracking-wider text-white/40 mt-1">ICCETAC Authorship</p>
              </div>
              <div className="border-l border-white/5 pl-4">
                <h3 className="text-3xl font-bold text-slate-100 font-mono">3rd</h3>
                <p className="text-[10px] uppercase font-mono tracking-wider text-white/40 mt-1">National Project Rank</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#achievements"
                className="px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-black font-extrabold uppercase text-xs tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-105 transition-all text-center"
              >
                Explore Publications
              </a>
              <a
                href="#skills"
                className="px-6 py-3.5 border border-white/20 text-white font-extrabold uppercase text-xs tracking-widest rounded-xl hover:bg-white/5 transition-all text-center"
              >
                View Code Sandbox
              </a>
            </div>
          </div>

          {/* Right Block: Immersive Bento Deck representation */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="bg-[#111] border border-white/5 p-6 hover:border-white/10 transition-all rounded-3xl flex flex-col justify-between h-48 relative overflow-hidden group">
              <div className="absolute top-[-40%] right-[-10%] w-48 h-48 bg-[#FF9900]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#FF9900]/20 transition-all" />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF9900] font-bold block mb-2">Research and Academia</span>
                <h2 className="text-2xl font-serif italic text-slate-100 leading-tight">ICCETAC 2025 Speaker</h2>
                <p className="text-xs text-white/50 mt-1.5 leading-relaxed max-w-sm">
                  Presented our work on outcome attainment estimation logic to clear educational benchmarks in high-speed academic systems.
                </p>
              </div>
              <div className="flex justify-between items-end border-t border-white/5 pt-3 mt-3">
                <span className="text-[10px] font-mono text-emerald-400">Awarded: Co-Author</span>
                <span className="text-xs bg-white/5 p-1.5 rounded-full text-[#FF9900] border border-white/10">
                  <FileText className="h-4 w-4" />
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#111] border border-white/5 p-6 hover:border-white/10 transition-all rounded-3xl flex flex-col gap-3">
                <div className="h-1.5 w-12 bg-[#FF9900] rounded-full" />
                <h3 className="text-lg font-bold">Cloud Engineering</h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  Active Web Team member at AWS Club PICT, setting up local student pipelines, and spreading cloud-scalable best practices.
                </p>
              </div>

              <div className="bg-[#111] border border-white/5 p-6 hover:border-white/10 transition-all rounded-3xl flex flex-col gap-3">
                <div className="h-1.5 w-12 bg-purple-500 rounded-full" />
                <h3 className="text-lg font-bold">LeetCode Mastery</h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  Solved 350+ data structure & algorithm assignments with consistent streaks. Specializing in trees, dynamic programming, and systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & BIOGRAPHY SECTION */}
        <section id="about" className="scroll-mt-24 border-t border-white/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 sticky top-28">
              <span className="text-[10px] font-mono tracking-widest text-[#FF9900] uppercase font-bold">
                Identity Profile
              </span>
              <h2 className="text-3xl font-bold text-slate-100 tracking-tight mt-1">
                Academic & Engineering Foundation
              </h2>
              <div className="h-1 w-20 bg-[#FF9900] mt-4 rounded-full" />
              <p className="text-sm text-white/40 mt-6 leading-relaxed">
                Empowered by a 9.80 CGPA B.E. study program at PICT, I integrate classic full-stack architectures with modern analytics pipelines.
              </p>

              {/* Personal Details list */}
              <div className="mt-8 space-y-4 border-t border-white/5 pt-6 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-white/40 font-bold uppercase">Location:</span>
                  <span className="text-slate-300">Pune, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40 font-bold uppercase">Languages:</span>
                  <span className="text-slate-300">English, Hindi, Marathi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40 font-bold uppercase">D.O.B:</span>
                  <span className="text-slate-300">July 23, 2005</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40 font-bold uppercase">Email:</span>
                  <span className="text-slate-300 hover:text-amber-400 transition-colors">
                    <a href="mailto:jagrutikaulkar0@gmail.com">jagrutikaulkar0@gmail.com</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              {/* Profile Image & Objective Card */}
              <div className="bg-[#111] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                <div className="relative group shrink-0">
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#FF9900] to-orange-550 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                  <div className="relative h-28 w-28 rounded-2xl bg-slate-900 border-2 border-orange-500/30 flex flex-col items-center justify-center font-mono text-center overflow-hidden">
                    <Terminal className="h-8 w-8 text-amber-500 mb-1" />
                    <span className="text-[10px] font-bold text-slate-300 tracking-wider">PICT IT</span>
                    <span className="text-[9px] text-[#FF9900] font-bold">CGPA: 9.80</span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                    Professional Objective <Sparkles className="h-4 w-4 text-amber-400" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed italic">
                    "To secure a challenging position in a reputable organization where I can effectively contribute my technical web engineering and ML skillsets to achieve both organizational progress and personal mastery. I leverage robust cloud insights as an active member of AWS Cloud Club PICT to deploy production-resilient web ecosystems."
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-[10px] font-mono bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-slate-400">
                      #FullStackWeb
                    </span>
                    <span className="text-[10px] font-mono bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-slate-400">
                      #MachineLearning
                    </span>
                    <span className="text-[10px] font-mono bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-slate-400">
                      #AWSWebTeam
                    </span>
                  </div>
                </div>
              </div>

              {/* Academic Highlights */}
              <div>
                <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-amber-500" /> Academic Journey
                </h3>
                <div className="space-y-6">
                  {EDUCATIONS.map((edu) => (
                    <div
                      key={edu.id}
                      className="bg-[#0b0b0b] border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-all flex flex-col sm:flex-row justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="p-1 px-2.5 rounded-full text-[9px] font-mono uppercase bg-[#FF9900]/10 text-[#FF9900] border border-[#FF9900]/20 font-bold">
                            {edu.duration}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-slate-100 mt-2">{edu.institution}</h4>
                        <p className="text-xs text-amber-400 mt-1 font-mono">{edu.degree}</p>
                        <ul className="mt-3 space-y-1.5">
                          {edu.details.map((detail, index) => (
                            <li key={index} className="text-xs text-slate-400 flex items-start gap-1.5">
                              <span className="text-[#FF9900] shrink-0 mt-1">▪</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <span className="text-xs text-white/40 block font-mono">Academic Score</span>
                        <span className="text-lg font-bold text-emerald-400 font-mono block mt-1">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK HISTORY SECTION */}
        <section id="experience" className="scroll-mt-24 border-t border-white/10 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono tracking-widest text-[#FF9900] uppercase font-bold">
              Professional Depth
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mt-1">
              Work & Internship History
            </h2>
            <p className="text-xs sm:text-sm text-white/50 mt-2">
              Pragmatic experience designing enterprise DB schemas, AI defect detection models, and hosting student web workshops.
            </p>
          </div>

          <div className="relative border-l border-white/10 max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative">
                {/* Visual marker dot */}
                <div className="absolute left-[-31px] sm:left-[-47px] top-1 h-5 w-5 rounded-full bg-slate-950 border-2 border-orange-500/70 flex items-center justify-center z-10">
                  <span className="h-1.5 w-1.5 bg-orange-500 rounded-full animate-ping" />
                </div>

                <div className="bg-[#111] border border-white/5 p-6 rounded-3xl hover:border-white/10 transition-all group relative overflow-hidden">
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${exp.color}`} />
                  
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono py-1 px-3 bg-white/5 border border-white/10 rounded-full text-slate-300 w-fit">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                        <CheckCircle className="h-3.5 w-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-white/5 pt-4">
                    <span className="text-[10px] font-mono text-white/40 block mb-2 uppercase tracking-wider">
                      Skills Mastered During Internship:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skillsGained.map((skill) => (
                        <span
                          key={skill}
                          className="bg-[#1e1e1e] hover:bg-slate-800 text-slate-300 rounded-lg text-[10px] py-1 px-2.5 border border-white/5 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AWS Cloud integration points are detailed under experiential roles */}

        {/* PUBLICATIONS & ACHIEVEMENTS SPOTLIGHT SECTION */}
        <section id="achievements" className="scroll-mt-24 border-t border-white/10 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono tracking-widest text-[#FF9900] uppercase font-bold">
              Laurels & Papers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mt-1">
              Research & National Milestones
            </h2>
            <p className="text-xs sm:text-sm text-white/50 mt-2">
              Co-authoring international research contributions and representing PICT at high-intensity engineering finals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: ICCETAC 2025 Research Presentation Card & Interactive Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-[#111] border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl">
                {/* Visual badge top */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="p-1 px-2.5 rounded-full text-[9px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                      Research Paper
                    </span>
                    <span className="text-slate-500 text-xs font-mono">Presenting Author</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#FF9900] font-bold">ICCETAC 2025</span>
                </div>

                <h3 className="text-xl md:text-2xl font-serif font-semibold text-slate-100 tracking-tight leading-snug hover:text-[#FF9900] transition-colors">
                  “Automation of Attainment Calculation in Outcome-Based Technical Education: System Design and Implementation”
                </h3>
                
                <p className="text-xs text-slate-400 mt-4 leading-relaxed italic">
                  Presented successfully at the **International Conference on Cutting Edge Technologies in Advanced Computing** (ICCETAC 2025) held at Government College of Engineering, Karad.
                </p>

                <p className="text-xs text-slate-300 mt-4 leading-relaxed font-light">
                  Our co-authored system simplifies course outcome calculations, aligning university scoring models with transparent dataset graphs.
                </p>

                {/* Interactive highlight selector */}
                <div className="mt-8">
                  <span className="text-[10px] font-mono text-[#FF9900] uppercase tracking-wider block mb-3">
                    🔹 Interactive System Architecture Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {RESEARCH_PAPERS[0].highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="bg-slate-950/80 hover:bg-slate-900 border border-white/5 p-3 rounded-xl flex items-start gap-2 cursor-pointer transition-colors"
                      >
                        <CheckCircle className="h-3.5 w-3.5 text-[#FF9900] shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300 font-mono leading-tight">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap justify-between items-center text-xs text-slate-400 font-mono">
                  <span> Karad, MH • November 14th, 2025</span>
                  <span className="text-emerald-400 font-bold">Status: Published (Co-Author)</span>
                </div>
              </div>
            </div>

            {/* Right Column: NLPC-25 Triumphs Card (Interactive regional to national rounds) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* National Award Frame */}
              <div className="bg-gradient-to-br from-[#121212] to-slate-950 border border-[#FF9900]/20 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl group">
                {/* Sparkling outline */}
                <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#FF9900]/20 transition-all" />
                
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-550/30 text-[#FF9900]">
                    <Trophy className="h-6 w-6 animate-pulse" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/15 py-1 px-2.5 rounded-full uppercase">
                    National Finalist
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100">
                  National Level NLPC-25 Project competition
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Presented our breakthrough "Course Attainment System"
                </p>

                <div className="text-lg font-bold font-mono text-[#FF9900] mt-3">
                  🏆 3rd Rank Nationally (Out of 840+ Teams)
                </div>

                <p className="text-xs text-slate-300 mt-4 leading-relaxed font-light">
                  Our software prototype proved highly resilient through comprehensive code scrutiny. This achievement reflects team synergy and rigorous technical deployment testing!
                </p>

                {/* Flow steps regional to final */}
                <div className="mt-6 space-y-3 pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono text-[#FF9900] uppercase tracking-wider block">
                    📈 Journey Path & Sprints:
                  </span>
                  
                  <div className="flex gap-3 items-start relative pb-3 border-l border-white/10 pl-4 ml-2">
                    <span className="absolute top-0.5 left-[-4px] h-2 w-2 rounded-full bg-orange-400" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-200 font-mono">1st Rank - Regionals</h4>
                      <p className="text-[10px] text-slate-400">Sinhgad College of Engineering, Pune</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start relative pl-4 ml-2">
                    <span className="absolute top-0.5 left-[-4px] h-2 w-2 rounded-full bg-emerald-400" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-200 font-mono">National Finalist - Top 3</h4>
                      <p className="text-[10px] text-slate-400">COEP Technological University</p>
                    </div>
                  </div>
                </div>

                {/* Team recognition */}
                <div className="mt-8 p-3.5 bg-white/5 rounded-2xl border border-white/5">
                  <span className="text-[9px] font-mono text-white/40 block uppercase tracking-wider">
                    Collaborative Team Synergy:
                  </span>
                  <p className="text-xs text-slate-300 mt-1 font-mono">
                    Jagruti Kaulkar, Dipali Deore, Pranav Mahale
                  </p>
                </div>
              </div>

              {/* LeetCode Profile widget snippet */}
              <div className="bg-[#111] border border-white/5 rounded-3xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Code2 className="h-4.5 w-4.5 text-yellow-500" />
                      <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-slate-200">
                        LeetCode Statistics
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-white/50 bg-[#1e1e1e] py-0.5 px-2 rounded-md">
                      @jagrutikaulkar0
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-3 items-center">
                    <div>
                      <span className="text-3xl font-bold font-mono text-slate-100">{LEETCODE_PROFILE.solvedCount}</span>
                      <span className="text-[10px] font-mono text-white/40 block mt-1 uppercase">Solved Queries</span>
                    </div>
                    <div className="border-l border-white/5 pl-4 flex flex-col gap-1">
                      {LEETCODE_PROFILE.focusAreas.map(topic => (
                        <span 
                          key={topic} 
                          onClick={() => setActiveLeetcodeTopic(activeLeetcodeTopic === topic ? null : topic)}
                          className={`text-[9px] font-mono font-bold rounded-md px-1.5 py-0.5 border cursor-pointer select-none transition-all ${
                            activeLeetcodeTopic === topic
                              ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/40 font-extrabold"
                              : "bg-slate-950 text-slate-400 border-white/5 hover:border-slate-700"
                          }`}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {activeLeetcodeTopic && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="bg-slate-950 p-2.5 rounded-xl border border-white/5 mt-3 text-[10px] text-slate-300 font-mono leading-relaxed"
                    >
                      💡 Jagruti practices **{activeLeetcodeTopic}** optimization techniques continuously to structure efficient systems.
                    </motion.div>
                  )}
                </div>

                <a
                  href={LEETCODE_PROFILE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-between text-xs font-mono text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  <span>Launch competitive Leetcode workspace</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

            </div>

          </div>
        </section>

        {/* DRAGGABLE KINETIC SKILLS PLAYGROUND SECTION */}
        <section id="skills" className="scroll-mt-24 border-t border-white/10 pt-16">
          <SkillsSandbox />
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24 border-t border-white/10 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#FF9900] uppercase font-bold">
                My Creations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mt-1">
                Engineering Projects
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Click a project to view the developer code walkthrough & operational outcomes.
              </p>
            </div>

            {/* Category Select Filter */}
            <div className="flex gap-2.5 mt-6 md:mt-0 p-1 bg-slate-900 rounded-xl border border-white/5 w-fit">
              {(["All", "Web", "AI/ML"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedProjectCategory(cat)}
                  className={`text-xs py-1.5 px-4 rounded-lg font-bold uppercase transition-all tracking-wider cursor-pointer ${
                    selectedProjectCategory === cat
                      ? "bg-[#FF9900] text-black shadow-md"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Deck Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => {
              const isExpanded = expandedProject === project.id;

              return (
                <div
                  key={project.id}
                  className="bg-[#111] border border-white/5 rounded-3xl p-6 flex flex-col justify-between group hover:border-white/10 transition-all hover:shadow-xl relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between pointer-events-none">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full inline-block ${
                        project.category === "AI/ML"
                          ? "bg-purple-900/40 text-purple-400 border border-purple-900/35"
                          : "bg-blue-900/40 text-blue-400 border border-blue-900/35"
                      }`}>
                        {project.category} OUTCOME
                      </span>

                      {project.impactMetric && (
                        <div className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-500/5 px-2 py-0.5 rounded-md border border-emerald-500/10">
                          {project.impactMetric}
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-100 mt-3 group-hover:text-[#FF9900] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1 mt-4">
                      {project.technologies.map((t) => (
                        <span key={t} className="text-[9px] font-mono font-bold bg-[#1e1e1e] text-slate-400 px-2 py-0.5 rounded-md border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Collapsible Source Code Explainer Walkthrough */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mt-5 border-t border-white/5 pt-4 overflow-hidden"
                        >
                          <div className="bg-[#0a0a0a] rounded-xl p-3 border border-[#FF9900]/10">
                            <span className="text-[10px] font-mono text-[#FF9900] block uppercase tracking-wider mb-1">
                              📂 Implementation Walkthrough
                            </span>
                            <p className="text-xs text-slate-400 leading-relaxed font-mono">
                              {project.detailedWalkthrough}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-6">
                    <button
                      onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                      className="text-xs text-[#FF9900] font-mono underline hover:text-amber-300 hover:no-underline transition-all cursor-pointer"
                    >
                      {isExpanded ? "Hide detail walkthrough" : "Read technical specs"}
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* Global Footer Block */}
      <footer className="bg-gradient-to-b from-[#080808] to-[#040404] border-t border-white/10 mt-36 py-16 relative z-20 overflow-hidden">
        {/* Glow ambient decoration behind footer content */}
         <div className="absolute bottom-[-100px] left-1/4 w-80 h-48 bg-[#FF9900]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            
            {/* Branding Column */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-[#FF9900] text-black font-black flex items-center justify-center text-sm shadow-[0_0_15px_rgba(255,153,0,0.3)]">
                  JK
                </div>
                <span className="text-sm font-mono tracking-wider font-bold text-slate-100">
                  JAGRUTI KAULKAR <span className="text-[#FF9900]">/</span> PORTFOLIO
                </span>
              </div>
              <p className="text-xs text-white/50 font-light leading-relaxed max-w-sm mt-3">
                Sophisticated dark web design integrated with React, tailwind utility sets, and clean computer vision layouts. Dedicated to building performant and responsive systems.
              </p>
              <div className="flex items-center gap-3 mt-4 text-[11px] font-mono text-emerald-400 bg-emerald-500/5 border border-emerald-555/15 rounded-xl py-2 px-3.5 w-fit">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Currently studying B.E. • Active Open-Source Developer</span>
              </div>
            </div>

            {/* Navigation Sitemap */}
            <div className="md:col-span-3 flex flex-col gap-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF9900] uppercase">Sitemap Navigation</span>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono mt-2">
                <a href="#about" className="text-white/40 hover:text-white transition-colors duration-200">/ About</a>
                <a href="#experience" className="text-white/40 hover:text-white transition-colors duration-200">/ Experience</a>
                <a href="#achievements" className="text-white/40 hover:text-white transition-colors duration-200">/ Publication</a>
                <a href="#skills" className="text-white/40 hover:text-white transition-colors duration-200">/ Sandbox</a>
                <a href="#projects" className="text-white/40 hover:text-white transition-colors duration-200">/ Projects</a>
              </div>
            </div>

            {/* External Links Column */}
            <div className="md:col-span-4 flex flex-col gap-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF9900] uppercase">Connect Profile Coordinates</span>
              <p className="text-xs text-slate-400 mt-2 font-mono">Email: <a href="mailto:jagrutikaulkar0@gmail.com" className="text-slate-200 hover:text-amber-400 hover:underline transition-colors justify-start">jagrutikaulkar0@gmail.com</a></p>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://github.com/jagrutikaulkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-white/5 hover:bg-white/10 text-xs font-mono tracking-wider transition-all border border-white/5 hover:border-white/10 rounded-xl text-slate-200 flex items-center gap-1.5"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jagruti-kaulkar-41b167346"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-white/5 hover:bg-white/10 text-xs font-mono tracking-wider transition-all border border-white/5 hover:border-white/10 rounded-xl text-slate-200 flex items-center gap-1.5"
                >
                  <Linkedin className="h-4 w-4 text-blue-400" /> LinkedIn
                </a>
              </div>
            </div>

          </div>

          <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-white/30 gap-4">
            <span>Dhankawadi, Pune - 411048, Maharashtra</span>
            <span className="flex items-center gap-1">
              Designed with care &copy; 2026 Jagruti Kaulkar. All rights preserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
