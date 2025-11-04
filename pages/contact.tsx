import React from 'react';
import Layout from '../src/components/Layout';
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <Layout title="Contact - Arav Mathur">
      {/* Header Section */}
      <section style={{ padding: '120px 20px 80px', backgroundColor: '#0a0a0a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
            fontWeight: '800', 
            color: '#ffffff', 
            marginBottom: '24px',
            textAlign: 'center',
            letterSpacing: '-0.02em'
          }}>
            Let's Connect 📬
          </h1>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', 
            color: '#b0b0b0', 
            textAlign: 'center',
            marginBottom: '60px',
            maxWidth: '600px',
            margin: '0 auto 60px',
            lineHeight: '1.6'
          }}>
            Got an idea? Want to collaborate? Just wanna chat? Drop me a message below 👇
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))', gap: '60px', alignItems: 'start' }}>
            
            {/* Contact Form */}
            <div style={{ 
              backgroundColor: 'rgba(20, 20, 20, 0.6)', 
              padding: '40px', 
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '24px'
              }}>
                Send me a message ✉️
              </h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
                      First name
                    </label>
                    <input 
                      type="text"
                      style={{ 
                        width: '100%', 
                        padding: '12px 16px', 
                        border: '1px solid rgba(255, 255, 255, 0.2)', 
                        borderRadius: '8px',
                        fontSize: '0.95rem',
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#ffffff',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      placeholder="John"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
                      Last name
                    </label>
                    <input 
                      type="text"
                      style={{ 
                        width: '100%', 
                        padding: '12px 16px', 
                        border: '1px solid rgba(255, 255, 255, 0.2)', 
                        borderRadius: '8px',
                        fontSize: '0.95rem',
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#ffffff',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      placeholder="Doe"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
                    Email address
                  </label>
                  <input 
                    type="email"
                    style={{ 
                      width: '100%', 
                      padding: '12px 16px', 
                      border: '1px solid rgba(255, 255, 255, 0.2)', 
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    placeholder="john@example.com"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
                    Phone number (optional)
                  </label>
                  <input 
                    type="tel"
                    style={{ 
                      width: '100%', 
                      padding: '12px 16px', 
                      border: '1px solid rgba(255, 255, 255, 0.2)', 
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    placeholder="+1 (555) 000-0000"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
                    Company (optional)
                  </label>
                  <input 
                    type="text"
                    style={{ 
                      width: '100%', 
                      padding: '12px 16px', 
                      border: '1px solid rgba(255, 255, 255, 0.2)', 
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    placeholder="Your company"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
                    Message
                  </label>
                  <textarea 
                    rows={5}
                    style={{ 
                      width: '100%', 
                      padding: '12px 16px', 
                      border: '1px solid rgba(255, 255, 255, 0.2)', 
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      fontFamily: 'inherit'
                    }}
                    placeholder="Tell me what's on your mind..."
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>
                
                <button 
                  type="submit"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                    color: '#ffffff', 
                    padding: '16px 32px', 
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px', 
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    marginTop: '8px',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Send Message 🚀
                </button>
              </form>
            </div>

            {/* Address Information */}
            <div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: '#ffffff', 
                marginBottom: '32px'
              }}>
                Other ways to reach me 🌐
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{
                  padding: '20px',
                  backgroundColor: 'rgba(20, 20, 20, 0.6)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#888888',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: '600'
                  }}>
                    📍 Location
                  </p>
                  <p style={{ 
                    fontSize: '1.15rem', 
                    color: '#ffffff', 
                    margin: '0',
                    fontWeight: '500'
                  }}>
                    Toronto, Ontario, Canada
                  </p>
                </div>

                <div style={{
                  padding: '20px',
                  backgroundColor: 'rgba(20, 20, 20, 0.6)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#888888',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: '600'
                  }}>
                    📞 Phone
                  </p>
                  <a href="tel:+14166705465" style={{ 
                    fontSize: '1.15rem', 
                    color: '#ffffff', 
                    margin: '0',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#42a5f5'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
                  >
                    +1 416 670 5465
                  </a>
                </div>

                <div style={{
                  padding: '20px',
                  backgroundColor: 'rgba(20, 20, 20, 0.6)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#888888',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: '600'
                  }}>
                    ✉️ Email
                  </p>
                  <a href="mailto:aravmathur23@gmail.com" style={{ 
                    fontSize: '1.15rem', 
                    color: '#ffffff', 
                    margin: '0',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#42a5f5'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
                  >
                    aravmathur23@gmail.com
                  </a>
                </div>

                <div style={{
                  padding: '24px',
                  backgroundColor: 'rgba(20, 20, 20, 0.6)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  marginTop: '16px'
                }}>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#888888',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: '600'
                  }}>
                    🔗 Social Links
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <Link 
                      href="https://www.linkedin.com/in/arav-mathur-0567bb26a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span>💼</span> LinkedIn
                    </Link>
                    <Link 
                      href="https://x.com/aravmathur23"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span>🐦</span> Twitter/X
                    </Link>
                    <Link 
                      href="https://github.com/aravM23"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span>💻</span> GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{ 
            backgroundColor: 'rgba(20, 20, 20, 0.6)', 
            color: '#ffffff',
            padding: '60px 40px',
            borderRadius: '20px',
            textAlign: 'center',
            marginTop: '80px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
          }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
              fontWeight: '800', 
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}>
              Let's work together 💪
            </h2>
            <p style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
              marginBottom: '32px',
              color: '#b0b0b0',
              lineHeight: '1.6'
            }}>
              Want to build something amazing? I'm always open to new opportunities and collaborations!
            </p>
            <Link 
              href="https://www.linkedin.com/in/arav-mathur-0567bb26a/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                color: '#ffffff', 
                padding: '18px 40px', 
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px', 
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '1.1rem',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              CONNECT ON LINKEDIN →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;