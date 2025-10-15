import React from 'react';
import Layout from '../src/components/Layout';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <Layout title="Arav Mathur">
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)', 
        color: 'white',
        padding: '100px 20px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Geometric Pattern Background */}
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)
          `,
          zIndex: 1
        }}></div>
        
        {/* Grid Pattern */}
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          zIndex: 2
        }}></div>
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '80px',
            alignItems: 'center'
          }}>
            {/* Text Content */}
            <div style={{ textAlign: 'left', order: '1' }}>
              <h1 style={{ 
                fontSize: 'clamp(3rem, 7vw, 5.5rem)', 
                fontWeight: '800', 
                marginBottom: '24px',
                lineHeight: '1.1',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                color: '#ffffff'
              }}>
                Hi, this is Arav :)
              </h1>
              <p style={{ 
                fontSize: '1.3rem', 
                marginBottom: '16px',
                color: '#94a3b8',
                lineHeight: '1.6',
                maxWidth: '600px',
                fontWeight: '400'
              }}>
                I am an 18-year-old from Toronto, Ontario, interested in making and shipping cool shit. My goals with each of my projects is to ensure that each project delivers value to society, and if it doesn't, its probably just something I really really want to use myself 😎
              </p>
              <p style={{ 
                fontSize: '1.1rem', 
                marginBottom: '40px',
                color: '#64748b',
                lineHeight: '1.6',
                maxWidth: '550px',
                fontWeight: '300'
              }}>
                I dream of making something one day that a bunch of people actually use and love.
              </p>
              
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '32px' }}>
                <Link 
                  href="/contact" 
                  style={{ 
                    background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)', 
                    color: 'white', 
                    padding: '16px 32px', 
                    borderRadius: '12px', 
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
                    transition: 'all 0.3s ease',
                    border: 'none'
                  }}
                >
                  Let's chat →
                </Link>
                <Link 
                  href="/projects" 
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.08)', 
                    color: '#e2e8f0', 
                    padding: '16px 32px', 
                    borderRadius: '12px', 
                    fontWeight: '500',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  View my work
                </Link>
              </div>
            </div>

            {/* Images */}
            <div style={{ 
              display: 'flex', 
              gap: '30px', 
              justifyContent: 'center',
              alignItems: 'center',
              order: '2'
            }}>
              {/* Profile Image 1 - Striped Shirt */}
              <div style={{ 
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
                transform: 'rotate(-2deg)',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                padding: '4px'
              }}>
                <img 
                  src="/images/arav-profile-1.jpg" 
                  alt="Arav Mathur - Striped Shirt"
                  style={{
                    width: '300px',
                    height: '420px',
                    objectFit: 'cover' as const,
                    display: 'block',
                    borderRadius: '20px'
                  }}
                />
              </div>

              {/* Profile Image 2 - Orange Shirt */}
              <div style={{ 
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
                transform: 'rotate(2deg)',
                marginTop: '40px',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))',
                padding: '4px'
              }}>
                <img 
                  src="/images/arav-profile-2.jpg" 
                  alt="Arav Mathur - Orange Shirt"
                  style={{
                    width: '300px',
                    height: '370px',
                    objectFit: 'cover' as const,
                    display: 'block',
                    borderRadius: '20px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
      </section>

      {/* About Section */}
      <section style={{ 
        padding: '120px 20px', 
        background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative'
      }}>
        {/* Subtle Pattern */}
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)
          `,
          zIndex: 1
        }}></div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ 
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '60px 40px',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{ marginBottom: '40px' }}>
              <p style={{ 
                fontSize: '1.4rem', 
                color: '#2d3748', 
                marginBottom: '16px',
                fontWeight: '600'
              }}>
                Hi I am Arav Mathur!
              </p>
              <p style={{ 
                fontSize: '1.3rem', 
                color: '#4a90e2', 
                marginBottom: '16px',
                fontWeight: '700'
              }}>
                CS @ Waterloo.
              </p>
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#2d3748', 
                marginBottom: '32px',
                fontStyle: 'italic'
              }}>
                I&apos;m probably working on building something I find cool :)
              </p>
            </div>
            
            <div style={{ 
              borderTop: '2px solid #e2e8f0',
              paddingTop: '32px'
            }}>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#4a5568', 
                lineHeight: '1.8',
                maxWidth: '800px',
                margin: '0 auto 32px auto'
              }}>
                I just wrapped up a SWE internship at Aview International, a Toronto startup for AI translations and content dubbing (projects with brands like Marvel and creators like Logan Paul). I also founded TurtleShell, a tourism safety app backed with $26,000 from Microsoft plus support from the Government of Canada. I&apos;m now a first-year CS student at Waterloo and just shipped my latest project GrayPass, a passwordless auth engine that uses cognitive and behavioral signals to verify your identity, helping us get away from infinite authentication loops and captcha bs. Most of my free time is spent deep researching the online shopping space for my next dope idea 😎
              </p>
              
              <Link 
                href="/projects"
                style={{ 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600'
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
        padding: '100px 20px',
        backgroundColor: 'white',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            backgroundColor: '#1a1a1a', 
            borderRadius: '20px', 
            padding: '80px 40px', 
            color: 'white',
            textAlign: 'center' 
          }}>
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                marginBottom: '24px'
              }}>
                About Arav
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: 'rgba(255, 255, 255, 0.95)', 
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
        backgroundColor: '#1a1a1a', 
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '24px'
          }}>
            I would love to work with you
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '32px',
            color: '#ccc'
          }}>
            want to build something together? msg me
          </p>
          <Link 
            href="/contact" 
            style={{ 
              backgroundColor: '#4a90e2', 
              color: 'white', 
              padding: '16px 32px', 
              borderRadius: '8px', 
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
