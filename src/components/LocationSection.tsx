import React from 'react';
import { BUSINESS_INFO } from '../data/eventData';
import { MapPin, Navigation, Phone, MessageCircle, Clock, Sparkles, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS_INFO.address)}`;

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Our Office & Service Area
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Conveniently Located in <span className="text-amber-700">Pimpri-Chinchwad</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Based in Kiwale near Dehu Road, serving all major residential and commercial hubs across PCMC & Pune.
          </p>
        </div>

        {/* Map Card Grid */}
        <div className="bg-gradient-to-r from-amber-50/60 via-white to-amber-50/60 rounded-3xl border border-amber-200 p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Address Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-1">
                  Full Business Address
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  {BUSINESS_INFO.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-1">
                  Working Hours
                </h3>
                <p className="text-sm text-gray-700 font-medium">
                  Open 24 Hours • 7 Days a Week
                </p>
                <p className="text-xs text-amber-800">
                  Call or WhatsApp anytime for booking & urgent setups
                </p>
              </div>
            </div>

            {/* Areas Covered Pills */}
            <div>
              <div className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                Key Neighborhoods Covered:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {BUSINESS_INFO.areasServed.map((area) => (
                  <span
                    key={area}
                    className="bg-white border border-amber-200 text-amber-900 text-xs px-2.5 py-1 rounded-lg font-medium shadow-2xs"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Map & Direction Action Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-3 rounded-xl text-xs text-center flex flex-col items-center justify-center gap-1 shadow-sm transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Map</span>
              </a>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-3 rounded-xl text-xs text-center flex flex-col items-center justify-center gap-1 shadow-sm transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Directions</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold py-3 px-3 rounded-xl text-xs text-center flex flex-col items-center justify-center gap-1 transition-all"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=Hello%20Butterfly%20Event%20Organizer%2C%20I%20would%20like%20to%20get%20your%20office%20location.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-3 rounded-xl text-xs text-center flex flex-col items-center justify-center gap-1 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Link Container */}
          <div className="lg:col-span-6 bg-amber-100/50 rounded-2xl p-6 border border-amber-200 text-center relative overflow-hidden group">
            <div className="aspect-video rounded-xl bg-amber-50 border border-amber-200 flex flex-col items-center justify-center p-6 relative">
              <MapPin className="w-12 h-12 text-rose-500 mb-2 animate-bounce" />
              <h4 className="font-display font-bold text-lg text-gray-900 mb-1">
                Butterfly Event Organizer Location
              </h4>
              <p className="text-xs text-gray-600 max-w-sm mb-4">
                Shree Nagar, Kamble Niwas, Kiwale, Dehu Road, Pimpri-Chinchwad, Maharashtra 412101
              </p>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-gradient text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>View Exact Pin on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
