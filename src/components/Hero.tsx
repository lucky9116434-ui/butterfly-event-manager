import React from 'react';
import { Sparkles, Phone, MessageCircle, Star, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-white text-gray-900"
    >
      {/* Background Image Container with Soft Light Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-main.jpg"
          alt="Butterfly Event Organizer - Venue Decor"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Soft Whitish and Light Champagne Overlay - NOT DARK */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-amber-50/60 sm:to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="max-w-3xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-50/90 border border-amber-300/80 rounded-full px-4 py-1.5 mb-6 shadow-sm backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-600 fill-amber-200 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-amber-900 tracking-wide uppercase">
              Premium Event Planning in Pimpri-Chinchwad
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6">
            Turning Celebrations Into <span className="text-amber-700 underline decoration-amber-300/60 underline-offset-8">Beautiful Memories</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-gray-700 leading-relaxed font-normal mb-8 max-w-2xl">
            {BUSINESS_INFO.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={onOpenEnquiry}
              className="bg-gold-gradient text-white font-bold text-base px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Plan Your Event</span>
            </button>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=Hello%20Butterfly%20Event%20Organizer%2C%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20an%20upcoming%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-amber-300 font-semibold text-base px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Google Rating & Trust Badge */}
          <div className="pt-6 border-t border-amber-200/60 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-amber-100">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900 flex items-center gap-1">
                  <span>5.0 Stars</span>
                  <span className="text-xs font-normal text-gray-500">(34 Reviews)</span>
                </div>
                <div className="text-xs text-amber-800 font-semibold">Google Verified Rating</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-amber-50/80 px-3.5 py-2.5 rounded-xl border border-amber-200/60">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Open 24 Hours • Kiwale & Pimpri-Chinchwad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
