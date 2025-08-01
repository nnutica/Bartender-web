'use client';

import { useTheme } from '../contexts/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  
  return (
    <section id="hero" className="min-h-screen bg-primary flex items-center justify-center pt-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-tertiary/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-tertiary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-12">
          {/* Main Title */}
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light text-primary">
              Thai
              <span className="block font-bold gradient-text">Mojito</span>
            </h1>
            <p className="text-xl sm:text-2xl text-secondary font-light max-w-2xl mx-auto">
              The perfect blend of Thai tradition and modern mixology
            </p>
          </div>

          {/* Description */}
          <div className="glass max-w-4xl mx-auto p-8 float-animation">
            <p className="text-lg text-secondary leading-relaxed">
              Experience the unique taste of our signature Thai Mojito – a refreshing cocktail that combines authentic Thai white spirit with fresh kaffir lime leaves, aromatic lemongrass, and zesty lime for an unforgettable drinking experience.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#about"
              className="btn-primary px-8 py-4 rounded-full text-lg font-medium shadow-2xl hover:shadow-accent/50 hover:scale-105"
            >
              Discover Our Recipe
            </a>
            <a
              href="#ingredient"
              className="btn-secondary glass px-8 py-4 rounded-full text-lg font-medium hover:bg-surface/20 transition-all duration-300"
            >
              View Ingredients
            </a>
          </div>

          {/* Product Display */}
          <div className="mt-16">
            <div className="glass w-32 h-32 rounded-full flex items-center justify-center mx-auto float-animation text-7xl">
              🍹
            </div>
            <p className="mt-6 text-secondary font-medium">Our Signature Thai Mojito</p>
          </div>
        </div>
      </div>
    </section>
  );
}