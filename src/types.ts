export interface ServiceItem {
  id: string;
  title: string;
  category: 'wedding' | 'birthday' | 'corporate' | 'decor' | 'entertainment';
  image: string;
  description: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Wedding' | 'Birthday' | 'Corporate' | 'Baby Shower' | 'Stage' | 'Balloon' | 'Flower' | 'Theme Decor';
  image: string;
  location?: string;
  description?: string;
}

export interface EventProject {
  id: string;
  title: string;
  category: string;
  location: string;
  decorationStyle: string;
  description: string;
  image: string;
}

export interface EventPackage {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  recommendedFor: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  rating: number;
  date: string;
  review: string;
  verified: boolean;
  avatarBg?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  whatsapp: string;
  email: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  expectedGuests: string;
  preferredTheme: string;
  budgetRange: string;
  requiredServices: string[];
  message: string;
  referenceLink: string;
}
