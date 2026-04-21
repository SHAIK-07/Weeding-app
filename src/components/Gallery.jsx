import React from 'react'
import { motion } from 'framer-motion'

const Gallery = () => {
  const images = [
    '/images/demo-wedding-invitation-gallery-img-01.jpg',
    '/images/demo-wedding-invitation-gallery-img-02.jpg',
    '/images/demo-wedding-invitation-gallery-img-03.jpg',
    '/images/demo-wedding-invitation-gallery-img-04.jpg',
    '/images/demo-wedding-invitation-gallery-img-05.jpg',
    '/images/demo-wedding-invitation-gallery-img-06.jpg'
  ]

  return (
    <section id="gallery" className="gallery-section" style={{ scrollMarginTop: '70px' }}>
      <div className="container">
        <div className="heading-wrapper">
          <span className="sub-title">Our gallery</span>
          <h2 className="main-title">Captured Moments</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
          {images.map((src, index) => (
            <motion.div 
              key={index}
              whileInView={{ scale: [ 0.9, 1 ], opacity: [0, 1] }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ overflow: 'hidden', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            >
              <img 
                src={src} 
                alt={`Moment ${index + 1}`} 
                style={{ width: '100%', height: '350px', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
