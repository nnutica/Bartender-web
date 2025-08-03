
'use client';

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Ingredient from "./components/ingredient";
import Gallery from "./components/gallery";
import Member from "./components/member";
import { useTheme } from "./contexts/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Member />
      
      {/* Footer */}
      <footer 
        className="py-16 relative overflow-hidden"
        style={{ backgroundColor: theme.colors.secondary }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-20 right-20 w-40 h-40 rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: theme.colors.tertiary }}
          ></div>
          <div 
            className="absolute bottom-20 left-20 w-40 h-40 rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: theme.colors.tertiary }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 
                className="text-2xl font-bold"
                style={{ color: theme.colors.textPrimary }}
              >
                🍹 Thai Mojito
              </h3>
              <p 
                className="leading-relaxed font-light"
                style={{ color: theme.colors.textSecondary }}
              >
                The perfect blend of authentic Thai white spirit with fresh kaffir lime leaves 
                and aromatic lemongrass for a unique cocktail experience.
              </p>
            </div>
            <div className="space-y-6">
              <h4 
                className="text-lg font-semibold"
                style={{ color: theme.colors.textPrimary }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li><a href="#hero" className="font-light transition-colors duration-300" style={{ color: theme.colors.textSecondary }} onMouseEnter={(e) => e.currentTarget.style.color = theme.colors.textPrimary} onMouseLeave={(e) => e.currentTarget.style.color = theme.colors.textSecondary}>Home</a></li>
                <li><a href="#about" className="font-light transition-colors duration-300" style={{ color: theme.colors.textSecondary }} onMouseEnter={(e) => e.currentTarget.style.color = theme.colors.textPrimary} onMouseLeave={(e) => e.currentTarget.style.color = theme.colors.textSecondary}>About Our Drink</a></li>
                <li><a href="#ingredient" className="font-light transition-colors duration-300" style={{ color: theme.colors.textSecondary }} onMouseEnter={(e) => e.currentTarget.style.color = theme.colors.textPrimary} onMouseLeave={(e) => e.currentTarget.style.color = theme.colors.textSecondary}>Ingredients</a></li>
                <li><a href="#gallery" className="font-light transition-colors duration-300" style={{ color: theme.colors.textSecondary }} onMouseEnter={(e) => e.currentTarget.style.color = theme.colors.textPrimary} onMouseLeave={(e) => e.currentTarget.style.color = theme.colors.textSecondary}>Recipe & Making</a></li>
                <li><a href="#member" className="font-light transition-colors duration-300" style={{ color: theme.colors.textSecondary }} onMouseEnter={(e) => e.currentTarget.style.color = theme.colors.textPrimary} onMouseLeave={(e) => e.currentTarget.style.color = theme.colors.textSecondary}>Our Team</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 
                className="text-lg font-semibold"
                style={{ color: theme.colors.textPrimary }}
              >
                Get In Touch
              </h4>
              <div className="space-y-3 font-light" style={{ color: theme.colors.textSecondary }}>
                <p>📧 hello@thaimojito.com</p>
                <p>📞 +66 2-xxx-xxxx</p>
                <p>📍 Bangkok, Thailand</p>
                <div className="pt-4">
                  <button 
                    className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border"
                    style={{
                      backgroundColor: theme.colors.accent + '20',
                      color: theme.colors.accent,
                      borderColor: theme.colors.accent + '50'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = theme.colors.accent + '40';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = theme.colors.accent + '20';
                    }}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div 
            className="mt-12 pt-8 text-center border-t"
            style={{ borderColor: theme.colors.border }}
          >
            <p 
              className="font-light"
              style={{ color: theme.colors.textSecondary }}
            >
              &copy; 2025 Thai Mojito. Crafted with passion in Thailand.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
