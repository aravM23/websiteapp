import React from 'react';
import Layout from '../src/components/Layout';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: &quot;Software Engineering Intern&quot;,
      company: &quot;Tech Company&quot;,
      duration: &quot;Summer 2024&quot;,
      description: &quot;Developed full-stack web applications using React and Node.js. Collaborated with senior engineers to implement new features and optimize application performance.&quot;,
      technologies: [&quot;React&quot;, &quot;Node.js&quot;, &quot;TypeScript&quot;, &quot;MongoDB&quot;]
    },
    {
      title: &quot;Freelance Developer&quot;, 
      company: &quot;Various Clients&quot;,
      duration: &quot;2023 - Present&quot;,
      description: &quot;Built custom websites and web applications for small businesses and startups. Focused on responsive design and user experience optimization.&quot;,
      technologies: [&quot;Next.js&quot;, &quot;React&quot;, &quot;Python&quot;, &quot;PostgreSQL&quot;]
    },
    {
      title: &quot;Research Assistant&quot;,
      company: &quot;University Lab&quot;,
      duration: &quot;2023 - 2024&quot;, 
      description: &quot;Conducted research on machine learning applications in healthcare. Developed data processing pipelines and implemented ML models for medical data analysis.&quot;,
      technologies: [&quot;Python&quot;, &quot;TensorFlow&quot;, &quot;Pandas&quot;, &quot;Scikit-learn&quot;]
    }
  ];

  const skills = [
    &quot;JavaScript/TypeScript&quot;,
    &quot;React/Next.js&quot;, 
    &quot;Node.js&quot;,
    &quot;Python&quot;,
    &quot;Machine Learning&quot;,
    &quot;PostgreSQL/MongoDB&quot;,
    &quot;Git/GitHub&quot;,
    &quot;AWS/Cloud Services&quot;,
    &quot;UI/UX Design&quot;,
    "Data Analysis"
  ];

  return (
    <Layout title="Experience - Arav Mathur">
      {/* Header Section */}
      <section style={{ padding: '96px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
              Experience
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '768px', margin: '0 auto' }}>
              Through internships, freelance work, and personal projects, I&apos;ve gained experience in full-stack development, AI/ML, and building scalable applications.
            </p>
          </div>

          {/* Experience Timeline */}
          <div style={{ marginBottom: '96px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '32px', textAlign: 'center' }}>
              Work Experience
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  style={{ 
                    backgroundColor: '#f9fafb', 
                    padding: '32px', 
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
                        {exp.title}
                      </h3>
                      <p style={{ fontSize: '1rem', color: '#3b82f6', fontWeight: '600' }}>
                        {exp.company}
                      </p>
                    </div>
                    <span style={{ 
                      backgroundColor: '#e0e7ff', 
                      color: '#3730a3', 
                      padding: '4px 12px', 
                      borderRadius: '16px',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      {exp.duration}
                    </span>
                  </div>
                  
                  <p style={{ color: '#6b7280', marginBottom: '16px', lineHeight: '1.6' }}>
                    {exp.description}
                  </p>
                  
                  <div>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                      Technologies Used:
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          style={{ 
                            backgroundColor: '#dcfce7', 
                            color: '#166534', 
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
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '32px' }}>
              Skills & Technologies
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', maxWidth: '800px', margin: '0 auto' }}>
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  style={{ 
                    backgroundColor: '#f3f4f6', 
                    color: '#374151', 
                    padding: '8px 16px', 
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    border: '1px solid #d1d5db'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;