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
              <div 
                style={{
                  backgroundColor: '#1e1e1e',
                  borderRadius: '16px',
                  border: '2px solid #333',
                  overflow: 'hidden',
                  marginBottom: '32px',
                  width: '100%',
                  maxWidth: 'none',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                  minHeight: '500px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 40px 100px rgba(0,0,0,0.8)';
                  e.currentTarget.style.borderColor = '#00ff00';
                  e.currentTarget.style.backgroundColor = '#232323';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)';
                  e.currentTarget.style.borderColor = '#333';
                  e.currentTarget.style.backgroundColor = '#1e1e1e';
                }}
              >
                {/* Terminal Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 16px',
                  backgroundColor: '#2d2d2d',
                  borderRadius: '16px 16px 0 0',
                  borderBottom: '1px solid #333'
                }}>
                  {/* Window Controls */}
                  <div style={{ display: 'flex', gap: '8px', marginRight: '12px' }}>
                    <div 
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#ff5f57',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                        e.currentTarget.style.boxShadow = '0 0 6px rgba(255, 95, 87, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    ></div>
                    <div 
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#ffbd2e',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                        e.currentTarget.style.boxShadow = '0 0 6px rgba(255, 189, 46, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    ></div>
                    <div 
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#28ca42',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                        e.currentTarget.style.boxShadow = '0 0 6px rgba(40, 202, 66, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    ></div>
                  </div>
                  
                  {/* Terminal Title */}
                  <div style={{
                    fontSize: '13px',
                    color: '#888',
                    fontFamily: 'SF Pro Display, system-ui, sans-serif',
                    fontWeight: '500'
                  }}>
                    arav@portfolio ~ %
                  </div>
                </div>                {/* Terminal Content */}
                <div style={{ 
                  padding: '50px',
                  fontFamily: 'SF Mono, Monaco, Consolas, monospace',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#00ff00',
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  {/* Floating Emojis Around Title */}
        {/* Floating Emojis around the title */}
        <div className="floating-emojis" style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}>
          {/* Top center */}
          <span style={{ position: 'absolute', left: '50%', top: '60px', transform: 'translateX(-50%)', fontSize: '1.2rem', animation: 'float1 4s ease-in-out infinite' }}>💻</span>
          
          {/* Top-right diagonal */}
          <span style={{ position: 'absolute', left: '70%', top: '80px', fontSize: '1.1rem', animation: 'float2 4s ease-in-out infinite 0.5s' }}>🚀</span>
          
          {/* Right side */}
          <span style={{ position: 'absolute', left: '80%', top: '140px', fontSize: '1.2rem', animation: 'float3 4s ease-in-out infinite 1s' }}>⚡</span>
          
          {/* Bottom-right diagonal */}
          <span style={{ position: 'absolute', left: '70%', top: '210px', fontSize: '1.1rem', animation: 'float4 4s ease-in-out infinite 1.5s' }}>🎯</span>
          
          {/* Bottom center */}
          <span style={{ position: 'absolute', left: '50%', top: '230px', transform: 'translateX(-50%)', fontSize: '1.2rem', animation: 'float5 4s ease-in-out infinite 2s' }}>💡</span>
          
          {/* Bottom-left diagonal */}
          <span style={{ position: 'absolute', left: '30%', top: '210px', fontSize: '1.1rem', animation: 'float6 4s ease-in-out infinite 2.5s' }}>🔥</span>
          
          {/* Left side */}
          <span style={{ position: 'absolute', left: '20%', top: '140px', fontSize: '1.2rem', animation: 'float7 4s ease-in-out infinite 3s' }}>⭐</span>
          
          {/* Top-left diagonal */}
          <span style={{ position: 'absolute', left: '30%', top: '80px', fontSize: '1.1rem', animation: 'float8 4s ease-in-out infinite 3.5s' }}>🎨</span>
          
          {/* Additional emojis for fuller circle */}
          {/* Top-right corner */}
          <span style={{ position: 'absolute', left: '75%', top: '100px', fontSize: '1rem', animation: 'float1 4s ease-in-out infinite 0.8s' }}>🌟</span>
          
          {/* Right-bottom */}
          <span style={{ position: 'absolute', left: '75%', top: '180px', fontSize: '1rem', animation: 'float2 4s ease-in-out infinite 1.2s' }}>🎉</span>
          
          {/* Bottom-right corner */}
          <span style={{ position: 'absolute', left: '60%', top: '220px', fontSize: '1rem', animation: 'float3 4s ease-in-out infinite 1.8s' }}>✨</span>
          
          {/* Bottom-left corner */}
          <span style={{ position: 'absolute', left: '40%', top: '220px', fontSize: '1rem', animation: 'float4 4s ease-in-out infinite 2.2s' }}>🎪</span>
          
          {/* Left-bottom */}
          <span style={{ position: 'absolute', left: '25%', top: '180px', fontSize: '1rem', animation: 'float5 4s ease-in-out infinite 2.8s' }}>🎭</span>
          
          {/* Top-left corner */}
          <span style={{ position: 'absolute', left: '25%', top: '100px', fontSize: '1rem', animation: 'float6 4s ease-in-out infinite 3.2s' }}>🎪</span>
          
          {/* Upper positions */}
          <span style={{ position: 'absolute', left: '45%', top: '70px', fontSize: '1rem', animation: 'float7 4s ease-in-out infinite 0.3s' }}>🌈</span>
          <span style={{ position: 'absolute', left: '55%', top: '70px', fontSize: '1rem', animation: 'float8 4s ease-in-out infinite 0.7s' }}>�</span>
        </div>                  {/* Typing Animation for Title */}
                  <div style={{ marginBottom: '40px' }}>
                    <style dangerouslySetInnerHTML={{
                      __html: `
                        @keyframes typewriter {
                          0% { width: 0; }
                          100% { width: 100%; }
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
                          max-width: fit-content;
                        }
                        
                        @keyframes fadeInUp {
                          from {
                            opacity: 0;
                            transform: translateY(30px);
                          }
                          to {
                            opacity: 1;
                            transform: translateY(0px);
                          }
                        }
                        
                        @keyframes slideInLeft {
                          from {
                            opacity: 0;
                            transform: translateX(-50px);
                          }
                          to {
                            opacity: 1;
                            transform: translateX(0px);
                          }
                        }
                        
                        @keyframes slideInRight {
                          from {
                            opacity: 0;
                            transform: translateX(50px);
                          }
                          to {
                            opacity: 1;
                            transform: translateX(0px);
                          }
                        }
                        
                        @keyframes float1 {
                          0%, 100% { transform: translateY(0px) rotate(0deg); }
                          50% { transform: translateY(-20px) rotate(10deg); }
                        }
                        
                        @keyframes float2 {
                          0%, 100% { transform: translateY(0px) rotate(0deg); }
                          50% { transform: translateY(-25px) rotate(-15deg); }
                        }
                        
                        @keyframes float3 {
                          0%, 100% { transform: translateY(0px) rotate(0deg); }
                          50% { transform: translateY(-18px) rotate(8deg); }
                        }
                        
                        @keyframes float4 {
                          0%, 100% { transform: translateY(0px) rotate(0deg); }
                          50% { transform: translateY(-22px) rotate(-12deg); }
                        }
                        
                        @keyframes float5 {
                          0%, 100% { transform: translateY(0px) rotate(0deg); }
                          50% { transform: translateY(-15px) rotate(6deg); }
                        }
                        
                        @keyframes float6 {
                          0%, 100% { transform: translateY(0px) rotate(0deg); }
                          50% { transform: translateY(-28px) rotate(-8deg); }
                        }
                        
                        @keyframes float7 {
                          0%, 100% { transform: translateY(0px) rotate(0deg); }
                          50% { transform: translateY(-12px) rotate(12deg); }
                        }
                        
                        @keyframes float8 {
                          0%, 100% { transform: translateY(0px) rotate(0deg); }
                          50% { transform: translateY(-20px) rotate(-10deg); }
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
                      textAlign: 'center',
                      zIndex: '1'
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
                    letterSpacing: '-0.01em',
                    position: 'relative',
                    zIndex: '10'
                  }}>
                    I am an <strong style={{ color: '#60a5fa', textShadow: '0 0 10px rgba(96, 165, 250, 0.3)' }}>18-year-old</strong> from <strong style={{ color: '#f59e0b', textShadow: '0 0 10px rgba(245, 158, 11, 0.3)' }}>Toronto, Ontario</strong>, interested in making and shipping <strong style={{ color: '#10b981', textShadow: '0 0 10px rgba(16, 185, 129, 0.3)' }}>cool shit</strong>. My goals with each of my projects is to ensure that each project delivers <strong style={{ color: '#ef4444', textShadow: '0 0 10px rgba(239, 68, 68, 0.3)' }}>value to society</strong>, and if it doesn't, its probably just something I really really want to use myself <span style={{ fontSize: '1.2em' }}>😄</span>
                  </p>
                  
                  <p style={{ 
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', 
                    marginBottom: '60px',
                    color: '#64748b',
                    lineHeight: '1.4',
                    fontWeight: '400',
                    letterSpacing: '-0.01em',
                    position: 'relative',
                    zIndex: '10'
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
            <div 
              style={{ 
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
                transform: 'rotate(-3deg)',
                border: '3px solid #333',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                opacity: '0',
                animation: 'slideInLeft 0.8s ease-out 1s forwards'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(-1deg) translateY(-15px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.8)';
                e.currentTarget.style.borderColor = '#60a5fa';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(-3deg) translateY(0px) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.6)';
                e.currentTarget.style.borderColor = '#333';
              }}
            >
              <img 
                src="/images/arav-profile-1.jpg" 
                alt="Arav Mathur - Striped Shirt"
                style={{
                  width: '320px',
                  height: '420px',
                  objectFit: 'cover' as const,
                  display: 'block',
                  transition: 'transform 0.4s ease'
                }}
              />
            </div>

            {/* Profile Image 2 - Orange Shirt */}
            <div 
              style={{ 
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
                transform: 'rotate(3deg)',
                marginTop: '40px',
                border: '3px solid #333',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                opacity: '0',
                animation: 'slideInRight 0.8s ease-out 1.2s forwards'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(1deg) translateY(-15px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.8)';
                e.currentTarget.style.borderColor = '#10b981';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(3deg) translateY(0px) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.6)';
                e.currentTarget.style.borderColor = '#333';
              }}
            >
              <img 
                src="/images/arav-profile-2.jpg" 
                alt="Arav Mathur - Orange Shirt"
                style={{
                  width: '320px',
                  height: '400px',
                  objectFit: 'cover' as const,
                  display: 'block',
                  transition: 'transform 0.4s ease'
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
          <div 
            style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              padding: '40px',
              border: '1px solid #333',
              textAlign: 'center',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: 'translateY(20px)',
              opacity: '0',
              animation: 'fadeInUp 0.8s ease-out 0.2s forwards'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.7)';
              e.currentTarget.style.borderColor = '#60a5fa';
              e.currentTarget.style.backgroundColor = '#222222';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#333';
              e.currentTarget.style.backgroundColor = '#1a1a1a';
            }}
          >
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
          <div 
            style={{ 
              backgroundColor: '#1a1a1a', 
              borderRadius: '12px', 
              padding: '40px', 
              border: '1px solid #333',
              textAlign: 'center',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: 'translateY(20px)',
              opacity: '0',
              animation: 'slideInLeft 0.8s ease-out 0.4s forwards'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 25px 60px rgba(139, 92, 246, 0.3)';
              e.currentTarget.style.borderColor = '#8b5cf6';
              e.currentTarget.style.backgroundColor = '#1f1a2f';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#333';
              e.currentTarget.style.backgroundColor = '#1a1a1a';
            }}
          >
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
          <div 
            style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              padding: '40px',
              border: '1px solid #333',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: 'translateY(20px)',
              opacity: '0',
              animation: 'slideInRight 0.8s ease-out 0.6s forwards'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-18px) scale(1.04)';
              e.currentTarget.style.boxShadow = '0 30px 70px rgba(0, 255, 0, 0.2)';
              e.currentTarget.style.borderColor = '#00ff00';
              e.currentTarget.style.backgroundColor = '#1f2f1f';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#333';
              e.currentTarget.style.backgroundColor = '#1a1a1a';
            }}
          >
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
