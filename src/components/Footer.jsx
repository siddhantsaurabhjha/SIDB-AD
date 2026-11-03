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
              <img
                src="/assets/logo.png"
                alt="SIDB Browser Official Logo"
                className="footer-logo-img"
              />
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

