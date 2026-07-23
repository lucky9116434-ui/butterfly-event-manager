import React from 'react';
import { CUSTOMER_REVIEWS, BUSINESS_INFO } from '../data/eventData';
import { Sparkles, Star, Quote, ExternalLink, CheckCircle } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Client Testimonials
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            5.0 Stars Google Rated by <span className="text-amber-700">34+ Happy Families</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Read real feedback from clients in Pimpri-Chinchwad, Kiwale, and Dehu Road who trusted Butterfly Event Organizer.
          </p>

          {/* Google Score Summary Card */}
          <div className="mt-8 inline-flex items-center gap-4 bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 p-4 rounded-2xl border border-amber-200/80 shadow-sm">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-lg font-bold text-gray-900">
                5.0 / 5.0 Rating
              </div>
              <div className="text-xs text-gray-600 font-medium">
                Based on 34 Google Reviews in Pimpri-Chinchwad
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-200 group-hover:text-amber-400 transition-colors" />
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-6 font-normal">
                  "{review.review}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-amber-50">
                <div className={`w-10 h-10 rounded-full font-bold text-sm flex items-center justify-center shrink-0 ${review.avatarBg || 'bg-amber-100 text-amber-800'}`}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm flex items-center gap-1.5">
                    <span>{review.name}</span>
                    {review.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 fill-blue-100" title="Verified Customer" />
                    )}
                  </div>
                  <div className="text-xs text-gray-500">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="text-center mt-12">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold px-7 py-3.5 rounded-full shadow-sm hover:shadow transition-all text-sm"
          >
            <span>View All Google Reviews</span>
            <ExternalLink className="w-4 h-4 text-amber-700" />
          </a>
        </div>

      </div>
    </section>
  );
};
