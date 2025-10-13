import React from 'react';
import Layout from '../src/components/Layout';

const Contact: React.FC = () => {
  return (
    <Layout title="Contact - Arav Mathur">
      {/* Header Section */}
      <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            color: '#000', 
            marginBottom: '60px',
            textAlign: 'center'
          }}>
            Contact me
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#666', 
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            Fill out the form below, and I will be sure to get back to you soon
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'start' }}>
            
            {/* Contact Form */}
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '40px', 
              borderRadius: '12px',
              border: '1px solid #e5e7eb'
            }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', color: '#333', marginBottom: '8px' }}>
                      First name
                    </label>
                    <input 
                      type="text"
                      style={{ 
                        width: '100%', 
                        padding: '12px', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        boxSizing: 'border-box',
                        backgroundColor: 'white'
                      }}
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', color: '#333', marginBottom: '8px' }}>
                      Last name
                    </label>
                    <input 
                      type="text"
                      style={{ 
                        width: '100%', 
                        padding: '12px', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        boxSizing: 'border-box',
                        backgroundColor: 'white'
                      }}
                      placeholder="Last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', color: '#333', marginBottom: '8px' }}>
                    Email address
                  </label>
                  <input 
                    type="email"
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box',
                      backgroundColor: 'white'
                    }}
                    placeholder="Email address"
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', color: '#333', marginBottom: '8px' }}>
                    Phone number
                  </label>
                  <input 
                    type="tel"
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box',
                      backgroundColor: 'white'
                    }}
                    placeholder="Phone number"
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', color: '#333', marginBottom: '8px' }}>
                    Company
                  </label>
                  <input 
                    type="text"
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box',
                      backgroundColor: 'white'
                    }}
                    placeholder="Company"
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', color: '#333', marginBottom: '8px' }}>
                    Message
                  </label>
                  <textarea 
                    rows={5}
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                      backgroundColor: 'white'
                    }}
                    placeholder="Message"
                  />
                </div>
                
                <button 
                  type="submit"
                  style={{ 
                    backgroundColor: '#4a90e2', 
                    color: 'white', 
                    padding: '14px 24px', 
                    border: 'none',
                    borderRadius: '6px', 
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    marginTop: '8px'
                  }}
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Address Information */}
            <div>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: '#000', 
                marginBottom: '32px'
              }}>
                Address
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: '#333', 
                  margin: '0',
                  lineHeight: '1.6'
                }}>
                  Toronto Ontario Canada
                </p>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: '#4a90e2', 
                  margin: '0',
                  fontWeight: '500'
                }}>
                  +1 416 670 5465
                </p>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: '#4a90e2', 
                  margin: '0',
                  fontWeight: '500'
                }}>
                  aravmathur23@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{ 
            backgroundColor: '#000', 
            color: 'white',
            padding: '60px 40px',
            borderRadius: '12px',
            textAlign: 'center',
            marginTop: '80px'
          }}>
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
            <button 
              style={{ 
                backgroundColor: '#4a90e2', 
                color: 'white', 
                padding: '16px 32px', 
                border: 'none',
                borderRadius: '8px', 
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1.1rem'
              }}
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;