import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getContent } from '../data/content';

const ContactPage = () => {
  const { i18n } = useTranslation();
  const content = getContent(i18n.language).contact;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3200);
  };

  const infoCards = [
    { icon: Mail,   label: 'Email',    value: 'hello@ziyodullaev.dev', href: 'mailto:hello@ziyodullaev.dev' },
    { icon: MapPin, label: 'Location', value: 'Tashkent, Uzbekistan',  href: '#' },
  ];

  const socials = [
    { icon: Github,    href: '#', label: 'GitHub' },
    { icon: Linkedin,  href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Send,      href: '#', label: 'Telegram' },
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <section className="contact container">
        <motion.div
          className="section-heading section-heading--center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="section-eyebrow">Get In Touch</span>
          <h1 className="section-title">{content.title}</h1>
          <p className="section-subtitle">{content.subtitle}</p>
          <div className="accent-line" />
        </motion.div>

        <div className="contact__layout">
          {/* Info column */}
          <div className="contact__info">
            {infoCards.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                className="contact__info-card"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="contact__info-icon">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="contact__info-label">{item.label}</p>
                  <p className="contact__info-value">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Socials */}
            <motion.div
              className="contact__socials-card"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="contact__socials-label">Find me on</p>
              <div className="contact__socials-row">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="contact__social-btn"
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <s.icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              className="contact__avail-card"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="avail-dot">Available for new projects</span>
              <p className="contact__avail-note">
                Open to senior frontend roles, consulting, and product collaborations.
              </p>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            className="contact__form-card"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <form className="contact__form" onSubmit={onSubmit}>
              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label">{content.name}</label>
                  <input
                    name="name"
                    type="text"
                    className="contact__input"
                    placeholder="Alisherxoja"
                    value={form.name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label">{content.email}</label>
                  <input
                    name="email"
                    type="email"
                    className="contact__input"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__label">{content.message}</label>
                <textarea
                  name="message"
                  rows={6}
                  className="contact__textarea"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={onChange}
                  required
                />
              </div>

              <button type="submit" className="contact__submit">
                {content.submit}
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Toast */}
      <AnimatePresence>
        {sent && (
          <motion.div
            className="contact__toast"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            ✓ {content.success}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default ContactPage;
