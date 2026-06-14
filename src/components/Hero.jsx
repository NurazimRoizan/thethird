import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [bootSoundPlayed, setBootSoundPlayed] = useState(false);

  const handleInteraction = () => {
    if (!bootSoundPlayed) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.5);
        gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      } catch (e) {
        console.error("Audio API not supported", e);
      }
      setBootSoundPlayed(true);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleInteraction);
    return () => window.removeEventListener('click', handleInteraction);
  }, [bootSoundPlayed]);

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '5rem 0'
    }}>
      
      {/* Top Marquee */}
      <div className="brutal-box yellow" style={{
        position: 'absolute',
        top: '2rem',
        left: 0,
        width: '120vw',
        marginLeft: '-10vw',
        transform: 'rotate(-3deg)',
        zIndex: 50,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: '1rem 0',
        fontSize: '2.5rem',
        fontWeight: 900
      }}>
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          style={{ display: 'inline-block' }}
        >
          DO NOT RESIST • ASSIMILATION IS LOVE • 3 YEARS IS JUST THE BEGINNING • DO NOT RESIST • ASSIMILATION IS LOVE • 3 YEARS IS JUST THE BEGINNING •
        </motion.div>
      </div>

      <div style={{ zIndex: 10, textAlign: 'center', padding: '2rem', marginTop: '2.5rem' }}>
        <motion.h1 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="glitch-text"
          style={{ 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            fontWeight: 900, 
            marginBottom: '2rem',
            textShadow: "4px 4px 0px var(--pink-scream), -4px -4px 0px var(--cyan-pierce)" 
          }}
        >
          MANDATORY<br/>LIFETIME<br/>COMMITMENT<br/>IMMINENT
        </motion.h1>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="brutal-box black-bg" style={{ display: 'inline-block', marginTop: '2rem', transform: 'rotate(2deg)' }}>
            <h2 className="font-marker" style={{ color: 'var(--cyan-pierce)', fontSize: '1.5rem' }}>3 FUCKING YEARS.</h2>
            <p style={{ marginTop: '1rem', fontSize: '1.25rem' }}>And you're still here? Psychopath.</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Marquee */}
      <div className="brutal-box pink" style={{
        position: 'absolute',
        bottom: '2rem',
        left: 0,
        width: '120vw',
        marginLeft: '-10vw',
        transform: 'rotate(2deg)',
        zIndex: 50,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: '1rem 0',
        fontSize: '2.5rem',
        fontWeight: 900
      }}>
        <motion.div 
          animate={{ x: [-1000, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          style={{ display: 'inline-block' }}
        >
          PREPARE FOR UPGRADE • NO REFUNDS • PREPARE FOR UPGRADE • NO REFUNDS • PREPARE FOR UPGRADE • NO REFUNDS •
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
