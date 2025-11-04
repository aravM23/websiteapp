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
        background: '#0a0a0a',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '1rem 2rem',
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
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#ffffff',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            Arav Mathur 😎
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
                border: '2px solid rgba(255, 255, 255, 0.2)',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                letterSpacing: '0.3px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
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
                border: '2px solid rgba(255, 255, 255, 0.2)',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                letterSpacing: '0.3px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Awards and Recognition
            </Link>

            <Link 
              href="/contact" 
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                padding: '0.65rem 1.25rem',
                borderRadius: '6px',
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                letterSpacing: '0.3px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'transparent',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem 0.75rem',
              borderRadius: '6px',
              transition: 'all 0.3s ease',
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
              gap: '0.75rem',
              marginTop: '1rem',
              padding: '1rem',
              background: 'rgba(20, 20, 20, 0.98)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Link 
              href="/projects"
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                fontSize: '0.95rem',
                fontWeight: '500',
                textAlign: 'center',
                transition: 'all 0.3s ease',
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
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                fontSize: '0.95rem',
                fontWeight: '500',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
            >
              Awards and Recognition
            </Link>

            <Link 
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                fontSize: '0.95rem',
                fontWeight: '500',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
            >
              Contact Me
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
