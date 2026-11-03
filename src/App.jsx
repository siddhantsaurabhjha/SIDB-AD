import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MovieBox from './components/MovieBox';
import About from './components/About';
import Footer from './components/Footer';
import Modals from './components/Modals';

export default function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="app-wrapper">
      {/* Navbar with mobile drawer */}
      <Navbar onOpenDownloadModal={() => setIsDownloadOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenDownloadModal={() => setIsDownloadOpen(true)} />
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
        isDownloadOpen={isDownloadOpen}
        onCloseDownload={() => setIsDownloadOpen(false)}
        isPrivacyOpen={isPrivacyOpen}
        onClosePrivacy={() => setIsPrivacyOpen(false)}
        isContactOpen={isContactOpen}
        onCloseContact={() => setIsContactOpen(false)}
      />
    </div>
  );
}

