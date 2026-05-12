import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Instagram, Send } from 'lucide-react';
import './Footer.css';

const socials = [
  { icon: Github,   href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram,href: '#', label: 'Instagram' },
  { icon: Send,     href: '#', label: 'Telegram' },
];

const navLinks = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact',  to: '/contact' },
];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">
        {/* Brand */}
        <div>
          <NavLink to="/" className="footer__logo">AK.</NavLink>
          <p className="footer__tagline">
            Building premium frontend experiences with React, motion, and clean architecture.
          </p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="footer__social"
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <p className="footer__col-title">Navigation</p>
          <div className="footer__nav">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} className="footer__nav-link">
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Contact */}
        <div>
          <p className="footer__col-title">Contact</p>
          <div className="footer__contact-info">
            <a href="mailto:hello@ziyodullaev.dev" className="footer__contact-item">
              hello@ziyodullaev.dev
            </a>
            <span className="footer__contact-item">Tashkent, Uzbekistan</span>
            <span className="avail-dot" style={{ marginTop: '0.5rem' }}>
              Available for work
            </span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          © {new Date().getFullYear()} Ziyodullaev Alisherxoja. All rights reserved.
        </p>
        <p className="footer__built">Built with React + Vite</p>
      </div>
    </div>
  </footer>
);

export default Footer;
