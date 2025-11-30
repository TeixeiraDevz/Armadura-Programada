import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <CTASection />
      <Footer />
    </div>
  );
}
