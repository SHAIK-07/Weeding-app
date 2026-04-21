import React from 'react'
import { motion } from 'framer-motion'

const Timeline = () => {
  const milestones = [
    { year: '2018', title: 'First time we met', desc: 'Lorem ipsum placeholder for beautiful moments shared together.' },
    { year: '2019', title: 'Our first date', desc: 'Lorem ipsum placeholder for beautiful moments shared together.' },
    { year: '2020', title: 'Our marriage proposal', desc: 'Lorem ipsum placeholder for beautiful moments shared together.' },
    { year: '2025', title: 'Our engagement', desc: 'Lorem ipsum placeholder for beautiful moments shared together.' },
  ]

  return (
    <section id="timeline" className="timeline-section" style={{ background: 'var(--primary-pink-light)', padding: '120px 0', scrollMarginTop: '70px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '30px' }}>
          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              whileInView={{ y: [ 30, 0 ], opacity: [0, 1] }}
              transition={{ delay: index * 0.2 }}
              style={{ flex: 1, minWidth: '250px', textAlign: 'left', padding: '0 20px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary-pink)', marginRight: '15px' }} />
                <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #ddd' }} />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{item.title}</h4>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', marginBottom: '20px' }}>{item.desc}</p>
              <span style={{ fontSize: '3rem', fontWeight: 'bold', color: 'rgba(0,0,0,0.05)', display: 'block', marginTop: '-10px' }}>{item.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
