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
        fontFamily: '"Times New Roman", Times, serif',
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
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(29, 185, 84, 0.15) 0%, rgba(30, 215, 96, 0.1) 100%)',
              border: '2px solid rgba(29, 185, 84, 0.4)',
              borderRadius: '24px',
              padding: '48px 80px',
              textAlign: 'center',
              boxShadow: '0 20px 60px rgba(29, 185, 84, 0.3), 0 0 80px rgba(29, 185, 84, 0.1)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Decorative background elements */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(29, 185, 84, 0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#ffffff',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  fontWeight: '700',
                  opacity: 0.9,
                }}>
                  total minutes listening to spotify this year (im an addict)
                </p>
                <p style={{
                  fontSize: '5rem',
                  fontWeight: '900',
                  background: 'linear-gradient(135deg, #1DB954 0%, #1ed760 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  margin: 0,
                  lineHeight: 1,
                  letterSpacing: '-3px',
                  textShadow: '0 0 40px rgba(29, 185, 84, 0.5)',
                }}>
                  {minutesListened.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Music;
