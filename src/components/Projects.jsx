import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { projects } from '../data';
import { ExternalLink, Github, Search } from 'lucide-react';

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {t('projects.title')}
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          className="h-1 bg-primary mx-auto rounded-full shadow-neon"
        />
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          {t('projects.subtitle')}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              filter === cat 
                ? 'bg-primary text-dark border-primary shadow-neon font-bold' 
                : 'border-white/10 text-gray-400 hover:border-primary/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative glass-card rounded-3xl overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveProject(project)}
                    className="p-4 glass rounded-full text-white hover:text-primary transition-colors"
                  >
                    <Search size={24} />
                  </motion.button>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.githubUrl}
                    className="p-4 glass rounded-full text-white hover:text-primary transition-colors"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.liveUrl}
                    className="p-4 glass rounded-full text-white hover:text-primary transition-colors"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="glass px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-primary font-bold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-500 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1200] bg-dark/80 backdrop-blur-md p-6 md:p-10"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="mx-auto mt-12 max-w-4xl rounded-[2rem] glass-card overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="grid lg:grid-cols-2">
                <img src={activeProject.image} alt={activeProject.title} className="h-full min-h-72 w-full object-cover" />
                <div className="p-8 md:p-10">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">{activeProject.category}</p>
                  <h3 className="text-3xl font-bold mb-4">{activeProject.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{activeProject.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a href={activeProject.githubUrl} className="btn-outline">
                      {t('projects.viewCode')}
                    </a>
                    <a href={activeProject.liveUrl} className="btn-primary">
                      {t('projects.viewLive')}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
