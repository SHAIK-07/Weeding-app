import React from 'react'
import { motion } from 'framer-motion'

const Featured = () => {
  return (
    <section style={{ padding: 0, position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url('/images/demo-wedding-invitation-img-03.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(255,255,255,0.2)',
        zIndex: 2
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
        <motion.div
           whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
           transition={{ duration: 1 }}
           style={{ display: 'inline-block', background: 'rgba(255,255,255,0.9)', padding: '50px 80px', borderRadius: '10px' }}
        >
          <h2 style={{ fontFamily: 'var(--font-script)', fontSize: '4rem', color: 'var(--primary-pink)', marginBottom: '10px' }}>Together Forever</h2>
          <p style={{ letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-dark)', fontWeight: 'bold' }}>Swetha & Satish</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Featured
