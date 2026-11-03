import React from 'react';
import { ExternalLink, Compass, Shield, Zap } from 'lucide-react';
import { DOWNLOADS } from '../config/downloads';

export default function Hero() {
  const handleScrollToFeatures = (e) => {
    e.preventDefault();
    const element = document.querySelector('#features');
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
    <section id="home" className="hero-section">
      {/* Background ambient lighting */}
      <div className="hero-glow-sphere top-glow" aria-hidden="true" />
      <div className="hero-glow-sphere cyan-glow" aria-hidden="true" />

      <div className="container">
        <div className="hero-content">
          {/* Small Top Label */}
          <div className="hero-badge-wrapper">
            <span className="pill-badge">
              <span className="pulse-dot" />
              <span>INTRODUCING SIDB</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title font-display">
            A Browser Built <br className="hero-br" />
            <span className="text-gradient">Around You.</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            A modern, fast and private browser with a clean design, powerful tools and a better browsing experience.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a
              href={DOWNLOADS.SIDB_OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hero-btn-main"
              aria-label="Visit official SIDB browser website"
            >
              <span>Visit SIDB</span>
              <ExternalLink size={18} />
            </a>

            <a
              href="#features"
              onClick={handleScrollToFeatures}
              className="btn-secondary hero-btn-sub"
            >
              <Compass size={20} />
              <span>Explore Features</span>
            </a>
          </div>

          {/* Platform Support Indicator */}
          <div className="hero-platforms">
            <span className="platform-label">Supported Platforms:</span>
            <div className="platform-pills">
              <span className="platform-item">
                <svg className="platform-icon" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.949-1.801" />
                </svg>
                <span>Windows</span>
              </span>
              <span className="platform-divider">|</span>
              <span className="platform-item">
                <svg className="platform-icon" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M12.001 2c-5.523 0-10 4.477-10 10 0 4.42 2.868 8.167 6.84 9.49.5.093.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <span>Linux</span>
              </span>
            </div>
          </div>

          {/* Premium Interactive Browser Mockup */}
          <div className="hero-mockup-container">
            <div className="browser-mockup glass-panel">
              {/* Browser Window Chrome */}
              <div className="browser-header">
                <div className="browser-controls">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>

                {/* Tabs */}
                <div className="browser-tabs">
                  <div className="browser-tab active">
                    <span className="tab-indicator" />
                    <span className="tab-title">SIDB — Official Site</span>
                  </div>
                  <div className="browser-tab inactive">
                    <span className="tab-title">MovieBox APK</span>
                  </div>
                </div>

                {/* Mini Actions */}
                <div className="browser-nav-icons">
                  <div className="mini-icon-btn"><Shield size={14} className="text-cyan" /></div>
                  <div className="mini-icon-btn"><Zap size={14} className="text-purple" /></div>
                </div>
              </div>

              {/* URL Bar */}
              <div className="browser-omnibox">
                <div className="omnibox-wrapper">
                  <Shield size={14} className="omnibox-shield" />
                  <span className="omnibox-text">https://sidb.netlify.app</span>
                  <span className="omnibox-badge">Official Site</span>
                </div>
              </div>

              {/* Browser Body Screen */}
              <div className="browser-screen">
                <div className="screen-hero">
                  <div className="screen-glow" />
                  <div className="screen-tag">SIDB DESKTOP BROWSER</div>
                  <h2 className="screen-title font-display">Fast. Private. Clutter-Free.</h2>
                  <p className="screen-sub">Engineered with low memory footprint and built-in protection.</p>
                  
                  {/* Floating feature pills in browser view */}
                  <div className="screen-stats-grid">
                    <div className="stat-card">
                      <div className="stat-icon-wrap"><Zap size={18} className="text-cyan" /></div>
                      <div>
                        <div className="stat-val">Ultra Fast</div>
                        <div className="stat-label">Minimal resource usage</div>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon-wrap"><Shield size={18} className="text-purple" /></div>
                      <div>
                        <div className="stat-val">Zero Trackers</div>
                        <div className="stat-label">Built-in privacy shield</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
