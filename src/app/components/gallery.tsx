'use client';

import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Gallery() {
  const [selectedView, setSelectedView] = useState('recipe');
  const { theme } = useTheme();

  const views = [
    { id: 'recipe', name: 'Recipe', icon: '📋' },
    { id: 'process', name: 'Making Process', icon: '🔄' },
    { id: 'serving', name: 'Serving Style', icon: '🍸' }
  ];

  const renderContent = () => {
    switch (selectedView) {
      case 'recipe':
        return (
          <div 
            className="p-12 rounded-2xl glass"
            style={{ backgroundColor: theme.colors.surface }}
          >
            <h3 
              className="text-3xl font-bold mb-8 text-center"
              style={{ color: theme.colors.textPrimary }}
            >
              Thai Mojito Recipe
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 
                  className="text-xl font-semibold mb-4"
                  style={{ color: theme.colors.textSecondary }}
                >
                  Ingredients:
                </h4>
                <ul className="space-y-3" style={{ color: theme.colors.textSecondary }}>
                  <li className="flex items-center"><span className="mr-3" style={{ color: theme.colors.accent }}>•</span>60ml Thai White Spirit</li>
                  <li className="flex items-center"><span className="mr-3" style={{ color: theme.colors.accent }}>•</span>6-8 Fresh Kaffir Lime Leaves</li>
                  <li className="flex items-center"><span className="mr-3" style={{ color: theme.colors.accent }}>•</span>1 Lemongrass Stalk</li>
                  <li className="flex items-center"><span className="mr-3" style={{ color: theme.colors.accent }}>•</span>30ml Fresh Lime Juice</li>
                  <li className="flex items-center"><span className="mr-3" style={{ color: theme.colors.accent }}>•</span>15ml Simple Syrup</li>
                  <li className="flex items-center"><span className="mr-3" style={{ color: theme.colors.accent }}>•</span>Soda Water</li>
                  <li className="flex items-center"><span className="mr-3" style={{ color: theme.colors.accent }}>•</span>Fresh Ice</li>
                </ul>
              </div>
              <div>
                <h4 
                  className="text-xl font-semibold mb-4"
                  style={{ color: theme.colors.textSecondary }}
                >
                  Instructions:
                </h4>
                <ol className="space-y-3" style={{ color: theme.colors.textSecondary }}>
                  <li className="flex"><span className="mr-3 font-bold" style={{ color: theme.colors.accent }}>1.</span>Muddle kaffir lime leaves gently</li>
                  <li className="flex"><span className="mr-3 font-bold" style={{ color: theme.colors.accent }}>2.</span>Add Thai white spirit and lime juice</li>
                  <li className="flex"><span className="mr-3 font-bold" style={{ color: theme.colors.accent }}>3.</span>Shake with ice</li>
                  <li className="flex"><span className="mr-3 font-bold" style={{ color: theme.colors.accent }}>4.</span>Strain into glass with fresh ice</li>
                  <li className="flex"><span className="mr-3 font-bold" style={{ color: theme.colors.accent }}>5.</span>Top with soda water</li>
                  <li className="flex"><span className="mr-3 font-bold" style={{ color: theme.colors.accent }}>6.</span>Garnish with lemongrass</li>
                </ol>
              </div>
            </div>
          </div>
        );
      
      case 'process':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Prepare', desc: 'Gather fresh ingredients and chill glass', icon: '🥃' },
              { step: 2, title: 'Muddle', desc: 'Gently muddle kaffir lime leaves', icon: '🥄' },
              { step: 3, title: 'Mix', desc: 'Add spirits and shake with ice', icon: '🧊' },
              { step: 4, title: 'Serve', desc: 'Strain and garnish beautifully', icon: '✨' }
            ].map((item) => (
              <div 
                key={item.step} 
                className="glass p-6 text-center"
                style={{ backgroundColor: theme.colors.surface }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 
                  className="text-xl font-bold mb-2"
                  style={{ color: theme.colors.textPrimary }}
                >
                  Step {item.step}
                </h4>
                <h5 
                  className="text-lg font-semibold mb-3"
                  style={{ color: theme.colors.accent }}
                >
                  {item.title}
                </h5>
                <p 
                  className="text-sm"
                  style={{ color: theme.colors.textSecondary }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        );
      
      case 'serving':
        return (
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Classic Presentation',
                desc: 'Served in a highball glass with fresh ice and lemongrass garnish',
                features: ['Highball Glass', 'Fresh Ice', 'Lemongrass Garnish'],
                icon: '🍃'
              },
              {
                title: 'Premium Service',
                desc: 'Elevated presentation with hand-carved ice and aromatic garnish',
                features: ['Premium Glassware', 'Hand-carved Ice', 'Multiple Garnishes'],
                icon: '✨'
              },
              {
                title: 'Event Style',
                desc: 'Perfect for parties and gatherings with batch preparation',
                features: ['Batch Preparation', 'Pitcher Service', 'Group Garnish'],
                icon: '🎉'
              }
            ].map((style, index) => (
              <div 
                key={index} 
                className="glass p-8 text-center"
                style={{ backgroundColor: theme.colors.surface }}
              >
                <div className="text-5xl mb-6">{style.icon}</div>
                <h4 
                  className="text-xl font-bold mb-4"
                  style={{ color: theme.colors.textPrimary }}
                >
                  {style.title}
                </h4>
                <p 
                  className="mb-6 font-light"
                  style={{ color: theme.colors.textSecondary }}
                >
                  {style.desc}
                </p>
                <div className="space-y-2">
                  {style.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="py-2 px-4 rounded-full text-sm border"
                      style={{ 
                        backgroundColor: theme.colors.accent + '20',
                        color: theme.colors.accent,
                        borderColor: theme.colors.accent + '50'
                      }}
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section 
      id="gallery" 
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: theme.colors.secondary }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-40 right-40 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: theme.colors.tertiary }}
        ></div>
        <div 
          className="absolute bottom-40 left-40 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: theme.colors.tertiary }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 
            className="text-5xl sm:text-6xl font-light mb-6"
            style={{ color: theme.colors.textPrimary }}
          >
            How to <span className="font-bold" style={{ color: theme.colors.accent }}>Make It</span>
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto font-light"
            style={{ color: theme.colors.textSecondary }}
          >
            Learn everything about our signature Thai Mojito
          </p>
        </div>

        {/* View Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => setSelectedView(view.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedView === view.id
                  ? 'glass shadow-2xl scale-105'
                  : 'hover:scale-105'
              }`}
              style={{
                backgroundColor: selectedView === view.id 
                  ? theme.colors.accent 
                  : theme.colors.surface + '80',
                color: selectedView === view.id 
                  ? theme.colors.buttonText 
                  : theme.colors.textSecondary
              }}
              onMouseEnter={(e) => {
                if (selectedView !== view.id) {
                  e.currentTarget.style.backgroundColor = theme.colors.surface;
                  e.currentTarget.style.color = theme.colors.textPrimary;
                }
              }}
              onMouseLeave={(e) => {
                if (selectedView !== view.id) {
                  e.currentTarget.style.backgroundColor = theme.colors.surface + '80';
                  e.currentTarget.style.color = theme.colors.textSecondary;
                }
              }}
            >
              <span className="mr-2">{view.icon}</span>
              {view.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mb-16">
          {renderContent()}
        </div>

       
      </div>
    </section>
  );
}