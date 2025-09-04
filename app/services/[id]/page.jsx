// src/app/services/[id]/page.js
import { notFound } from 'next/navigation';
import Link from 'next/link';

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
    image: '/images/service-petroleum.jpg'
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
    image: '/images/service-machinery.jpg'
  },
  'import-export': {
    title: 'Import & Export Services',
    icon: '🌐',
    description: 'End-to-end international trade solutions',
    longDescription: `We handle all aspects of international trade, from customs clearance to logistics management. Our expertise ensures smooth import and export operations for various goods.`,
    features: [
      'Customs clearance services',
      'Documentation handling',
      'Logistics and shipping',
      'International sourcing',
      'Quality inspection',
      'Regulatory compliance'
    ],
    image: '/images/service-import-export.jpg'
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
    image: '/images/service-real-estate.jpg'
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
    image: '/images/service-construction.jpg'
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
    image: '/images/service-agriculture.jpg'
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
    image: '/images/service-telecom.jpg'
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
    image: '/images/service-manpower.jpg'
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
    image: '/images/service-event.jpg'
  }
};

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { id } = await params; // Await the params
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
  const { id } = await params; // Await the params here
  const service = serviceDetails[id];

  if (!service) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">{service.description}</p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Comprehensive {service.title} Solutions</h2>
              <p className="text-lg text-gray-700 mb-8">{service.longDescription}</p>
              
              <h3 className="text-2xl font-semibold mb-4">Our Services Include:</h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Get Started with {service.title}
              </Link>
              
              <div className="mt-6">
                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  ← Back to All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Other Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {Object.entries(serviceDetails)
              .filter(([key]) => key !== id)
              .slice(0, 3)
              .map(([key, relatedService]) => (
                <Link
                  key={key}
                  href={`/services/${key}`}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
                >
                  <div className="text-3xl mb-3 text-blue-600 group-hover:text-blue-700">
                    {relatedService.icon}
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-blue-600">
                    {relatedService.title}
                  </h3>
                </Link>
              ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}