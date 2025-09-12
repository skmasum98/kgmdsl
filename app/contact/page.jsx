// src/app/contact/page.js
'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to API)
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                {/* Pattern overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4yIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
                <div className="absolute inset-0 bg-blue-900/70"></div>
              </div>
      
              {/* Content */}
              <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Contact Us
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mb-8 mx-auto">
                  Get in touch with our team today
                </p>
                  <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
              </div>
            </section>

      

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">🏢</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Registered Office</h3>
                    <p className="text-gray-700">
                      18, Oluranti Adedeji Street, Egan, Igando,<br />
                      Lagos State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">📞</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-700">+234 XXX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">✉️</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-700">info@kgmultidynamic.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">🕒</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="petroleum">Petroleum Products</option>
                        <option value="machinery">Machinery Hire</option>
                        <option value="import-export">Import & Export</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="construction">Construction Materials</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
              {/* Replace with actual map embed */}
              <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
               
                {/* Actual embed code: */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15855.323594603904!2d3.220331630334427!3d6.543026482128153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b856b30c2bc4b%3A0x2958bfb827cc756f!2s18%20Oluranti%20Adedeji%20St%2C%20Ijegun%2C%20Lagos%20102213%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sbd!4v1757680017589!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}