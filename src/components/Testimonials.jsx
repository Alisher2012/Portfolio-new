import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIdx((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((p) => (p + 1) % testimonials.length);
  const item = testimonials[idx];

  return (
    <section className="testimonials container">
      <motion.div
        className="section-heading section-heading--center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <span className="section-eyebrow">Testimonials</span>
        <h2 className="section-title">What Clients Say</h2>
        <div className="accent-line" />
      </motion.div>

      <div className="testimonials__card">
        <div className="testimonials__quote-icon">
          <Quote size={80} fill="currentColor" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.38 }}
          >
            <div className="testimonials__author">
              <img src={item.avatar} alt={item.name} className="testimonials__avatar" />
              <div>
                <p className="testimonials__name">{item.name}</p>
                <p className="testimonials__role">{item.role}</p>
              </div>
            </div>
            <p className="testimonials__text">"{item.content}"</p>
          </motion.div>
        </AnimatePresence>

        <div className="testimonials__controls">
          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`testimonials__dot ${i === idx ? 'testimonials__dot--active' : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <div className="testimonials__arrows">
            <button type="button" className="testimonials__arrow" onClick={prev} aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <button type="button" className="testimonials__arrow" onClick={next} aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
