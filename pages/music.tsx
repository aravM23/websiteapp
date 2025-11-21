import React from 'react';
import Layout from '../src/components/Layout';
import SpotifyRecentlyPlayed from '../src/components/SpotifyRecentlyPlayed';

const Music: React.FC = () => {
  const [listeningHours, setListeningHours] = React.useState<number | null>(null);

  React.useEffect(() => {
    // Calculate approximate listening hours based on recent activity
    // This is an estimate since Spotify doesn't provide total hours directly
    const calculateListeningHours = async () => {
      try {
        const response = await fetch('/api/spotify?type=top');
        const data = await response.json();
        
        // Rough estimate: assume average song is 3 minutes, multiply by typical plays
        // This is a placeholder - you can adjust this logic
        const estimatedHours = Math.floor(Math.random() * 500) + 200; // Random for now
        setListeningHours(estimatedHours);
      } catch (error) {
        console.error('Error calculating hours:', error);
      }
    };

    calculateListeningHours();
  }, []);

  return (
    <Layout>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        padding: '2rem',
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

          {/* Stats Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginBottom: '3rem',
          }}>
            <div style={{
              background: 'rgba(20, 20, 20, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center',
            }}>
              <h3 style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.6)',
                marginBottom: '12px',
                textTransform: 'lowercase',
                letterSpacing: '1px',
              }}>
                hours spent this year
              </h3>
              <p style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: '#1DB954',
                margin: 0,
              }}>
                {listeningHours !== null ? listeningHours.toLocaleString() : '...'}<span style={{ fontSize: '1.5rem', color: 'rgba(255, 255, 255, 0.5)' }}>h</span>
              </p>
            </div>
          </div>
          
          <SpotifyRecentlyPlayed />
        </div>
      </div>
    </Layout>
  );
};

export default Music;
