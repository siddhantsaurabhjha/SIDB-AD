import React from 'react';
import { X, Shield, Mail, Terminal } from 'lucide-react';
import { DOWNLOADS } from '../config/downloads';

export default function Modals({
  isPrivacyOpen,
  onClosePrivacy,
  isContactOpen,
  onCloseContact,
}) {
  return (
    <>
      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="modal-backdrop" onClick={onClosePrivacy} role="dialog" aria-modal="true">
          <div className="modal-card glass-panel max-w-xl" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={onClosePrivacy} aria-label="Close dialog">
              <X size={20} />
            </button>

            <div className="modal-header">
              <div className="modal-icon-badge">
                <Shield size={24} className="text-purple" />
              </div>
              <h3 className="modal-title font-display">Privacy Policy</h3>
              <p className="modal-description">Last updated: 2026</p>
            </div>

            <div className="modal-scroll-body">
              <div className="privacy-item">
                <h4>1. Zero Telemetry by Default</h4>
                <p>
                  SIDB is designed with privacy as a foundational principle. We do not track, store, or profile your web browsing history, bookmarks, or searches.
                </p>
              </div>

              <div className="privacy-item">
                <h4>2. Local Data Storage</h4>
                <p>
                  All cache files, session cookies, and local credentials remain strictly isolated on your device and are cleared according to your preferences.
                </p>
              </div>

              <div className="privacy-item">
                <h4>3. Third-Party Services</h4>
                <p>
                  The promotional landing page does not deploy third-party trackers or ad pixels. External links (such as Google Drive for companion packages or official mirrors) follow their respective host privacy policies.
                </p>
              </div>

              <div className="privacy-item">
                <h4>4. Security Commitment</h4>
                <p>
                  We continuously audit built-in shields, ad blockers, and secure socket layer configurations to safeguard your online presence.
                </p>
              </div>
            </div>

            <div className="modal-footer-action">
              <button type="button" onClick={onClosePrivacy} className="btn-secondary w-full">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Support Modal */}
      {isContactOpen && (
        <div className="modal-backdrop" onClick={onCloseContact} role="dialog" aria-modal="true">
          <div className="modal-card glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={onCloseContact} aria-label="Close dialog">
              <X size={20} />
            </button>

            <div className="modal-header">
              <div className="modal-icon-badge">
                <Mail size={24} className="text-cyan" />
              </div>
              <h3 className="modal-title font-display">Contact SIDB Team</h3>
              <p className="modal-description">
                Have questions, feature suggestions, or feedback? Reach out to our community engineers.
              </p>
            </div>

            <div className="contact-info-list">
              <div className="contact-item">
                <Mail size={18} className="text-cyan" />
                <div>
                  <span className="contact-label">Official Inquiries:</span>
                  <a href="mailto:support@sidb.app" className="contact-link">support@sidb.app</a>
                </div>
              </div>

              <div className="contact-item">
                <Terminal size={18} className="text-purple" />
                <div>
                  <span className="contact-label">GitHub Repository:</span>
                  <a
                    href="https://github.com/siddhantsaurabhjha/SIDB-AD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    github.com/siddhantsaurabhjha/SIDB-AD
                  </a>
                </div>
              </div>
            </div>

            <div className="modal-footer-action mt-6">
              <button type="button" onClick={onCloseContact} className="btn-primary w-full">
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
