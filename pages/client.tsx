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
          backgroundColor: '#05070f',
          color: '#f5f9ff',
          padding: '120px 24px 80px',
          minHeight: '100vh',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          <div
            style={{
              textAlign: 'center',
              marginBottom: '80px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              alignItems: 'center',
            }}
          >
            <h1
              style={{
                fontSize: '3.4rem',
                fontWeight: 800,
                margin: 0,
                letterSpacing: '0.04em',
                background: 'linear-gradient(135deg, #ffffff 0%, #9ec9ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 32px 90px rgba(68, 153, 255, 0.35)',
              }}
            >
              Awards and Recognition
            </h1>
            <p
              style={{
                color: '#a6b7d4',
                maxWidth: '720px',
                fontSize: '1.15rem',
                lineHeight: 1.8,
              }}
            >
              Here is some recognition that my work is getting
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '36px',
              marginBottom: '96px',
            }}
          >
            {awards.map((award) => (
              <div
                key={award.title}
                style={{
                  background: 'linear-gradient(175deg, rgba(12, 18, 40, 0.95), rgba(4, 8, 18, 0.97))',
                  border: '1px solid rgba(80, 150, 255, 0.35)',
                  borderRadius: '32px',
                  padding: '44px 42px',
                  boxShadow: '0 48px 160px rgba(8, 24, 60, 0.55)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '22px',
                  minHeight: '340px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: '-35% auto auto -15%',
                    width: '360px',
                    height: '360px',
                    background: 'radial-gradient(circle, rgba(72,164,255,0.24) 0%, rgba(72,164,255,0) 78%)',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    zIndex: 1,
                    gap: '16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '2.1rem',
                      display: 'inline-flex',
                      width: '68px',
                      height: '68px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '20px',
                      background: 'rgba(80, 170, 255, 0.26)',
                      border: '1px solid rgba(120, 190, 255, 0.45)',
                      color: '#ffffff',
                    }}
                  >
                    {award.icon}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: '1px',
                      marginLeft: '16px',
                      background: 'linear-gradient(90deg, rgba(80,170,255,0.45) 0%, rgba(80,170,255,0) 100%)',
                    }}
                  />
                </div>
                <div style={{ position: 'relative', zIndex: 1, marginTop: '4px' }}>
                  <h2
                    style={{
                      fontSize: '1.9rem',
                      fontWeight: 700,
                      marginBottom: '18px',
                      color: '#f7fbff',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {award.title}
                  </h2>
                  {award.highlight && (
                    <p
                      style={{
                        color: '#71b5ff',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        marginBottom: '16px',
                      }}
                    >
                      {award.highlight}
                    </p>
                  )}
                  <p
                    style={{
                      color: '#c9d5ee',
                      fontSize: '1rem',
                      lineHeight: 1.9,
                      letterSpacing: '0.012em',
                    }}
                  >
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '96px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '36px',
              }}
            >
              <h2
                style={{
                  fontSize: '2.4rem',
                  fontWeight: 700,
                  margin: 0,
                  background: 'linear-gradient(135deg, #ffffff 0%, #9ec9ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '0.04em',
                }}
              >
                My Certifications
              </h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '28px',
                alignItems: 'stretch',
              }}
            >
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  style={{
                    background: 'linear-gradient(160deg, rgba(13, 22, 48, 0.94), rgba(7, 11, 24, 0.96))',
                    border: '1px solid rgba(120, 190, 255, 0.28)',
                    borderRadius: '24px',
                    padding: '32px',
                    boxShadow: '0 32px 110px rgba(10, 26, 56, 0.45)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    gap: '18px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.45rem',
                        fontWeight: 700,
                        color: '#f5f9ff',
                        letterSpacing: '0.01em',
                        margin: 0,
                      }}
                    >
                      {cert.title}
                    </h3>
                    <span
                      style={{
                        width: '64px',
                        height: '32px',
                        borderRadius: '12px',
                        background: 'rgba(80, 170, 255, 0.18)',
                        border: '1px solid rgba(120, 190, 255, 0.32)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src="/ibmlogo1.jpg"
                        alt="IBM logo"
                        style={{ height: '18px', width: 'auto', display: 'block' }}
                      />
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#c5d7f2' }}>
                    <span style={{ fontWeight: 600 }}>Issued by {cert.issuer}</span>
                    <span style={{ color: '#a8bcdf' }}>Issue Date: {cert.issued}</span>
                    <span
                      style={{
                        color: '#7fb8ff',
                        fontFamily: 'SFMono-Regular, Menlo, monospace',
                        fontSize: '0.9rem',
                        marginTop: 'auto',
                      }}
                    >
                      Credential ID: {cert.credentialId}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '80px' }}>
            <h2
              style={{
                fontSize: '2.1rem',
                fontWeight: 700,
                color: '#f5f9ff',
                marginBottom: '28px',
                textAlign: 'center',
              }}
            >
              View more about me on my social profiles
            </h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '18px',
                justifyContent: 'center',
              }}
            >
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    minWidth: '200px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '16px 24px',
                    borderRadius: '14px',
                    background: 'rgba(15, 28, 48, 0.85)',
                    border: `1px solid ${social.accent}`,
                    color: social.accent,
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = `0 16px 40px ${social.accent}33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span style={{ display: 'inline-flex', color: social.accent }}>{social.icon}</span>
                  {social.label}
                </Link>
              ))}
            </div>
          </div>

          <div
            style={{
              background: 'linear-gradient(160deg, rgba(20, 28, 52, 0.95), rgba(10, 14, 28, 0.92))',
              borderRadius: '22px',
              padding: '56px 40px',
              border: '1px solid rgba(120, 190, 255, 0.22)',
              boxShadow: '0 40px 120px rgba(12, 28, 60, 0.55)',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontSize: '2.6rem',
                fontWeight: 700,
                marginBottom: '20px',
                color: '#f7fbff',
              }}
            >
              I would love to work with you
            </h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '32px', color: '#98abd4' }}>
              want to build something together? msg me
            </p>
            <Link
              href="https://www.linkedin.com/in/arav-mathur-0567bb26a/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#42a5f5',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '10px',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.05rem',
                letterSpacing: '0.08em',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 18px 45px rgba(66, 165, 245, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
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
