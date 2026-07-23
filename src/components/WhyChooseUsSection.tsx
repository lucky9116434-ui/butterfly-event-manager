import React from 'react';
import { Sparkles, Clock, ShieldCheck, HeartHandshake, Lightbulb, Wallet, Users, Award, MapPin, Eye, ThumbsUp, Check } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      title: 'Personalized Themes',
      desc: 'Customized backdrops, color palettes, and props tailored specifically to your story.',
      icon: Lightbulb
    },
    {
      title: 'Transparent Planning',
      desc: 'No hidden charges. Clear itemized quotations provided before setup begins.',
      icon: Wallet
    },
    {
      title: 'Professional Coordination',
      desc: 'Experienced crew handling lighting, flowers, balloon arches & venue logistics.',
      icon: Users
    },
    {
      title: 'Creative Decor Concepts',
      desc: 'Trendy 3D sequin walls, neon signs, organic balloon rings & floral arches.',
      icon: Sparkles
    },
    {
      title: 'On-Time Event Setup',
      desc: 'We complete setup hours before guests arrive so you can inspect hassle-free.',
      icon: Clock
    },
    {
      title: 'Flexible Packages',
      desc: 'From intimate home setups to royal hall galas, we fit every budget range.',
      icon: ShieldCheck
    },
    {
      title: '24-Hour Availability',
      desc: 'Open round-the-clock for bookings, inquiries, and emergency event setups.',
      icon: Clock
    },
    {
      title: 'Local Service Expertise',
      desc: 'Deep venue knowledge in Kiwale, Kalewadi, Wakad, Dehu Road & PCMC.',
      icon: MapPin
    },
    {
      title: 'One Point of Contact',
      desc: 'Dedicated manager handling all vendors, audio, decor & guest coordination.',
      icon: HeartHandshake
    },
    {
      title: 'Meticulous Detail',
      desc: 'Flawless flower alignment, neat wiring, and spotless venue presentation.',
      icon: Eye
    },
    {
      title: '5.0 Star Rated Team',
      desc: 'Consistently top rated by 34+ happy families across Pimpri-Chinchwad.',
      icon: Award
    },
    {
      title: 'Friendly Support',
      desc: 'Polite, punctual & accommodating staff listening to all your requests.',
      icon: ThumbsUp
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-amber-50/30 via-white to-amber-50/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Why Choose Butterfly Event Organizer
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            The Preferred Event Decorator in <span className="text-amber-700">Pimpri-Chinchwad</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            We combine artistic design with flawless coordination to ensure your special day is stress-free and memorable.
          </p>
        </div>

        {/* 12 Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-amber-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-gray-900 text-base mb-1.5 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
