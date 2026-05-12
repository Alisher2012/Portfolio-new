import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Send, User } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import '../GlassCard.css';
import './Contact.css';

const initialForm = { name: '', email: '', message: '' };

const Contact = () => {
  const { contact } = portfolioData;
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill all fields before sending.' });
      return;
    }
    setStatus({ type: 'success', message: 'Message sent successfully. I will reply shortly.' });
    setForm(initialForm);
  };

  const magneticMove = (event) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const magneticLeave = (event) => {
    event.currentTarget.style.transform = 'translate(0,0)';
  };

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <motion.div
          className="contact__info glass-card"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="section-title">{contact.title}</h2>
          <p className="section-subtitle">{contact.subtitle}</p>

          <a href={`mailto:${contact.email}`} className="contact__email">
            <Mail size={18} /> {contact.email}
          </a>

          <div className="contact__socials">
            {contact.socials.map((item) => (
              <a key={item.label} href={item.url} className="contact__social-link">
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="contact__form glass-card"
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <label className="contact__field">
            <input name="name" value={form.name} onChange={onChange} placeholder=" " />
            <span>
              <User size={16} /> Name
            </span>
          </label>
          <label className="contact__field">
            <input name="email" type="email" value={form.email} onChange={onChange} placeholder=" " />
            <span>
              <Mail size={16} /> Email
            </span>
          </label>
          <label className="contact__field">
            <textarea name="message" rows="5" value={form.message} onChange={onChange} placeholder=" " />
            <span>Message</span>
          </label>

          <button type="submit" className="magnetic-btn contact__submit" onMouseMove={magneticMove} onMouseLeave={magneticLeave}>
            <Send size={16} /> Send Message
          </button>

          <AnimatePresence mode="wait">
            {status.type && (
              <motion.div
                key={status.type + status.message}
                className={`contact__status contact__status--${status.type}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.3 }}
              >
                {status.message}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
