import React from 'react';
import { PACKAGES_LIST } from '../data/eventData';
import { Sparkles, Check, Calendar, HelpCircle } from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Curated Packages
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Flexible & Customizable <span className="text-amber-700">Event Packages</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Tailored decoration & management plans for every budget. Transparent pricing available on request.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES_LIST.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between relative ${
                pkg.popular
                  ? 'border-2 border-amber-500 shadow-xl lg:-translate-y-2 bg-gradient-to-b from-amber-50/30 to-white'
                  : 'border-amber-100 shadow-md hover:shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                  {pkg.tagline}
                </p>

                <div className="bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200/60 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                    Recommended For:
                  </span>
                  <span className="text-xs text-gray-800 font-medium">
                    {pkg.recommendedFor}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-3">
                    Included Features:
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                        <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-amber-100 mt-6">
                <div className="text-center mb-4">
                  <span className="text-xs text-amber-800 font-semibold block">
                    Starting price available on request
                  </span>
                  <span className="text-[11px] text-gray-500">
                    Customized based on venue size & theme
                  </span>
                </div>

                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-gold-gradient text-white hover:brightness-105 shadow-amber-200'
                      : 'bg-amber-100 hover:bg-amber-200 text-amber-900'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Get Custom Quote</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
