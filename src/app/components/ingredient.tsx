'use client';

import { useTheme } from '../contexts/ThemeContext';

export default function Ingredient() {
  const { theme } = useTheme();
  const ingredients = [
    {
      name: "Thai White Spirit",
      description: "Authentic Thai spirit distilled from jasmine rice with a smooth, mellow flavor",
      icon: "🏺"
    },
    {
      name: "Saeng Spirit",
      description: "Premium Thai spirit with intense flavor and aromatic sweetness",
      icon: "🥃"
    },
    {
      name: "Fresh Lime",
      description: "Fresh limes from Thai orchards providing zesty, refreshing acidity",
      icon: "🍋"
    },
    {
      name: "Lemongrass",
      description: "Fresh lemongrass providing fragrant aroma and refreshing taste",
      icon: "🌿"
    },
    {
      name: "Kaffir Lime Leaves",
      description: "Fresh kaffir lime leaves offering unique Thai aromatic essence",
      icon: "🍃"
    },
    {
      name: "Fresh Ginger",
      description: "Fresh ginger providing warm spice and enhancing flavor balance",
      icon: "🫚"
    },
    {
      name: "Palm Sugar",
      description: "High-quality palm sugar providing natural sweetness",
      icon: "🍯"
    },
    {
      name: "Black Pepper",
      description: "Large black peppercorns providing fragrant spice",
      icon: "🌶️"
    },
    {
      name: "Fresh Mango",
      description: "Ripe mangoes providing sweetness and silky texture",
      icon: "🥭"
    },
    {
      name: "Coconut Milk",
      description: "Rich coconut milk from fresh coconuts providing creamy texture",
      icon: "🥥"
    },
    {
      name: "Filtered Water",
      description: "Premium filtered water for mixing cocktails",
      icon: "💧"
    },
    {
      name: "Premium Ice",
      description: "Clean ice to keep cocktails refreshingly cold",
      icon: "🧊"
    }
  ];

  return (
    <section 
      id="ingredient" 
      className="py-24 relative"
      style={{ backgroundColor: theme.colors.primary }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 right-20 w-60 h-60 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: theme.colors.tertiary }}
        ></div>
        <div 
          className="absolute bottom-20 left-20 w-60 h-60 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: theme.colors.tertiary }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 
            className="text-5xl sm:text-6xl font-light mb-6"
            style={{ color: theme.colors.textPrimary }}
          >
            Premium <span className="font-bold" style={{ color: theme.colors.accent }}>Ingredients</span>
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto font-light"
            style={{ color: theme.colors.textSecondary }}
          >
            We carefully select the finest ingredients to create unique flavor profiles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ingredients.map((ingredient, index) => (
            <div 
              key={index}
              className="glass p-6 hover:scale-105 transition-all duration-300 group"
              style={{ backgroundColor: theme.colors.surface }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {ingredient.icon}
                </div>
                <h3 
                  className="text-lg font-semibold mb-3"
                  style={{ color: theme.colors.textPrimary }}
                >
                  {ingredient.name}
                </h3>
                <p 
                  className="text-sm leading-relaxed font-light"
                  style={{ color: theme.colors.textSecondary }}
                >
                  {ingredient.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div 
            className="glass p-12 max-w-4xl mx-auto"
            style={{ backgroundColor: theme.colors.surface }}
          >
            <h3 
              className="text-3xl font-bold mb-6"
              style={{ color: theme.colors.textPrimary }}
            >
              Our Commitment
            </h3>
            <p 
              className="leading-relaxed text-lg font-light"
              style={{ color: theme.colors.textSecondary }}
            >
              We use only the freshest and highest quality ingredients in every cocktail we create. 
              Whether it's authentic Thai spirits, fresh fruits, local herbs, or premium spices, 
              every component is carefully selected to deliver the best possible taste experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}