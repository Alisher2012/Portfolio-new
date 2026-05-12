import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Send, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getContent } from '../data/content';

const WORDS = ['React', 'JavaScript', 'TailwindCSS', 'Framer Motion', 'Vite', 'Node.js'];

const HeroSection = () => {
  const { i18n } = useTranslation();
  const content = getContent(i18n.language).hero;

  const [wordIdx, setWordIdx] = useState(0);
  const [typed, setTyped] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Cursor glow
  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Typing effect
  useEffect(() => {
    const word = WORDS[wordIdx % WORDS.length];
    const delay = deleting ? 55 : 95;
    const timer = setTimeout(() => {
      if (!deleting) {
        if (typed.length < word.length) {
          setTyped(word.slice(0, typed.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (typed.length > 0) {
          setTyped(typed.slice(0, -1));
        } else {
          setDeleting(false);
          setWordIdx((i) => i + 1);
        }
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [typed, deleting, wordIdx]);

  const socials = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Send, href: '#', label: 'Telegram' },
  ];

  return (
    <section className="hero">
      {/* Ambient blobs */}
      <div className="hero__blob hero__blob--tl" />
      <div className="hero__blob hero__blob--br" />

      <div className="container hero__inner">
        {/* ── Left ── */}
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
        >
          <motion.span
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {content.badge}
          </motion.span>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Ziyodullaev{' '}
            <span className="hero__title-accent">Alisherxoja</span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {content.subtitle}
          </motion.p>

          <motion.p
            className="hero__typing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Tech focus:{' '}
            <span className="hero__typing-word">{typed}</span>
            <span className="hero__typing-cursor" />
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <Link to="/contact" className="btn btn-primary">
              {content.ctaPrimary} <ArrowRight size={16} />
            </Link>
            <a href="#" className="btn btn-outline">
              {content.ctaSecondary} <Download size={16} />
            </a>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="hero__social" aria-label={s.label}>
                <s.icon size={17} />
              </a>
            ))}
          </motion.div>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            {content.stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <div className="hero__stat-value">{stat.value}</div>
                <div className="hero__stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Portrait ── */}
        <motion.div
          className="hero__portrait-wrap"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
        >
          <div className="hero__portrait-glow" />
          <div className="hero__ring hero__ring--outer" />
          <div className="hero__ring hero__ring--inner" />

          <div className="hero__portrait">
            <img src="/imgs/Alisher.jpg" alt="Ziyodullaev Alisherxoja" />
            <div className="hero__portrait-overlay" />
          </div>

          {/* Floating badges */}
          <div className="hero__badge hero__badge--tl">
            <div className="hero__badge-value">7+</div>
            <div className="hero__badge-label">Years Exp</div>
          </div>
          <div className="hero__badge hero__badge--bl">
            <div className="hero__badge-value">46</div>
            <div className="hero__badge-label">Projects</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
