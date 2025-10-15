import React from 'react';
import Layout from '../src/components/Layout';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <Layout title="Arav Mathur">
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        padding: '40px 20px',
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
          {/* Mac Terminal - Full Width */}
          <div style={{ marginBottom: '80px' }}>
              {/* Mac-style Terminal Window */}
              <div style={{
                backgroundColor: '#1e1e1e',
                borderRadius: '16px',
                border: '2px solid #333',
                overflow: 'hidden',
                marginBottom: '32px',
                width: '100%',
                maxWidth: 'none',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                minHeight: '500px'
              }}>
                {/* Terminal Header with Mac Buttons */}
                <div style={{
                  backgroundColor: '#2a2a2a',
                  padding: '12px 16px',
                  borderBottom: '1px solid #333',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#ff5f57'
                  }}></div>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#ffbd2e'
                  }}></div>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#28ca42'
                  }}></div>
                  <div style={{
                    marginLeft: '16px',
                    fontSize: '13px',
                    color: '#8a8a8a',
                    fontFamily: 'Monaco, monospace'
                  }}>
                    arav@portfolio ~ %
                  </div>
                </div>
                
                {/* Terminal Content */}
                <div style={{ 
                  padding: '50px',
                  fontFamily: 'SF Mono, Monaco, Consolas, monospace',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#00ff00',
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  {/* Terminal Prompt */}
                  <div style={{ marginBottom: '2rem', color: '#888' }}>
                    <span style={{ color: '#00ff00' }}>arav@portfolio</span>
                    <span style={{ color: '#888' }}>:</span>
                    <span style={{ color: '#5599ff' }}>~</span>
                    <span style={{ color: '#888' }}>$ </span>
                    <span style={{ color: '#fff' }}>whoami</span>
                  </div>

                  {/* Typing Animation for Title */}
                  <div style={{ marginBottom: '40px' }}>
                    <style dangerouslySetInnerHTML={{
                      __html: `
                        @keyframes typewriter {
                          0% { width: 0ch; }
                          100% { width: 19ch; }
                        }
                        
                        @keyframes blink {
                          0%, 50% { border-right-color: #00ff00; }
                          51%, 100% { border-right-color: transparent; }
                        }
                        
                        .typewriter-text {
                          display: inline-block;
                          overflow: hidden;
                          white-space: nowrap;
                          border-right: 3px solid #00ff00;
                          width: 0;
                          animation: typewriter 4s steps(19) 0.5s forwards, blink 1s step-end infinite;
                        }
                      `
                    }} />
                    <h1 style={{ 
                      fontSize: 'clamp(3rem, 7vw, 5rem)', 
                      fontWeight: '900', 
                      lineHeight: '1.0',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      position: 'relative',
                      width: '100%',
                      textAlign: 'center'
                    }}>
                      <span className="typewriter-text">
                        Hi, this is Arav :)
                      </span>
                    </h1>
                  </div>
                  
                  <p style={{ 
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
                    marginBottom: '24px',
                    color: '#94a3b8',
                    lineHeight: '1.4',
                    fontWeight: '500',
                    letterSpacing: '-0.01em'
                  }}>
                    I am an <strong style={{ color: '#60a5fa', textShadow: '0 0 10px rgba(96, 165, 250, 0.3)' }}>18-year-old</strong> from <strong style={{ color: '#f59e0b', textShadow: '0 0 10px rgba(245, 158, 11, 0.3)' }}>Toronto, Ontario</strong>, interested in making and shipping <strong style={{ color: '#10b981', textShadow: '0 0 10px rgba(16, 185, 129, 0.3)' }}>cool shit</strong>. My goals with each of my projects is to ensure that each project delivers <strong style={{ color: '#ef4444', textShadow: '0 0 10px rgba(239, 68, 68, 0.3)' }}>value to society</strong>, and if it doesn't, its probably just something I really really want to use myself <span style={{ fontSize: '1.2em' }}>😄</span>
                  </p>
                  
                  <p style={{ 
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', 
                    marginBottom: '60px',
                    color: '#64748b',
                    lineHeight: '1.4',
                    fontWeight: '400',
                    letterSpacing: '-0.01em'
                  }}>
                    I dream of making <strong style={{ color: '#8b5cf6', textShadow: '0 0 10px rgba(139, 92, 246, 0.3)' }}>something one day</strong> that a bunch of people actually <strong style={{ color: '#06b6d4', textShadow: '0 0 10px rgba(6, 182, 212, 0.3)' }}>use and love</strong>.
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    gap: '20px',
                    flexWrap: 'wrap',
                    marginTop: '40px'
                  }}>
                    <Link 
                      href="/client" 
                      style={{
                        background: '#ffffff',
                        color: '#000000',
                        padding: '18px 36px',
                        border: 'none',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '1.2rem',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'inline-block',
                        boxShadow: '0 4px 20px rgba(255,255,255,0.1)',
                        transform: 'translateY(0)',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(255,255,255,0.2)';
                        e.currentTarget.style.background = '#f0f0f0';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,255,255,0.1)';
                        e.currentTarget.style.background = '#ffffff';
                      }}
                    >
                      <span style={{ 
                        display: 'inline-block',
                        transition: 'transform 0.2s ease'
                      }}>
                        View my work
                      </span>
                    </Link>
                    <Link 
                      href="/contact" 
                      style={{
                        background: 'transparent',
                        color: '#ffffff',
                        padding: '18px 36px',
                        border: '2px solid #666',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '1.2rem',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'inline-block',
                        transform: 'translateY(0)',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.borderColor = '#00ff00';
                        e.currentTarget.style.color = '#00ff00';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,255,0,0.2)';
                        e.currentTarget.style.background = 'rgba(0,255,0,0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = '#666';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <span style={{ 
                        display: 'inline-block',
                        transition: 'transform 0.2s ease'
                      }}>
                        Get in touch
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
          </div>
          
          {/* Profile Images - Below Terminal */}
          <div style={{ 
            display: 'flex', 
            gap: '40px', 
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '60px'
          }}>
            {/* Profile Image 1 - Striped Shirt */}
            <div style={{ 
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
              transform: 'rotate(-3deg)',
              border: '3px solid #333',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src="/images/arav-profile-1.jpg" 
                alt="Arav Mathur - Striped Shirt"
                style={{
                  width: '320px',
                  height: '420px',
                  objectFit: 'cover' as const,
                  display: 'block'
                }}
              />
            </div>

            {/* Profile Image 2 - Orange Shirt */}
            <div style={{ 
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
              transform: 'rotate(3deg)',
              marginTop: '40px',
              border: '3px solid #333',
              transition: 'transform 0.3s ease'
            }}>
              <img 
                src="/images/arav-profile-2.jpg" 
                alt="Arav Mathur - Orange Shirt"
                style={{
                  width: '320px',
                  height: '400px',
                  objectFit: 'cover' as const,
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>

      </section>

      {/* About Section */}
      <section style={{
        padding: '80px 20px',
        background: '#111111',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            padding: '40px',
            border: '1px solid #333',
            textAlign: 'center'
          }}>
            <div style={{ marginBottom: '40px' }}>
              <p style={{ 
                fontSize: '1.4rem', 
                color: '#ffffff', 
                marginBottom: '16px',
                fontWeight: '600'
              }}>
                Hi I am Arav Mathur!
              </p>
              <p style={{ 
                fontSize: '1.3rem', 
                color: '#60a5fa', 
                marginBottom: '16px',
                fontWeight: '700'
              }}>
                CS @ Waterloo.
              </p>
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#b4b4b4', 
                marginBottom: '32px',
                fontStyle: 'italic'
              }}>
                I&apos;m probably working on building something I find cool :)
              </p>
            </div>
            
            <div style={{ 
              borderTop: '1px solid #333',
              paddingTop: '32px'
            }}>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#b4b4b4', 
                lineHeight: '1.8',
                maxWidth: '800px',
                margin: '0 auto 32px auto'
              }}>
                I just wrapped up a SWE internship at Aview International, a Toronto startup for AI translations and content dubbing (projects with brands like Marvel and creators like Logan Paul). I also founded TurtleShell, a tourism safety app backed with $26,000 from Microsoft plus support from the Government of Canada. I&apos;m now a first-year CS student at Waterloo and just shipped my latest project GrayPass, a passwordless auth engine that uses cognitive and behavioral signals to verify your identity, helping us get away from infinite authentication loops and captcha bs. Most of my free time is spent deep researching the online shopping space for my next dope idea 😄
              </p>
              
              <Link 
                href="/projects"
                style={{ 
                  background: '#ffffff',
                  color: '#000000',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px'
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who Am I Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#0a0a0a',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            backgroundColor: '#1a1a1a', 
            borderRadius: '12px', 
            padding: '40px', 
            border: '1px solid #333',
            textAlign: 'center' 
          }}>
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '600', 
                marginBottom: '24px',
                color: '#ffffff'
              }}>
                Fun Facts About Me
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#b4b4b4', 
                lineHeight: '1.8',
                maxWidth: '900px',
                margin: '0 auto'
              }}>
                i&apos;ve published two dystopian novels on kindle. i&apos;m a research assistant at u of t with dr. brad bass (ipcc nobel peace prize team). i also started positive powers, my nonprofit that&apos;s raised $15,000 to run positivity projects across two continents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{ 
        padding: '80px 20px', 
        backgroundColor: '#111111', 
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            padding: '40px',
            border: '1px solid #333'
          }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '600', 
              marginBottom: '24px',
              color: '#ffffff'
            }}>
              I would love to work with you
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              marginBottom: '32px',
              color: '#b4b4b4'
            }}>
              want to build something together? msg me
            </p>
            <Link 
              href="/contact" 
              style={{ 
                backgroundColor: '#ffffff', 
                color: '#000000', 
                padding: '12px 24px', 
                borderRadius: '6px', 
                fontWeight: '500',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '14px'
              }}
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
