import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, align = 'left' }) => {
  const centerClass = align === 'center' ? 'section-heading--center' : '';

  return (
    <motion.div
      className={`section-heading ${centerClass}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.2, 0.65, 0.3, 0.9] }}
    >
      {subtitle && <span className="section-eyebrow">{subtitle}</span>}
      <h2 className="section-title">{title}</h2>
      <div className="accent-line" />
    </motion.div>
  );
};

export default SectionHeading;
