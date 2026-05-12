import React, { useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Magnetic animated button — pure CSS classes.
 * variant: 'primary' | 'outline'
 */
const AnimatedButton = ({ children, className = '', variant = 'primary', ...props }) => {
  const ref = useRef(null);

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.12;
    const y = (e.clientY - r.top - r.height / 2) * 0.12;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)';
  };

  const cls = variant === 'outline' ? 'btn btn-outline' : 'btn btn-primary';

  return (
    <motion.button
      ref={ref}
      whileTap={{ scale: 0.97 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${cls} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
