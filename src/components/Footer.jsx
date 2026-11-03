import React from 'react';
import { ChevronUp } from 'lucide-react';

export default function Footer({ onOpenPrivacyModal, onOpenContactModal }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
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
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Row */}
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <svg className="footer-logo-svg" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="8" fill="#0d1424" stroke="url(#footer-logo-grad)" strokeWidth="1.5" />
                <path
                  d="M24 13C24 10.5 22 8.5 19.5 8.5H15C12 8.5 9.5 11 9.5 14C9.5 16.2 11.2 18 14 18.6L22 20.2C24.5 21 26.5 22.5 26.5 25.5C26.5 28.5 24 31 21 31H15.5C13 31 11 29 11 26.5"
                  stroke="url(#footer-logo-grad)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="24.5" cy="13" r="1.8" fill="#38bdf8" />
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38bdf8" />
                    <stop offset="0.5" stopColor="#818cf8" />
                    <stop offset="1" stopColor="#c084fc" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="footer-brand-title font-display">SIDB</span>
            </div>
            <p className="footer-tagline">
              A Browser Built Around You. Engineered for modern web experiences with speed, native security, and elegance.
            </p>
            <div className="footer-platform-badge">
              <span>Windows</span>
              <span>•</span>
              <span>Linux</span>
              <span>•</span>
              <span>Android (MovieBox)</span>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleSmoothScroll(e, '#features')}>
                  Features
                </a>
              </li>
              <li>
                <a href="#moviebox" onClick={(e) => handleSmoothScroll(e, '#moviebox')}>
                  MovieBox
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Support &amp; Legal</h4>
            <ul className="footer-links-list">
              <li>
                <button
                  type="button"
                  onClick={onOpenContactModal}
                  className="footer-btn-link"
                >
                  Contact Support
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacyModal}
                  className="footer-btn-link"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <a
                  href="https://github.com/siddhantsaurabhjha/SIDB-AD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-btn-link"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; 2026 SIDB. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

