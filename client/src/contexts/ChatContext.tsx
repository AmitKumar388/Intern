import React, { createContext, useState, useContext } from 'react';
import { Conversation, Message, conversations, messages } from '../data/mockData';

interface ChatContextType {
  conversations: Conversation[];
  currentConversation: Conversation | null;
  messages: Message[];
  setCurrentConversation: (conversation: Conversation) => void;
  sendMessage: (content: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [chatConversations] = useState<Conversation[]>(conversations);
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(chatConversations[0] || null);
  const [chatMessages, setChatMessages] = useState<Message[]>(messages);

  // Handle sending a new message
  const sendMessage = (content: string) => {
    if (!content.trim() || !currentConversation) return;
    
    const newMessage: Message = {
      id: String(Date.now()),
      sender: {
        id: 'agent',
        name: 'Sean',
        avatar: 'S',
        avatarColor: 'bg-indigo-500',
      },
      content,
      timestamp: new Date(),
      type: 'agent',
    };
    
    setChatMessages([...chatMessages, newMessage]);
  };

  const value = {
    conversations: chatConversations,
    currentConversation,
    messages: chatMessages,
    setCurrentConversation,
    sendMessage,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
