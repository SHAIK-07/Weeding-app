import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'

const ParallaxDot = ({ dot, springX }) => {
  // Parallax is now only on X axis, since Y is used for falling
  const factor = dot.size * 0.005; 
  const x = useTransform(springX, val => val * -factor);

  return (
    <motion.div
      initial={{ top: '-15%', opacity: 0 }}
      animate={{ 
        top: '115%', 
        opacity: [0, dot.opacity, dot.opacity, 0] 
      }}
      transition={{ 
        duration: dot.duration, 
        repeat: Infinity, 
        ease: 'linear',
        delay: dot.delay 
      }}
      style={{
        position: 'absolute',
        width: `${dot.size}px`,
        height: `${dot.size}px`,
        borderRadius: '50%',
        background: dot.color,
        left: `${dot.x}%`,
        pointerEvents: 'none',
        x,
        zIndex: 1, /* Behind main text */
      }}
    />
  )
}

const ParallaxImage = ({ src, size, top, left, springX, springY, factor, delay }) => {
  const x = useTransform(springX, val => val * -factor);
  const y = useTransform(springY, val => val * -factor);

  return (
    <motion.img
      src={src}
      alt="watercolor splash"
      initial={{ scale: 0.8, opacity: 0, rotate: delay * 10 }}
      animate={{ scale: 1, opacity: 0.7, rotate: delay * 10 }}
      transition={{ delay: delay, duration: 1.2, ease: 'easeOut' }}
      style={{
        position: 'absolute',
        width: size,
        top,
        left,
        pointerEvents: 'none',
        x,
        y,
        zIndex: 1, // Behind the circle
      }}
    />
  )
}

