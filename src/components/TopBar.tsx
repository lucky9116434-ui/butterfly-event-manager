import React from 'react';
import { Clock, MapPin, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-amber-50 via-amber-100/60 to-rose-50 text-xs py-2 px-4 border-b border-amber-200/40 text-gray-700 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 font-medium text-amber-900">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span className="bg-amber-200/80 text-amber-900 px-1.5 py-0.5 rounded font-semibold text-[10px]">24/7</span>
            {BUSINESS_INFO.hours}
          </span>
          <span className="flex items-center gap-1.5 text-gray-600">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            Serving Pimpri-Chinchwad, Kiwale, Kalewadi & Pune
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 font-semibold text-gray-800 hover:text-amber-700 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            <span>Call: {BUSINESS_INFO.phone}</span>
          </a>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=Hello%20Butterfly%20Event%20Organizer%2C%20I%20would%20like%20to%20enquire%20about%20an%20event.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-medium text-emerald-700 hover:text-emerald-800 transition-colors bg-emerald-100/80 px-2.5 py-0.5 rounded-full"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};
