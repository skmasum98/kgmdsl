// src/app/services/page.js
import ServicesGrid from '@/components/ServicesGrid';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <main>
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
    {/* Dark overlay for better text readability */}
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      Our Services
    </h1>
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