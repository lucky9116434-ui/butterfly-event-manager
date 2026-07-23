import React from 'react';
import { Star, Clock, MapPin, Sparkles, CheckCircle2, HeartHandshake, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';

export const AboutSection: React.FC = () => {
  const highlights = [
    'Creative event concepts & customized themes',
    'Personalized decoration tailored to your budget',
    'Experienced coordination & punctual event execution',
    'Affordable & luxury decoration packages',
    'On-time venue setup with attention to details',
    'Friendly, dedicated & professional team',
    'Complete event management under one roof',
    'Service across Pimpri-Chinchwad, Kiwale & Pune'
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column - Real Event Image Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="/images/gallery-7.jpg"
                alt="Butterfly Event Organizer Welcome Setup"
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-amber-100 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg">
                    ★
                  </div>
                  <div>
                    <div className="font-display font-bold text-gray-900 text-sm">Pimpri-Chinchwad's Premier Decorator</div>
                    <div className="text-xs text-amber-700 font-medium">5.0 Star Rated on Google • 34 Reviews</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Secondary Image */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/images/gallery-9.jpg"
                alt="Traditional Flower Decor"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              About Butterfly Event Organizer
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Crafting Extraordinary Moments for <span className="text-amber-700">Every Occasion</span>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Butterfly Event Organizer is a trusted event planning and decoration company serving Pimpri-Chinchwad and surrounding areas. We specialize in creating thoughtful, stylish and memorable celebrations designed around each client’s vision, budget and occasion.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              Whether you are planning an opulent wedding in Kiwale, a colorful birthday theme in Wakad, or a sacred home ceremony in Kalewadi, our team brings passion, precision, and artistry to make your special day effortless and magical.
            </p>

            {/* Highlight Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Key Stat Counters Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-amber-200/50">
              <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200/60 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-800 font-display">5.0 ★</div>
                <div className="text-xs text-gray-600 font-medium mt-1">Google Rating</div>
              </div>
              <div className="bg-rose-50/80 p-4 rounded-2xl border border-rose-200/60 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-rose-800 font-display">34+</div>
                <div className="text-xs text-gray-600 font-medium mt-1">Happy Reviews</div>
              </div>
              <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200/60 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-800 font-display">24/7</div>
                <div className="text-xs text-gray-600 font-medium mt-1">Open & Available</div>
              </div>
              <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200/60 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-800 font-display">100%</div>
                <div className="text-xs text-gray-600 font-medium mt-1">PCMC Coverage</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
