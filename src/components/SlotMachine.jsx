import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SlotMachine = ({ onJackpot }) => {
  const [spinning, setSpinning] = useState(false);
  const [results, setResults] = useState(['❓', '❓', '❓']);
  const [jackpotHit, setJackpotHit] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const icons = ['💀', '🔥', '💩', '💍', '🍕', '🤡'];
  const ringIcon = '💍';

  const spin = () => {
    if (spinning || jackpotHit) return;
    setSpinning(true);
    
    // Fake spinning effect
    let spins = 0;
    const maxSpins = 20;
    const interval = setInterval(() => {
      setResults([
        icons[Math.floor(Math.random() * icons.length)],
        icons[Math.floor(Math.random() * icons.length)],
        icons[Math.floor(Math.random() * icons.length)]
      ]);
      spins++;
      
      if (spins >= maxSpins) {
        clearInterval(interval);
        // RIGGED: Always land on rings
        setResults([ringIcon, ringIcon, ringIcon]);
        setSpinning(false);
        setJackpotHit(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
        setTimeout(() => {
          onJackpot();
        }, 1500); // Give them a sec to process the banner before unlocking
      }
    }, 100);
  };

  return (
    <section style={{
      minHeight: '80vh',
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--cyan-pierce)', textShadow: '4px 4px 0px var(--pink-scream)' }} className="glitch-text">
          THE FUTURE PREDICTOR
        </h2>
        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>Spin to see what happens to us next. (100% accurate)</p>
      </div>

      <div className="brutal-box white-bg" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <div style={{
          display: 'flex',
          gap: '1rem',
          backgroundColor: 'var(--bg-void)',
          padding: '2rem',
          border: 'var(--border-thick-yellow)'
        }}>
          {results.map((icon, index) => (
            <motion.div 
              key={index}
              animate={spinning ? { y: [-10, 10, -10] } : { y: 0 }}
              transition={{ repeat: spinning ? Infinity : 0, duration: 0.2 }}
              style={{
                width: '100px',
                height: '120px',
                backgroundColor: 'var(--white-pure)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                border: 'var(--border-thick-pink)'
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>

        <button 
          onClick={spin} 
          disabled={spinning || jackpotHit}
          className="brutal-button"
          style={{ 
            fontSize: '2rem', 
            padding: '1rem 4rem',
            backgroundColor: jackpotHit ? 'var(--bg-void)' : 'var(--yellow-hazard)',
            color: jackpotHit ? 'var(--white-pure)' : 'var(--bg-void)',
            cursor: (spinning || jackpotHit) ? 'not-allowed' : 'pointer',
            opacity: spinning ? 0.7 : 1
          }}
        >
          {jackpotHit ? 'FATE SEALED' : 'SPIN'}
        </button>
      </div>

      {jackpotHit && (
        <motion.div 
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 5 }}
          className="brutal-box cyan-bg"
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            x: '-50%',
            y: '-50%',
            width: '90%',
            maxWidth: '600px',
            padding: 'clamp(1.5rem, 5vw, 3rem)', 
            zIndex: 50,
            textAlign: 'center',
            boxShadow: 'var(--shadow-brutal-pink)'
          }}
        >
          <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>JACKPOT!</h1>
          <h2 style={{ fontSize: 'clamp(1.2rem, 5vw, 2rem)', fontWeight: 900 }}>PREPARE FOR THE 1ST ANNIVERSARY NEXT YEAR, YOU UNGRATEFUL UCUK PLATYPUS.</h2>
        </motion.div>
      )}

      {/* Confetti Explosion Effect via CSS / absolute divs */}
      {showConfetti && (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 999 }}>
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: '50vw', 
                y: '50vh',
                scale: 0,
                opacity: 1
              }}
              animate={{ 
                x: `${Math.random() * 100}vw`, 
                y: `${Math.random() * 100}vh`,
                scale: Math.random() * 2 + 1,
                rotate: Math.random() * 360,
                opacity: [1, 1, 0]
              }}
              transition={{ duration: 2.8, ease: "easeOut" }}
              style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                backgroundColor: i % 2 === 0 ? 'var(--pink-scream)' : 'var(--cyan-pierce)',
                border: '2px solid var(--bg-void)'
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default SlotMachine;
