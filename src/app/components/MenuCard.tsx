'use client';

import { MenuItem } from '../data/menu';

interface MenuCardProps {
  item: MenuItem;
  onDetailClick: (item: MenuItem) => void;
}

export default function MenuCard({ item, onDetailClick }: MenuCardProps) {
  return (
    <div className="glass p-6 hover:scale-105 transition-all duration-300">
      <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-lg">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/logo.png'; // Fallback image
          }}
        />
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-primary">{item.name}</h3>
          <span className="text-lg font-bold text-accent">${item.price}</span>
        </div>
        
        <p className="text-secondary font-light leading-relaxed">
          {item.description}
        </p>
        
        <div className="pt-4">
          <button 
            onClick={() => onDetailClick(item)}
            className="w-full btn-primary py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}
