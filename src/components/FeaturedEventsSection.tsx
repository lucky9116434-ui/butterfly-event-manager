import React from 'react';
import { Sparkles, Heart, Gift, Building2, Baby, Cake, Music, ArrowRight, CheckCircle } from 'lucide-react';

interface FeaturedEventsSectionProps {
  onEnquireCategory: (categoryName: string) => void;
}

export const FeaturedEventsSection: React.FC<FeaturedEventsSectionProps> = ({ onEnquireCategory }) => {
  const featuredCategories = [
    {
      id: 'dream-weddings',
      title: 'Dream Weddings & Mandap Setups',
      subtitle: 'Royal Mandaps, Fairytale Lighting & Unforgettable Receptions',
      description: 'Your wedding is a once-in-a-lifetime affair. Butterfly Event Organizer brings grandeur and romance to every ritual—from intimate Haldi & Mehndi ceremonies in Kiwale to magnificent wedding mandaps and royal receptions across Pune.',
      image: '/images/wedding-mandap.jpg',
      points: [
        'Custom Mandap and Stage Floral Backdrops',
        'Traditional & Modern Haldi / Mehndi Themes',
        'Grand Entrance Gate Fabric Canopy & Lights',
        'Complete Venue Lighting & DJ Sound Coordination'
      ],
      ctaText: 'View Wedding Work & Get Quote',
      badge: 'Weddings & Receptions',
      icon: Heart,
      reverse: false
    },
    {
      id: 'birthday-celebrations',
      title: 'Magical Birthday Celebrations',
      subtitle: 'Theme Decor, Character Cutouts, Balloon Arches & Marquee Lights',
      description: 'Make your little one or loved one feel extra special with our bespoke birthday theme decorations. We specialize in Superhero Avengers, Disney Princesses, Cocomelon, Jungle Safari, and elegant adult milestone birthdays.',
      image: '/images/service-birthday.jpg',
      points: [
        'Illuminated LED Marquee Age Numbers & Initial Letters',
        'Pastel & Chromium Organic Balloon Garland Arches',
        'Cake Pedestal Tables & Shimmer Photo Backdrops',
        'Customized Kids Theme Cutouts & Props'
      ],
      ctaText: 'Explore Birthday Themes',
      badge: 'Birthday Parties',
      icon: Gift,
      reverse: true
    },
    {
      id: 'baby-showers',
      title: 'Baby Shower & Dohale Jevan (Barse)',
      subtitle: 'Traditional Jhula Swings, Floral Frames & Warm Family Setups',
      description: 'Celebrate the arrival of new life with warmth, traditions, and delicate floral aesthetics. Our Krishna swing Jhula setups, barse cradle decorations, and pastel balloon rings create memorable photo settings for family blessings.',
      image: '/images/gallery-2.jpg',
      points: [
        'Decorated Wooden Swing (Jhula) for Mom-to-Be',
        'Sacred Little Krishna & Floral Backdrops',
        'Name Reveal Barse Stage & Cradle Flowers',
        'Soft Pastel Lighting & Balloon Ring Decor'
      ],
      ctaText: 'Plan a Baby Shower',
      badge: 'Baby Showers',
      icon: Baby,
      reverse: false
    },
    {
      id: 'corporate-events',
      title: 'Corporate Galas & Office Events',
      subtitle: 'Professional Stage Setups, Audio-Visuals & Annual Functions',
      description: 'Elevate your brand image with crisp, modern corporate event planning. From product launch stages and annual employee appreciation galas to festive Diwali & New Year office decorations in Hinjawadi & PCMC.',
      image: '/images/service-corporate.jpg',
      points: [
        'Branded Product Launch Stages & Press Walls',
        'High-Fidelity Audio Line-Arrays & Truss Lighting',
        'Office Festive Decor (Diwali, Christmas, New Year)',
        'Professional Anchors & Entertainment Artists'
      ],
      ctaText: 'Plan a Corporate Event',
      badge: 'Corporate Events',
      icon: Building2,
      reverse: true
    }
  ];

  return (
    <section id="events" className="py-16 lg:py-24 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Featured Event Categories
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Specialized Decoration for <span className="text-amber-700">Every Milestone</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Explore our signature event setups designed with creativity, attention to detail, and flawless execution.
          </p>
        </div>

        {/* Category Feature Blocks */}
        <div className="space-y-16 lg:space-y-24">
          {featuredCategories.map((item) => {
            const CategoryIcon = item.icon;
            return (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  item.reverse ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Side */}
                <div className={`lg:col-span-6 ${item.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-900 flex items-center gap-1.5 shadow-sm">
                      <CategoryIcon className="w-4 h-4 text-amber-600" />
                      <span>{item.badge}</span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-6 ${item.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
                    {item.subtitle}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {item.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-800 font-medium">{point}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onEnquireCategory(item.title)}
                    className="bg-gold-gradient text-white font-bold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
