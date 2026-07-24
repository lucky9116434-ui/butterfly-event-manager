import {
  ServiceItem,
  GalleryItem,
  EventProject,
  EventPackage,
  CustomerReview,
  FAQItem
} from '../types';

export const BUSINESS_INFO = {
  name: 'Butterfly Event Organizer',
  title: 'Butterfly Event Organizer | Decorator | Party Events | Corporate Events | Wedding Planners in Kalewadi',
  category: 'Event Planner and Event Decoration Company',
  rating: 5.0,
  reviewsCount: 34,
  phone: '+91 89838 45166',
  phoneRaw: '918983845166',
  whatsapp: '+91 89838 45166',
  whatsappRaw: '918983845166',
  address: 'Shree Nagar, Kamble Niwas, Kiwale, Dehu Road, Pimpri-Chinchwad, Maharashtra 412101',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shree+Nagar+Kamble+Niwas+Kiwale+Dehu+Road+Pimpri+Chinchwad+Maharashtra+412101',
  hours: 'Open 24 Hours',
  areasServed: [
    'Pimpri-Chinchwad',
    'Kalewadi',
    'Kiwale',
    'Dehu Road',
    'Ravet',
    'Wakad',
    'Hinjawadi',
    'Nigdi',
    'Akurdi',
    'Chinchwad',
    'Pune and nearby areas'
  ],
  description: 'Unleash the magic of your next celebration with Butterfly Event Organizer. We transform ordinary moments into extraordinary memories through premium event planning, creative decoration, thoughtful coordination, elegant themes, lighting, stage design and complete event management services.'
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 's-wedding-planning',
    title: 'Wedding Planning',
    category: 'wedding',
    image: '/images/service-wedding.jpg',
    description: 'Complete end-to-end wedding conceptualization, vendor management, setup, and seamless execution.',
    popular: true
  },
  
  {
    id: 's-birthday',
    title: 'first birthday decoration',
    category: 'bithday',
    image: '/images/gallery-6.jpg',
    description: ' Premium birthday decoration featuring customized themes, balloon arches, floral accents, cake table styling, LED lighting, photo booth setup, and memorable celebration décor for kids and adults.".'
  },
  {
    id: 's-birthday',
    title: 'Birthday celebration',
    category: 'birthday',
    image: '/images/gallery-9.jpg',
    description: 'ake every birthday unforgettable with creative themed decorations, elegant balloon arches, customized backdrops, stylish cake table setups, LED lighting, photo booths, and vibrant décor for kids and adults.',
    popular: true
  },
  {
    id: 's-mehndi',
    title: 'Mehndi Decoration',
    category: 'wedding',
    image: '/images/gallery-3.jpg',
    description: 'Vibrant kaleidoscope drapes, boho seating, cozy swings, floral photobooths, and festive setups.'
  },

  {
    id: 's-birthday-party',
    title: 'Birthday Party Decoration',
    category: 'birthday',
    image: '/images/princess-birthday.jpg',
    description: 'Customized balloon arches, character cutouts, DEVANSHI marquee letters, cake pedestal tables, and LED light backdrops.',
    popular: true
  },
  {
    id: 's-kids-theme',
    title: 'Kids Theme Parties',
    category: 'birthday',
    image: '/images/princess-birthday.jpg',
    description: 'Disney Princess, Superhero, Frozen, Jungle Safari, Cocomelon, and customized theme setups for kids.',
    popular: true
  },
  
  {
    id: 's-naming-ceremony',
    title: 'Naming Ceremony (Barse)',
    category: 'decor',
    image: '/images/gallery-2.jpg',
    description: 'Elegant cradle floral decoration, pastel balloon frames, name reveal backdrops, and traditional charm.'
  },
  {
    id: 's-anniversary',
    title: 'Anniversary Celebration',
    category: 'decor',
    image: '/images/gallery-1.jpg',
    description: 'Milestone 25th & 50th silver/gold jubilee stage decor, marquee numbers, soft sofa lounges, and fairy lights.',
    popular: true
  },
  {
    id: 's-surprise-decor',
    title: 'Surprise Room & Terrace Decor',
    category: 'decor',
    image: '/images/gallery-8.jpg',
    description: 'Candlelight setups, ceiling floating balloons, romantic bed decor, fairy light canopy for surprises.'
  },
  {
    id: 's-balloon-decor',
    title: 'Balloon & Organic Arch Decor',
    category: 'decor',
    image: '/images/service-birthday.jpg',
    description: 'Chromium balloons, pastel arches, organic balloon wall garlands, and personalized backdrop rings.'
  },
  {
    id: 's-flower-decor',
    title: 'Flower & Fresh Floral Setup',
    category: 'decor',
    image: '/images/gallery-2.jpg',
    description: 'Exotic carnations, orchids, roses, marigold garlands, and traditional temple sanctuary setups.'
  },
  {
    id: 's-stage-decor',
    title: 'Stage & Backdrop Design',
    category: 'decor',
    image: '/images/gallery-10.jpg',
    description: 'Customized wooden 3D backdrops, velvet draping, LED neon neon signs, and elevated stage flooring.'
  },
  {
    id: 's-housewarming',
    title: 'Housewarming / Vastu Shanti',
    category: 'decor',
    image: '/images/gallery-7.jpg',
    description: 'Pooja ghar flower decoration, mango leaf doorway garlands, rangoli flower mandala, and warm entry setups'
  },
  
  {
    id: 's-corporate',
    title: 'Corporate Events & Launches',
    category: 'corporate',
    image: '/images/service-corporate.jpg',
    description: 'Annual corporate functions, product launches, office festive decor, conferences, and awards nights.'
  }
  
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-hero-venue-night',
    title: 'Grand Venue Night Illumination & Canopy Marquee',
    category: 'Stage',
    image: '/images/hero-main.jpg',
    location: 'Dehu Road, Pune',
    description: 'Multi-story venue exterior illuminated with fairy light cascades and a grand marquee canopy for evening celebrations.'
  },
  {
    id: 'g-wedding-mandap-night',
    title: 'Luxury Outdoor Garden Mandap & Hanging Wisteria Canopy',
    category: 'Wedding',
    image: '/images/wedding-mandap.jpg',
    location: 'Kiwale, Dehu Road, Pune',
    description: 'Enchanting night wedding mandap decor featuring cascading pink roses, white wisteria flowers, sheer white drapes, and ornate golden pillars.'
  },
  {
    id: 'g-devanshi-princess-birthday',
    title: 'Disney Princess DEVANSHI 5th Birthday Stage Decor',
    category: 'Birthday',
    image: '/images/princess-birthday.jpg',
    location: 'Dehu Road, Pune',
    description: 'Enchanting Disney Princess theme stage setup featuring life-size Cinderella, Aurora, Ariel cutouts, illuminated DEVANSHI marquee letters, gold number 5 balloon column, pastel balloon ring arch, and LED Happy Birthday backdrop.'
  },
  {
    id: 'g-25-anniversary',
    title: 'Royal 25th Silver Jubilee Stage Decor',
    category: 'Stage',
    image: '/images/gallery-1.jpg',
    location: 'Pimpri-Chinchwad',
    description: 'Illuminated 25 marquee numbers, plush luxury couch, floral ring backdrop with warm LED Edison bulbs.'
  },
  {
    id: 'g-krishna-baby-shower',
    title: 'Krishna Swing Theme Baby Shower & Dohale Jevan',
    category: 'Baby Shower',
    image: '/images/gallery-2.jpg',
    location: 'Kalewadi, Pune',
    description: 'Floral wooden swing setup with pastel red & white balloon garland frame and traditional Krishna cutouts.'
  },
  {
    id: 'g-grand-entrance-arch',
    title: 'Royal Fabric & Floral Gate Tunnel Entrance',
    category: 'Wedding',
    image: '/images/gallery-3.jpg',
    location: 'Kiwale, Dehu Road',
    description: 'Elegant yellow & orange drapery canopy passage adorned with fresh flower garlands for wedding guest welcome.'
  },
  {
    id: 'g-avengers-frozen-birthday',
    title: 'Grand Avengers & Frozen Birthday Stage',
    category: 'Birthday',
    image: '/images/gallery-4.jpg',
    location: 'Wakad, Pune',
    description: 'Gold shimmer sequin backdrop with Elsa, Anna, Spiderman, and Hulk life-size character cutouts & balloon arches.'
  },
  {
    id: 'g-fairy-1st-birthday',
    title: 'Fairy Tale ONE Marquee 1st Birthday Setup',
    category: 'Theme Decor',
    image: '/images/gallery-5.jpg',
    location: 'Ravet, Pune',
    description: 'Pastel balloon arch with giant light-up ONE marquee letters, fairy wing frames, and garden flower pedestals.'
  },
  {
    id: 'g-temple-sanctuary-flower',
    title: 'Kaleshwari Temple Sanctuary Floral Decoration',
    category: 'Flower',
    image: '/images/gallery-6.jpg',
    location: 'Chinchwad, Pune',
    description: 'Fresh yellow marigold, red rose, and white carnation arch decoration for religious sanctuary altar.'
  },
  {
    id: 'g-indoor-welcome-gate',
    title: 'Indoor Grand Floral Welcome Gate & Path',
    category: 'Flower',
    image: '/images/gallery-7.jpg',
    location: 'Akurdi, Pune',
    description: 'Lush rose and jasmine runner entry arch with traditional brass lamps and checkered welcome walkway.'
  },
  {
    id: 'g-princess-runali-decor',
    title: 'Disney Princess Birthday Stage Decor for Runali',
    category: 'Balloon',
    image: '/images/gallery-8.jpg',
    location: 'Hinjawadi, Pune',
    description: 'Vibrant pink and blue balloon arch, fairy light curtains, sleeping beauty cutouts, and marquee name letters.'
  },
  {
    id: 'g-housewarming-pooja',
    title: 'Traditional Vastu Shanti Housewarming Floral Entry',
    category: 'Flower',
    image: '/images/gallery-9.jpg',
    location: 'Nigdi, Pune',
    description: 'Fresh marigold garlands, brass urli floral centerpieces, and traditional Indian welcome entrance decor.'
  }
];

