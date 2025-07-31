'use client';

import { useState } from 'react';

export default function Gallery() {
  const [selectedView, setSelectedView] = useState('recipe');

  const views = [
    { id: 'recipe', name: 'Recipe', icon: '📋' },
    { id: 'process', name: 'Making Process', icon: '🔄' },
    { id: 'serving', name: 'Serving Style', icon: '🍸' }
  ];

  const renderContent = () => {
    switch (selectedView) {
      case 'recipe':
        return (
          <div className="glass-dark p-12 rounded-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Thai Mojito Recipe</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-slate-200 mb-4">Ingredients:</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center"><span className="mr-3">•</span>60ml Thai White Spirit</li>
                  <li className="flex items-center"><span className="mr-3">•</span>6-8 Fresh Kaffir Lime Leaves</li>
                  <li className="flex items-center"><span className="mr-3">•</span>1 Lemongrass Stalk</li>
                  <li className="flex items-center"><span className="mr-3">•</span>30ml Fresh Lime Juice</li>
                  <li className="flex items-center"><span className="mr-3">•</span>15ml Simple Syrup</li>
                  <li className="flex items-center"><span className="mr-3">•</span>Soda Water</li>
                  <li className="flex items-center"><span className="mr-3">•</span>Fresh Ice</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-slate-200 mb-4">Instructions:</h4>
                <ol className="space-y-3 text-slate-300">
                  <li className="flex"><span className="mr-3 font-bold">1.</span>Muddle kaffir lime leaves gently</li>
                  <li className="flex"><span className="mr-3 font-bold">2.</span>Add Thai white spirit and lime juice</li>
                  <li className="flex"><span className="mr-3 font-bold">3.</span>Shake with ice</li>
                  <li className="flex"><span className="mr-3 font-bold">4.</span>Strain into glass with fresh ice</li>
                  <li className="flex"><span className="mr-3 font-bold">5.</span>Top with soda water</li>
                  <li className="flex"><span className="mr-3 font-bold">6.</span>Garnish with lemongrass</li>
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
              { step: 2, title: 'Muddle', desc: 'Gently muddle kaffir lime leaves', icon: '�' },
              { step: 3, title: 'Mix', desc: 'Add spirits and shake with ice', icon: '🧊' },
              { step: 4, title: 'Serve', desc: 'Strain and garnish beautifully', icon: '✨' }
            ].map((item) => (
              <div key={item.step} className="glass-dark p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">Step {item.step}</h4>
                <h5 className="text-lg font-semibold text-slate-200 mb-3">{item.title}</h5>
                <p className="text-slate-300 text-sm">{item.desc}</p>
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
              <div key={index} className="glass-dark p-8 text-center">
                <div className="text-5xl mb-6">{style.icon}</div>
                <h4 className="text-xl font-bold text-white mb-4">{style.title}</h4>
                <p className="text-slate-300 mb-6 font-light">{style.desc}</p>
                <div className="space-y-2">
                  {style.features.map((feature, idx) => (
                    <div key={idx} className="bg-white/10 text-slate-200 py-2 px-4 rounded-full text-sm">
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
    <section id="gallery" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-40 w-80 h-80 bg-gradient-to-br from-slate-700/20 to-slate-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-gradient-to-tr from-slate-700/20 to-slate-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-light mb-6">
            How to <span className="font-bold">Make It</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
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
                  ? 'glass-dark text-white shadow-2xl scale-105'
                  : 'bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white'
              }`}
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

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="glass-dark p-12 rounded-2xl max-w-2xl mx-auto">
            <p className="text-xl text-slate-300 mb-8 font-light">
              Ready to experience our Thai Mojito?
            </p>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:scale-105">
              Contact Us to Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}