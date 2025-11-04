import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  answer: string;
};

// Knowledge base extracted from the website content
const knowledgeBase = {
  personal: {
    name: 'Arav Mathur',
    age: '18 years old',
    location: 'Toronto, Ontario, Canada',
    education: 'Computer Science student at University of Waterloo',
    contact: {
      email: 'aravmathur23@gmail.com',
      phone: '+1 416 670 5465',
      linkedin: 'https://www.linkedin.com/in/arav-mathur-0567bb26a/',
      twitter: 'https://x.com/aravmathur23',
    },
  },
  about: {
    description: 'I am an 18-year-old from Toronto, Ontario, interested in making and shipping cool shit. My goals with each of my projects is to ensure that each project delivers value to society, and if it doesn\'t, its probably just something I really really want to use myself.',
    dream: 'I dream of making something one day that a bunch of people actually use and love.',
    interests: 'Building products that deliver value to society, full-stack development, AI/ML, passwordless authentication, sports betting analytics',
  },
  currentWork: {
    latest: 'GRAYPASS - a passwordless authentication engine that uses cognitive and behavioral signals to verify identity',
    student: 'First-year CS student at Waterloo',
    research: 'Researching the online shopping space for next project idea',
  },
  experience: [
    {
      title: 'Software Engineering Intern',
      company: 'Aview International (AviewInt)',
      description: 'Worked on AI translations and AI audio/video dubbing. Developed data collection tool to track content creators across social platforms. Clients include Marvel, Yes Theory, Logan Paul, Ninja, Mark Rober.',
      type: 'internship',
    },
    {
      title: 'Founder',
      company: 'TurtleShell',
      description: 'Tourist Safety Startup backed with $26,000 from Microsoft plus Government of Canada support. Built geospatial ML pipeline for dynamic risk scoring using crime data.',
      type: 'founder',
      funding: '$26,000 from Microsoft',
    },
    {
      title: 'Founder',
      company: 'Positive Powers',
      description: 'Nonprofit dedicated to uplifting vulnerable community members. Raised $15,000 in funds with goal to positively impact 100,000+ people by 2030.',
      type: 'nonprofit',
      funding: '$15,000 raised',
    },
    {
      title: 'Summer Consultant',
      company: 'BenchSci',
      description: 'Developed managerial AI tool to track workload burnout among engineering employees, integrated with JIRA.',
      type: 'consulting',
    },
    {
      title: 'Metaverse Consultant',
      company: 'IKEA',
      description: 'Developed mixed augmented reality Metaverse for Gen-Z shopping habits. IKEA later launched virtual store in Roblox.',
      type: 'consulting',
    },
    {
      title: 'Citizen Scientist',
      company: 'NASA',
      description: 'Contributed to climate and environmental research by documenting observations and data. Contributed to 10 different NASA-affiliated projects.',
      type: 'volunteer',
    },
    {
      title: 'Research Assistant',
      company: 'University of Toronto',
      description: 'Working with Dr. Brad Bass (IPCC Nobel Peace Prize team) on research.',
      type: 'research',
    },
  ],
  projects: [
    {
      name: 'Graypass',
      description: 'Passwordless authentication engine using cognitive and behavioral signals (Stroop reaction times, keystroke dynamics, eye-tracking). FastAPI backend with WebGazer.js frontend.',
      technologies: ['Python', 'FastAPI', 'JavaScript', 'WebGazer.js', 'PyTorch', 'scikit-learn', 'PostgreSQL'],
      link: 'https://www.graypass.org/',
      status: 'latest',
    },
    {
      name: 'TurtleShell',
      description: 'Tourist safety app with geospatial ML pipeline for dynamic risk scoring. Clusters cities into micro-regions using crime data from police and government sources.',
      technologies: ['Python', 'PySpark', 'Swift', 'scikit-learn', 'PostGIS', 'FastAPI', 'CoreLocation'],
      funding: '$26,000 from Microsoft',
      link: 'https://youtu.be/DEJDNSfQB8I?si=LeXEmUu76gGb7oIJ',
    },
    {
      name: 'UEFA Champions League Sports Betting Assistant',
      description: 'Streamlit-powered analytics dashboard tracking Champions League matches with betting insights and live odds movements.',
      technologies: ['Python', 'Streamlit', 'pandas', 'scikit-learn', 'BeautifulSoup', 'Plotly'],
      link: 'https://uclsportsbetting.streamlit.app/',
    },
    {
      name: 'ConnectED',
      description: 'Tinder for Scholarships and Grants. Scrapes and ranks scholarships, matches students to mentors using NLP and linear programming.',
      technologies: ['Python', 'Scrapy', 'NLTK', 'Google OR-Tools', 'Google Sheets API', 'Google Calendar API'],
      link: 'https://github.com/aravM23/ConnectED',
    },
    {
      name: 'Plant Pathogen Detection',
      description: 'CNN compatible with DJI drone systems to detect 30+ types of pathogens in apple trees, saving orchardists 20 hours weekly.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'DJI Mobile SDK', 'Kotlin'],
      link: 'https://medium.com/@aravmathur23/solving-the-apple-pathology-problem-using-artificial-intelligence-fa373a0f552a',
    },
    {
      name: 'AI Voice Assistant "Ronaldo"',
      description: 'JARVIS-inspired voice assistant activated by "Ronaldo" or "Hi Ronaldo" commands.',
      technologies: ['Python', 'PyAudio', 'SpeechRecognition', 'OpenAI API', 'gTTS'],
      link: 'https://medium.com/@aravmathur23/meet-ronaldo-my-personal-voice-assistant-here-s-how-i-made-it-58b566bc1fe0',
    },
    {
      name: 'Mood Based Sound Generation',
      description: 'AI model generating sounds and music using Google\'s SoundStorm architecture, adjusting frequency, genre, and BPM based on mood.',
      technologies: ['Python', 'PyTorch', 'Encodec', 'Conformer'],
      link: 'https://medium.com/@aravmathur23/how-i-created-an-ai-model-for-sound-generation-using-soundstorm-a31b28fd8c43',
    },
    {
      name: 'Facial Emotion Detection',
      description: 'CNN for detecting seven distinct emotions: Happiness, Anger, Disgust, Fear, Sad, Surprised, Neutral.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      link: 'https://medium.com/@aravmathur23/the-path-to-constructing-my-own-cnn-models-effectively-while-learning-creating-and-innovating-all-d02ffafaa1c2',
    },
  ],
  achievements: [
    {
      title: 'Top 32 @ Hack the North',
      description: 'Canada\'s largest hackathon, 36-hour prototype with live judging',
      link: 'https://www.youtube.com/watch?v=9KyURGKkTMI',
    },
    {
      title: '11th Place @ Empower Hacks 2.0',
      description: 'Finished 11th overall among 1885 participants',
      link: 'https://devpost.com/software/connected-ie5ghl',
    },
    {
      title: 'Published Author',
      description: 'Published two dystopian novels on Kindle',
    },
    {
      title: 'Microsoft Funding',
      description: 'Received $26,000 funding from Microsoft for TurtleShell',
    },
    {
      title: 'Government Support',
      description: 'TurtleShell received support from Government of Canada',
    },
  ],
  skills: {
    languages: ['Python', 'JavaScript', 'TypeScript', 'Swift', 'Kotlin', 'SQL', 'Bash'],
    frameworks: ['React', 'Next.js', 'FastAPI', 'Node.js', 'TensorFlow', 'PyTorch', 'Streamlit'],
    tools: ['Docker', 'PostgreSQL', 'MongoDB', 'Git', 'AWS', 'PySpark', 'scikit-learn'],
    specialties: ['AI/ML', 'Full-stack Development', 'Computer Vision', 'NLP', 'Geospatial Analysis', 'Mobile Development'],
  },
  funFacts: [
    'Published two dystopian novels on Kindle',
    'Research assistant at U of T with Dr. Brad Bass (IPCC Nobel Peace Prize team)',
    'Founded Positive Powers nonprofit, raised $15,000 for positivity projects across two continents',
    'Likes Formula 1 racing',
    'Dreams of making something that people actually use and love',
  ],
};

