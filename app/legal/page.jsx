// src/app/legal/page.js
import Link from "next/link";

export default function Legal() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Legal Documents
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Transparency and compliance are the foundation of our business
          </p>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-8">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Corporate Verification
                </h2>
                <p className="mt-2 text-blue-100">
                  KG Multi Dynamic Service Limited &mdash; CAC Certified
                </p>
              </div>

              {/* Content */}
              <div className="p-8 space-y-10">
                {/* Registration Details */}
                <section>
                  <h3 className="text-xl font-semibold mb-6">
                    Registration Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-5 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Stamp Duty Certificate No.
                      </h4>
                      <p className="font-mono text-sm break-all">
                        2024-2351-01121-89661
                      </p>
                    </div>
                    <div className="bg-blue-50 p-5 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Registration Date
                      </h4>
                      <p>5th July, 2024</p>
                    </div>
                  </div>
                </section>

                {/* Certified Documents */}
                <section>
                  <h3 className="text-xl font-semibold mb-6">
                    Certified Documents
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Memorandum of Association",
                        desc: "Certified extract of the company&apos;s memorandum outlining authorized business activities.",
                        file: "/documents/memorandum.pdf",
                      },
                      {
                        title: "Articles of Association",
                        desc: "Certified extract of the company&apos;s articles governing internal management.",
                        file: "/documents/articles.pdf",
                      },
                      {
                        title: "Certificate of Incorporation",
                        desc: "Official certificate of incorporation from the Corporate Affairs Commission.",
                        file: "/documents/certificate.pdf",
                      },
                    ].map((doc, i) => (
                      <div
                        key={i}
                        className="border border-gray-200 rounded-lg p-5 hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="font-semibold mb-2">{doc.title}</h4>
                        <p className="text-gray-600 mb-3">{doc.desc}</p>
                        <a
                          href={doc.file}
                          download
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                          aria-label={`Download ${doc.title}`}
                        >
                          📄 Download PDF
                        </a>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Verification Notice */}
                <aside className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-lg">
                  <h4 className="text-sm font-semibold text-yellow-800 mb-2">
                    Verification
                  </h4>
                  <p className="text-sm text-yellow-700 leading-relaxed">
                    These documents can be verified on the official CAC portal
                    using our Stamp Duty Certificate Number.{" "}
                    <Link
                      href="https://stampduty.gov.ng/verification"
                      className="ml-1 text-yellow-800 underline hover:text-yellow-900"
                    >
                      Verify online here
                    </Link>
                  </p>
                </aside>
              </div>
            </article>

            {/* CTA */}
            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
              >
                Contact Us for More Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
