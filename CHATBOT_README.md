# AI Chatbot - "Ask Arav Anything"

## Overview
An intelligent chatbot integrated into Arav's website that can answer questions about his projects, experience, education, and more by searching through website content.

## Features

### 💬 **Smart Question Answering**
- Answers questions about Arav's background, education, and location
- Provides details about work experience and internships
- Lists and explains all projects with technologies used
- Shares achievements, hackathon wins, and funding details
- Gives contact information when needed

### 🎯 **Key Capabilities**
1. **Personal Information**: Age, location, education at Waterloo
2. **Work Experience**: Aview International, TurtleShell, BenchSci, IKEA, NASA, Positive Powers
3. **Projects**: Graypass, TurtleShell, ConnectED, Plant Pathogen Detection, and more
4. **Skills & Technologies**: Programming languages, frameworks, and specialties
5. **Achievements**: Hackathon placements, funding, publications
6. **Contact Details**: Email, phone, LinkedIn, Twitter

### 🤖 **Smart Fallback**
If information isn't found, the bot provides:
- Arav's contact email
- Link to the contact page
- Suggestions for other topics to ask about

## How It Works

### Frontend (`src/components/Chatbot.tsx`)
- **Fixed position button** (bottom-right corner) with 💬 emoji
- **Slide-up chat window** with messages and input
- **Real-time typing indicators** while processing
- **Smooth animations** and responsive design
- **Mobile-friendly** with adjusted sizing

### Backend API (`pages/api/chatbot.ts`)
- **Knowledge base** with structured data from the website
- **Intelligent search** using keyword matching
- **Context-aware responses** based on question type
- **Fallback handling** for unknown queries

### Knowledge Base Categories
```typescript
{
  personal: { name, age, location, education, contact },
  about: { description, dream, interests },
  currentWork: { latest project, student status, research },
  experience: [ internships, founder roles, consulting, research ],
  projects: [ name, description, technologies, links ],
  achievements: [ hackathons, funding, publications ],
  skills: { languages, frameworks, tools, specialties },
  funFacts: [ interesting tidbits about Arav ]
}
```

## Example Questions

### About Arav
- "Who is Arav?"
- "Tell me about Arav"
- "How old is Arav?"
- "Where is Arav from?"

### Education
- "Where does Arav study?"
- "What university does he go to?"
- "Is he in school?"

### Work Experience
- "Where did Arav work last?"
- "Tell me about his internship"
- "What is TurtleShell?"
- "What did he do at Aview?"

### Projects
- "What projects has Arav built?"
- "Tell me about Graypass"
- "What is his latest project?"

### Skills
- "What technologies does Arav know?"
- "What programming languages can he use?"
- "What are his skills?"

### Achievements
- "What has Arav accomplished?"
- "Did he win any hackathons?"
- "What funding has he received?"

### Contact
- "How can I contact Arav?"
- "What's his email?"
- "How do I reach him?"

## UI/UX Features

### Chat Button
- Fixed position (bottom-right)
- Gradient blue background
- Hover effects with scale and shadow
- Toggles between 💬 and ✕

### Chat Window
- 380px × 600px (responsive on mobile)
- Gradient header with title
- Scrollable message area
- Typing indicators (animated dots)
- Message bubbles with gradients
- Input field with send button (📤)

### Styling
- **User messages**: Blue gradient, right-aligned
- **Bot messages**: White background, left-aligned
- **Loading state**: Three pulsing dots
- **Smooth animations**: Slide-up entrance
- **Mobile responsive**: Full-width on small screens

## Technical Details

### API Endpoint
- **Route**: `POST /api/chatbot`
- **Request Body**: `{ question: string }`
- **Response**: `{ answer: string }`
- **Error Handling**: Graceful fallbacks with contact info

### Search Algorithm
1. Normalize question to lowercase
2. Check for keyword matches in categories
3. Return relevant pre-written response with emojis
4. If no match, return fallback with contact info

### Performance
- **Instant responses** (no external API calls)
- **No rate limiting** needed (local knowledge base)
- **Low latency** (<50ms average response time)

## Future Enhancements

### Potential Improvements
1. **GPT Integration**: Use OpenAI API for more natural conversations
2. **Learning System**: Track common questions and improve responses
3. **Multi-language Support**: Respond in different languages
4. **Voice Input**: Allow voice questions
5. **Rich Media**: Include images, videos in responses
6. **Conversation History**: Save chat history locally
7. **Quick Actions**: Buttons for common questions
8. **Sentiment Analysis**: Adjust tone based on user mood

## Deployment

The chatbot is automatically deployed with the Next.js app:
1. Frontend component loads on all pages via Layout
2. API endpoint is serverless (Next.js API routes)
3. No external dependencies or API keys needed
4. Works immediately after deployment

## Maintenance

To update the chatbot's knowledge:
1. Edit `knowledgeBase` object in `/pages/api/chatbot.ts`
2. Add new categories or update existing ones
3. Save and redeploy

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Keyboard navigation support
- Enter key to send messages
- Focus states on inputs
- Semantic HTML structure
- ARIA labels (can be added)

---

**Created by**: Arav Mathur  
**Last Updated**: November 2025  
**Version**: 1.0.0
