import React, { useState } from 'react';
import { BookingFormData } from '../types';
import { BUSINESS_INFO } from '../data/eventData';
import { Sparkles, Send, CheckCircle2, Phone, MessageCircle, AlertCircle } from 'lucide-react';

interface BookingSectionProps {
  prefilledCategory?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ prefilledCategory }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    whatsapp: '',
    email: '',
    eventType: prefilledCategory || 'Wedding',
    eventDate: '',
    eventLocation: '',
    expectedGuests: '',
    preferredTheme: '',
    budgetRange: 'Discuss on Call',
    requiredServices: ['Stage Decoration', 'Flower & Balloon Decor'],
    message: '',
    referenceLink: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const eventTypeOptions = [
    'Wedding',
    'Engagement',
    'Reception',
    'Birthday',
    'Baby Shower',
    'Corporate Event',
    'Anniversary',
    'Surprise Decoration',
    'Religious Event',
    'Other'
  ];

  const budgetOptions = [
    'Under ₹10,000',
    '₹10,000–₹25,000',
    '₹25,000–₹50,000',
    '₹50,000–₹1,00,000',
    'Above ₹1,00,000',
    'Discuss on Call'
  ];

  const availableServices = [
    'Stage Decoration',
    'Flower & Balloon Decor',
    'Entrance Arch & Canopy',
    'Lighting & DJ Sound',
    'Mandap Setup',
    'Catering Coordination',
    'Photography & Video',
    'Complete Event Management'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => {
      const exists = prev.requiredServices.includes(service);
      if (exists) {
        return { ...prev, requiredServices: prev.requiredServices.filter(s => s !== service) };
      } else {
        return { ...prev, requiredServices: [...prev.requiredServices, service] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);

    // Format WhatsApp pre-filled message
    const waText = `Hello Butterfly Event Organizer,%0A%0AI would like to enquire about an event.%0A%0A*Name:* ${encodeURIComponent(formData.fullName)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*WhatsApp:* ${encodeURIComponent(formData.whatsapp || formData.phone)}%0A*Event Type:* ${encodeURIComponent(formData.eventType)}%0A*Event Date:* ${encodeURIComponent(formData.eventDate || 'To be decided')}%0A*Location:* ${encodeURIComponent(formData.eventLocation || 'Pimpri-Chinchwad / Pune')}%0A*Expected Guests:* ${encodeURIComponent(formData.expectedGuests || 'N/A')}%0A*Budget Range:* ${encodeURIComponent(formData.budgetRange)}%0A*Selected Services:* ${encodeURIComponent(formData.requiredServices.join(', '))}%0A*Preferred Theme:* ${encodeURIComponent(formData.preferredTheme || 'Custom')}%0A*Message:* ${encodeURIComponent(formData.message || 'Please share packages')}%0A%0APlease share available decoration options and quotation.`;

    // Open WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${waText}`, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Details & Direct Call Actions */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Get In Touch
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Plan Your Next Event with <span className="text-amber-700">Butterfly Event Organizer</span>
            </h2>

            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Share your event details with us today. Whether you need a simple balloon decoration or a turnkey wedding management plan, we respond instantly with tailored ideas and quotes.
            </p>

            {/* Direct Contact Info Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-md space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Phone Number</div>
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-base font-bold text-gray-900 hover:text-amber-700">
                    {BUSINESS_INFO.phone}
                  </a>
                  <div className="text-xs text-emerald-700 font-medium">Available 24 Hours / 7 Days</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">WhatsApp Number</div>
                  <a href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-gray-900 hover:text-emerald-700">
                    {BUSINESS_INFO.whatsapp}
                  </a>
                  <div className="text-xs text-emerald-700 font-medium">Instant Quote Response</div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Office Address</div>
                <div className="text-sm font-medium text-gray-800 leading-snug">
                  {BUSINESS_INFO.address}
                </div>
              </div>
            </div>

            {/* Quick Action Links */}
            <div className="flex gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex-1 bg-amber-700 hover:bg-amber-800 text-white text-center font-bold py-3.5 rounded-2xl shadow-md text-sm transition-all"
              >
                Call Now
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=Hello%20Butterfly%20Event%20Organizer%2C%20I%20want%20to%20discuss%20an%20event.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-center font-bold py-3.5 rounded-2xl shadow-md text-sm transition-all"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Right Column - Premium Netlify & WhatsApp Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-200 shadow-xl">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-1">
                  Event Enquiry & Quotation Form
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Fill out the details below. We will generate your quotation and redirect you directly to WhatsApp for instant confirmation.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-display text-xl font-bold text-gray-900 mb-2">
                    Enquiry Submitted Successfully!
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Thank you, {formData.fullName}. We are opening WhatsApp to send your complete enquiry summary directly to Butterfly Event Organizer.
                  </p>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-6 py-3 rounded-full shadow-md text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Open WhatsApp Chat Directly
                  </a>
                </div>
              ) : (
                <form
                  name="event-enquiry"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="event-enquiry" />

                  {errorMsg && (
                    <div className="flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-700 p-3 rounded-xl text-xs font-semibold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Sharma"
                        required
                        className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 9898989898"
                        required
                        className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="Same as phone or WhatsApp"
                        className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. name@example.com"
                        className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                        Event Category
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        {eventTypeOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                        Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                        Event Location / Hall
                      </label>
                      <input
                        type="text"
                        name="eventLocation"
                        value={formData.eventLocation}
                        onChange={handleInputChange}
                        placeholder="e.g. Kiwale, Wakad, Home, Hall name"
                        className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                        Expected Guests
                      </label>
                      <input
                        type="text"
                        name="expectedGuests"
                        value={formData.expectedGuests}
                        onChange={handleInputChange}
                        placeholder="e.g. 50-100 guests"
                        className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                        Budget Range
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleInputChange}
                        className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        {budgetOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                        Preferred Theme
                      </label>
                      <input
                        type="text"
                        name="preferredTheme"
                        value={formData.preferredTheme}
                        onChange={handleInputChange}
                        placeholder="e.g. Pastel Pink, Royal Gold, Frozen"
                        className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                      Required Services (Select Multiple)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {availableServices.map((service) => {
                        const isSelected = formData.requiredServices.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => handleServiceToggle(service)}
                            className={`p-2 rounded-xl text-xs font-medium border text-left transition-all ${
                              isSelected
                                ? 'bg-amber-600 text-white border-amber-600'
                                : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-amber-50'
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                      Additional Details or Reference Link
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Mention any specific requests or paste a Pinterest/Instagram photo link..."
                      className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-gradient text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl hover:brightness-105 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry & Send on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
