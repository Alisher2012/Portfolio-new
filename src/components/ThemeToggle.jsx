import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ theme, onToggle }) => {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative w-14 h-8 rounded-full border border-white/15 bg-white/5 backdrop-blur-md p-1 transition-colors"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        className="absolute top-1 left-1 w-6 h-6 rounded-full bg-primary shadow-neon"
        style={{ x: isDark ? 0 : 24 }}
      />
      <span className="absolute inset-0 flex items-center justify-between px-2 text-[11px] text-gray-300">
        <Moon size={12} />
        <Sun size={12} />
      </span>
    </button>
  );
};

export default ThemeToggle;
