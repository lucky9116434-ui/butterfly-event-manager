import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/eventData';
import { Sparkles, Calendar, ArrowRight, Heart, Gift, Building2, PartyPopper, Music } from 'lucide-react';

interface ServicesSectionProps {
  onEnquireService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onEnquireService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services', icon: Sparkles },
    { id: 'wedding', label: 'Wedding & Reception', icon: Heart },
    { id: 'birthday', label: 'Birthdays & Themes', icon: Gift },
    { id: 'decor', label: 'Special Decor', icon: PartyPopper },
    { id: 'corporate', label: 'Corporate Events', icon: Building2 },
    { id: 'entertainment', label: 'DJ & Sound', icon: Music },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Our Event Services
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Comprehensive Event Planning & <span className="text-amber-700">Decoration Services</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            From intimate family gatherings to grand wedding celebrations, we offer complete decor, lighting, and event management solutions across Pimpri-Chinchwad & Pune.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-700 text-white shadow-md scale-105'
                    : 'bg-amber-50/70 text-gray-700 hover:bg-amber-100/80 border border-amber-200/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-amber-600'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden bg-amber-50">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {service.popular && (
                  <span className="absolute top-3 right-3 bg-amber-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm uppercase tracking-wider">
                    Popular
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={() => onEnquireService(service.title)}
                  className="w-full mt-2 bg-amber-50 hover:bg-amber-600 text-amber-900 hover:text-white border border-amber-200 font-semibold text-xs py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Service Callout */}
        <div className="mt-12 bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Have a Custom Theme or Special Decoration Requirement?
            </h3>
            <p className="text-sm text-gray-700 max-w-2xl">
              We create custom setups tailored to your specific budget, color palette, venue dimension, and personal preferences.
            </p>
          </div>
          <button
            onClick={() => onEnquireService('Custom Event Theme Decoration')}
            className="shrink-0 bg-gold-gradient text-white font-bold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            Request Custom Theme Quote
          </button>
        </div>

      </div>
    </section>
  );
};
