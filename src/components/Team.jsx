import React from 'react'
import { motion } from 'framer-motion'

const Team = () => {
  const members = [
    { name: 'Marlina Smith', role: 'Groomman', img: '/images/demo-wedding-team-01.png' },
    { name: 'Evan Atkinson', role: 'Groomman', img: '/images/demo-wedding-team-02.png' },
    { name: 'Bryan Johnson', role: 'Groomman', img: '/images/demo-wedding-team-03.png' },
    { name: 'Helen Jones', role: 'Groomman', img: '/images/demo-wedding-team-04.png' },
    { name: 'Blake Kasarin', role: 'Bridesmaid', img: '/images/demo-wedding-team-05.png' },
    { name: 'Samantha Jones', role: 'Bridesmaid', img: '/images/demo-wedding-team-06.png' },
    { name: 'Mike Humphreys', role: 'Bridesmaid', img: '/images/demo-wedding-team-07.png' },
    { name: 'Jonathan James', role: 'Bridesmaid', img: '/images/demo-wedding-team-08.png' }
  ]

  return (
    <section id="people" className="team-section" style={{ background: 'var(--white)', scrollMarginTop: '70px' }}>
      <div className="container">
        <div className="heading-wrapper">
          <span className="sub-title">God friends</span>
          <h2 className="main-title">Groomsman & Bridesmaid</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '40px' }}>
          {members.map((member, index) => (
            <motion.div 
              key={index}
              whileInView={{ y: [ 30, 0 ], opacity: [0, 1] }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ 
                width: '180px', 
                height: '180px', 
                borderRadius: '50%', 
                margin: '0 auto 20px', 
                overflow: 'hidden',
                background: 'var(--primary-pink-light)',
                padding: '10px'
              }}>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  style={{ width: '100%', borderRadius: '50%', filter: 'grayscale(0.5)' }} 
                />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{member.name}</h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '1px' }}>{member.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
