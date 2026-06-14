import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Skull, Frown, ThumbsDown, Heart, Zap } from 'lucide-react';

const Sticker = ({ children, color, initialX, initialY, rotate }) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ x: initialX, y: initialY, rotate }}
      whileHover={{ scale: 1.2, cursor: 'grabbing' }}
      whileDrag={{ scale: 1.3, rotate: rotate + 15, zIndex: 100 }}
      className={`brutal-box ${color}`}
      style={{
        position: 'absolute',
        padding: '1rem',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
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
          maxWidth: '1000px',
          height: '60vh',
          margin: '0 auto',
          position: 'relative',
          border: 'var(--border-thick-black)',
          backgroundColor: 'var(--white-pure)',
          backgroundImage: 'radial-gradient(var(--bg-void) 2px, transparent 2px)',
          backgroundSize: '30px 30px',
          boxShadow: 'var(--shadow-brutal-cyan)'
        }}
      >
        {/* Placeholder Photos */}
        <div style={{ position: 'absolute', top: '10%', left: '10%', width: '250px', height: '300px', backgroundColor: '#ddd', border: 'var(--border-thick-black)', transform: 'rotate(-5deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }}>
          [INSERT UGLY PHOTO 1]
        </div>
        <div style={{ position: 'absolute', top: '20%', right: '15%', width: '300px', height: '200px', backgroundColor: '#ccc', border: 'var(--border-thick-black)', transform: 'rotate(8deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }}>
          [INSERT CRINGE PHOTO 2]
        </div>
        <div style={{ position: 'absolute', bottom: '15%', left: '30%', width: '200px', height: '200px', backgroundColor: '#bbb', border: 'var(--border-thick-black)', transform: 'rotate(-2deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }}>
          [INSERT WEIRD PHOTO 3]
        </div>

        {/* Draggable Stickers */}
        {!nuked && (
          <>
            <Sticker color="pink" initialX={50} initialY={50} rotate={-10}>
              <span style={{ fontSize: '40px', lineHeight: 1 }}>🚽</span>
              <span className="font-marker ml-2 text-black font-bold text-xl">YAK YAK YEY</span>
            </Sticker>
            
            <Sticker color="yellow" initialX={600} initialY={30} rotate={15}>
              <Skull size={40} color="var(--bg-void)" />
              <span className="font-marker ml-2 text-black font-bold text-xl">RIP</span>
            </Sticker>
            
            <Sticker color="cyan" initialX={800} initialY={300} rotate={-5}>
              <span style={{ fontSize: '40px', lineHeight: 1 }}>💩</span>
              <span className="font-marker ml-2 text-black font-bold text-xl">UCUK</span>
            </Sticker>

            <Sticker color="black-bg" initialX={100} initialY={400} rotate={8}>
              <Heart size={40} color="var(--pink-scream)" />
              <span className="font-marker ml-2 text-white font-bold text-xl">TAK MANDI</span>
            </Sticker>
            
            <Sticker color="white-bg" initialX={400} initialY={350} rotate={-12}>
              <Zap size={40} color="var(--yellow-hazard)" />
              <span className="font-marker ml-2 text-black font-bold text-xl">WTF</span>
            </Sticker>
          </>
        )}

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
