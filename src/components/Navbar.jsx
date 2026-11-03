import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
              <svg className="logo-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="10" fill="#0d1424" stroke="url(#nav-logo-grad)" strokeWidth="1.5" />
                <path
                  d="M26 14C26 11.2386 23.7614 9 21 9H16C12.6863 9 10 11.6863 10 15C10 17.5 12 19.5 15 20.2L24 22C27 22.8 29.5 24.5 29.5 28C29.5 31.3137 26.8137 34 23.5 34H17C14.2386 34 12 31.7614 12 29"
                  stroke="url(#nav-logo-grad)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="27" cy="14" r="2" fill="#38bdf8" />
                <defs>
                  <linearGradient id="nav-logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38bdf8" />
                    <stop offset="0.5" stopColor="#818cf8" />
                    <stop offset="1" stopColor="#c084fc" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-name">SIDB</span>
              <span className="brand-badge">PROMO</span>
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

          {/* Desktop Action */}
          <div className="nav-actions">
            <button
              onClick={onOpenDownloadModal}
              className="nav-cta-btn"
              type="button"
            >
              <span>Download SIDB</span>
              <span className="coming-soon-chip">Coming Soon</span>
            </button>
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
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenDownloadModal();
              }}
              className="btn-primary w-full"
              type="button"
            >
              <span>Download SIDB</span>
              <span className="pill-badge-small">Coming Soon</span>
            </button>
            <p className="mobile-drawer-meta">Available for Windows &amp; Linux</p>
          </div>
        </div>
      </div>
    </header>
  );
}

