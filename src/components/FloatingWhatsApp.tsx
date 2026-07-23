import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';

export const FloatingWhatsApp: React.FC = () => {
  const defaultMsg = encodeURIComponent(
    'Hello Butterfly Event Organizer, I found your website and would like to discuss an upcoming event.'
  );
  const waUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${defaultMsg}`;

  return (
    <aside aria-label="Floating WhatsApp Contact">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Butterfly Event Organizer on WhatsApp"
        className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group cursor-pointer border-2 border-white"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300 whitespace-nowrap">
          WhatsApp Us
        </span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400" />
        </span>
      </a>
    </aside>
  );
};
