import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { experience, skills } from '../data';

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 section-padding"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h1 className="text-5xl font-bold mb-4">My <span className="text-primary">Resume</span></h1>
          <div className="h-1 w-20 bg-primary rounded-full shadow-neon mb-6"></div>
          <p className="text-gray-400 max-w-xl">A comprehensive overview of my professional journey, skills, and achievements.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Download size={20} />
          Download PDF
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Column - Experience & Education */}
        <div className="lg:col-span-2 space-y-12">
          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-primary" />
              Work Experience
            </h2>
            <div className="space-y-8 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-9 h-9 glass rounded-full border-2 border-white/10 flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div className="glass-card p-8 rounded-3xl">
                    <span className="text-primary text-sm font-bold block mb-2">{exp.year}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-accent-cyan text-sm mb-4">{exp.company}</p>
                    <p className="text-gray-400 leading-relaxed text-sm">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" />
              Education
            </h2>
            <div className="space-y-8 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
              <div className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-9 h-9 glass rounded-full border-2 border-white/10 flex items-center justify-center z-10">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div className="glass-card p-8 rounded-3xl">
                  <span className="text-primary text-sm font-bold block mb-2">2014 - 2018</span>
                  <h3 className="text-xl font-bold text-white mb-1">B.Sc in Computer Science</h3>
                  <p className="text-accent-cyan text-sm mb-4">University of Technology</p>
                  <p className="text-gray-400 leading-relaxed text-sm">Focused on software engineering, algorithms, and web technologies.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column - Skills & Awards */}
        <div className="space-y-12">
          {/* Technical Skills */}
          <section className="glass-card p-8 rounded-3xl">
            <h2 className="text-xl font-bold mb-8 border-b border-white/10 pb-4">Technical Stack</h2>
            <div className="space-y-6">
              {skills[0].items.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-primary">{skill.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-primary shadow-neon"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section className="glass-card p-8 rounded-3xl">
            <h2 className="text-xl font-bold mb-8 border-b border-white/10 pb-4 flex items-center gap-2">
              <Award className="text-primary" size={20} />
              Achievements
            </h2>
            <ul className="space-y-4">
              {[
                'Best Frontend Developer 2023',
                'Awwwards SOTD Nominee',
                '100+ Github Contributions',
                'Google Certified Developer'
              ].map((award, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                  <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                  {award}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumePage;
