// src/app/about/page.js
import Image from 'next/image';
import Link from 'next/link';
import { FaBuilding, FaUsers, FaFileAlt, FaAward, FaHandshake, FaChartLine } from 'react-icons/fa';

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}

      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/nigeria.webp"
            alt="KG Multi Dynamic Services"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4yIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About KG Multi Dynamic
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 mx-auto">
            Building Nigeria's future through diversified excellence and unwavering integrity
          </p>
            <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
        </div>
      </section>


      

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-first lg:order-last">
              <div className="relative">
                <Image 
                  src="/images/about-image.jpg" 
                  alt="KG Multi Dynamic Team" 
                  width={600} 
                  height={500}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-xl -z-10"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500 rounded-xl -z-10"></div>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                <FaBuilding className="mr-2" />
                <span>Our Story</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Pioneering Excellence Across Industries</h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  KG Multi Dynamic Service Limited was established with a vision to become a leading 
                  diversified service provider across key sectors of the Nigerian economy. From our 
                  foundation in oil and gas, we have expanded our expertise to encompass agriculture, 
                  equipment leasing, telecommunications, and general trading.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our commitment to quality, reliability, and ethical business practices has positioned 
                  us as a trusted partner for both local and international clients, delivering 
                  comprehensive solutions that drive growth and development.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our operations and define our corporate identity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaHandshake className="w-8 h-8" />, title: "Integrity", description: "We conduct business with honesty, transparency, and ethical practices in all our dealings." },
              { icon: <FaAward className="w-8 h-8" />, title: "Excellence", description: "We strive for the highest standards in service delivery and continuously improve our processes." },
              { icon: <FaChartLine className="w-8 h-8" />, title: "Innovation", description: "We embrace new technologies and creative solutions to meet evolving market demands." }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Foundation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
                <FaFileAlt className="mr-2" />
                <span>Legal Foundation</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Corporate Compliance & Governance</h2>
              <p className="text-xl text-gray-600">
                Built on a foundation of legal integrity and regulatory compliance
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <strong>KG Multi Dynamic Service Limited</strong> is a duly registered company under 
                the <strong>Companies and Allied Matters Act, 2020 (CAMA)</strong> of the Federal 
                Republic of Nigeria. We are a private company limited by shares, committed to 
                transparency, corporate governance, and regulatory compliance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: "Company Status", value: "Private Limited Company" },
                  { title: "Liability", value: "Limited by Shares" },
                  { title: "Share Capital", value: "₦1,000,000 (One Million Naira)" },
                  { title: "Registration", value: "Corporate Affairs Commission (CAC)" }
                ].map((item, index) => (
                  <div key={index} className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                    <h3 className="font-semibold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link 
                  href="/legal" 
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <FaFileAlt className="mr-2" />
                  View Our Certification Documents
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <FaUsers className="mr-2" />
              <span>Leadership</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Directors</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced leadership driving our vision forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                name: "Akinmosun Kolawole", 
                role: "Director", 
                shares: "600,000 Units",
                initials: "AK"
              },
              { 
                name: "Akinmosun Gloria Omolara", 
                role: "Director", 
                shares: "400,000 Units",
                initials: "GO"
              }
            ].map((director, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  {director.initials}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{director.name}</h3>
                <p className="text-gray-600 mb-3">{director.role}</p>
                <p className="text-blue-600 font-medium">Shareholder: {director.shares}</p>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    Bringing extensive experience and strategic vision to drive company growth and innovation.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how our diversified services can help your business grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Get In Touch
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center bg-transparent border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}