import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getContent } from '../data/content';
import AnimatedButton from './AnimatedButton';
import GlassCard from './GlassCard';
import SectionHeading from './SectionHeading';

const ContactSection = () => {
  const { i18n } = useTranslation();
  const content = getContent(i18n.language).contact;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section id="contact" className="section-shell py-24">
      <SectionHeading title={content.title} subtitle={content.subtitle} />
      <GlassCard className="p-6 md:p-10">
        <form onSubmit={onSubmit} className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder={content.name}
              required
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-neon/30 transition focus:ring"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder={content.email}
              required
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-neon/30 transition focus:ring"
            />
          </div>
          <textarea
            name="message"
            rows="6"
            value={form.message}
            onChange={onChange}
            placeholder={content.message}
            required
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-neon/30 transition focus:ring"
          />
          <AnimatedButton type="submit" className="w-fit">
            {content.submit}
          </AnimatedButton>
        </form>

        <AnimatePresence>
          {sent && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="mt-5 rounded-xl border border-neon/40 bg-neon/10 px-4 py-3 text-sm text-neon"
            >
              {content.success}
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </section>
  );
};

export default ContactSection;
