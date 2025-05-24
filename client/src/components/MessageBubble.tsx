import React from 'react';
import Avatar from './Avatar';
import { Message } from '../data/mockData';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const { sender, content, timestamp, type } = message;
  
  // Format timestamp to minutes 
  const formatTimestamp = (date: Date) => {
    return '1min'; // Simplified for this example to match the design
  };

  if (type === 'customer') {
    return (
      <div className="mb-6 px-2">
        <div className="flex items-start gap-2">
          <Avatar 
            name={sender.name} 
            avatar={sender.avatar} 
            avatarColor={sender.avatarColor}
          />
          <div className="flex-1 min-w-0">
            <div className="bg-gray-200 p-3 rounded-lg shadow-sm message-bubble-other max-w-[90%] md:max-w-[75%] inline-block">
              <p className="text-gray-800 text-sm break-words whitespace-normal">{content}</p>
            </div>
            <div className="mt-1 text-xs text-gray-500 flex items-center">
              <span className="mr-1 text-gray-400">1min</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6 px-2">
      <div className="flex items-start justify-end">
        <div className="text-right max-w-[95%] md:max-w-[80%]">
          <div className="bg-blue-100 p-3 rounded-lg shadow-sm message-bubble-user inline-block text-left">
            <p className="text-gray-800 text-sm break-words whitespace-normal">{content}</p>
          </div>
          <div className="mt-1 flex items-center justify-end text-xs text-gray-500">
            <span className="text-gray-400">Seen · 1min</span>
            <div className="ml-2">
              <Avatar 
                name={sender.name} 
                avatar={sender.avatar} 
                avatarColor={sender.avatarColor}
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
