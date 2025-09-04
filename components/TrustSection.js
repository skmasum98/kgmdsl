// src/components/TrustSection.js
import Link from 'next/link';
import { FaBalanceScale, FaSearch, FaFileAlt, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const TrustSection = () => {
  const trustPoints = [
    {
      icon: <FaBalanceScale className="w-10 h-10" />,
      title: "Governed by CAMA 2020",
      description: "We operate in full compliance with the Companies and Allied Matters Act, 2020.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: <FaSearch className="w-10 h-10" />,
      title: "CAC Certified & Verifiable",
      description: "Our registration details can be independently verified on the official CAC portal.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: <FaFileAlt className="w-10 h-10" />,
      title: "Transparency in Operations",
      description: "Certified extracts of our incorporation documents are available for review.",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
            <FaShieldAlt className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Credentials & Guarantee
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            KG Multi Dynamic Service Limited is built on a foundation of integrity, transparency, 
            and strict adherence to Nigerian corporate law.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-r ${point.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {point.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {point.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Verification Process */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            How to Verify Our Status
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Visit CAC Portal", description: "Go to the official CAC verification website" },
              { step: "02", title: "Enter RC Number", description: "Input our registration number: RC-XXXXXXX" },
              { step: "03", title: "Review Details", description: "Check our company information and status" },
              { step: "04", title: "Confirm Validity", description: "Verify our active and compliant status" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Verify Our Credentials?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We believe in complete transparency. Verify our corporate status directly 
              with the Corporate Affairs Commission or request our documentation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/legal"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                <FaCheckCircle className="mr-2" />
                View Our Documents
              </Link>
              
              <a
                href="https://search.cac.gov.ng/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                Visit CAC Portal
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { label: "CAC Registered", icon: "📋" },
            { label: "Legal Compliance", icon: "⚖️" },
            { label: "Verified Business", icon: "✅" },
            { label: "Transparent Operations", icon: "🔍" }
          ].map((badge, index) => (
            <div key={index} className="flex items-center bg-white py-2 px-4 rounded-full shadow-sm">
              <span className="text-xl mr-2">{badge.icon}</span>
              <span className="text-sm font-medium text-gray-700">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;