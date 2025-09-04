// src/components/Footer.js
import Link from 'next/link';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram,
  FaArrowRight, FaRegPaperPlane
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 animate-pulse"></div>

      {/* Animated floating circle */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-600 opacity-20 rounded-full blur-3xl animate-ping"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              KG Multi Dynamic Service Limited
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              A diversified Nigerian company delivering excellence across oil & gas, agriculture, 
              equipment leasing, and general trading sectors.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <FaRegPaperPlane className="mr-2 text-blue-300" />
                Stay Updated
              </h4>
              <div className="flex rounded-full overflow-hidden shadow-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 w-full text-gray-800 focus:outline-none"
                />
                <button className="bg-blue-500 hover:bg-blue-400 px-4 py-2 transition-colors flex items-center">
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: FaFacebook, label: "Facebook" },
                { icon: FaTwitter, label: "Twitter" },
                { icon: FaLinkedin, label: "LinkedIn" },
                { icon: FaInstagram, label: "Instagram" }
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-blue-700 hover:bg-blue-600 p-3 rounded-full transition transform hover:-translate-y-1 hover:scale-105"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-blue-700 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
                { href: "/legal", label: "Legal" }
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white flex items-center group"
                  >
                    <FaArrowRight className="mr-2 text-blue-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="relative group-hover:pl-2 transition-all duration-200">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-blue-700 pb-2">Our Services</h4>
            <ul className="space-y-3">
              {[
                { href: "/services/petroleum", label: "Petroleum Products" },
                { href: "/services/machinery", label: "Machinery Hire" },
                { href: "/services/import-export", label: "Import & Export" },
                { href: "/services/real-estate", label: "Real Estate" },
                { href: "/services/construction", label: "Construction Materials" }
              ].map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="text-blue-100 hover:text-white flex items-center group"
                  >
                    <FaArrowRight className="mr-2 text-blue-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="relative group-hover:pl-2 transition-all duration-200">{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-blue-700 pb-2">Contact Info</h4>
            <div className="space-y-4">
              {[
                {
                  icon: FaMapMarkerAlt,
                  content: <>18, Oluranti Adedeji Street,<br />Egan, Igando,<br />Lagos State, Nigeria</>,
                  link: "#"
                },
                {
                  icon: FaPhone,
                  content: "+234 800 000 0000",
                  link: "tel:+2348000000000"
                },
                {
                  icon: FaEnvelope,
                  content: "info@kgmultidynamic.com",
                  link: "mailto:info@kgmultidynamic.com"
                }
              ].map((contact, i) => (
                <div key={i} className="flex items-start group">
                  <contact.icon className="w-5 h-5 text-blue-300 mt-1 mr-3" />
                  {contact.link ? (
                    <a href={contact.link} className="text-blue-100 hover:text-white transition-colors">
                      {contact.content}
                    </a>
                  ) : (
                    <span className="text-blue-100">{contact.content}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-400 py-3 px-6 rounded-lg shadow-md w-full transition-all transform hover:scale-[1.02]"
              >
                <FaEnvelope className="mr-2" /> Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700 relative z-10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-blue-200 mb-4 md:mb-0">
            © {new Date().getFullYear()} KG Multi Dynamic Service Limited. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
              { href: "/legal", label: "Legal" }
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-blue-200 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
