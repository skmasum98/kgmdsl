// src/components/CtaSection.js
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Power Your Next Project?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s discuss how our multi-dynamic services can provide the
          solution you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-md"
          >
            Get a Free Consultation
          </Link>
          <Link
            href="/services"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
