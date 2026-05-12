import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Instagram, Send, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import TypingText from '../animations/TypingText';

const Hero = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Send, href: '#', label: 'Telegram' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] animate-pulse-slow"></div>

      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-display font-medium tracking-widest mb-4"
          >
            {t('hero.greeting')}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Ziyodullaev <span className="text-neon">Alisherxoja</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-display text-gray-400 mb-8"
          >
            <span className="text-white">{t('hero.role')}</span>
            <div className="mt-3 text-base md:text-lg font-sans">
              <TypingText words={['React', 'JavaScript', 'TailwindCSS', 'Framer Motion', 'Vite']} />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-lg max-w-lg mb-10 leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link to="/contact" className="btn-primary flex items-center gap-2 group">
              {t('hero.contactMe')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#" className="btn-outline flex items-center gap-2">
              {t('hero.downloadCV')}
              <Download size={18} />
            </a>
          </motion.div>


          {/* Socials */}
          <div className="flex gap-6">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                whileHover={{ y: -5, color: '#00ffcc' }}
                className="p-3 glass rounded-xl text-gray-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated Circles */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-primary/20 rounded-full border-dashed"
            ></motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-accent-cyan/10 rounded-full border-dashed"
            ></motion.div>

            {/* Main Image Container */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden glass border-2 border-white/5 shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
                alt="Developer" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-neon border-primary/30"
            >
              <div className="text-primary font-bold text-xl">5+</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-tighter">Years Exp</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-neon border-accent-cyan/30"
            >
              <div className="text-accent-cyan font-bold text-xl">50+</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-tighter">Projects</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
