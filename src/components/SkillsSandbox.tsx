import React, { useState, useRef } from "react";
import { motion, useDragControls } from "motion/react";
import { SKILLS } from "../data";
import { Skill } from "../types";
import { Award, Zap, Code, ShieldCheck, Database, Layers } from "lucide-react";

export default function SkillsSandbox() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | "Languages" | "Web Technologies" | "AI/ML & Data Science" | "Databases & Tools"
  >("All");
  const [activeSkill, setActiveSkill] = useState<Skill>(SKILLS[0]);
  const dragConstraintsRef = useRef<HTMLDivElement>(null);

  const filteredSkills = SKILLS.filter(
    (skill) => selectedCategory === "All" || skill.category === selectedCategory
  );

  const categories = [
    { name: "All", icon: Layers, textColor: "text-purple-400" },
    { name: "Languages", icon: Code, textColor: "text-emerald-400" },
    { name: "Web Technologies", icon: Zap, textColor: "text-blue-400" },
    { name: "AI/ML & Data Science", icon: ShieldCheck, textColor: "text-pink-400" },
    { name: "Databases & Tools", icon: Database, textColor: "text-orange-400" },
  ];

  const getSubcategorySkills = (categoryName: string) => {
    return SKILLS.filter((s) => s.category === categoryName);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 relative overflow-hidden shadow-2xl">
      {/* Background soft lighting */}
      <div className="absolute bottom-[-10%] left-[-20%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header instructions */}
      <div className="mb-6">
        <span className="p-1 px-2.5 rounded-full text-[10px] font-mono tracking-widest uppercase bg-purple-500/20 text-purple-400 font-bold border border-purple-500/30">
          Sandbox Area
        </span>
        <h3 className="text-2xl font-bold text-slate-100 tracking-tight mt-1">
          Tactile Skills Playground
        </h3>
        <p className="text-sm text-slate-400 mt-1">
          Swipe, toss, or drag her technical skills around! Tap a skill to inspect project depth.
        </p>
      </div>

      {/* Categories Toolbar */}
      <div className="flex flex-wrap gap-2 mb-6 p-1 bg-slate-950/80 rounded-2xl border border-slate-800/80">
        {categories.map((cat) => {
          const CategoryIcon = cat.icon;
          const isSelected = selectedCategory === cat.name;

          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name as any)}
              className={`flex items-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-xl transition-all cursor-pointer ${
                isSelected
                  ? "bg-slate-800 text-slate-100 border border-slate-700/80"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <CategoryIcon className={`h-3.5 w-3.5 ${cat.textColor}`} />
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Kinetic Drag Area */}
      <div
        ref={dragConstraintsRef}
        className="relative h-64 w-full bg-slate-950/90 rounded-2xl border border-slate-800/65 overflow-hidden flex flex-wrap gap-3 items-center justify-center p-6 mb-6"
      >
        <span className="absolute top-3 left-3 text-[10px] font-mono text-slate-600 uppercase pointer-events-none tracking-wider">
          💡 Drag & Toss Bubbles Anywhere
        </span>

        {/* Animated fluid grid wrapping draggable items */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20 pointer-events-none" />

        {filteredSkills.map((skill) => {
          const isSkillActive = activeSkill.name === skill.name;

          return (
            <motion.div
              key={skill.name}
              drag
              dragConstraints={dragConstraintsRef}
              dragElastic={0.4}
              dragTransition={{ bounceStiffness: 400, bounceDamping: 25 }}
              whileHover={{ scale: 1.12, zIndex: 30 }}
              whileDrag={{ scale: 0.95 }}
              onClick={() => setActiveSkill(skill)}
              className={`cursor-grab active:cursor-grabbing p-3 px-4 rounded-full border text-xs md:text-sm font-semibold flex items-center gap-2 select-none shadow-xl transition-colors duration-300 ${
                isSkillActive
                  ? "bg-purple-600 text-white border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  : "bg-slate-900 text-slate-300 border-slate-850 hover:bg-slate-800 hover:text-slate-100"
              }`}
            >
              <span
                className="h-2 w-2 rounded-full shadow-inner"
                style={{ backgroundColor: skill.color }}
              />
              {skill.name}
              <span className="text-[10px] font-mono opacity-60">
                {skill.level}%
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Educational Metric Details display below */}
      <div className="bg-slate-950 rounded-2xl border border-slate-850/80 p-5 mt-4 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Active skill metadata left */}
        <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-5">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
            Proficiency Blueprint
          </span>
          <h4 className="text-xl font-bold text-slate-200">{activeSkill.name}</h4>
          <span className="text-xs text-purple-400 font-medium font-mono mt-0.5 inline-block bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
            {activeSkill.category}
          </span>

          <div className="mt-4">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-slate-400 font-mono">Competency Ratio:</span>
              <span className="text-purple-400 font-mono font-bold">
                {activeSkill.level}%
              </span>
            </div>
            <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <motion.div
                key={activeSkill.name}
                initial={{ width: 0 }}
                animate={{ width: `${activeSkill.level}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Detailed Application Metrics right */}
        <div className="md:col-span-7 flex flex-col justify-center h-full">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
            Real Deployment Case
          </span>
          <p className="text-xs text-slate-300 leading-relaxed mt-1">
            Jagruti utilizes her fluency in **{activeSkill.name}** to engine high-speed systems at PICT, as well as optimizing ML models in internships. 
            {activeSkill.category === "AI/ML & Data Science" &&
              " This mathematical foundation drives anomaly recognition across computer vision defect detectors and neural language frameworks like BERT."}
            {activeSkill.category === "Web Technologies" &&
              " Her proficiency ensures highly responsive web products complete with lightweight DOM parsing patterns and optimized event triggers."}
            {activeSkill.category === "Languages" &&
              " Solid OOP foundations help structure memory-efficient algorithms and handle customer requirements effortlessly."}
            {activeSkill.category === "Databases & Tools" &&
              " Strong versioning records, relational indexing query techniques, and REST testing protocols maintain immaculate dev standards."}
          </p>
        </div>
      </div>
    </div>
  );
}
