import React from 'react';
import { Cpu, Terminal, LayoutGrid, Wrench } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: 'Windows & Linux',
      subtitle: 'Native Desktop Power',
      description: 'Engineered specifically for desktop environments with native architecture, high efficiency, and cross-distro compatibility.',
      icon: Terminal,
      highlight: 'Windows | Linux',
    },
    {
      title: 'Modern Interface',
      subtitle: 'Thoughtful Ergonomics',
      description: 'A clean, distraction-free UI designed around simplicity and speed. Clean tabs, dark canvas, and customizable views.',
      icon: LayoutGrid,
      highlight: 'Minimal & Fluent',
    },
    {
      title: 'Helpful Built-in Tools',
      subtitle: 'No Clunky Extensions',
      description: 'Integrated screenshot utilities, QR tools, ad-blocking, and media enhancers built directly into the core browser.',
      icon: Wrench,
      highlight: 'Built-in Utilities',
    },
    {
      title: 'Performance-First Engine',
      subtitle: 'Low Resource Footprint',
      description: 'Optimized memory handling ensures your workstation remains responsive even with dozens of active research tabs.',
      icon: Cpu,
      highlight: 'Speed & Privacy',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header text-center">
          <span className="pill-badge">
            <span>OUR MISSION</span>
          </span>
          <h2 className="about-title font-display">
            Meet <span className="text-gradient">SIDB</span>
          </h2>
          <p className="about-description">
            SIDB is a modern desktop browser built around simplicity, performance and a better browsing experience.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="about-grid">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="about-card glass-panel">
                <div className="about-card-header">
                  <div className="about-icon-box">
                    <Icon size={24} className="about-icon" />
                  </div>
                  <span className="about-highlight-pill">{pillar.highlight}</span>
                </div>

                <div className="about-card-body">
                  <h3 className="about-card-title font-display">{pillar.title}</h3>
                  <span className="about-card-subtitle">{pillar.subtitle}</span>
                  <p className="about-card-text">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Promise Banner */}
        <div className="about-banner glass-panel">
          <div className="about-banner-content">
            <div className="about-banner-text">
              <h3 className="about-banner-title font-display">A New Standard for Daily Browsing</h3>
              <p className="about-banner-p">
                We believe your browser should adapt to you, protect your personal data by default, and never slow down your computer.
              </p>
            </div>
            <div className="about-banner-tags">
              <span className="tech-badge">Zero Bloat</span>
              <span className="tech-badge">Fast Startup</span>
              <span className="tech-badge">Privacy First</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

