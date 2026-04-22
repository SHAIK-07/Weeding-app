import React from 'react'
import { motion } from 'framer-motion'

const Timeline = () => {
  const milestones = [

    { date: 'March 15, 2025', title: 'Our marriage proposal', desc: 'Our families came together with love and blessings, and a beautiful alliance was proposed — the beginning of a divine bond written in the stars.' },
    { date: 'April 22, 2025', title: 'First time we met', desc: 'With families by our side, we saw each other for the very first time — a moment filled with shy smiles, warm hearts, and the promise of a beautiful tomorrow.' },
    { date: 'January 10, 2026', title: 'Our engagement', desc: 'Surrounded by loved ones and sacred blessings, we exchanged rings and made a heartfelt promise to cherish each other for a lifetime.' },
    { date: 'May 06, 2026', title: 'Our marriage', desc: `The most awaited day — where two families unite, two souls become one, and a lifetime of love and togetherness begins.` },
  ]

  return (
    <section id="timeline" className="timeline-section" style={{ background: 'var(--primary-pink-light)', padding: '120px 0', scrollMarginTop: '70px' }}>
      <div className="container">

        {/* Section Heading */}
        <div className="heading-wrapper">
          <span className="sub-title">Our story</span>
          <h2 className="main-title">Timeline</h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
            hidden: {}
          }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '30px' }}
        >
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              style={{ flex: 1, minWidth: '250px', textAlign: 'left', padding: '20px', background: '#fff', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <motion.div 
                  variants={{
                    hidden: { scale: 0 },
                    visible: { scale: 1, transition: { type: 'spring', stiffness: 200 } }
                  }}
                  style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--primary-pink)', marginRight: '15px', flexShrink: 0, boxShadow: '0 0 10px rgba(232, 52, 90, 0.4)' }} 
                />
                <motion.hr 
                  variants={{
                    hidden: { scaleX: 0, opacity: 0 },
                    visible: { scaleX: 1, opacity: 1, transition: { duration: 0.8, delay: 0.4, ease: 'easeInOut' } }
                  }}
                  style={{ flex: 1, border: 'none', borderTop: '2px dashed #e8345a', transformOrigin: 'left', opacity: 0.5, background: index === milestones.length - 1 ? 'linear-gradient(to right, #e8345a, transparent)' : 'none', borderImage: index === milestones.length - 1 ? 'linear-gradient(to right, #e8345a, transparent) 1' : 'none' }} 
                />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#1a1a1a' }}>{item.title}</h4>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.7' }}>{item.desc}</p>
              <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary-pink)', display: 'block', marginTop: '-5px', letterSpacing: '1px' }}>{item.date}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
