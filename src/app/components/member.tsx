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
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00OCA0OEM1NC42Mjc0IDQ4IDYwIDQyLjYyNzQgNjAgMzZDNjAgMjkuMzcyNiA1NC42Mjc0IDI0IDQ4IDI0QzQxLjM3MjYgMjQgMzYgMjkuMzcyNiAzNiAzNkMzNiA0Mi42Mjc0IDQxLjM3MjYgNDggNDggNDhaIiBmaWxsPSIjOUI5QjlCIi8+CjxwYXRoIGQ9Ik0yNCA3MkMyNCA2NC4yNjggMzAuMjY4IDU4IDM4IDU4SDU4QzY1LjczMiA1OCA3MiA2NC4yNjggNzIgNzJWNzJIMjRWNzJaIiBmaWxsPSIjOUI5QjlCIi8+Cjwvc3ZnPgo=';
                      }}
                    />
                  </div>
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ color: theme.colors.textPrimary }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="font-medium mb-3"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    {member.role}
                  </p>
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
              50+
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

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <div 
            className="glass p-12 max-w-4xl mx-auto"
            style={{ backgroundColor: theme.colors.surface }}
          >
            <h3 
              className="text-3xl font-bold mb-6"
              style={{ color: theme.colors.textPrimary }}
            >
              Want to Know More?
            </h3>
            <p 
              className="mb-8 font-light text-lg"
              style={{ color: theme.colors.textSecondary }}
            >
              Our team is ready to provide consultation and share knowledge about Thai cocktails
            </p>
            <button 
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-2xl hover:scale-105"
              style={{
                backgroundColor: theme.colors.buttonPrimary,
                color: theme.colors.buttonText
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.buttonSecondary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.buttonPrimary;
              }}
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}