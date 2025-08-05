'use client';

import { useTheme } from '../contexts/ThemeContext';

export default function About() {
  const { theme } = useTheme();
  
  return (
    <section id="about" className="min-h-screen py-8 md:py-16 bg-secondary relative overflow-hidden flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-60 h-60 bg-tertiary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-60 h-60 bg-tertiary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 gradient-text">
            Our Story
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Discover the journey behind After Class and our passion for creating unforgettable moments
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Story Column */}
          <div className="space-y-4 md:space-y-6">
            <div className="glass p-4 md:p-6 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4">
                Once Joyful The Signature Cocktail
              </h3>
              <div className="space-y-2 md:space-y-3 text-secondary leading-relaxed text-sm">
                <div>
                  <p> This cocktail is more than just a drink it's a </p>
                  <p> Time machine in a glass. Designed to capture </p>
                  <p> The essence of a school reunion, it brings back </p>
                  <p> The laughter, the little secrets, and the unspoken </p>
                </div>
                <p>
                  The scent of creamy vanilla blended with a soft milky note greets you first, like the comforting familiarity of a place you once called home. 
                </p>
                <p>
                  The first sip bursts with a refreshing tangy kick – bright and playful, 
                  like the energy of youth – followed by a gentle sweetness that settles in, evoking the warmth of old friendships. A light fizz dances on your tongue, adding a lively spark to the experience, 
                  just like the excitement of meeting familiar faces after years apart.
                </p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="glass p-2 md:p-3 hover:scale-[1.02] transition-all duration-300">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/team/owner.jpg"
                  alt="After Class Bar Interior"
                  className="w-full h-64 md:h-80 object-cover rounded-xl" 
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-3 left-3 glass px-3 py-1 rounded-full">
                  <span className="text-white font-medium text-sm"> Owner: Bigtul</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-accent/10 rounded-full blur-2xl"></div>

            {/* Small Gallery */}
            <div className="grid grid-cols-3 gap-2 mt-3 md:mt-4">
              <div className="aspect-square overflow-hidden rounded-lg glass">
                <img
                  src="/menu/menu01.jpg"
                  alt="Cocktail Making"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg glass">
                <img
                  src="/menu/menu02.jpg"
                  alt="Fresh Ingredients"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg glass">
                <img
                  src="/menu/menu03.jpg"
                  alt="Bar Atmosphere"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}