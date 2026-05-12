import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const LANGS = ['en', 'ru', 'uz'];
const LANG_LABELS = { en: 'EN', ru: 'RU', uz: 'UZ' };

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const cycleLang = () => {
    const cur = i18n.language.slice(0, 2);
    const next = LANGS[(LANGS.indexOf(cur) + 1) % LANGS.length];
    i18n.changeLanguage(next);
  };

  const links = [
    { label: t('nav.home'),     to: '/' },
    { label: t('nav.about'),    to: '/about' },
    { label: t('nav.projects'), to: '/projects' },
    { label: t('nav.contact'),  to: '/contact' },
  ];

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container navbar__inner">
        {/* Logo */}
        <NavLink to="/" className="navbar__logo">
          Alisherhoja <span className="navbar__logo-dot">.</span>
        </NavLink>

        {/* Desktop links */}
        <nav className="navbar__links" aria-label="Main navigation">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' navbar__link--active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__lang-btn"
            onClick={cycleLang}
            aria-label="Switch language"
          >
            <Globe size={13} />
            <span>{LANG_LABELS[i18n.language.slice(0, 2)] || 'EN'}</span>
          </button>

          <button
            type="button"
            className="navbar__mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
          >
            <div className="container navbar__mobile-links">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `navbar__mobile-link${isActive ? ' navbar__link--active' : ''}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <button
                type="button"
                className="navbar__lang-btn"
                onClick={cycleLang}
                style={{ marginTop: '0.5rem' }}
              >
                <Globe size={13} />
                <span>{LANG_LABELS[i18n.language.slice(0, 2)] || 'EN'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
