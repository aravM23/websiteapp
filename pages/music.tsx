import React from 'react';
import Layout from '../src/components/Layout';
import SpotifyRecentlyPlayed from '../src/components/SpotifyRecentlyPlayed';

const Music: React.FC = () => {
  const minutesListened = 77627;

  return (
    <Layout>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        padding: '2rem 1rem',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingTop: '1rem',
        }}>
          <h1 className="music-title" style={{
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: '700',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            textTransform: 'lowercase',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}>
            <svg className="spotify-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" fill="#1DB954"/>
            </svg>
            what i'm listening to
          </h1>
          
          <SpotifyRecentlyPlayed />

          {/* Stats Card - Moved to bottom */}
          <div className="stats-card-container" style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3rem',
            marginBottom: '2rem',
            padding: '0 0.5rem',
          }}>
            <div className="stats-card" style={{
              background: 'linear-gradient(135deg, rgba(29, 185, 84, 0.2) 0%, rgba(30, 215, 96, 0.15) 100%)',
              border: '2px solid rgba(29, 185, 84, 0.5)',
              borderRadius: '24px',
              padding: 'clamp(32px, 5vw, 56px) clamp(24px, 6vw, 100px)',
              textAlign: 'center',
              boxShadow: '0 25px 80px rgba(29, 185, 84, 0.4), 0 0 100px rgba(29, 185, 84, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)',
              width: '100%',
              maxWidth: '600px',
            }}>
              {/* Decorative background elements */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(29, 185, 84, 0.2) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              
              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '20%',
                right: '20%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(29, 185, 84, 0.8), transparent)',
              }} />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p className="stats-label" style={{
                  fontSize: 'clamp(0.65rem, 2vw, 0.85rem)',
                  color: '#ffffff',
                  marginBottom: 'clamp(12px, 3vw, 24px)',
                  textTransform: 'uppercase',
                  letterSpacing: 'clamp(1px, 0.5vw, 4px)',
                  fontWeight: '700',
                  opacity: 0.95,
                  lineHeight: 1.4,
                }}>
                  total minutes listening to spotify this year (im an addict)
                </p>
                <div className="stats-number-container">
                  <span className="stats-number" style={{
                    fontSize: 'clamp(2.5rem, 10vw, 5.5rem)',
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #1DB954 0%, #1ed760 50%, #1DB954 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                    letterSpacing: 'clamp(-2px, -0.5vw, -4px)',
                    filter: 'drop-shadow(0 0 20px rgba(29, 185, 84, 0.6))',
                    display: 'inline-block',
                  }}>
                    {minutesListened.toLocaleString()}
                  </span>
                  <span className="loading-ellipsis" style={{
                    fontSize: 'clamp(2.5rem, 10vw, 5.5rem)',
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #1DB954 0%, #1ed760 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginLeft: '4px',
                  }} />
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .loading-ellipsis::after {
              content: '...';
              display: inline-block;
              animation: ellipsisPulse 1.2s infinite steps(3, end);
            }

            @keyframes ellipsisPulse {
              0% { content: ''; }
              33% { content: '.'; }
              66% { content: '..'; }
              100% { content: '...'; }
            }

            @media (max-width: 480px) {
              .spotify-icon {
                width: 32px !important;
                height: 32px !important;
              }
            }
          `}</style>
        </div>
      </div>
    </Layout>
  );
};

export default Music;
