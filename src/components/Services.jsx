import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data';

const features = [
  ['React / Next.js apps', 'Component design systems', 'Performance optimization'],
  ['Figma to code', 'Micro-interactions', 'Responsive layouts'],
  ['Core Web Vitals', 'Bundle size reduction', 'Lazy loading strategies'],
  ['REST & GraphQL', 'Real-time WebSocket', 'Auth & state management'],
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.2, 0.65, 0.3, 0.9] },
});

const Services = () => (
  <section className="services container">
    <motion.div className="section-heading section-heading--center" {...fadeUp()}>
      <span className="section-eyebrow">What I Offer</span>
      <h2 className="section-title">My Services</h2>
      <div className="accent-line" />
    </motion.div>

    <div className="services__grid">
      {services.map((svc, idx) => (
        <motion.div key={idx} className="services__card" {...fadeUp(0.1 + idx * 0.1)}>
          <div className="services__icon">
            <svc.icon size={24} />
          </div>
          <h3 className="services__title">{svc.title}</h3>
          <p className="services__desc">{svc.description}</p>
          <ul className="services__features">
            {(features[idx] || []).map((f, i) => (
              <li key={i} className="services__feature">
                <span className="services__feature-dot" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Services;
