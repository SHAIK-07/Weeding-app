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

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '30px' }}>
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ y: [30, 0], opacity: [0, 1] }}
              transition={{ delay: index * 0.2 }}
              style={{ flex: 1, minWidth: '250px', textAlign: 'left', padding: '0 20px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary-pink)', marginRight: '15px' }} />
                <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #ddd' }} />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{item.title}</h4>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', marginBottom: '20px', lineHeight: '1.7' }}>{item.desc}</p>
              <span style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-pink)', display: 'block', marginTop: '-5px', letterSpacing: '1px' }}>{item.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
