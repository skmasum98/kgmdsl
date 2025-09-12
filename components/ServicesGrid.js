// src/components/ServicesGrid.js
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheck, FaLightbulb, FaCogs, FaHandshake, FaShip, FaPlane, FaGlobe, FaMoneyBillWave, FaSearchDollar } from "react-icons/fa";

const ServicesGrid = () => {
  const services = [
    {
      id: "import-export",
      
      icon: "🌐",
      title: "Import & Export Services",
      description:
        "Comprehensive international trade solutions including China, England, and Germany importation, ocean/air freight, and complete supply chain management.",
      features: [
        "China, England & Germany importation",
        "Ocean freight and air freight services",
        "Customization and branding of goods",
        "Sourcing and procurement services",
        "Payment processing for Chinese suppliers",
        "Tracking and logistics management"
      ],
      gradient: "from-blue-500 to-indigo-700",
      featured: true
    },
    {
      id: "petroleum",
      icon: "⛽",
      title: "Petroleum Products",
      description:
        "National and international sales, supply, and distribution of premium petroleum products including diesel, petrol, kerosene, and lubricants.",
      features: [
        "Bulk fuel supply",
        "Retail distribution",
        "International trading",
        "Storage solutions",
      ],
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: "machinery",
      icon: "🏗️",
      title: "Machinery & Equipment Hire",
      description:
        "Comprehensive leasing services for construction, agriculture, and industrial equipment with trained operators and maintenance support.",
      features: [
        "Heavy equipment rental",
        "Construction machinery",
        "Marine vessels",
        "Operation & maintenance",
      ],
      gradient: "from-gray-600 to-gray-800"
    },
    {
      id: "real-estate",
      icon: "🏢",
      title: "Real Estate Services",
      description:
        "Strategic acquisition, development, and management of residential, commercial, and industrial properties across Nigeria.",
      features: [
        "Property acquisition",
        "Land development",
        "Real estate investment",
        "Property management",
      ],
      gradient: "from-green-500 to-teal-700"
    },
    {
      id: "construction",
      icon: "🧱",
      title: "Construction Materials",
      description:
        "Reliable supply of high-quality building materials including granites, sand, iron rods, roofing sheets, and all construction essentials.",
      features: [
        "Bulk material supply",
        "Quality assurance",
        "Timely delivery",
        "Competitive pricing",
      ],
      gradient: "from-amber-500 to-orange-600"
    },
    {
      id: "agriculture",
      icon: "🚜",
      title: "Agriculture & Farming",
      description:
        "Modern agricultural solutions including mechanized farming, food processing, and large-scale production for local and export markets.",
      features: [
        "Mechanized farming",
        "Food processing",
        "Large-scale production",
        "Export quality standards",
      ],
      gradient: "from-lime-500 to-green-700"
    },
    {
      id: "telecom",
      icon: "📡",
      title: "Telecommunications",
      description:
        "Comprehensive telecom services including infrastructure development, maintenance, and technology solutions for all scale operations.",
      features: [
        "Infrastructure development",
        "Network maintenance",
        "Technology solutions",
        "Scale operations",
      ],
      gradient: "from-purple-500 to-indigo-700"
    },
    {
      id: "manpower",
      icon: "👥",
      title: "Manpower Services",
      description:
        "Supply of skilled and unskilled labor across various sectors with proper vetting, training, and management services.",
      features: [
        "Skilled labor supply",
        "Workforce management",
        "Training programs",
        "Quality assurance",
      ],
      gradient: "from-cyan-500 to-blue-700"
    },
    {
      id: "event",
      icon: "🎤",
      title: "Event Management",
      description:
        "Complete event planning and execution services including corporate branding, catering, and venue management.",
      features: [
        "Corporate events",
        "Branding services",
        "Catering solutions",
        "Venue management",
      ],
      gradient: "from-pink-500 to-rose-600"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6">
          <FaLightbulb className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Comprehensive Service Portfolio
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We offer end-to-end solutions across multiple industries, ensuring
          quality, reliability, and customer satisfaction in every service we
          provide.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service) => (
          <div
            key={service.id}
            className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-blue-100 ${
              service.featured ? 'md:col-span-2 lg:col-span-3' : ''
            }`}
          >
            {service.featured ? (
              /* Featured Service Layout */
              <div className="flex flex-col lg:flex-row bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
                {/* Image Section */}
                <div className="relative h-48 lg:h-auto lg:w-2/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 z-10"></div>
                  <Image
                    src="/imex.jpg"
                    alt="Import Export Services - International Trade Solutions"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <FaGlobe className="w-3 h-3" />
                      Featured
                    </span>
                  </div>

                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 lg:w-3/5">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                      <FaGlobe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg font-medium">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start group/feature">
                        <span className="w-6 h-6 bg-blue-100 rounded-full mr-3 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/feature:bg-blue-200 transition-colors">
                          <FaCheck className="w-3 h-3 text-blue-600" />
                        </span>
                        <span className="text-sm text-gray-700 font-medium leading-tight">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 group/link shadow-lg hover:shadow-xl"
                  >
                    <span className="mr-3">Explore Import & Export Services</span>
                    <FaArrowRight className="transition-transform group-hover/link:translate-x-1" />
                  </Link>

                  {/* Quick Stats */}
                  <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <FaShip className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Ocean Freight</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPlane className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Air Freight</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaSearchDollar className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Global Sourcing</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Regular Service Layout */
              <>
                <div className={`bg-gradient-to-r ${service.gradient} h-32 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-5xl text-white opacity-90">{service.icon}</div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-5 h-5 bg-blue-100 rounded-full mr-3 flex items-center justify-center flex-shrink-0">
                          <FaCheck className="w-3 h-3 text-blue-600" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all group/link"
                  >
                    <span className="mr-2">Learn more</span>
                    <FaArrowRight className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
            <div className="text-sm md:text-base opacity-90">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
            <div className="text-sm md:text-base opacity-90">Expert Team Members</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
            <div className="text-sm md:text-base opacity-90">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
            <div className="text-sm md:text-base opacity-90">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gray-50 rounded-2xl p-12">
        <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
          <FaHandshake className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Need a Custom Solution?
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We specialize in creating tailored solutions to meet your specific business needs. 
          Our team of experts will work with you to develop the perfect service package.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Request Custom Solution
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center bg-white text-gray-800 border border-gray-300 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;