import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Send, Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Send, href: '#', label: 'Telegram' },
  ];

  const quickLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <footer className="bg-dark/80 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 shadow-neon"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-display font-bold tracking-tighter mb-6 block">
              <span className="text-white">PORT</span>
              <span className="text-primary">FOLIO</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Crafting premium digital experiences with precision and passion. 
              Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -5, color: '#00ffcc' }}
                  className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gray-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">hello@johndoe.com</li>
              <li className="text-gray-400 text-sm">+1 (555) 000-1234</li>
              <li className="text-gray-400 text-sm">San Francisco, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            © {currentYear} Ziyodullaev Alisherxoja. {t('footer.rights')}
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <span>{t('footer.built')}</span>
            <Heart size={12} className="text-primary animate-pulse" fill="currentColor" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