export const FEATURED_PROJECTS: EventProject[] = [
  {
    id: 'p0',
    title: 'Luxury Night Mandap & Cascading Wisteria Setup',
    category: 'Royal Wedding Mandap Decor',
    location: 'Kiwale, Dehu Road',
    decorationStyle: 'Hanging Wisteria, Pink Roses, White Drapes & Golden Pillars',
    description: 'Created a breathtaking outdoor night mandap featuring pink & white floral arrangements, cascading hanging wisteria blooms, sheer white drapery, and ornate golden traditional pillars on a lush lawn.',
    image: '/images/wedding-mandap.jpg'
  },
  {
    id: 'p1',
    title: 'Disney Princess DEVANSHI 5th Birthday Stage Decor',
    category: 'Princess Theme Birthday Decor',
    location: 'Dehu Road, Pune',
    decorationStyle: 'DEVANSHI Marquee Light Sign, Princess Cutouts, Gold No.5 Foil & Pastel Balloon Arch',
    description: 'Designed a magnificent Disney Princess stage for DEVANSHI\'s 5th birthday featuring life-size princess cutouts (Cinderella, Aurora, Ariel, Rapunzel), glowing marquee name letters, gold foil number 5, and pastel balloon ring arches on a warm illuminated stage.',
    image: '/images/princess-birthday.jpg'
  },
  {
    id: 'p2',
    title: 'Stage & Backdrop Design',
    category: 'decor',
    location: 'Pimpri-Chinchwad',
    description: 'Premium wooden 3D stage backdrops with elegant velvet draping, LED neon signs, floral installations, designer stage flooring, and luxury lighting for weddings, receptions, birthdays, corporate events, and special celebrations.',
    image: '/images/gallery-10.jpg'
  },
  {
    id: 'p3',
    title: 'Grand Royal Entrance Canopy Passage',
    category: 'Wedding Entrance Decor',
    location: 'Dehu Road, Pune',
    description: 'Transformed an open avenue into a majestic wedding walkway using warm yellow & orange drapes, marigold flower runners, and strategic spotlights.',
    decorationStyle: 'Draped Fabric Tunnel & Marigold Flower Garlands',
    image: '/images/gallery-3.jpg'
  },
  {
    id: 'p4',
    title: 'Grand Marvel & Frozen Birthday Extravaganza',
    category: 'Kids Custom Birthday Theme',
    location: 'Wakad, Pune',
    description: 'A dual superhero and princess themed 1st birthday party featuring a shimmer gold photo backdrop, balloon columns, cake pedestals, and life-size cutouts.',
    decorationStyle: 'Shimmer Sequins, Organic Balloons & Life-size Cutouts',
    image: '/images/service-wedding.jpg'
  }
];

