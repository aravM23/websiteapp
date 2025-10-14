import React, { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../src/components/Layout';

const Services: React.FC = () => {
  // Debounce function for search
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>, isEntering: boolean) => {
    const target = e.currentTarget as HTMLDivElement;
    if (isEntering) {
      target.style.transform = 'translateY(-8px)';
      target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
      target.style.borderColor = '#555555';
    } else {
      target.style.transform = 'translateY(0)';
      target.style.boxShadow = 'none';
      target.style.borderColor = '#333333';
    }
  };

  const performSearch = (searchTerm: string) => {
    const projectCards = document.querySelectorAll('.project-card') as NodeListOf<HTMLElement>;
    const noResults = document.getElementById('noResults') as HTMLElement;
    const projectContainer = document.getElementById('projectContainer') as HTMLElement;
    const searchResults = document.getElementById('searchResults') as HTMLElement;
    const resultsCount = document.getElementById('resultsCount') as HTMLElement;
    const clearButton = document.getElementById('clearSearch') as HTMLElement;
    const searchLoading = document.getElementById('searchLoading') as HTMLElement;
    
    // Determine if we should be in search mode or scattered mode
    const isSearching = searchTerm.trim() !== '';
    
    // Show loading indicator for searches
    if (searchLoading && searchTerm !== '') {
      searchLoading.style.display = 'block';
    }
    
    if (isSearching) {
      // Switch to grid mode for search results
      stackCards();
    } else {
      // Return to scattered mode when no search
      setTimeout(() => {
        const container = document.getElementById('projectContainer');
        if (container) {
          container.className = 'scattered-mode';
          scatterCards();
        }
      }, 300);
    }
    
    // Calculate matches first
    const cardMatches: boolean[] = [];
    let visibleCount = 0;
    
    projectCards.forEach((card, index) => {
      const tags = (card.getAttribute('data-tags') || '').toLowerCase();
      const title = (card.querySelector('h3')?.textContent || '').toLowerCase();
      const content = card.textContent?.toLowerCase() || '';
      
      // More flexible search - split search terms by spaces for multi-word searches
      const searchTerms = searchTerm.split(' ').filter(term => term.length > 0);
      const matches = searchTerm === '' || searchTerms.every(term => 
        tags.includes(term) || 
        title.includes(term) || 
        content.includes(term)
      );
      
      cardMatches[index] = matches;
      if (matches) visibleCount++;
      
      // Add staggered animation delay
      setTimeout(() => {
        if (matches) {
          card.style.display = 'block';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            if (card.style.opacity === '0') {
              card.style.display = 'none';
            }
          }, 200);
        }
      }, index * 30);
    });
    
    // Update UI elements after animation
    setTimeout(() => {
      // Hide loading indicator
      if (searchLoading) {
        searchLoading.style.display = 'none';
      }
      
      // Update results counter
      if (resultsCount && searchResults) {
        resultsCount.textContent = visibleCount.toString();
        if (searchTerm !== '' && visibleCount > 0) {
          searchResults.style.display = 'block';
        } else {
          searchResults.style.display = 'none';
        }
      }
      
      // Show/hide clear button
      if (clearButton) {
        clearButton.style.display = searchTerm !== '' ? 'flex' : 'none';
      }
      
      // Show/hide no results message and container
      if (noResults && projectContainer) {
        if (visibleCount === 0 && searchTerm !== '') {
          noResults.style.display = 'block';
          projectContainer.style.display = 'none';
        } else {
          noResults.style.display = 'none';
          projectContainer.style.display = isSearching ? 'grid' : 'block';
        }
      }
    }, projectCards.length * 30 + 100);
  };

  const debouncedSearch = debounce(performSearch, 200);

  const scatterCards = () => {
    const container = document.getElementById('projectContainer');
    if (!container) return;
    
    // Switch to clean grid layout with simple animations
    container.className = 'clean-grid-layout';
    const cards = document.querySelectorAll('.project-card') as NodeListOf<HTMLElement>;
    
    cards.forEach((card, index) => {
      card.classList.remove('scattered');
      card.classList.add('grid-card');
      card.style.position = 'relative';
      card.style.left = 'auto';
      card.style.top = 'auto';
      card.style.width = 'auto';
      
      // Simple entrance animation
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.transition = 'all 0.6s ease-out';
      }, index * 100 + 200);
    });
  };
  
  // Just use CSS Grid - much cleaner approach

  const stackCards = () => {
    const container = document.getElementById('projectContainer');
    const cards = document.querySelectorAll('.project-card') as NodeListOf<HTMLElement>;
    
    if (!container) return;
    
    // Switch to grid mode
    container.className = 'grid-mode';
    
    cards.forEach((card) => {
      card.classList.remove('scattered');
      card.classList.add('stacked');
      card.style.left = 'auto';
      card.style.top = 'auto';
      card.style.transform = 'none';
      card.style.position = 'relative';
      card.style.zIndex = 'auto';
      card.style.width = 'auto'; // Reset width for grid mode
    });
  };

  // Initialize clean grid layout after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      scatterCards();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <style jsx>{`
        .clean-grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 3rem;
          padding: 1rem 3rem 3rem 3rem;
          max-width: 1600px;
          margin: 0 auto;
          position: relative;
        }
        
        .clean-grid-layout::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: 
            radial-gradient(circle at 20% 30%, rgba(100, 200, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 100, 200, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(100, 255, 200, 0.05) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
          animation: float 20s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            filter: blur(0px);
          }
          25% { 
            transform: translateY(-20px) rotate(1deg);
            filter: blur(1px);
          }
          50% { 
            transform: translateY(-10px) rotate(-1deg);
            filter: blur(0px);
          }
          75% { 
            transform: translateY(-30px) rotate(1deg);
            filter: blur(1px);
          }
        }
        
        .project-card.grid-card {
          background: linear-gradient(145deg, 
            rgba(15, 15, 25, 0.95) 0%,
            rgba(25, 25, 35, 0.9) 50%,
            rgba(15, 15, 25, 0.95) 100%
          );
          border: 2px solid;
          border-image: linear-gradient(145deg, 
            rgba(100, 200, 255, 0.3) 0%, 
            rgba(255, 100, 200, 0.3) 50%, 
            rgba(100, 255, 200, 0.3) 100%
          ) 1;
          border-radius: 24px;
          padding: 2.5rem;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          backdrop-filter: blur(25px) saturate(180%);
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.4),
            0 5px 15px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 0 50px rgba(100, 200, 255, 0.1);
          min-height: 600px;
          position: relative;
          overflow: hidden;
          transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
        }
        
        .project-card.grid-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          transition: left 0.8s ease;
          z-index: 1;
        }
        
        .project-card.grid-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at var(--x, 50%) var(--y, 50%),
            rgba(100, 200, 255, 0.1) 0%,
            transparent 50%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 2;
        }
        
        .project-card.grid-card:hover {
          transform: translateY(-5px);
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.4),
            0 5px 15px rgba(100, 200, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 0 40px rgba(100, 200, 255, 0.15);
          border-image: linear-gradient(145deg, 
            rgba(100, 200, 255, 0.6) 0%, 
            rgba(255, 100, 200, 0.6) 50%, 
            rgba(100, 255, 200, 0.6) 100%
          ) 1;
        }
        
        .project-card.grid-card:hover::before {
          left: 100%;
        }
        
        .project-card.grid-card:hover::after {
          opacity: 1;
        }
        
        .project-card.grid-card h2 {
          font-size: 1.8rem;
          font-weight: 800;
          background: linear-gradient(135deg, 
            #64c8ff 0%, 
            #ff64c8 50%, 
            #64ffc8 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1.5rem;
          line-height: 1.3;
          text-shadow: 0 0 30px rgba(100, 200, 255, 0.3);
          position: relative;
          z-index: 3;
          animation: shimmer 3s ease-in-out infinite alternate;
        }
        
        @keyframes shimmer {
          0% { filter: brightness(1) saturate(1); }
          100% { filter: brightness(1.2) saturate(1.3); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 
              0 15px 35px rgba(0, 0, 0, 0.4),
              0 5px 15px rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              0 0 50px rgba(100, 200, 255, 0.1);
          }
          50% { 
            box-shadow: 
              0 15px 35px rgba(0, 0, 0, 0.4),
              0 5px 15px rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              0 0 80px rgba(100, 200, 255, 0.2);
          }
        }
        
        .project-card.grid-card {
          animation: pulse-glow 4s ease-in-out infinite alternate;
        }
        
        .project-card.grid-card p {
          font-size: 1.25rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 2rem;
          position: relative;
          z-index: 3;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }
        
        .project-card.grid-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
          background: linear-gradient(90deg, 
            rgba(255, 255, 255, 0.9) 0%, 
            rgba(100, 200, 255, 0.8) 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 2rem 0 1rem 0;
          text-transform: uppercase;
          letter-spacing: 2px;
          position: relative;
          z-index: 3;
        }
        
        .project-card.grid-card h3::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, 
            #64c8ff 0%, 
            #ff64c8 100%
          );
          border-radius: 2px;
          box-shadow: 0 0 10px rgba(100, 200, 255, 0.5);
        }
        
        .project-card.grid-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .project-card.grid-card li {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.05) 0%,
            rgba(100, 200, 255, 0.08) 100%
          );
          backdrop-filter: blur(10px);
          padding: 1.2rem 1.8rem;
          margin-bottom: 1rem;
          border-radius: 12px;
          border: 1px solid rgba(100, 200, 255, 0.2);
          border-left: 4px solid;
          border-left-color: #64c8ff;
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          position: relative;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: 3;
          box-shadow: 
            0 2px 10px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        .project-card.grid-card li::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(100, 200, 255, 0.1) 0%,
            rgba(255, 100, 200, 0.05) 100%
          );
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .project-card.grid-card li:hover {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%,
            rgba(100, 200, 255, 0.15) 100%
          );
          transform: translateX(8px) translateY(-2px);
          border-left-color: #ff64c8;
          box-shadow: 
            0 8px 25px rgba(100, 200, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
        
        .project-card.grid-card li:hover::before {
          opacity: 1;
        }
        #projectSearch:focus {
          border-color: #42a5f5 !important;
          box-shadow: 0 0 0 3px rgba(66, 165, 245, 0.1) !important;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Responsive design */
        @media (max-width: 1100px) {
          .clean-grid-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding: 1rem 2rem 2rem 2rem;
            max-width: 800px;
          }
        }
        
        @media (max-width: 768px) {
          .clean-grid-layout {
            padding: 0.5rem 1.5rem 1.5rem 1.5rem;
            gap: 2rem;
          }
          
          .project-card.grid-card {
            padding: 1.5rem;
            min-height: 500px;
          }
          
          .project-card.grid-card h2 {
            font-size: 1.6rem;
          }
          
          .project-card.grid-card p {
            font-size: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .clean-grid-layout {
            padding: 0.5rem 1rem 1rem 1rem;
            gap: 1.5rem;
          }
          
          .project-card.grid-card {
            padding: 1.25rem;
          }
          
          .project-card.grid-card h2 {
            font-size: 1.4rem;
          }
          
          .project-card.grid-card li {
            padding: 0.8rem 1rem;
            font-size: 0.95rem;
          }
        }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
        .project-card {
          animation: floatIn 0.8s ease-out;
        }
        .project-card.scattered {
          position: absolute !important;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .project-card.stacked {
          position: relative !important;
          transform: none !important;
        }
        #projectContainer.scattered-mode {
          position: relative;
          min-height: 10000px;
          display: block !important;
        }
        #projectContainer.grid-mode {
          position: relative;
          display: grid !important;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 32px;
          min-height: auto;
        }
        @media (max-width: 768px) {
          #projectContainer.grid-mode {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          #projectContainer.scattered-mode {
            min-height: 7500px !important;
          }
          .project-card.scattered {
            width: 48% !important;
            max-width: 380px !important;
          }
          .filter-tags {
            justify-content: center !important;
          }
          .filter-tags span:first-child {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          #projectSearch {
            font-size: 0.9rem !important;
            padding: 12px 16px !important;
          }
          #projectContainer.scattered-mode {
            min-height: 6000px !important;
          }
          .project-card.scattered {
            width: 90% !important;
            max-width: 350px !important;
          }
        }

        .project-card button {
          max-width: 150px !important;
          width: fit-content !important;
          white-space: nowrap !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
          box-sizing: border-box !important;
        }
      `}</style>
      <section style={{ 
        backgroundColor: '#0a0a0a', 
        minHeight: '100vh', 
        padding: '120px 20px 60px',
        color: '#ffffff',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Hero Section */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: '700', 
              color: '#ffffff',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              My Work & Experience
            </h1>
            <p style={{ 
              fontSize: '1.3rem', 
              color: '#b0b0b0', 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.6',
              fontWeight: '400'
            }}>
              A collection of projects and experiences that showcase my journey in technology, artificial intelligence, and innovation.
            </p>
          </div>

          {/* AI Projects Section */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#ffffff',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              AI Projects
            </h2>
            <p style={{ 
              fontSize: '1rem', 
              color: '#b0b0b0', 
              lineHeight: '1.6',
              marginBottom: '40px',
              fontWeight: '400'
            }}>
              I have built several different AI-based tech projects. Each of my projects aims to address niche problems faced by society. My mission with these projects is simply to create innovative solutions that improve lives, promote sustainability, and drive positive change in communities around the world.
            </p>
            <p style={{ 
              fontSize: '1rem', 
              color: '#b0b0b0', 
              marginBottom: '40px',
              fontWeight: '400'
            }}>
              All these projects were created as personal initiatives by me during my free time!
            </p>

            {/* Search Results Counter */}
            <div id="searchResults" style={{ 
              textAlign: 'center',
              marginBottom: '20px',
              display: 'none'
            }}>
              <p style={{ 
                color: '#888888',
                fontSize: '0.9rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <span>🔍</span>
                <span id="resultsCount">8</span> projects found
              </p>
            </div>

            {/* Search Loading Indicator */}
            <div id="searchLoading" style={{ 
              textAlign: 'center',
              marginBottom: '20px',
              display: 'none'
            }}>
              <p style={{ 
                color: '#888888',
                fontSize: '0.9rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <span style={{ 
                  display: 'inline-block',
                  width: '16px',
                  height: '16px',
                  border: '2px solid #333333',
                  borderTop: '2px solid #42a5f5',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></span>
                Searching...
              </p>
            </div>

            {/* Project Search Bar */}
            <div style={{ 
              marginBottom: '40px',
              position: 'relative',
              maxWidth: '600px',
              margin: '0 auto 40px auto'
            }}>
              <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  placeholder="🔍 Search by language or framework (Python, TensorFlow, React, etc.)"
                  id="projectSearch"
                  style={{ 
                    width: '100%',
                    padding: '16px 20px',
                    fontSize: '1rem',
                    backgroundColor: '#1a1a1a',
                    border: '2px solid #333333',
                    borderRadius: '12px',
                    color: '#ffffff',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    paddingRight: '50px'
                  }}
                onFocus={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.style.borderColor = '#42a5f5';
                  target.style.boxShadow = '0 0 0 3px rgba(66, 165, 245, 0.1)';
                }}
                onBlur={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.style.borderColor = '#333333';
                  target.style.boxShadow = 'none';
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    const target = e.target as HTMLInputElement;
                    target.value = '';
                    performSearch('');
                    target.blur();
                  }
                }}
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  const searchTerm = target.value.toLowerCase().trim();
                  debouncedSearch(searchTerm);
                }}
                onChange={(e) => {
                  // Immediate feedback for clearing
                  const target = e.target as HTMLInputElement;
                  if (target.value === '') {
                    performSearch('');
                  }
                }}
              />
              <button
                id="clearSearch"
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#888888',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => {
                  const searchInput = document.getElementById('projectSearch') as HTMLInputElement;
                  if (searchInput) {
                    searchInput.value = '';
                    const event = new Event('change', { bubbles: true });
                    searchInput.dispatchEvent(event);
                    searchInput.focus();
                  }
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = '#333333';
                  target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = 'transparent';
                  target.style.color = '#888888';
                }}
              >
                ✕
              </button>
              </div>
            </div>

            {/* Filter Tags */}
            <div className="filter-tags" style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '12px', 
              marginBottom: '40px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <span style={{ 
                fontSize: '0.9rem', 
                color: '#888888', 
                marginRight: '8px',
                fontWeight: '500'
              }}>
                Quick filters:
              </span>
              {['Python', 'TensorFlow', 'PyTorch', 'JavaScript', 'Swift', 'OpenCV', 'FastAPI', 'React', 'Clear'].map(tag => 
                <button 
                  key={tag}
                  onClick={() => {
                    const searchInput = document.getElementById('projectSearch') as HTMLInputElement;
                    if (searchInput) {
                      if (tag === 'Clear') {
                        searchInput.value = '';
                      } else {
                        // Toggle functionality - if same tag clicked, clear search
                        if (searchInput.value.toLowerCase() === tag.toLowerCase()) {
                          searchInput.value = '';
                        } else {
                          searchInput.value = tag;
                        }
                      }
                      const event = new Event('change', { bubbles: true });
                      searchInput.dispatchEvent(event);
                    }
                  }}
                  style={{ 
                    padding: '8px 16px',
                    backgroundColor: tag === 'Clear' ? '#dc3545' : '#2a2a2a',
                    border: `1px solid ${tag === 'Clear' ? '#dc3545' : '#444444'}`,
                    borderRadius: '20px',
                    color: tag === 'Clear' ? '#ffffff' : '#b0b0b0',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLButtonElement;
                    if (tag === 'Clear') {
                      target.style.backgroundColor = '#bb2d3b';
                      target.style.borderColor = '#bb2d3b';
                    } else {
                      target.style.backgroundColor = '#42a5f5';
                      target.style.color = '#ffffff';
                      target.style.borderColor = '#42a5f5';
                      target.style.transform = 'translateY(-2px)';
                      target.style.boxShadow = '0 4px 12px rgba(66, 165, 245, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLButtonElement;
                    if (tag === 'Clear') {
                      target.style.backgroundColor = '#dc3545';
                      target.style.borderColor = '#dc3545';
                    } else {
                      target.style.backgroundColor = '#2a2a2a';
                      target.style.color = '#b0b0b0';
                      target.style.borderColor = '#444444';
                      target.style.transform = 'translateY(0)';
                      target.style.boxShadow = 'none';
                    }
                  }}
                >
                  {tag === 'Clear' ? '✕ Clear' : tag}
                </button>
              )}
            </div>

            {/* Project Container */}
            <div 
              id="projectContainer" 
              className="scattered-mode"
              style={{ 
                position: 'relative',
                minHeight: 'auto',
                transition: 'all 0.8s ease'
              }}
            >
              
              {/* Plant Pathogen Detection */}
              <div 
                className="project-card" 
                data-tags="python tensorflow keras opencv android kotlin sql dji" 
                style={{ 
                  backgroundColor: '#1a1a1a', 
                  padding: '32px', 
                  borderRadius: '16px',
                  border: '1px solid #333333',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={{ 
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #4CAF50 0%, #8BC34A 100%)'
                }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#ffffff', marginBottom: '16px' }}>
                  🌱 Plant Pathogen Detection
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px', fontWeight: '400' }}>
                  My Plant Pathogen Detection system is a Convolutional Neural Network that is compatible with DJI drone systems in order to detect 30+ types of pathogens in apple trees, saving apple orchardists in a local farm 20 hours weekly.
                </p>
                
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px' }}>Languages</h4>
                  <div style={{ color: '#b0b0b0', fontSize: '0.85rem', lineHeight: '1.6' }}>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#4CAF50', fontWeight: '600' }}>Python</span> – Data ingest, training, eval, augmentation.
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#4CAF50', fontWeight: '600' }}>Kotlin</span> – Android ground-station app (video ingest, TFLite inference, overlays).
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#4CAF50', fontWeight: '600' }}>Bash</span> – Data prep and training job wrappers.
                    </p>
                    <p style={{ marginBottom: '0px' }}>
                      <span style={{ color: '#4CAF50', fontWeight: '600' }}>SQL (SQLite)</span> – Lightweight on-device cache for predictions/flight logs.
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px' }}>Frameworks & Tools</h4>
                  <div style={{ color: '#b0b0b0', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#4CAF50', fontWeight: '600' }}>TensorFlow / Keras</span> – Sequential CNN with Conv2D/MaxPool/Dense layers, ImageDataGenerator for data augmentation, EarlyStopping and ModelCheckpoint for training optimization.
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#4CAF50', fontWeight: '600' }}>TensorFlow Lite</span> – NNAPI/GPU delegate for edge inference on Android devices with optimized performance.
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#4CAF50', fontWeight: '600' }}>Albumentations</span> – Advanced image augmentation library; <span style={{ color: '#4CAF50', fontWeight: '600' }}>OpenCV</span> (cv2) for frame operations and ROI crop processing.
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#4CAF50', fontWeight: '600' }}>Matplotlib</span> – Confusion matrices and error analysis visualization; <span style={{ color: '#4CAF50', fontWeight: '600' }}>scikit-learn</span> for data splits and metrics calculation.
                    </p>
                    <p style={{ marginBottom: '0px' }}>
                      <span style={{ color: '#4CAF50', fontWeight: '600' }}>DJI Mobile SDK + DJI UX SDK</span> – Telemetry data collection, waypoint mission planning, and live video stream integration.
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['TensorFlow', 'Keras', 'TensorFlow Lite', 'OpenCV', 'Albumentations', 'DJI SDK', 'Matplotlib', 'scikit-learn'].map(tech => 
                      <span key={tech} style={{ 
                        backgroundColor: 'rgba(76, 175, 80, 0.2)', 
                        color: '#4CAF50', 
                        padding: '4px 8px', 
                        borderRadius: '12px', 
                        fontSize: '0.75rem',
                        border: '1px solid rgba(76, 175, 80, 0.3)'
                      }}>
                        {tech}
                      </span>
                    )}
                  </div>
                </div>

                <button style={{ 
                  backgroundColor: 'transparent',
                  border: '1px solid #4CAF50',
                  color: '#4CAF50',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  View Details →
                </button>
              </div>

              {/* AI Voice Assistant */}
              <div 
                className="project-card" 
                data-tags="python openai pyaudio speechrecognition gtts jarvis" 
                style={{ 
                  backgroundColor: '#1a1a1a', 
                  padding: '32px', 
                  borderRadius: '16px',
                  border: '1px solid #333333',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={{ 
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #2196F3 0%, #03DAC6 100%)'
                }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#ffffff', marginBottom: '16px' }}>
                  🤖 AI Voice Assistant "Ronaldo"
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px', fontWeight: '400' }}>
                  Inspired by Iron Man's JARVIS, I created my own AI based voice assistant called "Ronaldo." This voice assistant can be activated by using the command terms "Ronaldo" or "Hi Ronaldo" followed by a question/prompt.
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '8px' }}>Languages</h4>
                  <p style={{ color: '#b0b0b0', fontSize: '0.85rem' }}>Python (core application and scripts)</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px' }}>Frameworks & Tools</h4>
                  <div style={{ color: '#b0b0b0', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#2196F3', fontWeight: '600' }}>PyAudio</span> – Real-time microphone capture and audio I/O handling for voice input processing.
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#2196F3', fontWeight: '600' }}>SpeechRecognition</span> – Google Speech Recognition backend for automatic speech recognition (ASR) and wake-word routing ("Ronaldo" / "Hi Ronaldo").
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#2196F3', fontWeight: '600' }}>OpenAI Python SDK</span> – GPT-3.5-turbo integration for intelligent response generation and natural language processing.
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#2196F3', fontWeight: '600' }}>gTTS</span> – Google Text-to-Speech service for converting AI responses into natural-sounding speech audio.
                    </p>
                    <p style={{ marginBottom: '0px' }}>
                      <span style={{ color: '#2196F3', fontWeight: '600' }}>playsound</span> – Audio playback library for playing the synthesized speech replies through system speakers.
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['PyAudio', 'SpeechRecognition', 'OpenAI SDK', 'gTTS', 'playsound', 'GPT-3.5'].map(tech => 
                      <span key={tech} style={{ 
                        backgroundColor: 'rgba(33, 150, 243, 0.2)', 
                        color: '#2196F3', 
                        padding: '4px 8px', 
                        borderRadius: '12px', 
                        fontSize: '0.75rem',
                        border: '1px solid rgba(33, 150, 243, 0.3)'
                      }}>
                        {tech}
                      </span>
                    )}
                  </div>
                </div>

                <button style={{ 
                  backgroundColor: 'transparent',
                  border: '1px solid #2196F3',
                  color: '#2196F3',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  View Details →
                </button>
              </div>

              {/* Mood Based Sound Generation */}
              <div 
                className="project-card" 
                data-tags="python pytorch numpy encodec conformer hubert" 
                style={{ 
                  backgroundColor: '#1a1a1a', 
                  padding: '32px', 
                  borderRadius: '16px',
                  border: '1px solid #333333',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={{ 
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #9C27B0 0%, #E91E63 100%)'
                }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#ffffff', marginBottom: '16px' }}>
                  🎵 Mood Based Sound Generation
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px', fontWeight: '400' }}>
                  Using Google's research on the SoundStorm architecture, I created an AI model that generates sounds and music, adjusting the frequency, genre, and BPM of the generated sound depending on mood. Understanding how to modify the model based on mood is part of my research at the University of Toronto.
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px' }}>Languages</h4>
                  <div style={{ color: '#b0b0b0', fontSize: '0.85rem', lineHeight: '1.6' }}>
                    <p style={{ marginBottom: '0px' }}>
                      <span style={{ color: '#9C27B0', fontWeight: '600' }}>Python</span> – Model code, training, utilities.
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px' }}>Frameworks & Tools</h4>
                  <div style={{ color: '#b0b0b0', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#9C27B0', fontWeight: '600' }}>PyTorch</span> – (torch, torch.nn, torch.nn.functional) for modeling and training.
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#9C27B0', fontWeight: '600' }}>NumPy</span> – For array ops.
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#9C27B0', fontWeight: '600' }}>einops</span> – (rearrange, reduce, EinMix) for tensor reshaping/mixing layers.
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#9C27B0', fontWeight: '600' }}>Encodec</span> – (EncodecModel) as the neural audio codec interface.
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#9C27B0', fontWeight: '600' }}>Conformer</span> – backbone (core.conformer.Conformer) for sequence modeling.
                    </p>
                    <p style={{ marginBottom: '0px' }}>
                      <span style={{ color: '#9C27B0', fontWeight: '600' }}>joblib</span> – for lightweight persistence of artifacts. Optional inputs/components: HuBERT k-means semantic tokens and RVQ decoding steps.
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['PyTorch', 'NumPy', 'einops', 'Encodec', 'Conformer', 'joblib', 'HuBERT'].map(tech => 
                      <span key={tech} style={{ 
                        backgroundColor: 'rgba(156, 39, 176, 0.2)', 
                        color: '#9C27B0', 
                        padding: '4px 8px', 
                        borderRadius: '12px', 
                        fontSize: '0.75rem',
                        border: '1px solid rgba(156, 39, 176, 0.3)'
                      }}>
                        {tech}
                      </span>
                    )}
                  </div>
                </div>

                <button style={{ 
                  backgroundColor: 'transparent',
                  border: '1px solid #9C27B0',
                  color: '#9C27B0',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  View Details →
                </button>
              </div>

              {/* Facial Emotion Detection */}
              <div 
                className="project-card" 
                data-tags="python tensorflow keras numpy pandas matplotlib kaggle cnn" 
                style={{ 
                  backgroundColor: '#1a1a1a', 
                  padding: '32px', 
                  borderRadius: '16px',
                  border: '1px solid #333333',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={{ 
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #FF9800 0%, #FF5722 100%)'
                }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#ffffff', marginBottom: '16px' }}>
                  😊 Facial Emotion Detection
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px', fontWeight: '400' }}>
                  Through this project, I made a CNN looking at the seven distinct emotions of Happiness, Anger, Disgust, Fear, Sad, Surprised, or Neutral. Constructing models like this was a good starting point for developing and experimenting with CNNs for image classification tasks.
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px' }}>Languages</h4>
                  <div style={{ color: '#b0b0b0', fontSize: '0.85rem', lineHeight: '1.6' }}>
                    <p style={{ marginBottom: '0px' }}>
                      <span style={{ color: '#FF9800', fontWeight: '600' }}>Python</span> – Kaggle notebook + local scripts.
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px' }}>Frameworks & Tools</h4>
                  <div style={{ color: '#b0b0b0', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#FF9800', fontWeight: '600' }}>TensorFlow / Keras</span> – Sequential CNN with Conv2D, BatchNormalization, Activation('relu'), MaxPooling2D, Dropout, Flatten, Dense; ImageDataGenerator for augmentation; grayscale 48×48 inputs.
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#FF9800', fontWeight: '600' }}>Keras callbacks & training</span> – ModelCheckpoint, EarlyStopping, ReduceLROnPlateau; optimizer Adam; loss categorical_crossentropy; trained via fit_generator with batch size 128 and separate train/validation flows.
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#FF9800', fontWeight: '600' }}>NumPy, pandas, matplotlib, seaborn</span> – Data handling and plotting (accuracy/loss curves). os for file ops.
                    </p>
                    <p style={{ marginBottom: '0px' }}>
                      <span style={{ color: '#FF9800', fontWeight: '600' }}>Kaggle Kernel</span> + Face Expression Recognition dataset (7 classes: Happy, Angry, Disgust, Fear, Sad, Surprise, Neutral)
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['TensorFlow', 'Keras', 'NumPy', 'pandas', 'matplotlib', 'seaborn', 'Kaggle'].map(tech => 
                      <span key={tech} style={{ 
                        backgroundColor: 'rgba(255, 152, 0, 0.2)', 
                        color: '#FF9800', 
                        padding: '4px 8px', 
                        borderRadius: '12px', 
                        fontSize: '0.75rem',
                        border: '1px solid rgba(255, 152, 0, 0.3)'
                      }}>
                        {tech}
                      </span>
                    )}
                  </div>
                </div>

                <button style={{ 
                  backgroundColor: 'transparent',
                  border: '1px solid #FF9800',
                  color: '#FF9800',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  View Details →
                </button>
              </div>

              {/* COVID-19 Mask Detection */}
              <div 
                className="project-card" 
                data-tags="javascript html css tensorflow mediapipe webrtc canvas" 
                style={{ 
                  backgroundColor: '#1a1a1a', 
                  padding: '32px', 
                  borderRadius: '16px',
                  border: '1px solid #333333',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={{ 
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #F44336 0%, #E91E63 100%)'
                }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#ffffff', marginBottom: '16px' }}>
                  😷 COVID-19 Mask Detection
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px', fontWeight: '400' }}>
                  During the COVID-19 pandemic, I created a real-time mask detection system for use in public places. Connected to a live broadcasting camera, this detection system displays a bright red "no mask" text if a maskless person walks by, accompanied by a repeating siren until the mask is put on.
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px' }}>Languages</h4>
                  <div style={{ color: '#b0b0b0', fontSize: '0.85rem', lineHeight: '1.6' }}>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#F44336', fontWeight: '600' }}>JavaScript</span> – browser and optional Node.js helper
                    </p>
                    <p style={{ marginBottom: '0px' }}>
                      <span style={{ color: '#F44336', fontWeight: '600' }}>HTML/CSS</span> – for UI and overlays
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px' }}>Frameworks & Tools</h4>
                  <div style={{ color: '#b0b0b0', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#F44336', fontWeight: '600' }}>TensorFlow.js</span> – for on-device inference (WebGL or WASM backend)
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#F44336', fontWeight: '600' }}>face-api.js</span> – (tfjs-based) or MediaPipe Face Detection for face boxes
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#F44336', fontWeight: '600' }}>Custom tfjs classifier</span> – (MobileNetV2-style head) for mask vs no-mask
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#F44336', fontWeight: '600' }}>WebRTC getUserMedia</span> – to capture video from webcam or HDMI capture
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#F44336', fontWeight: '600' }}>HTML5 Canvas</span> – for drawing boxes and "NO MASK" text overlay
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#F44336', fontWeight: '600' }}>Web Audio API</span> – (or Howler.js) to loop the siren sound
                    </p>
                    <p style={{ marginBottom: '0px' }}>
                      <span style={{ color: '#F44336', fontWeight: '600' }}>Node.js + ffmpeg</span> – (optional) to restream RTSP/HDMI sources to the browser via HLS or WebRTC if using a broadcast camera
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['TensorFlow.js', 'face-api.js', 'MediaPipe', 'WebRTC', 'Canvas', 'Web Audio API'].map(tech => 
                      <span key={tech} style={{ 
                        backgroundColor: 'rgba(244, 67, 54, 0.2)', 
                        color: '#F44336', 
                        padding: '4px 8px', 
                        borderRadius: '12px', 
                        fontSize: '0.75rem',
                        border: '1px solid rgba(244, 67, 54, 0.3)'
                      }}>
                        {tech}
                      </span>
                    )}
                  </div>
                </div>

                <button style={{ 
                  backgroundColor: 'transparent',
                  border: '1px solid #F44336',
                  color: '#F44336',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  View Details →
                </button>
              </div>

              {/* TurtleShell Function */}
              <div 
                className="project-card" 
                data-tags="python pyspark swift sql scikit-learn fastapi corelocation h3 airflow" 
                style={{ 
                  backgroundColor: '#1a1a1a', 
                  padding: '32px', 
                  borderRadius: '16px',
                  border: '1px solid #333333',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={{ 
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #607D8B 0%, #455A64 100%)'
                }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#ffffff', marginBottom: '16px' }}>
                  🐢 TurtleShell Safety Platform
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px', fontWeight: '400' }}>
                  Built a geospatial ML pipeline that clusters the city into micro-regions and computes a dynamic risk score per cluster from multi-source crime feeds (police blotters, government portals, vetted datasets). A PySpark ETL cleans, geocodes, and deduplicates incidents; K-Means (k chosen via elbow curve) partitions lat/long space; time-aware features (hour-of-day, day-of-week, recency decay) and contextual signals (category mix, density, seasonal effects) drive the score. The iOS app (Swift) uses CoreLocation to snap users to the nearest cluster and returns preventative measures, "things to avoid," and best-practice tips tailored to location and time. A routing layer can optionally penalize risky edges to suggest safer paths. All inference is low-latency and privacy-preserving.
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px' }}>Languages</h4>
                  <div style={{ color: '#b0b0b0', fontSize: '0.85rem', lineHeight: '1.6' }}>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#607D8B', fontWeight: '600' }}>Python</span> – data ingestion, ML training
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#607D8B', fontWeight: '600' }}>PySpark</span> – distributed ETL
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#607D8B', fontWeight: '600' }}>Swift</span> – iOS client
                    </p>
                    <p style={{ marginBottom: '0px' }}>
                      <span style={{ color: '#607D8B', fontWeight: '600' }}>SQL</span> – analytics queries
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px' }}>Frameworks & Tools</h4>
                  <div style={{ color: '#b0b0b0', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#607D8B', fontWeight: '600' }}>scikit-learn</span> – K-Means clustering with elbow method for optimal cluster count
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#607D8B', fontWeight: '600' }}>PySpark</span> – distributed processing for large-scale crime data ETL and geospatial operations
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#607D8B', fontWeight: '600' }}>FastAPI</span> – high-performance REST API for real-time risk score queries and routing
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#607D8B', fontWeight: '600' }}>CoreLocation</span> – iOS framework for precise GPS positioning and geofencing
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#607D8B', fontWeight: '600' }}>H3</span> – Uber's hexagonal hierarchical geospatial indexing for efficient spatial queries
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#607D8B', fontWeight: '600' }}>PostGIS</span> – PostgreSQL extension for advanced geospatial data operations and indexing
                    </p>
                    <p style={{ marginBottom: '0px' }}>
                      <span style={{ color: '#607D8B', fontWeight: '600' }}>Airflow</span> – workflow orchestration for automated data pipeline scheduling and monitoring
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['scikit-learn', 'PySpark', 'FastAPI', 'CoreLocation', 'H3', 'PostGIS', 'Airflow'].map(tech => 
                      <span key={tech} style={{ 
                        backgroundColor: 'rgba(96, 125, 139, 0.2)', 
                        color: '#607D8B', 
                        padding: '4px 8px', 
                        borderRadius: '12px', 
                        fontSize: '0.75rem',
                        border: '1px solid rgba(96, 125, 139, 0.3)'
                      }}>
                        {tech}
                      </span>
                    )}
                  </div>
                </div>

                <button style={{ 
                  backgroundColor: 'transparent',
                  border: '1px solid #607D8B',
                  color: '#607D8B',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  View Details →
                </button>
              </div>

              {/* ConnectED */}
              <div 
                className="project-card" 
                data-tags="python javascript html css scrapy nltk google-api mern" 
                style={{ 
                  backgroundColor: '#1a1a1a', 
                  padding: '32px', 
                  borderRadius: '16px',
                  border: '1px solid #333333',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={{ 
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #00BCD4 0%, #009688 100%)'
                }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#ffffff', marginBottom: '16px' }}>
                  🎓 ConnectED Scholarship Platform
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px', fontWeight: '400' }}>
                  Built a pipeline that scrapes, normalizes, and ranks scholarships, matches students to mentors with NLP and linear programming, and calculates personalized aid projections.
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px' }}>Languages</h4>
                  <div style={{ color: '#b0b0b0', fontSize: '0.85rem', lineHeight: '1.6' }}>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#00BCD4', fontWeight: '600' }}>Python</span> – for scraping, NLP, optimization
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#00BCD4', fontWeight: '600' }}>JavaScript</span> – for MERN app
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#00BCD4', fontWeight: '600' }}>HTML/CSS</span> – for prototype pages
                    </p>
                    <p style={{ marginBottom: '0px' }}>
                      <span style={{ color: '#00BCD4', fontWeight: '600' }}>SQL</span> – for analytics queries
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px' }}>Frameworks & Tools</h4>
                  <div style={{ color: '#b0b0b0', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#00BCD4', fontWeight: '600' }}>Scrapy</span> – robust web scraping framework for scholarship data extraction from multiple sources
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#00BCD4', fontWeight: '600' }}>NLTK</span> – natural language processing for semantic matching and text analysis
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#00BCD4', fontWeight: '600' }}>Google APIs</span> – Sheets API for data integration and Drive API for document management
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#00BCD4', fontWeight: '600' }}>OR-Tools</span> – Google's optimization library for linear programming in mentor-student matching
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#00BCD4', fontWeight: '600' }}>pandas</span> – data manipulation and analysis for scholarship ranking and filtering
                    </p>
                    <p style={{ marginBottom: '0px' }}>
                      <span style={{ color: '#00BCD4', fontWeight: '600' }}>OAuth 2.0</span> – secure authentication and authorization for Google services integration
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['Scrapy', 'NLTK', 'Google APIs', 'OR-Tools', 'pandas', 'OAuth 2.0'].map(tech => 
                      <span key={tech} style={{ 
                        backgroundColor: 'rgba(0, 188, 212, 0.2)', 
                        color: '#00BCD4', 
                        padding: '4px 8px', 
                        borderRadius: '12px', 
                        fontSize: '0.75rem',
                        border: '1px solid rgba(0, 188, 212, 0.3)'
                      }}>
                        {tech}
                      </span>
                    )}
                  </div>
                </div>

                <button style={{ 
                  backgroundColor: 'transparent',
                  border: '1px solid #00BCD4',
                  color: '#00BCD4',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  View Details →
                </button>
              </div>

              {/* GrayPass */}
              <div 
                className="project-card" 
                data-tags="python javascript html css fastapi pytorch webgazer docker postgresql" 
                style={{ 
                  backgroundColor: '#1a1a1a', 
                  padding: '32px', 
                  borderRadius: '16px',
                  border: '1px solid #333333',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={{ 
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #FFC107 0%, #FF9800 100%)'
                }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#ffffff', marginBottom: '16px' }}>
                  🧠 GrayPass Brainprint Auth
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px', fontWeight: '400' }}>
                  GrayPass is a passwordless authentication engine that builds a per-user brainprint from cognitive and behavioral signals (Stroop reaction times, keystroke dynamics, eye-tracking). Achieved sub-100ms auth.
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px' }}>Languages</h4>
                  <div style={{ color: '#b0b0b0', fontSize: '0.85rem', lineHeight: '1.6' }}>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#FFC107', fontWeight: '600' }}>Python</span> – backend, ML features
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#FFC107', fontWeight: '600' }}>JavaScript</span> – frontend capture
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#FFC107', fontWeight: '600' }}>HTML/CSS</span> – responsive UI
                    </p>
                    <p style={{ marginBottom: '0px' }}>
                      <span style={{ color: '#FFC107', fontWeight: '600' }}>SQL</span> – PostgreSQL and SQLite
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px' }}>Frameworks & Tools</h4>
                  <div style={{ color: '#b0b0b0', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '16px' }}>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#FFC107', fontWeight: '600' }}>FastAPI</span> – high-performance async web framework for real-time authentication APIs
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#FFC107', fontWeight: '600' }}>PyTorch</span> – deep learning framework for neural network-based behavioral pattern recognition
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#FFC107', fontWeight: '600' }}>WebGazer.js</span> – eye-tracking library for capturing gaze patterns and cognitive load metrics
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#FFC107', fontWeight: '600' }}>Docker</span> – containerization for consistent deployment across environments
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#FFC107', fontWeight: '600' }}>PostgreSQL</span> – robust relational database for secure user profile and biometric data storage
                    </p>
                    <p style={{ marginBottom: '0px' }}>
                      <span style={{ color: '#FFC107', fontWeight: '600' }}>scikit-learn</span> – machine learning algorithms for feature extraction and classification
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['FastAPI', 'PyTorch', 'WebGazer.js', 'Docker', 'PostgreSQL', 'scikit-learn'].map(tech => 
                      <span key={tech} style={{ 
                        backgroundColor: 'rgba(255, 193, 7, 0.2)', 
                        color: '#FFC107', 
                        padding: '4px 8px', 
                        borderRadius: '12px', 
                        fontSize: '0.75rem',
                        border: '1px solid rgba(255, 193, 7, 0.3)'
                      }}>
                        {tech}
                      </span>
                    )}
                  </div>
                </div>

                <button style={{ 
                  backgroundColor: 'transparent',
                  border: '1px solid #FFC107',
                  color: '#FFC107',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  View Details →
                </button>
              </div>
            </div>

            {/* No Results Message */}
            <div id="noResults" style={{ 
              display: 'none',
              textAlign: 'center',
              padding: '80px 20px',
              color: '#b0b0b0',
              backgroundColor: '#1a1a1a',
              borderRadius: '16px',
              border: '1px solid #333333',
              margin: '40px 0'
            }}>
              <div style={{ 
                fontSize: '4rem', 
                marginBottom: '24px',
                opacity: '0.7'
              }}>🔍</div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                marginBottom: '16px', 
                color: '#ffffff',
                fontWeight: '600'
              }}>
                No projects found
              </h3>
              <p style={{ 
                fontSize: '1.1rem',
                marginBottom: '24px',
                lineHeight: '1.6'
              }}>
                Try searching for a different language or framework
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px', 
                justifyContent: 'center',
                marginTop: '20px'
              }}>
                <span style={{ color: '#888888', fontSize: '0.9rem' }}>Popular searches:</span>
                {['Python', 'JavaScript', 'TensorFlow', 'React', 'AI', 'ML'].map(term => 
                  <span 
                    key={term}
                    style={{ 
                      padding: '4px 12px',
                      backgroundColor: '#2a2a2a',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      color: '#42a5f5',
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      const searchInput = document.getElementById('projectSearch') as HTMLInputElement;
                      if (searchInput) {
                        searchInput.value = term;
                        const event = new Event('change', { bubbles: true });
                        searchInput.dispatchEvent(event);
                      }
                    }}
                  >
                    {term}
                  </span>
                )}
              </div>
            </div>


          </div>

          {/* Work Experience Section */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#ffffff',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Work Experience
            </h2>
            <p style={{ 
              fontSize: '1rem', 
              color: '#b0b0b0', 
              marginBottom: '40px',
              fontWeight: '400'
            }}>
              Any professional jobs and roles that I have worked in the past.
            </p>

            {/* Experience Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              
              {/* TurtleShell */}
              <div style={{ 
                backgroundColor: '#1a1a1a', 
                padding: '32px', 
                borderRadius: '12px',
                border: '1px solid #333333'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
                  Founder @ TurtleShell
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '400' }}>
                  TurtleShell is my own Tourist Safety Startup. Disturbingly, statistics reveal that 3 out of 100 potential travellers refrain from their journeys due to safety concerns, resulting in significant losses of tourism revenue, including $494M in the USA annually. TurtleShell, is frankly one of the only viable solutions in this untapped space of Tourist Safety tools. TurtleShell scrapes precise criminology data from policing organizations and governmental sources worldwide. This data undergoes rigorous preprocessing and clustering systems, ensuring that the responses are trustworthy. Taking into account crucial details such as the time of crime occurrences and the economic state of an area, TurtleShell generates personalized suggestions and precautionary messages to alleviate the stress of tourism anxiety associated with traveling to unfamiliar destinations.
                </p>
              </div>

              {/* Aview International */}
              {/* AviewInt */}
              <div style={{ 
                backgroundColor: '#1a1a1a', 
                padding: '32px', 
                borderRadius: '12px',
                border: '1px solid #333333'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
                  SWE and Data Intern @ AviewInt
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '400' }}>
                  I am working as a Software Engineering Intern at Aview International. Aview specializes in AI translations and AI audio/video dubbing for content creators and entertainment companies. They have worked with clients such as MARVEL, Yes Theory, Logan Paul, Ninja, Mark Rober, and many other top-tier clients in the entertainment and content creation industry. I am developing a data collection tool for Aview to efficiently track up-and-coming content creators on several social media platforms. My tool will be used to find potential clients for Aview across five different social platforms. Based on their growth, Aview can reach out to these potential clients. This process simplifies data collection and client management for Aview, as they do not need a separate team to find content creators and possible partnership opportunities; the AI scans the web for them.
                </p>
              </div>

              {/* Positive Powers */}
              <div style={{ 
                backgroundColor: '#1a1a1a', 
                padding: '32px', 
                borderRadius: '12px',
                border: '1px solid #333333'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
                  Founder @ Positive Powers
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '400' }}>
                  Positive Powers is a nonprofit dedicated to uplifting vulnerable community members by spreading hope and positivity. The organization has launched several initiatives in Canada and internationally in India. It is recognized by Ontario Solicitor General Sylvia Jones, Mayor Alan Thompson, the local newspaper "The Caledon Citizen," and the Delhi RWA. I have raised around $15,000 in funds so far, with a goal of positively impacting over 100,000 people by 2030. Our initiatives include sending positivity-driven cards to senior homes, partnering with small businesses across Canada to provide essentials to children in foster homes, and running a program called "Bag to School" to assist underprivileged children in getting school necessities. Most recently, I worked in New Delhi, helping underprivileged individuals that live under the global poverty line receive basic essential items for survival.
                </p>
              </div>

              {/* BenchSci */}
              <div style={{ 
                backgroundColor: '#1a1a1a', 
                padding: '32px', 
                borderRadius: '12px',
                border: '1px solid #333333'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
                  Summer Consultant @ BenchSci
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '400' }}>
                  In the summer of 2023, I spent two months working as a summer consultant at BenchSci. The HR team tasked me with creating a tool to help manage increasing workload burnout and stress among engineering employees. Over two months, I developed a managerial AI tool to track workload burnout based on employee schedules, tasks, projects, assigned issues, and task priorities. The model provides each employee with a burnout rating, accessible to project leads and managers as an extension to the Project Management tool JIRA, used at BenchSci for task allocation and management. The burnout tracking tool is supported by a generative AI model called BalanceBot, which offers suggestions to PMs on effective ways to distribute work and manage schedules based on detected burnout ratings for specific employees.
                </p>
              </div>

              {/* IKEA */}
              <div style={{ 
                backgroundColor: '#1a1a1a', 
                padding: '32px', 
                borderRadius: '12px',
                border: '1px solid #333333'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
                  Metaverse Consultant @ IKEA
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '400' }}>
                  In the spring of 2023, I was among a few high school students working as Metaverse Consultants at IKEA. My goal was to address future Gen-Z consumerism through a metaverse-based solution. I developed a mixed augmented reality Metaverse that reflects Gen-Z shopping habits via an IKEA life portal. This portal provided an immersive experience with personalized product recommendations accessible through the metaverse. It also incorporated values important to Gen-Z, such as networking and communication, allowing customers to interact via virtual characters in an IKEA networking cafe. As a result of our work, IKEA recently launched its virtual store in the online game Roblox, where employees and customers can connect through virtual characters.
                </p>
              </div>

              {/* NASA */}
              <div style={{ 
                backgroundColor: '#1a1a1a', 
                padding: '32px', 
                borderRadius: '12px',
                border: '1px solid #333333'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
                  Citizen Scientist @ NASA
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '400' }}>
                  As a NASA Citizen Scientist, I have a one-of-a-kind opportunity to contribute to the agency's climate and environmental research. I take the initiative of documenting observations and data about the environment around me. I then submit this data to NASA, where scientists use it to better understand our planet and how it is changing. I am passionate about science and the environment, and I am honoured to be able to contribute in some small way to NASA's research in these areas. As a Citizen Scientist, I work to improve our understanding of the world around us and to protect our planet for future generations. As of 2022, I contributed to 10 different projects affiliated with NASA.
                </p>
              </div>

              {/* Positive Powers */}
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000', marginBottom: '8px' }}>
                  Founder @ Positive Powers
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Positive Powers is a nonprofit dedicated to uplifting vulnerable community members by spreading hope and positivity. The organization has launched several initiatives in Canada and internationally in India. It is recognized by Ontario Solicitor General Sylvia Jones, Mayor Alan Thompson, the local newspaper "The Caledon Citizen," and the Delhi RWA. I have raised around $15,000 in funds so far, with a goal of positively impacting over 100,000 people by 2030. Our initiatives include sending positivity-driven cards to senior homes, partnering with small businesses across Canada to provide essentials to children in foster homes, and running a program called "Bag to School" to assist underprivileged children in getting school necessities. Most recently, I worked in New Delhi, helping underprivileged individuals that live under the global poverty line receive basic essential items for survival.
                </p>
              </div>

              {/* BenchSci */}
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000', marginBottom: '8px' }}>
                  Summer Consultant @ BenchSci
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  In the summer of 2023, I spent two months working as a summer consultant at BenchSci. The HR team tasked me with creating a tool to help manage increasing workload burnout and stress among engineering employees. Over two months, I developed a managerial AI tool to track workload burnout based on employee schedules, tasks, projects, assigned issues, and task priorities. The model provides each employee with a burnout rating, accessible to project leads and managers as an extension to the Project Management tool JIRA, used at BenchSci for task allocation and management. The burnout tracking tool is supported by a generative AI model called BalanceBot, which offers suggestions to PMs on effective ways to distribute work and manage schedules based on detected burnout ratings for specific employees.
                </p>
              </div>

              {/* IKEA */}
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000', marginBottom: '8px' }}>
                  Metaverse Consultant @ IKEA
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  In the spring of 2023, I was among a few high school students working as Metaverse Consultants at IKEA. My goal was to address future Gen-Z consumerism through a metaverse-based solution. I developed a mixed augmented reality Metaverse that reflects Gen-Z shopping habits via an IKEA life portal. This portal provided an immersive experience with personalized product recommendations accessible through the metaverse. It also incorporated values important to Gen-Z, such as networking and communication, allowing customers to interact via virtual characters in an IKEA networking cafe. As a result of our work, IKEA recently launched its virtual store in the online game Roblox, where employees and customers can connect through virtual characters.
                </p>
              </div>

              {/* NASA */}
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000', marginBottom: '8px' }}>
                  Citizen Scientist @ NASA
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  As a NASA Citizen Scientist, I have a one-of-a-kind opportunity to contribute to the agency's climate and environmental research. I take the initiative of documenting observations and data about the environment around me. I then submit this data to NASA, where scientists use it to better understand our planet and how it is changing. I am passionate about science and the environment, and I am honoured to be able to contribute in some small way to NASA's research in these areas. As a Citizen Scientist, I work to improve our understanding of the world around us and to protect our planet for future generations. As of 2022, I contributed to 10 different projects affiliated with NASA.
                </p>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link 
                href="#" 
                style={{ 
                  color: '#42a5f5', 
                  fontWeight: '600', 
                  textDecoration: 'none',
                  fontSize: '1rem',
                  transition: 'color 0.3s ease'
                }}
              >
                VIEW MY WORK EXPERIENCE
              </Link>
            </div>
          </div>

          {/* Research Work Section */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#ffffff',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Research Work and Advisory Roles
            </h2>
            <p style={{ 
              fontSize: '1rem', 
              color: '#b0b0b0', 
              marginBottom: '40px',
              fontWeight: '400'
            }}>
              Here is some of my Research and Advisory work that I have undertaken.
            </p>

            {/* Research Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
              
              {/* University of Toronto */}
              <div style={{ 
                backgroundColor: '#1a1a1a', 
                padding: '32px', 
                borderRadius: '12px',
                border: '1px solid #333333',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#ffffff', marginBottom: '16px' }}>
                  Research Assistant @ University of Toronto
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '400' }}>
                  Currently, I am a student researcher working under Dr. Brad Brass using the COBWEB modeling software (Complexity & Organized Behavior Within Environmental Bounds) I am specifically Working on diagnosing mental illness through machine learning. My research is geared toward limiting Suicidal Ideation among youth. I have understood a lot about human emotions and mood through my research with Dr. Bass.
                </p>
              </div>

              {/* MIT Research */}
              <div style={{ 
                backgroundColor: '#1a1a1a', 
                padding: '32px', 
                borderRadius: '12px',
                border: '1px solid #333333',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#ffffff', marginBottom: '16px' }}>
                  MIT verified ocean de-acidification research
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '400' }}>
                  The basic idea is to use two silver-bismuth systems operating in tandem in a cyclic process. One system would acidify the ocean water, and the other would regenerate the electrodes by alkalizing the treated stream. This would allow CO2 to be continuously removed from simulated ocean water with a relatively low energy consumption of 122 kJ mol−1, without relying on expensive bipolar membranes.
                </p>
              </div>

              {/* Ontario Youth Environment Council */}
              <div style={{ 
                backgroundColor: '#1a1a1a', 
                padding: '32px', 
                borderRadius: '12px',
                border: '1px solid #333333',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#ffffff', marginBottom: '16px' }}>
                  Ontario Youth Environment Council
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '400' }}>
                  Along with ten other individuals across Ontario, I am engaged in environmental and climate change issues and solutions, mentored by Minister David Piccini. As a council, we devise several solutions to counter environmental threats here in Ontario. Personally, I explored the prospect of how we can prevent and anticipate the consequences of carbon footprints on forestry, looking at satellite imagery to analyze a particular impact being made.
                </p>
              </div>

              {/* Peel District School Board */}
              <div style={{ 
                backgroundColor: '#1a1a1a', 
                padding: '32px', 
                borderRadius: '12px',
                border: '1px solid #333333',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#ffffff', marginBottom: '16px' }}>
                  Peel District School Board Equity Lead Council
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '400' }}>
                  Through the school district Equity Council, I work to ensure that all students across the district are provided with equal opportunities to succeed. As a council member, I work directly in partnership with school board heads and education ministers of the province.
                </p>
              </div>

              {/* Royal Canadian Air Cadets */}
              <div style={{ 
                backgroundColor: '#1a1a1a', 
                padding: '32px', 
                borderRadius: '12px',
                border: '1px solid #333333',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#ffffff', marginBottom: '16px' }}>
                  Flight Corporal @ Royal Canadian Air Cadets
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '400' }}>
                  At RCAC, I assisted children with developing leadership and discipline skills to improve their self-regulation. I also led excursions and other team-building exercises across the province of Ontario and fundraised for donations towards the Royal Canadian Legion to support cadets and commissioned officers.
                </p>
              </div>

              {/* Medium */}
              <div style={{ 
                backgroundColor: '#1a1a1a', 
                padding: '32px', 
                borderRadius: '12px',
                border: '1px solid #333333',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#ffffff', marginBottom: '16px' }}>
                  Technical Content Writer @ Medium
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '400' }}>
                  Through Medium, I have written several articles expressing my opinion or the work that I have completed in the fields of Artificial Intelligence, Mental Health, the Future of Technology, Climate Crises, Neural Networks, Worldwide Pandemics, Energy Crises, and even tech mobility. I have 300+ claps across all my publications.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{ 
            backgroundColor: '#1a1a1a', 
            color: 'white',
            padding: '60px 40px',
            borderRadius: '12px',
            textAlign: 'center',
            border: '1px solid #333333'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              I would love to work with you
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              marginBottom: '32px',
              color: '#b0b0b0',
              fontWeight: '400'
            }}>
              want to build something together? msg me
            </p>
            <Link 
              href="/contact" 
              style={{ 
                backgroundColor: '#42a5f5', 
                color: 'white', 
                padding: '16px 32px', 
                borderRadius: '8px', 
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                border: '1px solid #42a5f5'
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

export default Services;