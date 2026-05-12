import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import '../GlassCard.css';
import './About.css';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="section">
      <div className="container about">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="about__content"
        >
          <h2 className="section-title">{about.title}</h2>
          <p className="section-subtitle">{about.subtitle}</p>
          <p className="about__bio">{about.bio}</p>
          <div className="about__stats">
            {about.stats.map((stat) => (
              <div className="glass-card about__stat" key={stat.label}>
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="about__stack glass-card"
        >
          <h3 className="about__stack-title">Tech Stack</h3>
          <div className="about__stack-grid">
            {about.techStack.map((tech) => (
              <div key={tech} className="about__tech-chip">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
