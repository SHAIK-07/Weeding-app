import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Calendar } from 'lucide-react'

const Events = () => {
  const events = [
    {
      title: 'Reception',
      date: 'Tuesday, 05-05-2026',
      time: '7:00 p.m onwards',
      venue: 'Sri Satyam Function Hall',
      location: 'Bellary Road, Uravakonda, Ananthapuramu Dist.',
      img: '/images/demo-wedding-invitation-sliding-box-img-01.jpg'
    },
    {
      title: 'Sumuhurtham',
      date: 'Wednesday, 06-05-2026',
      time: '10:48 a.m',
      venue: 'Sri Satyam Function Hall',
      location: 'Bellary Road, Uravakonda, Ananthapuramu Dist.',
      img: '/images/demo-wedding-invitation-sliding-box-img-02.jpg'
    },
    {
      title: 'The Ceremony',
      date: 'Wednesday, 06-05-2026',
      time: '11:30 a.m',
      venue: 'Sri Satyam Function Hall',
      location: 'Bellary Road, Uravakonda, Ananthapuramu Dist.',
      img: '/images/demo-wedding-invitation-sliding-box-img-03.jpg'
    }
  ]

  return (
    <section id="when" className="events-section" style={{ background: 'var(--bg-peach)', scrollMarginTop: '70px' }}>
      <div className="container">
        <div className="heading-wrapper">
          <span className="sub-title">Save the date</span>
          <h2 className="main-title">When and Where</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {events.map((event, index) => (
            <motion.div 
              key={index}
              whileInView={{ y: [ 30, 0 ], opacity: [0, 1] }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ background: 'var(--white)', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.05)', display: 'flex' }}
            >
              <div style={{ width: '40%', position: 'relative' }}>
                <img src={event.img} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.2)' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 'bold', display: 'block' }}>{event.date.split('-')[0].split(' ')[1] || '24'}</span>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>{event.date.split(',')[0]}</span>
                </div>
              </div>
              <div style={{ width: '60%', padding: '30px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>{event.title}</h3>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', color: 'var(--text-gray)', fontSize: '0.9rem' }}>
                  <Clock size={18} style={{ color: 'var(--primary-pink)' }} />
                  <span>{event.time}</span>
                </div>
                <div style={{ display: 'flex', gap: '15px', color: 'var(--text-gray)', fontSize: '0.9rem', alignItems: 'flex-start' }}>
                  <MapPin size={18} style={{ color: 'var(--primary-pink)', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontWeight: 'bold', color: 'var(--text-dark)', display: 'block', marginBottom: '5px' }}>{event.venue}</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
