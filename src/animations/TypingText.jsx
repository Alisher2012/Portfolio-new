import React, { useEffect, useMemo, useState } from 'react';

const TypingText = ({ words, typingSpeed = 90, deletingSpeed = 55, pause = 1200 }) => {
  const safeWords = useMemo(() => (words?.length ? words : ['React']), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = safeWords[wordIndex % safeWords.length];

    if (!isDeleting && text === currentWord) {
      const t = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((p) => (p + 1) % safeWords.length);
        return;
      }
      setText((prev) =>
        isDeleting
          ? currentWord.slice(0, prev.length - 1)
          : currentWord.slice(0, prev.length + 1)
      );
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(t);
  }, [deletingSpeed, isDeleting, pause, safeWords, text, typingSpeed, wordIndex]);

  return (
    <span style={{ color: 'var(--accent)' }}>
      {text}
      <span style={{
        display: 'inline-block',
        width: 2,
        height: '1em',
        background: 'var(--accent)',
        marginLeft: 2,
        verticalAlign: 'middle',
        animation: 'pulse-dot 0.8s ease-in-out infinite',
      }} />
    </span>
  );
};

export default TypingText;
