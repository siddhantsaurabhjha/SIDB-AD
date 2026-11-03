import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MovieBox from './components/MovieBox';
import About from './components/About';
import Footer from './components/Footer';
import Modals from './components/Modals';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="app-wrapper">
      {/* Navbar with mobile drawer */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <Features />
        <MovieBox />
        <About />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacyModal={() => setIsPrivacyOpen(true)}
        onOpenContactModal={() => setIsContactOpen(true)}
      />

      {/* Modals & Dialogs */}
      <Modals
        isPrivacyOpen={isPrivacyOpen}
        onClosePrivacy={() => setIsPrivacyOpen(false)}
        isContactOpen={isContactOpen}
        onCloseContact={() => setIsContactOpen(false)}
      />
    </div>
  );
}
