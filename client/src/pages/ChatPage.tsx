import React from 'react';
import Sidebar from '../components/Sidebar';
import ChatArea from '../components/ChatArea';
import InputArea from '../components/InputArea';
import AiPanel from '../components/AiPanel';
import { useResponsive } from '../hooks/useResponsive';
import { useTheme } from '../hooks/useTheme';
import { ChatProvider } from '../contexts/ChatContext';
import { 
  BarsIcon, 
  MoonIcon, 
  SunIcon, 
  EllipsisIcon, 
  RobotIcon 
} from '../lib/icons';
import { useChat } from '../contexts/ChatContext';

const ChatHeader: React.FC = () => {
  const { isMobile, toggleSidebar, toggleAiPanel } = useResponsive();
  const { theme, toggleTheme } = useTheme();
  const { currentConversation } = useChat();

  return (
    <div className="bg-white border-b border-gray-200 flex items-center justify-between p-4">
      <div className="flex items-center">
        {isMobile && (
          <button 
            className="mr-3 text-gray-500 hover:text-gray-700" 
            onClick={toggleSidebar}
            id="openSidebar"
            aria-label="Open sidebar"
          >
            <BarsIcon className="w-5 h-5" />
          </button>
        )}
        <h2 className="font-semibold text-gray-900">
          {currentConversation?.customer.name || 'Luis'} Easton
        </h2>
      </div>
      <div className="flex items-center space-x-3">
        <button 
          className="text-gray-500 hover:text-gray-700"
          aria-label="More options"
        >
          <EllipsisIcon className="w-5 h-5" />
        </button>
        <button className="bg-gray-800 text-white px-3 py-1.5 rounded-md text-sm font-medium">
          Close
        </button>
        {isMobile && (
          <button 
            className="text-gray-500 hover:text-gray-700" 
            onClick={toggleAiPanel}
            id="openAiPanel"
            aria-label="Open AI panel"
          >
            <RobotIcon className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

const ChatPageContent: React.FC = () => {
  const { isSidebarOpen, isAiPanelOpen, closeSidebar, closeAiPanel } = useResponsive();

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <ChatHeader />
        <ChatArea />
        <InputArea />
      </div>
      
      <AiPanel isOpen={isAiPanelOpen} closeAiPanel={closeAiPanel} />
    </div>
  );
};

const ChatPage: React.FC = () => {
  return (
    <ChatProvider>
      <ChatPageContent />
    </ChatProvider>
  );
};

export default ChatPage;
