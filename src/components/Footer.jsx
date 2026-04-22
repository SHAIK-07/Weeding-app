import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Footer = () => {
  const [showHeart, setShowHeart] = useState(true)

  // Alternate between ♥ and A every 1.2s
  useEffect(() => {
    const timer = setInterval(() => setShowHeart((prev) => !prev), 1200)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer style={{ padding: '120px 0 80px', background: '#fef7f9', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>

      {/* Decorative Wave / Watercolor at top */}
      <img
        src="/images/demo-wedding-invitation-banner-effect.png"
        alt="effect"
        style={{
          position: 'absolute',
          top: '-50px',
          left: 0,
          width: '100%',
          transform: 'rotate(180deg)',
          pointerEvents: 'none',
          opacity: 0.6,
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: '60px' }}>

          {/* Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ marginBottom: '50px' }}
          >
            <h2 className="script-font" style={{ fontSize: '4.5rem', color: 'var(--primary-pink)', marginBottom: '5px' }}>Thank You</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', fontStyle: 'italic', letterSpacing: '0.5px' }}>
              for showering us with your blessings and making our celebration complete!
            </p>
            <p style={{ fontSize: '0.9rem', color: '#232323', fontWeight: '700', marginTop: '20px', letterSpacing: '3px', textTransform: 'uppercase' }}>
              — From Team —
            </p>
          </motion.div>

          {/* Large Animated Logo */}
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '4.5rem',
              fontWeight: '900',
              color: '#232323',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '15px',
              whiteSpace: 'nowrap',
              userSelect: 'none',
            }}
          >
            <span>SW</span>

            {/* Middle slot: alternates between SVG Heart and red A */}
            <span style={{ display: 'inline-flex', width: '3.5rem', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
              <AnimatePresence mode="wait">
                {showHeart ? (
                  <motion.span
                    key="heart"
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'backOut' }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: '#e8345a',
                      fontSize: '3.5rem',
                      lineHeight: 1,
                    }}
                  >
                    <svg viewBox="0 0 512 512" fill="currentColor" width="1em" height="1em">
                      <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                    </svg>
                  </motion.span>
                ) : (
                  <motion.span
                    key="letter-a"
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'backOut' }}
                    style={{
                      display: 'inline-block',
                      color: '#e8345a',
                      fontSize: '4.5rem',
                      fontWeight: '900',
                      lineHeight: 1,
                    }}
                  >
                    A
                  </motion.span>
                )}
              </AnimatePresence>
            </span>

            <span>SA</span>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '40px', fontSize: '0.95rem', color: 'var(--text-gray)' }}>
          <p>With best compliments from All Friends & Relatives</p>
          <p style={{ marginTop: '10px' }}>© 2026 Swetha & Satish Wedding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
