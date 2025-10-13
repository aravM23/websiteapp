import React from 'react';
import Layout from '../src/components/Layout';
import Link from 'next/link';

const Services: React.FC = () => {
  return (
    <Layout title="Projects and Experience - Arav Mathur">
      {/* Header Section */}
      <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            color: '#000', 
            marginBottom: '24px',
            textAlign: 'center'
          }}>
            Projects and Experience
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#666', 
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            Here's some information about my tech projects and work experience
          </p>

          {/* AI Projects Section */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#000', 
              marginBottom: '24px'
            }}>
              AI Projects
            </h2>
            <p style={{ 
              fontSize: '1rem', 
              color: '#666', 
              lineHeight: '1.6',
              marginBottom: '40px'
            }}>
              I have built several different AI-based tech projects. Each of my projects aims to address niche problems faced by society. My mission with these projects is simply to create innovative solutions that improve lives, promote sustainability, and drive positive change in communities around the world.
            </p>
            <p style={{ 
              fontSize: '1rem', 
              color: '#666', 
              marginBottom: '60px'
            }}>
              All these projects were created as personal initiatives by me during my free time!
            </p>

            {/* Project Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
              
              {/* Plant Pathogen Detection */}
              <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#000', marginBottom: '16px' }}>
                  Plant Pathogen Detection
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  My Plant Pathogen Detection system is a Convolutional Neural Network that is compatible with DJI drone systems in order to detect 30+ types of pathogens in apple trees, saving apple orchardists 20 hours weekly.
                </p>
              </div>

              {/* AI Voice Assistant */}
              <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#000', marginBottom: '16px' }}>
                  AI Voice Assistant
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Inspired by Iron Man's JARVIS, I created my own AI based voice assistant called &quot;Ronaldo.&quot; This voice assistant can be activated by using the command terms &quot;Ronaldo&quot; or &quot;Hi Ronaldo&quot; followed by a question/prompt.
                </p>
              </div>

              {/* Mood Based Sound Generation */}
              <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#000', marginBottom: '16px' }}>
                  Mood Based Sound Generation
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Using Google's research on the SoundStorm architecture, I created an AI model that generates sounds and music, adjusting the frequency, genre, and BPM of the generated sound depending on mood. Understanding how to modify the model based on mood is part of my research at the University of Toronto.
                </p>
              </div>

              {/* Facial Emotion Detection */}
              <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#000', marginBottom: '16px' }}>
                  Facial Emotion Detection
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Through this project, I made a CNN looking at the seven distinct emotions of Happiness, Anger, Disgust, Fear, Sad, Surprised, or Neutral. Constructing models like this was a good starting point for developing and experimenting with CNNs for image classification tasks.
                </p>
              </div>

              {/* COVID-19 Mask Detection */}
              <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#000', marginBottom: '16px' }}>
                  COVID-19 Mask Detection
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  During the COVID-19 pandemic, I created a real-time mask detection system for use in public places. Connected to a live broadcasting camera, this detection system displays a bright red &quot;no mask&quot; text if a maskless person walks by, accompanied by a repeating siren until the mask is put on.
                </p>
              </div>

              {/* TurtleShell Function */}
              <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#000', marginBottom: '16px' }}>
                  TurtleShell Function
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '16px' }}>
                  For my startup TurtleShell, I divided geographical regions through clustering. For each geographical cluster, I utilized data scraped from policing organizations, government sources, and other reliable resources to fetch crime information. Based on the information retrieved, TurtleShell provides users with preventative measures, things to avoid, and best practice recommendations depending on their coordinate location.
                </p>
                <Link 
                  href="#" 
                  style={{ 
                    color: '#4a90e2', 
                    fontWeight: '600', 
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}
                >
                  CHECK OUT MY PROJECTS HERE
                </Link>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#000', 
              marginBottom: '24px'
            }}>
              Work Experience
            </h2>
            <p style={{ 
              fontSize: '1rem', 
              color: '#666', 
              marginBottom: '40px'
            }}>
              Any professional jobs and roles that I have worked in the past.
            </p>

            {/* Experience Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              
              {/* TurtleShell */}
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000', marginBottom: '8px' }}>
                  Founder @ TurtleShell
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  TurtleShell is my own Tourist Safety Startup. Disturbingly, statistics reveal that 3 out of 100 potential travellers refrain from their journeys due to safety concerns, resulting in significant losses of tourism revenue, including $494M in the USA annually. TurtleShell, is frankly one of the only viable solutions in this untapped space of Tourist Safety tools. TurtleShell scrapes precise criminology data from policing organizations and governmental sources worldwide. This data undergoes rigorous preprocessing and clustering systems, ensuring that the responses are trustworthy. Taking into account crucial details such as the time of crime occurrences and the economic state of an area, TurtleShell generates personalized suggestions and precautionary messages to alleviate the stress of tourism anxiety associated with traveling to unfamiliar destinations.
                </p>
              </div>

              {/* Aview International */}
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000', marginBottom: '8px' }}>
                  SWE and Data Intern @ AviewInt
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  I am working as a Software Engineering Intern at Aview International. Aview specializes in AI translations and AI audio/video dubbing for content creators and entertainment companies. They have worked with clients such as MARVEL, Yes Theory, Logan Paul, Ninja, Mark Rober, and many other top-tier clients in the entertainment and content creation industry. I am developing a data collection tool for Aview to efficiently track up-and-coming content creators on several social media platforms. My tool will be used to find potential clients for Aview across five different social platforms. Based on their growth, Aview can reach out to these potential clients. This process simplifies data collection and client management for Aview, as they do not need a separate team to find content creators and possible partnership opportunities; the AI scans the web for them.
                </p>
              </div>

              {/* Positive Powers */}
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000', marginBottom: '8px' }}>
                  Founder @ Positive Powers
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Positive Powers is a nonprofit dedicated to uplifting vulnerable community members by spreading hope and positivity. The organization has launched several initiatives in Canada and internationally in India. It is recognized by Ontario Solicitor General Sylvia Jones, Mayor Alan Thompson, the local newspaper &quot;The Caledon Citizen,&quot; and the Delhi RWA. I have raised around $15,000 in funds so far, with a goal of positively impacting over 100,000 people by 2030. Our initiatives include sending positivity-driven cards to senior homes, partnering with small businesses across Canada to provide essentials to children in foster homes, and running a program called &quot;Bag to School&quot; to assist underprivileged children in getting school necessities. Most recently, I worked in New Delhi, helping underprivileged individuals that live under the global poverty line receive basic essential items for survival.
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
                  color: '#4a90e2', 
                  fontWeight: '600', 
                  textDecoration: 'none',
                  fontSize: '1rem'
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
              fontWeight: 'bold', 
              color: '#000', 
              marginBottom: '24px'
            }}>
              Research Work and Advisory Roles
            </h2>
            <p style={{ 
              fontSize: '1rem', 
              color: '#666', 
              marginBottom: '40px'
            }}>
              Here is some of my Research and Advisory work that I have undertaken.
            </p>

            {/* Research Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
              
              {/* University of Toronto */}
              <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#000', marginBottom: '16px' }}>
                  Research Assistant @ University of Toronto
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Currently, I am a student researcher working under Dr. Brad Brass using the COBWEB modeling software (Complexity & Organized Behavior Within Environmental Bounds) I am specifically Working on diagnosing mental illness through machine learning. My research is geared toward limiting Suicidal Ideation among youth. I have understood a lot about human emotions and mood through my research with Dr. Bass.
                </p>
              </div>

              {/* MIT Research */}
              <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#000', marginBottom: '16px' }}>
                  MIT verified ocean de-acidification research
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  The basic idea is to use two silver-bismuth systems operating in tandem in a cyclic process. One system would acidify the ocean water, and the other would regenerate the electrodes by alkalizing the treated stream. This would allow CO2 to be continuously removed from simulated ocean water with a relatively low energy consumption of 122 kJ mol−1, without relying on expensive bipolar membranes.
                </p>
              </div>

              {/* Ontario Youth Environment Council */}
              <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#000', marginBottom: '16px' }}>
                  Ontario Youth Environment Council
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Along with ten other individuals across Ontario, I am engaged in environmental and climate change issues and solutions, mentored by Minister David Piccini. As a council, we devise several solutions to counter environmental threats here in Ontario. Personally, I explored the prospect of how we can prevent and anticipate the consequences of carbon footprints on forestry, looking at satellite imagery to analyze a particular impact being made.
                </p>
              </div>

              {/* Peel District School Board */}
              <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#000', marginBottom: '16px' }}>
                  Peel District School Board Equity Lead Council
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Through the school district Equity Council, I work to ensure that all students across the district are provided with equal opportunities to succeed. As a council member, I work directly in partnership with school board heads and education ministers of the province.
                </p>
              </div>

              {/* Royal Canadian Air Cadets */}
              <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#000', marginBottom: '16px' }}>
                  Flight Corporal @ Royal Canadian Air Cadets
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  At RCAC, I assisted children with developing leadership and discipline skills to improve their self-regulation. I also led excursions and other team-building exercises across the province of Ontario and fundraised for donations towards the Royal Canadian Legion to support cadets and commissioned officers.
                </p>
              </div>

              {/* Medium */}
              <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#000', marginBottom: '16px' }}>
                  Technical Content Writer @ Medium
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Through Medium, I have written several articles expressing my opinion or the work that I have completed in the fields of Artificial Intelligence, Mental Health, the Future of Technology, Climate Crises, Neural Networks, Worldwide Pandemics, Energy Crises, and even tech mobility. I have 300+ claps across all my publications.
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

export default Services;