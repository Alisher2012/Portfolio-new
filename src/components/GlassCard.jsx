import React from 'react';

/**
 * GlassCard — pure CSS glassmorphism wrapper.
 * Accepts className for additional styles.
 */
const GlassCard = ({ children, className = '', style }) => (
  <div className={`glass-card ${className}`} style={style}>
    {children}
  </div>
);

export default GlassCard;
