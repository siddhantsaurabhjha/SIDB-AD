/**
 * Centralized Download Configuration for SIDB and MovieBox.
 * Update download targets and file links here without touching UI components.
 */

export const DOWNLOADS = {
  // MovieBox Google Drive Direct Download (triggers download immediately)
  MOVIEBOX_DOWNLOAD_URL: 'https://drive.google.com/uc?export=download&id=15JUijWtabID9-W1zU0vK76vNNhkCmfB8',

  // MovieBox Google Drive Shared Viewer URL (fallback in case of browser/Drive confirmation blocks)
  MOVIEBOX_SHARE_URL: 'https://drive.google.com/file/d/15JUijWtabID9-W1zU0vK76vNNhkCmfB8/view?usp=sharing',

  // SIDB Desktop Browser Downloads (empty until official releases are deployed)
  SIDB_WINDOWS_URL: '',
  SIDB_LINUX_URL: '',

  // MovieBox metadata
  MOVIEBOX_VERSION: '1.0.0',
  MOVIEBOX_PLATFORM: 'Android',
  MOVIEBOX_FORMAT: 'APK',
};

export default DOWNLOADS;

