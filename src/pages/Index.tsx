import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import LegislativeWork from '@/components/LegislativeWork';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <LegislativeWork />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
