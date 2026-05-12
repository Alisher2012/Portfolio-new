import React from 'react';
import './GlowImage.css';

const GlowImage = ({ src, alt, className = '' }) => {
  return (
    <div className={`glow-image ${className}`}>
      <div className="glow-image__blur" />
      <img src={src} alt={alt} className="glow-image__img" />
    </div>
  );
};

export default GlowImage;
