import React from 'react';
import Layout from '../src/components/Layout';
import Link from 'next/link';

const Client: React.FC = () => {
  return (
    <Layout title="Awards and Recognition - Arav Mathur">
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
            Awards and Recognition
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#666', 
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            Here is the recognition that some of my work is receiving around the world
          </p>

          {/* Awards Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', marginBottom: '100px' }}>
            
            {/* Microsoft Startup Funding */}
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: '#000', 
                marginBottom: '24px'
              }}>
                Microsoft Startup Funding
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                color: '#666', 
                lineHeight: '1.6',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                My startup, TurtleShell, was selected for the Microsoft Startup Partners Program, which has a global acceptance rate of less than 3%. As part of the program, I have access to $25,000 in credit grants, providing me with all the necessary tools to develop TurtleShell for free.
              </p>
            </div>

            {/* Ingenious+ Award */}
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: '#000', 
                marginBottom: '24px'
              }}>
                Ingenious+ Best Technology Innovation Award
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                color: '#666', 
                lineHeight: '1.6',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                For my innovation with TurtleShell, I received the Best Technology Innovation award for Ontario from Ingenious+, which included $1000 in funding for my project. This award was presented to me at the Legislative Assembly of Ontario by the Lieutenant-Governor of Ontario.
              </p>
            </div>

            {/* Youth Entrepreneur */}
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: '#000', 
                marginBottom: '24px'
              }}>
                Youth Entrepreneur of the Year finalist
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                color: '#666', 
                lineHeight: '1.6',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                For the year 2023, I was selected as a finalist for Canada's Youth Entrepreneur of the Year award by the League of Innovators. Being a finalist put me on a list of some of the most esteemed entrepreneurs from around the country.
              </p>
            </div>

            {/* Villars Scholar */}
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: '#000', 
                marginBottom: '24px'
              }}>
                Villars Ecopreneurship VIP-e Scholar
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                color: '#666', 
                lineHeight: '1.6',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                Due to my work and projects in ecopreneurship, from authoring my own dystopian-style environmental sustainability novel to creating a plant pathogen detection system, Villars offered me a 3,500 Swiss francs all-expenses-paid scholarship to attend the Villars resort for a two-week-long conference with some of the world's biggest leaders in the industry.
              </p>
            </div>
          </div>

          {/* Certifications Section */}
          <div style={{ marginBottom: '80px' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              color: '#000', 
              marginBottom: '60px',
              textAlign: 'center'
            }}>
              My Certifications
            </h1>

            {/* Certification Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
              
              {/* Cloud Native Applications */}
              <div style={{ 
                backgroundColor: '#f8f9fa', 
                padding: '40px', 
                borderRadius: '12px',
                border: '1px solid #e5e7eb'
              }}>
                <h2 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: 'bold', 
                  color: '#000', 
                  marginBottom: '24px'
                }}>
                  Building Cloud Native and Multicloud Applications
                </h2>
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#333', margin: '0' }}>
                    Issued by IBM
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#666', margin: '4px 0 0 0' }}>
                    Issue Date: August 2024
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#666', margin: '4px 0 0 0' }}>
                    Credential ID: f633f8139e6e45d29b605684222d6b63
                  </p>
                </div>
              </div>

              {/* Blockchain Foundations */}
              <div style={{ 
                backgroundColor: '#f8f9fa', 
                padding: '40px', 
                borderRadius: '12px',
                border: '1px solid #e5e7eb'
              }}>
                <h2 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: 'bold', 
                  color: '#000', 
                  marginBottom: '24px'
                }}>
                  BlockChain Foundations Developer
                </h2>
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#333', margin: '0' }}>
                    Issued by IBM
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#666', margin: '4px 0 0 0' }}>
                    Issue Date: December 2021
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#666', margin: '4px 0 0 0' }}>
                    Credential ID: e80642911c844e34a708c6266c6f8aeb
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles Section */}
          <div style={{ marginBottom: '80px', textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#000', 
              marginBottom: '40px'
            }}>
              View more about me on my social profiles
            </h2>
            
            {/* Social Icons Placeholder */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '24px',
              marginBottom: '60px'
            }}>
              {/* LinkedIn */}
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#0077b5', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>

              {/* GitHub */}
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#24292e', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Twitter */}
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#1da1f2', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{ 
            backgroundColor: '#000', 
            color: 'white',
            padding: '60px 40px',
            borderRadius: '12px',
            textAlign: 'center'
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
            <Link 
              href="/contact" 
              style={{ 
                backgroundColor: '#4a90e2', 
                color: 'white', 
                padding: '16px 32px', 
                borderRadius: '8px', 
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '1.1rem'
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

export default Client;