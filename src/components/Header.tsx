import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.98) 0%, rgba(10, 10, 10, 0.95) 100%)',
        borderBottom: '2px solid rgba(220, 0, 0, 0.4)',
        padding: '0.75rem 1rem',
        backdropFilter: 'blur(12px)',
      }}>
        <nav style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Link 
            href="/" 
            style={{
              fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
              fontWeight: '700',
              color: '#ffffff',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            Arav Mathur 🏎️
          </Link>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
          }}
          className="desktop-nav">
            <Link 
              href="/projects" 
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                padding: '0.65rem 1.25rem',
                borderRadius: '6px',
                background: 'transparent',
                border: '2px solid rgba(220, 0, 0, 0.3)',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                letterSpacing: '0.3px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(220, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#DC0000';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(220, 0, 0, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Projects and Experience
            </Link>

            <Link 
              href="/client" 
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                padding: '0.65rem 1.25rem',
                borderRadius: '6px',
                background: 'transparent',
                border: '2px solid rgba(220, 0, 0, 0.3)',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                letterSpacing: '0.3px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(220, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#DC0000';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(220, 0, 0, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Awards and Recognition
            </Link>

            <Link 
              href="/music" 
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                padding: '0.65rem 1.25rem',
                borderRadius: '6px',
                background: 'transparent',
                border: '2px solid rgba(220, 0, 0, 0.3)',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                letterSpacing: '0.3px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(220, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#DC0000';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(220, 0, 0, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              What I'm Listening To
            </Link>

            <Link 
              href="/reels" 
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                padding: '0.65rem 1.25rem',
                borderRadius: '6px',
                background: 'transparent',
                border: '2px solid rgba(220, 0, 0, 0.3)',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                letterSpacing: '0.3px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(220, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#DC0000';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(220, 0, 0, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              My Reels
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: menuOpen ? 'rgba(220, 0, 0, 0.2)' : 'transparent',
              border: '2px solid rgba(220, 0, 0, 0.5)',
              color: '#ffffff',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.6rem 0.9rem',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              minWidth: '48px',
              minHeight: '48px',
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div 
            className="mobile-menu"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '10px',
              marginTop: '1rem',
              padding: '16px',
              background: 'rgba(15, 15, 15, 0.98)',
              borderRadius: '12px',
              border: '2px solid rgba(220, 0, 0, 0.3)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
            }}
          >
            <Link 
              href="/projects"
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                padding: '14px 16px',
                borderRadius: '8px',
                background: 'rgba(220, 0, 0, 0.08)',
                border: '1px solid rgba(220, 0, 0, 0.2)',
                fontSize: '1rem',
                fontWeight: '500',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              Projects and Experience
            </Link>

            <Link 
              href="/client"
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                padding: '14px 16px',
                borderRadius: '8px',
                background: 'rgba(220, 0, 0, 0.08)',
                border: '1px solid rgba(220, 0, 0, 0.2)',
                fontSize: '1rem',
                fontWeight: '500',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              Awards and Recognition
            </Link>

            <Link 
              href="/music"
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                padding: '14px 16px',
                borderRadius: '8px',
                background: 'rgba(220, 0, 0, 0.08)',
                border: '1px solid rgba(220, 0, 0, 0.2)',
                fontSize: '1rem',
                fontWeight: '500',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              What I'm Listening To
            </Link>

            <Link 
              href="/reels"
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                padding: '14px 16px',
                borderRadius: '8px',
                background: 'rgba(220, 0, 0, 0.08)',
                border: '1px solid rgba(220, 0, 0, 0.2)',
                fontSize: '1rem',
                fontWeight: '500',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              My Reels
            </Link>
          </div>
        )}
      </header>

      {/* CSS for responsive behavior */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }
      `}</style>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div style={{ height: '80px' }} />
    </>
  );
};

export default Header;
