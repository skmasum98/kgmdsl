// src/app/page.js
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import TrustSection from '@/components/TrustSection';
import CtaSection from '@/components/CtaSection';
// import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      
      <Hero />
      <ServicesPreview />
      <TrustSection />
      <CtaSection />
    
    </main>
  );
}