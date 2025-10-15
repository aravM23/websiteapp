import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header style={{ 
      backgroundColor: '#1a1a1a', 
      borderBottom: '1px solid #333',
      position: 'sticky', 
      top: 0, 
      zIndex: 1000 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" style={{ 
              fontSize: '1.6rem', 
              fontWeight: '700', 
              color: '#ffffff', 
              textDecoration: 'none',
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              letterSpacing: '-0.02em',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.textShadow = '0 0 15px rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.textShadow = 'none';
            }}>
              Arav Mathur 😎
            </Link>
          </div>
          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <Link href="/projects" style={{ 
              color: '#d1d5db', 
              textDecoration: 'none', 
              fontSize: '0.875rem', 
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              transition: 'all 0.3s ease',
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              padding: '8px 0',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#d1d5db';
              e.currentTarget.style.textShadow = 'none';
            }}>
              PROJECTS AND EXPERIENCE
            </Link>
            <Link href="/client" style={{ 
              color: '#d1d5db', 
              textDecoration: 'none', 
              fontSize: '0.875rem', 
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              transition: 'all 0.3s ease',
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              padding: '8px 0',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#d1d5db';
              e.currentTarget.style.textShadow = 'none';
            }}>
              AWARDS AND RECOGNITION
            </Link>
            <Link href="/contact" style={{ 
              color: '#d1d5db', 
              textDecoration: 'none', 
              fontSize: '0.875rem', 
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              transition: 'all 0.3s ease',
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              padding: '8px 0',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#d1d5db';
              e.currentTarget.style.textShadow = 'none';
            }}>
              CONTACT ME
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
