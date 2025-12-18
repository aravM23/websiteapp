import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      backgroundColor: '#0d0d0d', 
      borderTop: '4px solid #DC0000', 
      padding: '40px 16px 50px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Tire track marks background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.03,
        background: `
          repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 45%,
            #fff 45%,
            #fff 45.5%,
            transparent 45.5%,
            transparent 54.5%,
            #fff 54.5%,
            #fff 55%,
            transparent 55%
          )
        `,
        pointerEvents: 'none',
      }} />
      
      {/* Checkered finish line at bottom */}
      <div className="checkered-footer" style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '16px',
        background: `repeating-conic-gradient(
          from 0deg,
          #1a1a1a 0deg 90deg,
          #2a2a2a 90deg 180deg
        )`,
        backgroundSize: '16px 16px',
      }} />
      
      {/* Kerb stripe at top of footer */}
      <div style={{
        position: 'absolute',
        top: '4px',
        left: 0,
        right: 0,
        height: '6px',
        background: `repeating-linear-gradient(
          90deg,
          #DC0000 0px,
          #DC0000 15px,
          #fff 15px,
          #fff 30px
        )`,
        opacity: 0.5,
      }} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1, padding: '0 8px' }}>
        <p style={{ 
          color: '#777', 
          fontSize: 'clamp(0.85rem, 3vw, 1rem)', 
          margin: '0',
          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
          fontStyle: 'italic',
          letterSpacing: '0.02em',
          lineHeight: 1.5,
        }}>
          made with love and redbull from my waterloo dorm room
        </p>
      </div>
    </footer>
  );
};

export default Footer;