const Hero = () => {
  const [scrolled, setScrolled] = useState(false)
  const [showHeart, setShowHeart] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Alternate between SVGs heart and A every 1.2s
  useEffect(() => {
    const timer = setInterval(() => setShowHeart(prev => !prev), 1200)
    return () => clearInterval(timer)
  }, [])
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Couple', href: '#couple' },
    { label: 'Timeline', href: '#timeline' },
  ]
  const navItemsRight = [
    { label: 'Gallery', href: '#gallery' },
    { label: 'When & Where', href: '#when' },
  ]

  // Multi-colored falling bubbles
  const bubbleColors = ['#f4a9a8', '#f0813e', '#cf2056', '#d4af37', '#e8345a']
  const splatters = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 16 + 6,
    x: Math.random() * 90 + 5,
    opacity: Math.random() * 0.45 + 0.15,
    delay: Math.random() * -10, // Start randomly throughout animation cycle
    duration: Math.random() * 8 + 6, // Fall lasts 6-14 seconds
    color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)]
  }))

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 40, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 15 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate distance from center of screen mapped to a value
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      className="hero-section"
      style={{
        padding: 0,
        height: '100vh',
        minHeight: '800px',
        overflow: 'hidden',
        position: 'relative',
        background: '#fef7f9',
      }}
    >
      {/* Background Image */}
      <motion.div
        className="hero-bg"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url('/images/demo-wedding-invitation-banner-bg.jpg.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
        }}
      />

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`main-nav ${scrolled ? 'scrolled' : ''}`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="nav-link desktop-link"
          >
            {item.label}
          </a>
        ))}

        {/* Center Logo — SW [♥ or A alternating] SA */}
        <div className="nav-logo">
          <span>SW</span>

          {/* Middle slot: alternates between SVG Heart and red A */}
          <span style={{ display: 'inline-flex', width: '1.2rem', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
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
                    fontSize: '1.15rem',
                    lineHeight: 1,
                  }}
                >
                  <svg viewBox="0 0 512 512" fill="currentColor" width="1em" height="1em">
                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
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
                    fontSize: '1.5rem',
                    fontWeight: '900',
                    lineHeight: 1,
                  }}
                >
                  A
                </motion.span>
              )}
            </AnimatePresence>
          </span>

          {/* SA always black */}
          <span>SA</span>
        </div>

        {navItemsRight.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="nav-link desktop-link"
          >
            {item.label}
          </a>
        ))}

        {/* Mobile Hamburger Button */}
        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        {[...navItems, ...navItemsRight].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Hero Content */}
      <div
        className="container hero-align-left"
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {/* Large watercolor splashes with Parallax behind the circle */}
        <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, pointerEvents: 'none', zIndex: 1 }}>
          <ParallaxImage 
            src="/images/demo-wedding-invitation-home-effect-01.png"
            size="280px" top="10%" left="5%" springX={springX} springY={springY} factor={0.03} delay={0.4}
          />
          <ParallaxImage 
            src="/images/demo-wedding-invitation-home-effect-01.png"
            size="220px" top="65%" left="75%" springX={springX} springY={springY} factor={0.05} delay={0.6}
          />
        </div>

        {/* Floating Circle */}
        <motion.div
          initial={{ scale: 0.75, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          style={{
            background: 'rgba(255, 255, 255, 0.96)',
            padding: '60px 55px 60px',
            borderRadius: '50%',
            aspectRatio: '1/1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 25px 70px rgba(0,0,0,0.13)',
            maxWidth: '540px',
            width: '90vw',
            position: 'relative',
            overflow: 'hidden',
          }}
        >

          {/* Splatter Dots with parallax effect */}
          {splatters.map((dot) => (
            <ParallaxDot key={dot.id} dot={dot} springX={springX} />
          ))}

          {/* Save The Date */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              background: '#1a1a1a',
              color: '#ffffff',
              padding: '8px 24px',
              display: 'inline-block',
              marginBottom: '20px',
              position: 'relative',
              zIndex: 3,
            }}
          >
            <span
              style={{
                fontSize: '0.9rem',
                letterSpacing: '5px',
                textTransform: 'uppercase',
                fontWeight: '700',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Save The Date
            </span>
          </motion.div>

          {/* Bride Name */}
          <motion.h1
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: '6.5rem',
              fontFamily: '"Oswald", "Impact", var(--font-serif)',
              lineHeight: 0.95,
              background: 'linear-gradient(to right, #cf2056, #ef8131)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              fontWeight: '700',
              marginBottom: '4px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            SWETHA
          </motion.h1>

          {/* AND separator */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5, ease: 'backOut' }}
            style={{
              fontSize: '1.2rem',
              letterSpacing: '5px',
              color: '#444',
              fontWeight: '700',
              margin: '10px 0',
              fontFamily: 'var(--font-sans)',
              position: 'relative',
              zIndex: 2,
            }}
          >
            — AND —
          </motion.div>

          {/* Groom Name */}
          <motion.h1
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: '6.5rem',
              fontFamily: '"Oswald", "Impact", var(--font-serif)',
              lineHeight: 0.95,
              background: 'linear-gradient(to right, #ef8131, #cf2056)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              fontWeight: '700',
              marginBottom: '20px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            SATISH
          </motion.h1>

          {/* Date */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              fontSize: '1.3rem',
              fontWeight: '600',
              color: '#333',
              fontFamily: 'var(--font-sans)',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <span style={{ letterSpacing: '2px' }}>May</span>
            <span style={{ width: '2px', height: '35px', background: '#ccc' }} />
            <span
              style={{
                fontSize: '3.5rem',
                fontWeight: '900',
                lineHeight: 1,
                fontFamily: 'var(--font-serif)',
                color: '#1a1a1a',
              }}
            >
              06
            </span>
            <span style={{ width: '2px', height: '35px', background: '#ccc' }} />
            <span style={{ letterSpacing: '2px' }}>2026</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Wave / Watercolor at bottom - Out of container to span full width */}
      <img
        src="/images/demo-wedding-invitation-banner-effect.png"
        alt="effect"
        style={{
          position: 'absolute',
          bottom: '-2px', /* Fix: Sits exactly at bottom edge, overlaying background */
          left: 0,
          width: '100%',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      />
    </section>
  )
}

export default Hero
