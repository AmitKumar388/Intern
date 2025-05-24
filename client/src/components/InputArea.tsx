import React, { useState } from 'react';
import { 
  BoldIcon, 
  ItalicIcon, 
  LinkIcon, 
  ListIcon, 
  PaperclipIcon,
  SendIcon
} from '../lib/icons';
import { useChat } from '../contexts/ChatContext';

const InputArea: React.FC = () => {
  const [message, setMessage] = useState('');
  const { sendMessage } = useChat();

  const handleSend = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 px-4 py-3">
      <div className="flex flex-col">
        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-md px-4 py-2 mb-3">
          <div className="flex items-center space-x-1 text-gray-500 text-sm">
            <span className="text-gray-600 font-medium mr-1">Chat</span>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-gray-400 text-sm">
            Use ⌘K for shortcuts
          </div>
        </div>
        
        <div className="flex justify-between items-center border border-gray-200 rounded-md p-3 mb-3">
          <div className="flex-1">
            <div 
              className="min-h-[24px] focus:outline-none text-gray-800 text-sm" 
              contentEditable={true}
              role="textbox"
              aria-multiline="true"
              aria-label="Message input"
              onInput={(e) => setMessage(e.currentTarget.textContent || '')}
              suppressContentEditableWarning={true}
            ></div>
          </div>
          <div className="flex items-center space-x-3 ml-2">
            <button className="text-gray-400 hover:text-gray-600" aria-label="Attachment">
              <PaperclipIcon className="w-5 h-5" />
            </button>
            <button 
              className="bg-gray-800 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputArea;