export const PACKAGES_LIST: EventPackage[] = [
  {
    id: 'pkg-essential',
    name: 'Essential Celebration',
    tagline: 'Ideal for cozy home celebrations, intimate birthdays & small family rituals',
    recommendedFor: 'Home Birthdays, Baby Showers, Haldi Decor, Anniversaries',
    features: [
      'Customized Backdrop Setup (up to 8x8 ft)',
      '100-200 Premium Metallic / Pastel Balloons',
      'Happy Birthday / Celebration Neon or Foil Banner',
      'Ring Arch or Square Frame Backdrop',
      '2 Cake Pedestal / Accent Tables',
      'On-time Setup & Teardown by Professional Crew',
      'Direct Point of Contact Support'
    ]
  },
  {
    id: 'pkg-premium',
    name: 'Premium Celebration',
    tagline: 'Our most popular choice for grand venue birthdays, engagements & theme parties',
    popular: true,
    recommendedFor: 'Grand Birthday Themes, Engagement Ceremonies, Reception Stage, Baby Showers',
    features: [
      'Grand 10x12 ft Custom 3D Theme Backdrop',
      'Organic Balloon Arch with Shimmer Sequin Panel',
      'Marquee LED Age / Initial Numbers (e.g. 25, 1, ONE)',
      'Fresh Floral Accents & Rose/Jasmine Garlands',
      'Theme Character Cutouts & Designer Prop Displays',
      'Focus Spotlights & LED Warm Ambient Wash Lights',
      'Complete Venue Entrance Gate & Welcome Board Decor',
      'Dedicated Event Coordinator on Site'
    ]
  },
  {
    id: 'pkg-signature',
    name: 'Signature Grand Event',
    tagline: 'Comprehensive turnkey planning & luxury decoration for weddings & corporate events',
    recommendedFor: 'Weddings, Sangeet, Royal Receptions, Corporate Launches & Galas',
    features: [
      'End-to-End Event Conceptualization & Theme Design',
      'Royal Mandap or Grand Reception Stage Setup',
      'Lush Exotic Floral Wall & Fresh Flower Structures',
      'Grand Entrance Tunnel / Arch Canopy with Drapes',
      'Intelligent Stage Lighting (Sharpy, LED Wash, Cold Pyro)',
      'DJ & High-Fidelity Audio Sound System Setup',
      'Photography & Videography Coordination Support',
      'Complete Catering & Guest Hospitality Management',
      '24/7 Dedicated Senior Event Director'
    ]
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'r1',
    name: 'Uddhav Powar',
    rating: 5,
    date: 'Recent Client',
    review: 'Amazing experience with Butterfly Event Organizer! A must-try event management team with extremely polite, creative and hardworking staff. They made our event completely stress-free.',
    verified: true,
    avatarBg: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'r2',
    name: 'Champ Camp',
    rating: 5,
    date: 'Recent Client',
    review: 'The decoration truly transformed the space and created a beautiful atmosphere for our family function. Everyone complimented the flower work and lighting setup.',
    verified: true,
    avatarBg: 'bg-rose-100 text-rose-800'
  },
  {
    id: 'r3',
    name: 'Ritesh Dhotre',
    rating: 5,
    date: 'Recent Client',
    review: 'Very good service and very prompt execution! They arrived on time for setup in Kiwale and delivered exactly what was promised in the draft photos.',
    verified: true,
    avatarBg: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'r4',
    name: 'Priyanka Shinde',
    rating: 5,
    date: 'Local Verified Review',
    review: 'Best event planner in Kalewadi and Pimpri-Chinchwad area. Their birthday balloon decorations and baby shower Jhula setups are super elegant and budget-friendly.',
    verified: true,
    avatarBg: 'bg-pink-100 text-pink-800'
  },
  {
    id: 'r5',
    name: 'Amitabh Patil',
    rating: 5,
    date: 'Local Verified Review',
    review: 'Hired them for a wedding reception in Ravet. The entrance canopy and stage lighting were mesmerising. Highly professional team!',
    verified: true,
    avatarBg: 'bg-blue-100 text-blue-800'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Which areas do you serve in Pimpri-Chinchwad and Pune?',
    answer: 'We serve Pimpri-Chinchwad, Kalewadi, Kiwale, Dehu Road, Ravet, Wakad, Hinjawadi, Nigdi, Akurdi, Chinchwad, Baner, Aundh, Pashan, Pune city, and all surrounding PCMC/PMC regions.'
  },
  {
    id: 'faq-2',
    question: 'Do you provide complete wedding planning and coordination?',
    answer: 'Yes! We offer complete turnkey wedding management services including mandap & stage decoration, entrance arches, venue lighting, DJ & sound setup, photography coordination, catering support, and on-day event management.'
  },
  {
    id: 'faq-3',
    question: 'Can you create a customized event theme based on reference photos?',
    answer: 'Absolutely! You can share any Pinterest, Instagram, or photo reference with us via WhatsApp. Our team will tailor the theme, balloon colors, floral arrangements, and prop designs to match your vision and budget.'
  },
  {
    id: 'faq-4',
    question: 'Do you provide decoration for small home events and flat terraces?',
    answer: 'Yes, we specialize in both grand hall setups and intimate home celebrations like home baby showers, Haldi, terrace birthdays, surprise room decor, and Vastu Shanti Pooja setups.'
  },
  {
    id: 'faq-5',
    question: 'How early should we book an event with Butterfly Event Organizer?',
    answer: 'For weddings and large corporate events, we recommend booking 2 to 4 weeks in advance. For birthdays, baby showers, and anniversary setups, we accept bookings 2 to 7 days prior. Emergency/same-day bookings are also handled based on slot availability!'
  },
  {
    id: 'faq-6',
    question: 'Do you provide decoration and event management separately?',
    answer: 'Yes, you can hire us purely for decoration (balloon, flower, stage, lighting) or for full end-to-end event planning and vendor coordination.'
  },
  {
    id: 'faq-7',
    question: 'Can you arrange DJ, sound systems, stage lighting, and anchor artists?',
    answer: 'Yes! We have in-house partnerships for professional sound systems, DJ setups, intelligent moving lights, smoke/fog machines, cold pyros, anchors/anchoring, and photo/video crews.'
  },
  {
    id: 'faq-8',
    question: 'Are you available for last-minute or urgent same-day events?',
    answer: 'Yes! We operate 24 Hours a day, 7 days a week. You can call or WhatsApp us anytime at +91 89838 45166 for quick event setups.'
  },
  {
    id: 'faq-9',
    question: 'Do you provide corporate event planning and office decoration?',
    answer: 'Yes, we handle corporate annual functions, product launches, office festive decor (Diwali, Christmas, New Year), award ceremonies, and team celebration events.'
  },
  {
    id: 'faq-10',
    question: 'How can I request a customized quotation for my event?',
    answer: 'Simply fill out our online event enquiry form or click the "WhatsApp Us" button to send us your event date, location, guest count, and theme requirements. We will send you an itemized custom proposal promptly!'
  }
];
