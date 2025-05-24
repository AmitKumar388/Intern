import React from 'react';
import MessageBubble from './MessageBubble';
import { HandPointerIcon } from '../lib/icons';
import { useChat } from '../contexts/ChatContext';

const ChatArea: React.FC = () => {
  const { messages } = useChat();
  
  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50 flex flex-col relative">
      {/* Messages */}
      <div className="flex-1">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>
      
      {/* Hand pointer icon removed as requested */}
    </div>
  );
};

export default ChatArea;
