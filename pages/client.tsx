import React from 'react';
import Link from 'next/link';
import Layout from '../src/components/Layout';

type Award = {
  title: string;
  highlight: string;
  description: string;
  icon: string;
};

type Certification = {
  title: string;
  issuer: string;
  issued: string;
  credentialId: string;
};

const awards: Award[] = [
  {
    title: 'Microsoft Startup Funding',
    highlight: '',
    description:
      'My startup, TurtleShell, was selected for the Microsoft Startup Partners Program, which has a global acceptance rate of less than 3%. As part of the program, I have access to $25,000 in credit grants, providing me with all the necessary tools to develop TurtleShell for free.',
    icon: '🚀',
  },
  {
    title: 'Ingenious+ Best Technology Innovation',
    highlight: '',
    description:
      'For my innovation with TurtleShell, I received the Best Technology Innovation award for Ontario from Ingenious+, which included $1000 in funding for my project. This award was presented to me at the Legislative Assembly of Ontario by the Lieutenant-Governor of Ontario.',
    icon: '🏅',
  },
  {
    title: 'Youth Entrepreneur of the Year Finalist',
    highlight: '',
    description:
      "For the year 2023, I was selected as a finalist for Canada's Youth Entrepreneur of the Year award by the League of Innovators. Being a finalist put me on a list of some of the most esteemed entrepreneurs from around the country.",
    icon: '🌟',
  },
  {
    title: 'Villars Ecopreneurship VIP-e Scholar',
    highlight: '',
    description:
      "Due to my work and projects in ecopreneurship, from authoring my own dystopian-style environmental sustainability novel to creating a plant pathogen detection system, Villars offered me a 3,500 Swiss francs all-expenses-paid scholarship to attend the Villars resort for a two-week-long conference with some of the world's biggest leaders in the industry.",
    icon: '🌍',
  },
];

const certifications: Certification[] = [
  {
    title: 'Building Cloud Native and Multicloud Applications',
    issuer: 'IBM Skills Network',
    issued: 'August 2024',
    credentialId: 'f633f8139e6e45d29b605684222d6b63',
  },
  {
    title: 'Blockchain Foundations Developer',
    issuer: 'IBM',
    issued: 'December 2021',
    credentialId: 'e80642911c844e34a708c6266c6f8aeb',
  },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arav-mathur-0567bb26a/',
    accent: '#2d9cff',
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/aravM23',
    accent: '#7c8cff',
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://x.com/aravmathur23',
    accent: '#48d7ff',
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
];

const Client: React.FC = () => {
  return (
    <Layout title="Awards & Recognition - Arav Mathur">
      <section
        style={{
          backgroundColor: '#0a0a0a',
          color: '#ffffff',
          padding: 'clamp(80px, 15vw, 120px) clamp(16px, 4vw, 24px) clamp(48px, 10vw, 80px)',
          minHeight: '100vh',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Hero Section */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: 'clamp(40px, 10vw, 80px)',
              position: 'relative',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                fontWeight: '800',
                margin: '0 0 20px 0',
                letterSpacing: '-1px',
                color: '#ffffff',
                textShadow: '0 2px 20px rgba(255, 255, 255, 0.1)',
              }}
            >
              Awards & Recognition
            </h1>
            <p
              style={{
                color: '#b0b0b0',
                maxWidth: '600px',
                fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
                lineHeight: 1.6,
                margin: '0 auto',
                padding: '0 16px',
              }}
            >
              Here's some recognition that my work is getting
            </p>
          </div>

          {/* Awards Grid - All 4 in one row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 'clamp(16px, 4vw, 24px)',
              marginBottom: 'clamp(60px, 12vw, 100px)',
            }}
          >
            {awards.map((award, index) => (
              <div
                key={award.title}
                style={{
                  background: 'rgba(20, 20, 20, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: 'clamp(20px, 5vw, 32px)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    fontSize: 'clamp(2rem, 6vw, 3rem)',
                    marginBottom: 'clamp(12px, 4vw, 20px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'clamp(60px, 15vw, 80px)',
                    height: 'clamp(60px, 15vw, 80px)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {award.icon}
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontSize: 'clamp(1.1rem, 4vw, 1.4rem)',
                    fontWeight: '700',
                    marginBottom: 'clamp(10px, 3vw, 16px)',
                    color: '#ffffff',
                    lineHeight: 1.3,
                  }}
                >
                  {award.title}
                </h2>

                {/* Description */}
                <p
                  style={{
                    color: '#b0b0b0',
                    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {award.description}
                </p>

                {/* Decorative gradient */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #42a5f5, #66bb6a, #ffa726)',
                    opacity: 0.5,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div style={{ marginBottom: 'clamp(60px, 12vw, 100px)' }}>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                fontWeight: '800',
                marginBottom: 'clamp(24px, 6vw, 48px)',
                textAlign: 'center',
                color: '#ffffff',
              }}
            >
              Certifications
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                gap: 'clamp(16px, 4vw, 24px)',
              }}
            >
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  style={{
                    background: 'rgba(20, 20, 20, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: 'clamp(20px, 5vw, 32px)',
                    transition: 'all 0.3s ease',
                    animation: `fadeInUp 0.6s ease ${index * 0.1 + 0.4}s both`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'clamp(1.1rem, 3.5vw, 1.3rem)',
                      fontWeight: '700',
                      color: '#ffffff',
                      marginBottom: 'clamp(10px, 3vw, 16px)',
                      lineHeight: 1.3,
                    }}
                  >
                    {cert.title}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      color: '#b0b0b0',
                      fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                    }}
                  >
                    <span>
                      <strong style={{ color: '#ffffff' }}>Issuer:</strong> {cert.issuer}
                    </span>
                    <span>
                      <strong style={{ color: '#ffffff' }}>Issued:</strong> {cert.issued}
                    </span>
                    <span
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '0.85rem',
                        color: '#888888',
                        marginTop: '8px',
                      }}
                    >
                      ID: {cert.credentialId}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div style={{ marginBottom: 'clamp(40px, 10vw, 100px)' }}>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                fontWeight: '800',
                marginBottom: 'clamp(24px, 6vw, 48px)',
                textAlign: 'center',
                color: '#ffffff',
              }}
            >
              connect with me (im cool)
            </h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(12px, 3vw, 20px)',
                justifyContent: 'center',
              }}
            >
              {socials.map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'clamp(8px, 2vw, 12px)',
                    padding: 'clamp(12px, 3vw, 16px) clamp(20px, 5vw, 32px)',
                    borderRadius: '12px',
                    background: 'rgba(20, 20, 20, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    animation: `fadeInUp 0.6s ease ${index * 0.1 + 0.8}s both`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = social.accent;
                    e.currentTarget.style.boxShadow = `0 10px 30px ${social.accent}33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span style={{ color: social.accent }}>{social.icon}</span>
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Layout>
  );
};

export default Client;
