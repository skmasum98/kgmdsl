'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/hero-oil-gas.jpg",
      title: "Powering Nigeria's Energy Sector",
      subtitle:
        "Premium petroleum products distribution and pipeline services",
    },
    {
      image: "/images/hero-construction.jpg",
      title: "Building Infrastructure",
      subtitle:
        "Heavy equipment leasing and construction materials supply",
    },
    {
      image: "/images/hero-agriculture.jpg",
      title: "Agricultural Development",
      subtitle:
        "Modern farming solutions and food production services",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0} // Optimize first slide for faster LCP
                sizes="100vw"
                className="object-cover"
                onLoadingComplete={() =>
                  console.log("image loaded:", slide.image)
                }
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          KG Multi Dynamic Service Limited
        </h1>

        {/* Slide titles */}
        <div className="h-20 md:h-24 mb-6 relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute left-0 right-0 mx-auto transition-all duration-1000 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-xl md:text-2xl font-light mb-4">
                {slide.title}
              </p>
              <p className="text-lg md:text-xl text-blue-200">
                {slide.subtitle}
              </p>
            </div>
          ))}
        </div>

        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          A diversified Nigerian company delivering excellence across oil &amp;
          gas, agriculture, equipment leasing, and general trading sectors.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 transform hover:scale-105"
          >
            Explore Our Services
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
