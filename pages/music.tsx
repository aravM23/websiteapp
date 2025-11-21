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
        padding: '2rem',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingTop: '2rem',
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            textTransform: 'lowercase',
          }}>
            what i'm listening to
          </h1>
          
          <SpotifyRecentlyPlayed />

          {/* Stats Card - Moved to bottom */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '4rem',
            marginBottom: '3rem',
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(29, 185, 84, 0.2) 0%, rgba(30, 215, 96, 0.15) 100%)',
              border: '2px solid rgba(29, 185, 84, 0.5)',
              borderRadius: '32px',
              padding: '56px 100px',
              textAlign: 'center',
              boxShadow: '0 25px 80px rgba(29, 185, 84, 0.4), 0 0 100px rgba(29, 185, 84, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)',
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
                <p style={{
                  fontSize: '0.85rem',
                  color: '#ffffff',
                  marginBottom: '24px',
                  textTransform: 'uppercase',
                  letterSpacing: '4px',
                  fontWeight: '700',
                  opacity: 0.95,
                }}>
                  total minutes listening to spotify this year (im an addict)
                </p>
                <div>
                  <span style={{
                    fontSize: '5.5rem',
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #1DB954 0%, #1ed760 50%, #1DB954 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                    letterSpacing: '-4px',
                    filter: 'drop-shadow(0 0 20px rgba(29, 185, 84, 0.6))',
                  }}>
                    {minutesListened.toLocaleString()}
                  </span>
                  <span className="loading-ellipsis" style={{
                    fontSize: '5.5rem',
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #1DB954 0%, #1ed760 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginLeft: '8px',
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
          `}</style>
        </div>
      </div>
    </Layout>
  );
};

export default Music;
