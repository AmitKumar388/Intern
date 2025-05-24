import { useState, useEffect } from 'react';

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAiPanelOpen, setIsAiPanelOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close panels when clicking outside on mobile
  useEffect(() => {
    if (!isMobile) return;

    const handleClickAway = (e: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const aiPanel = document.getElementById('aiPanel');
      const sidebarToggle = document.getElementById('openSidebar');
      const aiPanelToggle = document.getElementById('openAiPanel');

      // Close sidebar if clicking outside
      if (
        isSidebarOpen && 
        sidebar && 
        !sidebar.contains(e.target as Node) && 
        e.target !== sidebarToggle
      ) {
        setIsSidebarOpen(false);
      }

      // Close AI panel if clicking outside
      if (
        isAiPanelOpen && 
        aiPanel && 
        !aiPanel.contains(e.target as Node) && 
        e.target !== aiPanelToggle
      ) {
        setIsAiPanelOpen(false);
      }
    };

    document.addEventListener('click', handleClickAway, true);
    return () => document.removeEventListener('click', handleClickAway, true);
  }, [isMobile, isSidebarOpen, isAiPanelOpen]);

  return {
    isMobile,
    isSidebarOpen,
    isAiPanelOpen,
    toggleSidebar: () => setIsSidebarOpen(prev => !prev),
    toggleAiPanel: () => setIsAiPanelOpen(prev => !prev),
    closeSidebar: () => setIsSidebarOpen(false),
    closeAiPanel: () => setIsAiPanelOpen(false)
  };
};
