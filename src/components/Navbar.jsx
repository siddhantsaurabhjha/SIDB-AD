import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ExternalLink } from 'lucide-react';
import { DOWNLOADS } from '../config/downloads';

export default function Navbar({ onOpenDownloadModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'MovieBox', href: '#moviebox' },
    { name: 'About', href: '#about' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled' : 'nav-transparent'
      }`}
    >
      <div className="container">
        <div className="nav-container">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="brand-logo"
            aria-label="SIDB Home"
          >
            <div className="logo-icon-wrapper">
              <img
                src="/assets/logo.png"
                alt="SIDB Browser Official Logo"
                className="brand-logo-img"
              />
            </div>
            <div className="brand-text">
              <span className="brand-name">SIDB</span>
              <span className="brand-badge">BROWSER</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action: Visit Official SIDB Website */}
          <div className="nav-actions">
            <a
              href={DOWNLOADS.SIDB_OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-btn"
              aria-label="Visit official SIDB browser website"
            >
              <span>Visit SIDB</span>
              <ExternalLink size={14} className="nav-cta-icon" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <nav className="mobile-nav-links" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="mobile-nav-item"
              >
                <span>{link.name}</span>
                <ArrowUpRight size={18} className="mobile-nav-arrow" />
              </a>
            ))}
          </nav>

          <div className="mobile-drawer-footer">
            <a
              href={DOWNLOADS.SIDB_OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full"
              aria-label="Visit official SIDB browser website"
            >
              <span>Visit SIDB</span>
              <ExternalLink size={16} />
            </a>
            <p className="mobile-drawer-meta">Available for Windows &amp; Linux</p>
          </div>
        </div>
      </div>
    </header>
  );
}
