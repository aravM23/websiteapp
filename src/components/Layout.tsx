import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "Arav Mathur - Developer & Innovator",
  description = "Personal website of Arav Mathur showcasing tech projects and experience"
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="background-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          html, body { 
            background-color: #0a0a0a !important; 
            margin: 0 !important; 
            padding: 0 !important;
            border: none !important;
            width: 100% !important;
            height: 100% !important;
          }
        `}</style>
      </Head>
      <div style={{ 
        minHeight: '100vh',
        width: '100vw',
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: '#0a0a0a',
        color: '#ffffff',
        margin: 0,
        padding: 0,
        border: 'none',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Header />
        <main style={{ flex: '1' }}>
          {children}
        </main>
        <Footer />
        <Chatbot />
      </div>
    </>
  );
};

export default Layout;