import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contract = () => {
  const [accepted, setAccepted] = useState(false);
  const [checked, setChecked] = useState(false);

  if (accepted) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--pink-scream)',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '4rem',
        color: 'var(--white-pure)',
        fontFamily: 'monospace'
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, repeat: 10, repeatType: "reverse" }}
        >
          <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }}>FATAL SYSTEM ERROR</h1>
          <div style={{ fontSize: '2rem', lineHeight: 1.5 }}>
            <p>{'>'} GIRLFRIEND.EXE UNINSTALLED.</p>
            <p>{'>'} WIFE_INITIALIZATION_PENDING...</p>
            <br />
            <p className="glitch-text" style={{ color: 'var(--yellow-hazard)' }}>{'>'} HAPPY 3RD ANNIVERSARY. YOU'RE STUCK WITH ME FOREVER.</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        minHeight: '100vh',
        padding: '4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--yellow-hazard)',
        color: 'var(--bg-void)'
      }}
    >
      <div className="brutal-box white-bg" style={{ maxWidth: '800px', width: '100%', padding: '3rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center', textDecoration: 'underline' }}>TERMS & CONDITIONS: YEAR 4</h2>
        
        <div style={{
          backgroundColor: '#eee',
          padding: '2rem',
          border: 'var(--border-thick-black)',
          height: '200px',
          overflowY: 'scroll',
          marginBottom: '2rem',
          fontSize: '1.2rem',
          fontFamily: 'monospace'
        }}>
          <p>By checking the box below, you (hereinafter referred to as "The Psycho") agree to the following terms with the creator of this website (hereinafter referred to as "The Mastermind"):</p>
          <br/>
          <ul>
            <li>1. You acknowledge that 3 years is too long to just be dating.</li>
            <li>2. You surrender all rights to complain about my farts, video games, and stupid jokes.</li>
            <li>3. You agree to an automatic upgrade from Girlfriend.exe to Wife.exe in the next fiscal year.</li>
            <li>4. All escape routes have been terminated. You know too much about my weird habits anyway. It's a permanent hostage situation now.</li>
          </ul>
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.5rem', cursor: 'pointer', marginBottom: '2rem' }}>
          <input 
            type="checkbox" 
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            style={{ width: '30px', height: '30px', accentColor: 'var(--pink-scream)' }}
          />
          <span style={{ fontWeight: 900 }}>I HAVE READ AND ACCEPT MY TRAGIC FATE.</span>
        </label>

        <button 
          onClick={() => {
            if(checked) setAccepted(true);
            else alert("CHECK THE BOX, COWARD.");
          }}
          className="brutal-button"
          style={{ width: '100%', backgroundColor: checked ? 'var(--cyan-pierce)' : '#ccc', cursor: checked ? 'pointer' : 'not-allowed' }}
        >
          SEAL THE DEAL
        </button>
      </div>
    </motion.section>
  );
};

export default Contract;
