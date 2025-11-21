import React, { useEffect, useState } from 'react';

interface Track {
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
  playedAt: string;
}

const SpotifyRecentlyPlayed: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [topTracks, setTopTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        // Fetch recently played
        const recentResponse = await fetch('/api/spotify');
        const recentData = await recentResponse.json();
        
        // Fetch top tracks
        const topResponse = await fetch('/api/spotify?type=top');
        const topData = await topResponse.json();
        
        if (recentData.tracks && recentData.tracks.length > 0) {
          setTracks(recentData.tracks);
        }
        
        if (topData.tracks && topData.tracks.length > 0) {
          setTopTracks(topData.tracks);
        }
        
        if ((!recentData.tracks || recentData.tracks.length === 0) && 
            (!topData.tracks || topData.tracks.length === 0)) {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching Spotify data:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchSpotifyData();
  }, []);

  if (loading) {
    return (
      <section style={{ padding: '80px 20px', backgroundColor: '#0a0a0a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: '800',
            color: '#ffffff',
            marginBottom: '48px',
            letterSpacing: '-0.02em',
            textTransform: 'lowercase',
          }}>
            recently played
          </h2>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            color: '#b0b0b0',
            fontSize: '1.1rem'
          }}>
            <div style={{
              width: '20px',
              height: '20px',
              border: '3px solid rgba(255, 255, 255, 0.3)',
              borderTop: '3px solid #ffffff',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
            Loading tracks...
          </div>
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </section>
    );
  }

  if (error || tracks.length === 0) {
    return null; // Don't show section if no data
  }

  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#0a0a0a', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 2.5rem)',
          fontWeight: '800',
          color: '#ffffff',
          marginBottom: '48px',
          textAlign: 'center',
          letterSpacing: '-0.02em',
          textTransform: 'lowercase',
        }}>
          live spotify tracker lol
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {tracks.map((track, index) => (
            <a
              key={`${track.songUrl}-${index}`}
              href={track.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 20px',
                backgroundColor: 'rgba(20, 20, 20, 0.6)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(4px)';
                e.currentTarget.style.borderColor = 'rgba(30, 215, 96, 0.5)';
                e.currentTarget.style.backgroundColor = 'rgba(30, 20, 20, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.backgroundColor = 'rgba(20, 20, 20, 0.6)';
              }}
            >
              <div style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#888888',
                minWidth: '32px',
                textAlign: 'center'
              }}>
                {index + 1}
              </div>
              
              {track.albumImageUrl && (
                <img
                  src={track.albumImageUrl}
                  alt={`${track.album} cover`}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '6px',
                    objectFit: 'cover',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                  }}
                />
              )}
              
              <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minWidth: 0
              }}>
                <h3 style={{
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  margin: '0 0 4px 0',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {track.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#b0b0b0',
                  margin: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {track.artist}
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                color: 'rgba(30, 215, 96, 0.8)',
                fontSize: '20px',
                paddingRight: '8px'
              }}>
                ▶
              </div>
            </a>
          ))}
        </div>

        {/* Top Tracks Section */}
        {topTracks.length > 0 && (
          <>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '48px',
              marginTop: '80px',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              textTransform: 'lowercase',
            }}>
              top songs of the month
            </h2>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {topTracks.map((track, index) => (
                <a
                  key={`${track.songUrl}-${index}`}
                  href={track.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px 20px',
                    backgroundColor: 'rgba(20, 20, 20, 0.6)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 215, 0, 0.2)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(4px)';
                    e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.5)';
                    e.currentTarget.style.backgroundColor = 'rgba(30, 20, 20, 0.7)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.2)';
                    e.currentTarget.style.backgroundColor = 'rgba(20, 20, 20, 0.6)';
                  }}
                >
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: '#FFD700',
                    minWidth: '32px',
                    textAlign: 'center'
                  }}>
                    {index + 1}
                  </div>
                  
                  {track.albumImageUrl && (
                    <img
                      src={track.albumImageUrl}
                      alt={`${track.album} cover`}
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '6px',
                        objectFit: 'cover',
                        flexShrink: 0,
                        boxShadow: '0 4px 12px rgba(255, 215, 0, 0.2)'
                      }}
                    />
                  )}
                  
                  <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    minWidth: 0
                  }}>
                    <h3 style={{
                      fontSize: '1.05rem',
                      fontWeight: '600',
                      color: '#ffffff',
                      margin: '0 0 4px 0',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {track.title}
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#b0b0b0',
                      margin: 0,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {track.artist}
                    </p>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'rgba(255, 215, 0, 0.8)',
                    fontSize: '20px',
                    paddingRight: '8px'
                  }}>
                    ▶
                  </div>
                </a>
              ))}
            </div>
          </>
        )}

        <div style={{
          marginTop: '40px',
          textAlign: 'center'
        }}>
          <a
            href="https://open.spotify.com/user/h85k4crnf27w61e7wynzb6iti"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              backgroundColor: 'rgba(30, 215, 96, 0.1)',
              border: '1px solid rgba(30, 215, 96, 0.3)',
              borderRadius: '24px',
              color: 'rgba(30, 215, 96, 1)',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(30, 215, 96, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(30, 215, 96, 0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(30, 215, 96, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(30, 215, 96, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            drop a follow on spotify
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SpotifyRecentlyPlayed;
