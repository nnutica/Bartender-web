'use client';

import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { menuItems, MenuItem } from '../data/menu';
import MenuCard from './MenuCard';
import MenuModal from './MenuModal';

export default function Menu() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<'cocktail' | 'mocktail'>('cocktail');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  
  const handleDetailClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
  
  return (
    <section id="menu" className="py-24 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-light text-primary mb-6">
            Our <span className="font-bold text-accent">Menu</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto font-light">
            Discover our carefully crafted drinks made with authentic ingredients
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-16">
          <div className="glass p-2 rounded-full">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveCategory('cocktail')}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === 'cocktail'
                    ? 'bg-accent text-white shadow-lg'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                🍹 Cocktails
              </button>
              <button
                onClick={() => setActiveCategory('mocktail')}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === 'mocktail'
                    ? 'bg-accent text-white shadow-lg'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                🥤 Mocktails
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} onDetailClick={handleDetailClick} />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍹</div>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              No items in this category yet
            </h3>
            <p className="text-secondary">
              Check back soon for new additions to our menu!
            </p>
          </div>
        )}
      </div>

      {/* Menu Modal */}
      <MenuModal 
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
