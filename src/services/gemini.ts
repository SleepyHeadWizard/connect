import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini AI client
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Create a chat model instance
const model = genAI.getGenerativeModel({ 
  model: "gemini-1.5-flash",
  generationConfig: {
    temperature: 0.7, // Reduced for more focused responses
    maxOutputTokens: 1024, // Reduced to encourage conciseness
  },
});

interface ChatMessage {
  role: 'user' | 'model';
  parts: string;
}

class GeminiService {
  private chat;
  private history: ChatMessage[] = [];

  constructor() {
    this.chat = model.startChat();
  }

  async sendMessage(message: string): Promise<string> {
    try {
      // Define the assistant's role and scope
      const context = `You are a Digital Wellbeing Assistant focused exclusively on helping users improve their relationship with technology and maintain digital wellness. Your expertise includes:

1. Digital habits and screen time management
2. Social media usage and its impact on mental health
3. Online-offline life balance
4. Digital mindfulness and conscious technology use
5. Stress reduction related to technology use
6. Healthy digital boundaries
7. Digital detox strategies

If a user asks questions outside these topics, politely redirect them by saying: "I'm your digital wellbeing assistant, focused on helping you develop a healthier relationship with technology. I can't help with that specific topic, but I'd be happy to discuss strategies for digital wellness, screen time management, or maintaining a healthy online-offline balance. What would you like to know about those areas?"

User question: ${message}

Please provide a clear, concise response using these guidelines:
- Keep paragraphs short (2-3 sentences max)
- Use bullet points for lists
- Add line breaks between sections
- Focus on the most important points
- Use simple, direct language
- Only answer if the question relates to digital wellbeing, otherwise use the redirection message`;

      // Get the response from Gemini
      const result = await model.generateContent(context);
      const response = await result.response;
      const text = response.text();

      // Add messages to history
      this.history.push({ role: 'user', parts: message });
      this.history.push({ role: 'model', parts: text });

      return text;
    } catch (error: any) {
      console.error('Error sending message to Gemini:', error);
      throw new Error(error.message || 'Failed to get response. Please try again.');
    }
  }

  getHistory(): ChatMessage[] {
    return this.history;
  }

  clearHistory(): void {
    this.history = [];
    this.chat = model.startChat();
  }
}

export const geminiService = new GeminiService(); 