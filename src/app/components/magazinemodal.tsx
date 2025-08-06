'use client';

import { useState } from 'react';

interface MagazineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MagazineModal({ isOpen, onClose }: MagazineModalProps) {
  const [currentSpread, setCurrentSpread] = useState(1); // Track spread number instead of page
  const [isLoading, setIsLoading] = useState(true);
  const [zoom, setZoom] = useState(100);
  const [isFlipping, setIsFlipping] = useState(false);
  
  // Total pages in the magazine (JPG images)
  const totalPages = 6; // We have p1.jpg, p2.jpg, p3.jpg, p4.jpg, p5.jpg, p6.jpg

  // Magazine image paths
  const getImagePath = (pageNumber: number) => {
    return `/magazine/p${pageNumber}.jpg`;
  };
  
  // Calculate current pages based on spread (3 spreads total)
  // Spread 1: Page 1 (center)
  // Spread 2: Pages 2-3 (left-right)
  // Spread 3: Pages 4-5 (left-right)
  let leftPage = null;
  let rightPage = null;
  
  if (currentSpread === 1) {
    // First spread: only page 1 in center
    leftPage = null;
    rightPage = 1;
  } else if (currentSpread === 2) {
    // Second spread: pages 2-3
    leftPage = 2;
    rightPage = 3;
  } else if (currentSpread === 3) {
    // Third spread: pages 4-5
    leftPage = 4;
    rightPage = 5;
  } else if (currentSpread === 4) {
    // Fourth spread: page 6 on left side
    leftPage = 6;
    rightPage = null;
  }

  if (!isOpen) return null;

