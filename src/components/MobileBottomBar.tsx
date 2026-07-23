import React from 'react';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';

interface MobileBottomBarProps {
  onOpenEnquiry: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenEnquiry }) => {
  const defaultMsg = encodeURIComponent(
    'Hello Butterfly Event Organizer, I would like to get a quote for an event.'
  );
  const waUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${defaultMsg}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-200 px-3 py-2 sm:hidden shadow-2xl flex items-center justify-around gap-2">
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="flex-1 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
      >
        <Phone className="w-4 h-4 text-amber-700" />
        <span>Call</span>
      </a>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenEnquiry}
        className="flex-1 bg-gold-gradient text-white py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
      >
        <CalendarCheck className="w-4 h-4" />
        <span>Get Quote</span>
      </button>
    </div>
  );
};
