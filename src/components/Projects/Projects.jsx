import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import '../GlassCard.css';
import './Projects.css';

const Projects = () => {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects.items;
    return projects.items.filter((item) => item.category === activeCategory);
  }, [activeCategory, projects.items]);

  const magneticMove = (event) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const magneticLeave = (event) => {
    event.currentTarget.style.transform = 'translate(0,0)';
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">{projects.title}</h2>
        <p className="section-subtitle">{projects.subtitle}</p>

        <div className="projects__filters">
          {projects.categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`projects__filter ${activeCategory === category ? 'projects__filter--active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="projects__grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                className="glass-card project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45 }}
              >
                <div className="project-card__media">
                  <img src={project.image} alt={project.title} />
                  <div className="project-card__overlay">
                    <a href={project.demoUrl} className="project-card__link magnetic-btn" onMouseMove={magneticMove} onMouseLeave={magneticLeave}>
                      View Demo
                    </a>
                    <a href={project.githubUrl} className="project-card__link magnetic-btn" onMouseMove={magneticMove} onMouseLeave={magneticLeave}>
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="project-card__body">
                  <span className="project-card__category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
