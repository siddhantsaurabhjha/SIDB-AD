import React, { useState } from 'react';
import { Download, ExternalLink, Film, Tv, PlaySquare, Trophy, Smartphone, CheckCircle2 } from 'lucide-react';
import { DOWNLOADS } from '../config/downloads';

export default function MovieBox() {
  const [downloadInitiated, setDownloadInitiated] = useState(false);

  const categories = [
    { name: 'Movies', icon: Film, color: 'text-cyan' },
    { name: 'Web Series', icon: Tv, color: 'text-purple' },
    { name: 'Anime', icon: PlaySquare, color: 'text-pink' },
    { name: 'Live Cricket', icon: Trophy, color: 'text-emerald' },
  ];

  const handleDownload = () => {
    setDownloadInitiated(true);
    // Reliable browser-compatible download trigger:
    // Window.open direct download URL in a new context, so Google Drive starts the download or shows confirmation
    window.open(DOWNLOADS.MOVIEBOX_DOWNLOAD_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="moviebox" className="moviebox-section">
      <div className="container">
        {/* Glow Effects */}
        <div className="moviebox-ambient-glow" aria-hidden="true" />

        <div className="moviebox-card glass-panel">
          <div className="moviebox-grid">
            {/* Left Content Side */}
            <div className="moviebox-details">
              <div className="moviebox-badge-row">
                <span className="pill-badge pill-badge-cyan">
                  <span className="pulse-dot" />
                  <span>FEATURED COMPANION APP</span>
                </span>
                <span className="platform-tag">
                  <Smartphone size={14} />
                  <span>Android Exclusive</span>
                </span>
              </div>

              <h2 className="moviebox-title font-display">
                <span className="text-gradient">MovieBox</span>
              </h2>

              <p className="moviebox-lead">
                Watch Movies, Web Series, Anime and Live Cricket in one place.
              </p>

              {/* Entertainment Pillars / Badges */}
              <div className="entertainment-badges">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <div key={cat.name} className="cat-pill">
                      <Icon size={16} className={cat.color} />
                      <span>{cat.name}</span>
                    </div>
                  );
                })}
              </div>

              {/* Specs Grid */}
              <div className="moviebox-specs">
                <div className="spec-item">
                  <span className="spec-label">Version</span>
                  <span className="spec-val">{DOWNLOADS.MOVIEBOX_VERSION}</span>
                </div>
                <div className="spec-divider" />
                <div className="spec-item">
                  <span className="spec-label">Platform</span>
                  <span className="spec-val">{DOWNLOADS.MOVIEBOX_PLATFORM}</span>
                </div>
                <div className="spec-divider" />
                <div className="spec-item">
                  <span className="spec-label">File Format</span>
                  <span className="spec-val">{DOWNLOADS.MOVIEBOX_FORMAT}</span>
                </div>
              </div>

              {/* Action & Direct Download */}
              <div className="moviebox-actions">
                <a
                  href={DOWNLOADS.MOVIEBOX_DOWNLOAD_URL}
                  onClick={handleDownload}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary moviebox-download-btn"
                  aria-label="Download MovieBox APK"
                >
                  <Download size={22} className="download-icon" />
                  <span>Download MovieBox APK</span>
                </a>

                {/* Direct Instruction Note */}
                <p className="download-instruction">
                  Tap the button to start downloading.
                </p>

                {/* Fallback Link to Original Drive Share */}
                <div className="fallback-wrapper">
                  <a
                    href={DOWNLOADS.MOVIEBOX_SHARE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fallback-link"
                  >
                    <span>Having trouble downloading? Open Google Drive.</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                {downloadInitiated && (
                  <div className="download-confirmation-hint" role="status">
                    <CheckCircle2 size={16} className="text-cyan flex-shrink-0" />
                    <span>
                      Download request sent. If Google Drive prompts for large-file confirmation, simply click "Download anyway".
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Visual Side: Premium Phone / App Mockup */}
            <div className="moviebox-visual">
              <div className="phone-mockup-frame">
                <div className="phone-notch" />
                <div className="phone-screen-content">
                  {/* Mock App Header */}
                  <div className="app-header">
                    <div className="app-logo">MovieBox</div>
                    <div className="app-status">LIVE</div>
                  </div>

                  {/* Highlight Carousel Card */}
                  <div className="app-featured-banner">
                    <div className="banner-badge">Trending #1</div>
                    <div className="banner-title">Cinema &amp; Series Hub</div>
                    <div className="banner-sub">HD Streaming • Zero Buffering</div>
                  </div>

                  {/* Grid of channels */}
                  <div className="app-categories-grid">
                    <div className="app-cat-card">
                      <Film size={20} className="text-cyan" />
                      <span>Movies</span>
                    </div>
                    <div className="app-cat-card">
                      <Tv size={20} className="text-purple" />
                      <span>Web Series</span>
                    </div>
                    <div className="app-cat-card">
                      <PlaySquare size={20} className="text-pink" />
                      <span>Anime</span>
                    </div>
                    <div className="app-cat-card">
                      <Trophy size={20} className="text-emerald" />
                      <span>Live Cricket</span>
                    </div>
                  </div>

                  {/* Android Package Badge */}
                  <div className="app-verified-badge">
                    <CheckCircle2 size={14} className="text-cyan" />
                    <span>Verified Android Package (v1.0.0)</span>
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

