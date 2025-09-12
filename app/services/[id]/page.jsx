// src/app/services/[id]/page.js
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheck, FaArrowRight, FaPhone, FaClock, FaUsers, FaShieldAlt } from 'react-icons/fa';

// Service data - this would typically come from a database or CMS
const serviceDetails = {
  petroleum: {
    title: 'Petroleum Products',
    icon: '⛽',
    description: 'Comprehensive petroleum products distribution services',
    longDescription: `We specialize in the national and international sales, supply, and distribution of premium petroleum products. Our services include bulk fuel supply to industries, retail distribution networks, and international trading operations. We maintain the highest quality standards and ensure reliable delivery to meet our clients' energy needs.`,
    features: [
      'Bulk fuel supply to industries and factories',
      'Retail distribution network management',
      'International import and export operations',
      'Quality assurance and compliance',
      'Storage and logistics solutions',
      '24/7 emergency supply services'
    ],
    image: '/images/service-petroleum.jpg',
    heroImage: '/nigeria.webp'
  },
  machinery: {
    title: 'Machinery & Equipment Hire',
    icon: '🏗️',
    description: 'Comprehensive equipment leasing services',
    longDescription: `We provide full-service leasing of construction, agricultural, and industrial equipment with trained operators and maintenance support. Our fleet includes the latest machinery for various applications.`,
    features: [
      'Heavy construction equipment',
      'Agricultural machinery',
      'Marine vessels and boats',
      'Professional operators',
      'Maintenance and repair services',
      'Flexible rental terms'
    ],
    image: '/images/service-machinery.jpg',
    heroImage: '/nigeria.webp'
  },
  'import-export': {
    title: 'Import & Export Services',
    icon: '🌐',
    description: 'Comprehensive international trade solutions including China, England, and Germany importation',
    longDescription: `We provide end-to-end import and export solutions with specialized focus on China, England, and Germany markets. Our comprehensive services include ocean and air freight logistics, customs clearance, goods tracking, customization, branding, and complete supply chain management. We handle everything from sourcing and procurement to payment processing for Chinese suppliers, ensuring seamless international trade operations.`,
    features: [
      'China, England & Germany importation specialists',
      'Ocean freight and air freight services',
      'Real-time shipment tracking systems',
      'Goods customization and branding services',
      'Sourcing and procurement assistance',
      'Payment processing for Chinese suppliers',
      'Customs clearance and documentation',
      'Supply chain management',
      'Quality inspection services',
      'Logistics and distribution'
    ],
    image: '/images/imex.jpg',
    heroImage: '/imex.jpg'
  },
  'real-estate': {
    title: 'Real Estate Services',
    icon: '🏢',
    description: 'Property acquisition and management',
    longDescription: `We specialize in strategic acquisition, development, and management of residential, commercial, and industrial properties across Nigeria.`,
    features: [
      'Property acquisition',
      'Land development',
      'Real estate investment',
      'Property management',
      'Commercial leasing',
      'Development consulting'
    ],
    image: '/images/service-real-estate.jpg',
    heroImage: '/nigeria.webp'
  },
  construction: {
    title: 'Construction Materials',
    icon: '🧱',
    description: 'Quality building materials supply',
    longDescription: `We supply high-quality construction materials including granites, sand, iron rods, roofing sheets, and all essential building components.`,
    features: [
      'Bulk material supply',
      'Quality assurance',
      'Timely delivery',
      'Competitive pricing',
      'Technical support',
      'After-sales service'
    ],
    image: '/images/service-construction.jpg',
    heroImage: '/nigeria.webp'
  },
  agriculture: {
    title: 'Agriculture & Farming',
    icon: '🚜',
    description: 'Modern agricultural solutions',
    longDescription: `We provide comprehensive agricultural services including mechanized farming, food processing, and large-scale production for local and export markets.`,
    features: [
      'Mechanized farming',
      'Food processing',
      'Large-scale production',
      'Export quality standards',
      'Modern equipment',
      'Sustainable practices'
    ],
    image: '/images/service-agriculture.jpg',
    heroImage: '/nigeria.webp'
  },
  telecom: {
    title: 'Telecommunications',
    icon: '📡',
    description: 'Comprehensive telecom solutions',
    longDescription: `We offer telecom services including infrastructure development, maintenance, and technology solutions for operations of all scales.`,
    features: [
      'Infrastructure development',
      'Network maintenance',
      'Technology solutions',
      'Scale operations',
      'Technical support',
      'System integration'
    ],
    image: '/images/service-telecom.jpg',
    heroImage: '/nigeria.webp'
  },
  manpower: {
    title: 'Manpower Services',
    icon: '👥',
    description: 'Skilled workforce solutions',
    longDescription: `We supply skilled and unskilled labor across various sectors with proper vetting, training, and management services.`,
    features: [
      'Skilled labor supply',
      'Workforce management',
      'Training programs',
      'Quality assurance',
      'Temporary staffing',
      'Permanent placement'
    ],
    image: '/images/service-manpower.jpg',
    heroImage: '/nigeria.webp'
  },
  event: {
    title: 'Event Management',
    icon: '🎤',
    description: 'Complete event planning services',
    longDescription: `We provide complete event planning and execution services including corporate branding, catering, and venue management.`,
    features: [
      'Corporate events',
      'Branding services',
      'Catering solutions',
      'Venue management',
      'Audio-visual production',
      'Guest coordination'
    ],
    image: '/images/service-event.jpg',
    heroImage: '/nigeria.webp'
  }
};

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = serviceDetails[id];
  
  if (!service) {
    return {
      title: 'Service Not Found'
    };
  }

  return {
    title: `${service.title} - KG Multi Dynamic Services`,
    description: service.description
  };
}

// Generate static paths for all services
export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((id) => ({
    id,
  }));
}

export default async function ServiceDetail({ params }) {
  const { id } = await params;
  const service = serviceDetails[id];

  if (!service) {
    notFound();
  }

  return (
    <main>
      {/* Enhanced Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-10 pb-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage || '/nigeria.webp'}
            alt={service.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-indigo-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-3xl backdrop-blur-sm mb-6 border border-white/30">
            <span className="text-4xl">{service.icon}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            {service.title}
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-100 leading-relaxed">
            {service.description}
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <FaClock className="w-4 h-4 text-blue-300" />
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <FaUsers className="w-4 h-4 text-blue-300" />
              <span className="text-sm">Expert Team</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <FaShieldAlt className="w-4 h-4 text-blue-300" />
              <span className="text-sm">Quality Guaranteed</span>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <FaPhone className="w-5 h-5 mr-3" />
            Get Free Consultation
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive <span className="text-blue-600">{service.title}</span> Solutions
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-blue-100"
                >
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <FaCheck className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-gray-800 font-medium leading-relaxed">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Let's discuss how our {service.title} services can benefit your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us Today
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our Other Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of professional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(serviceDetails)
              .filter(([key]) => key !== id)
              .slice(0, 3)
              .map(([key, relatedService]) => (
                <Link
                  key={key}
                  href={`/services/${key}`}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-gray-100 hover:border-blue-200"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <span className="text-2xl">{relatedService.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {relatedService.description.slice(0, 80)}...
                  </p>
                  <div className="mt-4 inline-flex items-center text-blue-600 font-medium text-sm">
                    Learn more <FaArrowRight className="ml-2 w-3 h-3" />
                  </div>
                </Link>
              ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg"
            >
              View All Services
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}