import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getContent } from '../data/content';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.2, 0.65, 0.3, 0.9] },
});

const ExperienceSection = () => {
  const { i18n } = useTranslation();
  const content = getContent(i18n.language).experience;

  return (
    <section className="experience container">
      <motion.div className="section-heading" {...fadeUp()}>
        <span className="section-eyebrow">Career Path</span>
        <h2 className="section-title">{content.title}</h2>
        <p className="section-subtitle">{content.subtitle}</p>
        <div className="accent-line" />
      </motion.div>

      <div className="experience__layout">
        {/* Timeline */}
        <div className="experience__timeline">
          <div className="experience__line" />

          <div className="experience__items">
            {content.items.map((item, idx) => (
              <motion.div
                key={`${item.company}-${item.year}`}
                className="experience__item"
                {...fadeUp(0.1 + idx * 0.12)}
              >
                <div className="experience__dot" />
                <div className="experience__card">
                  <p className="experience__year">{item.year}</p>
                  <h3 className="experience__role">{item.role}</h3>
                  <p className="experience__company">{item.company}</p>
                  <p className="experience__desc">{item.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills sidebar */}
        <motion.div className="experience__skills-card" {...fadeUp(0.2)}>
          <h3 className="experience__skills-title">Core Skills</h3>
          <div className="experience__skills-list">
            {content.skills.map((skill) => (
              <span key={skill} className="experience__skill-tag">{skill}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
