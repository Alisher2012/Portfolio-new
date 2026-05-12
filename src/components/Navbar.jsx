import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from '../hooks/useThemeContext';
import GlassCard from './GlassCard';
import { getContent } from '../data/content';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const { theme, toggleTheme } = useThemeContext();
  const content = getContent(i18n.language);
  const links = [
    { name: content.nav.home, href: '#home' },
    { name: content.nav.projects, href: '#projects' },
    { name: content.nav.experience, href: '#experience' },
    { name: content.nav.contact, href: '#contact' },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-8">
      <GlassCard className="section-shell flex items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="font-display text-lg font-bold tracking-[0.2em] text-neon">
          AK
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="group relative text-sm text-slate-300 transition hover:text-neon">
              {link.name}
              <span className="absolute -bottom-2 left-0 h-px w-full scale-x-0 bg-neon transition group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => i18n.changeLanguage(i18n.language.startsWith('en') ? 'ru' : i18n.language.startsWith('ru') ? 'uz' : 'en')}
            className="rounded-xl border border-white/10 p-2 text-slate-200 transition hover:border-neon/60 hover:text-neon"
            aria-label="Switch language"
          >
            <Globe size={16} />
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-xl border border-white/10 p-2 text-slate-200 transition hover:border-neon/60 hover:text-neon"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
        <button type="button" onClick={() => setOpen((v) => !v)} className="md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </GlassCard>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="section-shell mt-3 md:hidden">
            <GlassCard className="p-4">
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5">
                    {link.name}
                  </a>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
