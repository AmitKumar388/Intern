import React from 'react';
import { 
  TimesIcon, 
  ExpandIcon,
  RobotIcon,
  QuestionIcon
} from '../lib/icons';
import { suggestedQuestions } from '../data/mockData';

interface AiPanelProps {
  isOpen: boolean;
  closeAiPanel: () => void;
}

const AiPanel: React.FC<AiPanelProps> = ({ isOpen, closeAiPanel }) => {
  return (
    <aside 
      id="aiPanel"
      className={`w-80 h-full bg-white border-l light-border flex-shrink-0 flex flex-col fixed md:relative inset-y-0 right-0 z-30 transform transition-transform duration-300 ease-in-out ${!isOpen ? 'translate-x-full' : 'translate-x-0'} md:translate-x-0`}
    >
      <div className="p-4 flex justify-between items-center border-b light-border">
        <div className="flex items-center">
          <button 
            className="md:hidden mr-3 text-gray-500" 
            onClick={closeAiPanel}
            id="closeAiPanel"
            aria-label="Close AI panel"
          >
            <TimesIcon className="w-5 h-5" />
          </button>
          <button className="text-[hsl(var(--primary))] hover:text-opacity-90 font-medium">
            AI Copilot
          </button>
        </div>
        <div className="flex space-x-3">
          <button className="text-gray-500 hover:text-gray-700">
            Details
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <ExpandIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 flex flex-col">
        <div className="bg-gray-50 rounded-lg p-4 flex items-start space-x-3 mb-auto">
          <div className="w-8 h-8 rounded-md bg-[hsl(var(--primary))] flex items-center justify-center text-white flex-shrink-0">
            <RobotIcon className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-medium">Hi, I'm Fin AI Copilot</h3>
            <p className="text-sm text-gray-600 mt-1">
              Ask me anything about this conversation.
            </p>
          </div>
        </div>
        
        {/* Suggestions */}
        <div className="mt-6">
          <div className="mb-2 text-sm text-gray-500">Suggested</div>
          {suggestedQuestions.map((question, index) => (
            <button 
              key={index} 
              className="w-full bg-gray-100 hover:bg-gray-200 p-3 rounded-lg mb-2 text-left flex items-center text-gray-800"
            >
              <QuestionIcon className="w-4 h-4 mr-2 text-gray-500" />
              <span>{question}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default AiPanel;
