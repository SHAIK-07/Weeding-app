import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Petals = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate random petals
    const petalCount = 25; // Number of petals on screen
    const newPetals = Array.from({ length: petalCount }, (_, i) => {
      const size = Math.random() * 15 + 10; // size between 10 and 25px
      const left = Math.random() * 100; // random horizontal start position
      const delay = Math.random() * 10; // random start delay
      const duration = Math.random() * 8 + 10; // fall duration between 10 and 18s
      // Alternate between a soft pink and a soft gold for a premium look
      const color = Math.random() > 0.5 ? 'rgba(232, 52, 90, 0.4)' : 'rgba(212, 175, 55, 0.4)';

      return { id: i, size, left, delay, duration, color };
    });

    setPetals(newPetals);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 9999, overflow: 'hidden' }}>
      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: '-10vh', x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: '110vh',
            x: [0, 30, -30, 0], // drift left and right
            rotate: [0, 180, 360],
            opacity: [0, 1, 1, 0] // fade in and fade out
          }}
          transition={{
            y: { duration: p.duration, repeat: Infinity, ease: 'linear', delay: p.delay },
            x: { duration: p.duration / 2, repeat: Infinity, ease: 'easeInOut', delay: p.delay },
            rotate: { duration: p.duration / 1.5, repeat: Infinity, ease: 'linear', delay: p.delay },
            opacity: { duration: p.duration, repeat: Infinity, ease: 'linear', delay: p.delay }
          }}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: '50% 0 50% 50%', // makes a teardrop / petal shape
            boxShadow: `0 0 10px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
};

export default Petals;
