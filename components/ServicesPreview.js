// src/components/ServicesPreview.js
import Link from 'next/link';
import { FaArrowRight, FaGasPump, FaTruck, FaGlobe, FaBuilding, FaHardHat } from 'react-icons/fa';

const ServicesPreview = () => {
  const services = [
    {
      title: "Petroleum Products",
      description: "National and international sales, supply, and distribution of premium petroleum products.",
      icon: <FaGasPump className="w-8 h-8" />,
      link: "/services/petroleum",
      gradient: "from-orange-500 to-red-600",
      features: ["Bulk Fuel", "Distribution", "Trading"]
    },
    {
      title: "Machinery & Equipment Hire",
      description: "Full-service leasing of plants, vehicles, boats, cranes, and construction equipment.",
      icon: <FaTruck className="w-8 h-8" />,
      link: "/services/machinery",
      gradient: "from-gray-600 to-gray-800",
      features: ["Heavy Equipment", "Construction", "Maintenance"]
    },
    {
      title: "Import & Export",
      description: "Efficient importation and exportation of consumable goods across borders.",
      icon: <FaGlobe className="w-8 h-8" />,
      link: "/services/import-export",
      gradient: "from-blue-500 to-indigo-700",
      features: ["Logistics", "Customs", "Supply Chain"]
    },
    {
      title: "Real Estate",
      description: "Strategic acquisition and management of land and building properties.",
      icon: <FaBuilding className="w-8 h-8" />,
      link: "/services/real-estate",
      gradient: "from-green-500 to-teal-700",
      features: ["Acquisition", "Development", "Management"]
    },
    {
      title: "Construction Materials",
      description: "Reliable supply of granites, sand, iron rods, and construction materials.",
      icon: <FaHardHat className="w-8 h-8" />,
      link: "/services/construction",
      gradient: "from-amber-500 to-orange-600",
      features: ["Materials", "Quality", "Delivery"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-100 rounded-full opacity-20 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of professional services designed to meet your business needs
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-100 relative"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}></div>
              
              <div className="p-6">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all group/link"
                >
                  <span className="mr-2">Explore Service</span>
                  <FaArrowRight className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need a custom solution?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We specialize in tailored services to meet your specific business requirements. 
              Contact us to discuss how we can create the perfect solution for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;