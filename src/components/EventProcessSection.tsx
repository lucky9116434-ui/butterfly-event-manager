import React from 'react';
import { Sparkles, MessageSquareText, Palette, FileSpreadsheet, Smile } from 'lucide-react';

export const EventProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Share Your Event Details',
      description: 'Tell us about your event type, date, location in Pimpri-Chinchwad/Pune, guest count, and initial budget.',
      icon: MessageSquareText,
      bgColor: 'bg-amber-100/80 text-amber-900 border-amber-300'
    },
    {
      step: '02',
      title: 'Choose Theme & Requirements',
      description: 'Select from our catalog or send us your Pinterest reference photos. We tailor color schemes, flowers & lighting.',
      icon: Palette,
      bgColor: 'bg-rose-100/80 text-rose-900 border-rose-300'
    },
    {
      step: '03',
      title: 'Receive a Customized Plan',
      description: 'Get an itemized proposal with transparent pricing, setup schedule, and 3D design concept mockup.',
      icon: FileSpreadsheet,
      bgColor: 'bg-purple-100/80 text-purple-900 border-purple-300'
    },
    {
      step: '04',
      title: 'Relax While We Execute',
      description: 'Our team arrives early for venue decoration and manages everything smoothly so you can enjoy your celebration!',
      icon: Smile,
      bgColor: 'bg-emerald-100/80 text-emerald-900 border-emerald-300'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Simple Process
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Your Event, Planned in <span className="text-amber-700">4 Simple Steps</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            We make event planning seamless and hassle-free from initial concept to final execution.
          </p>
        </div>

        {/* Timeline Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-3xl text-amber-300 group-hover:text-amber-600 transition-colors">
                      {item.step}
                    </span>
                    <div className={`p-3 rounded-xl border ${item.bgColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 text-amber-300">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
