import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getContent } from '../data/content';

const ProjectsPage = () => {
  const { i18n } = useTranslation();
  const content = getContent(i18n.language).projects;
  const [filter, setFilter] = useState(content.filters[0]);

  const filtered = useMemo(() => {
    if (filter === content.filters[0]) return content.items;
    return content.items.filter((p) => p.category === filter);
  }, [filter, content]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <section className="projects container">
        <motion.div
          className="section-heading section-heading--center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="section-eyebrow">Portfolio</span>
          <h1 className="section-title">{content.title}</h1>
          <p className="section-subtitle">{content.subtitle}</p>
          <div className="accent-line" />
        </motion.div>

        {/* Filters */}
        <div className="projects__filters">
          {content.filters.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`projects__filter${filter === cat ? ' projects__filter--active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="projects__grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                className="project-card"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.07 }}
              >
                <div className="project-card__img-wrap">
                  <img src={project.cover} alt={project.name} loading="lazy" />
                  <div className="project-card__img-overlay" />
                  <span className="project-card__category">{project.category}</span>
                </div>

                <div className="project-card__body">
                  <h3 className="project-card__title">{project.name}</h3>
                  <p className="project-card__desc">{project.description}</p>

                  <div className="project-card__stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="project-card__tech">{tech}</span>
                    ))}
                  </div>

                  <div className="project-card__links">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link project-card__link--primary"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link project-card__link--secondary"
                    >
                      <Github size={13} /> Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default ProjectsPage;
