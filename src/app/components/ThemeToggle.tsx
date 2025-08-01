'use client';

import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-12 h-6 rounded-full border transition-all duration-300 ease-in-out
        ${theme.mode === 'dark' 
          ? 'bg-accent border-accent' 
          : 'bg-secondary border-border'
        }
        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50
        ${className}
      `}
      style={{
        backgroundColor: theme.mode === 'dark' ? theme.colors.accent : theme.colors.secondary,
        borderColor: theme.mode === 'dark' ? theme.colors.accent : theme.colors.border
      }}
      aria-label={`Switch to ${theme.mode === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div
        className={`
          absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300 ease-in-out
          flex items-center justify-center text-xs
          ${theme.mode === 'dark' 
            ? 'left-6 bg-primary text-accent' 
            : 'left-0.5 bg-accent text-white'
          }
        `}
      >
        {theme.mode === 'dark' ? '🌙' : '☀️'}
      </div>
    </button>
  );
};
