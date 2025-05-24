import React from 'react';
import { BugIcon } from '../lib/icons';

interface AvatarProps {
  name: string;
  avatar: string;
  avatarColor: string;
  size?: 'sm' | 'md' | 'lg';
}

const Avatar: React.FC<AvatarProps> = ({ name, avatar, avatarColor, size = 'md' }) => {
  // Size classes
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
  };

  // Special case for bug icon
  if (avatar === 'bug') {
    return (
      <div className={`${sizeClasses[size]} ${avatarColor} rounded-full flex-shrink-0 flex items-center justify-center text-white`}>
        <BugIcon className="w-3 h-3" />
      </div>
    );
  }

  return (
    <div 
      className={`${sizeClasses[size]} ${avatarColor} rounded-full flex-shrink-0 flex items-center justify-center text-white`}
      title={name}
    >
      {avatar}
    </div>
  );
};

export default Avatar;
