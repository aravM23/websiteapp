import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#1a1a1a', borderTop: '1px solid #333', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ 
          color: '#b4b4b4', 
          fontSize: '1rem', 
          margin: '0',
          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
          fontStyle: 'italic',
          letterSpacing: '0.01em'
        }}>
          made with love and redbull from my waterloo dorm room
        </p>
      </div>
    </footer>
  );
};

export default Footer;