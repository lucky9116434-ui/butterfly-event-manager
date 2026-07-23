import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../data/eventData';
import { GalleryItem } from '../types';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, MapPin, ZoomIn } from 'lucide-react';

interface GallerySectionProps {
  onEnquireImage: (title: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onEnquireImage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Wedding',
    'Birthday',
    'Baby Shower',
    'Stage',
    'Balloon',
    'Flower',
    'Theme Decor',
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory || (selectedCategory === 'Corporate' && item.category === 'Flower'));

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev! + 1) % filteredItems.length);
    }
  }, [activeImageIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [activeImageIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, nextImage, prevImage]);

  const activeItem: GalleryItem | null = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Our Real Event Gallery
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Explore Our Recent <span className="text-amber-700">Decorations & Setups</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Browse through real photos of weddings, birthday themes, baby showers, and stage setups executed by Butterfly Event Organizer.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-700 text-white shadow-md'
                  : 'bg-amber-50/80 text-gray-700 hover:bg-amber-100 border border-amber-200/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-amber-50 rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-72"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest mb-1">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg leading-snug mb-2">
                  {item.title}
                </h3>
                {item.location && (
                  <div className="flex items-center gap-1.5 text-xs text-gray-300 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{item.location}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-200">
                  <ZoomIn className="w-4 h-4" />
                  <span>Click to Expand Lightbox</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
            onClick={closeLightbox}
          >
            {/* Modal Container */}
            <div
              className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-gray-900 p-2.5 rounded-full shadow-lg transition-transform hover:scale-110 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev / Next Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-transform hover:scale-110 cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-transform hover:scale-110 cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image View */}
              <div className="lg:w-2/3 bg-black flex items-center justify-center relative min-h-[300px] lg:min-h-[500px]">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content Sidebar */}
              <div className="lg:w-1/3 p-6 sm:p-8 flex flex-col justify-between bg-white text-gray-900">
                <div>
                  <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                    {activeItem.category}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
                    {activeItem.title}
                  </h3>
                  {activeItem.location && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 text-rose-500" />
                      <span>{activeItem.location}</span>
                    </div>
                  )}
                  <p className="text-sm text-gray-700 leading-relaxed mb-6">
                    {activeItem.description || 'Custom event decoration designed and executed by Butterfly Event Organizer in Pimpri-Chinchwad.'}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 space-y-3">
                  <button
                    onClick={() => {
                      closeLightbox();
                      onEnquireImage(`Setup inspired by: ${activeItem.title}`);
                    }}
                    className="w-full bg-gold-gradient text-white font-bold py-3 rounded-xl shadow-md hover:brightness-105 transition-all text-center text-sm"
                  >
                    Enquire For Similar Setup
                  </button>
                  <div className="text-center text-xs text-gray-500">
                    Image {activeImageIndex! + 1} of {filteredItems.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
