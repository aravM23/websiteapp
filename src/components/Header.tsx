import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '/projects', label: 'Projects and Experience' },
  { href: '/client', label: 'Awards and Recognition' },
  { href: '/contact', label: 'Contact Me' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      if (window.innerWidth > 880) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(26, 26, 26, 0.92);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .site-header__inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .site-header__brand {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 1.6rem;
          font-weight: 700;
          text-decoration: none;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          letter-spacing: -0.02em;
          transition: transform 0.2s ease, text-shadow 0.2s ease;
        }

        .site-header__brand:hover {
          transform: translateY(-1px) scale(1.02);
          text-shadow: 0 0 16px rgba(255, 255, 255, 0.35);
        }

        .site-header__nav {
          display: flex;
          align-items: center;
          gap: 28px;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .site-header__link {
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 600;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          transition: color 0.2s ease, text-shadow 0.2s ease;
          white-space: nowrap;
        }

        .site-header__link:hover {
          color: #ffffff !important;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.45);
        }

        .site-header__burger {
          display: none;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          transition: background 0.2s ease, border 0.2s ease;
        }
@@
            pointer-events: auto;
          }

          .site-header__link {
            width: 100%;
            text-align: right;
            padding: 6px 0;
          }
        }
      `}</style>
      <div className="site-header__inner">
        <Link
          href="/"
          className="site-header__brand"
          style={{ color: '#ffffff' }}
        >
          Arav Mathur <span role="img" aria-label="cool">😎</span>
        </Link>
        <button
          type="button"
          className="site-header__burger"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`site-header__nav ${menuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="site-header__link"
              style={{ color: '#d1d5db' }}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
