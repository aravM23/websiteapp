import React, { useEffect } from 'react';
import Layout from '../src/components/Layout';
import Link from 'next/link';

const Home: React.FC = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    // Add CSS for scroll animations
    const style = document.createElement('style');
    style.textContent = `
      /* Smooth scrolling for entire page */
      html {
        scroll-behavior: smooth;
      }
      
      /* Base scroll animation */
      .scroll-animate {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.9s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .scroll-animate.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Fade from left animation */
      .scroll-animate.fade-left {
        opacity: 0;
        transform: translateX(-80px) translateY(20px);
        transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .scroll-animate.fade-left.animate-in {
        opacity: 1;
        transform: translateX(0) translateY(0);
      }
      
      /* Fade from right animation */
      .scroll-animate.fade-right {
        opacity: 0;
        transform: translateX(80px) translateY(20px);
        transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .scroll-animate.fade-right.animate-in {
        opacity: 1;
        transform: translateX(0) translateY(0);
      }
      
      /* Scale in animation */
      .scroll-animate.scale-in {
        opacity: 0;
        transform: scale(0.7) translateY(40px);
        transition: all 1.1s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .scroll-animate.scale-in.animate-in {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
      
      /* Rotate in animation */
      .scroll-animate.rotate-in {
        opacity: 0;
        transform: rotate(-8deg) translateY(40px) scale(0.9);
        transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .scroll-animate.rotate-in.animate-in {
        opacity: 1;
        transform: rotate(0deg) translateY(0) scale(1);
      }
      
      /* Staggered animation delays for multiple elements */
      .scroll-animate:nth-child(2) { transition-delay: 0.1s; }
      .scroll-animate:nth-child(3) { transition-delay: 0.2s; }
      .scroll-animate:nth-child(4) { transition-delay: 0.3s; }
      .scroll-animate:nth-child(5) { transition-delay: 0.4s; }
    `;
    document.head.appendChild(style);

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);
  
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
          <div className="scroll-animate scale-in" style={{ marginBottom: '80px' }}>
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
                        
                        @keyframes bounceInLeft {
                          0% {
                            opacity: 0;
                            transform: translateX(-100px) scale(0.8);
                          }
                          60% {
                            opacity: 1;
                            transform: translateX(15px) scale(1.1);
                          }
                          100% {
                            opacity: 1;
                            transform: translateX(0) scale(1);
                          }
                        }
                        
                        @keyframes pulse {
                          0%, 100% {
                            transform: scale(1);
                            opacity: 1;
                          }
                          50% {
                            transform: scale(1.2);
                            opacity: 0.8;
                          }
                        }
                        
                        @keyframes glow {
                          0% {
                            box-shadow: 0 15px 40px rgba(0, 255, 0, 0.2);
                          }
                          100% {
                            box-shadow: 0 15px 40px rgba(0, 255, 0, 0.4), 0 0 30px rgba(0, 255, 0, 0.3);
                          }
                        }
                        
                        @keyframes typeText {
                          0% {
                            width: 0;
                          }
                          100% {
                            width: 100%;
                          }
                        }
                        
                        .typewriter-speech {
                          overflow: hidden;
                          white-space: nowrap;
                          width: 0;
                          animation: typeText 8s steps(400) 1s both;
                        }
                        
                        @keyframes pixelGlow {
                          0% {
                            box-shadow: 0 0 20px rgba(0, 255, 0, 0.6), inset 0 0 10px rgba(0, 255, 0, 0.2);
                          }
                          100% {
                            box-shadow: 0 0 30px rgba(0, 255, 0, 0.9), inset 0 0 15px rgba(0, 255, 0, 0.4);
                          }
                        }
                        
                        @keyframes pixelBlink {
                          0%, 90% { opacity: 1; }
                          91%, 99% { opacity: 0; }
                          100% { opacity: 1; }
                        }
                        
                        @keyframes scanLines {
                          0% { transform: translateY(0); }
                          100% { transform: translateY(4px); }
                        }
                        
                        @keyframes characterFloat {
                          0%, 100% { 
                            transform: translateY(0px) rotate(0deg); 
                          }
                          25% { 
                            transform: translateY(-8px) rotate(1deg); 
                          }
                          50% { 
                            transform: translateY(-12px) rotate(0deg); 
                          }
                          75% { 
                            transform: translateY(-8px) rotate(-1deg); 
                          }
                        }
                        
                        @keyframes characterGlow {
                          0% {
                            box-shadow: 0 0 25px rgba(0, 255, 0, 0.7), inset 0 0 15px rgba(0, 255, 0, 0.3);
                          }
                          100% {
                            box-shadow: 0 0 35px rgba(0, 255, 0, 0.9), inset 0 0 20px rgba(0, 255, 0, 0.5);
                          }
                        }
                        
                        @keyframes eyeBlink {
                          0%, 90%, 100% { 
                            transform: scaleY(1); 
                            opacity: 1; 
                          }
                          95% { 
                            transform: scaleY(0.1); 
                            opacity: 0.8; 
                          }
                        }
                        
                        @keyframes hairSway {
                          0%, 100% { 
                            transform: translateX(-50%) rotate(0deg); 
                          }
                          25% { 
                            transform: translateX(-50%) rotate(1deg); 
                          }
                          50% { 
                            transform: translateX(-50%) rotate(0deg); 
                          }
                          75% { 
                            transform: translateX(-50%) rotate(-1deg); 
                          }
                        }
                        
                        @keyframes wiggle {
                          0%, 100% { 
                            transform: translateY(0px) rotate(0deg); 
                          }
                          25% { 
                            transform: translateY(-2px) rotate(1deg); 
                          }
                          50% { 
                            transform: translateY(-1px) rotate(-1deg); 
                          }
                          75% { 
                            transform: translateY(-2px) rotate(0.5deg); 
                          }
                        }
                        
                        @keyframes fadeInLeft {
                          0% { 
                            opacity: 0; 
                            transform: translateX(-50px) translateY(-50%); 
                          }
                          100% { 
                            opacity: 1; 
                            transform: translateX(0) translateY(-50%); 
                          }
                        }
                        
                        @keyframes techGlow {
                          0% {
                            box-shadow: 0 0 20px rgba(0, 255, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                          }
                          100% {
                            box-shadow: 0 0 40px rgba(0, 255, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2);
                          }
                        }
                        
                        @keyframes dataPulse {
                          0%, 100% { 
                            transform: scale(1); 
                            filter: brightness(1);
                          }
                          50% { 
                            transform: scale(1.02); 
                            filter: brightness(1.1);
                          }
                        }
                        
                        @keyframes borderScan {
                          0% { 
                            transform: translateX(-100%); 
                          }
                          100% { 
                            transform: translateX(100%); 
                          }
                        }
                        
                        @keyframes textGlow {
                          0% {
                            text-shadow: 0 0 10px rgba(0, 255, 0, 0.1);
                          }
                          100% {
                            text-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
                          }
                        }
                        
                        @keyframes colorShift {
                          0% { 
                            color: #00d9ff; 
                            text-shadow: 0 0 10px rgba(0, 217, 255, 0.3);
                          }
                          50% { 
                            color: #00ff88; 
                            text-shadow: 0 0 15px rgba(0, 255, 136, 0.5);
                          }
                          100% { 
                            color: #00d9ff; 
                            text-shadow: 0 0 10px rgba(0, 217, 255, 0.3);
                          }
                        }
                        
                        @keyframes bounce {
                          0%, 20%, 50%, 80%, 100% {
                            transform: translateY(0);
                          }
                          40% {
                            transform: translateY(-10px);
                          }
                          60% {
                            transform: translateY(-5px);
                          }
                        }
                        
                        @keyframes bubbleBounce {
                          0%, 100% { 
                            transform: scale(1) rotate(0deg); 
                          }
                          50% { 
                            transform: scale(1.01) rotate(0deg); 
                          }
                        }
                        
                        @keyframes pixelShimmer {
                          0% { 
                            filter: brightness(1) contrast(1); 
                          }
                          50% { 
                            filter: brightness(1.1) contrast(1.1); 
                          }
                          100% { 
                            filter: brightness(1) contrast(1); 
                          }
                        }
                        
                        @keyframes rainbowBorder {
                          0% { 
                            background-position: 0% 0%; 
                          }
                          100% { 
                            background-position: 200% 200%; 
                          }
                        }
                        
                        @keyframes dotPattern {
                          0% { 
                            background-position: 0px 0px, 0px 0px; 
                          }
                          100% { 
                            background-position: 8px 8px, 16px 16px; 
                          }
                        }
                        
                        @keyframes textWobble {
                          0%, 100% { 
                            transform: translateY(0px); 
                          }
                          50% { 
                            transform: translateY(-0.5px); 
                          }
                        }
                        
                        @keyframes squigglyWiggle {
                          0%, 100% { 
                            transform: translateY(0px) rotate(0deg); 
                          }
                          25% { 
                            transform: translateY(-3px) rotate(1deg); 
                          }
                          50% { 
                            transform: translateY(-2px) rotate(-1deg); 
                          }
                          75% { 
                            transform: translateY(-4px) rotate(0.5deg); 
                          }
                        }
                        
                        @keyframes dashOffset {
                          0% { 
                            stroke-dasharray: 5, 10;
                            stroke-dashoffset: 0; 
                          }
                          100% { 
                            stroke-dasharray: 5, 10;
                            stroke-dashoffset: -15; 
                          }
                        }
                        
                        @keyframes arrowBob {
                          0%, 100% { 
                            transform: translateY(0px); 
                          }
                          50% { 
                            transform: translateY(-2px); 
                          }
                        }
                        
                        @keyframes textGlow {
                          0% {
                            text-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
                          }
                          100% {
                            text-shadow: 0 0 20px rgba(0, 255, 0, 0.7), 0 0 30px rgba(0, 255, 0, 0.5);
                          }
                        }
                        
                        @keyframes expandWidth {
                          0% { 
                            width: 0; 
                            opacity: 0;
                          }
                          100% { 
                            width: 100%; 
                            opacity: 1;
                          }
                        }
                        
                        @keyframes colorPulse {
                          0%, 100% { 
                            color: #0066ff; 
                            text-shadow: 2px 2px 0px rgba(0, 102, 255, 0.5);
                          }
                          50% { 
                            color: #00aaff; 
                            text-shadow: 2px 2px 0px rgba(0, 170, 255, 0.8);
                          }
                        }
                        
                        @keyframes goldShine {
                          0%, 100% { 
                            color: #ffcc00; 
                            text-shadow: 2px 2px 0px rgba(255, 204, 0, 0.5);
                          }
                          50% { 
                            color: #ffff00; 
                            text-shadow: 2px 2px 0px rgba(255, 255, 0, 0.8), 0 0 10px rgba(255, 255, 0, 0.5);
                          }
                        }
                        
                        @keyframes greenGlow {
                          0%, 100% { 
                            color: #00ff00; 
                            text-shadow: 2px 2px 0px rgba(0, 255, 0, 0.5);
                          }
                          50% { 
                            color: #66ff66; 
                            text-shadow: 2px 2px 0px rgba(102, 255, 102, 0.8), 0 0 8px rgba(0, 255, 0, 0.6);
                          }
                        }
                        
                        @keyframes emojiJump {
                          0%, 100% { 
                            transform: translateY(0px) scale(1); 
                          }
                          50% { 
                            transform: translateY(-4px) scale(1.1); 
                          }
                        }
                        
                        @keyframes powBlink {
                          0%, 100% { 
                            opacity: 1; 
                            transform: rotate(-5deg) scale(1);
                          }
                          50% { 
                            opacity: 0.7; 
                            transform: rotate(-5deg) scale(1.1);
                          }
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
                    I am an <strong style={{ color: '#60a5fa', textShadow: '0 0 10px rgba(96, 165, 250, 0.3)' }}>18-year-old</strong> from <strong style={{ color: '#f59e0b', textShadow: '0 0 10px rgba(245, 158, 11, 0.3)' }}>Toronto, Ontario</strong>, interested in making and shipping <strong style={{ color: '#10b981', textShadow: '0 0 10px rgba(16, 185, 129, 0.3)' }}>cool shit</strong>. My goals with each of my projects is to ensure that each project delivers <strong style={{ color: '#ef4444', textShadow: '0 0 10px rgba(239, 68, 68, 0.3)' }}>value to society</strong>, and if it doesn&apos;t, its probably just something I really really want to use myself <span style={{ fontSize: '1.2em' }}>😄</span>
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
                      href="/projects" 
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
                    <a 
                      href="https://www.linkedin.com/in/arav-mathur-0567bb26a/" 
                      target="_blank"
                      rel="noopener noreferrer"
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
                    </a>
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
              className="scroll-animate fade-left"
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
              className="scroll-animate fade-right"
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
      <section id="projects-experience" style={{
        padding: '80px 20px',
        background: '#111111',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div 
            className="scroll-animate scale-in"
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
            <div style={{ marginBottom: '50px' }}>
              {/* Education with logo */}
              <p style={{
                fontSize: '2rem', 
                color: '#ffffff', 
                marginBottom: '24px',
                fontWeight: '800',
                fontFamily: '"SF Pro Display", "Helvetica Neue", "Arial Black", sans-serif',
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                textTransform: 'uppercase',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
                background: 'linear-gradient(135deg, #ffffff 0%, #e5e5e5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                <span>CS @ Waterloo</span>
                <span style={{ fontSize: '24px' }}>🎓</span>
              </p>
              
              {/* Description */}
              <p style={{ 
                fontSize: '1.3rem', 
                color: '#d1d5db', 
                marginBottom: '32px',
                fontStyle: 'italic',
                fontWeight: '400',
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                lineHeight: '1.5',
                letterSpacing: '-0.005em'
              }}>
                probably working on building something I find cool in my dorm room rn
              </p>
            </div>
            
            <div style={{ 
              borderTop: '1px solid #333',
              paddingTop: '32px'
            }}>
              {/* Animated Character Section */}
              <div className="scroll-animate" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '40px',
                maxWidth: '1000px',
                margin: '0 auto',
                position: 'relative'
              }}>
                {/* True Pixel Art Arav Character - Dylan Style */}
                <div className="scroll-animate fade-left" style={{
                  position: 'relative',
                  minWidth: '120px',
                  height: '160px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'bounceInLeft 1s ease-out'
                }}>
                  {/* Pixelated Character - True 8-bit Style */}
                  <div style={{
                    width: '96px',
                    height: '128px',
                    background: 'transparent',
                    animation: 'float1 4s ease-in-out infinite',
                    position: 'relative',
                    imageRendering: 'pixelated' as any
                  }}>
                    {/* 24x32 Pixel Grid */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(24, 4px)',
                      gridTemplateRows: 'repeat(32, 4px)',
                      width: '96px',
                      height: '128px'
                    }}>
                      {(() => {
                        const pixels = [];
                        
                        // Enhanced pixel art with coral/pink shirt (back to original)
                        const pixelMap = [
                          // Rows 1-6: Hair (uniform dark color)
                          '000000001111111111100000', // 1
                          '000000111111111111111000', // 2 
                          '000011111111111111111100', // 3
                          '000111111111111111111110', // 4
                          '001111111111111111111111', // 5
                          '011111111111111111111111', // 6
                          
                          // Rows 7-10: Hairline and forehead
                          '111111122222222221111111', // 7
                          '111112222222222222111111', // 8
                          '11122222222222222222111', // 9
                          '1122222222222222222211', // 10
                          
                          // Rows 11-13: Eyebrows and eyes
                          '122233322222223332221', // 11 (eyebrows)
                          '222200222222220022222', // 12 (eye whites)
                          '222233222222223322222', // 13 (pupils with blink)
                          
                          // Rows 14-16: Mid face and nose
                          '222222222442222222222', // 14
                          '222222224442222222222', // 15 (nose)
                          '222222222222222222222', // 16
                          
                          // Rows 17-18: Mouth area
                          '222222555555552222222', // 17 (smile)
                          '222222222222222222222', // 18
                          
                          // Rows 19-21: Neck and shirt collar
                          '122222222222222222221', // 19 (neck)
                          '0166666666666666666610', // 20 (coral shirt collar)
                          '1666666777777666666661', // 21 (coral shirt top)
                          
                          // Rows 22-24: Coral shirt body
                          '6666667777777776666666', // 22 (coral shirt)
                          '6666667777b7776666666', // 23 (coral shirt with button)
                          '6666666777777666666666', // 24 (coral shirt)
                          
                          // Rows 25-27: Coral shirt continued
                          '6666667777b7776666666', // 25 (coral shirt with button)
                          '6666666777777666666666', // 26 (coral shirt)
                          '6666666666666666666666', // 27 (coral shirt bottom)
                          
                          // Rows 28-29: Shirt to pants transition
                          '6666666666666666666666', // 28 (coral shirt)
                          '8866666666666666666688', // 29 (pants start)
                          
                          // Rows 30-32: Pants and shoes
                          '8888888888888888888888', // 30
                          '8899999888888889999988', // 31 (shoes)
                          '9999999888888889999999', // 32
                        ];
                        
                        // Enhanced color palette with coral shirt (back to original)
                        const colors: {[key: string]: string} = {
                          '0': 'transparent',      // Background
                          '1': '#2d1810',         // Uniform dark hair
                          '2': '#d4b5a0',         // Skin tone
                          '3': '#0d0704',         // Eyebrows
                          '4': '#c29885',         // Nose bridge
                          '5': '#8b4513',         // Mouth/smile
                          '6': '#ff8066',         // Coral shirt base
                          '7': '#ff6b4d',         // Coral shirt highlights
                          'b': '#ff4d33',         // Shirt buttons
                          '8': '#2d2d2d',         // Dark pants
                          '9': '#f0f0f0',         // White shoes
                        };
                        
                        // Generate pixels
                        for (let row = 0; row < 32; row++) {
                          const rowData = pixelMap[row] || '000000000000000000000000';
                          for (let col = 0; col < 24; col++) {
                            const colorKey = rowData[col] || '0';
                            const color = colors[colorKey];
                            
                            // Add blinking animation to eyes
                            let animation = 'none';
                            if (colorKey === '3' && row === 12 && (col === 6 || col === 17)) {
                              animation = 'pixelBlink 3s infinite';
                            }
                            
                            pixels.push(
                              <div 
                                key={`pixel-${row}-${col}`}
                                style={{
                                  width: '4px',
                                  height: '4px',
                                  backgroundColor: color,
                                  animation: animation
                                }}
                              />
                            );
                          }
                        }
                        
                        return pixels;
                      })()}
                    </div>
                    
                    {/* CRT Scanlines */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 1px,
                        rgba(0, 255, 0, 0.03) 1px,
                        rgba(0, 255, 0, 0.03) 2px
                      )`,
                      pointerEvents: 'none'
                    }}></div>
                  </div>
                  
                </div>

                {/* Squiggly Arrow pointing at character */}
                <div style={{
                  position: 'absolute',
                  left: '-150px',
                  top: '80px',
                  animation: 'fadeInLeft 1.5s ease-out 1s both',
                  zIndex: 10
                }}>
                  <span style={{
                    color: '#00ff00',
                    fontSize: '16px',
                    fontFamily: 'Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                    whiteSpace: 'nowrap',
                    textShadow: '0 0 10px rgba(0, 255, 0, 0.6)',
                    display: 'block',
                    marginBottom: '10px',
                    animation: 'textGlow 2s ease-in-out infinite alternate'
                  }}>
                    this is me! →
                  </span>
                  {/* Squiggly animated arrow */}
                  <svg 
                    width="120" 
                    height="40" 
                    style={{ 
                      filter: 'drop-shadow(0 0 5px rgba(0, 255, 0, 0.4))',
                      animation: 'squigglyWiggle 3s ease-in-out infinite'
                    }}
                  >
                    {/* Squiggly arrow path */}
                    <path
                      d="M10,20 Q30,10 50,20 T90,20 L105,20"
                      stroke="#00ff00"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      style={{
                        animation: 'dashOffset 2s linear infinite'
                      }}
                    />
                    {/* Arrow head */}
                    <polygon
                      points="105,20 98,15 100,18 95,18 95,22 100,22 98,25"
                      fill="#00ff00"
                      style={{
                        animation: 'arrowBob 1.5s ease-in-out infinite'
                      }}
                    />
                  </svg>
                </div>

                {/* Animated Speech Bubble */}
                <div className="scroll-animate fade-right" style={{
                  flex: 1,
                  position: 'relative',
                  animation: 'slideInRight 1s ease-out 0.5s both'
                }}>
                  {/* 8-bit Comic Book Speech Bubble */}
                  <div style={{
                    background: '#ffffff',
                    border: '4px solid #000000',
                    borderRadius: '0px',
                    padding: '25px 30px',
                    position: 'relative',
                    boxShadow: '8px 8px 0px #000000',
                    animation: 'bubbleBounce 3s ease-in-out infinite',
                    imageRendering: 'pixelated' as any,
                    transform: 'translateZ(0)'
                  }}>
                    
                    {/* Pixelated Speech Bubble Tail */}
                    <div style={{
                      position: 'absolute',
                      left: '-16px',
                      top: '24px',
                      width: '0',
                      height: '0',
                      border: '8px solid transparent',
                      borderRight: '16px solid #000000',
                      imageRendering: 'pixelated' as any
                    }}></div>
                    <div style={{
                      position: 'absolute',
                      left: '-12px',
                      top: '28px',
                      width: '0',
                      height: '0',
                      border: '4px solid transparent',
                      borderRight: '12px solid #ffffff'
                    }}></div>
                    
                    {/* 8-bit Comic Text */}
                    <div style={{
                      fontSize: '1rem',
                      color: '#000000',
                      lineHeight: '1.6',
                      fontFamily: '"Press Start 2P", "Courier New", monospace',
                      fontWeight: 'bold',
                      position: 'relative',
                      zIndex: 2,
                      animation: 'textWobble 4s ease-in-out infinite'
                    }}>
                      <span>
                        I just wrapped up a SWE internship at <span style={{
                          color: '#000000', 
                          fontWeight: 'bold'
                        }}>AVIEW INTERNATIONAL</span>, a Toronto startup for AI translations and content dubbing (projects with brands like <span style={{
                          color: '#000000',
                          fontWeight: 'bold'
                        }}>MARVEL</span> and creators like <span style={{
                          color: '#000000',
                          fontWeight: 'bold'
                        }}>LOGAN PAUL</span>). I also founded <span style={{
                          color: '#000000',
                          fontWeight: 'bold'
                        }}>TURTLESHELL</span>, a tourism safety app backed with <span style={{
                          color: '#000000',
                          fontWeight: 'bold'
                        }}>$26,000</span> from Microsoft plus support from the Government of Canada. I&apos;m now a first-year CS student at <span style={{
                          color: '#000000',
                          fontWeight: 'bold'
                        }}>WATERLOO</span> and just shipped my latest project <span style={{
                          color: '#000000',
                          fontWeight: 'bold'
                        }}>GRAYPASS</span>, a passwordless auth engine that uses cognitive and behavioral signals to verify your identity, helping us get away from infinite authentication loops and captcha bs. Most of my free time is spent deep researching the online shopping space for my next dope idea <span style={{
                          fontSize: '1.2em',
                          color: '#000000',
                          animation: 'emojiJump 2s ease-in-out infinite'
                        }}>😄</span>
                      </span>
                    </div>
                    
                    {/* Comic Book "POW!" style accent */}
                    <div style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '20px',
                      background: '#ffff00',
                      color: '#ff0000',
                      padding: '2px 8px',
                      border: '2px solid #000000',
                      fontFamily: '"Press Start 2P", monospace',
                      fontSize: '8px',
                      fontWeight: 'bold',
                      animation: 'powBlink 1.5s ease-in-out infinite',
                      transform: 'rotate(-5deg)',
                      textShadow: '1px 1px 0px #000000'
                    }}>
                      NEW!
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="scroll-animate" style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link 
                  href="https://x.com/aravmathur23"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    color: '#1a1a1a',
                    padding: '18px 40px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: '17px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: 'translateY(0)',
                    boxShadow: '0 10px 30px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    animation: 'fadeInUp 1s ease-out 2s both',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '0.025em',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 255, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)';
                  }}
                >
                  <span>I tweet about my life's live updates</span>
                </Link>
              </div>
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
            className="scroll-animate rotate-in"
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
                Fun Facts About Me 😝
              </h2>
              <p style={{ 
                fontSize: '1.6rem', 
                color: '#e5e5e5', 
                lineHeight: '1.7',
                maxWidth: '1000px',
                margin: '0 auto',
                fontWeight: '500',
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '0.01em',
                textAlign: 'center'
              }}>
                i&apos;ve published two dystopian novels on kindle. i&apos;m a research assistant at u of t with dr. brad bass (ipcc nobel peace prize team). i also started positive powers, my nonprofit that&apos;s raised $15,000 to run positivity projects across two continents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Product Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#0d1117',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div 
            className="scroll-animate scale-in"
            style={{ 
              backgroundColor: '#1f1a0f', 
              borderRadius: '12px', 
              padding: '40px', 
              border: '2px solid #f59e0b',
              textAlign: 'center',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: 'translateY(20px)',
              opacity: '0',
              animation: 'slideInRight 0.8s ease-out 0.4s forwards',
              boxShadow: '0 10px 30px rgba(251, 191, 36, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 25px 60px rgba(251, 191, 36, 0.4)';
              e.currentTarget.style.borderColor = '#fbbf24';
              e.currentTarget.style.backgroundColor = '#292013';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(251, 191, 36, 0.2)';
              e.currentTarget.style.borderColor = '#f59e0b';
              e.currentTarget.style.backgroundColor = '#1f1a0f';
            }}
          >
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '600', 
                marginBottom: '24px',
                color: '#ffffff'
              }}>
                View my latest shipped product 🚀
              </h2>
              <p style={{ 
                fontSize: '1.4rem', 
                color: '#e5e5e5', 
                lineHeight: '1.7',
                maxWidth: '800px',
                margin: '0 auto 32px auto',
                fontWeight: '400',
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '0.01em',
                textAlign: 'center'
              }}>
                passwordless authentication using cognitive and behavioral signals
              </p>
              <Link 
                href="https://www.graypass.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  color: '#000000', 
                  padding: '18px 40px', 
                  borderRadius: '12px', 
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '18px',
                  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '0.025em',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: 'translateY(0)',
                  boxShadow: '0 10px 30px rgba(251, 191, 36, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(251, 191, 36, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.4)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(251, 191, 36, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)';
                }}
              >
                <span>Visit GRAYPASS</span>
                <span style={{ fontSize: '20px', lineHeight: '1' }}>→</span>
              </Link>
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
            className="scroll-animate scale-in"
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
              href="https://www.linkedin.com/in/arav-mathur-0567bb26a/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                background: 'linear-gradient(135deg, #0077b5 0%, #005885 100%)',
                color: '#ffffff', 
                padding: '16px 32px', 
                borderRadius: '12px', 
                fontWeight: '700',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '16px',
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '0.025em',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(0)',
                boxShadow: '0 8px 25px rgba(0, 119, 181, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 119, 181, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #005885 0%, #004466 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 119, 181, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #0077b5 0%, #005885 100%)';
              }}
            >
              <span>GET IN TOUCH</span>
              <span style={{ fontSize: '16px', lineHeight: '1' }}>🙂</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
