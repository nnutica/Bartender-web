'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
     { href: '#menu', label: 'Menu' },
    { href: '#member', label: 'Team' }
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl glass z-50">
      <div className="px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
              src="/logo.png"
              alt="Thai Mojito Logo"
              className="h-8 w-8 mr-2"
              />
              <span className="text-xl font-bold text-primary">After Class Bar</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-secondary hover:text-primary hover:bg-surface/30 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Order Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <button className="btn-primary px-6 py-2 rounded-full text-sm font-medium shadow-lg">
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle className="scale-75" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-surface/20 backdrop-blur-sm inline-flex items-center justify-center p-2 rounded-full text-secondary hover:text-primary hover:bg-surface/30 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <div className="px-4 pt-2 pb-4 space-y-2 glass">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-secondary hover:text-primary hover:bg-surface/20 block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <button className="w-full btn-primary px-4 py-2 rounded-lg text-sm font-medium">
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
