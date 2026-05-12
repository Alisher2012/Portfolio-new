import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import ExperienceSection from '../components/ExperienceSection';

const AboutPage = () => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    style={{ paddingTop: '5rem' }}
  >
    <About />
    <ExperienceSection />
  </motion.main>
);

export default AboutPage;
