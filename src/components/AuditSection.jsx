import React from 'react';
import { motion } from 'framer-motion';

const StatBox = ({ title, value, color, rotation, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200, y: 100, rotate: rotation - 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 150, damping: 12, delay }}
      className={`brutal-box ${color}`}
      style={{
        maxWidth: '400px',
        width: '100%',
        margin: '2rem auto',
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: color === 'yellow' ? 'var(--bg-void)' : 'inherit' }}>{title}</h3>
      <div className="font-marker" style={{ fontSize: '3rem', lineHeight: 1 }}>{value}</div>
    </motion.div>
  );
};

const AuditSection = () => {
  return (
    <section style={{
      minHeight: '100vh',
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h2 className="glitch-text" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', textShadow: "3px 3px 0px var(--yellow-hazard)" }}>THE 3-YEAR AUDIT</h2>
        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>We crunched the numbers. It's not looking good for you.</p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        width: '100%',
        maxWidth: '1200px'
      }}>
        <StatBox 
          title="Times I wanted to strangle you:" 
          value="4,321" 
          color="pink" 
          rotation={-3} 
          delay={0.1} 
        />
        <StatBox 
          title="Times you were actually right:" 
          value="2" 
          color="cyan" 
          rotation={4} 
          delay={0.3} 
        />
        <StatBox 
          title="Total farts tolerated:" 
          value="BIOLOGICAL HAZARD" 
          color="yellow" 
          rotation={-2} 
          delay={0.5} 
        />
        <StatBox 
          title="Weird TikToks you forced me to watch:" 
          value="TOO MANY" 
          color="black-bg" 
          rotation={1} 
          delay={0.7} 
        />
        <StatBox 
          title="Brain cells lost deciding what to eat:" 
          value="ALL OF THEM" 
          color="white-bg" 
          rotation={-4} 
          delay={0.9} 
        />
        <StatBox 
          title="Days you were 'Tak Mandi':" 
          value="WAY TOO MANY" 
          color="cyan" 
          rotation={3} 
          delay={1.1} 
        />
      </div>
    </section>
  );
};

export default AuditSection;
