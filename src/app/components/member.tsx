'use client';

import { members } from '../data/member';
import { useTheme } from '../contexts/ThemeContext';
import Image from 'next/image';

export default function Member() {
  const { theme } = useTheme();
  
  return (
    <section 
      id="member" 
      className="py-24 relative"
      style={{ backgroundColor: theme.colors.secondary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 
            className="text-5xl sm:text-6xl font-light mb-6"
            style={{ color: theme.colors.textPrimary }}
          >
            Our <span className="font-bold" style={{ color: theme.colors.accent }}>Team</span>
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto font-light"
            style={{ color: theme.colors.textSecondary }}
          >
            Meet the expert team behind our high-quality Thai cocktail creations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.id} className="group">
              <div 
                className="glass p-8 hover:scale-105 transition-all duration-300 text-center"
                style={{ backgroundColor: theme.colors.surface }}
              >
                {/* Profile Image */}
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 transform group-hover:scale-110 transition-transform duration-300"
                       style={{ borderColor: theme.colors.accent + '20' }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to SVG placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = '/team/placeholder.svg';
                      }}
                    />
                  </div>
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ color: theme.colors.textPrimary }}
                  >
                    {member.name}
                  </h3>
                  
                  <span 
                    className="px-4 py-2 rounded-full text-sm font-medium border"
                    style={{
                      backgroundColor: theme.colors.accent + '20',
                      color: theme.colors.accent,
                      borderColor: theme.colors.accent + '50'
                    }}
                  >
                    ID: {member.studentID}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div 
            className="text-center p-6 glass"
            style={{ backgroundColor: theme.colors.surface }}
          >
            <div 
              className="text-4xl font-light mb-2"
              style={{ color: theme.colors.textPrimary }}
            >
              {members.length}
            </div>
            <p 
              className="font-medium"
              style={{ color: theme.colors.textSecondary }}
            >
              Team Members
            </p>
          </div>
          <div 
            className="text-center p-6 glass"
            style={{ backgroundColor: theme.colors.surface }}
          >
            <div 
              className="text-4xl font-light mb-2"
              style={{ color: theme.colors.textPrimary }}
            >
              100%
            </div>
            <p 
              className="font-medium"
              style={{ color: theme.colors.textSecondary }}
            >
              Dedication
            </p>
          </div>
          <div 
            className="text-center p-6 glass"
            style={{ backgroundColor: theme.colors.surface }}
          >
            <div 
              className="text-4xl font-light mb-2"
              style={{ color: theme.colors.textPrimary }}
            >
              1
            </div>
            <p 
              className="font-medium"
              style={{ color: theme.colors.textSecondary }}
            >
              Recipes
            </p>
          </div>
          <div 
            className="text-center p-6 glass"
            style={{ backgroundColor: theme.colors.surface }}
          >
            <div 
              className="text-4xl font-light mb-2"
              style={{ color: theme.colors.textPrimary }}
            >
              ⭐
            </div>
            <p 
              className="font-medium"
              style={{ color: theme.colors.textSecondary }}
            >
              Excellence
            </p>
          </div>
        </div>

       
      </div>
    </section>
  );
}