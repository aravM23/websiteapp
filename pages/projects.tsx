import React, { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../src/components/Layout';

const ProjectsPage: React.FC = () => {
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

  const handleToggleDetails = (e: React.MouseEvent<HTMLButtonElement>) => {
    const card = e.currentTarget.closest('.project-card');
    if (!card) return;
    const isExpanded = card.classList.toggle('expanded');
    e.currentTarget.textContent = isExpanded ? 'Hide Details' : 'Show Details';

    const previewEl = card.querySelector('.preview-text') as HTMLParagraphElement | null;
    if (previewEl) {
      const expandedPreview = card.getAttribute('data-preview-expanded') ?? '';
      const basePreview = card.getAttribute('data-preview') ?? '';
      if (expandedPreview && isExpanded) {
        previewEl.textContent = expandedPreview;
      } else {
        previewEl.textContent = basePreview;
      }
    }
  };

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>, isEntering: boolean) => {
    const target = e.currentTarget as HTMLDivElement;
    if (isEntering) {
      target.style.transform = 'translateY(-6px)';
      target.style.boxShadow = '0 22px 44px rgba(15, 20, 40, 0.25)';
    } else {
      target.style.transform = 'translateY(0)';
      target.style.boxShadow = 'none';
    }
  };

  const navButtonStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, rgba(48, 142, 240, 0.32), rgba(18, 110, 220, 0.22))',
    color: '#f5f7ff',
    padding: '14px 32px',
    borderRadius: '999px',
    fontWeight: 700,
    textDecoration: 'none',
    fontSize: '0.95rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    border: '1px solid rgba(80, 170, 255, 0.55)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
    boxShadow: '0 18px 36px rgba(28, 108, 218, 0.28), 0 0 24px rgba(72, 160, 255, 0.28)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '164px',
    cursor: 'pointer',
    backdropFilter: 'blur(3px)'
  };

  const navButtons: { label: string; href: string }[] = [
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Hackathon Progress', href: '#hackathons' },
  ];

  type ThemeToken = {
    bg: string;
    border: string;
    soft: string;
    shadow: string;
    accent: string;
    text: string;
    topBar: string;
    glow: string;
  };

  type ThemeName =
    | 'pink'
    | 'blue'
    | 'mint'
    | 'lavender'
    | 'orange'
    | 'red'
    | 'teal'
    | 'cyan'
    | 'gold'
    | 'slate';

  const THEME_TOKENS: Record<ThemeName, ThemeToken> = {
    pink: {
      bg: 'linear-gradient(135deg, rgba(255, 231, 245, 0.96), rgba(255, 215, 235, 0.93))',
      border: 'rgba(255, 126, 182, 0.4)',
      soft: 'rgba(255, 111, 163, 0.18)',
      shadow: '0 18px 38px rgba(255, 111, 163, 0.25)',
      accent: '#ff6fa3',
      text: '#3f3a45',
      topBar: 'linear-gradient(90deg, #FF80B5 0%, #FF99C8 100%)',
      glow: 'rgba(255, 111, 163, 0.35)',
    },
    blue: {
      bg: 'linear-gradient(135deg, rgba(232, 243, 255, 0.96), rgba(212, 229, 255, 0.93))',
      border: 'rgba(77, 168, 255, 0.4)',
      soft: 'rgba(77, 168, 255, 0.18)',
      shadow: '0 18px 38px rgba(77, 168, 255, 0.25)',
      accent: '#4da8ff',
      text: '#34425d',
      topBar: 'linear-gradient(90deg, #4DA8FF 0%, #7F7BFF 100%)',
      glow: 'rgba(77, 168, 255, 0.35)',
    },
    mint: {
      bg: 'linear-gradient(135deg, rgba(229, 255, 245, 0.95), rgba(210, 250, 233, 0.92))',
      border: 'rgba(63, 209, 169, 0.35)',
      soft: 'rgba(63, 209, 169, 0.18)',
      shadow: '0 18px 38px rgba(63, 209, 169, 0.22)',
      accent: '#3fd1a9',
      text: '#2f4b43',
      topBar: 'linear-gradient(90deg, #3FD1A9 0%, #8BFAC6 100%)',
      glow: 'rgba(63, 209, 169, 0.35)',
    },
    lavender: {
      bg: 'linear-gradient(135deg, rgba(237, 231, 255, 0.95), rgba(221, 214, 255, 0.92))',
      border: 'rgba(140, 121, 255, 0.35)',
      soft: 'rgba(140, 121, 255, 0.18)',
      shadow: '0 18px 38px rgba(140, 121, 255, 0.22)',
      accent: '#8c79ff',
      text: '#3b3552',
      topBar: 'linear-gradient(90deg, #8C79FF 0%, #BA99FF 100%)',
      glow: 'rgba(140, 121, 255, 0.35)',
    },
    orange: {
      bg: 'linear-gradient(135deg, rgba(255, 239, 222, 0.95), rgba(255, 226, 199, 0.92))',
      border: 'rgba(255, 159, 67, 0.35)',
      soft: 'rgba(255, 159, 67, 0.18)',
      shadow: '0 18px 38px rgba(255, 150, 72, 0.24)',
      accent: '#ff9f43',
      text: '#4a3523',
      topBar: 'linear-gradient(90deg, #FFB347 0%, #FF8A65 100%)',
      glow: 'rgba(255, 150, 72, 0.32)',
    },
    red: {
      bg: 'linear-gradient(135deg, rgba(255, 233, 233, 0.95), rgba(255, 211, 211, 0.9))',
      border: 'rgba(255, 107, 107, 0.35)',
      soft: 'rgba(255, 107, 107, 0.18)',
      shadow: '0 18px 38px rgba(255, 107, 107, 0.24)',
      accent: '#ff6b6b',
      text: '#4a2d2d',
      topBar: 'linear-gradient(90deg, #FF6B6B 0%, #FF3B3B 100%)',
      glow: 'rgba(255, 107, 107, 0.32)',
    },
    teal: {
      bg: 'linear-gradient(135deg, rgba(226, 249, 247, 0.95), rgba(205, 238, 234, 0.92))',
      border: 'rgba(76, 201, 240, 0.35)',
      soft: 'rgba(76, 201, 240, 0.18)',
      shadow: '0 18px 38px rgba(76, 201, 240, 0.22)',
      accent: '#4cc9f0',
      text: '#1b3b46',
      topBar: 'linear-gradient(90deg, #4CC9F0 0%, #4895EF 100%)',
      glow: 'rgba(76, 201, 240, 0.32)',
    },
    cyan: {
      bg: 'linear-gradient(135deg, rgba(226, 250, 255, 0.95), rgba(208, 242, 251, 0.92))',
      border: 'rgba(0, 188, 212, 0.35)',
      soft: 'rgba(0, 188, 212, 0.18)',
      shadow: '0 18px 38px rgba(0, 188, 212, 0.24)',
      accent: '#00bcd4',
      text: '#1f3f46',
      topBar: 'linear-gradient(90deg, #00BCD4 0%, #009688 100%)',
      glow: 'rgba(0, 188, 212, 0.32)',
    },
    gold: {
      bg: 'linear-gradient(135deg, rgba(255, 245, 217, 0.96), rgba(255, 233, 185, 0.92))',
      border: 'rgba(255, 193, 7, 0.35)',
      soft: 'rgba(255, 193, 7, 0.2)',
      shadow: '0 18px 38px rgba(255, 193, 7, 0.24)',
      accent: '#ffc107',
      text: '#4b3b17',
      topBar: 'linear-gradient(90deg, #FFC107 0%, #FF9800 100%)',
      glow: 'rgba(255, 193, 7, 0.35)',
    },
    slate: {
      bg: 'linear-gradient(135deg, rgba(230, 236, 244, 0.95), rgba(214, 222, 232, 0.9))',
      border: 'rgba(96, 125, 139, 0.35)',
      soft: 'rgba(96, 125, 139, 0.18)',
      shadow: '0 18px 38px rgba(96, 125, 139, 0.24)',
      accent: '#607d8b',
      text: '#2f3b42',
      topBar: 'linear-gradient(90deg, #607D8B 0%, #455A64 100%)',
      glow: 'rgba(96, 125, 139, 0.32)',
    },
  };

  type HighlightItem = {
    label: string;
    description: string;
  };

  type ProjectCardItem = {
    id: string;
    emoji: string;
    title: string;
    preview: string;
    theme: ThemeName;
    languages: HighlightItem[];
    tools: HighlightItem[];
    tags: string[];
    ctaLabel?: string;
    previewOnExpand?: string;
    ctaLink?: string;
  };

  const projectCardData: ProjectCardItem[] = [
    {
      id: 'ucl-sports-betting',
      emoji: '⚽️',
      title: 'UEFA Champions League Sports Betting Assistant',
      preview:
        'Streamlit-powered analytics dashboard that tracks Champions League matches, surfaces betting insights, and highlights odds movements in real time.',
      theme: 'red',
      languages: [
        { label: 'Python', description: '(data pipelines, odds modeling, Streamlit app).' },
        { label: 'SQL', description: '(odds and match history aggregation).' },
      ],
      tools: [
        { label: 'pandas / NumPy', description: 'data transformation, feature engineering.' },
        { label: 'scikit-learn', description: 'baseline probability models for match outcomes.' },
        { label: 'BeautifulSoup + Requests', description: 'web scraping of live odds feeds.' },
        { label: 'Streamlit', description: 'UI hosting, charts, real-time refresh.' },
        { label: 'Plotly', description: 'interactive odds and performance visualizations.' },
      ],
      tags: ['Python', 'Streamlit', 'pandas', 'NumPy', 'scikit-learn', 'BeautifulSoup', 'Plotly', 'SQL'],
      ctaLink: 'https://uclsportsbetting.streamlit.app/',
    },
    {
      id: 'turtleshell-safety',
      emoji: '🐢',
      title: 'TurtleShell (Tourist Safety Startup)',
      preview: 'Built a geospatial ML pipeline that clusters the city into micro-regions and computes a dynamic risk score per cluster from multi-source crime feeds (police blotters, government portals, vetted datasets).',
      theme: 'slate',
      languages: [
        { label: 'Python', description: 'data ingestion, feature engineering, ML training/eval' },
        { label: 'PySpark', description: 'distributed ETL and clustering at city scale' },
        { label: 'Swift', description: 'iOS client (UI + CoreLocation)' },
        { label: 'SQL', description: 'analytics queries and risk snapshots (PostgreSQL/PostGIS)' },
        { label: 'Bash', description: 'job orchestration scripts' },
      ],
      tools: [
        { label: 'scikit-learn', description: 'KMeans, silhouette/Davies–Bouldin, model selection' },
        { label: 'NumPy / pandas / SciPy', description: 'vectorized prep, cdist for elbow analysis' },
        { label: 'Matplotlib', description: 'elbow plot & diagnostics' },
        { label: 'GeoPandas / Shapely / PostGIS', description: 'geospatial joins, buffers, point-in-polygon' },
        { label: 'PySpark', description: 'resilient data pipelines, window functions, checkpointing' },
        { label: 'FastAPI', description: 'stateless risk/tips API (JSON)' },
        { label: 'CoreLocation / UIKit (Swift)', description: 'on-device location, permissions, UI' },
        { label: 'H3', description: 'hex indexing for stable spatial bins' },
        { label: 'Airflow', description: 'scheduled ingestion from police/government sources' },
      ],
      tags: ['scikit-learn', 'NumPy', 'pandas', 'SciPy', 'Matplotlib', 'GeoPandas', 'PySpark', 'FastAPI', 'CoreLocation', 'UIKit', 'H3', 'PostGIS', 'Airflow'],
      previewOnExpand:
        'Built a geospatial ML pipeline that clusters the city into micro-regions and computes a dynamic risk score per cluster from multi-source crime feeds (police blotters, government portals, vetted datasets). A PySpark ETL cleans, geocodes, and deduplicates incidents; K-Means (k chosen via elbow curve) partitions lat/long space; time-aware features (hour-of-day, day-of-week, recency decay) and contextual signals (category mix, density, seasonal effects) drive the score. The iOS app (Swift) uses CoreLocation to snap users to the nearest cluster and returns preventative measures, “things to avoid,” and best-practice tips tailored to location and time. A routing layer can optionally penalize risky edges to suggest safer paths. All inference is low-latency and privacy-preserving.',
      ctaLink: 'https://youtu.be/DEJDNSfQB8I?si=LeXEmUu76gGb7oIJ',
    },
    {
      id: 'connected-scholarship',
      emoji: '🎓',
      title: 'ConnectED (Tinder for Scholarships and Grants)',
      preview:
        'Built a pipeline that scrapes, normalizes, and ranks scholarships, matches students to mentors with NLP and linear programming, and calculates personalized aid projections. Data is pulled from university and aggregator sites, written to Google Sheets, and key deadlines are pushed to Google Calendar.',
      theme: 'cyan',
      languages: [
        { label: 'Python', description: 'for scraping, NLP, optimization, and calculators' },
        { label: 'JavaScript', description: 'for planned MERN app' },
        { label: 'HTML/CSS', description: 'for prototype pages and quick tests' },
        { label: 'SQL', description: 'for analytics queries and exports' },
      ],
      tools: [
        { label: 'Data ingest and web', description: 'Scrapy spiders for multi-site scholarship extraction; Requests and lxml or CSS selectors for parsing; rotating proxy and polite rate limiting to respect site rules.' },
        { label: 'NLP and matching', description: 'NLTK for tokenization and stopword removal; similarity with Jaccard over keyword sets.' },
        { label: 'Linear programming', description: 'Google OR-Tools (pywraplp) to assign students to mentors one-to-one for maximum total similarity.' },
        { label: 'Google integrations', description: 'Google API Client with OAuth 2.0; Google Sheets API to store and refresh scholarship rows; Google Calendar API to create deadline events with links and reminders.' },
        { label: 'Analytics and utilities', description: 'pandas, NumPy for cleaning and feature prep; Matplotlib or Plotly for quick diagnostics.' },
      ],
      tags: ['Scrapy', 'Requests', 'lxml', 'CSS selectors', 'NLTK', 'Google OR-Tools', 'Google Sheets API', 'Google Calendar API', 'pandas', 'NumPy', 'Matplotlib', 'Plotly'],
      ctaLink: 'https://github.com/aravM23/ConnectED',
    },
    {
      id: 'graypass',
      emoji: '🧠',
      title: 'Graypass (Log in and Authenticate with your mind)',
      preview: 'GrayPass is a passwordless authentication engine that builds a per-user brainprint from cognitive and behavioral signals (Stroop reaction times, keystroke dynamics, eye-tracking).',
      theme: 'gold',
      languages: [
        { label: 'Python', description: '(backend, feature extraction, calibration)' },
        { label: 'JavaScript', description: '(frontend capture, WebGazer integration)' },
        { label: 'HTML/CSS', description: '(responsive UI, dark theme)' },
        { label: 'SQL', description: '(PostgreSQL and SQLite)' },
      ],
      tools: [
        { label: 'FastAPI', description: 'async REST API, CORS middleware, rate limiting; Uvicorn (ASGI server).' },
        { label: 'SQLAlchemy ORM', description: 'PostgreSQL in prod, SQLite in dev.' },
        { label: 'pytest', description: 'unit tests.' },
        { label: 'NumPy', description: 'statistical features.' },
        { label: 'scikit-learn', description: '(isotonic regression) for confidence calibration.' },
        { label: 'PyTorch', description: '(optional) neural embeddings.' },
        { label: 'Vanilla JavaScript (ES6+)', description: 'frontend capture and UX flows.' },
        { label: 'WebGazer.js', description: 'browser-based eye tracking (TensorFlow.js under the hood).' },
        { label: 'HTML5 Canvas', description: 'gaze cursor and calibration targets.' },
        { label: 'CSS', description: 'dark theme and responsive layout.' },
        { label: 'SHA-256', description: 'brainprint hashing.' },
        { label: 'cryptography.fernet', description: 'symmetric encryption at rest.' },
        { label: 'Nonce per request + signed tokens', description: 'session validation.' },
        { label: 'Docker multi-stage builds', description: '(Node for bundling, Python for API).' },
        { label: 'PostgreSQL / SQLite', description: 'selectable by environment.' },
        { label: 'Node.js + esbuild + Terser', description: 'frontend bundling pipeline.' },
      ],
      tags: ['FastAPI', 'Uvicorn', 'SQLAlchemy ORM', 'pytest', 'NumPy', 'scikit-learn', 'PyTorch', 'Vanilla JavaScript', 'WebGazer.js', 'HTML5 Canvas', 'CSS', 'SHA-256', 'cryptography.fernet', 'Docker', 'PostgreSQL', 'SQLite', 'Node.js', 'esbuild', 'Terser'],
      ctaLink: 'https://www.graypass.org/',
      previewOnExpand:
        'GrayPass is a passwordless authentication engine that builds a per-user brainprint from cognitive and behavioral signals (Stroop reaction times, keystroke dynamics, eye-tracking). A FastAPI backend extracts 15-dimensional features, calibrates confidence, derives a SHA-256 brainprint, and stores encrypted vectors. A lightweight web client captures gaze and typing data, performs live quality checks, and sends signed payloads to the API. The system supports fuzzy matching with tunable thresholds, nonce protection, rate limiting, and encrypted at-rest storage. Achieved sub-100 ms end-to-end auth on calibrated sessions.',
    },
    {
      id: 'plant-pathogen',
      emoji: '🌱',
      title: 'Plant Pathogen Detection',
      preview:
        'My Plant Pathogen Detection system is a Convolutional Neural Network that is compatible with DJI drone systems in order to detect 30+ types of pathogens in apple trees, saving apple orchardists in a local farm 20 hours weekly.',
      theme: 'pink',
      languages: [
        { label: 'Python', description: 'data ingest, training, eval, augmentation.' },
        { label: 'Kotlin', description: 'Android ground-station app (video ingest, TFLite inference, overlays).' },
        { label: 'Bash', description: 'data prep and training job wrappers.' },
        { label: 'SQL (SQLite)', description: 'lightweight on-device cache for predictions/flight logs.' },
      ],
      tools: [
        { label: 'TensorFlow / Keras', description: '(Sequential CNN, Conv2D/MaxPool/Dense) with ImageDataGenerator, EarlyStopping, ModelCheckpoint.' },
        { label: 'TensorFlow Lite', description: '(NNAPI / GPU delegate) for edge inference.' },
        { label: 'Albumentations & OpenCV', description: 'Albumentations for augmentation; OpenCV (cv2) for frame ops/ROI crops.' },
        { label: 'Matplotlib & scikit-learn', description: 'Matplotlib for confusion matrices / error analysis; scikit-learn for splits/metrics.' },
        { label: 'DJI Mobile SDK + DJI UX SDK', description: 'telemetry data, waypoint missions, and live video.' },
      ],
      tags: ['TensorFlow', 'Keras', 'TensorFlow Lite', 'OpenCV', 'Albumentations', 'DJI Mobile SDK', 'DJI UX SDK', 'Matplotlib', 'scikit-learn'],
      ctaLink: 'https://medium.com/@aravmathur23/solving-the-apple-pathology-problem-using-artificial-intelligence-fa373a0f552a',
    },
    {
      id: 'ai-voice-assistant',
      emoji: '🤖',
      title: 'AI Voice Assistant “Ronaldo”',
      preview:
        'Inspired by Iron Man\'s JARVIS, I created my own AI based voice assistant called "Ronaldo." This voice assistant can be activated by using the command terms "Ronaldo" or "Hi Ronaldo" followed by a question/prompt.',
      theme: 'blue',
      languages: [{ label: 'Python', description: '(core application and scripts).' }],
      tools: [
        { label: 'PyAudio', description: 'for microphone capture and audio I/O.' },
        { label: 'SpeechRecognition', description: 'with Google Speech Recognition backend for ASR and wake-word routing (“Ronaldo” / “Hi Ronaldo”).' },
        { label: 'OpenAI Python SDK', description: 'using gpt-3.5-turbo for response generation.' },
        { label: 'gTTS', description: 'to convert responses to speech.' },
        { label: 'playsound', description: 'to play the synthesized audio reply.' },
      ],
      tags: ['PyAudio', 'SpeechRecognition', 'OpenAI Python SDK', 'gTTS', 'playsound', 'gpt-3.5-turbo'],
      ctaLink: 'https://medium.com/@aravmathur23/meet-ronaldo-my-personal-voice-assistant-here-s-how-i-made-it-58b566bc1fe0',
    },
    {
      id: 'mood-sound-generation',
      emoji: '🎵',
      title: 'Mood Based Sound Generation',
      preview:
        "Using Google's research on the SoundStorm architecture, I created an AI model that generates sounds and music, adjusting the frequency, genre, and BPM of the generated sound depending on mood. Understanding how to modify the model based on mood is part of my research at the University of Toronto.",
      theme: 'mint',
      languages: [
        { label: 'Python', description: '(model code, training, utilities).' },
      ],
      tools: [
        { label: 'PyTorch', description: '(torch, torch.nn, torch.nn.functional) for modeling and training.' },
        { label: 'NumPy', description: 'for array ops.' },
        { label: 'einops', description: '(rearrange, reduce, EinMix) for tensor reshaping/mixing layers.' },
        { label: 'Encodec', description: '(EncodecModel) as the neural audio codec interface.' },
        { label: 'Conformer', description: 'backbone (core.conformer.Conformer) for sequence modeling.' },
        { label: 'joblib', description: 'for lightweight persistence of artifacts. Optional inputs/components: HuBERT k-means semantic tokens and RVQ decoding steps.' },
      ],
      tags: ['PyTorch', 'NumPy', 'einops', 'Encodec', 'Conformer', 'joblib', 'HuBERT'],
      ctaLink: 'https://medium.com/@aravmathur23/how-i-created-an-ai-model-for-sound-generation-using-soundstorm-a31b28fd8c43',
    },
    {
      id: 'facial-emotion-detection',
      emoji: '😊',
      title: 'Facial Emotion Detection',
      preview:
        'Through this project, I made a CNN looking at the seven distinct emotions of Happiness, Anger, Disgust, Fear, Sad, Surprised, or Neutral. Constructing models like this was a good starting point for developing and experimenting with CNNs for image classification tasks.',
      theme: 'lavender',
      languages: [{ label: 'Python', description: '(Kaggle notebook + local scripts).' }],
      tools: [
        { label: 'TensorFlow / Keras', description: 'Sequential CNN with Conv2D, BatchNormalization, Activation("relu"), MaxPooling2D, Dropout, Flatten, Dense; ImageDataGenerator for augmentation; grayscale 48×48 inputs.' },
        { label: 'Keras callbacks & training', description: 'ModelCheckpoint, EarlyStopping, ReduceLROnPlateau; optimizer Adam; loss categorical_crossentropy; trained via fit_generator with batch size 128 and separate train/validation flows.' },
        { label: 'NumPy, pandas, matplotlib, seaborn', description: 'data handling and plotting (accuracy/loss curves). os for file ops.' },
        { label: 'Kaggle Kernel + Face Expression Recognition dataset', description: '7 classes: Happy, Angry, Disgust, Fear, Sad, Surprise, Neutral.' },
      ],
      tags: ['TensorFlow', 'Keras', 'NumPy', 'pandas', 'matplotlib', 'seaborn', 'Kaggle'],
      ctaLink: 'https://medium.com/@aravmathur23/the-path-to-constructing-my-own-cnn-models-effectively-while-learning-creating-and-innovating-all-d02ffafaa1c2',
    },
];

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

  const handleQuickFilter = (tag: string) => {
    const searchInput = document.getElementById('projectSearch') as HTMLInputElement | null;
    if (!searchInput) return;

    let nextValue = '';
    if (tag === 'Clear') {
      nextValue = '';
    } else if (searchInput.value.trim().toLowerCase() === tag.toLowerCase()) {
      nextValue = '';
    } else {
      nextValue = tag;
    }

    searchInput.value = nextValue;
    const normalizedTerm = nextValue.toLowerCase().trim();
    performSearch(normalizedTerm);
    searchInput.focus();
  };

  const scatterCards = () => {
    const container = document.getElementById('projectContainer');
    if (!container) return;
    
    container.className = 'clean-grid-layout';
    const cards = document.querySelectorAll('.project-card') as NodeListOf<HTMLElement>;
    
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(22px)';
      card.style.position = 'relative';
      card.style.left = 'auto';
      card.style.top = 'auto';
      card.style.width = 'auto';

      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      }, index * 90 + 150);
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
      card.style.left = 'auto';
      card.style.top = 'auto';
      card.style.transform = 'none';
      card.style.position = 'relative';
      card.style.zIndex = 'auto';
      card.style.width = 'auto'; // Reset width for grid mode
      card.style.opacity = '1';
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
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2.5rem;
          padding: 1.5rem 2.5rem 3rem;
          max-width: 1180px;
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
            radial-gradient(circle at 18% 12%, rgba(255, 180, 220, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 82% 18%, rgba(120, 200, 255, 0.1) 0%, transparent 62%),
            radial-gradient(circle at 50% 78%, rgba(160, 255, 220, 0.12) 0%, transparent 60%);
          pointer-events: none;
          z-index: -1;
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
          text-transform: none;
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
          width: fit-content !important;
          white-space: nowrap !important;
          overflow: visible !important;
          text-overflow: unset !important;
          box-sizing: border-box !important;
        }

        .project-card {
          --card-bg: linear-gradient(135deg, rgba(248, 249, 255, 0.9), rgba(255, 255, 255, 0.92));
          --card-border: rgba(140, 150, 255, 0.35);
          --card-shadow: 0 12px 30px rgba(36, 38, 99, 0.12);
          --card-accent: #7f8cff;
          --card-soft: rgba(127, 140, 255, 0.18);
          --card-text: #1f2331;
          --card-glow: rgba(127, 140, 255, 0.32);
          background: var(--card-bg);
          border: 2px solid var(--card-border);
          border-radius: 24px;
          box-shadow: var(--card-shadow);
          color: var(--card-text);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          font-family: 'Courier New', 'Monaco', 'Menlo', monospace;
        }

        .project-card.expanded {
          transform: translateY(-6px);
          box-shadow: 0 26px 60px rgba(0, 0, 0, 0.28), 0 0 46px var(--card-glow);
        }

        .project-card .preview-text {
          display: block;
          transition: opacity 0.3s ease;
          color: var(--card-text);
          font-size: 0.96rem;
          line-height: 1.7;
          margin-bottom: 1.2rem;
          text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.05);
          animation: pixel-flicker 5s steps(2, start) infinite;
        }

        @keyframes pixel-flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.94; }
        }

        .project-card .project-details {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.45s ease, opacity 0.3s ease;
          margin-top: 0;
          color: rgba(61, 71, 84, 0.92);
        }

        .project-card.expanded .project-details {
          max-height: 2200px;
          opacity: 1;
          margin-top: 1.4rem;
          color: #111111;
        }

        .expand-toggle {
          margin-top: 16px;
          background: #111116;
          border: 2px solid rgba(255, 255, 255, 0.75);
          color: #f6f8ff;
          padding: 12px 32px;
          border-radius: 14px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          font-family: 'Press Start 2P', 'Courier New', monospace;
          text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.12);
        }

        .expand-toggle:hover {
          transform: translateY(-2px) scale(1.01);
          box-shadow: 0 14px 26px rgba(255, 255, 255, 0.2);
        }

        .project-card.expanded .expand-toggle {
          background: rgba(8, 10, 15, 0.9);
          border: 2px solid rgba(255, 255, 255, 0.75);
          color: rgba(248, 251, 255, 0.95);
          box-shadow: none;
        }

        .card-top-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 6px;
          border-radius: 18px 18px 0 0;
          background: var(--card-accent);
        }

        .project-card__title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--card-accent);
          letter-spacing: 1.4px;
          text-transform: uppercase;
          margin: 1.4rem 0 1rem 0;
          display: flex;
          align-items: center;
          gap: 10px;
          text-shadow:
            0 0 4px rgba(0, 0, 0, 0.15),
            1px 1px 0 rgba(0, 0, 0, 0.25);
          animation: pixel-title-glow 2.4s ease-in-out infinite alternate;
        }

        .project-card__emoji {
          font-size: 1.45rem;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }

        @keyframes pixel-title-glow {
          0% { filter: none; }
          50% { filter: hue-rotate(6deg) saturate(1.1); }
          100% { filter: none; }
        }

        .detail-group {
          margin-bottom: 1.6rem;
        }

        .detail-group h4 {
          color: var(--card-accent);
          text-transform: uppercase;
          letter-spacing: 1.4px;
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 0.75rem;
        }

        .detail-line {
          margin: 0 0 10px 0;
          font-size: 0.9rem;
          color: #111111;
          line-height: 1.6;
          text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.04);
        }

        .project-card.expanded .detail-line {
          color: #111111;
        }

        .project-card .project-details span {
          color: var(--card-accent);
          font-weight: 600;
        }

        .project-card.expanded .project-details span {
          color: #0e8c73;
          text-shadow: none;
        }

        .detail-chip-group {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }

        .detail-chip {
          background-color: var(--card-soft);
          color: var(--card-accent);
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .project-card.expanded .detail-chip {
          background-color: rgba(255, 255, 255, 0.08);
          color: var(--card-accent);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .view-details-cta {
          margin-top: 10px;
          background: transparent;
          border: 2px solid var(--card-accent);
          color: var(--card-accent);
          padding: 9px 26px;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-decoration: none !important;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .view-details-cta:hover {
          background: var(--card-accent);
          color: #0b1218;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
        }

        .project-card.expanded .view-details-cta {
          border-color: var(--card-accent);
          color: var(--card-accent);
        }

        .project-card.expanded .view-details-cta:hover {
          background: var(--card-accent);
          color: rgba(4, 12, 16, 0.9);
        }

        .projects-heading {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
        }

        .projects-heading__emoji {
          display: inline-block;
          margin-left: 0.6rem;
          font-size: 2.2rem;
          color: #ffffff;
          background: none;
          -webkit-text-fill-color: #ffffff;
        }

        .projects-loading {
          font-size: 1rem;
          color: #6bdcff;
          text-align: center;
          letterSpacing: 0.2em;
          font-family: 'Courier New', 'Monaco', 'Menlo', monospace;
          margin-bottom: 40px;
          filter: drop-shadow(0 0 12px rgba(107, 220, 255, 0.55));
        }

        .loading-ellipsis::after {
          content: '...';
          display: inline-block;
          animation: ellipsisPulse 1.2s infinite steps(3, end);
        }

        @keyframes ellipsisPulse {
          0% { content: ''; }
          33% { content: '.'; }
          66% { content: '..'; }
          100% { content: '...'; }
        }

        .project-card .preview-text {
          display: block;
          transition: opacity 0.3s ease;
        }

        .project-card.expanded .preview-text {
          display: none !important;
        }

        .project-card .project-details {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.4s ease, opacity 0.3s ease;
          margin-top: 0;
        }

        .project-card.expanded .project-details {
          max-height: 2000px;
          opacity: 1;
          margin-top: 1.5rem;
        }

        .pixel-car-track {
          position: relative;
          height: 140px;
          margin-bottom: 40px;
          overflow: hidden;
          border-radius: 24px;
        }

        .pixel-car-track::before {
          content: '';
          position: absolute;
          inset: 74% -80px -12px -80px;
          background: linear-gradient(180deg, rgba(12, 16, 28, 0.6) 0%, rgba(8, 10, 18, 0.95) 65%, rgba(0, 0, 0, 0) 100%);
          box-shadow: inset 0 12px 20px rgba(10, 18, 38, 0.4);
        }

        .pixel-car-track::after {
          content: '';
          position: absolute;
          left: -40px;
          right: -40px;
          bottom: 18px;
          height: 4px;
          background-image: linear-gradient(
            to right,
            rgba(120, 190, 255, 0.8) 0,
            rgba(120, 190, 255, 0.8) 40px,
            transparent 40px,
            transparent 80px
          );
          background-size: 80px 4px;
          opacity: 0.45;
        }

        .pixel-car-annotation {
          position: absolute;
          top: 52px;
          left: -320px;
          display: flex;
          align-items: flex-end;
          gap: 12px;
          z-index: 2;
          pointer-events: none;
        }

        .pixel-car-annotation span {
          font-size: 0.75rem;
          line-height: 1.4;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-weight: 600;
          color: #ffc27b;
          text-shadow: 0 10px 24px rgba(255, 140, 66, 0.35);
          opacity: 0.95;
          max-width: 140px;
          text-align: right;
          word-break: break-word;
        }

        .pixel-car-annotation svg {
          width: 110px;
          height: 60px;
          overflow: visible;
        }

        @media (max-width: 768px) {
          .pixel-car-track {
            height: 110px;
            margin-bottom: 32px;
          }
          .pixel-car-annotation {
            display: none;
          }
          .pixel-car {
            top: 10px;
            left: -200px;
          }
          .pixel-car svg {
            width: 110px;
            height: 60px;
          }
        }

        .pixel-car {
          position: absolute;
          top: 14px;
          left: -260px;
          display: flex;
          align-items: flex-end;
          pointer-events: none;
          animation: carLoop 5.6s linear infinite;
          will-change: transform;
        }

        .pixel-car svg {
          width: 140px;
          height: 70px;
          image-rendering: pixelated;
          shape-rendering: crispEdges;
          filter: drop-shadow(0 18px 32px rgba(6, 18, 48, 0.65));
        }

        .pixel-car__wheel {
          animation: wheelSpin 0.4s linear infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .pixel-car__flame {
          animation: flameFlicker 0.22s ease-in-out infinite alternate;
          transform-box: fill-box;
          transform-origin: center;
        }

        @keyframes carLoop {
          0% {
            transform: translateX(-18vw);
          }
          100% {
            transform: translateX(calc(100vw + 240px));
          }
        }

        @keyframes wheelSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes flameFlicker {
          from {
            opacity: 0.55;
            transform: scaleX(1);
          }
          to {
            opacity: 1;
            transform: scaleX(1.25);
          }
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
            <div className="pixel-car-track">
              <div className="pixel-car-annotation">
                <span>I like F1 also BTW so I added this for fun</span>
                <svg viewBox="0 0 110 70" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 54 C 32 32, 46 34, 62 44"
                    stroke="#ffc27b"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M62 44 L50 50"
                    stroke="#ffc27b"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M62 44 L52 34"
                    stroke="#ffc27b"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="pixel-car">
                <svg viewBox="0 0 96 48" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="26" width="84" height="10" fill="#22140b" />
                  <rect x="18" y="18" width="48" height="12" fill="#ff7b39" />
                  <rect x="28" y="12" width="24" height="8" fill="#c25418" />
                  <rect x="34" y="8" width="12" height="6" fill="#ffe3c8" />
                  <rect x="12" y="20" width="14" height="8" fill="#ff9852" />
                  <rect x="58" y="20" width="16" height="8" fill="#ffaf45" />
                  <rect x="72" y="20" width="10" height="6" fill="#ffd27a" />
                  <rect x="10" y="32" width="16" height="10" fill="#100804" rx="2" />
                  <rect x="68" y="32" width="16" height="10" fill="#100804" rx="2" />
                  <circle className="pixel-car__wheel" cx="18" cy="37" r="6" fill="#0f1118" />
                  <circle className="pixel-car__wheel" cx="76" cy="37" r="6" fill="#0f1118" />
                  <circle cx="18" cy="37" r="3" fill="#dce7ff" opacity="0.4" />
                  <circle cx="76" cy="37" r="3" fill="#dce7ff" opacity="0.4" />
                  <rect x="28" y="28" width="26" height="6" fill="#863e10" />
                  <rect x="24" y="32" width="34" height="6" fill="#351a08" />
                  <rect x="8" y="28" width="8" height="4" fill="#5c2c0b" />
                  <path className="pixel-car__flame" d="M18 22h-6l4-6h6l-4 6z" fill="#ffb347" />
                  <path className="pixel-car__flame" d="M16 22h-4l3-4h4l-3 4z" fill="#ffe29a" opacity="0.8" />
                  <rect x="70" y="16" width="6" height="4" fill="#ff7b39" />
                  <rect x="28" y="10" width="4" height="4" fill="#ffe1c4" opacity="0.8" />
                </svg>
              </div>
            </div>
            <h1 style={{ 
              fontSize: 'clamp(2.4rem, 7vw, 3.75rem)', 
              fontWeight: 800, 
              color: '#ffffff',
              marginBottom: '32px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              background: 'linear-gradient(135deg, #fefefe 0%, #d7e3ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 24px 60px rgba(60, 140, 255, 0.35)'
            }}>
              My Work & Experience
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ 
                background: 'linear-gradient(150deg, rgba(10, 16, 36, 0.92), rgba(6, 12, 28, 0.9))',
                border: '1px solid rgba(72, 164, 255, 0.2)',
                borderRadius: '28px',
                padding: 'clamp(28px, 7vw, 40px) clamp(20px, 8vw, 48px)',
                maxWidth: '760px',
                width: '100%',
                boxShadow: '0 48px 120px rgba(6, 18, 48, 0.68)',
                backdropFilter: 'blur(12px)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: '-40% 20% auto',
                  height: '160px',
                  background: 'radial-gradient(circle, rgba(72,164,255,0.35) 0%, rgba(72,164,255,0) 65%)',
                  opacity: 0.6,
                  pointerEvents: 'none',
                  zIndex: 0
                }} />
                <p style={{ 
                  position: 'relative',
                  zIndex: 1,
                  color: '#d6dcff',
                  fontSize: '1.1rem',
                  marginBottom: '32px',
                  fontWeight: 500,
                  lineHeight: 1.8,
                  letterSpacing: '0.02em',
                  textShadow: '0 6px 22px rgba(72, 164, 255, 0.25)'
                }}>
                  If you dont wanna read all this, just click the buttons below to take you to where you want to go.
                </p>
                <div style={{ 
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '16px',
                  flexWrap: 'wrap'
                }}>
                  {navButtons.map(({ label, href }) => (
                    <Link 
                      key={href}
                      href={href}
                      style={{ ...navButtonStyle }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 28px 60px rgba(48, 142, 240, 0.4), 0 0 30px rgba(80, 170, 255, 0.45)';
                        e.currentTarget.style.borderColor = 'rgba(120, 190, 255, 0.8)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 18px 36px rgba(28, 108, 218, 0.28), 0 0 24px rgba(72, 160, 255, 0.28)';
                        e.currentTarget.style.borderColor = 'rgba(80, 170, 255, 0.55)';
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div style={{ marginBottom: '80px' }}>
            <h2 className="projects-heading" id="projects">
              Projects<span className="projects-heading__emoji" role="img" aria-label="laptop">💻</span>
            </h2>
            <p className="projects-loading">
              Loading<span className="loading-ellipsis"></span>
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
                  placeholder="🔍 Search project by language or framework (Python, TensorFlow, React, etc.)"
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
                  const searchInput = document.getElementById('projectSearch') as HTMLInputElement | null;
                  if (!searchInput) return;
                  searchInput.value = '';
                  performSearch('');
                  searchInput.focus();
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
                  onClick={() => handleQuickFilter(tag)}
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
              
              {projectCardData.map((project) => {
                const tokens = THEME_TOKENS[project.theme];
                const searchTokens = [
                  project.title,
                  project.preview,
                  ...project.tags,
                  ...project.languages.map((item) => item.label),
                  ...project.tools.map((item) => item.label),
                ];
                if (project.previewOnExpand) {
                  searchTokens.push(project.previewOnExpand);
                }
                const cardVariables = {
                  '--card-bg': tokens.bg,
                  '--card-border': tokens.border,
                  '--card-soft': tokens.soft,
                  '--card-shadow': tokens.shadow,
                  '--card-accent': tokens.accent,
                  '--card-text': tokens.text,
                  '--card-glow': tokens.glow,
                } as React.CSSProperties;
                const previewExpanded = project.previewOnExpand ?? '';

                return (
                  <div
                    key={project.id}
                    className="project-card"
                    data-tags={searchTokens.join(' ').toLowerCase()}
                    data-preview={project.preview}
                    data-preview-expanded={previewExpanded}
                    style={{
                      ...cardVariables,
                      padding: '32px',
                      borderRadius: '20px',
                      transition: 'all 0.35s ease',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={(e) => handleCardHover(e, true)}
                    onMouseLeave={(e) => handleCardHover(e, false)}
                  >
                    <div className="card-top-bar" style={{ background: tokens.topBar }} />
                    <h3 className="project-card__title">
                      <span className="project-card__emoji">{project.emoji}</span>
                      {project.title}
                    </h3>
                    <p className="preview-text">{project.preview}</p>
                    <button className="expand-toggle" onClick={handleToggleDetails}>
                      Show Details
                    </button>
                    <div className="project-details">
                      <div className="detail-group">
                        <h4>Languages</h4>
                        {project.languages.map((item) => (
                          <p className="detail-line" key={`${project.id}-language-${item.label}`}>
                            <span>{item.label}</span> – {item.description}
                          </p>
                        ))}
                      </div>
                      <div className="detail-group">
                        <h4>Frameworks & Tools</h4>
                        {project.tools.map((item) => (
                          <p className="detail-line" key={`${project.id}-tool-${item.label}`}>
                            <span>{item.label}</span> – {item.description}
                          </p>
                        ))}
                        <div className="detail-chip-group">
                          {project.tags.map((tag) => (
                            <span className="detail-chip" key={`${project.id}-tag-${tag}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      {project.ctaLink ? (
                        <Link
                          href={project.ctaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="view-details-cta"
                        >
                          View More →
                        </Link>
                      ) : (
                        <button className="view-details-cta">
                          {project.ctaLabel ?? 'View More →'}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
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

          {/* Hackathon Progress Section */}
          <div style={{ marginBottom: '80px' }}>
            <h2 id="hackathons" style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#ffffff',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Hackathon Progress <span role="img" aria-label="trophy">🏆</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              <div style={{ 
                backgroundColor: '#1a1a1a', 
                padding: '32px', 
                borderRadius: '16px',
                border: '1px solid #333333',
                boxShadow: '0 16px 32px rgba(0, 0, 0, 0.25)'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#ffffff', marginBottom: '12px' }}>
                  🧠 Top 32 @ Hack the North
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Prototype built in 36 hours with live judging at Canada’s largest hackathon. View the project at this link:
                  {' '}
                  <a 
                    href="https://www.youtube.com/watch?v=9KyURGKkTMI" 
                    style={{ color: '#42a5f5', textDecoration: 'underline' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.youtube.com/watch?v=9KyURGKkTMI
                  </a>
                </p>
              </div>
              <div style={{ 
                backgroundColor: '#1a1a1a', 
                padding: '32px', 
                borderRadius: '16px',
                border: '1px solid #333333',
                boxShadow: '0 16px 32px rgba(0, 0, 0, 0.25)'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#ffffff', marginBottom: '12px' }}>
                  🚀 11th Place @ Empower Hacks 2.0
                </h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Finished 11th overall among 1885 participants, view project here:{' '}
                  <a 
                    href="https://devpost.com/software/connected-ie5ghl"
                    style={{ color: '#42a5f5', textDecoration: 'underline' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://devpost.com/software/connected-ie5ghl
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div style={{ marginBottom: '80px' }}>
            <h2 id="experience" style={{ 
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
                  I was working as a Software Engineering Intern at Aview International. Aview specializes in AI translations and AI audio/video dubbing for content creators and entertainment companies. They have worked with clients such as MARVEL, Yes Theory, Logan Paul, Ninja, Mark Rober, and many other top-tier clients in the entertainment and content creation industry. I am developing a data collection tool for Aview to efficiently track up-and-coming content creators on several social media platforms. My tool will be used to find potential clients for Aview across five different social platforms. Based on their growth, Aview can reach out to these potential clients. This process simplifies data collection and client management for Aview, as they do not need a separate team to find content creators and possible partnership opportunities; the AI scans the web for them.
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

            </div>
            
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link 
                href="https://www.linkedin.com/in/arav-mathur-0567bb26a/" 
                style={{ 
                  color: '#42a5f5', 
                  fontWeight: '600', 
                  textDecoration: 'none',
                  fontSize: '1rem',
                  transition: 'color 0.3s ease'
                }}
                target="_blank"
                rel="noopener noreferrer"
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
              href="https://www.linkedin.com/in/arav-mathur-0567bb26a/" 
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
              target="_blank"
              rel="noopener noreferrer"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
