import React from 'react';
import { ShieldAlert, Zap, EyeOff, Wrench, Check } from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      id: 'ad-blocker',
      title: 'Ad Blocker',
      tagline: 'Cleaner Web',
      description: 'Browse with fewer unwanted ads.',
      details: 'Blocks intrusive trackers, pop-ups and high-bandwidth banners automatically for a distraction-free experience.',
      icon: ShieldAlert,
      accent: 'cyan',
    },
    {
      id: 'fast-lightweight',
      title: 'Fast & Lightweight',
      tagline: 'Maximum Speed',
      description: 'Enjoy a smooth browsing experience.',
      details: 'Optimized rendering engine tuned for instantaneous tab switching and dramatically reduced RAM consumption.',
      icon: Zap,
      accent: 'purple',
    },
    {
      id: 'private-mode',
      title: 'Private Mode',
      tagline: 'Complete Discretion',
      description: 'Browse privately when you need it.',
      details: 'Leave zero digital footprint with isolated sessions that clear history, cookies, and local caches automatically.',
      icon: EyeOff,
      accent: 'blue',
    },
    {
      id: 'useful-tools',
      title: 'Useful Tools',
      tagline: 'Built-in Utilities',
      description: 'Capture, QR and other useful tools.',
      details: 'Instant full-page screenshot capture, built-in QR generator and scanner, and quick reading mode at your fingertips.',
      icon: Wrench,
      accent: 'pink',
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="pill-badge pill-badge-cyan">
            <span>CORE CAPABILITIES</span>
          </span>
          <h2 className="section-title font-display">
            Built for How You <span className="text-gradient">Actually Browse</span>
          </h2>
          <p className="section-subtitle">
            Every feature in SIDB is designed to remove friction, enhance security, and deliver unprecedented speed.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="features-grid">
          {featuresList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`feature-card glass-panel accent-${item.accent}`}
              >
                {/* Neon Top Bar */}
                <div className="feature-card-glow-bar" />

                <div className="feature-card-content">
                  <div className="feature-icon-wrapper">
                    <Icon size={28} className={`feature-icon-svg icon-${item.accent}`} />
                  </div>

                  <div className="feature-meta">
                    <span className="feature-number">0{index + 1}</span>
                    <span className="feature-tagline">{item.tagline}</span>
                  </div>

                  <h3 className="feature-name font-display">{item.title}</h3>

                  <p className="feature-primary-desc">
                    {item.description}
                  </p>

                  <p className="feature-detail-desc">
                    {item.details}
                  </p>

                  <div className="feature-footer">
                    <span className="feature-status">
                      <Check size={14} className="feature-check" />
                      <span>Built-in standard</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

