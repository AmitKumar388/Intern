import React from 'react';
import Avatar from './Avatar';
import { Conversation } from '../data/mockData';
import { useChat } from '../contexts/ChatContext';
import { 
  HomeIcon, 
  InboxIcon, 
  UsersIcon, 
  SettingsIcon, 
  ChevronDownIcon,
  TimesIcon,
  ExclamationIcon
} from '../lib/icons';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const { conversations, currentConversation, setCurrentConversation } = useChat();

  // Handle conversation selection
  const handleSelectConversation = (conversation: Conversation) => {
    setCurrentConversation(conversation);
    closeSidebar();
  };

  return (
    <aside 
      id="sidebar"
      className={`sidebar fixed md:relative inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out ${!isOpen ? '-translate-x-full' : 'translate-x-0'} md:translate-x-0`}
    >
      {/* Header */}
      <div className="p-4 border-b light-border flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Your inbox</h1>
        <div className="flex items-center space-x-2">
          <button 
            className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" 
            onClick={closeSidebar}
            aria-label="Close sidebar"
            id="closeSidebar"
          >
            <TimesIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Filters */}
      <div className="px-4 py-2 border-b light-border flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">5 Open</span>
          <ChevronDownIcon className="w-4 h-4 text-gray-500" />
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-sm text-gray-500">Waiting longest</span>
          <ChevronDownIcon className="w-4 h-4 text-gray-500" />
        </div>
      </div>
      
      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`p-4 border-b light-border hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-all ${
              conversation.id === currentConversation?.id 
                ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-l-[hsl(var(--primary))]'
                : ''
            }`}
            onClick={() => handleSelectConversation(conversation)}
          >
            <div className="flex items-start space-x-3">
              <Avatar 
                name={conversation.customer.name}
                avatar={conversation.customer.avatar}
                avatarColor={conversation.customer.avatarColor}
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div className="font-medium text-gray-900 dark:text-gray-100 truncate">
                    {conversation.title}
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                    {conversation.lastActivity}
                  </span>
                </div>
                
                {conversation.waitTime ? (
                  <div className="flex items-center mt-1">
                    <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-200 text-xs px-2 py-0.5 rounded">
                      {conversation.waitTime}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-2 truncate">
                      {conversation.lastMessage}
                    </p>
                  </div>
                ) : (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 truncate">
                    {conversation.lastMessage}
                  </p>
                )}
                
                {conversation.source === 'Small Crafts' && (
                  <p className="text-xs text-gray-500 mt-1">Luis - Small Crafts</p>
                )}
              </div>
              
              {conversation.priority === 'high' && (
                <div className="text-gray-800 dark:text-gray-200 rounded-full bg-gray-200 dark:bg-gray-700 p-1 w-6 h-6 flex items-center justify-center">
                  <ExclamationIcon className="w-4 h-4" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Nav */}
      <div className="p-3 border-t light-border flex items-center justify-between text-gray-600 dark:text-gray-400">
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
          <HomeIcon className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
          <InboxIcon className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
          <UsersIcon className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
          <SettingsIcon className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
