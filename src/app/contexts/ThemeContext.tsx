'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ThemeColors {
  // Background colors
  primary: string;
  secondary: string;
  tertiary: string;
  
  // Text colors
  textPrimary: string;
  textSecondary: string;
  textAccent: string;
  
  // Accent colors
  accent: string;
  accentSecondary: string;
  
  // Border and divider colors
  border: string;
  divider: string;
  
  // Card and surface colors
  surface: string;
  surfaceElevated: string;
  
  // Button colors
  buttonPrimary: string;
  buttonSecondary: string;
  buttonText: string;
  
  // Status colors
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface Theme {
  colors: ThemeColors;
  mode: 'light' | 'dark';
}

const lightTheme: Theme = {
  mode: 'light',
  colors: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9',
    
    textPrimary: '#1e293b',
    textSecondary: '#64748b',
    textAccent: '#d97706',
    
    accent: '#d97706',
    accentSecondary: '#f59e0b',
    
    border: '#e2e8f0',
    divider: '#cbd5e1',
    
    surface: '#ffffff',
    surfaceElevated: '#f8fafc',
    
    buttonPrimary: '#d97706',
    buttonSecondary: '#f59e0b',
    buttonText: '#ffffff',
    
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  }
};

const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    primary: '#0f172a',
    secondary: '#1e293b',
    tertiary: '#334155',
    
    textPrimary: '#f8fafc',
    textSecondary: '#cbd5e1',
    textAccent: '#fbbf24',
    
    accent: '#fbbf24',
    accentSecondary: '#f59e0b',
    
    border: '#475569',
    divider: '#64748b',
    
    surface: '#1e293b',
    surfaceElevated: '#334155',
    
    buttonPrimary: '#fbbf24',
    buttonSecondary: '#f59e0b',
    buttonText: '#0f172a',
    
    success: '#22c55e',
    warning: '#fbbf24',
    error: '#f87171',
    info: '#60a5fa',
  }
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (mode: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: 'light' | 'dark';
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultTheme = 'dark' 
}) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(defaultTheme);

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage when it changes
    localStorage.setItem('theme', currentTheme);
    
    // Apply theme to document root for CSS variables
    const root = document.documentElement;
    const theme = currentTheme === 'dark' ? darkTheme : lightTheme;
    
    // Set CSS custom properties
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    
    // Set theme mode
    root.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setTheme = (mode: 'light' | 'dark') => {
    setCurrentTheme(mode);
  };

  const theme = currentTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { lightTheme, darkTheme };
