import React from 'react';
import Layout from '../src/components/Layout';
import Link from 'next/link';

const Projects: React.FC = () => {
  const projects = [
    {
      title: &quot;Project 1&quot;,
      description: &quot;A description of your first technical project and what problems it solves.&quot;,
      technologies: [&quot;React&quot;, &quot;Node.js&quot;, &quot;MongoDB&quot;],
      github: &quot;https://github.com/aravM23/project1&quot;,
      demo: "https://project1-demo.com"
    },
    {
      title: &quot;Project 2&quot;, 
      description: &quot;A description of your second technical project and its impact.&quot;,
      technologies: [&quot;Python&quot;, &quot;TensorFlow&quot;, &quot;Flask&quot;],
      github: &quot;https://github.com/aravM23/project2&quot;,
      demo: "https://project2-demo.com"
    },
    {
      title: &quot;Project 3&quot;,
      description: &quot;A description of your third technical project and how it helps society.&quot;,
      technologies: [&quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;PostgreSQL&quot;],
      github: &quot;https://github.com/aravM23/project3&quot;,
      demo: "https://project3-demo.com"
    }
  ];

  return (
    <Layout title="Projects - Arav Mathur">
      {/* Header Section */}
      <section style={{ padding: '96px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
              Tech Projects
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '768px', margin: '0 auto' }}>
              I have built several different technical projects. Each of my projects aims to address niche problems faced by society, or are simply things I want to see come to life.
            </p>
          </div>

          {/* Projects Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px' }}>
            {projects.map((project, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: 'white', 
                  padding: '32px', 
                  borderRadius: '12px', 
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e5e7eb'
                }}
              >
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '24px', lineHeight: '1.6' }}>
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                    Technologies:
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        style={{ 
                          backgroundColor: '#e0e7ff', 
                          color: '#3730a3', 
                          padding: '4px 12px', 
                          borderRadius: '16px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '16px' }}>
                  <Link 
                    href={project.github}
                    style={{ 
                      color: '#3b82f6', 
                      fontWeight: '600', 
                      textDecoration: 'none',
                      fontSize: '0.875rem'
                    }}
                  >
                    View Code →
                  </Link>
                  <Link 
                    href={project.demo}
                    style={{ 
                      color: '#059669', 
                      fontWeight: '600', 
                      textDecoration: 'none',
                      fontSize: '0.875rem'
                    }}
                  >
                    Live Demo →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '24px' }}>
              Want to see more or collaborate on a project?
            </p>
            <Link 
              href="/contact"
              style={{ 
                backgroundColor: '#3b82f6', 
                color: 'white', 
                padding: '12px 32px', 
                borderRadius: '8px', 
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;