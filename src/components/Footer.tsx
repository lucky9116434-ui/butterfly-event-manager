import React from 'react';
import { BUSINESS_INFO } from '../data/eventData';
import { Sparkles, Phone, MessageCircle, MapPin, Clock, Instagram, Facebook, Youtube, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-amber-50/50 via-white to-amber-100/40 border-t border-amber-200 text-gray-700 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-gold-gradient p-0.5 shadow-sm flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-amber-600 fill-amber-100" />
                </div>
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight text-gray-900 block">
                  Butterfly Event Organizer
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-700 block">
                  Pimpri-Chinchwad & Pune
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md font-normal">
              Transforming celebrations into beautiful memories. Premium wedding decoration, birthday party planning, baby shower Jhula setups, and corporate event management in Kiwale, Dehu Road, Kalewadi, and Pimpri-Chinchwad.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-amber-900">
              <span className="bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                5.0 ★ Google Rating (34 Reviews)
              </span>
              <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full border border-emerald-200">
                Open 24 Hours
              </span>
            </div>

            {/* Editable Social Media Links */}
            <div className="pt-2">
              <div className="text-xs text-gray-500 font-semibold mb-2">Connect With Us</div>
              <div className="flex items-center gap-3">
                {/* Real Instagram social profile placeholder */}
                <a
                  href="#" /* ADD REAL INSTAGRAM LINK HERE */
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full bg-white border border-amber-200 text-pink-600 flex items-center justify-center hover:bg-pink-50 transition-colors shadow-2xs"
                  title="Instagram Page"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* Real Facebook social profile placeholder */}
                <a
                  href="#" /* ADD REAL FACEBOOK LINK HERE */
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full bg-white border border-amber-200 text-blue-600 flex items-center justify-center hover:bg-blue-50 transition-colors shadow-2xs"
                  title="Facebook Page"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                {/* Real YouTube social profile placeholder */}
                <a
                  href="#" /* ADD REAL YOUTUBE LINK HERE */
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full bg-white border border-amber-200 text-red-600 flex items-center justify-center hover:bg-red-50 transition-colors shadow-2xs"
                  title="YouTube Channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-gray-900 text-base mb-4 border-b border-amber-200/60 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li><a href="#home" className="hover:text-amber-700 transition-colors">Home Page</a></li>
              <li><a href="#about" className="hover:text-amber-700 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-amber-700 transition-colors">Our Services</a></li>
              <li><a href="#events" className="hover:text-amber-700 transition-colors">Featured Events</a></li>
              <li><a href="#gallery" className="hover:text-amber-700 transition-colors">Photo Gallery</a></li>
              <li><a href="#packages" className="hover:text-amber-700 transition-colors">Event Packages</a></li>
              <li><a href="#reviews" className="hover:text-amber-700 transition-colors">Google Reviews</a></li>
              <li><a href="#faq" className="hover:text-amber-700 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services Offered */}
          <div>
            <h4 className="font-display font-bold text-gray-900 text-base mb-4 border-b border-amber-200/60 pb-2">
              Popular Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li><a href="#services" className="hover:text-amber-700 transition-colors">Wedding Mandap Decor</a></li>
              <li><a href="#services" className="hover:text-amber-700 transition-colors">Haldi & Mehndi Setup</a></li>
              <li><a href="#services" className="hover:text-amber-700 transition-colors">Kids Theme Birthday</a></li>
              <li><a href="#services" className="hover:text-amber-700 transition-colors">Baby Shower Jhula</a></li>
              <li><a href="#services" className="hover:text-amber-700 transition-colors">25th Anniversary Stage</a></li>
              <li><a href="#services" className="hover:text-amber-700 transition-colors">Balloon Arch & Ring Decor</a></li>
              <li><a href="#services" className="hover:text-amber-700 transition-colors">Housewarming Vastu Decor</a></li>
              <li><a href="#services" className="hover:text-amber-700 transition-colors">Corporate Launch Events</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="font-display font-bold text-gray-900 text-base mb-4 border-b border-amber-200/60 pb-2">
              Contact Details
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-snug">{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-gray-900 hover:text-amber-700">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-800 hover:underline">
                  {BUSINESS_INFO.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2 text-amber-900 font-medium pt-1">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Open 24 Hours / 7 Days</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div>
            © 2026 Butterfly Event Organizer. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            Website designed for <span className="font-bold text-gray-800">Butterfly Event Organizer</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
