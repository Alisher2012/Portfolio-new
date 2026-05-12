import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, Users, Award } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '7+', icon: Briefcase },
  { label: 'Products Shipped', value: '46',  icon: Zap },
  { label: 'Global Clients',   value: '24',  icon: Users },
  { label: 'Avg Lighthouse',   value: '95+', icon: Award },
];

const stack = [
  'React', 'JavaScript', 'TypeScript', 'TailwindCSS',
  'Framer Motion', 'Vite', 'Node.js', 'Redux',
  'REST / GraphQL', 'Figma', 'Git', 'Firebase',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.2, 0.65, 0.3, 0.9] },
});

const About = () => (
  <section className="about container">
    {/* Heading */}
    <motion.div className="section-heading section-heading--center" {...fadeUp()}>
      <span className="section-eyebrow">Senior Frontend Engineer</span>
      <h2 className="section-title">About Me</h2>
      <div className="accent-line" />
    </motion.div>

    <div className="about__grid">
      {/* ── Left: Photo + Stats ── */}
      <motion.div {...fadeUp(0.1)}>
        <div className="about__photo-card">
          <img src="/imgs/Alisher.jpg" alt="Ziyodullaev Alisherxoja" />
          <div className="about__photo-overlay" />
          <div className="about__photo-info">
            <p className="about__photo-name">Ziyodullaev Alisherxoja</p>
            <p className="about__photo-role">Senior Frontend Engineer</p>
          </div>
        </div>

        <div className="about__stats">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="about__stat"
              {...fadeUp(0.15 + i * 0.08)}
            >
              <s.icon className="about__stat-icon" size={20} />
              <div className="about__stat-value">{s.value}</div>
              <div className="about__stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Right: Bio ── */}
      <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div className="about__bio-card">
          <p className="about__bio-text">
            "I specialize in performance-first React applications, elegant motion systems, and
            maintainable CSS architecture. Over the years, I have collaborated with startups and
            enterprise teams to design interfaces that look premium and solve business problems
            effectively."
          </p>

          <p className="about__stack-label">Tech Stack</p>
          <div className="about__stack">
            {stack.map((skill) => (
              <span key={skill} className="about__stack-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="about__avail">
          <span className="avail-dot">Available for new projects</span>
          <span className="about__avail-location">📍 Tashkent, Uzbekistan</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
