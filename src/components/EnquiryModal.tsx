import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledTitle?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, prefilledTitle }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState(prefilledTitle || 'Wedding');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('Discuss on Call');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefilledTitle) {
      setEventType(prefilledTitle);
    }
  }, [prefilledTitle]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number');
      return;
    }

    const waText = `Hello Butterfly Event Organizer,%0A%0AI would like to enquire about an event.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Event Details / Service:* ${encodeURIComponent(eventType)}%0A*Event Date:* ${encodeURIComponent(eventDate || 'To be decided')}%0A*Location:* ${encodeURIComponent(location || 'Pimpri-Chinchwad / Pune')}%0A*Budget:* ${encodeURIComponent(budget)}%0A*Message:* ${encodeURIComponent(message || 'Please share quotation')}%0A%0APlease share available decoration options and quotation.`;

    onClose();
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${waText}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-amber-200 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-amber-600" />
          Quick Event Quote
        </div>

        <h3 className="font-display text-2xl font-bold text-gray-900 mb-1">
          Book Your Celebration
        </h3>
        <p className="text-xs text-gray-600 mb-6">
          {prefilledTitle ? `Enquiring for: ${prefilledTitle}` : 'Share your event details for instant WhatsApp quotation'}
        </p>

        {errorMsg && (
          <div className="flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-700 p-2.5 rounded-xl text-xs font-semibold mb-4">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
              Your Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Anjali Patil"
              required
              className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-3.5 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 9898989898"
              required
              className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-3.5 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                Event Type
              </label>
              <input
                type="text"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                placeholder="e.g. Wedding, Birthday"
                className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                Event Date
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
              Location / Area
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Kiwale, Wakad, Dehu Road, Pimpri"
              className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-3.5 py-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
              Special Message or Theme Idea
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={2}
              placeholder="Any specific requests or requirements..."
              className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-3.5 py-2 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gold-gradient text-white font-bold py-3.5 rounded-xl shadow-md hover:brightness-105 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <Send className="w-4 h-4" />
            <span>Send Quote Request on WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
