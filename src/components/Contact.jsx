import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@ziyodullaev.com', href: 'mailto:hello@ziyodullaev.com' },
    { icon: Phone, label: 'Phone', value: '+998 (90) 000-0000', href: 'tel:+998900000000' },
    { icon: MapPin, label: 'Location', value: 'Tashkent, Uzbekistan', href: '#' },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSent(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSent(false), 2800);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {t('contact.title')}
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          className="h-1 bg-primary mx-auto rounded-full shadow-neon"
        />
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-6">
          {contactInfo.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl flex items-center gap-6 group hover:border-primary/50 transition-all"
            >
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-500">
                <item.icon size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-white font-medium group-hover:text-primary transition-colors">{item.value}</p>
              </div>
            </motion.a>
          ))}
          
          {/* Animated Background Element */}
          <div className="hidden lg:block glass-card p-8 rounded-3xl border-primary/10 relative overflow-hidden h-64">
            <div className="absolute inset-0 bg-primary/5 animate-pulse-slow"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <MessageSquare size={48} className="text-primary/20 mb-4 animate-bounce" />
              <p className="text-center text-gray-500 text-sm italic">"Let's create something extraordinary together."</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glass-card p-10 rounded-[2rem] border-white/5"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">{t('contact.name')}</label>
                <input 
                  name="name"
                  type="text" 
                  placeholder="Ziyodullaev Alisherxoja"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">{t('contact.email')}</label>
                <input 
                  name="email"
                  type="email" 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Subject</label>
              <input 
                name="subject"
                type="text" 
                placeholder="How can I help you?"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">{t('contact.message')}</label>
              <textarea 
                name="message"
                rows="5" 
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                required
              />
            </div>

            <button 
              type="submit"
              className="btn-primary w-full md:w-auto flex items-center justify-center gap-3 group"
            >
              {t('contact.send')}
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {isSent && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            className="fixed right-6 top-24 z-[1300] rounded-2xl border border-primary/40 bg-dark/90 px-6 py-4 text-sm text-primary shadow-neon backdrop-blur-md"
          >
            {t('contact.success')}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