  const handlePrevPage = () => {
    if (currentSpread > 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread - 1); // Move to previous spread
        setIsFlipping(false);
      }, 300);
    }
  };

  const handleNextPage = () => {
    const maxSpread = 4; // We have 3 spreads total
    if (currentSpread < maxSpread && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread + 1); // Move to next spread
        setIsFlipping(false);
      }, 300);
    }
  };

  const handleZoomIn = () => {
    if (zoom < 200) {
      setZoom(zoom + 25);
    }
  };

  const handleZoomOut = () => {
    if (zoom > 50) {
      setZoom(zoom - 25);
    }
  };

  const handleFullscreen = () => {
    const modalContent = document.querySelector('.glass.max-w-7xl') as HTMLElement;
    if (modalContent) {
      if (modalContent.requestFullscreen) {
        modalContent.requestFullscreen();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-primary glass max-w-4xl w-full mx-4 max-h-[95vh] rounded-2xl overflow-hidden">
        {/* Header Controls */}
        <div className="flex items-center justify-between p-3 border-b border-divider/20 bg-surface/50 backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg md:text-xl font-bold text-primary flex items-center">
              📖 After Class Magazine
            </h2>
            <div className="text-xs md:text-sm text-secondary">
              {leftPage && rightPage ? `Pages ${leftPage}-${rightPage}` : 
               leftPage ? `Page ${leftPage}` : 
               rightPage ? `Page ${rightPage}` : ''} of {totalPages}
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Zoom Controls */}
            <div className="flex items-center space-x-1 bg-surface/50 rounded-lg p-1">
              <button
                onClick={handleZoomOut}
                disabled={zoom <= 50}
                className="w-8 h-8 rounded-md bg-surface hover:bg-surface-elevated disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-primary transition-all duration-200"
                title="Zoom Out"
              >
                -
              </button>
              <span className="text-xs text-secondary px-2 min-w-[3rem] text-center">
                {zoom}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoom >= 200}
                className="w-8 h-8 rounded-md bg-surface hover:bg-surface-elevated disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-primary transition-all duration-200"
                title="Zoom In"
              >
                +
              </button>
            </div>

            {/* Page Navigation */}
            <div className="flex items-center space-x-1 bg-surface/50 rounded-lg p-1">
              <button
                onClick={handlePrevPage}
                disabled={currentSpread <= 1 || isFlipping}
                className="w-8 h-8 rounded-md bg-surface hover:bg-surface-elevated disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-primary transition-all duration-200"
                title="Previous Pages"
              >
                ←
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentSpread >= 4 || isFlipping}
                className="w-8 h-8 rounded-md bg-surface hover:bg-surface-elevated disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-primary transition-all duration-200"
                title="Next Pages"
              >
                →
              </button>
            </div>

            {/* Fullscreen Button */}
            <button
              onClick={handleFullscreen}
              className="w-8 h-8 rounded-md bg-surface hover:bg-surface-elevated flex items-center justify-center text-primary transition-all duration-200"
              title="Fullscreen"
            >
              ⛶
            </button>

            {/* Open PDF Button */}
            <button
              onClick={() => window.open('/magazine/oncejoyful.pdf', '_blank')}
              className="w-8 h-8 rounded-md bg-surface hover:bg-surface-elevated flex items-center justify-center text-primary transition-all duration-200"
              title="Open PDF"
            >
              📄
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-md bg-surface hover:bg-surface-elevated flex items-center justify-center text-primary hover:text-accent transition-all duration-200"
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Magazine Viewer - Book Layout Mode */}
        <div className="relative h-[calc(100vh-120px)] bg-gray-50 overflow-auto">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-surface/90 backdrop-blur-sm z-10">
              <div className="text-center">
                <div className="animate-spin w-8 h-8 border-3 border-accent border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-secondary">Loading magazine...</p>
              </div>
            </div>
          )}
          
          {/* Book Spread View */}
          <div className="h-full flex items-center justify-center p-2 md:p-4">
            <div 
              className={`transition-all duration-300 ${isFlipping ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}
              style={{ 
                transform: `scale(${zoom / 100})`,
                transformOrigin: 'center center'
              }}
            >
              {/* Book Container - Better proportions for magazine view */}
              <div className="relative bg-white shadow-2xl rounded-lg overflow-hidden w-full max-w-4xl" style={{ aspectRatio: '3/2' }}>
                {/* Center Binding - Hide for first spread */}
                {currentSpread !== 1 && (
                  <>
                    <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 transform -translate-x-1/2 z-10 shadow-inner"></div>
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-600 transform -translate-x-1/2 z-20"></div>
                  </>
                )}
                
                {/* Book Pages Container */}
                <div className="flex h-full">
                  {/* Left Page - Only show when exists and not spread 4 */}
                  {leftPage && (
                    <div className="w-1/2 relative bg-white">
                      <div className="relative w-full h-full">
                        <img
                          src={getImagePath(leftPage)}
                          alt={`Magazine Page ${leftPage}`}
                          className="w-full h-full object-contain border-0"
                          onLoad={() => setIsLoading(false)}
                          onError={() => setIsLoading(false)}
                        />
                        
                        {/* Left Click Area */}
                        <button
                          onClick={handlePrevPage}
                          disabled={currentSpread <= 1 || isFlipping}
                          className="absolute left-0 top-0 w-1/3 h-full bg-transparent hover:bg-blue-500/10 transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed z-20"
                          title="Previous pages"
                        />
                        
                        {/* Page Number */}
                        <div className="absolute bottom-4 right-6 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium z-30">
                          {leftPage}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Right Page - Full width for first spread, half width for others */}
                  {rightPage && rightPage <= totalPages && (
                    <div className={`${leftPage ? 'w-1/2' : 'w-full'} relative bg-white`}>
                      <div className="relative w-full h-full">
                        <img
                          src={getImagePath(rightPage)}
                          alt={`Magazine Page ${rightPage}`}
                          className="w-full h-full object-contain border-0"
                          onLoad={() => setIsLoading(false)}
                          onError={() => setIsLoading(false)}
                        />
                        
                        {/* Right Click Area */}
                        <button
                          onClick={handleNextPage}
                          disabled={currentSpread >= 4 || isFlipping}
                          className="absolute right-0 top-0 w-1/3 h-full bg-transparent hover:bg-blue-500/10 transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed z-20"
                          title="Next pages"
                        />
                        
                        {/* Page Number */}
                        <div className={`absolute bottom-4 ${leftPage ? 'left-6' : 'right-6'} bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium z-30`}>
                          {rightPage}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Book Shadow Effects */}
                <div className="absolute -left-1 top-1 bottom-1 w-1 bg-black/10 rounded-l-lg"></div>
                <div className="absolute -right-1 top-1 bottom-1 w-1 bg-black/10 rounded-r-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="p-3 border-t border-divider/20 bg-surface/50 backdrop-blur-sm">
          <div className="flex items-center justify-between text-sm">
            <div className="text-secondary">
              💡 Click on page edges to turn pages, or use navigation controls
            </div>
            <div className="flex items-center space-x-4 text-secondary">
              <span>📖 Book View</span>
              <span>🔍 Zoom: {zoom}%</span>
              <span>📄 {leftPage && rightPage ? `Pages ${leftPage}-${rightPage}` : 
                         leftPage ? `Page ${leftPage}` : 
                         rightPage ? `Page ${rightPage}` : ''} of {totalPages}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
