import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home = () => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <HeroSection />
    <Skills />
    <Services />
    <Testimonials />
  </motion.main>
);

export default Home;
