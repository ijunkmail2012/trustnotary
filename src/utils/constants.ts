import { 
  FileSignature, Home, Briefcase, BookOpen, Building, Car, Globe, Landmark, 
  Shield, Clock, Badge, CreditCard, MapPin, Users
} from 'lucide-react';

export const SERVICES = [
  {
    id: 1,
    title: 'General Notarization',
    description: 'Notarization for affidavits, acknowledgments, oaths & affirmations with professional integrity and attention to detail.',
    icon: FileSignature
  },
  {
    id: 2,
    title: 'Real Estate Closings',
    description: 'Expert notarization for mortgage documents, deeds, title transfers, and all real estate transactions.',
    icon: Home
  },
  {
    id: 3,
    title: 'Power of Attorney',
    description: 'Notarize durable, medical, and financial power of attorney documents with complete legal compliance.',
    icon: Briefcase
  },
  {
    id: 4,
    title: 'Loan Signing Services',
    description: 'Professional notarization for buyer/seller packages, refinance, HELOC, and other loan documentation.',
    icon: BookOpen
  },
  {
    id: 5,
    title: 'Estate & Trust Documents',
    description: 'Notarize wills, living trusts, and advance directives with the utmost care and confidentiality.',
    icon: Building
  },
  {
    id: 6,
    title: 'Mobile Notary',
    description: 'Convenient on-site notarization at your home, office, or preferred location on your schedule.',
    icon: Car
  },
  {
    id: 7,
    title: 'Apostille & Authentication',
    description: 'Comprehensive international document certification services for global document validity.',
    icon: Globe
  },
  {
    id: 8,
    title: 'Business & Corporate',
    description: 'Notarization for contracts, agreements, corporate resolutions, and other business documentation.',
    icon: Landmark
  }
];

export const FEATURES = [
  {
    id: 1,
    title: 'Licensed & Insured Professionals',
    description: 'Our notaries are fully licensed, bonded, and insured for your peace of mind.',
    icon: Shield
  },
  {
    id: 2,
    title: 'Flexible Scheduling',
    description: 'Evening and weekend appointments available to accommodate your busy schedule.',
    icon: Clock
  },
  {
    id: 3,
    title: 'Competitive Rates',
    description: 'Transparent pricing with no hidden fees. We offer some of the most competitive rates in the industry.',
    icon: CreditCard
  },
  {
    id: 4,
    title: 'Serving All Areas',
    description: 'Comprehensive coverage throughout the region with mobile service available.',
    icon: MapPin
  },
  {
    id: 5,
    title: 'Remote Online Notarization',
    description: 'Convenient online notary services available for qualified documents.',
    icon: Globe
  }
];

export const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Book Online or Call',
    description: 'Schedule an appointment through our easy online form or call us directly.',
    icon: BookOpen
  },
  {
    id: 2,
    title: 'Meet with Our Notary',
    description: 'Meet at our office or have our mobile notary come to your location.',
    icon: Users
  },
  {
    id: 3,
    title: 'Sign & Notarize Documents',
    description: 'Present your ID, sign your documents in the presence of our notary.',
    icon: FileSignature
  },
  {
    id: 4,
    title: 'Receive Completed Paperwork',
    description: 'Get your fully notarized documents, ready for immediate use.',
    icon: Badge
  }
];