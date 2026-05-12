import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="loading-spinner">
            <div className="loading-spinner__track" />
            <div className="loading-spinner__fill" />
          </div>

          <h1 className="loading-title">
            <span>PORT</span>FOLIO
          </h1>

          <div className="loading-bar-wrap">
            <div className="loading-bar" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
