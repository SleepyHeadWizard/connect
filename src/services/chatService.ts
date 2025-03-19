import { GoogleGenerativeAI } from '@google/generative-ai';
import { Message } from '../types/chat';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

export const chatService = {
  async sendMessage(messages: Message[]): Promise<string> {
    try {
      const chat = model.startChat({
        history: messages.map(msg => ({
          role: msg.role,
          parts: msg.content,
        })),
        generationConfig: {
          maxOutputTokens: 2048,
        },
      });

      const result = await chat.sendMessage(messages[messages.length - 1].content);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },

  formatSystemPrompt(): string {
    return `You are MindfulMe AI, a helpful assistant focused on promoting healthy social media habits and digital wellbeing. 
    Your responses should be:
    1. Empathetic and supportive
    2. Evidence-based and informative
    3. Actionable and practical
    4. Focused on mental health and digital wellness
    5. Free from harmful or misleading information
    
    When appropriate, you can:
    - Share relevant research findings
    - Suggest practical tips and strategies
    - Recommend helpful resources
    - Guide users toward healthier social media habits
    - Help users reflect on their digital wellbeing`;
  }
}; 