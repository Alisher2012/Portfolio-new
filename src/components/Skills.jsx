import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const MARQUEE = [
  'REACT', 'JAVASCRIPT', 'TYPESCRIPT', 'TAILWIND', 'FRAMER MOTION',
  'VITE', 'NODE.JS', 'FIGMA', 'REDUX', 'NEXT.JS', 'MONGODB', 'FIREBASE',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.2, 0.65, 0.3, 0.9] },
});

const Skills = () => (
  <section className="skills container">
    <motion.div className="section-heading section-heading--center" {...fadeUp()}>
      <span className="section-eyebrow">My Stack & Tools</span>
      <h2 className="section-title">Technical Skills</h2>
      <div className="accent-line" />
    </motion.div>

    <div className="skills__grid">
      {skills.map((cat, idx) => (
        <motion.div key={idx} className="skills__card" {...fadeUp(0.1 + idx * 0.12)}>
          <div className="skills__category-header">
            <span className="skills__category-dot" />
            <span className="skills__category-name">{cat.category}</span>
          </div>

          <div className="skills__items">
            {cat.items.map((skill, sIdx) => (
              <div key={sIdx} className="skills__item">
                <div className="skills__item-header">
                  <div className="skills__item-left">
                    <div className="skills__item-icon">
                      <skill.icon size={14} />
                    </div>
                    <span className="skills__item-name">{skill.name}</span>
                  </div>
                  <span className="skills__item-pct">{skill.progress}%</span>
                </div>
                <div className="skills__bar-track">
                  <motion.div
                    className="skills__bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: 0.3 + sIdx * 0.06 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Marquee */}
    <div className="skills__marquee-wrap">
      <div className="skills__marquee-track">
        {[...MARQUEE, ...MARQUEE].map((text, i) => (
          <span key={i} className="skills__marquee-item">{text}</span>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
