import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Calendar, Navigation } from 'lucide-react'

const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/YCFsZAs19ZuTwjZj7'

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

        {/* Embedded Google Map */}
        <motion.div
          whileInView={{ y: [30, 0], opacity: [0, 1] }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          style={{ marginTop: '60px', textAlign: 'center' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '25px' }}>
            <MapPin size={22} style={{ color: 'var(--primary-pink)' }} />
            <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Find the Venue</h3>
          </div>
          <div style={{
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
            border: '3px solid rgba(255, 149, 196, 0.2)',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.897!2d77.2409691!3d14.942814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb6d9c69c4f5567%3A0xf2154f8673504f6c!2sSathyam%20Convention%20Hall!5e0!3m2!1sen!2sin!4v1713800000000"
              width="100%"
              height="350"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Satyam Function Hall - Wedding Venue Location"
            />
          </div>
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '20px',
              padding: '12px 28px',
              background: 'var(--text-dark)',
              color: 'white',
              borderRadius: '25px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '600',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-pink)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--text-dark)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <Navigation size={16} />
            Open in Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Events
