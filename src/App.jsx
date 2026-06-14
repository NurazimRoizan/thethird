import React, { useState } from 'react';
import Hero from './components/Hero';
import AuditSection from './components/AuditSection';
import EvidenceRoom from './components/EvidenceRoom';
import SlotMachine from './components/SlotMachine';
import Contract from './components/Contract';

function App() {
  const [contractUnlocked, setContractUnlocked] = useState(false);

  return (
    <>
      <div className="crt-overlay"></div>
      <main style={{ width: '100%', minHeight: '100vh', paddingBottom: contractUnlocked ? '0' : '10rem' }}>
        <Hero />
        <AuditSection />
        <EvidenceRoom />
        <SlotMachine onJackpot={() => setContractUnlocked(true)} />
        {contractUnlocked && <Contract />}
      </main>
    </>
  );
}

export default App;