function searchKnowledgeBase(question: string): string {
  const q = question.toLowerCase();

  // Personal info queries
  if (q.includes('who is') || q.includes('who are') || q.includes('tell me about arav')) {
    return `Arav Mathur is an 18-year-old CS student at the University of Waterloo from Toronto, Ontario. He's passionate about building products that deliver value to society. He just shipped his latest project GRAYPASS, a passwordless authentication engine. He previously founded TurtleShell (tourist safety startup backed with $26,000 from Microsoft) and worked as a Software Engineering Intern at Aview International. He dreams of making something one day that a bunch of people actually use and love. 🚀`;
  }

  // Age queries
  if (q.includes('how old') || q.includes('age')) {
    return `Arav is ${knowledgeBase.personal.age}. 🎂`;
  }

  // Location queries
  if (q.includes('where') && (q.includes('from') || q.includes('live') || q.includes('location'))) {
    return `Arav is from ${knowledgeBase.personal.location}. He's currently a first-year CS student at the University of Waterloo. 📍`;
  }

  // Education queries
  if (q.includes('school') || q.includes('university') || q.includes('college') || q.includes('education') || q.includes('study') || q.includes('waterloo')) {
    return `Arav is studying Computer Science at the University of Waterloo. He's currently a first-year student, probably working on building something cool in his dorm room right now! 🎓💻`;
  }

  // Latest work/project queries
  if (q.includes('latest') || q.includes('recent') || q.includes('current') || q.includes('now') || q.includes('working on')) {
    return `Arav just shipped GRAYPASS, a passwordless authentication engine that uses cognitive and behavioral signals (like Stroop reaction times, keystroke dynamics, and eye-tracking) to verify your identity. It helps get away from infinite authentication loops and captcha nonsense! Check it out at https://www.graypass.org/. He's also a first-year CS student at Waterloo and spending his free time deep researching the online shopping space for his next idea. 🧠🔐`;
  }

  // Work experience queries - specific company
  if (q.includes('aview') || q.includes('last work') || q.includes('internship')) {
    return `Arav worked as a Software Engineering Intern at Aview International, a Toronto startup specializing in AI translations and content dubbing. They work with brands like Marvel and creators like Logan Paul. He developed a data collection tool to track up-and-coming content creators across multiple social media platforms. 🎬✨`;
  }

  if (q.includes('turtleshell')) {
    return `TurtleShell is Arav's tourist safety startup that was backed with $26,000 from Microsoft plus support from the Government of Canada! It uses a geospatial ML pipeline to cluster cities into micro-regions and compute dynamic risk scores from multi-source crime feeds. The iOS app gives users preventative measures and safety tips based on their location and time. 🐢🔒`;
  }

  if (q.includes('benchsci')) {
    return `At BenchSci, Arav worked as a Summer Consultant developing a managerial AI tool to track workload burnout among engineering employees. The tool analyzes employee schedules, tasks, and priorities to provide burnout ratings, integrated with JIRA. It includes BalanceBot, a generative AI that suggests better work distribution. 📊💼`;
  }

  if (q.includes('ikea')) {
    return `Arav worked as a Metaverse Consultant at IKEA in Spring 2023, developing a mixed augmented reality Metaverse reflecting Gen-Z shopping habits. The portal provided immersive experiences with personalized recommendations and a networking cafe where customers could interact via virtual characters. IKEA later launched its virtual store in Roblox! 🛋️🎮`;
  }

  if (q.includes('nasa')) {
    return `Arav is a NASA Citizen Scientist, contributing to climate and environmental research by documenting observations and data about the environment. As of 2022, he contributed to 10 different NASA-affiliated projects! 🚀🌍`;
  }

  if (q.includes('positive powers')) {
    return `Positive Powers is Arav's nonprofit dedicated to uplifting vulnerable community members by spreading hope and positivity. He's raised around $15,000 in funds with a goal to positively impact over 100,000 people by 2030. Initiatives include sending positivity cards to senior homes, partnering with Canadian businesses for foster children, and the "Bag to School" program. ❤️✨`;
  }

  // Project queries
  if (q.includes('project') || q.includes('built') || q.includes('made')) {
    return `Arav has built some amazing projects! Here are his key ones:

• 🔐 **Graypass** - Passwordless auth using cognitive/behavioral signals
• 🐢 **TurtleShell** - Tourist safety app ($26K Microsoft funding)
• ⚽ **UEFA Champions League Betting Assistant** - Sports analytics dashboard
• 🎓 **ConnectED** - Tinder for Scholarships (matches students to mentors)
• 🍎 **Plant Pathogen Detection** - AI for apple orchards with drones
• 🗣️ **Ronaldo** - JARVIS-inspired voice assistant
• 🎵 **Mood Based Sound Generation** - AI music from emotions
• 😊 **Facial Emotion Detection** - CNN recognizing 7 emotions

Ask me about any specific project for details! 💻🚀`;
  }

  if (q.includes('graypass')) {
    const project = knowledgeBase.projects.find(p => p.name === 'Graypass');
    return `${project?.description} Built with ${project?.technologies.slice(0, 4).join(', ')}. Check it out: ${project?.link} 🧠🔐`;
  }

  if (q.includes('connected') || q.includes('scholarship') || q.includes('tinder for')) {
    const project = knowledgeBase.projects.find(p => p.name === 'ConnectED');
    return `ConnectED is Arav's "Tinder for Scholarships and Grants"! 🎓💰 It scrapes and ranks scholarships, then matches students to mentors using NLP and linear programming optimization. The system uses Google Sheets API and Google Calendar API to create 15-minute speed-dating style sessions between students and mentors. Technologies: ${project?.technologies.join(', ')}. Check it out: ${project?.link}`;
  }

  if (q.includes('sports betting') || q.includes('uefa') || q.includes('champions league')) {
    const project = knowledgeBase.projects.find(p => p.name.includes('UEFA'));
    return `Arav built a UEFA Champions League Sports Betting Assistant! ⚽📊 It's a Streamlit-powered analytics dashboard that tracks Champions League matches with betting insights and live odds movements. Great for analyzing football matches and making informed betting decisions. Try it: ${project?.link}`;
  }

  if (q.includes('plant') || q.includes('pathogen') || q.includes('apple')) {
    const project = knowledgeBase.projects.find(p => p.name.includes('Plant'));
    return `Arav developed a Plant Pathogen Detection system using CNNs compatible with DJI drone systems! 🍎🚁 It can detect 30+ types of pathogens in apple trees, saving orchardists around 20 hours of work weekly. Built with TensorFlow, Keras, OpenCV, and DJI Mobile SDK. Read more: ${project?.link}`;
  }

  if (q.includes('ronaldo') || q.includes('voice assistant') || q.includes('jarvis')) {
    const project = knowledgeBase.projects.find(p => p.name.includes('Ronaldo'));
    return `Meet Ronaldo! 🗣️🤖 Arav's JARVIS-inspired voice assistant activated by saying "Ronaldo" or "Hi Ronaldo". It uses speech recognition, OpenAI API, and text-to-speech to have conversations. Read about how he built it: ${project?.link}`;
  }

  if (q.includes('mood') || q.includes('music') || q.includes('sound generation') || q.includes('soundstorm')) {
    const project = knowledgeBase.projects.find(p => p.name.includes('Mood'));
    return `Arav created an AI model for Mood Based Sound Generation! 🎵🎨 It uses Google's SoundStorm architecture to generate sounds and music, adjusting frequency, genre, and BPM based on your mood. Built with PyTorch and Encodec. Learn more: ${project?.link}`;
  }

  if (q.includes('emotion') || q.includes('facial') || q.includes('face detection')) {
    const project = knowledgeBase.projects.find(p => p.name.includes('Facial'));
    return `Arav built a Facial Emotion Detection CNN that can recognize seven distinct emotions: Happiness, Anger, Disgust, Fear, Sad, Surprised, and Neutral! 😊😠😨 Built with TensorFlow and OpenCV. Read about it: ${project?.link}`;
  }

  // Skills queries
  if (q.includes('skill') || q.includes('technology') || q.includes('languages') || q.includes('what can')) {
    return `Arav's tech stack includes:\n\n📝 Languages: ${knowledgeBase.skills.languages.join(', ')}\n\n🛠️ Frameworks: ${knowledgeBase.skills.frameworks.slice(0, 6).join(', ')}\n\n⚡ Specialties: ${knowledgeBase.skills.specialties.join(', ')}\n\nHe's particularly passionate about AI/ML and building full-stack products!`;
  }

  // Achievements
  if (q.includes('achievement') || q.includes('award') || q.includes('hackathon') || q.includes('win') || q.includes('accomplishment')) {
    return `Arav has some impressive achievements:\n\n🏆 Top 32 @ Hack the North (Canada's largest hackathon)\n🥇 11th place @ Empower Hacks 2.0 (among 1885 participants)\n💰 $26,000 funding from Microsoft for TurtleShell\n📚 Published two dystopian novels on Kindle\n❤️ Raised $15,000 through Positive Powers nonprofit\n\nPretty cool, right? 😎`;
  }

  // Contact queries
  if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('get in touch')) {
    return `You can reach Arav at:\n\n📧 Email: ${knowledgeBase.personal.contact.email}\n📱 Phone: ${knowledgeBase.personal.contact.phone}\n💼 LinkedIn: ${knowledgeBase.personal.contact.linkedin}\n🐦 Twitter: ${knowledgeBase.personal.contact.twitter}\n\nOr fill out the contact form on the /contact page! 📬`;
  }

  // Fun facts
  if (q.includes('fun fact') || q.includes('interesting') || q.includes('hobby') || q.includes('hobbies')) {
    const randomFact = knowledgeBase.funFacts[Math.floor(Math.random() * knowledgeBase.funFacts.length)];
    return `Here's a fun fact about Arav: ${randomFact} 🎉\n\nWant to know more? Ask me another question!`;
  }

  // Funding queries
  if (q.includes('funding') || q.includes('money') || q.includes('investment')) {
    return `Arav secured $26,000 in funding from Microsoft for his tourist safety startup TurtleShell, plus additional support from the Government of Canada. He also raised $15,000 through his nonprofit Positive Powers. Pretty impressive for an 18-year-old! 💰🚀`;
  }

  // Default - couldn't find information
  return `I don't have specific information about "${question}" in my knowledge base. 🤔

Try asking me about:
📂 **Projects**: Graypass, TurtleShell, ConnectED, UEFA Betting, Plant Detection, Ronaldo voice assistant, Mood Music, Emotion Detection
💼 **Work**: Aview (internship), BenchSci, IKEA, NASA, Positive Powers
🎓 **Education**: Waterloo, Computer Science
🏆 **Achievements**: Hackathons, Microsoft funding, publications
📧 **Contact**: Email, LinkedIn, Twitter

Or contact Arav directly at ${knowledgeBase.personal.contact.email}!`;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ answer: 'Method not allowed' });
  }

  try {
    const { question } = req.body;

    if (!question || typeof question !== 'string') {
      return res.status(400).json({ answer: 'Please provide a valid question.' });
    }

    const answer = searchKnowledgeBase(question);

    return res.status(200).json({ answer });
  } catch (error) {
    console.error('Chatbot API error:', error);
    return res.status(500).json({
      answer: "Sorry, I'm having trouble processing your question. Please try again or contact Arav directly at aravmathur23@gmail.com.",
    });
  }
}
