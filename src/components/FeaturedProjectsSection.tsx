import React from 'react';
import { FEATURED_PROJECTS } from '../data/eventData';
import { Sparkles, MapPin, Palette, ArrowRight, Calendar } from 'lucide-react';

interface FeaturedProjectsSectionProps {
  onEnquireProject: (projectTitle: string) => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({ onEnquireProject }) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-amber-50/20 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Spotlight Projects
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Featured Celebration <span className="text-amber-700">Showcase</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            A close-up look at signature stage setups, traditional rituals, and luxury decor crafted by our team.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden bg-amber-50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-900 shadow-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="font-medium text-gray-800">{project.decorationStyle}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-amber-100">
                  <a
                    href="#gallery"
                    className="flex-1 bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold text-xs sm:text-sm py-3 rounded-xl transition-colors text-center"
                  >
                    View Gallery
                  </a>
                  <button
                    onClick={() => onEnquireProject(project.title)}
                    className="flex-1 bg-gold-gradient text-white font-bold text-xs sm:text-sm py-3 rounded-xl shadow-sm hover:shadow transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Enquire Setup</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
