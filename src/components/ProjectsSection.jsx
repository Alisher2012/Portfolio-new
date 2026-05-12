import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getContent } from '../data/content';
import GlassCard from './GlassCard';
import SectionHeading from './SectionHeading';
import { FadeIn } from '../styles/motion';

const ProjectsSection = () => {
  const { i18n } = useTranslation();
  const content = getContent(i18n.language).projects;
  const [activeFilter, setActiveFilter] = useState(content.filters[0]);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, id: null });

  const projects = useMemo(
    () =>
      activeFilter === content.filters[0]
        ? content.items
        : content.items.filter((item) => item.category === activeFilter),
    [activeFilter, content.filters, content.items]
  );

  return (
    <section id="projects" className="section-shell py-24">
      <SectionHeading title={content.title} subtitle={content.subtitle} />
      <div className="mb-8 flex flex-wrap gap-3">
        {content.filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm ${activeFilter === filter ? 'border-neon bg-neon/10 text-neon' : 'border-white/10 text-slate-300'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={FadeIn('up')}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: 20 }}
              layout
              onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                setSpotlight({
                  id: project.id,
                  x: ((event.clientX - rect.left) / rect.width) * 100,
                  y: ((event.clientY - rect.top) / rect.height) * 100,
                });
              }}
            >
              <GlassCard className="group overflow-hidden">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      spotlight.id === project.id
                        ? `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(34,211,238,0.25), transparent 55%)`
                        : 'none',
                  }}
                />
                <img src={project.cover} alt={project.name} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-neon">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-2">
                    <a href={project.repo} className="rounded-xl border border-white/10 p-2 hover:border-neon/70">
                      <Github size={16} />
                    </a>
                    <a href={project.live} className="rounded-xl border border-white/10 p-2 hover:border-neon/70">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
