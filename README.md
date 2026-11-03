# SIDB-AD — Promotional Landing Website

> **A Browser Built Around You.**  
> Official promotional landing website for **SIDB Browser** and **MovieBox APK**.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Built with Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react)](https://react.dev/)
[![Netlify Ready](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify)](https://www.netlify.com/)

---

## 🚀 Overview

**SIDB** is a modern, fast, and private desktop browser engineered for simplicity, low resource usage, and a distraction-free browsing experience on **Windows** and **Linux**.

This repository houses the mobile-first, high-performance promotional landing page, featuring:
- **SIDB Desktop Browser Showcase**: Highlighting ad-blocking, private mode, speed optimization, and built-in productivity utilities.
- **MovieBox Companion App Promotion**: Direct download integration for the MovieBox Android APK (v1.0.0) with Google Drive fallback support.
- **Glassmorphic Dark UI**: Deep black background, dark navy surfaces, vibrant purple and electric blue gradients, and fluid mobile ergonomics.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Pure CSS3 with custom design tokens, responsive CSS Grid/Flexbox, and hardware-accelerated transitions
- **Deployment**: Configured for static hosting on [Netlify](https://www.netlify.com/)

---

## 📱 Mobile-First Design & Viewport Support

Designed and tested to deliver responsive experiences across all screen sizes without horizontal overflow:
- **Compact Mobile**: `320px`, `360px`, `375px`
- **Standard Mobile**: `390px`, `414px`, `430px`
- **Tablets & Laptops**: `768px`, `1024px`
- **Desktops & Ultrawide**: `1200px+`

---

## ⚙️ Download Configuration

All download links and metadata are centralized in a single configuration file for easy maintenance:

📂 `src/config/downloads.js`

```javascript
export const DOWNLOADS = {
  // Official SIDB Browser Website
  SIDB_OFFICIAL_URL: 'https://sidb.netlify.app/',

  // MovieBox Direct Download via Google Drive
  MOVIEBOX_DOWNLOAD_URL: 'https://drive.google.com/uc?export=download&id=15JUijWtabID9-W1zU0vK76vNNhkCmfB8',

  // Fallback Google Drive share link for browser confirmation bypass
  MOVIEBOX_SHARE_URL: 'https://drive.google.com/file/d/15JUijWtabID9-W1zU0vK76vNNhkCmfB8/view?usp=sharing',

  // SIDB Desktop release URLs
  SIDB_WINDOWS_URL: '',
  SIDB_LINUX_URL: '',

  // Release metadata
  MOVIEBOX_VERSION: '1.0.0',
  MOVIEBOX_PLATFORM: 'Android',
  MOVIEBOX_FORMAT: 'APK',
};
```

---

## 💻 Local Development

### 1. Prerequisites
- **Node.js**: v18.x or higher (tested on Node v20+ / v26)
- **npm**: v9.x or higher

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized static production bundle will be generated in `dist/`.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Netlify Deployment

This repository is pre-configured for automated continuous deployment with Netlify via `netlify.toml`:

| Setting | Value |
| :--- | :--- |
| **Build Command** | `npm run build` |
| **Publish Directory** | `dist` |
| **SPA Redirects** | Configured in `netlify.toml` (`/*` -> `/index.html`) |
| **Security Headers** | `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` |

### Manual Netlify Setup
1. Log in to [Netlify](https://app.netlify.com/).
2. Click **Add new site** > **Import an existing project**.
3. Select **GitHub** and authorize access to `siddhantsaurabhjha/SIDB-AD`.
4. Netlify will automatically detect the settings from `netlify.toml`.
5. Click **Deploy SIDB-AD**.

---

## 📄 License

&copy; 2026 SIDB. Built for high-speed, privacy-first web browsing.

