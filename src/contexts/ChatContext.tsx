import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Message, ChatState, ChatContext as ChatContextType } from '../types/chat';
import { chatService } from '../services/chatService';

const initialState: ChatState = {
  messages: [],
  isLoading: false,
  error: null
};

type ChatAction =
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'CLEAR_CHAT' };

const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      };
    case 'CLEAR_CHAT':
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const sendMessage = useCallback(async (content: string) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_ERROR', payload: null });

      // Add user message
      const userMessage: Message = {
        id: uuidv4(),
        role: 'user',
        content,
        timestamp: new Date()
      };
      dispatch({ type: 'ADD_MESSAGE', payload: userMessage });

      // Get AI response
      const response = await chatService.sendMessage([...state.messages, userMessage]);

      // Add AI response
      const aiMessage: Message = {
        id: uuidv4(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      dispatch({ type: 'ADD_MESSAGE', payload: aiMessage });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to get response from AI' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [state.messages]);

  const clearChat = useCallback(() => {
    dispatch({ type: 'CLEAR_CHAT' });
  }, []);

  return (
    <ChatContext.Provider
      value={{
        messages: state.messages,
        isLoading: state.isLoading,
        error: state.error,
        sendMessage,
        clearChat
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}; 