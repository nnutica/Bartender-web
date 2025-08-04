'use client';

import { MenuItem } from '../data/menu';

interface MenuModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuModal({ item, isOpen, onClose }: MenuModalProps) {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-primary glass max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto rounded-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-surface/80 hover:bg-surface rounded-full flex items-center justify-center text-primary hover:text-accent transition-all duration-300"
        >
          ✕
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Image */}
              <div className="lg:w-1/2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/logo.png';
                  }}
                />
              </div>
              
              {/* Basic Info */}
              <div className="lg:w-1/2 space-y-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-3xl lg:text-4xl font-bold text-primary">{item.name}</h2>
                  <span className="text-2xl font-bold text-accent">${item.price}</span>
                </div>
                
                <p className="text-lg text-secondary leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center space-x-2 text-sm">
                  <span className={`px-3 py-1 rounded-full ${
                    item.category === 'cocktail' 
                      ? 'bg-accent/20 text-accent' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {item.category === 'cocktail' ? '🍹 Cocktail' : '🥤 Mocktail'}
                  </span>
                </div>

                {/* Glass Type */}
                {item.recipe?.glassType && (
                  <div className="glass p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">🥃 เสิร์ฟในแก้ว</h4>
                    <p className="text-secondary">{item.recipe.glassType}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Recipe Details */}
          {item.recipe && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Ingredients */}
              <div className="glass p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  🧪 ส่วนผสมและอัตราส่วน
                </h3>
                <div className="space-y-3">
                  {item.recipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-divider/20 last:border-b-0">
                      <span className="text-primary font-medium">{ingredient.name}</span>
                      <span className="text-accent font-semibold">{ingredient.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div className="glass p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  📋 วิธีทำ
                </h3>
                <div className="space-y-4">
                  {item.recipe.instructions.map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <p className="text-secondary leading-relaxed">{instruction}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-4 rounded-xl text-lg font-medium hover:shadow-xl transition-all duration-300">
              🛒 สั่งเลย
            </button>
            <button 
              onClick={onClose}
              className="btn-secondary glass px-8 py-4 rounded-xl text-lg font-medium hover:bg-surface/20 transition-all duration-300"
            >
              ปิด
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
