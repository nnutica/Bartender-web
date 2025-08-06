'use client';

import { useTheme } from '../contexts/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  
  return (
    <section id="hero" className="min-h-screen bg-primary flex items-center justify-center pt-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/background/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover blur-sm"
        />
        {/* Theme-based overlay */}
        <div className={`absolute inset-0 ${
          theme.mode === 'dark' 
            ? 'bg-gray-500/20' 
            : 'bg-white/70'
        }`}></div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-tertiary/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-tertiary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-12">
          {/* Main Title */}
            <div className="space-y-6 flex flex-col items-center">
            <img
              src="/menu/once.png"
              alt="After Class Logo"
              className="w-80 h-80 object-cover mb-4"
            />
            <p className="text-xl sm:text-2xl text-secondary font-light max-w-2xl mx-auto">
              The perfect blend of After Class tradition and modern mixology
            </p>
            </div>

          {/* Description */}
          <div className="glass max-w-4xl mx-auto p-8 float-animation">
            <p className="text-lg text-secondary leading-relaxed">
              Reunion isn’t just about meeting up it all comes rushing back. It’s that spark when you
              realize no matter how much we’ve changed,
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#menu"
              className="btn-primary px-8 py-4 rounded-full text-lg font-medium shadow-2xl hover:shadow-accent/50 hover:scale-105"
            >
              Discover Our Menu
            </a>
            <a
              href="#member"
              className="btn-secondary glass px-8 py-4 rounded-full text-lg font-medium hover:bg-surface/20 transition-all duration-300"
            >
              Owner Teams
            </a>
          </div>

         
        </div>
      </div>
    </section>
  );
}