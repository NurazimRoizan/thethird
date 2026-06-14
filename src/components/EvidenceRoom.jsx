import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Skull, Heart, Zap } from 'lucide-react';

const Sticker = ({ children, color, rotate }) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ rotate }}
      whileHover={{ scale: 1.1, cursor: 'grabbing' }}
      whileDrag={{ scale: 1.2, rotate: rotate + 15, zIndex: 100 }}
      className={`brutal-box ${color}`}
      style={{
        padding: '0.5rem 1rem',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
        cursor: 'grab'
      }}
    >
      {children}
    </motion.div>
  );
};

const EvidenceRoom = () => {
  const containerRef = useRef(null);
  const [nuked, setNuked] = useState(false);

  const handleNuke = () => {
    setNuked(true);
    setTimeout(() => setNuked(false), 2000);
  };

  return (
    <section 
      ref={containerRef}
      style={{
        minHeight: '100vh',
        padding: '4rem 2rem',
        position: 'relative',
        overflow: 'hidden',
        borderTop: 'var(--border-thick)',
        borderBottom: 'var(--border-thick)',
        backgroundColor: 'var(--bg-void)'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--pink-scream)', textShadow: '3px 3px 0px var(--white-pure)' }}>THE EVIDENCE ROOM</h2>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Drag the stickers to vandalize our memories. You know you want to.</p>
        <button 
          onClick={handleNuke}
          className="brutal-button mt-4"
          style={{ marginTop: '2rem' }}
        >
          NUKE IT
        </button>
      </div>

      <div 
        className={nuked ? 'shake-it' : ''}
        style={{
          width: '100%',
          maxWidth: '1200px',
          minHeight: '80vh',
          margin: '0 auto',
          position: 'relative',
          border: 'var(--border-thick-black)',
          backgroundColor: 'var(--white-pure)',
          backgroundImage: 'radial-gradient(var(--bg-void) 2px, transparent 2px)',
          backgroundSize: '30px 30px',
          boxShadow: 'var(--shadow-brutal-cyan)',
          padding: '2rem'
        }}
      >
        {/* Draggable Stickers Dock */}
        {!nuked && (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
            <Sticker color="pink" rotate={-4}>
              <span style={{ fontSize: '30px', lineHeight: 1 }}>🚽</span>
              <span className="font-marker ml-2 text-black font-bold text-lg">YAK YAK YEY</span>
            </Sticker>
            
            <Sticker color="yellow" rotate={3}>
              <Skull size={30} color="var(--bg-void)" />
              <span className="font-marker ml-2 text-black font-bold text-lg">RIP</span>
            </Sticker>
            
            <Sticker color="cyan" rotate={-2}>
              <span style={{ fontSize: '30px', lineHeight: 1 }}>💩</span>
              <span className="font-marker ml-2 text-black font-bold text-lg">UCUK</span>
            </Sticker>

            <Sticker color="black-bg" rotate={5}>
              <Heart size={30} color="var(--pink-scream)" />
              <span className="font-marker ml-2 text-white font-bold text-lg">TAK MANDI</span>
            </Sticker>
            
            <Sticker color="white-bg" rotate={-6}>
              <Zap size={30} color="var(--yellow-hazard)" />
              <span className="font-marker ml-2 text-black font-bold text-lg">WTF</span>
            </Sticker>
          </div>
        )}

        {/* User Photos Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          justifyItems: 'center'
        }}>
          <img src="/img1.jpg" alt="Photo 1" style={{ width: '100%', height: '350px', objectFit: 'cover', border: 'var(--border-thick-black)', transform: 'rotate(-5deg)', boxShadow: 'var(--shadow-brutal-cyan)' }} />
          <img src="/img2.jpg" alt="Photo 2" style={{ width: '100%', height: '350px', objectFit: 'cover', border: 'var(--border-thick-black)', transform: 'rotate(8deg)', boxShadow: 'var(--shadow-brutal-pink)' }} />
          <img src="/img3.jpg" alt="Photo 3" style={{ width: '100%', height: '350px', objectFit: 'cover', border: 'var(--border-thick-black)', transform: 'rotate(-2deg)', boxShadow: 'var(--shadow-brutal-yellow)' }} />
          <img src="/img4.jpg" alt="Photo 4" style={{ width: '100%', height: '350px', objectFit: 'cover', border: 'var(--border-thick-black)', transform: 'rotate(-6deg)', boxShadow: 'var(--shadow-brutal-pink)' }} />
          <img src="/img5.jpg" alt="Photo 5" style={{ width: '100%', height: '350px', objectFit: 'cover', border: 'var(--border-thick-black)', transform: 'rotate(10deg)', boxShadow: 'var(--shadow-brutal-cyan)' }} />
          <img src="/img6.jpg" alt="Photo 6" style={{ width: '100%', height: '350px', objectFit: 'cover', border: 'var(--border-thick-black)', transform: 'rotate(-4deg)', boxShadow: 'var(--shadow-brutal-yellow)' }} />
        </div>

        {nuked && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--pink-scream)', zIndex: 999 }}>
            <h1 className="glitch-text text-black font-black" style={{ fontSize: '5rem' }}>BOOM.</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default EvidenceRoom;
