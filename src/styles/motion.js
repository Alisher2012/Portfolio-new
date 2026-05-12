export const FadeIn = (direction = 'up', delay = 0) => {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const amount = direction === 'up' || direction === 'right' ? 30 : -30;

  return {
    hidden: { opacity: 0, [axis]: amount },
    show: {
      opacity: 1,
      [axis]: 0,
      transition: { duration: 0.7, delay, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };
};

export const StaggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const HoverScale = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.28, ease: 'easeOut' },
  },
};
