// src/app/services/page.js
import ServicesGrid from '@/components/ServicesGrid';
import Link from 'next/link';

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive solutions across multiple sectors, delivering excellence and reliability 
            to clients throughout Nigeria and beyond.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ServicesGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can meet your specific needs with our comprehensive services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}