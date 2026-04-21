import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
  // Target date: May 6, 2026
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-05-06T00:00:00") - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatZero = (num) => num < 10 ? `0${num}` : num;

  return (
    <section id="couple" className="intro-section" style={{ background: '#fcfaf9', position: 'relative', overflow: 'hidden', scrollMarginTop: '70px', paddingTop: '60px' }}>
      
      {/* Huge blurred background text for the whole top section */}
      <div style={{ position: 'absolute', top: '80px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', fontSize: '16rem', color: 'rgba(0,0,0,0.03)', fontWeight: '900', zIndex: 0,fontFamily: '"Oswald", "Impact", var(--font-sans)', letterSpacing: '4px' }}>
        WE'RE GETTING MARRIED
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Countdown Timer Block */}
        <div style={{ padding: '20px 0 80px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
          
          <h3 style={{ fontSize: '1.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800', margin: 0, fontFamily: '"Oswald", var(--font-sans)', color: '#2b2b2b' }}>
            Start Celebration
          </h3>
          
          {/* Divider line */}
          <div className="timer-divider" style={{ width: '1px', height: '60px', background: '#ccc' }} />

          {/* Countdown Display */}
          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: formatZero(timeLeft.hours) },
              { label: 'Minutes', value: formatZero(timeLeft.minutes) },
              { label: 'Seconds', value: formatZero(timeLeft.seconds) }
            ].map((item, index) => (
              <React.Fragment key={item.label}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span style={{ fontSize: '3rem', fontWeight: '700', color: '#e8345a', lineHeight: 1, fontFamily: '"Oswald", var(--font-sans)' }}>{item.value}</span>
                  <span style={{ fontSize: '0.8rem', color: '#666', textTransform: 'none', marginTop: '8px', fontFamily: 'var(--font-sans)' }}>{item.label}</span>
                </div>
                {index < 3 && <span style={{ fontSize: '2rem', fontWeight: '300', color: '#2b2b2b', alignSelf: 'flex-start', marginTop: '2px' }}>:</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="heading-wrapper">
          <span className="sub-title">We're getting married!</span>
          <h2 className="main-title">The Wedding</h2>
        </div>

        <div className="couple-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px', flexWrap: 'wrap' }}>
          
          {/* Bride Column */}
          <motion.div 
            whileInView={{ x: [ -50, 0 ], opacity: [0, 1] }} 
            transition={{ duration: 0.8 }}
            className="couple-card" 
            style={{ textAlign: 'center', maxWidth: '350px', flex: 1 }}
          >
            <div style={{ position: 'relative', marginBottom: '30px' }}>
              <img src="/images/demo-wedding-invitation-img-02.png" alt="Bride" style={{ width: '100%', borderRadius: '15px' }} />
              <img src="/images/demo-wedding-invitation-home-effect-01.png" alt="effect" style={{ position: 'absolute', top: '-20px', left: '-20px', width: '80px', pointerEvents: 'none' }} />
            </div>
            <span style={{ color: 'var(--primary-pink)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>The Bride</span>
            <h3 style={{ fontSize: '2.5rem', margin: '10px 0' }}>Swetha Sai</h3>
            <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              D/o Smt. Konka Bharathi & <br/> Sri Konka Sitharamulu <br/>
              (Smt. Konka Kousalya & Sri Konka Gopal) <br/>
              Vyasapuram, Uravakonda.
            </p>
          </motion.div>

          {/* Center heart/decoration */}
          <div style={{ fontSize: '3rem', color: 'var(--primary-pink)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="script-font">&</span>
          </div>

          {/* Groom Column */}
          <motion.div 
            whileInView={{ x: [ 50, 0 ], opacity: [0, 1] }} 
            transition={{ duration: 0.8 }}
            className="couple-card" 
            style={{ textAlign: 'center', maxWidth: '350px', flex: 1 }}
          >
            <div style={{ position: 'relative', marginBottom: '30px' }}>
              <img src="/images/demo-wedding-invitation-img-04.png" alt="Groom" style={{ width: '100%', borderRadius: '15px' }} />
              <img src="/images/demo-wedding-invitation-home-effect-01.png" alt="effect" style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', pointerEvents: 'none', transform: 'scaleX(-1)' }} />
            </div>
            <span style={{ color: 'var(--primary-pink)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>The Groom</span>
            <h3 style={{ fontSize: '2.5rem', margin: '10px 0' }}>Satish</h3>
            <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              S/o Smt. G. Thulasamma & <br/> Sri G. Govindappa <br/>
              Palavenkatapuram, Bramhasamudram.
            </p>
          </motion.div>

        </div>
      </div>
      
      {/* Footer watercolor effect */}
      <img 
        src="/images/demo-wedding-invitation-banner-effect.png" 
        alt="divider" 
        style={{ width: '100%', position: 'absolute', bottom: '-20px', left: 0, opacity: 0.3, transform: 'scaleY(-1)' }} 
      />
    </section>
  )
}

export default Intro
