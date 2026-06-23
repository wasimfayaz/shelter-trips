'use client';

import { useEffect } from 'react';

export default function CabRentalPage() {
  useEffect(() => {
    window.location.replace('/#cabs');
  }, []);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#c5a880',
      fontFamily: 'sans-serif',
      fontSize: '14px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }}>
      Redirecting to Cabs Section...
    </div>
  );
}

