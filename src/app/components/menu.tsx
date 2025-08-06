'use client';

import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { menuItems, MenuItem } from '../data/menu';
import MenuCard from './MenuCard';

import MagazineModal from './magazinemodal';

export default function Menu() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<'cocktail' | 'mocktail'>('cocktail');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMagazineOpen, setIsMagazineOpen] = useState(false);
  
  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  
  const handleDetailClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleMagazineClick = () => {
    setIsMagazineOpen(true);
  };

  const handleCloseMagazine = () => {
    setIsMagazineOpen(false);
  };
  
  return (
    <section id="menu" className="min-h-screen py-8 md:py-16 bg-secondary relative flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-5xl font-light text-primary mb-4 md:mb-6">
            Our <span className="font-bold text-accent">Menu</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto font-light">
            Discover our carefully crafted drinks made with authentic ingredients
          </p>
        </div>

        

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <MenuCard 
              key={item.id} 
              item={item} 
              onDetailClick={handleDetailClick}
              onMagazineClick={handleMagazineClick}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-8 md:py-12">
            <div className="text-4xl md:text-6xl mb-4">🍹</div>
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2">
              No items in this category yet
            </h3>
            <p className="text-secondary">
              Check back soon for new additions to our menu!
            </p>
          </div>
        )}
      </div>

      {/* Menu Modal */}
      

      {/* Magazine Modal */}
      <MagazineModal 
        isOpen={isMagazineOpen}
        onClose={handleCloseMagazine}
      />
    </section>
  );
}
